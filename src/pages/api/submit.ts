import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const SITE_LABEL = 'ajairu.dev';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', '..', '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'submissions.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize the JSON database file
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({
    quiz_responses: [],
    guide_downloads: [],
    contact_submissions: [],
  }));
}

function readDB() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch {
    return { quiz_responses: [], guide_downloads: [], contact_submissions: [] };
  }
}

function writeDB(data: any) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const rawBody = new TextDecoder().decode(await request.arrayBuffer());
    console.log('Raw body length:', rawBody.length, 'Content:', rawBody.substring(0, 200));
    const body = rawBody ? JSON.parse(rawBody) : {};
    console.log('Parsed body keys:', Object.keys(body));
    const action = body.action || 'quiz';
    const db = readDB();

    if (action === 'quiz') {
      if (!body.userId || body.score === undefined || !body.answers) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      db.quiz_responses.push({
        user_id: body.userId,
        email: body.email || null,
        phone: body.phone || null,
        company: body.company || null,
        score: body.score,
        data_score: body.categoryScores?.data ?? null,
        processes_score: body.categoryScores?.processes ?? null,
        team_score: body.categoryScores?.team ?? null,
        strategy_score: body.categoryScores?.strategy ?? null,
        answers: body.answers,
        verdict: body.verdict || null,
        created_at: new Date().toISOString(),
      });
      writeDB(db);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (action === 'guide') {
      if (!body.userId || !body.email) {
        return new Response(JSON.stringify({ error: 'Email is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      db.guide_downloads.push({
        user_id: body.userId,
        email: body.email,
        created_at: new Date().toISOString(),
      });
      writeDB(db);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (action === 'contact') {
      // Honeypot check: if the hidden "website" field is filled, it's a bot.
      // Silently succeed without storing or notifying.
      if (body.website) {
        return new Response(JSON.stringify({ success: true, message: 'Thank you for getting in touch. We will respond within one business day.' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (!body.name || !body.email || !body.message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      db.contact_submissions.push({
        user_id: body.userId || null,
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        company: body.company || null,
        employees: body.employees || null,
        service: body.service || null,
        message: body.message,
        created_at: new Date().toISOString(),
      });
      writeDB(db);

      // Send email notification via gog CLI (execFileSync = no shell, no injection risk)
      try {
        const emailBody = `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company || ''}\nPhone: ${body.phone || ''}\nService: ${body.service || ''}\nMessage: ${body.message}\nSite: ${SITE_LABEL}`;
        execFileSync('gog', [
          'gmail', 'send',
          '--to', 'tandlcallinan@gmail.com',
          '--subject', `New contact form submission from ${body.name}`,
          '--body', emailBody,
          '--no-input',
        ], { stdio: 'ignore', timeout: 15000 });
      } catch (emailErr) {
        console.error('gog email notification failed:', emailErr);
      }

      return new Response(JSON.stringify({ success: true, message: 'Thank you for getting in touch. We will respond within one business day.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};