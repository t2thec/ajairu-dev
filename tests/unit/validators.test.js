import { describe, it, expect } from 'vitest';
import {
  isStr, isEmail, isPhone, sanitize, isBot,
  validateQuiz, validateGuide, validateContact,
} from './validators.js';

describe('isStr', () => {
  it('accepts valid non-empty string within max', () => {
    expect(isStr('hello')).toBe(true);
    expect(isStr('a', 5)).toBe(true);
  });

  it('rejects empty string', () => {
    expect(isStr('')).toBe(false);
  });

  it('rejects non-strings', () => {
    expect(isStr(null)).toBe(false);
    expect(isStr(undefined)).toBe(false);
    expect(isStr(123)).toBe(false);
    expect(isStr([])).toBe(false);
  });

  it('rejects strings exceeding max length', () => {
    expect(isStr('a'.repeat(501), 500)).toBe(false);
  });
});

describe('isEmail', () => {
  it('accepts valid emails', () => {
    expect(isEmail('user@example.com')).toBe(true);
    expect(isEmail('jane.smith@company.co.uk')).toBe(true);
    expect(isEmail('test+tag@gmail.com')).toBe(true);
    expect(isEmail('a@b.co')).toBe(true);
  });

  it('rejects invalid emails', () => {
    expect(isEmail('')).toBe(false);
    expect(isEmail('notanemail')).toBe(false);
    expect(isEmail('missing@domain')).toBe(false);
    expect(isEmail('@example.com')).toBe(false);
    expect(isEmail('user@')).toBe(false);
    expect(isEmail('user@.com')).toBe(false);
    expect(isEmail('user@exam ple.com')).toBe(false);
    expect(isEmail('a'.repeat(255) + '@test.com')).toBe(false);
  });

  it('rejects non-strings', () => {
    expect(isEmail(null)).toBe(false);
    expect(isEmail(123)).toBe(false);
  });
});

describe('isPhone', () => {
  it('accepts valid UK phone numbers', () => {
    expect(isPhone('07743 173 974')).toBe(true);
    expect(isPhone('07901 333140')).toBe(true);
    expect(isPhone('+44 7700 900123')).toBe(true);
    expect(isPhone('01584 876415')).toBe(true);
    expect(isPhone('+44 7900 900123')).toBe(true);
  });

  it('accepts empty/undefined (optional field)', () => {
    expect(isPhone('')).toBe(true);
    expect(isPhone(null)).toBe(true);
    expect(isPhone(undefined)).toBe(true);
  });

  it('rejects invalid phone numbers', () => {
    expect(isPhone('123')).toBe(false);
    expect(isPhone('not a number')).toBe(false);
    expect(isPhone('a'.repeat(35))).toBe(false);
  });
});

describe('sanitize', () => {
  it('strips HTML tags', () => {
    expect(sanitize('<script>alert(1)</script>')).toBe('alert(1)');
    expect(sanitize('<b>hello</b>')).toBe('hello');
    expect(sanitize('<img src=x onerror=alert(1)>')).toBe('');
  });

  it('strips control characters', () => {
    expect(sanitize('hello\x00world')).toBe('helloworld');
    expect(sanitize('test\x7f')).toBe('test');
  });

  it('trims whitespace', () => {
    expect(sanitize('  hello  ')).toBe('hello');
  });

  it('truncates to max length', () => {
    const long = 'a'.repeat(6000);
    expect(sanitize(long).length).toBe(5000);
  });

  it('returns empty string for non-strings', () => {
    expect(sanitize(null)).toBe('');
    expect(sanitize(undefined)).toBe('');
    expect(sanitize(123)).toBe('');
  });
});

describe('isBot', () => {
  it('returns true when honeypot fields are filled', () => {
    expect(isBot({ website: 'spam.com' })).toBe(true);
    expect(isBot({ url: 'http://spam.com' })).toBe(true);
    expect(isBot({ company_website: 'spam.com' })).toBe(true);
  });

  it('returns false when honeypot fields are empty', () => {
    expect(isBot({})).toBe(false);
    expect(isBot({ website: '', url: null })).toBe(false);
  });
});

describe('validateQuiz', () => {
  const validQuiz = {
    userId: 'user_123_abc',
    score: 65,
    answers: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2],
    email: 'test@test.com',
    phone: '07743 173 974',
    company: 'Test Co',
    categoryScores: { data: 70, processes: 60, team: 55, strategy: 75 },
    verdict: 'Partially ready',
  };

  it('passes with valid data', () => {
    expect(validateQuiz(validQuiz)).toEqual([]);
  });

  it('passes without optional email/phone/company', () => {
    const { email, phone, company, ...minimal } = validQuiz;
    expect(validateQuiz(minimal)).toEqual([]);
  });

  it('fails with missing userId', () => {
    expect(validateQuiz({ ...validQuiz, userId: '' })).toContain('Invalid user ID');
    expect(validateQuiz({ ...validQuiz, userId: null })).toContain('Invalid user ID');
  });

  it('fails with invalid score', () => {
    expect(validateQuiz({ ...validQuiz, score: -1 })).toContain('Invalid score');
    expect(validateQuiz({ ...validQuiz, score: 101 })).toContain('Invalid score');
    expect(validateQuiz({ ...validQuiz, score: '65' })).toContain('Invalid score');
  });

  it('fails with invalid answers', () => {
    expect(validateQuiz({ ...validQuiz, answers: [] })).toContain('Invalid answers');
    expect(validateQuiz({ ...validQuiz, answers: [0, 1, 2, 5] })).toContain('Invalid answer values');
    expect(validateQuiz({ ...validQuiz, answers: 'notarray' })).toContain('Invalid answers');
    expect(validateQuiz({ ...validQuiz, answers: new Array(51).fill(0) })).toContain('Invalid answers');
  });

  it('fails with invalid email', () => {
    expect(validateQuiz({ ...validQuiz, email: 'notanemail' })).toContain('Invalid email format');
  });

  it('fails with invalid phone', () => {
    expect(validateQuiz({ ...validQuiz, phone: '123' })).toContain('Invalid phone format');
  });

  it('fails with invalid categoryScores', () => {
    expect(validateQuiz({ ...validQuiz, categoryScores: 'invalid' })).toContain('Invalid category scores');
  });
});

describe('validateGuide', () => {
  const validGuide = {
    userId: 'user_123_abc',
    email: 'test@test.com',
  };

  it('passes with valid data', () => {
    expect(validateGuide(validGuide)).toEqual([]);
  });

  it('fails with missing userId', () => {
    expect(validateGuide({ ...validGuide, userId: '' })).toContain('Invalid user ID');
  });

  it('fails with missing email', () => {
    expect(validateGuide({ ...validGuide, email: '' })).toContain('Valid email is required');
  });

  it('fails with invalid email', () => {
    expect(validateGuide({ ...validGuide, email: 'notanemail' })).toContain('Valid email is required');
  });
});

describe('validateContact', () => {
  const validContact = {
    name: 'Jane Smith',
    email: 'jane@company.co.uk',
    message: 'I want to explore AI for my business.',
    phone: '07743 173 974',
    company: 'Company Ltd',
    employees: '10-49',
    service: 'audit',
  };

  it('passes with valid data', () => {
    expect(validateContact(validContact)).toEqual([]);
  });

  it('passes without optional fields', () => {
    const { phone, company, employees, service, ...minimal } = validContact;
    expect(validateContact(minimal)).toEqual([]);
  });

  it('fails with missing name', () => {
    expect(validateContact({ ...validContact, name: '' })).toContain('Name is required');
    expect(validateContact({ ...validContact, name: null })).toContain('Name is required');
  });

  it('fails with missing email', () => {
    expect(validateContact({ ...validContact, email: '' })).toContain('Valid email is required');
  });

  it('fails with invalid email', () => {
    expect(validateContact({ ...validContact, email: 'notanemail' })).toContain('Valid email is required');
  });

  it('fails with missing message', () => {
    expect(validateContact({ ...validContact, message: '' })).toContain('Message is required');
  });

  it('fails with invalid phone', () => {
    expect(validateContact({ ...validContact, phone: '123' })).toContain('Invalid phone format');
  });

  it('fails with company name too long', () => {
    expect(validateContact({ ...validContact, company: 'a'.repeat(201) })).toContain('Company name too long');
  });

  it('fails with invalid employee count', () => {
    expect(validateContact({ ...validContact, employees: 'a'.repeat(25) })).toContain('Invalid employee count');
  });

  it('fails with invalid service selection', () => {
    expect(validateContact({ ...validContact, service: 'a'.repeat(55) })).toContain('Invalid service selection');
  });
});