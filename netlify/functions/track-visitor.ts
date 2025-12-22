import type { Handler, HandlerEvent } from "@netlify/functions";

interface VisitorData {
  page: string;
  referrer: string;
  userAgent: string;
  timestamp: string;
}

const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Get visitor IP from Netlify headers
    const ip =
      event.headers["x-nf-client-connection-ip"] ||
      event.headers["x-forwarded-for"]?.split(",")[0] ||
      event.headers["client-ip"] ||
      "unknown";

    // Parse geo data from Netlify's geo header
    // This includes: city, country, subdivision (state), latitude, longitude, timezone
    let geoData = {
      city: "unknown",
      country: "unknown",
      countryCode: "unknown",
      region: "unknown",
      latitude: "",
      longitude: "",
      timezone: "unknown",
    };

    const geoHeader = event.headers["x-nf-geo"];
    if (geoHeader) {
      try {
        const geo = JSON.parse(geoHeader);
        geoData = {
          city: geo.city || "unknown",
          country: geo.country?.name || "unknown",
          countryCode: geo.country?.code || "unknown",
          region: geo.subdivision?.name || "unknown",
          latitude: geo.latitude?.toString() || "",
          longitude: geo.longitude?.toString() || "",
          timezone: geo.timezone || "unknown",
        };
      } catch {
        console.error("Failed to parse geo header");
      }
    }

    // Parse request body
    const body: VisitorData = JSON.parse(event.body || "{}");

    // Prepare data for Google Sheets with full location
    const visitorData = {
      ip,
      page: body.page || "/jindal/demo",
      referrer: body.referrer || "direct",
      userAgent: body.userAgent || "unknown",
      timestamp: body.timestamp || new Date().toISOString(),
      // Location data
      city: geoData.city,
      region: geoData.region,
      country: geoData.country,
      countryCode: geoData.countryCode,
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      timezone: geoData.timezone,
    };

    // Get Google Sheets webhook URL from environment variable
    const sheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

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
      // Log to Netlify function logs for debugging
      console.log("Visitor tracked:", JSON.stringify(visitorData, null, 2));
      console.warn(
        "GOOGLE_SHEETS_WEBHOOK_URL not configured. Data logged to console only."
      );
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
