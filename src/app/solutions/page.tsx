import type { Metadata } from "next";
import { getAllSolutions } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import SolutionCard from "@/components/SolutionCard";

export const metadata: Metadata = {
  title: "解决方案",
  description: "面向智慧工厂、能源监控、预测性维护等工业场景的AI智能化解决方案",
};

export default function SolutionsPage() {
  const solutions = getAllSolutions();

  return (
    <>
      <PageHeader
        label="Solutions"
        title="解决方案"
        description="基于AI+SCADA技术，为不同工业场景提供从数据采集到智能决策的全链路解决方案"
      />

      <section className="py-16 lg:py-24 bg-[var(--base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <div key={solution.slug} className={`animate-in delay-${i + 1}`}>
                <SolutionCard solution={solution} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
