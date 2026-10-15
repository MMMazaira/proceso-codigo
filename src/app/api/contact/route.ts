import { NextResponse } from "next/server";
import { contact } from "@/content/site";
import { parseContact, validateContact } from "@/lib/contact";

export const runtime = "nodejs";

// Límite sencillo en memoria: 5 envíos por IP cada 10 minutos.
// En Vercel cada instancia tiene su propia memoria; para algo más estricto usa un KV.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: "Demasiados envíos seguidos. Prueba de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  const raw = await req.json().catch(() => null);
  if (!raw) {
    return NextResponse.json({ message: "La petición no tiene un formato válido." }, { status: 400 });
  }

  const data = parseContact(raw);

  // Honeypot relleno: respondemos OK sin enviar nada.
  if (data.website) return NextResponse.json({ ok: true });

  const errors = validateContact(data, contact.topics);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Revisa los campos marcados.", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.info("[contacto] Envío sin proveedor de correo configurado:", {
      ...data,
      message: data.message.slice(0, 200),
    });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>Nueva consulta: ${escapeHtml(data.topic)}</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(data.company || "—")}</p>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `[Web] ${data.topic}: ${data.name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contacto] Resend respondió", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { message: "No se ha podido enviar ahora. Escríbenos directamente por correo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
