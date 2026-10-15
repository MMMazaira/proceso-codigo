import Link from "next/link";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <h1
          id="hero-title"
          className="max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.025em] text-ink"
        >
          <span className="block font-light">{hero.titleLead}</span>
          <span className="block font-extrabold">{hero.titleMain}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">{hero.lead}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="rounded-sm bg-accent px-5 py-3 font-semibold text-bg hover:bg-accent-dark"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-sm border border-ink/30 px-5 py-3 font-semibold text-ink hover:border-ink"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
