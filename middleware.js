import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const supportedLocales = ['ar', 'us'];

  const pathnameSegments = req.nextUrl.pathname.split('/');
  const extractedLocale = pathnameSegments[1]; // Extract locale from the pathname

  // Handle root URL case
  if (pathnameSegments.length === 2 && pathnameSegments[1] === '') {
    return NextResponse.redirect(
      new URL('/ar', req.url)
    );
  }

  if (!supportedLocales.includes(extractedLocale)) {
    // Show "Page Not Found" for unsupported locales
    console.log('Page Not Found from middleware');
    return NextResponse.error(new Error('Page Not Found'), 404);
  }

  if (extractedLocale === 'default' && !supportedLocales.includes(req.cookies.get('NEXT_LOCALE')?.value)) {
    // Redirect only for 'ar' and 'us' locales
    const locale = 'en'; // Default to 'en' for unsupported locales

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
}

