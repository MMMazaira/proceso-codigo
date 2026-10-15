import { contact, site } from "@/content/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <h2 id="contacto-title" className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{contact.body}</p>
          <dl className="mt-8 space-y-4">
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
