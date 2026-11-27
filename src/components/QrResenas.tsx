"use client";

import { useMemo, useState } from "react";
import qrcode from "qrcode-generator";

// Herramienta gratuita: cartel A5 con QR para pedir reseñas en Google.
// Todo se genera en el navegador: no se envía ni se guarda ningún dato.

type Idioma = "es" | "ca" | "bi";

const TEXTOS = {
  es: { q: "¿Te ha gustado?", s: "Déjanos tu opinión en Google", c: "Escanea el código con la cámara del móvil", g: "¡Gracias!" },
  ca: { q: "T'ha agradat?", s: "Deixa'ns la teva opinió a Google", c: "Escaneja el codi amb la càmera del mòbil", g: "Gràcies!" },
};

const COLORES = [
  { valor: "#072b4a", nombre: "Azul marino" },
  { valor: "#00707f", nombre: "Verde azulado" },
  { valor: "#b3261e", nombre: "Rojo" },
  { valor: "#2e7d32", nombre: "Verde" },
  { valor: "#e37400", nombre: "Naranja" },
  { valor: "#1f1f1f", nombre: "Negro" },
];

const EJEMPLO = "https://g.page/r/EJEMPLO123/review";
const ENLACE_VALIDO = /^https:\/\/(g\.page\/r\/|search\.google\.com\/local\/writereview|maps\.app\.goo\.gl\/|g\.co\/kgs\/)/;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

function estrella(cx: number, cy: number, r: number) {
  const p: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.45 : r;
    p.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${p.join(" ")}" fill="#f4b400"/>`;
}

/** SVG del cartel en milímetros (A5: 148 × 210). width/height opcionales para exportar a imagen. */
export function cartelSvg(nombre: string, enlace: string, idioma: Idioma, color: string, px?: { w: number; h: number }) {
  const W = 148;
  const H = 210;
  const qr = qrcode(0, "M");
  qr.addData(enlace);
  qr.make();
  const n = qr.getModuleCount();
  let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;

  const main = TEXTOS[idioma === "ca" ? "ca" : "es"];
  const alt = idioma === "bi" ? TEXTOS.ca : null;
  const size = alt ? 74 : 86;
  const x0 = (W - size) / 2;
  const y0 = alt ? 95 : 92;
  let estrellas = "";
  for (let i = 0; i < 5; i++) estrellas += estrella(W / 2 - 24 + i * 12, alt ? 81 : 79, 5);
  const dims = px ? ` width="${px.w}" height="${px.h}"` : "";

  return (
    `<svg viewBox="0 0 ${W} ${H}"${dims} xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif">` +
    `<rect width="${W}" height="${H}" fill="#ffffff"/>` +
    `<rect width="${W}" height="34" fill="${color}"/>` +
    `<text x="${W / 2}" y="21.5" text-anchor="middle" font-size="${nombre.length > 26 ? 7.5 : 10}" font-weight="700" fill="#ffffff">${esc(nombre)}</text>` +
    `<text x="${W / 2}" y="52" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f1d2b">${esc(main.q)}</text>` +
    `<text x="${W / 2}" y="63" text-anchor="middle" font-size="7.2" fill="#0f1d2b">${esc(main.s)}</text>` +
    (alt ? `<text x="${W / 2}" y="71" text-anchor="middle" font-size="5.4" font-style="italic" fill="#4a5864">${esc(`${alt.q} ${alt.s}`)}</text>` : "") +
    estrellas +
    `<rect x="${x0 - 4}" y="${y0 - 4}" width="${size + 8}" height="${size + 8}" rx="3" fill="#ffffff" stroke="${color}" stroke-width="1.2"/>` +
    `<g transform="translate(${x0} ${y0}) scale(${size / n})"><path d="${d}" fill="#0f1d2b"/></g>` +
    `<text x="${W / 2}" y="${y0 + size + 13}" text-anchor="middle" font-size="5.6" fill="#4a5864">${esc(main.c)}</text>` +
    (alt ? `<text x="${W / 2}" y="${y0 + size + 20}" text-anchor="middle" font-size="4.8" font-style="italic" fill="#4a5864">${esc(alt.c)}</text>` : "") +
    `<text x="${W / 2}" y="${H - 9}" text-anchor="middle" font-size="9" font-weight="700" fill="${color}">${esc(alt ? `${main.g} · ${alt.g}` : main.g)}</text>` +
    `</svg>`
  );
}

export default function QrResenas() {
  const [nombre, setNombre] = useState("");
  const [enlace, setEnlace] = useState("");
  const [idioma, setIdioma] = useState<Idioma>("es");
  const [color, setColor] = useState(COLORES[0].valor);
  const [descargando, setDescargando] = useState(false);

  const nombreFinal = nombre.trim() || "Tu negocio";
  const enlaceFinal = enlace.trim() || EJEMPLO;
  const enlaceOk = !enlace.trim() || ENLACE_VALIDO.test(enlace.trim());
  const listo = Boolean(nombre.trim() && enlace.trim() && enlaceOk);
  const svg = useMemo(() => cartelSvg(nombreFinal, enlaceFinal, idioma, color), [nombreFinal, enlaceFinal, idioma, color]);

  // Exporta el cartel como PNG a 300 ppp (1748 × 2480 px, tamaño A5).
  async function descargarPng() {
    setDescargando(true);
    try {
      const fuente = cartelSvg(nombreFinal, enlaceFinal, idioma, color, { w: 1748, h: 2480 });
      const url = URL.createObjectURL(new Blob([fuente], { type: "image/svg+xml;charset=utf-8" }));
      const img = new Image();
      await new Promise<void>((ok, ko) => {
        img.onload = () => ok();
        img.onerror = () => ko(new Error("No se pudo preparar la imagen"));
        img.src = url;
      });
      const canvas = document.createElement("canvas");
      canvas.width = 1748;
      canvas.height = 2480;
      canvas.getContext("2d")?.drawImage(img, 0, 0, 1748, 2480);
      URL.revokeObjectURL(url);
      const png = await new Promise<Blob | null>((ok) => canvas.toBlob(ok, "image/png"));
      if (!png) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(png);
      a.download = `cartel-resenas-${nombreFinal.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "negocio"}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } finally {
      setDescargando(false);
    }
  }

  const campo = "w-full rounded-sm border border-line bg-bg px-3 py-2 text-ink focus:outline-2 focus:outline-accent";

  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      {/* Al imprimir, solo sale el cartel, a tamaño A5 */}
      <style>{`@media print{@page{size:A5;margin:0}body *{visibility:hidden}#cartel-qr,#cartel-qr *{visibility:visible}#cartel-qr{position:fixed;inset:0;width:148mm;height:210mm;box-shadow:none}}`}</style>

      <form className="grid gap-6 rounded-md border border-line bg-bg p-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2">
          <label htmlFor="qr-nombre" className="font-semibold text-ink">
            Nombre de tu negocio
          </label>
          <input id="qr-nombre" className={campo} maxLength={40} value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Taller Mecànic Piera" />
        </div>

        <div className="grid gap-2">
          <label htmlFor="qr-enlace" className="font-semibold text-ink">
            Enlace para pedir reseñas
          </label>
          <input id="qr-enlace" type="url" spellCheck={false} className={campo} value={enlace} onChange={(e) => setEnlace(e.target.value)} placeholder="https://g.page/r/…/review" />
          {!enlaceOk && (
            <p className="rounded-sm bg-surface px-3 py-2 text-sm text-ink">
              Este enlace no parece de Google Reseñas. Debería empezar por https://g.page/r/. Revisa que sea el de «Pedir reseñas».
            </p>
          )}
          <details className="text-sm text-muted">
            <summary className="cursor-pointer font-semibold text-accent">¿Dónde encuentro este enlace?</summary>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>Busca tu negocio en Google con la sesión de tu cuenta iniciada.</li>
              <li>En tu Perfil de Empresa, pulsa «Pedir reseñas».</li>
              <li>Copia el enlace que aparece (empieza por https://g.page/r/) y pégalo aquí.</li>
            </ol>
          </details>
        </div>

        <fieldset className="grid gap-2">
          <legend className="mb-2 font-semibold text-ink">Idioma del cartel</legend>
          <div className="flex flex-wrap gap-2">
            {([["es", "Castellano"], ["ca", "Català"], ["bi", "Los dos"]] as const).map(([v, l]) => (
              <label key={v} className="flex cursor-pointer items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5 text-sm text-ink">
                <input type="radio" name="qr-idioma" value={v} checked={idioma === v} onChange={() => setIdioma(v)} />
                {l}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 font-semibold text-ink">Color</legend>
          <div className="flex flex-wrap gap-2">
            {COLORES.map((c) => (
              <label
                key={c.valor}
                title={c.nombre}
                className={`relative block h-9 w-9 cursor-pointer rounded-full border-2 ${color === c.valor ? "border-ink" : "border-transparent"}`}
                style={{ background: c.valor }}
              >
                <input type="radio" name="qr-color" className="absolute inset-0 cursor-pointer opacity-0" aria-label={c.nombre} checked={color === c.valor} onChange={() => setColor(c.valor)} />
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={descargarPng}
            disabled={!listo || descargando}
            className="rounded-sm bg-accent px-5 py-3 font-semibold text-bg hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {descargando ? "Preparando…" : "Descargar imagen"}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            disabled={!listo}
            className="rounded-sm border border-accent px-5 py-3 font-semibold text-accent hover:bg-surface disabled:cursor-not-allowed disabled:opacity-50"
          >
            Imprimir en A5
          </button>
        </div>
        {!listo && <p className="text-sm text-muted">Escribe el nombre y pega tu enlace para descargar o imprimir el cartel.</p>}
        <p className="text-xs text-muted">Todo se genera en tu navegador: no guardamos tu enlace ni ningún dato.</p>
      </form>

      <div className="grid justify-items-center gap-3 md:sticky md:top-24">
        <div
          id="cartel-qr"
          role="img"
          aria-label={`Vista previa del cartel de reseñas de ${nombreFinal}`}
          className="aspect-[148/210] w-full max-w-sm overflow-hidden rounded-sm bg-white shadow-xl [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <p className="text-sm text-muted">Tamaño A5 (14,8 × 21 cm). Se puede imprimir en casa en un folio A4.</p>
      </div>
    </div>
  );
}
