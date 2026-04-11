import en from './en.json';
import ar from './ar.json';
import fr from './fr.json';
import { type Lang, defaultLang, languages, supportedLangs } from './languages';

const translations: Record<Lang, Record<string, any>> = { en, ar, fr };

export function useTranslation(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      if (result == null) return key;
      result = result[k];
    }
    return (typeof result === 'string' ? result : key);
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getDirection(lang: Lang): 'ltr' | 'rtl' {
  return languages[lang].dir;
}

export function isRTL(lang: Lang): boolean {
  return languages[lang].dir === 'rtl';
}

export function getLangFromPath(path: string): Lang {
  const segment = path.split('/').filter(Boolean)[0];
  if (segment && supportedLangs.includes(segment as Lang)) {
    return segment as Lang;
  }
  return defaultLang;
}

export function getLocalizedContent<T extends Record<string, string>>(
  content: T,
  lang: Lang
): string {
  return content[lang] || content[defaultLang] || '';
}

export function getLocalizedArray<T extends Record<string, string[]>>(
  content: T,
  lang: Lang
): string[] {
  return content[lang] || content[defaultLang] || [];
}
