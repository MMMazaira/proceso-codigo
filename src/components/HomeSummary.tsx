import Link from "next/link";
import { homeCta, services } from "@/content/site";
import Backdrop from "./Backdrop";
import PillarIcon from "./PillarIcon";

// Color de cada pilar, tomado del logotipo
export const pillarTone: Record<string, { overlay: string; chip: string }> = {
  consultoria: { overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-blue/40", chip: "bg-blue" },
  web: { overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-accent/45", chip: "bg-accent" },
  formacion: { overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-slate/50", chip: "bg-slate" },
};

// Portada: los tres pilares con imagen de fondo y una llamada a contacto.
export default function HomeSummary() {
  return (
    <>
      <section aria-labelledby="pilares-title" className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 id="pilares-title" className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {services.heading}
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {services.pillars.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/servicios#${p.id}`}
                  className="group relative isolate flex min-h-[19rem] flex-col justify-end overflow-hidden rounded-md p-7 text-bg"
                >
                  <Backdrop image={p.image} overlay={pillarTone[p.id]?.overlay} position={p.imagePosition} />
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-md text-bg ${pillarTone[p.id]?.chip ?? "bg-accent"}`}
                  >
                    <PillarIcon id={p.id} size={24} />
                  </span>
                  <span className="mt-5 text-2xl font-extrabold tracking-tight">{p.name}</span>
                  <span className="mt-2 leading-relaxed text-bg/85">{p.summary}</span>
                  <span className="mt-5 text-sm font-semibold text-teal group-hover:underline underline-offset-4">
                    Ver servicios
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
            className="shrink-0 self-start rounded-sm bg-teal px-5 py-3 font-semibold text-primary-dark hover:bg-bg md:self-auto"
          >
            {homeCta.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
