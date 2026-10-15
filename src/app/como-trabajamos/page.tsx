import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import Method from "@/components/Method";
import { method } from "@/content/site";

export const metadata: Metadata = { title: "Cómo trabajamos", description: method.intro };

export default function ComoTrabajamosPage() {
  return (
    <PageShell>
      <PageIntro title={method.heading} intro={method.intro} />
      <Method />
    </PageShell>
  );
}
