import { defineMiddleware } from "astro:middleware";
import { decrypt } from "@vercel/flags";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const featureFlagOverrideCookie = context.cookies.get(
    "vercel-flag-overrides",
  )?.value;
  if (featureFlagOverrideCookie && context.url.pathname === "/") {
    const decryptedFlags = (await decrypt(featureFlagOverrideCookie),
    import.meta.env.FLAGS_SECRET) as {
      clearLink: boolean;
    };
    context.cookies.set("clearLink", decryptedFlags.clearLink.valueOf)
    if (decryptedFlags.clearLink) {
      return context.redirect("/homepage-alternative-feature-flag");
    }
  }
  return response;
});