// Standalone API server for quiz/guide/contact submissions
// Runs on port 8092, receives POSTs from the static site
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'submissions.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ quiz_responses: [], guide_downloads: [], contact_submissions: [] }));
}

function readDB() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')); }
  catch { return { quiz_responses: [], guide_downloads: [], contact_submissions: [] }; }
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// --- Email setup ---

let emailConfig = null;
let transporter = null;

try {
  const localConfig = await import('./email.config.local.js');
  emailConfig = localConfig.emailConfig;
  if (emailConfig.user && emailConfig.user !== 'TODO_FILL_IN') {
    transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: { user: emailConfig.user, pass: emailConfig.password },
    });
    console.log('Email configured:', emailConfig.fromEmail);
  } else {
    console.log('Email not configured (stubs only). Fill in email.config.local.js to enable.');
  }
} catch {
  console.log('No email.config.local.js found. Copy email.config.example.js to enable email.');
}

async function sendQuizResultsEmail(toEmail, score, verdict, categoryScores) {
  if (!transporter || !toEmail) return;
  const categories = [
    { name: 'Data Readiness', score: categoryScores?.data ?? '-' },
    { name: 'Process Maturity', score: categoryScores?.processes ?? '-' },
    { name: 'Team Readiness', score: categoryScores?.team ?? '-' },
    { name: 'Strategy & Priority', score: categoryScores?.strategy ?? '-' },
  ];

  const scoreColor = score >= 75 ? '#00a88e' : score >= 50 ? '#1a2332' : score >= 25 ? '#e8a838' : '#e53935';

  const categoryBars = categories.map(c => {
    const s = typeof c.score === 'number' ? c.score : 0;
    const barColor = s >= 67 ? '#00a88e' : s >= 34 ? '#1a2332' : '#e53935';
    return `
      <tr>
        <td style="padding:8px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-family:Arial,sans-serif;font-size:14px;font-weight:600;color:#1a2332;">${c.name}</td>
              <td align="right" style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#1a2332;">${c.score}/100</td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">
            <tr>
              <td style="background:#e8ecef;border-radius:100px;height:8px;">
                <table cellpadding="0" cellspacing="0" style="width:${s}%;"><tr><td style="background:${barColor};border-radius:100px;height:8px;font-size:0;line-height:0;">&nbsp;</td></tr></table>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
  }).join('');

  await transporter.sendMail({
    from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`,
    to: toEmail,
    subject: `Your Software Readiness Score: ${score}/100`,
    text: `Your Software Readiness Score: ${score}/100\n\n${verdict}\n\nBreakdown:\n${categories.map(c => `${c.name}: ${c.score}/100`).join('\n')}\n\nWant to go deeper? Our Technical Consultancy (from £2,000) examines your actual operations and gives you a prioritised report with ROI estimates. Book a free call: https://ajairu.dev/contact\n\n${emailConfig.fromName}`,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background:#1a2332;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;">Your AI Readiness Results</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">From ${emailConfig.fromName}</p>
          </td>
        </tr>

        <!-- Score -->
        <tr>
          <td style="padding:32px 40px;text-align:center;">
            <p style="margin:0 0 8px;font-size:14px;color:#6b7785;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Your Score</p>
            <p style="margin:0;font-size:56px;font-weight:800;color:${scoreColor};line-height:1;">${score}<span style="font-size:24px;color:#9aa5b1;">/100</span></p>
            <p style="margin:16px auto 0;max-width:420px;font-size:15px;color:#3d4d5c;line-height:1.6;">${verdict}</p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e8ecef;margin:0;"></td></tr>

        <!-- Breakdown -->
        <tr>
          <td style="padding:24px 40px;">
            <h2 style="margin:0 0 16px;font-size:18px;color:#1a2332;font-weight:700;">Breakdown by Category</h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${categoryBars}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:24px 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#e8f8f5;border-radius:10px;border:1px solid #00a88e;">
              <tr>
                <td style="padding:24px;text-align:center;">
                  <h3 style="margin:0 0 8px;font-size:16px;color:#1a2332;font-weight:700;">Want to go deeper?</h3>
                  <p style="margin:0 0 16px;font-size:14px;color:#3d4d5c;line-height:1.5;">Our AI Opportunity Audit (from &pound;750) examines your actual operations and gives you a prioritised report with ROI estimates.</p>
                  <a href="https://ajairu.dev/contact" style="display:inline-block;background:#00a88e;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 32px;border-radius:8px;">Book a Free Discovery Call</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;background:#f8fafb;border-top:1px solid #e8ecef;">
            <p style="margin:0;font-size:12px;color:#9aa5b1;text-align:center;line-height:1.5;">${emailConfig.fromName} | AI Consulting for UK SMEs<br>You received this email because you completed the AI Readiness Quiz. We will not send you anything else unless you ask.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });
}

async function sendGuideEmail(toEmail) {
  if (!transporter || !toEmail) return;
  await transporter.sendMail({
    from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`,
    to: toEmail,
    subject: 'Your Free Guide: 5 Custom Software Projects That Pay for Themselves in 12 Months',
    text: `Here is your free guide: 5 Custom Software Projects That Pay for Themselves in 12 Months.\n\n1. Customer Enquiry Triage and Response - 60-80% of enquiries get a first response in seconds\n2. Invoice and Document Processing - 70% reduction in processing time\n3. Meeting Notes and Action Item Capture - 3-5 hours saved per person per week\n4. Content Drafting for Marketing - 50-70% reduction in content creation time\n5. Internal Knowledge Base and Search - 50% reduction in time spent searching\n\nWant help implementing any of these? Book a free discovery call: https://ajairu.dev/contact\n\n${emailConfig.fromName}`,
    html: `<h2>Your Free Guide: 5 Custom Software Projects That Pay for Themselves in 12 Months</h2><ol><li><strong>Customer Enquiry Triage and Response</strong> - 60-80% of enquiries get a first response in seconds</li><li><strong>Invoice and Document Processing</strong> - 70% reduction in processing time</li><li><strong>Meeting Notes and Action Item Capture</strong> - 3-5 hours saved per person per week</li><li><strong>Content Drafting for Marketing</strong> - 50-70% reduction in content creation time</li><li><strong>Internal Knowledge Base and Search</strong> - 50% reduction in time spent searching</li></ol><p>Want help implementing any of these? <a href="https://ajairu.dev/contact">Book a free discovery call</a>.</p><p>${emailConfig.fromName}</p>`,
  });
}

async function sendContactNotification(data) {
  if (!transporter || !emailConfig.notifyEmail) return;
  await transporter.sendMail({
    from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`,
    to: emailConfig.notifyEmail,
    subject: `New contact form submission from ${data.name}`,
    text: `New contact form submission.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.company || 'Not provided'}\nCompany Size: ${data.employees || 'Not provided'}\nService Interest: ${data.service || 'Not specified'}\n\nMessage:\n${data.message}\n\nUser ID: ${data.userId || 'N/A'}\nSubmitted: ${new Date().toISOString()}`,
    html: `<h2>New contact form submission</h2><table><tr><td><strong>Name:</strong></td><td>${data.name}</td></tr><tr><td><strong>Email:</strong></td><td>${data.email}</td></tr><tr><td><strong>Phone:</strong></td><td>${data.phone || 'Not provided'}</td></tr><tr><td><strong>Company:</strong></td><td>${data.company || 'Not provided'}</td></tr><tr><td><strong>Company Size:</strong></td><td>${data.employees || 'Not provided'}</td></tr><tr><td><strong>Service Interest:</strong></td><td>${data.service || 'Not specified'}</td></tr></table><h3>Message</h3><p>${data.message}</p><p style="color:#999;font-size:0.85rem;">User ID: ${data.userId || 'N/A'}<br>Submitted: ${new Date().toISOString()}</p>`,
  });
}

async function sendQuizNotification(data) {
  if (!transporter || !emailConfig.notifyEmail) return;
  await transporter.sendMail({
    from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`,
    to: emailConfig.notifyEmail,
    subject: `New quiz completion - Score: ${data.score}/100${data.email ? ' from ' + data.email : ''}`,
    text: `New quiz completion.\n\nScore: ${data.score}/100\nVerdict: ${data.verdict || 'N/A'}\nEmail: ${data.email || 'Not provided'}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.company || 'Not provided'}\nUser ID: ${data.userId}\nSubmitted: ${new Date().toISOString()}`,
    html: `<h2>New quiz completion</h2><p><strong>Score: ${data.score}/100</strong></p><p>Verdict: ${data.verdict || 'N/A'}</p><table><tr><td><strong>Email:</strong></td><td>${data.email || 'Not provided'}</td></tr><tr><td><strong>Phone:</strong></td><td>${data.phone || 'Not provided'}</td></tr><tr><td><strong>Company:</strong></td><td>${data.company || 'Not provided'}</td></tr></table><p style="color:#999;font-size:0.85rem;">User ID: ${data.userId}<br>Submitted: ${new Date().toISOString()}</p>`,
  });
}

// --- Validation helpers ---

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const UK_PHONE_RE = /^(\+?44|0)\s?\d[\d\s()]{8,18}$/;
const MAX_BODY = 50000;
const MAX_STRING = 5000;
const MAX_MESSAGE = 10000;

function isStr(val, max = MAX_STRING) {
  return typeof val === 'string' && val.length > 0 && val.length <= max;
}

function isEmail(val) {
  return isStr(val, 254) && EMAIL_RE.test(val);
}

function isPhone(val) {
  if (!val) return true;
  const cleaned = val.replace(/[\s-()]/g, '');
  return typeof val === 'string' && val.length <= 30 && UK_PHONE_RE.test(val);
}

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, MAX_STRING);
}

function validateQuiz(data) {
  const errors = [];
  if (!isStr(data.userId, 100)) errors.push('Invalid user ID');
  if (typeof data.score !== 'number' || data.score < 0 || data.score > 100) errors.push('Invalid score');
  if (!Array.isArray(data.answers) || data.answers.length === 0 || data.answers.length > 50) errors.push('Invalid answers');
  if (data.answers && Array.isArray(data.answers) && data.answers.some(a => typeof a !== 'number' || a < 0 || a > 3)) errors.push('Invalid answer values');
  if (data.email && !isEmail(data.email)) errors.push('Invalid email format');
  if (data.phone && !isPhone(data.phone)) errors.push('Invalid phone format');
  if (data.categoryScores && typeof data.categoryScores !== 'object') errors.push('Invalid category scores');
  return errors;
}

function validateGuide(data) {
  const errors = [];
  if (!isStr(data.userId, 100)) errors.push('Invalid user ID');
  if (!isEmail(data.email)) errors.push('Valid email is required');
  return errors;
}

function validateContact(data) {
  const errors = [];
  if (!isStr(data.name, 200)) errors.push('Name is required');
  if (!isEmail(data.email)) errors.push('Valid email is required');
  if (data.phone && !isPhone(data.phone)) errors.push('Invalid phone format');
  if (!isStr(data.message, MAX_MESSAGE)) errors.push('Message is required');
  if (data.company && !isStr(data.company, 200)) errors.push('Company name too long');
  if (data.employees && !isStr(data.employees, 20)) errors.push('Invalid employee count');
  if (data.service && !isStr(data.service, 50)) errors.push('Invalid service selection');
  return errors;
}

// --- Rate limiting (in-memory, per IP) ---

const rateLimit = new Map();
const RATE_WINDOW = 60000;
const RATE_MAX = 100;

function checkRate(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  entry.count++;
  return entry.count <= RATE_MAX;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimit.entries()) {
    if (now > entry.resetTime) rateLimit.delete(ip);
  }
}, 300000);

// --- Honeypot ---

function isBot(data) {
  return data.website || data.url || data.company_website;
}

// --- Server ---

const server = http.createServer((req, res) => {
  const origin = req.headers.origin || '*';

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  if (!checkRate(clientIp)) {
    res.writeHead(429, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
    res.end(JSON.stringify({ error: 'Too many requests. Please try again in a minute.' }));
    return;
  }

  let body = '';
  let bodyTooLarge = false;

  req.on('data', chunk => {
    body += chunk;
    if (body.length > MAX_BODY) { bodyTooLarge = true; req.destroy(); }
  });

  req.on('end', () => {
    try {
      if (bodyTooLarge) {
        res.writeHead(413, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
        res.end(JSON.stringify({ error: 'Request too large' }));
        return;
      }

      const data = body ? JSON.parse(body) : {};

      if (isBot(data)) {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
        res.end(JSON.stringify({ success: true }));
        return;
      }

      const action = data.action || 'quiz';
      const db = readDB();

      if (action === 'quiz') {
        const errors = validateQuiz(data);
        if (errors.length > 0) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
          res.end(JSON.stringify({ error: errors.join('. ') }));
          return;
        }
        const record = {
          user_id: sanitize(data.userId),
          email: data.email ? sanitize(data.email) : null,
          phone: data.phone ? sanitize(data.phone) : null,
          company: data.company ? sanitize(data.company) : null,
          score: Math.round(data.score),
          data_score: data.categoryScores?.data != null ? Math.round(data.categoryScores.data) : null,
          processes_score: data.categoryScores?.processes != null ? Math.round(data.categoryScores.processes) : null,
          team_score: data.categoryScores?.team != null ? Math.round(data.categoryScores.team) : null,
          strategy_score: data.categoryScores?.strategy != null ? Math.round(data.categoryScores.strategy) : null,
          answers: data.answers,
          verdict: data.verdict ? sanitize(data.verdict) : null,
          created_at: new Date().toISOString(),
        };
        db.quiz_responses.push(record);
        writeDB(db);

        // Send emails (non-blocking, won't fail the request)
        if (data.email) sendQuizResultsEmail(data.email, record.score, record.verdict, data.categoryScores).catch(e => console.error('Quiz email failed:', e.message));
        sendQuizNotification(record).catch(e => console.error('Quiz notification failed:', e.message));

        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
        res.end(JSON.stringify({ success: true }));
        return;
      }

      if (action === 'guide') {
        const errors = validateGuide(data);
        if (errors.length > 0) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
          res.end(JSON.stringify({ error: errors.join('. ') }));
          return;
        }
        const record = {
          user_id: sanitize(data.userId),
          email: sanitize(data.email),
          created_at: new Date().toISOString(),
        };
        db.guide_downloads.push(record);
        writeDB(db);

        sendGuideEmail(data.email).catch(e => console.error('Guide email failed:', e.message));

        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
        res.end(JSON.stringify({ success: true }));
        return;
      }

      if (action === 'contact') {
        const errors = validateContact(data);
        if (errors.length > 0) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
          res.end(JSON.stringify({ error: errors.join('. ') }));
          return;
        }
        const record = {
          user_id: data.userId ? sanitize(data.userId) : null,
          name: sanitize(data.name),
          email: sanitize(data.email),
          phone: data.phone ? sanitize(data.phone) : null,
          company: data.company ? sanitize(data.company) : null,
          employees: data.employees ? sanitize(data.employees) : null,
          service: data.service ? sanitize(data.service) : null,
          message: sanitize(data.message),
          created_at: new Date().toISOString(),
        };
        db.contact_submissions.push(record);
        writeDB(db);

        sendContactNotification(record).catch(e => console.error('Contact notification failed:', e.message));

        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
        res.end(JSON.stringify({ success: true, message: 'Thank you for getting in touch. We will respond within one business day.' }));
        return;
      }

      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
      res.end(JSON.stringify({ error: 'Unknown action' }));
    } catch (err) {
      console.error('API error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': origin });
      res.end(JSON.stringify({ error: 'Something went wrong' }));
    }
  });
});

server.listen(8091, () => {
  console.log('API server running on http://localhost:8092');
});