import Link from "next/link";
import { nav, site } from "@/content/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" className="shrink-0">
        <rect width="26" height="26" rx="4" fill="currentColor" />
        <path d="M7 9h12M7 13h8M7 17h12" stroke="var(--color-bg)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-semibold tracking-tight">{site.name}</span>
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
        <Link href="/" className="text-primary" aria-label={`${site.name}, inicio`}>
          <Logo className="text-lg" />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.95rem] text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/#contacto"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-bg hover:bg-primary-dark"
        >
          Solicitar reunión
        </a>
      </div>

      <nav aria-label="Secciones" className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto whitespace-nowrap px-4 py-2.5 text-sm text-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-primary">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
