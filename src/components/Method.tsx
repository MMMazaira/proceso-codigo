import { method } from "@/content/site";

export default function Method() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {/* Secuencia real: los pasos se siguen en este orden */}
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {method.steps.map((step, i) => (
            <li key={step.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-bg">
                {i + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
