import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Automatizaciones con IA, Lean y desarrollo web para pymes`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    // Cada página declara su propia URL (con el dominio de site.url) como canónica
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={archivo.variable}>
      <body className="min-h-dvh">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
