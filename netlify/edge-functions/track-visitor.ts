import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Get geo data directly from Netlify Edge context
    const geo = context.geo;

    // Get IP from request
    const ip = context.ip || "unknown";

    // Parse request body
    const body = await request.json().catch(() => ({}));

    // Prepare visitor data with geo information
    const visitorData = {
      timestamp: body.timestamp || new Date().toISOString(),
      ip,
      city: geo?.city || "unknown",
      region: geo?.subdivision?.name || "unknown",
      country: geo?.country?.name || "unknown",
      countryCode: geo?.country?.code || "unknown",
      latitude: geo?.latitude?.toString() || "",
      longitude: geo?.longitude?.toString() || "",
      timezone: geo?.timezone || "unknown",
      page: body.page || "/jindal/demo",
      referrer: body.referrer || "direct",
      userAgent: body.userAgent || "unknown",
    };

    // Get Google Sheets webhook URL from environment variable
    const sheetWebhookUrl = Netlify.env.get("GOOGLE_SHEETS_WEBHOOK_URL");

    if (sheetWebhookUrl) {
      // Send data to Google Sheets via Apps Script Web App
      const response = await fetch(sheetWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitorData),
      });

      if (!response.ok) {
        console.error("Failed to log to Google Sheets:", await response.text());
      }
    } else {
      // Log to console for debugging
      console.log("Visitor tracked:", JSON.stringify(visitorData, null, 2));
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL not configured");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/track-visitor",
};
