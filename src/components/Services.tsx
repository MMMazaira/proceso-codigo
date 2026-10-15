import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <h2 id="servicios-title" className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          {services.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{services.intro}</p>
      </div>

      <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.list.map((s) => (
          <li key={s.title} className="border-t-2 border-accent pt-5">
            <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
