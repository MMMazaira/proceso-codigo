import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal, site } from "@/content/site";

export const metadata: Metadata = { title: "Aviso legal", robots: { index: false } };

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal">
      <p>
        En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio
        electrónico (LSSI-CE), se informa de los datos del titular de este sitio web.
      </p>
      <ul>
        <li>Titular: {legal.holder}</li>
        <li>NIF: {legal.nif}</li>
        <li>Domicilio: {legal.address}</li>
        <li>Correo: {legal.email}</li>
      </ul>
      <h2>Uso del sitio</h2>
      <p>
        {site.name} ofrece información sobre servicios de consultoría industrial, formación técnica y
        desarrollo web. El uso del sitio implica la aceptación de estas condiciones.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, imágenes y el código de este sitio pertenecen a sus titulares. No se permite su
        reproducción sin autorización.
      </p>
    </LegalPage>
  );
}
