import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolution, getAllSolutions, getCase } from "@/lib/content";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return getAllSolutions().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Metadata | Promise<Metadata> {
  return params.then(({ slug }) => {
    const solution = getSolution(slug);
    if (!solution) return {};
    return { title: solution.title, description: solution.summary };
  });
}

const featureIconSvgs: Record<string, React.ReactNode> = {
  monitor: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  eye: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
  calendar: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  cube: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  dashboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  alert: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
  leaf: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  sensor: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
  brain: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  schedule: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  heartbeat: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  settings: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
};

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const relatedCases = solution.relatedCases.map((id) => getCase(id)).filter(Boolean);

  return (
    <>
      <PageHeader
        label="Solution Detail"
        title={solution.title}
        subtitle={solution.subtitle}
        description={solution.summary}
        backLink={{ label: "返回解决方案", href: "/solutions" }}
      />

      {/* Features */}
      <section className="py-16 lg:py-24 bg-[var(--base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-4">核心功能</div>
          <h2
            className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solution.features.map((feature, i) => (
              <div key={feature.title} className={`glow-card rounded-xl p-6 flex gap-5 animate-in delay-${i + 1}`}>
                <div className="w-11 h-11 rounded-lg bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 flex items-center justify-center text-[var(--cyan)] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {featureIconSvgs[feature.icon] || featureIconSvgs.settings}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-20 bg-[var(--base-raised)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-4">方案优势</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.advantages.map((adv, i) => (
              <div
                key={adv}
                className={`text-center p-6 rounded-xl bg-[var(--cyan)]/5 border border-[var(--cyan)]/10 animate-in delay-${i + 1}`}
              >
                <div
                  className="text-lg font-bold text-[var(--cyan)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {adv}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable scenes */}
      <section className="py-16 lg:py-20 bg-[var(--base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label justify-center mb-4">适用场景</div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {solution.applicableScenes.map((scene) => (
              <span
                key={scene}
                className="px-5 py-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)]"
              >
                {scene}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 lg:py-20 bg-[var(--base-raised)] border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-label mb-8">相关案例</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCases.map(
                (c) =>
                  c && (
                    <Link
                      key={c.slug}
                      href={`/cases/${c.slug}`}
                      className="group glow-card rounded-xl p-6"
                    >
                      <h3
                        className="font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--cyan)] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {c.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                        {c.background}
                      </p>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--cyan-glow)_0%,transparent_70%)]" />
        <div className="relative text-center max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            想了解更多关于{solution.title}？
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            我们的技术团队将为您量身定制最适合的方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--cyan)] text-[var(--base)] font-semibold rounded hover:shadow-[0_0_30px_var(--cyan-glow-strong)] transition-all"
          >
            立即咨询
          </Link>
        </div>
      </section>
    </>
  );
}
