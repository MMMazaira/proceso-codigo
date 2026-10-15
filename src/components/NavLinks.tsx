"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

// Enlaces del menú con la página actual marcada (aria-current).
export default function NavLinks({ variant }: { variant: "desktop" | "mobile" }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <ul
      className={
        variant === "desktop"
          ? "flex items-center gap-7 text-[0.95rem]"
          : "mx-auto flex max-w-6xl gap-6 overflow-x-auto whitespace-nowrap px-4 py-2.5 text-sm"
      }
    >
      {nav.map((item) => {
        const active = isActive(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`border-b-2 pb-1 ${
                active ? "border-accent font-semibold text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
