import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import Cases from "@/components/Cases";
import { cases } from "@/content/site";

export const metadata: Metadata = { title: "Proyectos", description: cases.intro };

export default function ProyectosPage() {
  return (
    <PageShell>
      <PageIntro title={cases.heading} intro={cases.intro} />
      <Cases />
    </PageShell>
  );
}
