import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import SilverHome from "@/components/SilverHome";
import { silverHome } from "@/content/site";

export const metadata: Metadata = {
  title: "Silver Home: tecnología para personas mayores en casa",
  description:
    "Relojes SOS, tablets adaptadas y sensores de movimiento, humo, agua y puertas para personas mayores que viven en casa. Instalación, configuración y soporte en Catalunya.",
};

export default function SilverHomePage() {
  return (
    <PageShell>
      <PageIntro title={silverHome.title} intro={silverHome.lead} image={silverHome.image} />
      <SilverHome />
    </PageShell>
  );
}
