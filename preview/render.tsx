import * as React from "react";
(globalThis as any).React = React;
import { renderToStaticMarkup } from "react-dom/server";
import { writeFileSync, mkdirSync } from "node:fs";
import Home from "@/app/page";
import Privacidad from "@/app/privacidad/page";
import AvisoLegal from "@/app/aviso-legal/page";

mkdirSync("dist", { recursive: true });
for (const [name, C] of [["index", Home], ["privacidad", Privacidad], ["aviso-legal", AvisoLegal]] as const) {
  const html = renderToStaticMarkup(<C />);
  writeFileSync(`dist/${name}.body.html`, html);
  console.log(name, html.length, "chars");
}
