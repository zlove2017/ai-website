import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

// ========== 类型定义 ==========

export interface SiteConfig {
  companyName: string;
  logo: string;
  slogan: string;
  nav: { label: string; href: string }[];
  contact: { phone: string; email: string; address: string };
  seo: { title: string; description: string; keywords: string };
  icp: string;
  socialLinks?: { wechat?: string };
}

export interface HeroItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
}

export interface HomeData {
  hero: HeroItem[];
  stats: { value: string; label: string }[];
  featuredSolutions: string[];
  featuredCases: string[];
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  icon: string;
  summary: string;
  features: { title: string; description: string; icon: string }[];
  advantages: string[];
  applicableScenes: string[];
  relatedCases: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  coverImage: string;
  industry: string;
  client: string;
  year: string;
  solution: string;
  background: string;
  approach: string;
  results: { metric: string; before: string; after: string }[];
  testimonial: string;
  gallery: string[];
}

export interface AboutData {
  title: string;
  subtitle: string;
  intro: string;
  mission: string;
  advantages: { title: string; description: string; icon: string }[];
  milestones: { year: string; event: string }[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  info: {
    phone: string;
    email: string;
    address: string;
    workHours: string;
  };
}

// ========== 读取函数 ==========

export function getSiteConfig(): SiteConfig {
  return readJson<SiteConfig>(path.join(contentDir, "site.json"));
}

export function getHomeData(): HomeData {
  return readJson<HomeData>(path.join(contentDir, "home.json"));
}

export function getAboutData(): AboutData {
  return readJson<AboutData>(path.join(contentDir, "about.json"));
}

export function getContactData(): ContactData {
  return readJson<ContactData>(path.join(contentDir, "contact.json"));
}

export function getAllSolutions(): Solution[] {
  const dir = path.join(contentDir, "solutions");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files.map((f) => readJson<Solution>(path.join(dir, f)));
}

export function getSolution(slug: string): Solution | null {
  const filePath = path.join(contentDir, "solutions", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readJson<Solution>(filePath);
}

export function getAllCases(): CaseStudy[] {
  const dir = path.join(contentDir, "cases");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files.map((f) => readJson<CaseStudy>(path.join(dir, f)));
}

export function getCase(slug: string): CaseStudy | null {
  const filePath = path.join(contentDir, "cases", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readJson<CaseStudy>(filePath);
}
