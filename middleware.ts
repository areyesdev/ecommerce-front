import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';

//Rutas que requieren autenticación
const isProtectedRoute = createRouteMatcher([
  '/checkout(.*)',
  '/orders(.*)',
  '/mi-cuenta(.*)',
]);

export default clerkMiddleware(async (auth, req, res) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};