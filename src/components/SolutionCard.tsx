import Link from "next/link";
import type { Solution } from "@/lib/content";

const iconSvgs: Record<string, React.ReactNode> = {
  factory: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  energy: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  maintenance: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link href={`/solutions/${solution.slug}`} className="group block glow-card rounded-xl p-6 lg:p-7">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 flex items-center justify-center text-[var(--cyan)] mb-5 group-hover:bg-[var(--cyan)]/20 group-hover:shadow-[0_0_16px_var(--cyan-glow)] transition-all">
        {iconSvgs[solution.icon] || iconSvgs.factory}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--cyan)] transition-colors"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {solution.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed line-clamp-2">
        {solution.summary}
      </p>

      {/* Advantage tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {solution.advantages.slice(0, 2).map((a) => (
          <span
            key={a}
            className="text-xs px-2.5 py-1 rounded bg-[var(--green-glow)] text-[var(--green)] border border-[var(--green)]/10"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {a}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] group-hover:text-[var(--cyan)] transition-colors">
        <span style={{ fontFamily: "var(--font-mono)" }}>了解详情</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
