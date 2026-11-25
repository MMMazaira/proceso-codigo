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
        <li>
          Titular: {legal.holder}, que actúa con el nombre comercial {legal.tradeName}
        </li>
        {legal.nif && <li>NIF: {legal.nif}</li>}
        <li>Domicilio: {legal.address}</li>
        <li>Correo: {legal.email}</li>
        <li>Teléfono: {site.phone}</li>
      </ul>
      <h2>Objeto</h2>
      <p>
        {site.url.replace("https://", "")} informa sobre los servicios de {legal.tradeName}: automatizaciones con
        inteligencia artificial, desarrollo y mantenimiento web, consultoría Lean Manufacturing y formación para
        empresas. El uso del sitio implica la aceptación de estas condiciones.
      </p>
      <h2>Responsabilidad</h2>
      <p>
        La información de esta web es orientativa. Los casos del blog son ilustrativos y las cifras, estimaciones.
        Las condiciones de cada servicio se concretan en la propuesta que se entrega a cada cliente.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, imágenes, logotipos y el código de este sitio pertenecen a su titular o se usan con permiso. No
        se permite su reproducción sin autorización.
      </p>
      <h2>Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación española.</p>
      <p>Última actualización: {legal.updated}.</p>
    </LegalPage>
  );
}
