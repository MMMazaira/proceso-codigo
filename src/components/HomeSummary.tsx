import Link from "next/link";
import { homeCta, services } from "@/content/site";
import PillarIcon from "./PillarIcon";

// Portada: los tres pilares en una línea cada uno y una llamada a contacto.
export default function HomeSummary() {
  return (
    <>
      <section aria-labelledby="pilares-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 id="pilares-title" className="sr-only">
          {services.heading}
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
          {services.pillars.map((p) => (
            <li key={p.id} className="bg-bg">
              <Link href={`/servicios#${p.id}`} className="group flex h-full flex-col p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-bg">
                  <PillarIcon id={p.id} size={24} />
                </span>
                <span className="mt-5 text-xl font-extrabold tracking-tight text-ink group-hover:text-accent">
                  {p.name}
                </span>
                <span className="mt-2 leading-relaxed text-muted">{p.summary}</span>
                <span className="mt-5 text-sm font-semibold text-accent group-hover:underline underline-offset-4">
                  Ver servicios
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cta-title" className="bg-primary text-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="cta-title" className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {homeCta.title}
            </h2>
            <p className="mt-2 max-w-xl text-bg/85">{homeCta.body}</p>
          </div>
          <Link
            href={homeCta.cta.href}
            className="shrink-0 self-start rounded-sm bg-bg px-5 py-3 font-semibold text-primary hover:bg-surface md:self-auto"
          >
            {homeCta.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
