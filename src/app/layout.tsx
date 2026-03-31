import type { Metadata } from "next";
import { Chakra_Petch, Manrope, JetBrains_Mono } from "next/font/google";
import { getSiteConfig } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const site = getSiteConfig();

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: `%s | ${site.companyName}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${chakra.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header
          companyName={site.companyName}
          nav={site.nav}
          phone={site.contact.phone}
        />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer
          companyName={site.companyName}
          contact={site.contact}
          nav={site.nav}
          icp={site.icp}
        />
      </body>
    </html>
  );
}
