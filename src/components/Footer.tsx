import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Header";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-bg/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo variant="light" />
          <p className="mt-3 text-sm">{site.tagline}</p>
          <p className="mt-1 text-sm">{site.email}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <Link href="/aviso-legal" className="hover:text-bg hover:underline underline-offset-4">
              Aviso legal
            </Link>
          </li>
          <li>
            <Link href="/privacidad" className="hover:text-bg hover:underline underline-offset-4">
              Privacidad
            </Link>
          </li>
          <li>
            © {year} {site.name}
          </li>
        </ul>
      </div>
    </footer>
  );
}
