import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { PageIntro } from "@/components/PageShell";
import { blog, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog: casos que resolvemos",
  description:
    "Casos de talleres, oficios y pequeñas empresas: presupuestos, WhatsApp, partes de producción y cobros. Cómo se resuelven con Lean y automatizaciones con IA.",
};

// Listado de artículos del blog (contenido en src/content/blog.ts)
export default function BlogPage() {
  return (
    <PageShell>
      <PageIntro title={blog.title} intro={blog.lead} />
      <section aria-label="Artículos" className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <ul className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-md border border-line bg-bg p-7 hover:border-accent"
                >
                  <span className="text-2xl font-extrabold leading-tight tracking-tight text-ink group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="mt-3 leading-relaxed text-muted">{post.description}</span>
                  <span className="mt-auto pt-5 text-sm font-semibold text-accent underline-offset-4 group-hover:underline">
                    Leer el caso →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{blog.aviso}</p>
        </div>
      </section>
    </PageShell>
  );
}
