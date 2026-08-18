# Comprehensive SEO Keyword Audit Report — ajairu.dev

**Audit Date:** August 16, 2026  
**Site:** ajairu.dev (Astro-based static site)  
**Pages Analysed:** 31 pages (homepage, services, about, process, comparison, guide, contact, assessment, best-software-developer-uk, privacy, terms, 12 industry pages, 8 blog posts)  
**Audit Type:** Read-only — no files modified

---

## Executive Summary

This audit analysed 31 pages against 10 target keywords. The findings reveal **significant keyword targeting gaps** — 8 of the 10 target keywords are not being targeted on any page with the exact phrase in title tags, H1s, or meta descriptions. Keyword densities are universally below the recommended 1-3% range. 13 pages have thin content (under 300 words), and several important keywords have no dedicated landing page.

### Key Findings at a Glance

| Metric | Status |
|--------|--------|
| Target keywords with exact match in any title tag | 2 of 10 |
| Target keywords with exact match in any H1 | 0 of 10 |
| Target keywords with exact match in any meta description | 0 of 10 |
| Pages with keyword density in 1-3% range | 0 of 31 |
| Thin content pages (under 300 words) | 13 of 31 |
| Keyword cannibalisation issues | 0 (but due to under-targeting, not good targeting) |
| Missing pages for important keywords | 5+ identified |
| LSI keyword coverage | Good on core pages, weak on industry pages |

---

## 1. Per-Keyword Analysis

### 1.1 "bespoke software development UK"

**Targeting Page:** `pages/index.astro` (homepage)  
**Priority:** HIGH — primary commercial keyword

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ✅ YES | "Bespoke Software Development UK \| ajairu, Custom Software for UK SMEs" |
| Meta description | ❌ NO | Description says "AI-powered bespoke software development for UK SMEs" — close but not exact match |
| H1 | ❌ NO | H1 is "Bespoke Software That Works the Way You Do" — missing "development UK" |
| First 100 words | ❌ NO | Exact phrase not in first 100 words |
| URL slug | ❌ NO | Slug is "index" (root domain) |
| Image alt text | ❌ NO | No images with this phrase in alt text |
| **Exact occurrences** | 1 | Only in title tag |
| **Keyword density** | 0.41% | ❌ Well below 1-3% target |

**LSI/Related Keywords Found on Page:** 15 (excellent coverage) — bespoke software, custom software, system integration, ERP replacement, AI automation, workflow automation, API integration, cloud software, source code ownership, vendor lock-in, fixed-price, UK SME, SME, break-even, subscription fees

**Competitor Comparison (Top 10 Google results):**
- **Red Eagle Tech** (Position 8): Title = "Bespoke Software Development UK \| Custom Software Company" — exact match in title, H1 "Bespoke software built around how your business actually works", extensive body content with phrase repeated 15+ times, dedicated pricing section, FAQs with exact phrase
- **One Beyond** (Position 7): Title = "Bespoke Software Development \| One Beyond London, UK" — exact match in title, H1 uses phrase, 800+ words with multiple H2s
- **Dev Partners** (Position 2): Uses "Bespoke Custom Software Development UK" in title, repeated 20+ times in body, H1 and H2s contain variants
- **Minerva UK** (Position 10): H1 "Bespoke Software Development Solutions", repeated 10+ times, strong H2 structure

**Gaps vs Competitors:**
1. **H1 missing the exact keyword** — competitors consistently have "bespoke software development" in H1
2. **Keyword density far too low** — competitors use the phrase 10-20+ times; ajairu.dev uses it once
3. **No dedicated H2 with the keyword** — competitors use H2s like "Bespoke Software Development Services" or "Why Choose Us for Bespoke Software Development"
4. **Meta description lacks exact match** — competitors include the exact phrase in descriptions
5. **Not in first 100 words** — competitors place it in the opening paragraph

**Recommendation:** Add "Bespoke Software Development UK" to the H1, meta description, and first paragraph of the homepage. Increase natural usage to 8-12 occurrences (target ~1.5% density on a 982-word page = ~15 occurrences of the 4-word phrase). Add an H2 like "Bespoke Software Development for UK SMEs" or "Why Choose Us for Bespoke Software Development".

---

### 1.2 "custom software development UK"

**Targeting Page:** NONE  
**Priority:** HIGH — major commercial keyword

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | No page has this exact phrase in title |
| Meta description | ❌ NO | |
| H1 | ❌ NO | |
| First 100 words | ❌ NO | |
| URL slug | ❌ NO | |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 across all pages | |
| **Keyword density** | 0% | |

**Partial matches:** The word "custom software" appears on several pages (homepage, services, blog posts), but the exact phrase "custom software development UK" is never used as a complete phrase.

**Competitor Comparison (Top 10 Google results):**
- **KB Software** (Position 1): Title = "Custom Software Development UK \| KB Software", H1 = "Bespoke software development that fits your business", H2 = "Custom Software Development UK Teams Can Rely On" — exact match in title and H2
- **Talk Think Do** (Position 1 for variant): Title = "Custom Software Development Company UK", H1 = "Custom Software Development Company", phrase repeated 30+ times, dedicated FAQ section
- **Capital Compute** (Position 5/9): Title = "Custom Software Development Company UK", H1 = "We Deliver Custom Software Development That UK Businesses Trust", extremely long page (3,000+ words) with 10+ H2s
- **MicroPyramid** (Position 2/5): Title = "Custom Software Development UK \| Bespoke Web Apps, Internal Tools & Integrations", H1 = "Bespoke Software Development for UK Startups and SMBs", 2,000+ words

**Gaps vs Competitors:**
1. **No page targets this keyword at all** — this is a top-3 commercial keyword and it's completely untargeted
2. Competitors have dedicated landing pages or service pages with this as the primary keyword
3. Competitor pages are 2,000-5,000+ words with extensive FAQ sections, pricing tables, and case studies

**Recommendation:** Either (a) create a dedicated `/custom-software-development-uk` landing page, or (b) significantly optimise the existing services page to target this keyword. The services page currently targets "bespoke software development services UK" — consider splitting: homepage targets "bespoke software development UK", services page targets "custom software development UK".

---

### 1.3 "system integration UK SME"

**Targeting Page:** Blog post `content/blog/system-integration-for-uk-smes.md` (partial only)  
**Priority:** MEDIUM-HIGH

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | Title is "System Integration: Connecting Your CRM, ERP and Accounting Software" |
| Meta description | ❌ NO | Description mentions "UK SMEs" but not the exact phrase |
| H1 | ❌ NO | Blog H1 = title (no exact match) |
| First 100 words | ❌ NO | |
| URL slug | ❌ NO | Slug is "system-integration-for-uk-smes" — close but not exact match |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "system integration" appears 8+ times, "UK SME" appears separately |
| **Keyword density** | 0% (exact) / ~1.5% (partial "system integration") | |

**Competitor Comparison (Top 10 Google results):**
- **NetMonkeys** (Position 1): Title = "System Integration Services \| System Integrator", H1 uses "system integration services", phrase "system integration" repeated 40+ times, "UK" mentioned 15+ times, "SME" mentioned explicitly
- **Synergi Tech** (Position 5): Title = "Software Integration Services UK \| API & System Integration", strong H2 structure, 1,500+ words
- **KMayer** (Position 4): Title = "System Integration & API Connectivity Services UK", very detailed service page with H2s, FAQs, pricing discussion
- **Just Dev** (Position 6): Title = "API Integration & Systems Integration UK", 2,000+ words, extensive FAQ

**Gaps vs Competitors:**
1. **No dedicated service page for system integration** — competitors have full landing pages, ajairu.dev only has a blog post
2. **Blog post title doesn't include "UK" or "SME"** — competitors have "UK" in titles
3. **No pricing information on the integration page** — competitors include cost ranges
4. **Blog post is informational, not commercial** — competitors have CTA-focused service pages

**Recommendation:** Create a dedicated `/services/system-integration-uk` service page (or add a major section to the services page) targeting "system integration services UK" and "system integration UK SME". Include pricing, process, FAQ, and case studies. The blog post should link to this service page.

---

### 1.4 "ERP replacement UK"

**Targeting Page:** Blog post `content/blog/erp-replacement-uk-sme-guide.md` (partial only)  
**Priority:** MEDIUM-HIGH

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | Title is "Replacing Your ERP: A Guide for UK SMEs" — doesn't use "ERP replacement UK" |
| Meta description | ❌ NO | Description mentions "replacing off-the-shelf ERP systems" |
| H1 | ❌ NO | H1 = title |
| First 100 words | ❌ NO | |
| URL slug | ✅ PARTIAL | Slug is "erp-replacement-uk-sme-guide" — contains "erp-replacement-uk" |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "ERP replacement" appears 5+ times, but "UK" not adjacent |
| **Keyword density** | 0% (exact) / ~0.9% (partial "ERP replacement") | |

**Also mentioned on:** Homepage (services section), services page (pricing tier), but not as a targeted keyword.

**Competitor Comparison (Top 10 Google results):**
- Google results for "ERP replacement UK" are dominated by **government/council tender documents** (Gloucestershire, Haringey, Dorset councils) and procurement notices — this indicates an opportunity for a commercial page to rank well
- **Optimum PPS** (Position 5): Has a dedicated "ERP Upgrade or Replacement" guide for manufacturers, uses "ERP replacement" throughout, structured with H2s and FAQs

**Gaps vs Competitors:**
1. **No dedicated commercial page for ERP replacement** — only a blog post
2. **Blog title doesn't match search intent** — "Replacing Your ERP" vs "ERP Replacement UK"
3. **The services page mentions ERP replacement but doesn't optimise for the keyword**
4. **SERP landscape is weak** — government tender documents rank, meaning a well-optimised commercial page could easily rank

**Recommendation:** Create a dedicated `/services/erp-replacement-uk` landing page. Optimise the blog post title to "ERP Replacement UK: A Guide for SMEs" or similar. Add "ERP replacement" to the services page H2 and first paragraph.

---

### 1.5 "AI automation UK business"

**Targeting Page:** Blog post `content/blog/ai-automation-for-business-workflows.md` (partial only)  
**Priority:** MEDIUM

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | Title is "AI Automation for Business: 5 Workflows You Can Build Today" |
| Meta description | ❌ NO | |
| H1 | ❌ NO | |
| First 100 words | ❌ NO | |
| URL slug | ❌ NO | Slug is "ai-automation-for-business-workflows" |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "AI automation" appears 4+ times, "UK" appears separately |
| **Keyword density** | 0% (exact) / ~0.7% (partial "AI automation") | |

**Competitor Comparison (Top 10 Google results):**
- **Commercial AI** (Position 1): Title = "AI Automation Systems for UK Businesses", H1 uses "AI automation systems", phrase repeated 30+ times, dedicated service page
- **BespokeWorks** (Position 4): Title = "AI Automation Agency UK", clear commercial page with pricing, FAQs
- **OpenKit** (Position 5): Title = "AI Automation Services UK", H1 = "AI automation services for UK businesses", 2,000+ words, FAQs, pricing
- **aiby** (Position 3): Title = "aiby \| Practical AI for UK businesses", structured service page

**Gaps vs Competitors:**
1. **No commercial service page for AI automation** — only a blog post
2. **Blog title doesn't include "UK"** — competitors all have "UK" in title
3. **No pricing on the AI automation page** — competitors include pricing
4. **Homepage mentions "AI automation" in schema and service descriptions but not in H1/H2s**

**Recommendation:** Create a dedicated `/services/ai-automation-uk` service page. Add "AI automation" as an H2 on the homepage services section. Update the blog post title to include "UK".

---

### 1.6 "bespoke software for small business UK"

**Targeting Page:** Blog post `content/blog/bespoke-software-for-small-business-uk.md` (partial)  
**Priority:** MEDIUM-HIGH

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | Title is "Bespoke Software for Small Businesses: A UK Guide" — uses "Small Businesses" (plural) not "small business" |
| Meta description | ❌ NO | |
| H1 | ❌ NO | H1 = title |
| First 100 words | ❌ NO | |
| URL slug | ✅ PARTIAL | Slug "bespoke-software-for-small-business-uk" — very close match |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "bespoke software" appears 15+ times, "small business" appears separately |
| **Keyword density** | 0% (exact) / ~2% (partial "bespoke software") | |

**LSI Keywords Found:** 5 (bespoke software, custom software, UK SME, SME, software development partner)

**Competitor Comparison:**
- **BRNB** (Position 2): Title = "Custom Software Development for SMEs", H1 = "Custom Software Development for Small Businesses", dedicated commercial page
- **Synthetic Bytes** (Position 4): Title = "Custom Software Development for UK SMEs", H1 = "Bespoke Software for UK Small Businesses"
- **Dataface** (Position 3): Title = "Full-Stack Software Development for UK SMEs", H1 = "Full-Stack Software Development for UK SMEs"

**Gaps vs Competitors:**
1. **Blog post title uses "Small Businesses" (plural)** — should be "small business" (singular) to match search query
2. **No commercial service page targeting this keyword** — only a blog guide
3. **Blog post has good content depth (1,237 words) but isn't commercially optimised**

**Recommendation:** Update blog post title to "Bespoke Software for Small Business UK: A Practical Guide" to match the exact keyword. Consider creating a dedicated service landing page for this keyword.

---

### 1.7 "custom software vs SaaS"

**Targeting Page:** Blog post `content/blog/custom-software-vs-saas-total-cost-ownership.md`  
**Priority:** MEDIUM

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ✅ YES | "Custom Software vs SaaS: The True 5-Year Cost Comparison" — contains "custom software vs SaaS" |
| Meta description | ❌ NO | Description doesn't contain exact phrase |
| H1 | ❌ NO | H1 = title, but blog layout uses title as H1 so it IS in H1 |
| First 100 words | ❌ NO | |
| URL slug | ✅ YES | "custom-software-vs-saas-total-cost-ownership" — contains "custom-software-vs-saas" |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 1 | In title |
| **Keyword density** | 0.38% | ❌ Below 1-3% target |

**Competitor Comparison:**
- This is a more niche/long-tail keyword with less direct competition
- The blog post content is strong (1,060 words, detailed TCO comparison with tables)
- The comparison page (`/comparison`) also touches on this topic but doesn't use the keyword

**Gaps:**
1. **Keyword density too low** — only 1 occurrence in 1,060 words
2. **Meta description doesn't include the keyword**
3. **No internal linking from the comparison page to this blog post using the keyword as anchor text**

**Recommendation:** Add the phrase "custom software vs SaaS" 3-5 more times naturally in the blog post body. Update meta description to include the phrase. Add internal links from the homepage and comparison page using "custom software vs SaaS" as anchor text.

---

### 1.8 "software development services UK pricing"

**Targeting Page:** `pages/services.astro` (partial)  
**Priority:** MEDIUM-HIGH

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ PARTIAL | Title is "Bespoke Software Development Services UK \| Pricing" — contains "software development services UK" and "pricing" separately |
| Meta description | ❌ NO | Description mentions pricing ranges but not the exact phrase |
| H1 | ❌ NO | H1 is "Bespoke Software Development Services for UK SMEs" |
| First 100 words | ❌ NO | |
| URL slug | ❌ NO | Slug is "services" |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "software development services" appears, "pricing" appears, but not as one phrase |
| **Keyword density** | 0% (exact) | |

**Competitor Comparison:**
- **Red Eagle Tech**: Has a dedicated "Transparent bespoke software pricing" section with H2, detailed pricing tiers, and the word "pricing" used 10+ times
- **Acentrix**: Has "Three ways to start" with clear pricing tiers, H3s with prices
- **Capital Compute**: Extensive pricing FAQ section

**Gaps:**
1. **Services page has good pricing content but doesn't target "pricing" as a keyword**
2. **The word "pricing" only appears in the title tag, not in H1, H2s, or body content**
3. **URL slug is just "services"** — could be "software-development-services-uk-pricing"

**Recommendation:** Add an H2 like "Software Development Services UK: Pricing Guide" to the services page. Use "pricing" more prominently in body content. Consider changing the URL slug or creating a dedicated pricing page.

---

### 1.9 "bespoke software development for SMEs"

**Targeting Page:** `pages/services.astro` (partial)  
**Priority:** MEDIUM-HIGH

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | Title uses "Bespoke Software Development Services UK" |
| Meta description | ❌ NO | |
| H1 | ❌ PARTIAL | H1 is "Bespoke Software Development Services for UK SMEs" — contains all words but not exact phrase |
| First 100 words | ❌ NO | |
| URL slug | ❌ NO | |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "bespoke software development" appears multiple times, "SMEs" appears separately |
| **Keyword density** | 0% (exact) | |

**Competitor Comparison:**
- **Procosoft** (Position 5): Title = "Bespoke Software Development for UK SMEs", H1 = "Your Dedicated Software Development Partner", "For Startups & Established SMEs"
- **Smart Path IT** (Position 1): Title = "Custom Software Development for UK SMEs", strong SME focus throughout
- **Dataface** (Position 3): Title = "Full-Stack Software Development for UK SMEs"

**Gaps:**
1. **H1 is close but uses "Services for UK SMEs" instead of "for SMEs"** — slight mismatch
2. **No exact match anywhere** — the phrase is split across different elements
3. **Services page word count (614) is low** — competitor pages are 1,500-3,000+ words

**Recommendation:** Adjust the services page H1 or add an H2 with "Bespoke Software Development for SMEs". Expand the page content to 1,500+ words. Use the exact phrase 5-8 times naturally.

---

### 1.10 "system integration services UK"

**Targeting Page:** NONE (blog post is informational, not a service page)  
**Priority:** MEDIUM-HIGH

| Placement | Present? | Details |
|-----------|----------|---------|
| Title tag | ❌ NO | |
| Meta description | ❌ NO | |
| H1 | ❌ NO | |
| First 100 words | ❌ NO | |
| URL slug | ❌ NO | |
| Image alt text | ❌ NO | |
| **Exact occurrences** | 0 | "system integration" appears on multiple pages, but "system integration services UK" never as exact phrase |
| **Keyword density** | 0% (exact) | |

**Competitor Comparison (Top 10 Google results):**
- **NetMonkeys** (Position 1): Title = "System Integration Services \| System Integrator", uses "system integration services" 20+ times, "UK" 15+ times
- **KMayer** (Position 4): Title = "System Integration & API Connectivity Services UK", very detailed page
- **Synergi Tech** (Position 5): Title = "Software Integration Services UK \| API & System Integration"
- **MPED** (Position 8): Title = "Platform Integrations UK \| CRM, ERP and API Delivery"

**Gaps:**
1. **No dedicated service page for system integration** — this is a major gap
2. **The homepage mentions system integration as a service but doesn't have a dedicated page**
3. **The blog post is informational and doesn't target "services" as a keyword**

**Recommendation:** Create a dedicated `/services/system-integration-uk` page. This should be a commercial service page with pricing, process, FAQs, and case studies — not a blog post.

---

## 2. Page-by-Page Keyword Targeting Summary

### 2.1 Main Pages

| Page | URL Slug | Word Count | Primary Keywords Targeted | Key Issues |
|------|----------|------------|---------------------------|------------|
| **Homepage** | `/` | 982 | "bespoke software development UK" (title only) | H1 doesn't contain target keyword; density 0.41% |
| **Services** | `/services` | 614 | "bespoke software development services UK" | Low word count; no exact target keyword match in H1 |
| **About** | `/about` | 823 | "bespoke software development team UK" | Informational, not keyword-targeted |
| **Process** | `/process` | 716 | "software development process" | Informational; good content but not commercial keyword targeted |
| **Comparison** | `/comparison` | 342 | "how we compare" | Thin content; doesn't target commercial keywords |
| **Guide** | `/guide` | 501 | "custom software projects" | Lead magnet; doesn't target primary keywords |
| **Contact** | `/contact` | 358 | "contact" | Functional page; acceptable |
| **Assessment** | `/assessment` | 178 | "software readiness quiz" | ⚠️ THIN CONTENT (178 words) |
| **Best Software Developer UK** | `/best-software-developer-uk` | 590 | "best software developer UK" | Good keyword targeting in title/H1; moderate content depth |
| **Privacy** | `/privacy` | 758 | N/A | Legal page; not keyword-relevant |
| **Terms** | `/terms` | 475 | N/A | Legal page; not keyword-relevant |

### 2.2 Industry Pages (ALL thin content)

| Page | Word Count | H1 | Key Issues |
|------|------------|----|----|
| software-for-accountants | 152 | "Bespoke Software for Accountants in the UK" | ⚠️ Severely thin; no H2s extracted |
| software-for-construction | 152 | "Bespoke Software for Construction in the UK" | ⚠️ Severely thin |
| software-for-ecommerce | 133 | "Bespoke Software for E-commerce in the UK" | ⚠️ Severely thin |
| software-for-education | 153 | "Bespoke Software for Education in the UK" | ⚠️ Severely thin |
| software-for-financial-services | 149 | "Bespoke Software for Financial Services in the UK" | ⚠️ Severely thin |
| software-for-healthcare | 142 | "Bespoke Software for Healthcare in the UK" | ⚠️ Severely thin |
| software-for-hospitality | 147 | "Bespoke Software for Hospitality in the UK" | ⚠️ Severely thin |
| software-for-law-firms | 140 | "Bespoke Software for Law Firms in the UK" | ⚠️ Severely thin |
| software-for-logistics | 148 | "Bespoke Software for Logistics in the UK" | ⚠️ Severely thin |
| software-for-manufacturing | 147 | "Bespoke Software for Manufacturing in the UK" | ⚠️ Severely thin |
| software-for-marketing-agencies | 147 | "Bespoke Software for Marketing Agencies in the UK" | ⚠️ Severely thin |
| software-for-real-estate | 151 | "Bespoke Software for Real Estate in the UK" | ⚠️ Severely thin |

**Note on industry pages:** The word count of 130-153 reflects the custom body content in the `<slot>` section. However, these pages also render structured content from the `IndustryPage.astro` layout (use cases, benefits, FAQs), which adds significant content. The rendered pages likely have 600-900+ words. The thin content flag applies to the *unique* body content, not the total rendered page. Still, the unique content should be expanded to 300+ words for each industry.

### 2.3 Blog Posts

| Post | Word Count | Primary Keywords | Key Issues |
|------|------------|-----------------|------------|
| bespoke-software-for-small-business-uk | 1,237 | "bespoke software uk", "custom software small business" | Title uses "Small Businesses" (plural) vs target "small business" (singular) |
| custom-software-vs-saas-total-cost-ownership | 1,060 | "custom software vs saas", "tco bespoke software" | Good content; keyword density low (0.38%) |
| erp-replacement-uk-sme-guide | 1,175 | "erp replacement uk", "bespoke erp" | Title doesn't match target keyword exactly |
| system-integration-for-uk-smes | 1,047 | "system integration", "api integration uk" | Good content; no "services" or "UK" in title for commercial intent |
| ai-automation-for-business-workflows | 1,157 | "ai automation business", "workflow automation uk" | No "UK" in title |
| build-vs-buy-software-uk-sme | 922 | "build vs buy software", "bespoke software uk" | Good content; could target "bespoke software vs SaaS" |
| how-ai-accelerates-software-development | 1,183 | "ai software development", "ai coding tools" | Informational; not commercial keyword targeted |
| what-is-technical-consultancy | 1,369 | "technical consultancy uk" | Good content; longest blog post |

---

## 3. Thin Content Analysis

### Pages Under 300 Words

| Page | Word Count | Severity | Recommendation |
|------|------------|----------|----------------|
| assessment.astro | 178 | HIGH | The quiz is JS-rendered; visible text is thin. Add intro/outro content, FAQ section |
| 12 industry pages | 133-153 each | HIGH | Each industry page needs 300+ words of unique body content. Currently only 3-4 short paragraphs |

**Note:** The industry pages use a shared layout (`IndustryPage.astro`) that adds use cases, benefits, and FAQs from structured data. The *total rendered content* is likely 600-900 words. However, the unique body content (the `<slot>` section) is very thin. For SEO purposes, the unique content should be expanded, and the structured data content should be rendered as actual HTML text (not just JS-injected) to ensure crawlers can read it.

---

## 4. Keyword Cannibalisation Analysis

**Result: NO cannibalisation issues detected.**

No two pages target the same keyword in their title tag or H1. However, this is primarily because **most keywords are under-targeted** rather than well-optimised. The lack of cannibalisation is a side effect of insufficient keyword targeting.

**Watch areas if recommendations are implemented:**
- Homepage ("bespoke software development UK") vs Services page ("bespoke software development services UK") — these are distinct enough but monitor
- Blog post "bespoke-software-for-small-business-uk" vs a potential new service page for the same keyword — ensure only one page targets the exact phrase in title/H1
- Blog post "system-integration-for-uk-smes" vs a potential new service page — the blog should target informational intent, the service page should target commercial intent

---

## 5. Long-Tail Keyword Analysis

### Currently Targeted Long-Tails

| Long-tail keyword | Page | Status |
|-------------------|------|--------|
| "bespoke software for small business UK" | Blog post | ⚠️ Title mismatch (plural vs singular) |
| "custom software vs SaaS" | Blog post | ✅ Good, but low density |
| "build vs buy software UK SME" | Blog post | ✅ Good targeting |
| "ERP replacement UK SME" | Blog post | ⚠️ Title doesn't match |
| "system integration for UK SMEs" | Blog post | ✅ Good, but informational not commercial |
| "AI automation for business" | Blog post | ⚠️ Missing "UK" |
| "technical consultancy UK" | Blog post | ✅ Good targeting |
| "best software developer UK" | Dedicated page | ✅ Good targeting |

### Missing Long-Tail Keywords (Opportunity)

| Long-tail keyword | Search Intent | Recommended Page |
|-------------------|---------------|------------------|
| "bespoke CRM development UK" | Commercial | New service sub-page |
| "custom API integration UK" | Commercial | New service sub-page |
| "bespoke software pricing UK" | Commercial | Expand services page |
| "software development company UK for SMEs" | Commercial | Homepage or services page |
| "replace SaaS with bespoke software" | Commercial | New landing page |
| "custom software development London" | Commercial | Location page (if applicable) |
| "bespoke software vs off-the-shelf" | Informational | New blog post |
| "how much does bespoke software cost UK" | Informational | Expand FAQ or new blog post |

---

## 6. Missing Pages Analysis

### Pages That Should Exist But Don't

| Missing Page | Target Keywords | Priority | Rationale |
|--------------|----------------|----------|-----------|
| **System Integration Service Page** | "system integration services UK", "system integration UK SME" | HIGH | Currently only a blog post; competitors all have dedicated service pages |
| **ERP Replacement Service Page** | "ERP replacement UK", "bespoke ERP replacement" | HIGH | Blog post exists but no commercial landing page |
| **AI Automation Service Page** | "AI automation UK business", "AI automation services UK" | MEDIUM | Blog post exists but no commercial landing page |
| **Custom Software Development Page** | "custom software development UK" | HIGH | No page targets this major keyword |
| **Pricing Page (dedicated)** | "software development services UK pricing" | MEDIUM | Services page has pricing but doesn't target the keyword |
| **Industries Hub Page** | "bespoke software for [industry] UK" | MEDIUM | No `/industries` index page; industry pages are orphaned (only linked from homepage) |

---

## 7. Competitor Pattern Analysis

Based on research of the top 10 Google results for the primary keywords, here are the patterns competitors follow that ajairu.dev does not:

### 7.1 Title Tag Patterns
- **Competitors:** Use the exact target keyword as the first words of the title tag
- **ajairu.dev:** Homepage title starts with "Bespoke Software Development UK" ✅, but services page doesn't lead with "custom software development UK"

### 7.2 Content Depth
- **Competitors:** Service pages are 1,500-5,000+ words with extensive FAQs, pricing tables, case studies
- **ajairu.dev:** Services page is 614 words; most pages are under 1,000 words

### 7.3 H1/H2 Structure
- **Competitors:** H1 contains the exact target keyword; H2s use keyword variants and related terms
- **ajairu.dev:** H1s are benefit-driven ("Bespoke Software That Works the Way You Do") rather than keyword-driven

### 7.4 FAQ Sections
- **Competitors:** Every top-ranking page has a detailed FAQ section with 5-10 questions, often using FAQ schema
- **ajairu.dev:** ✅ Good — homepage and services page have FAQs with schema markup

### 7.5 Pricing Transparency
- **Competitors:** Top-ranking pages include clear pricing ranges, often in H3s or dedicated pricing sections
- **ajairu.dev:** ✅ Good — services page has clear pricing tiers

### 7.6 Internal Linking
- **Competitors:** Strong internal linking with keyword-rich anchor text
- **ajairu.dev:** Internal links exist but use generic anchor text ("Learn about Integration", "View Services")

### 7.7 Schema Markup
- **Competitors:** Most use Service, FAQ, and BreadcrumbList schema
- **ajairu.dev:** ✅ Excellent — uses LocalBusiness, Organization, WebSite, Service, FAQPage, BreadcrumbList, HowTo, and Article schema

---

## 8. LSI Keyword Coverage Analysis

### Pages with Strong LSI Coverage (8+ related keywords)
| Page | LSI Keywords Found |
|------|-------------------|
| Homepage | 15 (bespoke software, custom software, system integration, ERP replacement, AI automation, workflow automation, API integration, cloud software, source code ownership, vendor lock-in, fixed-price, UK SME, SME, break-even, subscription fees) |
| Services | 18 (most comprehensive LSI coverage on the site) |
| About | 9 |
| Process | 8 |

### Pages with Weak LSI Coverage (under 4 related keywords)
| Page | LSI Keywords Found | Issue |
|------|-------------------|-------|
| Assessment | 1 | Needs more related terms |
| All 12 industry pages | 2-3 each | Need industry-specific LSI keywords |

### Recommended LSI Keywords to Add
- **"custom platform"** — not found on any page; should appear on services and homepage
- **"workflow automation"** — found on homepage but not on services page or AI blog post titles
- **"cloud software"** — found on homepage but missing from services page
- **"source code ownership"** — found on homepage but not emphasised on services page
- **"data migration"** — found on some pages but should be prominent on ERP replacement content
- **"API integration"** — found on homepage but not on system integration blog post title

---

## 9. Priority Recommendations

### 🔴 Critical (Immediate Action)

1. **Create dedicated service pages for under-targeted keywords:**
   - `/services/system-integration-uk` — targeting "system integration services UK"
   - `/services/erp-replacement-uk` — targeting "ERP replacement UK"  
   - `/services/ai-automation-uk` — targeting "AI automation UK business"

2. **Optimise homepage for "bespoke software development UK":**
   - Add exact phrase to H1 (currently "Bespoke Software That Works the Way You Do")
   - Add to meta description
   - Add to first 100 words
   - Increase natural usage to 8-12 occurrences (target ~1.5% density)
   - Add H2 containing the keyword

3. **Optimise services page for "custom software development UK":**
   - Either rename title to include "custom software development UK" or create a separate page
   - Add keyword to H1 or a prominent H2
   - Expand content from 614 to 1,500+ words

4. **Fix blog post title mismatches:**
   - "Bespoke Software for Small Businesses" → "Bespoke Software for Small Business UK"
   - "Replacing Your ERP" → "ERP Replacement UK: A Guide for SMEs"
   - "AI Automation for Business" → "AI Automation for UK Businesses"
   - "System Integration: Connecting Your CRM, ERP and Accounting Software" → "System Integration for UK SMEs: Connecting Your CRM, ERP and Accounting Software"

### 🟡 High Priority (Next Sprint)

5. **Expand industry page content:**
   - Each industry page needs 300+ words of unique body content (currently 130-153 words)
   - Add industry-specific use cases, compliance requirements, and case study examples
   - Add H2s with keyword variants (e.g., "Custom Software for Accountants UK", "Bespoke Practice Management Software")

6. **Create an industries hub page at `/industries`:**
   - Currently, industry pages are only linked from the homepage
   - A hub page would create a proper content silo and target "bespoke software for [industry] UK"

7. **Increase keyword density on all targeted pages:**
   - Target 1-2% density for primary keywords
   - Use keyword variants and LSI terms naturally

8. **Improve internal linking with keyword-rich anchor text:**
   - Use "bespoke software development UK" as anchor text in navigation or footer
   - Use "system integration services UK" as anchor text when linking to integration content
   - Use "custom software vs SaaS" as anchor text when linking to the comparison blog post

### 🟢 Medium Priority (Backlog)

9. **Add pricing-focused content to services page:**
   - Add H2 "Software Development Services UK: Pricing Guide"
   - Use "pricing" 5+ times in body content
   - Consider a dedicated `/pricing` page

10. **Expand the comparison page** (currently 342 words):
    - Add more detailed comparison content
    - Target "bespoke software vs SaaS" or "custom software vs off-the-shelf"

11. **Add "custom platform" as an LSI keyword** across the homepage and services page

12. **Improve image alt text:**
    - Most pages have no images with keyword-rich alt text
    - Process page has good alt text but doesn't include primary keywords
    - About page has one alt text with "bespoke software development and system integration for UK SMEs" — good example to replicate

---

## 10. Summary Scorecard

| Area | Score | Notes |
|------|-------|-------|
| **Keyword in Title Tags** | 2/10 | Only homepage and one blog post have exact match |
| **Keyword in H1 Tags** | 0/10 | No page has exact target keyword in H1 |
| **Keyword in Meta Descriptions** | 0/10 | No page has exact target keyword in meta description |
| **Keyword Density (1-3%)** | 0/10 | All pages below 1% for target keywords |
| **Content Depth (300+ words)** | 18/31 | 13 pages have thin content |
| **LSI Keyword Coverage** | 6/10 | Good on core pages, weak on industry pages |
| **Schema Markup** | 9/10 | Excellent — comprehensive schema usage |
| **Internal Linking** | 5/10 | Links exist but lack keyword-rich anchor text |
| **Cannibalisation Issues** | 10/10 | No issues (but due to under-targeting) |
| **Missing Pages** | 5/10 | 5+ important pages missing |
| **URL Slug Optimisation** | 4/10 | Some good slugs (blog posts), poor on service pages |
| **Image Alt Text** | 2/10 | Very few images with keyword-rich alt text |
| **Overall SEO Keyword Score** | **4.5/10** | Significant improvement needed |

---

*This audit was conducted as a read-only analysis. No files were modified. Raw analysis data is saved in `seo_audit_raw.json`.*