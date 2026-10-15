import { cases, type Case } from "@/content/site";

const tagLabel: Record<NonNullable<Case["tag"]>, string> = {
  ejemplo: "Texto de ejemplo",
  propio: "Proyecto propio",
};

function CaseCard({ c }: { c: Case }) {
  return (
    <details className="group rounded-md border border-line bg-bg open:border-accent/50">
      <summary className="flex cursor-pointer list-none items-start gap-4 p-6 marker:hidden sm:p-7 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-accent">{c.pillar}</span>
            {c.tag && (
              <span
                className={`rounded-sm px-2 py-0.5 text-xs font-semibold ${
                  c.tag === "ejemplo" ? "border border-dashed border-muted text-muted" : "bg-surface text-primary"
                }`}
              >
                {tagLabel[c.tag]}
              </span>
            )}
          </span>
          <span className="mt-2 block text-xl font-extrabold leading-snug tracking-tight text-ink group-hover:text-accent">
            {c.title}
          </span>
          <span className="mt-1 block text-sm text-muted">{c.client}</span>
        </span>
        <span className="mt-1 flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent">
          <span className="hidden sm:inline group-open:hidden">Ver detalle</span>
          <span className="hidden sm:group-open:inline">Cerrar</span>
          <svg
            viewBox="0 0 20 20"
            width="20"
            height="20"
            aria-hidden="true"
            className="transition-transform duration-200 group-open:rotate-180"
          >
            <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </summary>

      <dl className="mx-6 grid gap-3 border-t border-line pb-6 pt-5 text-[0.95rem] leading-relaxed sm:mx-7 sm:pb-7">
        <div>
          <dt className="font-semibold text-ink">Situación</dt>
          <dd className="text-muted">{c.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Qué hicimos</dt>
          <dd className="text-muted">{c.solution}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Resultado</dt>
          <dd className="text-muted">{c.result}</dd>
        </div>
        {c.href && (
          <a href={c.href} className="mt-2 font-semibold text-accent underline-offset-4 hover:underline">
            Ver proyecto
          </a>
        )}
      </dl>
    </details>
  );
}

export default function Cases() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid items-start gap-4 md:grid-cols-2 md:gap-6">
          {cases.list.map((c) => (
            <CaseCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
