import type { Metadata } from "next";
import { getAboutData } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解智联科技——AI赋能工业智能化的高新技术企业",
};

const advantageIcons: Record<string, React.ReactNode> = {
  experience: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  technology: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  delivery: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  support: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function AboutPage() {
  const about = getAboutData();

  return (
    <>
      <PageHeader label="关于我们" title={about.title} subtitle={about.subtitle} />

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-[var(--base)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            {about.intro}
          </p>
          <div className="glow-card rounded-xl p-6 border-l-2 border-l-[var(--cyan)]">
            <p
              className="text-xs text-[var(--cyan)] mb-2 tracking-wider uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Our Mission
            </p>
            <p className="text-[var(--text-primary)] font-medium" style={{ fontFamily: "var(--font-display)" }}>
              {about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-[var(--base-raised)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-4">核心优势</div>
          <h2
            className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            为什么选择<span className="text-[var(--cyan)]">我们</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.advantages.map((adv, i) => (
              <div key={adv.title} className={`glow-card rounded-xl p-6 animate-in delay-${i + 1}`}>
                <div className="w-12 h-12 rounded-lg bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 flex items-center justify-center text-[var(--cyan)] mb-5">
                  {advantageIcons[adv.icon] || advantageIcons.experience}
                </div>
                <h3
                  className="font-semibold text-[var(--text-primary)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {adv.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[var(--base)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">发展历程</div>
            <h2
              className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              一路走来
            </h2>
          </div>
          <Timeline milestones={about.milestones} />
        </div>
      </section>
    </>
  );
}
