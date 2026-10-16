import { images } from "@/content/site";
import Backdrop from "./Backdrop";
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

// Cabecera de cada página interior: título (h1) y frase de introducción sobre imagen de fondo.
export function PageIntro({ title, intro, image = images.pageHeader }: { title: string; intro?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden text-bg">
      <Backdrop image={image} />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h1 className="max-w-3xl text-[clamp(2.1rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-bg/85">{intro}</p>}
      </div>
    </section>
  );
}
