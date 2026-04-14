import type { Lang } from '../i18n/languages';

export interface NavItem {
  key: string;
  href: (lang: Lang) => string;
}

export const mainNav: NavItem[] = [
  { key: 'nav.home', href: (lang) => `/${lang}/` },
  { key: 'nav.expertises', href: (lang) => `/${lang}/#expertises` },
  { key: 'nav.blog', href: (lang) => `/${lang}/blog/` },
  { key: 'nav.contact', href: (lang) => `/${lang}/contact/` },
];
