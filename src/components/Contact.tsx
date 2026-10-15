import { contact, site } from "@/content/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <h2 className="text-lg font-semibold text-ink">Datos de contacto</h2>
          <dl className="mt-5 space-y-4">
            <div>
              <dt className="text-sm text-muted">Correo</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Ubicación</dt>
              <dd className="font-medium">{site.location}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-line bg-bg p-6 sm:p-8">
          <ContactForm topics={contact.topics} />
        </div>
      </div>
    </section>
  );
}
