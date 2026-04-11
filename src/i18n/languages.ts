export const languages = {
  en: { name: 'English', dir: 'ltr' as const },
  ar: { name: 'العربية', dir: 'rtl' as const },
  fr: { name: 'Français', dir: 'ltr' as const },
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const supportedLangs = Object.keys(languages) as Lang[];
