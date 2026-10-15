import { readFileSync, writeFileSync } from "node:fs";

// Vista previa navegable en un solo HTML: cada ruta es un bloque oculto y
// un pequeño script muestra el que corresponde al hacer clic en un enlace.
const css = readFileSync("../src/app/globals.css", "utf8").replace('@import "tailwindcss";', "");
const img = "data:image/jpeg;base64," + readFileSync("../public/manuel-garcia-gomez.jpg").toString("base64");
const pages = JSON.parse(readFileSync("dist/pages.json", "utf8"));

const slug = (path) => (path === "/" ? "inicio" : path.slice(1));
const blocks = Object.entries(pages)
  .map(([path, html]) => {
    const body = html
      .replaceAll('src="/manuel-garcia-gomez.jpg"', `src="${img}"`)
      .replaceAll('id="contenido"', `id="contenido-${slug(path)}"`)
      .replaceAll('href="#contenido"', `href="#contenido-${slug(path)}"`);
    return `<div data-route="${path}"${path === "/" ? "" : " hidden"}>${body}</div>`;
  })
  .join("\n");

const script = `
<script>
(function () {
  var routes = Array.prototype.slice.call(document.querySelectorAll("[data-route]"));
  function show(path, anchor) {
    var found = routes.some(function (r) { return r.dataset.route === path; });
    if (!found) path = "/";
    routes.forEach(function (r) { r.hidden = r.dataset.route !== path; });
    var target = anchor && document.querySelector('[data-route="' + path + '"] #' + anchor);
    if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
    try { history.replaceState(null, "", path === "/" ? "#" : "#" + path.slice(1)); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href^='/']");
    if (!a) return;
    e.preventDefault();
    var parts = a.getAttribute("href").split("#");
    show(parts[0] || "/", parts[1]);
  });
  var start = (location.hash || "").replace("#", "");
  if (start) show("/" + start);
  document.querySelectorAll("form").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(f), errs = [];
      if ((d.get("name") || "").trim().length < 2) errs.push("nombre");
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(d.get("email") || "")) errs.push("correo");
      if (!d.get("topic")) errs.push("tipo de consulta");
      if ((d.get("message") || "").trim().length < 10) errs.push("mensaje");
      if (!d.get("consent")) errs.push("aceptación de privacidad");
      var s = f.querySelector("[data-preview-status]");
      if (!s) { s = document.createElement("p"); s.setAttribute("data-preview-status", ""); s.setAttribute("role", "status"); s.className = "border-l-4 border-accent bg-bg px-4 py-3 text-sm"; f.appendChild(s); }
      s.textContent = errs.length ? "Revisa: " + errs.join(", ") + "." : "Vista previa: el formulario es válido. En el proyecto Next.js se envía a /api/contact.";
    });
  });
})();
</script>`;

const html = `<title>Proceso &amp; Código</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap">
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.1.11"></script>
<style>:root{--font-archivo:"Archivo";color-scheme:light}body{background:#ffffff;color:#121a22;font-family:"Archivo",ui-sans-serif,system-ui,sans-serif}</style>
<style type="text/tailwindcss">${css}</style>
${blocks}
${script}`;
writeFileSync("dist/proceso-codigo-preview.html", html);
console.log("ok", html.length);
