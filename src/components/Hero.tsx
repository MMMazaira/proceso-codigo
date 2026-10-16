import Image from "next/image";
import Link from "next/link";
import { hero, images, site } from "@/content/site";
import { publicAsset } from "@/lib/assets";
import Backdrop from "./Backdrop";

export default function Hero() {
  const hasPhoto = Boolean(publicAsset(images.hero));
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden text-bg">
      <Backdrop image={images.hero} priority />
      {/* Símbolo de la marca como marca de agua, solo cuando no hay foto */}
      {!hasPhoto && (
      <Image
        src="/brand/armartech-mark.png"
        alt=""
        aria-hidden="true"
        width={250}
        height={160}
        className="pointer-events-none absolute -right-10 top-1/2 hidden w-[26rem] -translate-y-1/2 opacity-[0.12] lg:block"
      />
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <p className="text-sm font-semibold text-teal">{site.tagline}</p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02] tracking-[-0.025em]"
        >
          <span className="block font-light">{hero.titleLead}</span>
          <span className="block font-extrabold">{hero.titleMain}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bg/85 md:text-xl">{hero.lead}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="rounded-sm bg-teal px-5 py-3 font-semibold text-primary-dark hover:bg-bg"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-sm border border-bg/40 px-5 py-3 font-semibold text-bg hover:border-bg"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
