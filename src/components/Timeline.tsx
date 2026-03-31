interface TimelineProps {
  milestones: { year: string; event: string }[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Central circuit line */}
      <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--cyan)]/30 to-transparent -translate-x-1/2" />

      <div className="space-y-6">
        {milestones.map((m, i) => (
          <div
            key={m.year}
            className={`relative flex items-start gap-0 ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Node */}
            <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
              <div className="w-3 h-3 rounded-full bg-[var(--surface)] border-2 border-[var(--cyan)] shadow-[0_0_8px_var(--cyan-glow)]" />
            </div>

            {/* Content */}
            <div className="ml-14 lg:ml-0 lg:w-1/2 lg:px-10">
              <div
                className={`glow-card rounded-lg p-4 ${
                  i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <span
                  className="text-sm font-bold text-[var(--cyan)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.year}
                </span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {m.event}
                </p>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
