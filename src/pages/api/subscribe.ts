import type { APIRoute } from 'astro';
import Database from 'better-sqlite3';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';

const DB_PATH = path.join(os.homedir(), 'sites', 'newsletter-subs.db');
const GOG_ACCOUNT = 'tandlcallinan@gmail.com';
const NOTIFY_TO = 'tandlcallinan@gmail.com';
const SITE_NAME = 'ajairu.dev';

function getDB() {
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      site TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  return db;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const rawBody = new TextDecoder().decode(await request.arrayBuffer());
    const body = rawBody ? JSON.parse(rawBody) : {};
    const email = (body.email || '').trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store in SQLite
    const db = getDB();
    try {
      db.prepare('INSERT INTO subscriptions (email, site) VALUES (?, ?)').run(email, SITE_NAME);
    } finally {
      db.close();
    }

    // Send email notification via gog CLI
    const subject = `New newsletter subscription (${SITE_NAME})`;
    const bodyText = `A new newsletter subscription was received.\n\nSite: ${SITE_NAME}\nEmail: ${email}\nDate: ${new Date().toISOString()}\n`;
    try {
      spawnSync('gog', [
        'gmail', 'send',
        '--account', GOG_ACCOUNT,
        '--to', NOTIFY_TO,
        '--subject', subject,
        '--body', bodyText,
        '--no-input',
      ], { timeout: 15000, stdio: 'pipe' });
    } catch (emailErr) {
      console.error('Failed to send notification email:', emailErr);
      // Don't fail the request - the subscription was stored
    }

    return new Response(JSON.stringify({ success: true, message: 'Thanks for subscribing!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscribe API error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};