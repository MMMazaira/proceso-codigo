import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import Services from "@/components/Services";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "Servicios", description: services.intro };

export default function ServiciosPage() {
  return (
    <PageShell>
      <PageIntro title={services.heading} intro={services.intro} />
      <Services />
    </PageShell>
  );
}
