import Link from "next/link";
import { contact, diagnosticoTema, home, services, site } from "@/content/site";
import Backdrop from "./Backdrop";
import ContactForm from "./ContactForm";
import PillarIcon from "./PillarIcon";

// Color de cada pilar, tomado del logotipo
export const pillarTone: Record<string, { overlay: string; chip: string }> = {
  automatizaciones: {
    overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-teal/40",
    chip: "bg-accent",
  },
  consultoria: {
    overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-blue/40",
    chip: "bg-blue",
  },
  web: {
    overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-accent/45",
    chip: "bg-accent",
  },
  formacion: {
    overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-slate/50",
    chip: "bg-slate",
  },
  silver: {
    overlay: "bg-gradient-to-t from-primary-dark via-primary/85 to-teal/40",
    chip: "bg-teal",
  },
};

// Adónde lleva cada tarjeta de servicio de la portada
const destino: Record<string, string> = {
  automatizaciones: "/automatizaciones-empresas-barcelona",
  consultoria: "/consultoria-lean-manufacturing",
  web: "/servicios#web",
  formacion: "/formacion-tecnica-empresas",
  silver: "/silver-home",
};

const enlace = (id: string) => destino[id] ?? `/servicios#${id}`;

// Portada: servicios principales, qué automatizamos, cómo trabajamos,
// formulario de diagnóstico gratuito y servicios secundarios.
export default function HomeSummary() {
  const principales = services.pillars.filter((p) => p.destacado);
  const otros = services.pillars.filter((p) => !p.destacado);

  return (
    <>
      {/* Servicios principales */}
      <section aria-labelledby="servicios-title" className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 id="servicios-title" className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {home.serviciosTitulo}
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {principales.map((p) => (
              <li key={p.id}>
                <Link
                  href={enlace(p.id)}
                  className="group relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-md p-7 text-bg"
                >
                  <Backdrop image={p.image} overlay={pillarTone[p.id]?.overlay} position={p.imagePosition} />
                  <span className={`flex h-11 w-11 items-center justify-center rounded-md text-bg ${pillarTone[p.id]?.chip ?? "bg-accent"}`}>
                    <PillarIcon id={p.id} size={24} />
                  </span>
                  <span className="mt-5 text-2xl font-extrabold tracking-tight">{p.name}</span>
                  <span className="mt-2 leading-relaxed text-bg/85">{p.summary}</span>
                  <span className="mt-5 text-sm font-semibold text-teal underline-offset-4 group-hover:underline">
                    Saber más
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qué automatizamos */}
      <section aria-labelledby="auto-title">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 id="auto-title" className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {home.automatizacionesTitulo}
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {home.automatizaciones.map((a) => (
              <li key={a.icono} className="flex flex-col rounded-md border border-line bg-bg p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-bg">
                  <PillarIcon id={a.icono} size={24} />
                </span>
                <p className="mt-5 font-semibold leading-snug text-ink">{a.problema}</p>
                <p className="mt-3 leading-relaxed text-muted">{a.solucion}</p>
                <p className="mt-auto pt-5 text-sm font-semibold text-accent">Ahorro estimado: {a.ahorro}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/automatizaciones-empresas-barcelona"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ver todo lo que automatizamos →
            </Link>
          </p>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section aria-labelledby="pasos-title" className="bg-primary text-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 id="pasos-title" className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {home.pasosTitulo}
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.pasos.map((p, i) => (
              <li key={p.titulo}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal font-bold text-primary-dark">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-bg/80">{p.texto}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-12 grid gap-3 border-t border-bg/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.garantias.map((g) => (
              <li key={g} className="flex gap-2.5 text-sm leading-relaxed text-bg/85">
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="mt-0.5 shrink-0 text-teal">
                  <path d="M4.5 10.5 8.5 14.5 15.5 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diagnóstico gratuito */}
      <section id="diagnostico" aria-labelledby="diag-title" className="scroll-mt-28 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 id="diag-title" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              {home.diagnostico.titulo}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{home.diagnostico.texto}</p>
            <p className="mt-8 font-semibold text-ink">Qué incluye:</p>
            <ul className="mt-3 space-y-3">
              {home.diagnostico.incluye.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                    <path d="M4.5 10.5 8.5 14.5 15.5 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-ink">
              ¿Prefieres hablar? Llámame al{" "}
              <a href={site.phoneHref} className="font-semibold text-accent underline-offset-4 hover:underline">
                {site.phone}
              </a>{" "}
              o{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">
                escríbeme por WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="rounded-lg border border-line bg-bg p-6 sm:p-8">
            <ContactForm
              topics={contact.topics}
              defaultTopic={diagnosticoTema}
              submitLabel="Pedir diagnóstico gratuito"
              messageLabel="¿Qué tarea te gustaría no volver a hacer a mano?"
              messagePlaceholder="Por ejemplo: somos un taller de 4 personas y tardamos días en enviar los presupuestos."
            />
          </div>
        </div>
      </section>

      {/* Servicios secundarios */}
      {otros.length > 0 && (
        <section aria-labelledby="otros-title">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 id="otros-title" className="text-xl font-bold text-ink">
              {home.otrosTitulo}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {otros.map((p) => (
                <li key={p.id}>
                  <Link
                    href={enlace(p.id)}
                    className="group flex items-center gap-4 rounded-md border border-line p-5 hover:border-accent"
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-bg ${pillarTone[p.id]?.chip ?? "bg-accent"}`}>
                      <PillarIcon id={p.id} size={22} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-ink group-hover:text-accent">{p.name}</span>
                      <span className="block text-sm text-muted">{p.summary}</span>
                    </span>
                    <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
