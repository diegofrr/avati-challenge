import { NextRequest } from 'next/server';
import { SESSION_KEY } from './constants/cookieKeys';
import { AUTH_ROUTE, PUBLIC_ROUTES } from './routes';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has(SESSION_KEY);
  const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTE === request.nextUrl.pathname;

  if (!isPublicRoute && !isAuthenticated) {
    return Response.redirect(new URL('/login', request.url));
  }

  if (isAuthRoute && isAuthenticated) {
    return Response.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
