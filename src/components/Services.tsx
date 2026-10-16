import { services, solutions, type Package } from "@/content/site";
import Backdrop from "./Backdrop";
import { pillarTone } from "./HomeSummary";
import PillarIcon from "./PillarIcon";

function SolutionItem({ p }: { p: Package }) {
  return (
    <details className="group border-b border-line last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start gap-3 py-3.5 marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block font-bold leading-snug text-ink group-hover:text-accent">{p.name}</span>
          <span className="mt-0.5 block text-sm text-muted">
            Desde <span className="font-semibold tabular-nums text-ink">{p.price}</span>
            {p.unit}
          </span>
        </span>
        <svg
          viewBox="0 0 20 20"
          width="20"
          height="20"
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
        >
          <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="pb-4 text-[0.95rem]">
        <p className="leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-3 space-y-1.5">
          {p.includes.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        {p.note && <p className="mt-3 text-sm leading-relaxed text-muted">{p.note}</p>}
      </div>
    </details>
  );
}

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="grid items-start gap-6 md:grid-cols-3">
        {services.pillars.map((p) => {
          const items = solutions.show ? solutions.list.filter((s) => s.pillar === p.name) : [];
          return (
            <article
              key={p.id}
              id={p.id}
              aria-labelledby={`${p.id}-title`}
              className="flex scroll-mt-32 flex-col overflow-hidden rounded-md border border-line bg-bg"
            >
              {/* Franja de imagen del pilar */}
              <div className="relative isolate flex h-36 items-end p-6 text-bg sm:px-7">
                <Backdrop image={p.image} overlay={pillarTone[p.id]?.overlay} position={p.imagePosition} />
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-md text-bg ${pillarTone[p.id]?.chip ?? "bg-primary"}`}
                >
                  <PillarIcon id={p.id} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-sm font-semibold text-accent">{p.name}</p>
              <h2 id={`${p.id}-title`} className="mt-1 text-2xl font-extrabold leading-tight tracking-tight">
                {p.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>

              {p.steps ? (
                // Pasos numerados: se recorren en este orden
                <ol className="relative mt-6 space-y-4 pl-1">
                  <span aria-hidden="true" className="absolute bottom-3 left-[1.05rem] top-3 w-0.5 bg-line" />
                  {p.steps.map((step, i) => (
                    <li key={step} className="relative flex items-center gap-3">
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold tabular-nums text-bg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-ink">{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Áreas">
                  {p.items.map((item) => (
                    <li key={item} className="rounded-sm bg-surface px-2.5 py-1 text-sm font-medium text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {items.length > 0 && (
                <div className="mt-7 rounded-md border border-line bg-surface/60 px-4">
                  <p className="flex flex-wrap items-center justify-between gap-2 border-b border-line py-3 text-sm font-semibold text-ink">
                    Soluciones
                    {solutions.draft && (
                      <span className="rounded-sm border border-dashed border-muted px-1.5 py-0.5 text-[0.7rem] font-semibold text-muted">
                        Precios provisionales
                      </span>
                    )}
                  </p>
                  {items.map((s) => (
                    <SolutionItem key={s.name} p={s} />
                  ))}
                </div>
              )}

              {p.motto && (
                <p className="mt-6 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-bg">{p.motto}</p>
              )}
              </div>
            </article>
          );
        })}
      </div>

      {solutions.show && <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{solutions.footnote}</p>}
      <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink">{services.closing}</p>
    </section>
  );
}
