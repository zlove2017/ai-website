import type { Metadata } from "next";
import { getContactData } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系九两科技，获取AI工业智能化解决方案咨询",
};

export default function ContactPage() {
  const contact = getContactData();

  const contactItems = [
    {
      label: "电话",
      value: contact.info.phone,
      href: `tel:${contact.info.phone}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
    },
    {
      label: "邮箱",
      value: contact.info.email,
      href: `mailto:${contact.info.email}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      label: "地址",
      value: contact.info.address,
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
    },
    {
      label: "工作时间",
      value: contact.info.workHours,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  ];

  return (
    <>
      <PageHeader
        label="Contact"
        title={contact.title}
        description={contact.description}
      />

      <section className="py-16 lg:py-24 bg-[var(--base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="section-label mb-6">联系方式</div>
              <div className="space-y-5">
                {contactItems.map((item) => {
                  const content = (
                    <div className="glow-card rounded-xl p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--cyan)]/10 border border-[var(--cyan)]/20 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[var(--cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-xs text-[var(--text-muted)] mb-1 tracking-wider uppercase"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-[var(--text-primary)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Status */}
              <div className="mt-8 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]" />
                </span>
                <span
                  className="text-xs text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  在线 | 平均响应时间 &lt; 2小时
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="section-label mb-6">在线咨询</div>
              <div className="glow-card rounded-xl p-6 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
