import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell, { PageIntro } from "@/components/PageShell";
import HerramientaBanner from "@/components/HerramientaBanner";
import { posts } from "@/content/blog";
import { ctaDiagnostico, site } from "@/content/site";

// Una página por artículo (armartechweb.com/blog/<slug>), generada a partir de src/content/blog.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const otros = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <PageIntro title={post.title} intro={post.description} image={post.image} />

      <nav aria-label="Ruta" className="border-b border-line bg-bg">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-x-2 px-4 py-3 text-sm text-muted sm:px-6">
          <li>
            <Link href="/blog" className="hover:text-ink hover:underline underline-offset-4">
              Blog
            </Link>
          </li>
          <li aria-current="page" className="text-ink">
            <span aria-hidden="true">/ </span>
            {post.title}
          </li>
        </ol>
      </nav>

      <article className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <p className="border-l-4 border-teal bg-bg px-4 py-3 text-sm italic text-muted">{post.caso}</p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
            {post.historia.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">Qué cambiamos</h2>
          {post.cambiosIntro && <p className="mt-4 text-lg leading-relaxed text-ink">{post.cambiosIntro}</p>}
          <ol className="mt-6 space-y-4">
            {post.cambios.map((c, i) => (
              <li key={c} className="flex gap-4 rounded-md border border-line bg-bg p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-bg">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-ink">{c}</span>
              </li>
            ))}
          </ol>
          {post.cambiosCierre && <p className="mt-6 text-lg leading-relaxed text-ink">{post.cambiosCierre}</p>}

          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">El resultado esperado</h2>
          <div className="mt-4 space-y-5 text-lg leading-relaxed text-ink">
            {post.resultado.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          <p className="mt-10 text-muted">
            Servicio relacionado:{" "}
            <Link href={post.service.href} className="font-semibold text-accent underline-offset-4 hover:underline">
              {post.service.label}
            </Link>
          </p>
        </div>
      </article>

      {/* Llamada al diagnóstico gratuito */}
      <section className="bg-primary text-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{post.pregunta}</h2>
            <p className="mt-2 max-w-xl text-bg/85">
              Pide tu diagnóstico gratuito y te decimos cuánto tiempo podrías ahorrar. Sin compromiso, presencial en
              Catalunya u online.
            </p>
          </div>
          <Link
            href={ctaDiagnostico.href}
            className="shrink-0 self-start rounded-sm bg-teal px-5 py-3 font-semibold text-primary-dark hover:bg-bg md:self-auto"
          >
            Pedir diagnóstico gratuito
          </Link>
        </div>
      </section>

      <HerramientaBanner />

      {/* Otros artículos */}
      {otros.length > 0 && (
        <section aria-labelledby="otros-casos">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h2 id="otros-casos" className="text-lg font-bold text-ink">
              Otros casos
            </h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {otros.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block h-full rounded-md border border-line p-5 font-semibold leading-snug text-ink hover:border-accent hover:text-accent"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Datos estructurados del artículo para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metaTitle,
            description: post.description,
            datePublished: post.date,
            inLanguage: "es",
            mainEntityOfPage: `${site.url}/blog/${post.slug}`,
            image: `${site.url}/${post.image}`,
            author: { "@type": "Organization", name: site.name, url: site.url },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
          }),
        }}
      />
    </PageShell>
  );
}
