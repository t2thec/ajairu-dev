// Branded HTML email template for ajairu.dev
// Wraps any outgoing email with: hexagon logo + brand header, body content, footer
// Table-based layout for Gmail/Outlook/Apple Mail compatibility

const BRAND = {
  name: 'ajairu',
  domain: 'ajairu.dev',
  url: 'https://ajairu.dev',
  contactUrl: 'https://ajairu.dev/contact',
  privacyUrl: 'https://ajairu.dev/privacy',
  navy: '#0f172a',
  accent: '#2563eb',
  accentLight: '#dbeafe',
  accentDark: '#1d4ed8',
  email: 'hello@ajairu.dev',
  tagline: 'Custom software for UK SMEs',
};

// Inline SVG hexagon logo as a data URI (base64) for email clients that support it
// Also provide a text fallback
const LOGO_SVG_BASE64 = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.41,2.00C17.10,2.25 23.06,3.84 28.13,6.46C29.65,11.96 29.98,18.12 29.04,23.74C24.29,26.89 18.53,29.10 12.89,29.96C8.43,26.41 4.55,21.61 1.99,16.52C3.99,11.17 7.35,6.00 11.41,2.00ZM21.82,24.31C17.86,24.76 13.60,24.32 9.84,23.08C8.25,19.50 7.41,15.34 7.50,11.40C10.47,8.74 14.22,6.60 18.03,5.41C21.46,7.34 24.61,10.19 26.88,13.39C26.03,17.25 24.23,21.14 21.82,24.31Z" fill="${BRAND.accent}"/>
  </svg>`
).toString('base64');

/**
 * Wrap raw HTML body content in a branded email template.
 * @param {string} innerHtml - the email body HTML (without html/body tags)
 * @param {object} opts - optional: { title, preheader }
 * @returns {string} full HTML email document
 */
export function wrapEmailHtml(innerHtml, opts = {}) {
  const title = opts.title || BRAND.name;
  const preheader = opts.preheader || '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${title}</title>
${preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;max-height:0px;width:0px;">${preheader}</div>` : ''}
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Open Sans',Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!-- Preview text hidden -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;padding:24px 0;">
<tr>
<td align="center">

<!-- Outer container -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">

<!-- Header -->
<tr>
<td style="background:${BRAND.navy};padding:20px 40px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td width="36" style="vertical-align:middle;">
<img src="data:image/svg+xml;base64,${LOGO_SVG_BASE64}" alt="${BRAND.name}" width="28" height="28" style="display:block;border:0;outline:0;text-decoration:none;" />
</td>
<td style="vertical-align:middle;padding-left:12px;">
<span style="font-family:'Comfortaa','Open Sans',Arial,sans-serif;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">${BRAND.name}</span>
</td>
<td align="right" style="vertical-align:middle;">
<span style="font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.6);">${BRAND.tagline}</span>
</td>
</tr>
</table>
</td>
</tr>

<!-- Accent bar -->
<tr>
<td style="background:${BRAND.accent};height:4px;line-height:4px;font-size:4px;">&nbsp;</td>
</tr>

<!-- Body content -->
<tr>
<td style="padding:32px 40px;">
${innerHtml}
</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="vertical-align:top;">
<p style="margin:0 0 8px;font-family:'Comfortaa','Open Sans',Arial,sans-serif;font-size:15px;font-weight:700;color:${BRAND.navy};">${BRAND.name}</p>
<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;color:#64748b;line-height:1.5;">${BRAND.tagline}</p>
<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;color:#64748b;line-height:1.5;">
<a href="${BRAND.url}" style="color:${BRAND.accent};text-decoration:none;">${BRAND.domain}</a>
&nbsp;|&nbsp;
<a href="${BRAND.contactUrl}" style="color:${BRAND.accent};text-decoration:none;">Contact</a>
&nbsp;|&nbsp;
<a href="${BRAND.privacyUrl}" style="color:${BRAND.accent};text-decoration:none;">Privacy</a>
</p>
<p style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;line-height:1.5;">${BRAND.email}<br>UK registered business</p>
</td>
</tr>
</table>
</td>
</tr>

</table>

<!-- Footer space -->
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
<tr>
<td style="padding:12px 0;text-align:center;">
<p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;">You received this email because you interacted with ${BRAND.name}. We will not send you anything else unless you ask.</p>
</td>
</tr>
</table>

</td>
</tr>
</table>
</body>
</html>`;
}

/**
 * Build the guide email inner HTML (the body that goes inside the template).
 */
export function guideEmailInnerHtml(guideTitle, guideSummary) {
  return `
<h1 style="margin:0 0 16px;font-family:'Open Sans',Arial,sans-serif;font-size:22px;font-weight:800;color:${BRAND.navy};line-height:1.3;">Your Free Guide is Attached</h1>
<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#334155;line-height:1.6;">Thank you for requesting our guide. The PDF is attached to this email and should appear in your inbox within the next few minutes.</p>

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.accentLight};border-radius:10px;margin:16px 0;">
<tr>
<td style="padding:20px 24px;">
<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;font-weight:700;color:${BRAND.accentDark};text-transform:uppercase;letter-spacing:1px;">Your Guide</p>
<p style="margin:0;font-family:'Open Sans',Arial,sans-serif;font-size:16px;font-weight:700;color:${BRAND.navy};line-height:1.4;">${guideTitle}</p>
</td>
</tr>
</table>

${guideSummary}

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.navy};border-radius:10px;margin:24px 0;">
<tr>
<td style="padding:24px;text-align:center;">
<p style="margin:0 0 12px;font-family:'Open Sans',Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff;">Want help implementing any of these?</p>
<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.5;">Book a free, no-obligation 30-minute discovery call.</p>
<a href="${BRAND.contactUrl}" style="display:inline-block;background:${BRAND.accent};color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 32px;border-radius:8px;font-family:Arial,sans-serif;">Book a Free Discovery Call</a>
</td>
</tr>
</table>

<p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#64748b;line-height:1.6;">If you have any questions, just reply to this email and we will get back to you within one business day.</p>`;
}

/**
 * Build notification email inner HTML (for internal notifications to Toby).
 */
export function notificationInnerHtml(title, contentHtml) {
  return `
<h1 style="margin:0 0 16px;font-family:'Open Sans',Arial,sans-serif;font-size:20px;font-weight:700;color:${BRAND.navy};line-height:1.3;">${title}</h1>
${contentHtml}
<p style="margin:16px 0 0;padding:12px 16px;background:#f1f5f9;border-radius:6px;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;line-height:1.5;">This is an internal notification from the ${BRAND.domain} website.</p>`;
}

export { BRAND };