interface StatsCounterProps {
  stats: { value: string; label: string }[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="relative py-14 lg:py-16 bg-[var(--base-raised)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`relative text-center px-4 ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-[var(--border)]"
                  : ""
              }`}
            >
              <div
                className="text-3xl lg:text-4xl font-bold text-[var(--cyan)] mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs text-[var(--text-muted)] tracking-wider uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
