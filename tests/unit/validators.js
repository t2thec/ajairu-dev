// Validation helpers extracted from api-server.mjs for unit testing
// These are the same functions used in the API server

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const UK_PHONE_RE = /^(\+?44|0)\s?\d[\d\s()]{8,18}$/;
const MAX_STRING = 5000;
const MAX_MESSAGE = 10000;

export function isStr(val, max = MAX_STRING) {
  return typeof val === 'string' && val.length > 0 && val.length <= max;
}

export function isEmail(val) {
  return isStr(val, 254) && EMAIL_RE.test(val);
}

export function isPhone(val) {
  if (!val) return true;
  const cleaned = val.replace(/[\s-()]/g, '');
  return typeof val === 'string' && val.length <= 30 && UK_PHONE_RE.test(val);
}

export function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, MAX_STRING);
}

export function isBot(data) {
  return !!(data.website || data.url || data.company_website);
}

export function validateQuiz(data) {
  const errors = [];
  if (!isStr(data.userId, 100)) errors.push('Invalid user ID');
  if (typeof data.score !== 'number' || data.score < 0 || data.score > 100) errors.push('Invalid score');
  if (!Array.isArray(data.answers) || data.answers.length === 0 || data.answers.length > 50) errors.push('Invalid answers');
  if (Array.isArray(data.answers) && data.answers.some(a => typeof a !== 'number' || a < 0 || a > 3)) errors.push('Invalid answer values');
  if (data.email && !isEmail(data.email)) errors.push('Invalid email format');
  if (data.phone && !isPhone(data.phone)) errors.push('Invalid phone format');
  if (data.categoryScores && typeof data.categoryScores !== 'object') errors.push('Invalid category scores');
  return errors;
}

export function validateGuide(data) {
  const errors = [];
  if (!isStr(data.userId, 100)) errors.push('Invalid user ID');
  if (!isEmail(data.email)) errors.push('Valid email is required');
  return errors;
}

export function validateContact(data) {
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

export { EMAIL_RE, UK_PHONE_RE, MAX_STRING, MAX_MESSAGE };