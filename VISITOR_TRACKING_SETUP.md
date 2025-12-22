# Visitor Tracking Setup Guide

This guide explains how to set up Google Sheets tracking for the `/jindal/demo` page.

## Overview

The demo page at `/jindal/demo` automatically tracks visitors with the following data:
- IP Address
- City, Region, Country
- Latitude & Longitude
- Timezone
- Page visited
- Referrer (where they came from)
- User Agent (browser/device info)
- Timestamp

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Jindal Demo Visitors"

---

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Add headers if first row is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp', 'IP', 'City', 'Region', 'Country',
      'Country Code', 'Latitude', 'Longitude', 'Timezone',
      'Page', 'Referrer', 'User Agent'
    ]);
  }

  sheet.appendRow([
    data.timestamp,
    data.ip,
    data.city,
    data.region,
    data.country,
    data.countryCode,
    data.latitude,
    data.longitude,
    data.timezone,
    data.page,
    data.referrer,
    data.userAgent
  ]);

  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (Ctrl+S / Cmd+S)
5. Name the project (e.g., "Visitor Tracker")

---

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Visitor tracking webhook"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts to grant permissions
6. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

---

## Step 4: Add URL to Netlify

1. Go to your [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Go to **Site settings > Environment variables**
4. Click **Add a variable**
5. Add:
   - **Key**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: Your Google Apps Script Web App URL (from Step 3)
6. Click **Save**

---

## Step 5: Redeploy Your Site

After adding the environment variable, trigger a new deploy:
- Push a new commit, OR
- Go to **Deploys** in Netlify and click **Trigger deploy > Deploy site**

---

## Testing

1. Visit your demo page at `https://your-site.netlify.app/jindal/demo`
2. Check your Google Sheet - a new row should appear with your visit data
3. Check Netlify Function logs at **Functions > track-visitor** for debugging

---

## Troubleshooting

### Data not appearing in Google Sheet?

1. **Check the environment variable** - Make sure `GOOGLE_SHEETS_WEBHOOK_URL` is set correctly in Netlify
2. **Check function logs** - Go to Netlify > Functions > track-visitor to see any errors
3. **Redeploy** - Environment variables require a redeploy to take effect

### Getting "unknown" for location data?

- Location data is provided by Netlify's edge network
- It may show "unknown" for localhost/development
- Works correctly in production on Netlify

### Google Apps Script errors?

1. Go to Apps Script > Executions to see error logs
2. Make sure the script is deployed as "Anyone" can access
3. Re-deploy if you made any changes to the script

---

## Data Tracked

| Column | Description | Example |
|--------|-------------|---------|
| Timestamp | Visit time (ISO format) | 2024-01-15T10:30:00.000Z |
| IP | Visitor IP address | 203.0.113.42 |
| City | City name | Mumbai |
| Region | State/Province | Maharashtra |
| Country | Country name | India |
| Country Code | ISO country code | IN |
| Latitude | GPS latitude | 19.0760 |
| Longitude | GPS longitude | 72.8777 |
| Timezone | Visitor timezone | Asia/Kolkata |
| Page | Page visited | /jindal/demo |
| Referrer | Traffic source | https://google.com |
| User Agent | Browser/device info | Mozilla/5.0... |

---

## Notes

- **VPN Users**: If a visitor uses a VPN, the location will show the VPN server's location
- **Rate Limits**: Google Apps Script has a limit of ~20,000 requests/day for free accounts
- **Privacy**: Ensure you have appropriate privacy policies for collecting visitor data
