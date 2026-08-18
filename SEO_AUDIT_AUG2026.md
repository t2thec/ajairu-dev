# SEO and Content Audit Report - ajairu.dev

**Date:** August 2026
**Site:** ajairu.dev (https://ajairu.dev)
**Platform:** Astro static site, port 8092
**Audit scope:** Full technical SEO, content, AI crawler readiness, keyword targeting

---

## Executive Summary

Comprehensive SEO and content audit of the ajairu.dev website covering robots.txt, llms.txt, homepage, 12 service pages, 22 industry pages, 8 blog posts, sitemap, orphan pages, OG assets, and keyword targeting against priority keywords.

**Fixes applied during this audit: 11 categories of issues resolved across 55+ files.**

---

## 1. Robots.txt - AI Crawler Rules

**Status before fix:** Missing `cohere-ai` crawler. Root `/robots.txt` was a minimal stub with only a wildcard rule and wrong sitemap URL.

**Status after fix:** All 9 required AI crawlers explicitly allowed.

### public/robots.txt (deployed)
All required AI crawlers are explicitly allowed:
- GPTBot: ALLOWED
- OAI-SearchBot: ALLOWED
- PerplexityBot: ALLOWED
- ClaudeBot: ALLOWED
- Google-Extended: ALLOWED
- Applebot-Extended: ALLOWED (was already present as `AppleBot-Extended`)
- Bytespider: ALLOWED
- CCBot: ALLOWED
- cohere-ai: **ADDED** (was missing)

Additional crawlers allowed: ChatGPT-User, Claude-Web, Claude-SearchBot, anthropic-ai, Amazonbot, Applebot, Bingbot.

Scrapers blocked: SemrushBot, AhrefsBot (Disallow).

Sitemap reference: `https://ajairu.dev/sitemap-index.xml`

### robots.txt (root project file)
**Fixed:** Was a minimal 3-line stub (`User-agent: * / Allow: / Sitemap: ...sitemap.xml`). Replaced with full AI crawler rules matching the public/robots.txt, with correct sitemap URL (`sitemap-index.xml` not `sitemap.xml`).

---

## 2. llms.txt

**Status:** EXISTS and is compliant with llms.txt v2 spec.

File: `public/llms.txt` (95 lines, 5,562 bytes)

Compliance check:
- Starts with `# ajairu` title: YES
- Has `>` summary line: YES
- Has `##` sections: YES (What We Do, Services, Key Differentiators, Target Clients, Key Pages, Industries, Blog, Founder, Sister Site, Additional Resources, Contact)
- Has markdown links to internal pages: YES
- Has llms-full.txt companion: YES (`public/llms-full.txt`)
- Has agent.md: YES (`public/agent.md`)

No changes needed. Em-dashes in llms.txt, llms-full.txt, and agent.md were replaced with hyphens.

---

## 3. Homepage (src/pages/index.astro)

**Status:** Well optimized. No changes needed for SEO structure.

- **Title tag:** `Bespoke Software Development UK | ajairu, Custom Software for UK SMEs` - contains primary keyword "Bespoke Software Development UK" (71 chars, slightly over 60 char optimal but acceptable for branding)
- **Meta description:** Contains "Bespoke software development UK", "Custom platforms", "system integration", "ERP replacement", "AI workflow automation" - 165 chars (slightly over 160 but acceptable)
- **H1:** `Bespoke Software Development UK for SMEs That Work the Way You Do` - contains primary keyword
- **Schema.org markup:** 5 schema types present:
  - LocalBusiness (with founder, areaServed, knowsAbout, sameAs)
  - Organization (with founder, areaServed, sameAs)
  - WebSite (with SearchAction)
  - Service (with Offer priceRange)
  - FAQPage (5 questions with answers)
- **BLUF structure:** YES - hero leads with the core value proposition, trust bar immediately follows, then problem/solution comparison, services, tech stack, process, and FAQ
- **Internal links:** Present to /services/system-integration-uk, /services/erp-replacement-uk, /services/ai-automation-uk, /contact, /services, /assessment, /process, /blog, /industries, /guide

---

## 4. Service Pages (12 pages)

**All 12 service pages checked.** Each has:

| Check | Status |
|-------|--------|
| Title tag | All 12 present, keyword-targeted |
| Meta description | All 12 present |
| H1 tag | All 12 present, keyword-targeted |
| Service schema | All 12 have `@type: Service` |
| BreadcrumbList schema | All 12 present |
| FAQPage schema | All 12 present |
| Contact page links | All 12 have `/contact` links |
| Em-dashes | **FIXED** - all 12 files had em-dashes, now replaced with hyphens |

### Blue-ocean keyword targeting:

| Page | Target keyword | In title? | In description? |
|------|---------------|-----------|-----------------|
| erp-replacement-uk.astro | ERP replacement UK | YES | YES |
| system-integration-uk.astro | system integration UK | YES ("System Integration Services UK") | YES |
| bespoke-crm-development-uk.astro | custom CRM development UK | **FIXED** - changed from "Bespoke CRM Development UK" to "Custom CRM Development UK" | YES (updated) |
| database-development-uk.astro | bespoke database development UK | YES ("Database Development UK") | Partial |
| legacy-modernisation-uk.astro | legacy system replacement UK | YES ("Legacy Software Modernisation UK") | Partial |

### Service page titles (all 12):
1. AI Automation Services UK | Business Workflow Automation | ajairu
2. Custom CRM Development UK | Bespoke CRM Software | ajairu (FIXED)
3. Cloud Migration Services UK | AWS Azure GCP | ajairu
4. Custom API Development UK | API Integration Services | ajairu
5. Custom Web Portal Development UK | Client & Staff Portals | ajairu
6. Database Development UK | Custom Database Solutions | ajairu
7. ERP Replacement UK | Replace SaaS with Bespoke Software | ajairu
8. Fractional CTO UK | Part-Time Chief Technology Officer | ajairu
9. Legacy Software Modernisation UK | System Upgrades | ajairu
10. Mobile App Development UK | Cross-Platform Apps | ajairu
11. System Integration Services UK | API & Software Integration | ajairu
12. Workflow Automation UK | Business Process Automation | ajairu

---

## 5. Industry Pages (22 pages)

**All 22 industry pages checked.** Each uses the shared `IndustryPage.astro` layout which provides:

| Check | Status |
|-------|--------|
| Schema.org Service markup | YES (via IndustryPage layout) |
| BreadcrumbList schema | YES (via IndustryPage layout) |
| FAQPage schema | YES (via IndustryPage layout, 4 FAQs per page) |
| Internal links to /services | YES (all 22 pages) |
| Internal links to /contact | YES (all 22 pages, via CTASection) |
| Meta titles | All 22 present |
| H1 tags | All 22 present |
| Meta descriptions | All 22 present |
| Em-dashes | **FIXED** - all 22 files had em-dashes, now replaced |

### Industry pages in navigation:
- **Before fix:** Only 12 of 22 industries were in the `INDUSTRIES` config array (used by nav dropdown and industries hub page grid). 10 industry pages were orphans.
- **After fix:** All 22 industries added to `src/config.ts` INDUSTRIES array. All now appear in the nav dropdown and industries hub page grid.

### Typo fix:
- `software-for-nonprofits-uk.astro`: Fixed typo "Charries" -> "Charities" in the title field

### New industries added to config:
1. software-for-agriculture-uk
2. software-for-creative-agencies-uk
3. software-for-facilities-management-uk
4. software-for-insurance-uk
5. software-for-nonprofits-uk
6. software-for-property-management-uk
7. software-for-recruitment-uk
8. software-for-retail-uk
9. software-for-trades-uk
10. software-for-transport-uk

Added `briefcase` SVG icon to Navigation.astro for the Recruitment industry.

---

## 6. Blog Posts (8 posts)

**All 8 blog posts checked.**

### Frontmatter:
All 8 posts have proper frontmatter: title, description, pubDate, tags, keywords, author, readTime.

### CTAs and internal links:
- **Before fix:** 4 posts had no CTA, all 8 posts had 0 internal links
- **After fix:** All 8 posts now have CTAs and 3-4 internal links each

| Blog post | CTA added | Internal links |
|-----------|-----------|----------------|
| ai-automation-for-business-workflows.md | YES (new section) | 3 |
| bespoke-software-for-small-business-uk.md | YES (new paragraph) | 4 |
| build-vs-buy-software-uk-sme.md | YES (new section) | 4 |
| custom-software-vs-saas-total-cost-ownership.md | YES (new paragraph) | 4 |
| erp-replacement-uk-sme-guide.md | YES (new paragraph) | 4 |
| how-ai-accelerates-software-development.md | YES (new paragraph) | 4 |
| system-integration-for-uk-smes.md | YES (new section) | 3 |
| what-is-technical-consultancy.md | YES (new section) | 3 |

### BlogPost layout:
- Article schema: YES (headline, description, datePublished, author, publisher, mainEntityOfPage, keywords)
- BreadcrumbList schema: YES
- Newsletter signup: YES
- Em-dashes: **FIXED** - all 8 files had em-dashes, now replaced

---

## 7. Sitemap Generation

**Status:** Properly configured.

- `@astrojs/sitemap` v3.2.1 installed and configured in `astro.config.mjs`
- `site: SITE_URL` set correctly (imports from config.ts where `SITE_URL = 'https://ajairu.dev'`)
- Generated sitemap files present: `public/sitemap-index.xml` and `public/sitemap-0.xml`
- Sitemap-index.xml correctly references `https://ajairu.dev/sitemap-0.xml`
- Robots.txt references correct sitemap URL

**Note:** `output: 'server'` is set in astro.config.mjs but no server adapter is installed. This is a pre-existing deployment configuration issue that prevents `astro build` from completing. Not an SEO issue but should be resolved for production builds (either install an adapter like `@astrojs/node` or change to `output: 'static'`).

---

## 8. Orphan Pages

### Industry pages (FIXED):
- **Before:** 10 of 22 industry pages were orphans (not linked from nav dropdown or industries hub page)
- **After:** All 22 industries added to config.ts INDUSTRIES array, fixing the orphan issue

### Other pages:
All other pages are linked from navigation or footer:
- Navigation: Home, Services, Industries (dropdown), How It Works, About, Blog, Free Software Quiz, Contact
- Footer: Services (5 links), Company (8 links including comparison and best-software-developer-uk), Get in Touch, Privacy, Terms, Sitemap

The `/404` page is not linked from nav/footer but this is standard practice (error page).

---

## 9. OG Images, Favicon, Webmanifest, Theme Color

**Status:** All present and correctly configured.

| Asset | Status |
|-------|--------|
| OG default image | `public/images/og-default.jpg` (103KB) |
| Favicon SVG | `public/favicon.svg` (516 bytes, blue #2563eb) |
| Webmanifest | `public/site.webmanifest` (theme_color: #2563eb, background_color: #0f172a) |
| Theme color meta | `#2563eb` in BaseLayout.astro |
| OG image tags | Full OG tags in BaseLayout (og:type, og:title, og:description, og:url, og:site_name, og:locale, og:image, og:image:width, og:image:height, og:image:alt) |
| Twitter Card | summary_large_image with twitter:title, twitter:description, twitter:image |
| Favicon link | SVG favicon linked in BaseLayout |
| Manifest link | Webmanifest linked in BaseLayout |

---

## 10. Priority Keyword Usage in Page Titles/Meta

### Blue-ocean keywords:

| Keyword | Target KD | Page | In title? | In meta? |
|---------|----------|------|-----------|----------|
| ERP replacement UK | 15-25 | erp-replacement-uk.astro | YES | YES |
| system integration UK | 25-35 | system-integration-uk.astro | YES | YES |
| bespoke software development UK | 30-40 | index.astro, services.astro, comparison.astro (FIXED) | YES | YES |
| custom software UK | 30-40 | assessment.astro (FIXED) | YES | YES |
| custom CRM development UK | 15-25 | bespoke-crm-development-uk.astro (FIXED) | YES | YES |
| bespoke database development UK | 15-25 | database-development-uk.astro | Partial | Partial |
| software development agency UK | 35-45 | best-software-developer-uk.astro (FIXED) | YES | YES |
| legacy system replacement UK | 15-25 | legacy-modernisation-uk.astro | Partial | Partial |

---

## 11. best-software-developer-uk Page

**Status before fix:** Title was "Best Software Developer UK 2026 | Comparison of UK Software Development Companies" - did not target "software development agency UK". H1 was "Best Software Developer UK: A Factual Comparison".

**Status after fix:**
- Title: `Software Development Agency UK 2026 | Best UK Software Development Companies | ajairu` - targets "software development agency UK"
- Meta description: Updated to include "software development agency UK" and "software development agency"
- H1: `Software Development Agency UK: A Factual Comparison`
- Body intro: Updated to use "software development agency UK" in the opening paragraph
- Schema: Service schema, BreadcrumbList, FAQPage all present
- Internal links: /services, /contact present

---

## 12. Comparison Page

**Status before fix:** Title was "How We Compare | ajairu vs Big Four, Freelancers & DIY" - did not target "bespoke software development UK". H1 was "How We Compare: The Middle Ground for SMEs". Missing Service schema.

**Status after fix:**
- Title: `How We Compare | Bespoke Software Development UK | ajairu vs Big Four, Freelancers & DIY` - targets "bespoke software development UK"
- Meta description: Updated to include "bespoke software development UK"
- H1: `Bespoke Software Development UK: How We Compare`
- Service schema: **ADDED** (was missing, now includes name, provider, areaServed, description, offers)
- FAQPage schema: Already present
- BreadcrumbList schema: Already present
- Contact link: Present via CTASection component

---

## 13. Assessment Page

**Status before fix:** Title was "Free Software Readiness Quiz | Is Your Business Ready for Bespoke Software?" - did not target "custom software UK". H1 was "Free Software Readiness Quiz".

**Status after fix:**
- Title: `Free Custom Software UK Readiness Quiz | Is Your Business Ready for Bespoke Software? | ajairu` - targets "custom software UK"
- Meta description: Updated to include "custom software UK"
- H1: `Free Custom Software UK Readiness Quiz`
- Schema: BreadcrumbList and FAQPage present
- Contact link: Present

---

## 14. Services Page - 4 Consultancy Services

**Status before fix:** All 4 consultancy services present in the HTML body, but only 2 (Technical Consultancy and Ongoing Support) were in the schema.org OfferCatalog. Fractional CTO and Code Audit were missing from the schema.

**Status after fix:** All 4 consultancy services now in the schema.org OfferCatalog:
1. **Technical Consultancy** - priceRange £2,000-£10,000, in schema and HTML
2. **Ongoing Support** - priceRange £350-£1,500/month, in schema and HTML
3. **Fractional CTO** - priceRange £2,000+/month, **ADDED to schema** (was in HTML only)
4. **Code Audit & Technical Due Diligence** - priceRange £2,500-£7,500, **ADDED to schema** (was in HTML only)

The services page now has 8 services in its OfferCatalog (System Integration, Bespoke Platform, ERP Replacement, AI Automation, Technical Consultancy, Ongoing Support, Fractional CTO, Code Audit).

---

## Additional Fixes Applied

### Em-dash removal (all content)
The task specifies "No em-dashes in any content." Found 750 em-dashes (U+2014) across 49 source files and 3 public files. All replaced with standard hyphens (U+002D) surrounded by spaces.

Files fixed: 49 src/ files + 3 public/ files (agent.md, llms.txt, llms-full.txt)

### Root robots.txt
Was a 3-line stub with wrong sitemap URL. Replaced with full AI crawler rules matching public/robots.txt, with correct sitemap-index.xml reference.

### Navigation icon
Added `briefcase` SVG icon to Navigation.astro for the Recruitment industry page.

---

## Issues Not Fixed (Recommendations)

1. **Server adapter missing:** `astro.config.mjs` has `output: 'server'` but no adapter installed. This prevents `astro build` from completing. Recommend either installing `@astrojs/node` or changing to `output: 'static'` if the site is meant to be fully static.

2. **Database development page keyword gap:** The `database-development-uk.astro` page targets "Database Development UK" but the priority keyword is "bespoke database development UK". Consider updating the title to include "bespoke".

3. **Legacy modernisation page keyword gap:** The `legacy-modernisation-uk.astro` page targets "Legacy Software Modernisation UK" but the priority keyword is "legacy system replacement UK". Consider adding "system replacement" to the title or meta description.

4. **Homepage title length:** At 71 characters, the homepage title is slightly over the 60-character optimal. Consider shortening if ranking is a priority over branding.

5. **Homepage meta description length:** At 165 characters, slightly over the 160-character optimal. Consider trimming.

6. **Bing Webmaster Tools / IndexNow:** Not implemented. The research recommends configuring IndexNow for faster Bing indexing. Consider adding an IndexNow API key and submission endpoint.

7. **Service page individual OG images:** All pages use the default OG image (`/images/og-default.jpg`). Consider creating service-specific OG images for better social sharing performance.

---

## Files Modified Summary

| File | Changes |
|------|---------|
| public/robots.txt | Added cohere-ai crawler |
| robots.txt (root) | Replaced minimal stub with full AI crawler rules |
| src/config.ts | Added 10 missing industries to INDUSTRIES array |
| src/components/Navigation.astro | Added briefcase SVG icon |
| src/pages/services/bespoke-crm-development-uk.astro | Title keyword fix, em-dash removal |
| src/pages/services.astro | Added Fractional CTO and Code Audit to schema, em-dash removal |
| src/pages/comparison.astro | Title/H1 keyword fix, added Service schema, em-dash removal |
| src/pages/assessment.astro | Title/H1 keyword fix, em-dash removal |
| src/pages/best-software-developer-uk.astro | Title/H1/content keyword fix, em-dash removal |
| src/pages/industries/software-for-nonprofits-uk.astro | Fixed "Charries" typo, em-dash removal |
| src/content/blog/*.md (8 files) | Added CTAs and internal links to all 8 posts, em-dash removal |
| src/pages/**/*.astro (all pages) | Em-dash removal (49 src files total) |
| public/agent.md, public/llms.txt, public/llms-full.txt | Em-dash removal |

**Total files modified: 55+**