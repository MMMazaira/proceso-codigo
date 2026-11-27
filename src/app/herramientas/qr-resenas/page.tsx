import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageIntro } from "@/components/PageShell";
import QrResenas from "@/components/QrResenas";
import { site } from "@/content/site";

// Herramienta gratuita (gancho de captación): cartel con QR para pedir reseñas en Google.
export const metadata: Metadata = {
  title: "Cartel con QR para reseñas de Google gratis",
  description:
    "Crea gratis un cartel A5 con código QR para que tus clientes dejen reseñas en Google. En castellano o catalán, listo para imprimir. Sin registrarte.",
  alternates: { canonical: "/herramientas/qr-resenas" },
};

const preguntas = [
  {
    p: "¿Es gratis de verdad?",
    r: "Sí. No tienes que registrarte ni dejar ningún dato. El cartel se genera en tu navegador y lo descargas o lo imprimes al momento.",
  },
  {
    p: "¿Dónde pongo el cartel?",
    r: "Donde el cliente espera o paga: el mostrador, la caja, la sala de espera o la puerta. En un taller o una furgoneta, también funciona en la entrega de la factura.",
  },
  {
    p: "¿Puedo pedir reseñas sin que el cliente tenga que escanear nada?",
    r: "Sí: con un WhatsApp automático después de cada trabajo, que le da las gracias y le manda el enlace directo. Así no depende de que vea el cartel.",
  },
];

export default function QrResenasPage() {
  return (
    <PageShell>
      <PageIntro
        title="Consigue más reseñas en Google con un cartel con QR"
        intro="Tus clientes escanean el código con el móvil y llegan directos a dejar su opinión. Rellena dos datos y descarga el cartel en tamaño A5. Gratis y sin registrarte."
      />

      <section aria-label="Generador del cartel" className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <QrResenas />
        </div>
      </section>

      <section className="bg-primary text-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">¿Y si la reseña se pidiera sola?</h2>
            <p className="mt-2 max-w-xl text-bg/85">
              Después de cada trabajo, tu cliente recibe un WhatsApp de agradecimiento con el enlace a la reseña. Sin acordarte tú y sin
              carteles que se despegan.
            </p>
          </div>
          <Link
            href="/contacto?tema=diagnostico&utm_source=herramienta-qr&utm_medium=web"
            className="shrink-0 self-start rounded-sm bg-teal px-5 py-3 font-semibold text-primary-dark hover:bg-bg md:self-auto"
          >
            Quiero que se pida sola
          </Link>
        </div>
      </section>

      <section aria-labelledby="preguntas-qr">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 id="preguntas-qr" className="text-2xl font-extrabold tracking-tight text-ink">
            Preguntas frecuentes
          </h2>
          <dl className="mt-6 space-y-6">
            {preguntas.map((q) => (
              <div key={q.p}>
                <dt className="font-semibold text-ink">{q.p}</dt>
                <dd className="mt-1 leading-relaxed text-muted">{q.r}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Datos estructurados para Google: herramienta web gratuita y preguntas frecuentes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Cartel con QR para reseñas de Google",
              url: `${site.url}/herramientas/qr-resenas`,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Cualquiera (navegador)",
              inLanguage: ["es", "ca"],
              offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
              provider: { "@type": "Organization", name: site.name, url: site.url },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: preguntas.map((q) => ({
                "@type": "Question",
                name: q.p,
                acceptedAnswer: { "@type": "Answer", text: q.r },
              })),
            },
          ]),
        }}
      />
    </PageShell>
  );
}
