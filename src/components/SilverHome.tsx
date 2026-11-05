import Link from "next/link";
import { silverHome } from "@/content/site";
import PillarIcon from "./PillarIcon";

// Página de la línea Silver Home: qué incluye, cómo funciona y para quién.
export default function SilverHome() {
  const s = silverHome;
  return (
    <>
      {/* Qué incluye */}
      <section aria-labelledby="sh-incluye" className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 id="sh-incluye" className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Qué incluye
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{s.intro}</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.devices.map((d) => (
              <li key={d.id} className="rounded-md border border-line bg-bg p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-bg">
                  <PillarIcon id={d.id} size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{d.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cómo funciona */}
      <section aria-labelledby="sh-pasos">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <p className="text-sm font-semibold text-accent">Cómo funciona</p>
          <h2 id="sh-pasos" className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {s.stepsHeading}
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {s.steps.map((step, i) => (
              <li key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-bg">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Para quién */}
      <section aria-label="Para quién" className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="rounded-md border border-line bg-bg p-7">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">{s.families.heading}</h2>
            <ul className="mt-5 space-y-3">
              {s.families.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-primary p-7 text-bg">
            <h2 className="text-2xl font-extrabold tracking-tight">{s.partners.heading}</h2>
            <p className="mt-2 text-sm text-bg/75">{s.partners.audience}</p>
            <ul className="mt-5 space-y-3">
              {s.partners.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-bg/90">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section aria-labelledby="sh-cta" className="bg-primary-dark text-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="sh-cta" className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {s.cta.title}
            </h2>
            <p className="mt-2 max-w-xl text-bg/85">{s.cta.body}</p>
          </div>
          <Link
            href={s.cta.href}
            className="shrink-0 self-start rounded-sm bg-teal px-5 py-3 font-semibold text-primary-dark hover:bg-bg md:self-auto"
          >
            {s.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
