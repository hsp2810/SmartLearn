import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { AUTH_ROUTES, PUBLIC_ROUTES } from "./routes";

const isAuthRoute = createRouteMatcher(AUTH_ROUTES);
const isPublicRoute = createRouteMatcher(PUBLIC_ROUTES);

export default clerkMiddleware((auth, request) => {
  if (!isAuthRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
