import { existsSync } from "node:fs";
import path from "node:path";

// Devuelve la URL pública de un archivo de /public solo si existe.
// Así una imagen que aún no habéis añadido no deja un hueco roto en la página.
// Solo para componentes de servidor (usa el sistema de archivos al generar la web).
const root = process.env.ASSETS_ROOT ?? process.cwd();

export function publicAsset(file?: string): string | undefined {
  if (!file) return undefined;
  const clean = file.replace(/^\//, "");
  return existsSync(path.join(root, "public", clean)) ? `/${clean}` : undefined;
}
