export const defaultLocale = 'pt';
export const locales = ['pt', 'en', 'es'];

const messages = {
  pt: () => import('../../messages/pt.json').then(m => m.default),
  en: () => import('../../messages/en.json').then(m => m.default),
  es: () => import('../../messages/es.json').then(m => m.default),
};

export async function getMessages(locale) {
  if (!messages[locale]) {
    return messages[defaultLocale]();
  }
  return messages[locale]();
}
