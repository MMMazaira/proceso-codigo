import Link from "next/link";

// Franja de la portada, justo debajo del título: lleva a la herramienta gratuita del QR de reseñas.
export default function HerramientaBanner() {
  return (
    <section aria-label="Herramienta gratuita" className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-sm bg-accent px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-bg">Gratis</span>
          <p className="leading-relaxed text-ink">
            <strong>¿Quieres más reseñas en Google?</strong> Crea en 1 minuto el cartel con QR para tu mostrador, en castellano o en
            catalán. Sin registrarte.
          </p>
        </div>
        <Link
          href="/herramientas/qr-resenas"
          className="shrink-0 self-start rounded-sm border border-accent px-4 py-2 font-semibold text-accent hover:bg-accent hover:text-bg md:self-auto"
        >
          Crear mi cartel
        </Link>
      </div>
    </section>
  );
}
