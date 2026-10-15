import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import Contact from "@/components/Contact";
import { contact } from "@/content/site";

export const metadata: Metadata = { title: "Contacto", description: contact.body };

export default function ContactoPage() {
  return (
    <PageShell>
      <PageIntro title={contact.heading} intro={contact.body} />
      <Contact />
    </PageShell>
  );
}
