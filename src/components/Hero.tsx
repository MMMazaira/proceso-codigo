import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-primary"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="rounded-md bg-primary px-5 py-3 font-medium text-bg hover:bg-primary-dark"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-md border border-line bg-bg px-5 py-3 font-medium text-primary hover:border-primary"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
