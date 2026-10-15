import { readFileSync, writeFileSync } from "node:fs";
const css = readFileSync("../src/app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const img = "data:image/jpeg;base64," + readFileSync("../public/manuel-garcia-gomez.jpg").toString("base64");
let body = readFileSync("dist/index.body.html", "utf8")
  .replace('src="/manuel-garcia-gomez.jpg"', `src="${img}"`)
  .replaceAll('href="/#', 'href="#')
  .replaceAll('href="/privacidad"', 'href="#contacto"')
  .replaceAll('href="/aviso-legal"', 'href="#contacto"')
  .replaceAll('href="/"', 'href="#"');
const script = `
<script>
document.querySelectorAll("form").forEach(f => f.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(f), errs = [];
  if ((d.get("name")||"").trim().length < 2) errs.push("nombre");
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(d.get("email")||"")) errs.push("correo");
  if (!d.get("topic")) errs.push("tipo de consulta");
  if ((d.get("message")||"").trim().length < 10) errs.push("mensaje");
  if (!d.get("consent")) errs.push("aceptación de privacidad");
  let s = f.querySelector("[data-preview-status]");
  if (!s) { s = document.createElement("p"); s.setAttribute("data-preview-status",""); s.setAttribute("role","status"); s.className = "border-l-4 border-steel bg-paper px-4 py-3 text-sm"; f.appendChild(s); }
  s.textContent = errs.length ? "Revisa: " + errs.join(", ") + "." : "Vista previa: el formulario es válido. En el proyecto Next.js se envía a /api/contact.";
}));
</script>`;
const html = `<title>Proceso &amp; Código</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap">
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.1.11"></script>
<style>:root{--font-archivo:"Archivo";color-scheme:light}body{background:#e6e7e3;color:#14212c;font-family:"Archivo",ui-sans-serif,system-ui,sans-serif}</style>
<style type="text/tailwindcss">${css}</style>
${body}
${script}`;
writeFileSync("dist/proceso-codigo-preview.html", html);
console.log("ok", html.length);
