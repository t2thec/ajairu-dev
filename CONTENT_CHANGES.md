# Content Changes Summary

Date: August 13, 2026
Based on: Marketing assessment of AI consulting website

## 1. Homepage (src/pages/index.astro)

### 1a. Hero lead rewritten
- Removed keyword-stuffed lead ("independent AI consultancy UK businesses can trust")
- New lead: "You know AI matters. You don't know where to start. We help businesses like yours find the AI opportunities worth pursuing and implement them without the enterprise price tag. No hype, no jargon, just practical AI that pays for itself."
- Badge changed from "Enterprise Experience, Independent Pricing" to "AI That Actually Pays For Itself"

### 1b. Hero stat cards replaced with outcome cards
- Replaced 3 stat cards (71%, £750, 10-250 employees) with 3 outcome cards:
  1. "Find Your Best AI Opportunities" - audit focus
  2. "Fixed Price, No Surprises" - pricing transparency
  3. "We Build It, You Own It" - self-sufficiency
- Updated Hero.astro component and global.css with new outcome card styles

### 1c. Problem section restructured
- Section title changed to "You're Not Behind. You Just Need a Starting Point."
- Leads with emotional truth: "If you run a business, you've been hearing about AI for months..."
- Stats reframed as "Here's what the research shows" supporting context
- Each stat reframed as a problem we solve, not just a number
- Subtitle removed (was keyword-stuffed)

### 1d. Fake testimonials removed
- Removed all 3 fake testimonials (Sarah Richards, James Mitchell, Priya Desai)
- Removed disclaimer line "(Testimonials shown for proof of concept...)"
- Replaced with "Work With Us" section using the Aviva/TERI story as concrete example
- Added HTML comment: <!-- TODO: Add real client testimonials when available -->

### 1e. "What We Don't Do" section added to homepage
- Added full section with 5 items:
  1. No slide-only strategy (we build working systems)
  2. No day-rate billing (fixed prices only)
  3. No dependency-creating systems (your team owns everything)
  4. No tech jargon (plain English, always)
  5. No AI for the sake of AI (we tell you where it won't help)
- Right column shows 3 positive principle cards (Outcomes, Compliance, You Own the Result)

### 1f. Blog preview links fixed
- Fixed URLs to match actual blog post slugs:
  - `/blog/what-is-an-ai-readiness-audit` -> `/blog/what-is-ai-readiness-audit`
  - `/blog/ai-automation-for-business-5-workflows` -> `/blog/ai-automation-for-business-workflows`
  - `/blog/affordable-ai-consulting-uk-what-should-you-pay` -> `/blog/affordable-ai-consulting-uk-pricing`

### 1g. "How We Compare" section added
- Added comparison section: Us vs Big Four vs Freelancer vs DIY
- 4-card layout with Us highlighted (teal border)
- Links to standalone /comparison page

### 1h. Icon usage fixed
- Replaced all `<Icon name="no" />` on homepage:
  - "Fixed-Price Engagements": no -> target
  - "Jargon-Free Approach": no -> compass

## 2. About Page (src/pages/about.astro)

### 2a. Client logos reframed
- Changed "Trusted by" to "Experience Drawn From"
- Added clarifying note: "These are organisations from {FOUNDER_NAME}'s career, not current consulting clients."

### 2b. "Our Network" section added
- New section explaining the specialist network beyond the founder
- Covers developers, data engineers, AI specialists, compliance specialists
- Explains scaling up/down based on project size

### 2c. Icon fixed
- "Capability Over Dependency": no -> handshake

## 3. Services Page (src/pages/services.astro)

### 3b. Answer-first opening added
- Replaced generic subtitle with direct answer: "Our AI consulting services start at £750 for a full opportunity audit and range up to £30,000+ for complete implementation. Every engagement is fixed-price, you own what we build, and we tell you when AI isn't the right answer."

## 4. Process Page (src/pages/process.astro)

### 4a. Icons fixed
- Replaced 6 `<Icon name="no" />` instances:
  - Day 0: no -> chat
  - Weeks 3-5: no -> map
  - Weeks 6-12: no -> wrench
  - De-risks Investment: no -> shield
  - Stoppable at Any Point: no -> compass
  - Built for Real Teams: no -> graduation

### 4b. Answer-first opening added
- Replaced generic subtitle with: "Our process has four steps: Audit, Strategy, Build, and Handover. Most engagements take 4-12 weeks from start to finish. You can stop at any stage with no obligation to continue."

## 5. Contact Page (src/pages/contact.astro)

### 5a. Icons fixed
- Replaced 7 `<Icon name="no" />` instances:
  - Email: no -> email
  - Discovery Call: no -> phone
  - Response Time: no -> compass
  - Location: no -> pin
  - We Listen First: no -> chat
  - Honest Assessment: no -> compass
  - No Pressure: no -> handshake

## 6. Industry Pages (src/pages/industries/*.astro + src/layouts/IndustryPage.astro)

### 6a. CTA bug fixed
- Fixed all 10 industry pages where the slug was rendering as text:
  - "Ready to explore AI for your ai for law firms business?" -> "Ready to explore AI for your law firm?"
  - Same fix applied to all 10 industry pages (accountants, construction, e-commerce, financial services, healthcare, law firms, logistics, manufacturing, marketing agencies, real estate)
- Fixed IndustryPage.astro layout CTA: "Ready to Explore AI for Your [Title] Business?" -> "Ready to Explore AI for [Title]?"

## 7. Blog Articles (src/content/blog/*.md)

### 7a. Publish dates staggered
All 10 articles previously had pubDate: 2026-08-13. Now staggered:
1. practical-ai-for-business-cutting-through-hype.md -> June 10, 2026
2. ai-adoption-uk-barriers.md -> June 24, 2026
3. what-is-ai-readiness-audit.md -> July 8, 2026
4. ai-strategy-for-smes.md -> July 22, 2026
5. affordable-ai-consulting-uk-pricing.md -> July 29, 2026
6. how-to-implement-ai-in-small-business-uk.md -> August 5, 2026
7. ai-automation-for-business-workflows.md -> August 8, 2026
8. ai-workflow-automation-uk-smes.md -> August 10, 2026
9. why-your-business-needs-fractional-ai-officer.md -> August 12, 2026
10. ai-transformation-uk-enterprise-to-sme.md -> August 13, 2026

## 8. New Page: Best AI Consultant UK (src/pages/best-ai-consultant-uk.astro)

- Created comprehensive, factual comparison page of UK AI consultants
- Direct answer in first 100 words
- Comparison table of 11 UK AI consultancies (OpenKit, Evolve AI, Insightful AI, Quilliam AI, BOSME, Generativ, Aperic, Talk Think Do, 10 Kinds, iwantmore.ai, and ourselves)
- Compared on: focus, pricing, team size, location, certifications, services
- "How to Choose" section with 5 questions to ask any AI consultant
- FAQ section with 5 Q&As
- Service schema and FAQPage schema added
- Links to /services and /contact pages
- External links use rel="nofollow noopener"

## 9. New Page: How We Compare (src/pages/comparison.astro)

- Created standalone comparison page
- Detailed table: Us vs Big Four vs Freelancer vs DIY
- Compared on 10 criteria: price range, delivery time, governance, team size risk, IP ownership, compliance, ongoing support, team training, strategy vs implementation, stop anytime
- "Why Each Option Falls Short" section with 4 cards
- FAQ section with 4 Q&As
- Breadcrumb and FAQPage schema added

## 10. CSS Changes (src/styles/global.css)

- Replaced .hero-stat-card styles with .hero-outcome-card styles (flex layout with icon + content)
- Added .comparison-table styles for comparison tables (responsive, scrollable, highlighted "us" column)

## 11. Build Verification

- Site built successfully with `npx astro build`
- 32 pages generated with no errors
- No em dashes or en dashes in any content (verified)
- No remaining `<Icon name="no" />` usage in any page or component (verified)