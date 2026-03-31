"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/30 flex items-center justify-center">
          <svg className="w-7 h-7 text-[var(--green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-xl font-semibold text-[var(--text-primary)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          提交成功
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          感谢您的留言，我们会尽快与您联系
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-[var(--base)] border border-[var(--border)] rounded text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-xs font-medium text-[var(--text-muted)] mb-2 tracking-wider uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            姓名 *
          </label>
          <input type="text" name="name" required className={inputClass} placeholder="您的姓名" />
        </div>
        <div>
          <label
            className="block text-xs font-medium text-[var(--text-muted)] mb-2 tracking-wider uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            电话 *
          </label>
          <input type="tel" name="phone" required className={inputClass} placeholder="您的电话" />
        </div>
      </div>

      <div>
        <label
          className="block text-xs font-medium text-[var(--text-muted)] mb-2 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          公司名称
        </label>
        <input type="text" name="company" className={inputClass} placeholder="您的公司名称" />
      </div>

      <div>
        <label
          className="block text-xs font-medium text-[var(--text-muted)] mb-2 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          感兴趣的方案
        </label>
        <select name="solution" className={inputClass}>
          <option value="">请选择</option>
          <option value="smart-factory">智慧工厂解决方案</option>
          <option value="energy-monitoring">智慧能源监控方案</option>
          <option value="predictive-maintenance">预测性维护解决方案</option>
          <option value="other">其他</option>
        </select>
      </div>

      <div>
        <label
          className="block text-xs font-medium text-[var(--text-muted)] mb-2 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          您的需求 *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="请简单描述您的需求或问题"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-[var(--cyan)] text-[var(--base)] font-semibold text-sm rounded hover:shadow-[0_0_30px_var(--cyan-glow-strong)] transition-all"
      >
        提交咨询
      </button>
    </form>
  );
}
