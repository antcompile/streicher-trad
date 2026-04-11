import type { Lang } from '../i18n/languages';

export interface NavItem {
  key: string;
  href: (lang: Lang) => string;
}

export const mainNav: NavItem[] = [
  { key: 'nav.home', href: (lang) => `/${lang}/` },
  { key: 'nav.products', href: (lang) => `/${lang}/products/` },
  { key: 'nav.tours', href: (lang) => `/${lang}/tours/` },
  { key: 'nav.about', href: (lang) => `/${lang}/about/` },
  { key: 'nav.blog', href: (lang) => `/${lang}/blog/` },
  { key: 'nav.contact', href: (lang) => `/${lang}/contact/` },
];
