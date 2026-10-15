import Header from "./Header";
import Footer from "./Footer";

// Estructura común de todas las páginas: cabecera, contenido y pie.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}

// Cabecera de cada página interior: título (h1) y frase de introducción.
export function PageIntro({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <h1 className="max-w-3xl text-[clamp(2.1rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">{intro}</p>}
      </div>
    </section>
  );
}
