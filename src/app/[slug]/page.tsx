import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell, { PageIntro } from "@/components/PageShell";
import ServiceDetail from "@/components/ServiceDetail";
import { servicePages } from "@/content/service-pages";

// Una página por servicio (armartechweb.com/<slug>), generada a partir de src/content/service-pages.ts.
// Si existe una carpeta propia con el mismo nombre en src/app, Next.js usa esa en lugar de esta.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function ServicePageRoute({ params }: Props) {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <PageShell>
      <PageIntro title={page.title} intro={page.lead} image={page.image} />
      <ServiceDetail page={page} />
    </PageShell>
  );
}
