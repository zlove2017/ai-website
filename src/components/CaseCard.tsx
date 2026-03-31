import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export default function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/cases/${caseStudy.slug}`}
      className="group block glow-card rounded-xl overflow-hidden"
    >
      {/* Cover image area */}
      <div className="relative aspect-[16/10] bg-[var(--surface-raised)] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
          style={
            caseStudy.coverImage
              ? { backgroundImage: `url(${caseStudy.coverImage})` }
              : {}
          }
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />

        {/* Industry badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded bg-[var(--base)]/80 backdrop-blur text-xs text-[var(--orange)] border border-[var(--orange)]/20"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {caseStudy.industry}
          </span>
          <span
            className="px-2 py-1 rounded bg-[var(--base)]/80 backdrop-blur text-xs text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {caseStudy.year}
          </span>
        </div>

        {/* Data display overlay - bottom */}
        {!caseStudy.coverImage && (
          <div className="absolute inset-0 bg-grid-dense flex items-center justify-center">
            <div className="text-[var(--text-muted)] opacity-40">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--cyan)] transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {caseStudy.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
          {caseStudy.background}
        </p>

        {/* Metrics strip */}
        {caseStudy.results.length > 0 && (
          <div className="pt-4 border-t border-[var(--border)] flex gap-6">
            {caseStudy.results.slice(0, 2).map((r) => (
              <div key={r.metric}>
                <div
                  className="text-xs text-[var(--text-muted)] mb-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {r.metric}
                </div>
                <div
                  className="text-sm font-bold text-[var(--cyan)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {r.after}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
