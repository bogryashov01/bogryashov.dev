import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './src/i18n/config';

function getLocale(request: NextRequest): string {
  // Проверяем заголовок Accept-Language
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    // Простая проверка на украинский язык
    if (acceptLanguage.includes('uk') || acceptLanguage.includes('ua')) {
      return 'uk';
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  // Проверяем есть ли локаль в pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  // Редиректим если нет локали
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Редиректим на главную страницу с локалью
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    // Редиректим на другие страницы с локалью
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  // Матчер исключает файлы, которые не нужно обрабатывать
  matcher: [
    // Пропускаем все внутренние пути Next.js
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    // Включаем корневой путь
    '/',
  ],
};
