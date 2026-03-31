"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  companyName: string;
  nav: NavItem[];
  phone: string;
}

export default function Header({ companyName, nav, phone }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--base)]/95 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              {/* Hexagonal logo shape */}
              <div className="absolute inset-0 bg-[var(--cyan)] opacity-20 rounded-lg rotate-45 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-full h-full flex items-center justify-center">
                <span
                  className="font-[var(--font-display)] font-bold text-[var(--cyan)] text-sm tracking-wider"
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--cyan)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan-glow)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${phone}`}
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {phone}
            </a>
            <Link
              href="/contact"
              className="relative px-5 py-2 text-sm font-medium text-[var(--base)] bg-[var(--cyan)] rounded hover:shadow-[0_0_20px_var(--cyan-glow-strong)] transition-all hover:bg-[var(--cyan-dim)]"
            >
              免费咨询
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[var(--text-secondary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 border-t border-[var(--border)]">
            <div className="pt-4 space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[var(--cyan)] bg-[var(--cyan-glow)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="block mt-4 text-center py-2.5 bg-[var(--cyan)] text-[var(--base)] text-sm font-semibold rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              免费咨询
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
