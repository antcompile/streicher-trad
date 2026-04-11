export const siteConfig = {
  name: "Dany's Bees",
  domain: 'danysbees.com',
  url: 'https://danysbees.com',
  email: 'admin@danysbees.com',
  phone: '+961 3 394 824',
  phoneRaw: '+9613394824',
  whatsappNumber: '96103394824',
  instagram: '@aassal.ashkar',
  instagramUrl: 'https://www.instagram.com/aassal.ashkar',
  location: {
    en: 'Ashkar, North Lebanon',
    ar: 'عشار، شمال لبنان',
    fr: 'Ashkar, Nord-Liban',
  },
  formspreeContact: 'https://formspree.io/f/xnjoevzr',
  formspreeBooking: 'https://formspree.io/f/xdapqzdr',
  formspreeNewsletter: 'https://formspree.io/f/xaqlrjbr',
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppOrderUrl(productName: string, lang: string): string {
  const greetings: Record<string, string> = {
    en: `Hi! I'd like to order ${productName}. Please let me know the details.`,
    ar: `مرحبا! أود طلب ${productName}. أرجو إعلامي بالتفاصيل.`,
    fr: `Bonjour! Je souhaite commander ${productName}. Merci de me donner les détails.`,
  };
  return getWhatsAppUrl(greetings[lang] || greetings.en);
}
