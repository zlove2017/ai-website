import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCase, getAllCases, getSolution } from "@/lib/content";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Metadata | Promise<Metadata> {
  return params.then(({ slug }) => {
    const caseStudy = getCase(slug);
    if (!caseStudy) return {};
    return { title: caseStudy.title, description: caseStudy.background.slice(0, 160) };
  });
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCase(slug);
  if (!caseStudy) notFound();

  const solution = getSolution(caseStudy.solution);

  return (
    <>
      <PageHeader
        label={`${caseStudy.industry} / ${caseStudy.year}`}
        title={caseStudy.title}
        description={`客户：${caseStudy.client}${solution ? ` | 方案：${solution.title}` : ""}`}
        backLink={{ label: "返回案例", href: "/cases" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Background */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] shadow-[0_0_6px_var(--cyan)]" />
            <h2
              className="text-lg font-semibold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              项目背景
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed pl-5 border-l border-[var(--border)]">
            {caseStudy.background}
          </p>
        </section>

        {/* Approach */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--orange)] shadow-[0_0_6px_var(--orange)]" />
            <h2
              className="text-lg font-semibold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              解决方案
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed pl-5 border-l border-[var(--border)]">
            {caseStudy.approach}
          </p>
          {solution && (
            <Link
              href={`/solutions/${solution.slug}`}
              className="inline-flex items-center gap-2 mt-4 ml-5 text-sm text-[var(--cyan)] hover:underline"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              查看完整方案
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </section>

        {/* Results */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] shadow-[0_0_6px_var(--green)]" />
            <h2
              className="text-lg font-semibold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              实施效果
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caseStudy.results.map((r) => (
              <div key={r.metric} className="glow-card rounded-xl p-5">
                <div
                  className="text-xs text-[var(--text-muted)] mb-3 tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {r.metric}
                </div>
                <div className="flex items-center gap-3">
                  {r.before !== "-" && (
                    <>
                      <span className="text-sm text-[var(--text-muted)] line-through">{r.before}</span>
                      <svg className="w-5 h-5 text-[var(--cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                  <span
                    className="text-xl font-bold text-[var(--cyan)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {r.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="mb-14">
            <div className="relative glow-card rounded-xl p-8 border-l-2 border-l-[var(--cyan)]">
              <svg className="absolute top-4 right-4 w-8 h-8 text-[var(--cyan)] opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <p className="text-[var(--text-primary)] italic leading-relaxed mb-4">
                &ldquo;{caseStudy.testimonial}&rdquo;
              </p>
              <p
                className="text-xs text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                &mdash; {caseStudy.client}
              </p>
            </div>
          </section>
        )}
      </div>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden border-t border-[var(--border)]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--cyan-glow)_0%,transparent_70%)]" />
        <div className="relative text-center max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            想要同样的效果？
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            联系我们，获取专属于您的工业智能化方案
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
