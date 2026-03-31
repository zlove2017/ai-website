import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  backLink?: { label: string; href: string };
}

export default function PageHeader({ label, title, subtitle, description, backLink }: PageHeaderProps) {
  return (
    <section className="relative py-20 lg:py-24 bg-[var(--base)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cyan-glow)] via-transparent to-[var(--base)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {backLink && (
          <Link
            href={backLink.href}
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors mb-8"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {backLink.label}
          </Link>
        )}

        <div className="section-label mb-5">{label}</div>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-lg text-[var(--orange)] font-medium mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
