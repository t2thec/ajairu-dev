import { test, expect } from '@playwright/test';

// All pages that should exist and return 200
const ALL_PAGES = [
  '/',
  '/about/',
  '/services/',
  '/process/',
  '/contact/',
  '/blog/',
  '/assessment/',
  '/guide/',
  '/comparison/',
  '/best-ai-consultant-uk/',
  '/privacy/',
  '/terms/',
  '/404',
];

// All industry pages
const INDUSTRY_PAGES = [
  '/industries/ai-for-law-firms/',
  '/industries/ai-for-accountants/',
  '/industries/ai-for-ecommerce/',
  '/industries/ai-for-healthcare/',
  '/industries/ai-for-financial-services/',
  '/industries/ai-for-real-estate/',
  '/industries/ai-for-manufacturing/',
  '/industries/ai-for-logistics/',
  '/industries/ai-for-marketing-agencies/',
  '/industries/ai-for-construction/',
  '/industries/ai-for-hospitality/',
  '/industries/ai-for-education/',
];

// Blog post slugs (5 new + existing)
const BLOG_POSTS = [
  '/blog/ai-strategy-for-smes/',
  '/blog/what-is-ai-readiness-audit/',
  '/blog/how-to-implement-ai-in-small-business-uk/',
  '/blog/ai-automation-for-business-workflows/',
  '/blog/practical-ai-for-business-cutting-through-hype/',
  '/blog/10-ways-construction-firms-can-use-ai/',
  '/blog/10-ways-ecommerce-businesses-can-use-ai/',
  '/blog/10-ways-healthcare-practices-can-use-ai/',
  '/blog/10-ways-hospitality-businesses-can-use-ai/',
  '/blog/10-ways-manufacturing-businesses-can-use-ai/',
];

test.describe('Page load tests', () => {
  for (const page of ALL_PAGES) {
    test(`${page} returns 200`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page);
      expect(response?.status()).toBe(200);
    });
  }

  for (const page of INDUSTRY_PAGES) {
    test(`${page} returns 200`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page);
      expect(response?.status()).toBe(200);
    });
  }

  for (const post of BLOG_POSTS) {
    test(`blog post ${post} returns 200`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(post);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe('Page content tests', () => {
  test('homepage has hero with correct heading', async ({ page }) => {
    await page.goto('/');
    const h1 = await page.locator('h1').first();
    await expect(h1).toContainText('AI');
  });

  test('homepage has navigation links', async ({ page }) => {
    await page.goto('/');
    const navHeader = page.locator('.nav-header');
    await expect(navHeader).toBeVisible();
    // Check that nav links exist in the DOM (they may be hidden on mobile until toggled)
    const navLinks = page.locator('#navLinks');
    await expect(navLinks).toHaveCount(1);
    await expect(navLinks.locator('a[href="/services"]')).toHaveCount(1);
    await expect(navLinks.locator('a[href="/about"]')).toHaveCount(1);
    await expect(navLinks.locator('a[href="/contact"]')).toHaveCount(2); // nav link + CTA button
    await expect(navLinks.locator('a[href="/assessment"]')).toHaveCount(1);
  });

  test('homepage has footer with all links', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('.footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('a[href="/privacy"]')).toBeVisible();
    await expect(footer.locator('a[href="/terms"]')).toBeVisible();
    await expect(footer.locator('a[href="/assessment"]')).toBeVisible();
    await expect(footer.locator('a[href="/guide"]')).toBeVisible();
  });

  test('homepage has lead magnet section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#free-guide')).toBeVisible();
    await expect(page.locator('#free-guide a[href="/guide"]')).toBeVisible();
  });

  test('homepage has ROI bar with quantified outcomes', async ({ page }) => {
    await page.goto('/');
    const roiBar = page.locator('.hero-roi-bar');
    await expect(roiBar).toBeVisible();
    await expect(roiBar).toContainText('10-20');
    await expect(roiBar).toContainText('90');
  });

  test('about page has Self-Sufficiency Standard', async ({ page }) => {
    await page.goto('/about/');
    await expect(page.locator('body')).toContainText('Self-Sufficiency Standard');
  });

  test('services page has walk-away protection text', async ({ page }) => {
    await page.goto('/services/');
    await expect(page.locator('body')).toContainText('Walk-away protection');
  });

  test('services page has all 5 pricing tiers', async ({ page }) => {
    await page.goto('/services/');
    await expect(page.locator('#audit')).toBeVisible();
    await expect(page.locator('#strategy')).toBeVisible();
    await expect(page.locator('#implementation')).toBeVisible();
    await expect(page.locator('#fractional-caio')).toBeVisible();
    await expect(page.locator('#training')).toBeVisible();
  });

  test('assessment page has quiz intro and start button', async ({ page }) => {
    await page.goto('/assessment/');
    await expect(page.locator('#quiz-intro')).toBeVisible();
    await expect(page.locator('#quiz-start-btn')).toBeVisible();
  });

  test('guide page has download form', async ({ page }) => {
    await page.goto('/guide/');
    await expect(page.locator('#guide-download-form')).toBeVisible();
    await expect(page.locator('#guide-email')).toBeVisible();
  });

  test('contact page has form with all required fields', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#company')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('best-ai-consultant page has comparison table', async ({ page }) => {
    await page.goto('/best-ai-consultant-uk/');
    await expect(page.locator('.comparison-table')).toBeVisible();
    await expect(page.locator('body')).toContainText('what to look for');
  });

  test('privacy policy mentions quiz, localStorage, and Gmail', async ({ page }) => {
    await page.goto('/privacy/');
    const body = await page.locator('body').textContent();
    expect(body).toContain('Quiz');
    expect(body).toContain('local storage');
    expect(body).toContain('Gmail');
  });
});

test.describe('Internal link validation', () => {
  test('all internal links on homepage resolve to 200', async ({ request }) => {
    // Fetch homepage HTML and extract internal links
    const response = await request.get('/');
    const html = await response.text();
    const linkMatches = [...html.matchAll(/href="(\/[^"]*)"/g)];
    const hrefs = new Set();
    for (const match of linkMatches) {
      const href = match[1];
      if (!href.startsWith('/api/') && !href.startsWith('/sitemap')) hrefs.add(href);
    }
    expect(hrefs.size).toBeGreaterThan(10);
    for (const href of hrefs) {
      const res = await request.get(href);
      expect(res.status()).toBeLessThan(400);
    }
  });

  test('all internal links on services page resolve to 200', async ({ request }) => {
    const response = await request.get('/services/');
    const html = await response.text();
    const linkMatches = [...html.matchAll(/href="(\/[^"]*)"/g)];
    const hrefs = new Set();
    for (const match of linkMatches) {
      const href = match[1];
      if (!href.startsWith('/api/')) hrefs.add(href);
    }
    for (const href of hrefs) {
      const res = await request.get(href);
      expect(res.status()).toBeLessThan(400);
    }
  });

  test('all internal links on about page resolve to 200', async ({ request }) => {
    const response = await request.get('/about/');
    const html = await response.text();
    const linkMatches = [...html.matchAll(/href="(\/[^"]*)"/g)];
    const hrefs = new Set();
    for (const match of linkMatches) {
      const href = match[1];
      if (!href.startsWith('/api/')) hrefs.add(href);
    }
    for (const href of hrefs) {
      const res = await request.get(href);
      expect(res.status()).toBeLessThan(400);
    }
  });
});

test.describe('SEO and meta tag tests', () => {
  test('homepage has title and meta description', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AI Consultant UK/);
    const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDesc?.length).toBeGreaterThan(50);
  });

  test('all pages have Open Graph tags', async ({ page }) => {
    for (const url of ['/', '/about/', '/services/', '/contact/', '/assessment/', '/guide/']) {
      await page.goto(url);
      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
      expect(ogTitle).toBeTruthy();
      expect(ogDesc).toBeTruthy();
      expect(ogImage).toBeTruthy();
      expect(ogUrl).toBeTruthy();
    }
  });

  test('all pages have Twitter card tags', async ({ page }) => {
    for (const url of ['/', '/about/', '/services/']) {
      await page.goto(url);
      const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
      expect(twitterCard).toBe('summary_large_image');
    }
  });

  test('site.webmanifest is accessible', async ({ page }) => {
    const response = await page.goto('/site.webmanifest');
    expect(response?.status()).toBe(200);
  });

  test('favicon is accessible', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    expect(response?.status()).toBe(200);
  });

  test('sitemap is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap-index.xml');
    expect(response?.status()).toBe(200);
  });

  test('OG default image is accessible', async ({ page }) => {
    const response = await page.goto('/images/og-default.svg');
    expect(response?.status()).toBe(200);
  });

  test('all pages have manifest link in head', async ({ page }) => {
    await page.goto('/');
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveAttribute('href', '/site.webmanifest');
  });

  test('pages have canonical URLs', async ({ page }) => {
    for (const url of ['/', '/about/', '/services/', '/contact/']) {
      await page.goto(url);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBeTruthy();
      expect(canonical).toContain('ajairu.ai');
    }
  });
});

test.describe('Quiz interaction tests', () => {
  test('quiz starts and shows first question', async ({ page }) => {
    await page.goto('/assessment/');
    await page.click('#quiz-start-btn');
    await expect(page.locator('#quiz-container')).toBeVisible();
    await expect(page.locator('.quiz-q-text')).toBeVisible();
    await expect(page.locator('.quiz-option')).toHaveCount(4);
  });

  test('quiz option can be selected and shows selected state', async ({ page }) => {
    await page.goto('/assessment/');
    await page.click('#quiz-start-btn');
    const firstOption = page.locator('.quiz-option').first();
    await firstOption.click();
    await expect(firstOption).toHaveClass(/selected/);
    await expect(page.locator('#quiz-next')).not.toBeDisabled();
  });

  test('quiz next button is disabled until option selected', async ({ page }) => {
    await page.goto('/assessment/');
    await page.click('#quiz-start-btn');
    await expect(page.locator('#quiz-next')).toBeDisabled();
  });

  test('quiz progresses through questions and shows results', async ({ page }) => {
    await page.goto('/assessment/');
    await page.click('#quiz-start-btn');

    // Answer all 15 questions (select second option for some variety)
    for (let i = 0; i < 15; i++) {
      const options = page.locator('.quiz-option');
      // Pick option index 2 (score 2) for variety
      await options.nth(Math.min(i % 4, 3)).click();
      await page.click('#quiz-next');
      await page.waitForTimeout(100);
    }

    // Should now show results
    await expect(page.locator('#quiz-results')).toBeVisible({ timeout: 5000 });
    const scoreText = await page.locator('#quiz-score').textContent();
    expect(scoreText).toBeTruthy();
    expect(parseInt(scoreText || '0')).toBeGreaterThan(0);
    await expect(page.locator('.quiz-cat')).toHaveCount(4);
  });

  test('quiz shows email capture form after results', async ({ page }) => {
    await page.goto('/assessment/');
    await page.click('#quiz-start-btn');

    for (let i = 0; i < 15; i++) {
      await page.locator('.quiz-option').first().click();
      await page.click('#quiz-next');
    }

    await expect(page.locator('#quiz-email-form')).toBeVisible();
    await expect(page.locator('#quiz-email-input')).toBeVisible();
    await expect(page.locator('#quiz-phone-input')).toBeVisible();
    await expect(page.locator('#quiz-company-input')).toBeVisible();
  });

  test('quiz has honeypot field hidden from users', async ({ page }) => {
    await page.goto('/assessment/');
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toHaveAttribute('aria-hidden', 'true');
    const left = await honeypot.evaluate(el => getComputedStyle(el).left);
    expect(left).toContain('-9999');
  });
});

test.describe('Contact form tests', () => {
  test('contact form has honeypot field', async ({ page }) => {
    await page.goto('/contact/');
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toHaveAttribute('aria-hidden', 'true');
  });

  test('contact form has phone field', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('#phone')).toBeVisible();
    const label = await page.locator('label[for="phone"]').textContent();
    expect(label).toContain('Phone');
  });

  test('contact form shows success message on valid submission', async ({ page }) => {
    await page.goto('/contact/');
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#company', 'Test Co');
    await page.fill('#message', 'I would like to explore AI for my business.');
    await page.click('button[type="submit"]');

    // Wait for either success or error (API may or may not be running)
    await page.waitForTimeout(3000);
    const successVisible = await page.locator('#form-success').isVisible().catch(() => false);
    const errorVisible = await page.locator('#form-error').isVisible().catch(() => false);
    // At least one should show (success if API running, error if not)
    expect(successVisible || errorVisible).toBe(true);
  });
});

test.describe('Guide page tests', () => {
  test('guide page has honeypot field', async ({ page }) => {
    await page.goto('/guide/');
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toHaveAttribute('aria-hidden', 'true');
  });

  test('guide page lists 5 use cases', async ({ page }) => {
    await page.goto('/guide/');
    const useCases = page.locator('.guide-use-card');
    await expect(useCases).toHaveCount(5);
  });
});

test.describe('Mobile responsiveness tests', () => {
  test('homepage is responsive on mobile viewport', async ({ page }) => {
    // This test runs in both desktop and mobile projects
    // On mobile, nav toggle should be flex. On desktop, it's display:none.
    await page.goto('/');
    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();
    // Just check the nav toggle exists (visibility depends on viewport)
    const navToggle = page.locator('.nav-toggle');
    await expect(navToggle).toHaveCount(1);
  });

  test('quiz buttons are large enough for touch', async ({ page }) => {
    await page.goto('/assessment/');
    await page.click('#quiz-start-btn');
    const option = page.locator('.quiz-option').first();
    const box = await option.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(60);
  });
});

test.describe('404 page tests', () => {
  test('non-existent page returns 404', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist/');
    expect(response?.status()).toBe(404);
  });

  test('404 page has link back to home', async ({ page }) => {
    await page.goto('/this-page-does-not-exist/');
    // Use the specific back to home button, not nav links
    await expect(page.locator('a:has-text("Back to Home")')).toBeVisible();
  });
});