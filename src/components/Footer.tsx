import Link from "next/link";

interface FooterProps {
  companyName: string;
  contact: { phone: string; email: string; address: string };
  nav: { label: string; href: string }[];
  icp: string;
}

export default function Footer({ companyName, contact, nav, icp }: FooterProps) {
  return (
    <footer className="relative bg-[var(--base)] border-t border-[var(--border)]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-[var(--cyan)] opacity-20 rounded-lg rotate-45" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <span
                    className="font-bold text-[var(--cyan)] text-xs tracking-wider"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    AI
                  </span>
                </div>
              </div>
              <span
                className="text-lg font-semibold text-[var(--text-primary)] tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {companyName}
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              专注于AI+工业互联网的高新技术企业，以SCADA与人工智能技术融合，为工业企业提供智能化解决方案。
            </p>
            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]" />
              </span>
              <span
                className="text-xs text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                系统在线 | 7&times;24 技术支持
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3
              className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-[0.15em] mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              导航
            </h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3
              className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-[0.15em] mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              联系方式
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[var(--cyan)] shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[var(--text-secondary)]">{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[var(--cyan)] shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[var(--text-secondary)]">{contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[var(--cyan)] shrink-0 opacity-60 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[var(--text-secondary)]">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &copy; {new Date().getFullYear()} {companyName}
          </p>
          <p className="text-xs text-[var(--text-muted)]">{icp}</p>
        </div>
      </div>
    </footer>
  );
}
