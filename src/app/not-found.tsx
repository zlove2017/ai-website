import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[var(--base)]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative text-center px-4">
        <div
          className="text-8xl lg:text-9xl font-bold text-[var(--cyan)] opacity-20 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </div>
        <h1
          className="text-2xl font-bold text-[var(--text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          页面未找到
        </h1>
        <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
          您访问的页面不存在或已被移动
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--cyan)] text-[var(--base)] font-semibold text-sm rounded hover:shadow-[0_0_20px_var(--cyan-glow-strong)] transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          返回首页
        </Link>
      </div>
    </section>
  );
}
