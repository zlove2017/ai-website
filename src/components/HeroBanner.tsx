"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { HeroItem } from "@/lib/content";

export default function HeroBanner({ items }: { items: HeroItem[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[current];

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden bg-[var(--base)]">
      {/* SCADA Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,var(--cyan-glow)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--base)] via-transparent to-[var(--base)]/40" />

      {/* Animated vertical data lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[15, 30, 55, 72, 88].map((left, i) => (
          <div
            key={i}
            className="absolute top-0 w-px h-32 opacity-20"
            style={{
              left: `${left}%`,
              background: `linear-gradient(to bottom, transparent, var(--cyan), transparent)`,
              animation: `data-flow ${3 + i * 0.7}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 scanlines" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {/* System label */}
          <div
            className="flex items-center gap-3 mb-6 animate-in"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--cyan)]" />
            </span>
            <span className="text-xs text-[var(--cyan)] tracking-[0.2em] uppercase">
              Industrial Intelligence Platform
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 animate-in delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[var(--text-primary)]">{item.title.split("").slice(0, -3).join("")}</span>
            <span className="text-[var(--cyan)]">{item.title.slice(-3)}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-[var(--orange)] font-medium mb-4 animate-in delay-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.subtitle}
          </p>

          {/* Description */}
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg animate-in delay-3">
            {item.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-in delay-4">
            <Link
              href={item.cta.href}
              className="group inline-flex items-center gap-2 px-7 py-3 bg-[var(--cyan)] text-[var(--base)] font-semibold text-sm rounded hover:shadow-[0_0_30px_var(--cyan-glow-strong)] transition-all"
            >
              {item.cta.label}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[var(--border-light)] text-[var(--text-secondary)] text-sm rounded hover:border-[var(--cyan)]/40 hover:text-[var(--text-primary)] transition-all"
            >
              了解我们
            </Link>
          </div>
        </div>

        {/* Right side: floating data visualization */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2">
          <div className="relative w-72 h-72">
            {/* Rotating ring */}
            <div
              className="absolute inset-0 border border-[var(--cyan)]/10 rounded-full"
              style={{ animation: "spin 20s linear infinite" }}
            />
            <div
              className="absolute inset-4 border border-dashed border-[var(--cyan)]/15 rounded-full"
              style={{ animation: "spin 30s linear infinite reverse" }}
            />
            {/* Center hex */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-[var(--cyan)]/5 border border-[var(--cyan)]/20 rounded-xl rotate-45 flex items-center justify-center animate-pulse-glow">
                <svg className="w-10 h-10 -rotate-45 text-[var(--cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div
                key={deg}
                className="absolute w-2 h-2 bg-[var(--cyan)] rounded-full shadow-[0_0_8px_var(--cyan)]"
                style={{
                  top: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 46 * Math.cos((deg * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: 0.4 + (deg % 120 === 0 ? 0.4 : 0),
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      {items.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]"
                  : "w-4 bg-[var(--text-muted)]/30 hover:bg-[var(--text-muted)]/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
