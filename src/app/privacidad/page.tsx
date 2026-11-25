import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legal, site } from "@/content/site";

export const metadata: Metadata = { title: "Política de privacidad", robots: { index: false } };

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>
        {legal.holder} ({legal.tradeName}){legal.nif ? `, con NIF ${legal.nif},` : ","} con domicilio en {legal.address}. Contacto:{" "}
        {legal.email} y {site.phone}.
      </p>
      <h2>Qué datos tratamos y para qué</h2>
      <ul>
        <li>
          <strong>Formulario de contacto y diagnóstico:</strong> nombre, correo, empresa y mensaje, para responder a
          tu consulta y, si lo pides, preparar una propuesta.
        </li>
        <li>
          <strong>WhatsApp, teléfono y correo:</strong> los datos que nos envíes por estos medios, con la misma
          finalidad.
        </li>
        <li>
          <strong>Clientes:</strong> los datos necesarios para prestar el servicio contratado y facturarlo.
        </li>
        <li>
          <strong>Medición de visitas:</strong> datos de navegación anónimos o agregados (ver «Cookies y medición»).
        </li>
      </ul>
      <h2>Base legal</h2>
      <p>
        Tu consentimiento, que das al marcar la casilla del formulario, al escribirnos o al aceptar las cookies, y que
        puedes retirar cuando quieras. Si contratas un servicio, la ejecución del contrato y las obligaciones legales
        (por ejemplo, fiscales).
      </p>
      <h2>Cuánto tiempo los guardamos</h2>
      <p>
        Las consultas que no terminan en contratación, un máximo de un año. Los datos de clientes, mientras dure la
        relación y, después, el tiempo que exigen las obligaciones legales.
      </p>
      <h2>Con quién se comparten</h2>
      <p>No cedemos datos a terceros con fines comerciales. Usamos estos proveedores, que tratan los datos por encargo:</p>
      <ul>
        <li>Vercel Inc. (alojamiento de la web).</li>
        <li>Resend (envío de los correos del formulario).</li>
        <li>Cloudflare (gestión del dominio y reenvío del correo) y Google (correo electrónico).</li>
        <li>Meta / WhatsApp, si eliges contactar por WhatsApp.</li>
        <li>Microsoft (Clarity), solo si aceptas las cookies de medición.</li>
      </ul>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En ese caso lo hacen con
        las garantías que exige el RGPD, como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales
        tipo de la Comisión Europea.
      </p>
      <h2 id="cookies">Cookies y medición de visitas</h2>
      <p>
        Usamos Vercel Analytics para contar visitas de forma agregada. No usa cookies ni identifica a las
        personas.
      </p>
      <p>
        Si aceptas las cookies en el aviso de la web, también usamos Microsoft Clarity (Microsoft Corporation)
        para ver de forma anónima cómo se navega por la web: clics, desplazamientos y mapas de calor. Clarity
        oculta el texto que escribes en los formularios. Usa cookies propias de Clarity (como _clck y _clsk)
        que duran hasta un año. Si no las aceptas, Clarity no se carga. Puedes cambiar tu elección cuando
        quieras desde el enlace «Cookies» del pie de la página.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
        {legal.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).
      </p>
      <p>Última actualización: {legal.updated}.</p>
    </LegalPage>
  );
}
