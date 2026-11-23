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
    default: `Automatizaciones con IA para pymes en el Anoia | ${site.name}`,
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
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Armartech: automatizaciones con IA para pymes" }],
  },
  twitter: { card: "summary_large_image" },
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
