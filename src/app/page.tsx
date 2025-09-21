import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  // Получаем заголовки для определения предпочтительного языка
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';

  // Простая логика определения языка
  const isUkrainian = acceptLanguage.includes('uk') || acceptLanguage.includes('ua');

  // Редиректим на соответствующую локализованную версию
  if (isUkrainian) {
    redirect('/uk');
  } else {
    redirect('/en');
  }
}
