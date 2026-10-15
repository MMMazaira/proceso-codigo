import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal } from "@/content/site";

export const metadata: Metadata = { title: "Política de privacidad", robots: { index: false } };

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>
        {legal.holder}, con NIF {legal.nif} y domicilio en {legal.address}. Contacto: {legal.email}.
      </p>
      <h2>Qué datos tratamos y para qué</h2>
      <p>
        Los datos que nos envías con el formulario de contacto (nombre, correo, empresa y mensaje) se usan
        solo para responder a tu consulta y, si lo pides, preparar una propuesta.
      </p>
      <h2>Base legal</h2>
      <p>Tu consentimiento, que das al marcar la casilla del formulario y que puedes retirar cuando quieras.</p>
      <h2>Cuánto tiempo los guardamos</h2>
      <p>Mientras dure la relación y, después, el tiempo necesario para atender obligaciones legales.</p>
      <h2>Con quién se comparten</h2>
      <p>
        Con el proveedor de correo y de alojamiento web, que actúan como encargados del tratamiento. No
        cedemos datos a terceros con fines comerciales.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
        {legal.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).
      </p>
    </LegalPage>
  );
}
