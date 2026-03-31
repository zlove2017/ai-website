import type { Metadata } from "next";
import { getAllCases } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import CaseCard from "@/components/CaseCard";

export const metadata: Metadata = {
  title: "案例展示",
  description: "查看我们在智慧工厂、能源监控、预测性维护等领域的成功案例",
};

export default function CasesPage() {
  const cases = getAllCases();
  const industries = [...new Set(cases.map((c) => c.industry))];

  return (
    <>
      <PageHeader
        label="Case Studies"
        title="成功案例"
        description="覆盖钢铁、化工、建材等多个行业，用实际数据证明AI工业智能化的价值"
      />

      {/* Industry filters */}
      <section className="py-5 bg-[var(--base-raised)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span
              className="px-4 py-1.5 rounded bg-[var(--cyan)] text-[var(--base)] text-xs font-semibold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ALL
            </span>
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-4 py-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-light)] transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="py-16 lg:py-24 bg-[var(--base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={c.slug} className={`animate-in delay-${i + 1}`}>
                <CaseCard caseStudy={c} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
