export const languages = {
  fr: { name: 'Français' },
  en: { name: 'English' },
} as const;

export const defaultLang = 'fr';

export type Lang = keyof typeof languages;

export const supportedLangs = Object.keys(languages) as Lang[];
