import { POST } from "@/app/api/contact/route";
const call = async (body: unknown, ip = "1.1.1.1") =>
  POST(new Request("http://x/api/contact", { method: "POST", headers: { "x-forwarded-for": ip }, body: JSON.stringify(body) }));
const ok = { name: "Ana", email: "ana@empresa.es", company: "", topic: "Formación técnica", message: "Queremos un curso de 5S", consent: true, website: "" };
const show = async (label: string, r: Response) => console.log(label, r.status, await r.text());
await show("válido", await call(ok));
await show("vacío", await call({}));
await show("topic falso", await call({ ...ok, topic: "Hack" }));
await show("honeypot", await call({ ...ok, website: "spam" }));
for (let i = 0; i < 5; i++) await call(ok, "9.9.9.9");
await show("rate limit", await call(ok, "9.9.9.9"));
const bad = await POST(new Request("http://x/api/contact", { method: "POST", body: "no-json" }));
await show("no JSON", bad);
