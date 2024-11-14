import { verifyAccess } from "@vercel/flags";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const access = await verifyAccess(
    request.headers.get("Authorization"),
    import.meta.env.FLAGS_SECRET,
  );
  if (!access) {
    return new Response(null, { status: 401 });
  }

  return new Response(
    JSON.stringify({
      definitions: {
        clearLink: {
          description: "Controls whether the new feature is visible",
          options: [
            { value: false, label: "Off" },
            { value: true, label: "On" },
          ],
        },
      },
    }),
  );
};