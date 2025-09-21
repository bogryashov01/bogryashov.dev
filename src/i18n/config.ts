export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'uk'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

// Простая функция для получения переводов
export async function getMessages(locale: Locale) {
  try {
    const messages = await import(`./messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    // Если файл не найден, возвращаем английский по умолчанию
    const messages = await import(`./messages/en.json`);
    return messages.default;
  }
}

// Функция для получения локали из URL или использования по умолчанию
export function getLocale(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];

  if (i18n.locales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return i18n.defaultLocale;
}

// Функция для создания URL с локалью
export function createLocalizedPath(path: string, locale: Locale): string {
  if (locale === i18n.defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}
