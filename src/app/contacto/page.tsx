import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import Contact from "@/components/Contact";
import { contact } from "@/content/site";

export const metadata: Metadata = { title: "Contacto", description: contact.body };

// ?tema=diagnostico deja preseleccionado el diagnóstico gratuito en el formulario
export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ tema?: string }>;
}) {
  const { tema } = await searchParams;
  return (
    <PageShell>
      <PageIntro title={contact.heading} intro={contact.body} />
      <Contact diagnostico={tema === "diagnostico"} />
    </PageShell>
  );
}
