import Link from "next/link";
import { getHomeData, getAllSolutions, getAllCases } from "@/lib/content";
import HeroBanner from "@/components/HeroBanner";
import StatsCounter from "@/components/StatsCounter";
import SolutionCard from "@/components/SolutionCard";
import CaseCard from "@/components/CaseCard";

export default function HomePage() {
  const home = getHomeData();
  const allSolutions = getAllSolutions();
  const allCases = getAllCases();

  const featuredSolutions = allSolutions.filter((s) =>
    home.featuredSolutions.includes(s.slug)
  );
  const featuredCases = allCases.filter((c) =>
    home.featuredCases.includes(c.slug)
  );

  return (
    <>
      <HeroBanner items={home.hero} />
      <StatsCounter stats={home.stats} />

      {/* Solutions */}
      <section className="relative py-20 lg:py-28 bg-[var(--base)]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-4">解决方案</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              面向工业场景的<span className="text-[var(--cyan)]">AI解决方案</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl">
              基于深度学习与SCADA技术融合，为不同行业提供端到端的智能化升级路径
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSolutions.map((solution, i) => (
              <div key={solution.slug} className={`animate-in delay-${i + 1}`}>
                <SolutionCard solution={solution} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              查看全部方案
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="relative py-20 lg:py-28 bg-[var(--base-raised)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-4">成功案例</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              用<span className="text-[var(--orange)]">数据</span>说话
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl">
              覆盖钢铁、化工、建材等核心工业领域，实实在在的降本增效成果
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map((caseStudy, i) => (
              <div key={caseStudy.slug} className={`animate-in delay-${i + 1}`}>
                <CaseCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/cases"
              className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              查看全部案例
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 lg:py-28 bg-[var(--base)]">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-4">技术架构</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              全栈<span className="text-[var(--cyan)]">技术能力</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl">
              自研核心技术栈，从边缘采集到云端分析的完整技术体系
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {home.techStack.map((tech, i) => (
                <div
                  key={tech.name}
                  className={`glow-card rounded-xl p-5 animate-in delay-${(i % 6) + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--cyan)] shadow-[0_0_6px_var(--cyan)]" />
                    <h3
                      className="font-semibold text-[var(--text-primary)] text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-5">
                    {tech.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-20 bg-[var(--base-raised)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-4">合作伙伴</div>
            <h2
              className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              他们选择了我们
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {home.partners.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center h-20 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--cyan)]/20 transition-colors"
                  >
                    <span
                      className="text-sm text-[var(--text-muted)] font-medium"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {name}
                    </span>
                  </div>
                )
              )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--cyan-glow)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {home.ctaSection.title}
          </h2>
          <p className="text-[var(--text-secondary)] mb-10 max-w-lg mx-auto">
            {home.ctaSection.description}
          </p>
          <Link
            href={home.ctaSection.buttonHref}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--cyan)] text-[var(--base)] font-semibold rounded hover:shadow-[0_0_40px_var(--cyan-glow-strong)] transition-all"
          >
            {home.ctaSection.buttonText}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
