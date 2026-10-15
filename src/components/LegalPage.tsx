import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <p>
          <Link href="/" className="text-sm font-semibold underline underline-offset-4">
            Volver al inicio
          </Link>
        </p>
        <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-[1.1] text-primary">{title}</h1>
        <div className="mt-10 space-y-5 leading-relaxed [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
