import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Get the Sec-Fetch-Dest header - this tells us how the resource is being requested
  const fetchDest = request.headers.get("sec-fetch-dest");
  const fetchMode = request.headers.get("sec-fetch-mode");
  const referer = request.headers.get("referer");

  // Allow if:
  // 1. It's a fetch/XHR request (empty or video dest with cors/no-cors mode) - this is our blob fetch
  // 2. Has a valid referer from our site
  const isJavaScriptFetch = fetchMode === "cors" || fetchMode === "no-cors";
  const isFromOurSite = referer && (
    referer.includes("localhost") ||
    referer.includes("netlify.app") ||
    referer.includes("datapaar.com") // Add your domain here
  );

  // Block direct navigation (user typing URL or clicking link)
  if (fetchDest === "document" || (!isJavaScriptFetch && !isFromOurSite)) {
    return new Response("Access Denied", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Allow the request to continue
  return context.next();
};

export const config = {
  path: "/assets/*.mp4",
};
