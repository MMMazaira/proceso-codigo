import Link from "next/link";
import { services } from "@/content/site";
import { servicePages, type ServicePage } from "@/content/service-pages";

// Página de un servicio concreto: problema, qué hacemos, cómo trabajamos, preguntas y llamada a contacto.
export default function ServiceDetail({ page }: { page: ServicePage }) {
  const pillar = services.pillars.find((p) => p.id === page.pillar);
  const related = servicePages.filter((p) => p.slug !== page.slug).slice(0, 6);

  return (
    <>
      <nav aria-label="Ruta" className="border-b border-line bg-bg">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-x-2 px-4 py-3 text-sm text-muted sm:px-6">
          <li>
            <Link href="/servicios" className="hover:text-ink hover:underline underline-offset-4">
              Servicios
            </Link>
          </li>
          {pillar && (
            <li>
              <span aria-hidden="true">/ </span>
              <Link href={`/servicios#${pillar.id}`} className="hover:text-ink hover:underline underline-offset-4">
                {pillar.name}
              </Link>
            </li>
          )}
          <li aria-current="page" className="text-ink">
            <span aria-hidden="true">/ </span>
            {page.linkLabel}
          </li>
        </ol>
      </nav>

      {/* Problema + qué hacemos */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink">¿Qué problema resolvemos?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{page.problem}</p>
          </div>
          <div className="rounded-md border border-line bg-bg p-7">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">{page.whatHeading}</h2>
            <ul className="mt-5 space-y-3">
              {page.what.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                    <path d="M4.5 10.5 8.5 14.5 15.5 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section aria-labelledby="como">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 id="como" className="text-3xl font-extrabold tracking-tight text-ink">
            Cómo trabajamos
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
            {page.how.map((step, i) => (
              <li key={step}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-bg">
                  {i + 1}
                </span>
                <p className="mt-4 font-semibold leading-snug text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section aria-labelledby="faq" className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <h2 id="faq" className="text-3xl font-extrabold tracking-tight text-ink">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-3">
            {page.faqs.map((f) => (
              <details key={f.q} className="group rounded-md border border-line bg-bg open:border-accent/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className="shrink-0 text-accent transition-transform group-open:rotate-180">
                    <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-primary text-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">¿Hablamos?</h2>
            <p className="mt-2 max-w-xl text-bg/85">Primera reunión sin compromiso, presencial en toda Catalunya u online.</p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 self-start rounded-sm bg-teal px-5 py-3 font-semibold text-primary-dark hover:bg-bg md:self-auto"
          >
            {page.cta}
          </Link>
        </div>
      </section>

      {/* Otros servicios */}
      <section aria-labelledby="otros">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 id="otros" className="text-lg font-bold text-ink">
            Otros servicios
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${r.slug}`}
                  className="inline-block rounded-sm border border-line px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
                >
                  {r.linkLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/silver-home"
                className="inline-block rounded-sm border border-line px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                Silver Home
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Datos estructurados de preguntas frecuentes para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
