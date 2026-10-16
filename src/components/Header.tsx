import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import NavLinks from "./NavLinks";

// Logotipo: símbolo + nombre. "light" usa el nombre en blanco para fondos oscuros.
export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={variant === "light" ? "rounded-md bg-bg p-1" : ""}>
        <Image
          src="/brand/armartech-mark.png"
          alt=""
          width={50}
          height={32}
          className={variant === "light" ? "h-6 w-auto" : "h-8 w-auto"}
        />
      </span>
      <Image
        src={variant === "light" ? "/brand/armartech-wordmark-light.png" : "/brand/armartech-wordmark.png"}
        alt={site.name}
        width={174}
        height={18}
        className="h-[1.05rem] w-auto sm:h-[1.15rem]"
      />
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
        <Link href="/" aria-label={`${site.name}, inicio`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <NavLinks variant="desktop" />
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-bg hover:bg-accent-dark sm:inline-block"
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
