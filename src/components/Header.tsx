import Link from "next/link";
import { site } from "@/content/site";
import NavLinks from "./NavLinks";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" className="shrink-0">
        <rect width="26" height="26" rx="4" fill="currentColor" />
        <path d="M7 9h12M7 13h8M7 17h12" stroke="var(--color-bg)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-bold tracking-tight text-ink">{site.name}</span>
    </span>
  );
}

export default function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-bg/95 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-bg focus:px-3 focus:py-2"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="text-accent" aria-label={`${site.name}, inicio`}>
          <Logo className="text-lg" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <NavLinks variant="desktop" />
        </nav>

        <Link
          href="/contacto"
          className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-bg hover:bg-accent-dark"
        >
          Solicitar reunión
        </Link>
      </div>

      <nav aria-label="Secciones" className="border-t border-line lg:hidden">
        <NavLinks variant="mobile" />
      </nav>
    </header>
  );
}
