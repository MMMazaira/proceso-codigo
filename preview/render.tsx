import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { writeFileSync, mkdirSync } from "node:fs";

// La vista previa usa la transformación JSX clásica: React debe existir
// antes de importar los componentes (algunos crean JSX al cargar el módulo).
(globalThis as Record<string, unknown>).React = React;
// Las imágenes opcionales se buscan en la carpeta public del proyecto
process.env.ASSETS_ROOT = new URL("..", import.meta.url).pathname;

async function main() {
  const routes: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    "/": () => import("@/app/page"),
    "/servicios": () => import("@/app/servicios/page"),
    "/proyectos": () => import("@/app/proyectos/page"),
    "/como-trabajamos": () => import("@/app/como-trabajamos/page"),
    "/equipo": () => import("@/app/equipo/page"),
    "/contacto": () => import("@/app/contacto/page"),
    "/privacidad": () => import("@/app/privacidad/page"),
    "/aviso-legal": () => import("@/app/aviso-legal/page"),
  };
  mkdirSync("dist", { recursive: true });
  const out: Record<string, string> = {};
  for (const [path, load] of Object.entries(routes)) {
    (globalThis as Record<string, unknown>).__PREVIEW_PATH__ = path;
    const Page = (await load()).default;
    out[path] = renderToStaticMarkup(<Page />);
    console.log(path.padEnd(18), out[path].length, "chars");
  }
  writeFileSync("dist/pages.json", JSON.stringify(out));
}

main();
