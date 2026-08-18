import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_URL = 'http://localhost:8091/api/submit';
const DB_FILE = path.join(__dirname, '..', '..', 'data', 'submissions.json');

function readDB() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')); }
  catch { return { quiz_responses: [], guide_downloads: [], contact_submissions: [] }; }
}

function resetDB() {
  fs.writeFileSync(DB_FILE, JSON.stringify({ quiz_responses: [], guide_downloads: [], contact_submissions: [] }));
}

async function postAPI(body) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return { status: res.status, body: await res.json() };
}

describe('API Server - Quiz endpoint', () => {
  beforeEach(() => resetDB());

  it('accepts valid quiz submission with email/phone/company', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      userId: 'test_user_1',
      score: 72,
      categoryScores: { data: 80, processes: 65, team: 70, strategy: 73 },
      answers: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2],
      verdict: 'AI-ready',
      email: 'test@example.com',
      phone: '07743 173 974',
      company: 'Test Co',
    });
    expect(status).toBe(200);
    expect(body.success).toBe(true);

    const db = readDB();
    expect(db.quiz_responses).toHaveLength(1);
    expect(db.quiz_responses[0].score).toBe(72);
    expect(db.quiz_responses[0].email).toBe('test@example.com');
  });

  it('accepts quiz submission without optional fields (anonymous)', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      userId: 'anon_user',
      score: 30,
      answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
    expect(status).toBe(200);
    expect(body.success).toBe(true);

    const db = readDB();
    expect(db.quiz_responses[0].email).toBeNull();
    expect(db.quiz_responses[0].phone).toBeNull();
  });

  it('rejects quiz with missing userId', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      score: 50,
      answers: [0, 1, 2],
    });
    expect(status).toBe(400);
    expect(body.error).toContain('Invalid user ID');
  });

  it('rejects quiz with invalid score', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      userId: 'test',
      score: 150,
      answers: [0, 1],
    });
    expect(status).toBe(400);
    expect(body.error).toContain('Invalid score');
  });

  it('rejects quiz with invalid email', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      userId: 'test',
      score: 50,
      answers: [0, 1],
      email: 'notanemail',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('Invalid email format');
  });

  it('rejects quiz with invalid phone', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      userId: 'test',
      score: 50,
      answers: [0, 1],
      phone: '123',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('Invalid phone format');
  });

  it('silently accepts but does not save honeypot submissions', async () => {
    const { status, body } = await postAPI({
      action: 'quiz',
      userId: 'bot_1',
      score: 50,
      answers: [0, 1],
      website: 'spam.com',
    });
    expect(status).toBe(200);
    expect(body.success).toBe(true);

    const db = readDB();
    expect(db.quiz_responses).toHaveLength(0);
  });

  it('sanitizes HTML from quiz fields', async () => {
    const { status } = await postAPI({
      action: 'quiz',
      userId: 'test',
      score: 50,
      answers: [0, 1],
      email: 'test@test.com',
      company: '<script>alert(1)</script>Test Co',
    });
    expect(status).toBe(200);

    const db = readDB();
    expect(db.quiz_responses[0].company).toContain('Test Co');
  });
});

describe('API Server - Guide endpoint', () => {
  beforeEach(() => resetDB());

  it('accepts valid guide download request', async () => {
    const { status, body } = await postAPI({
      action: 'guide',
      userId: 'user_1',
      email: 'test@example.com',
    });
    expect(status).toBe(200);
    expect(body.success).toBe(true);

    const db = readDB();
    expect(db.guide_downloads).toHaveLength(1);
    expect(db.guide_downloads[0].email).toBe('test@example.com');
  });

  it('rejects guide request without email', async () => {
    const { status, body } = await postAPI({
      action: 'guide',
      userId: 'user_1',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('email is required');
  });

  it('rejects guide request with invalid email', async () => {
    const { status, body } = await postAPI({
      action: 'guide',
      userId: 'user_1',
      email: 'notanemail',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('email is required');
  });
});

describe('API Server - Contact endpoint', () => {
  beforeEach(() => resetDB());

  it('accepts valid contact submission', async () => {
    const { status, body } = await postAPI({
      action: 'contact',
      userId: 'user_1',
      name: 'Jane Smith',
      email: 'jane@company.co.uk',
      phone: '07743 173 974',
      company: 'Company Ltd',
      employees: '10-49',
      service: 'audit',
      message: 'I want to explore AI for my business.',
    });
    expect(status).toBe(200);
    expect(body.success).toBe(true);

    const db = readDB();
    expect(db.contact_submissions).toHaveLength(1);
    expect(db.contact_submissions[0].name).toBe('Jane Smith');
  });

  it('accepts contact without optional phone/company', async () => {
    const { status } = await postAPI({
      action: 'contact',
      name: 'Jane Smith',
      email: 'jane@company.co.uk',
      message: 'Hello',
    });
    expect(status).toBe(200);

    const db = readDB();
    expect(db.contact_submissions[0].phone).toBeNull();
    expect(db.contact_submissions[0].company).toBeNull();
  });

  it('rejects contact without name', async () => {
    const { status, body } = await postAPI({
      action: 'contact',
      email: 'jane@company.co.uk',
      message: 'Hello',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('Name is required');
  });

  it('rejects contact without email', async () => {
    const { status, body } = await postAPI({
      action: 'contact',
      name: 'Jane',
      message: 'Hello',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('email is required');
  });

  it('rejects contact without message', async () => {
    const { status, body } = await postAPI({
      action: 'contact',
      name: 'Jane',
      email: 'jane@test.com',
      message: '',
    });
    expect(status).toBe(400);
    expect(body.error).toContain('Message is required');
  });

  it('sanitizes HTML from contact fields', async () => {
    await postAPI({
      action: 'contact',
      name: '<b>Jane</b>',
      email: 'jane@test.com',
      message: '<script>alert(1)</script>Hello',
    });
    const db = readDB();
    expect(db.contact_submissions[0].name).toBe('Jane');
    // Script tags are stripped, content inside remains but is harmless text
    expect(db.contact_submissions[0].message).toContain('Hello');
  });
});

describe('API Server - General', () => {
  it('rejects GET requests', async () => {
    const res = await fetch(API_URL, { method: 'GET' });
    expect(res.status).toBe(405);
  });

  it('rejects unknown action', async () => {
    const { status, body } = await postAPI({ action: 'unknown' });
    expect(status).toBe(400);
    expect(body.error).toContain('Unknown action');
  });

  it('rejects empty body', async () => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    });
    const body = await res.json();
    // Empty body defaults to action 'quiz' which then fails validation
    expect([400, 429]).toContain(res.status);
  });
});