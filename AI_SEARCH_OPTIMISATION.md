# AI Search Optimisation Report: CallinanAI UK

**How to ensure this AI consulting website appears at the top of recommendations when people use ChatGPT, Gemini, Perplexity, Claude, and Copilot to search for AI consultants in the UK.**

---

## 1. Executive Summary

### The Landscape Has Shifted

In 2026, AI search is mainstream. ChatGPT has 900 million weekly users and processes 2.5 billion prompts per day. Google AI Overviews reach over 2 billion people monthly. 47% of US adults used an AI tool to find a local business in the past month (Yext, March 2026), up from 6% a year earlier (BrightLocal). Among households earning $150k+, AI has already surpassed Google as the starting point for local business searches. 45% of B2B buyers used generative AI during a recent purchase (Gartner, May 2026). This is no longer an early-adopter behaviour — it is how your potential clients are finding service providers.

For this business, the opportunity is significant: AI consulting is a category where buyers actively research before engaging, and they are increasingly using AI tools to do that research. When someone asks ChatGPT "best AI consultant in the UK for small businesses" or Perplexity "AI consultancy for SMEs UK", the businesses that appear in those answers win the first impression. Those that don't are invisible.

### Key Findings

1. **ChatGPT relies on Bing's index**, not Google's. ChatGPT's citations correlate 87% with Bing's top results and only 56% with Google's (Seer Interactive, 500+ citation analysis, October 2025). This is the single most overlooked gap: a site optimised only for Google may be invisible to ChatGPT.

2. **The site's existing schema markup is strong** (LocalBusiness, Organization, WebSite, Service, FAQPage, Person, HowTo, BreadcrumbList), but has gaps: no `@id` entity linking, no `sameAs` links, no `dateModified` on articles, and no AI crawler rules in robots.txt.

3. **No llms.txt file exists.** Roughly 70% of sites still lack one (SearchScore, July 2026). Adding one is a low-effort, high-signal differentiator.

4. **The robots.txt is misconfigured.** The `public/robots.txt` references `www.example.co.uk` (the placeholder domain) and the sitemap URL uses `sitemap-index.xml` which may not exist. The root `robots.txt` references `www.callinanai.co.uk` correctly but has `.html` extensions in sitemap URLs that don't match Astro's clean URL routing. Neither file contains any AI crawler-specific rules.

5. **Third-party presence is the biggest gap.** AI engines direct 70-92% of citations to third-party editorial content, not brand-owned pages (Citation Hawk, 2026). Getting mentioned on Clutch, Trustpilot, LinkedIn, industry publications, and Reddit matters more than any on-site optimisation.

6. **Content extractability is the win condition.** The structural pattern that wins across all AI engines: the direct answer stated in the first paragraph, H2s phrased as natural-language questions, one idea per paragraph, specific attributed facts rather than marketing copy. The average citability score across 850,000+ sites is just 23.1/100 despite technical foundations averaging 70.1/100 (SearchScore Q2 2026) — the web is "built fine and semantically invisible."

### Top 5 Recommendations (Do These First)

| # | Recommendation | Impact | Effort | Timeline |
|---|---|---|---|---|
| 1 | **Fix robots.txt** — add explicit AI crawler rules (allow search crawlers, decide on training crawlers), fix the sitemap URL, remove `.html` extensions | Very High | Low | Day 1 |
| 2 | **Add llms.txt** — a curated, factual summary of who you are, what you do, and links to your key pages, in the standard markdown format | High | Low | Day 1 |
| 3 | **Verify in Bing Webmaster Tools** — submit sitemap, claim Bing Places. ChatGPT's retrieval runs on Bing's index; if Bing can't find you, ChatGPT can't cite you | Very High | Low | Week 1 |
| 4 | **Add `sameAs` and `@id` to schema** — link your Organization to LinkedIn, GitHub, Google Business Profile, and any directory profiles. Use stable `@id` references so the entity graph consolidates | High | Medium | Week 1 |
| 5 | **Claim third-party profiles** — Trustpilot, Clutch, Google Business Profile, Foursquare, Bing Places. Domains with active review profiles have 3x higher ChatGPT citation probability | Very High | Medium | Weeks 1-2 |

---

## 2. AI Search Landscape: How AI Tools Find and Recommend Businesses

### How Each Platform Works

#### ChatGPT (OpenAI)
ChatGPT recommends brands through **two systems**:
1. **Training data associations** — brand associations baked into the model during training. This is the "frozen memory" path. Brands strongly associated with their category before the training cutoff are recalled from memory.
2. **Live retrieval via Bing** — when a query needs fresh information, ChatGPT searches the web through Bing's index, reads pages, and incorporates findings into its answer. Most "best [category] in [location]" queries trigger this retrieval path.

**Key data point:** ChatGPT's citations correlate 87% with Bing's top organic results and only 56% with Google's (Seer Interactive, October 2025). If your site isn't ranking in Bing, you're not in ChatGPT's candidate pool.

**Fan-out queries:** ChatGPT breaks user prompts into subtopics and runs parallel sub-queries against Bing. 32.9% of ChatGPT's cited pages come from these sub-queries, not the original prompt (AirOps study). This is why topical depth beats head-term optimisation — a single page targeting one keyword misses the fan-out candidate pool.

**Citation drivers (ranked):**
- Referring domain count (strongest predictor — sites with 350,000+ referring domains average 8.4 citations vs 1.6 for sites under 2,500)
- Entity recognition (Wikipedia/Wikidata entries, consistent NAP, schema)
- Bing visibility (87% of citations match Bing's top results)
- Third-party review presence (Trustpilot, G2, Capterra, Yelp = 3x higher citation probability)
- Content structure and freshness (content refreshed within 30 days cited ~3.2x more often)
- Cross-source consensus (mentions across multiple independent sources)

#### Google AI Overviews & AI Mode
Google AI Overviews are AI-generated summaries at the top of search results, built by a Gemini model grounded in Google's own Search index. They appear on roughly 16-25% of US searches (increasing), and each Overview is built from roughly 8-13 source pages.

**Key mechanism: Query fan-out.** Google splits the user query into multiple sub-queries, retrieves pages for each, and synthesises from the combined pool. As of early 2026, 62% of cited pages now come from outside the top 10 of the original query (down from 76% in mid-2025), meaning pages ranking 11-100 can earn citations if they rank well for a fan-out sub-query.

**Citation drivers:**
- Organic ranking (still the strongest prerequisite, but no longer a hard gate)
- Answer-first structure (55% of citations pull from the top 30% of a page's content)
- Schema markup (pages with schema cited 2.3x more often than without)
- E-E-A-T signals (96% of citations come from sources with strong E-E-A-T)
- Topical authority across related queries (strongest single domain-level predictor)
- Factual specificity (statistics, named sources, dated data points)
- Off-site mentions (Reddit, YouTube, industry publications build the consensus signal)

#### Perplexity
Perplexity is a **retrieval-first** engine — it fetches live web results for every query, then synthesises an answer with inline citations. It maintains its own crawling infrastructure and indexes, supplemented by third-party search APIs. Every answer includes numbered source links.

**Key difference:** Perplexity uses a **gate-based pipeline** (not weighted scoring like Google). Content must pass five sequential pass/fail gates: intent mapping → retrieval → L3 ML reranker quality filtering → context window packaging → LLM synthesis. Failing any single gate eliminates content entirely — strong signals in one area cannot compensate for weakness in another. This makes Perplexity optimisation a "weakest-link" problem.

**Citation drivers (in approximate weight order):**
1. **Freshness** (very high — 40% citation drop after 30 days; content under 30 days old earns ~3.2x more citations)
2. **Semantic relevance** (very high — answer the query in the first 100 words; 90% of top-cited sources follow this BLUF pattern)
3. **Topical authority** (high — interlinked content clusters receive multiplicative ranking advantages via `subscribed_topic_multiplier`)
4. **BLUF / answer structure** (high — direct answer in first 100 words)
5. **Corroboration** (citing credible external sources within content)
6. **Early post-publication engagement** (CTR, saves, shares)
7. **Schema markup** (~10% contribution; pages with schema achieve 47% top-3 citation rate vs 28% without)
8. **Domain authority** (~15% — lower than most assume; 92.78% of cited pages have fewer than 10 referring domains)

**Source diversity enforcement:** Perplexity averages 5.2 unique domains per response (vs 3.1 for ChatGPT). It actively tries to cite different domains, creating opportunity for independent sites with quality content.

#### Claude (Anthropic)
Claude answers primarily from training data by default, with optional live web search in claude.ai, the API, and Claude Code. It is crawled by ClaudeBot (training) and Claude-SearchBot (search indexing).

Claude evaluates whether your content is **worth quoting**, not where it ranks. The key signals are content quality, expertise signals, and whether the content is the kind that a model would want to cite as an authoritative source. Claude leans heavily on its training corpus, so your pre-cutoff footprint matters most — authority and third-party mentions built over time feed future training runs.

#### Gemini (Google)
Gemini grounds on Google Search, governed by Googlebot access and the `Google-Extended` token. Your Google footprint carries over; quotability (content extractability) decides whether ranking converts into citations. Gemini is the most procedural of the AI platforms — it never assigns numeric weightings to factors and leans on disclaimers about the limits of its own judgment.

#### Microsoft Copilot
Copilot draws on Bing's index (like ChatGPT) plus Microsoft's Graph. Bing visibility is essential. Copilot also integrates with Microsoft 365 data, so for B2B contexts, having presence in Microsoft's ecosystem matters.

### GEO vs AEO vs Traditional SEO

| Aspect | SEO | AEO | GEO |
|---|---|---|---|
| **Goal** | Rank pages on SERPs, drive clicks | Get content selected as direct answers in AI Overviews, PAA boxes, voice | Be cited inside AI-generated responses from ChatGPT, Claude, Perplexity |
| **Primary target** | Google/Bing ranked results | Featured snippets, PAA boxes, voice responses | AI-generated responses (ChatGPT, Claude, Perplexity, AI Overviews) |
| **Key signals** | Backlinks, keyword relevance, technical health | Direct answer structure, FAQ schema, question-matching headers | Source citations, statistics, authoritative voice, entity clarity |
| **Success metric** | Ranking position, organic traffic | Snippet ownership rate, PAA presence | AI citation rate, mention share across platforms |
| **Time to results** | 3-12 months | 4-12 weeks | 4-16 weeks |

**The critical insight:** These are not separate disciplines — they are three emphases on the same work. The technical and content foundations are largely shared. If you already have a solid SEO strategy, you are closer to GEO readiness than you think. The incremental work for AI search is: crawler access for AI bots, content extractability, entity clarity, and third-party authority signals.

### Current Adoption Rates

- **47% of US adults** used an AI tool to find a local business in the past month (Yext, March 2026)
- **42.7% globally** (Yext, 3,848 consumers surveyed)
- Among daily local searchers, **59% have migrated to AI**
- Among households earning $150k+, **AI has surpassed Google** as the starting point for local business searches
- **71% of AI users** say they are using AI more than they were a year ago
- **43% of non-adopters** say they're likely to try AI within six months
- **74% of AI users** rate their trust in AI recommendations at 4 or 5 out of 5
- After receiving an AI recommendation, **62% immediately search Google** to verify, **58% visit the business website**, **52% click through to cited sources**
- **45% of B2B buyers** used generative AI during a recent purchase (Gartner, May 2026)
- **16%+ of all Google searches** now show AI Overviews (up from <1% in 2023)

**What this means for this business:** Your target audience (UK SMEs with 10-250 employees, decision-makers researching AI consulting) are exactly the demographic using AI tools to research service providers. They ask ChatGPT or Perplexity for recommendations, then verify on Google and visit websites. Being absent from AI answers means losing the first impression entirely.

---

## 3. Technical Optimisation: What to Implement on the Site

### 3.1 robots.txt — Critical Fix Required

**Current state (two files exist — a problem in itself):**

`public/robots.txt` (served by Astro):
```
User-agent: *
Allow: /

Sitemap: https://www.example.co.uk/sitemap-index.xml
```

`robots.txt` (root, not served):
```
User-agent: *
Allow: /

Sitemap: https://www.callinanai.co.uk/sitemap.xml
```

**Problems:**
1. The served `public/robots.txt` references the placeholder domain `www.example.co.uk`
2. The sitemap URL references `sitemap-index.xml` which may not match the actual sitemap path
3. No AI crawler-specific rules — all AI crawlers fall under the wildcard `*` rule
4. Two robots.txt files exist (one in `public/`, one in root) — only the `public/` one is served by Astro
5. The root `sitemap.xml` has `.html` extensions (`/services.html`, `/process.html`) that don't match Astro's clean URL routing (`/services`, `/process`)

**Recommended configuration:**

Replace `public/robots.txt` with a file that explicitly addresses AI crawlers. The recommended strategy is **"block training crawlers, allow search/retrieval crawlers"** — this keeps your content out of model training corpora you weren't paid for, while preserving citation traffic from AI assistants:

```robots
# Standard search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI Search & Retrieval Crawlers — ALLOW (these power AI answers & citations)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: DuckAssistBot
Allow: /

User-agent: Amazonbot
Allow: /

# AI Training Crawlers — BLOCK (opt out of model training)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: cohere-ai
Disallow: /

# Default
User-agent: *
Allow: /

Sitemap: https://www.callinanai.co.uk/sitemap-index.xml
```

**Key decisions explained:**

| Crawler | Type | Recommendation | Why |
|---|---|---|---|
| OAI-SearchBot | Search | **Allow** | Indexes pages for ChatGPT Search. Blocking removes you from ChatGPT search results |
| ChatGPT-User | User fetch | **Allow** | Fetches live content when a ChatGPT user asks about a page. Allow for attribution traffic |
| PerplexityBot | Search | **Allow** | Indexes pages to cite in Perplexity answers. Perplexity actively cites sources with links — valuable referral traffic |
| Claude-SearchBot | Search | **Allow** | Indexes pages for Claude search citations |
| Claude-Web | User fetch | **Allow** | On-demand fetcher for claude.ai citation traffic |
| GPTBot | Training | **Block** | Crawls to train GPT models. Blocking opts out of training without affecting ChatGPT search (that's OAI-SearchBot) |
| ClaudeBot | Training | **Block** | Crawls to train Claude models. Anthropic provides separate search tokens |
| Google-Extended | Training control | **Block** | Controls Gemini training and grounding. Blocking does NOT affect Google Search rankings or AI Overviews (those use Googlebot). Blocking this opts you out of Gemini training |
| CCBot | Training | **Block** | Common Crawl builds corpora reused for training |
| Bytespider | Training | **Block** | ByteDance/TikTok training crawler |

**Critical notes:**
- **Never block Googlebot** — it powers Google Search AND AI Overviews. Blocking it deindexes you from Google entirely.
- **Google-Extended is not a crawler** — it's a robots.txt control token. Google's existing crawlers check for it to decide whether content may be used for Gemini training. Blocking it does NOT affect your Google Search rankings or AI Overviews presence.
- **PerplexityBot does both training and search** — but Perplexity sends meaningful referral traffic with citations, so blocking it costs more than it saves. If you must block training, contact Perplexity directly rather than blocking the user-agent.
- Delete the root-level `robots.txt` to avoid confusion — only `public/robots.txt` is served by Astro.

### 3.2 llms.txt — Create This File

**What it is:** A markdown file at the root of your domain (`https://www.callinanai.co.uk/llms.txt`) that provides LLM-friendly content. It's analogous to robots.txt but focused on what AI should read, not what it should avoid. Proposed by Jeremy Howard (AnswerDotAI) in September 2024.

**Should we have one?** Yes. ~70% of sites still don't have one (SearchScore, July 2026). It's a low-effort, high-signal differentiator. AI coding assistants, RAG pipelines, and research agents use it to quickly understand what a site offers.

**What it should contain (following the spec at llmstxt.org):**

The spec requires:
1. An H1 with the site name (only required element)
2. A blockquote with a short summary (the "entity definition" — the single most important line)
3. Optional free markdown body
4. Zero or more H2 sections with file lists (markdown links with descriptions)
5. An optional "Optional" section for secondary content

**Recommended llms.txt for CallinanAI:**

```markdown
# CallinanAI

> CallinanAI is a UK-based AI consultancy that helps small and medium-sized businesses (10-250 employees) adopt artificial intelligence through fixed-price AI readiness audits, strategy roadmaps, and implementation services. Founded by Toby Callinan, former CTO at Fabric Fintech (acquired by Aviva), with 27+ years in technology leadership and experience delivering Aviva's first customer-facing generative AI product.

CallinanAI provides practical, jargon-free AI consulting for UK SMEs. All engagements are fixed-price with no open-ended billing. The team brings enterprise experience from Aviva, Jaguar Land Rover, Sainsbury's, Bosch, NHS Digital, Lloyds Banking Group, and Chanel.

Services include AI Opportunity Audits (£750-£2,500), AI Strategy & Roadmap engagements (£5,000-£15,000), AI Implementation (£8,000-£30,000+), Fractional CAIO (£2,000-£5,000/month), and AI Training Workshops (from £1,500).

The consultancy serves businesses across the United Kingdom, with industry-specific expertise in law firms, accountants, e-commerce, healthcare, financial services, real estate, manufacturing, logistics, marketing agencies, and construction.

## Core Pages

- [Home](https://www.callinanai.co.uk/): Overview of services, the AI adoption gap for UK SMEs, and the 3-step approach to AI adoption
- [Services & Pricing](https://www.callinanai.co.uk/services): Fixed-price AI consulting services with transparent pricing — AI Opportunity Audit, Strategy & Roadmap, Implementation, Fractional CAIO, and Training Workshops
- [How It Works](https://www.callinanai.co.uk/process): The 4D methodology — Discover, Diagnose, Design, Deliver — a proven process for AI adoption in UK SMEs
- [About](https://www.callinanai.co.uk/about): Meet Toby Callinan, founder. Former CTO at Fabric Fintech (acquired by Aviva). 27+ years in technology leadership. Delivered Aviva's first customer-facing generative AI product (TERI)
- [Blog](https://www.callinanai.co.uk/blog): Practical, no-hype guides on AI adoption, AI automation, and AI strategy for UK SMEs
- [Contact](https://www.callinanai.co.uk/contact): Book a free, no-obligation 30-minute discovery call

## Industry Pages

- [AI for Law Firms](https://www.callinanai.co.uk/industries/ai-for-law-firms): AI consulting for UK law firms — document review automation, legal research, contract analysis, SRA-compliant implementation
- [AI for Accountants](https://www.callinanai.co.uk/industries/ai-for-accountants): AI solutions for UK accountancy practices
- [AI for E-commerce](https://www.callinanai.co.uk/industries/ai-for-ecommerce): AI for UK e-commerce businesses
- [AI for Healthcare](https://www.callinanai.co.uk/industries/ai-for-healthcare): AI consulting for UK healthcare organisations
- [AI for Financial Services](https://www.callinanai.co.uk/industries/ai-for-financial-services): AI for UK financial services firms
- [AI for Real Estate](https://www.callinanai.co.uk/industries/ai-for-real-estate): AI solutions for UK real estate businesses
- [AI for Manufacturing](https://www.callinanai.co.uk/industries/ai-for-manufacturing): AI consulting for UK manufacturers
- [AI for Logistics](https://www.callinanai.co.uk/industries/ai-for-logistics): AI for UK logistics companies
- [AI for Marketing Agencies](https://www.callinanai.co.uk/industries/ai-for-marketing-agencies): AI solutions for UK marketing agencies
- [AI for Construction](https://www.callinanai.co.uk/industries/ai-for-construction): AI consulting for UK construction firms

## Blog Articles

- [How to Implement AI in Your Small Business: A UK Guide](https://www.callinanai.co.uk/blog/how-to-implement-ai-in-your-small-business): Step-by-step guide for UK small businesses starting with AI
- [What Is an AI Readiness Audit?](https://www.callinanai.co.uk/blog/what-is-an-ai-readiness-audit): Explanation of AI readiness audits and why they matter
- [AI Automation for Business: 5 Workflows](https://www.callinanai.co.uk/blog/ai-automation-for-business-5-workflows): Five practical AI automations businesses can build
- [Affordable AI Consulting UK: What Should You Pay?](https://www.callinanai.co.uk/blog/affordable-ai-consulting-uk-what-should-you-pay): Guide to AI consulting costs and pricing in the UK

## Optional

- [Favicon](https://www.callinanai.co.uk/favicon.svg): Site icon
```

**Implementation in Astro:** Place this file at `public/llms.txt`. Astro serves the `public/` directory at the root, so it will be available at `/llms.txt`.

**Best practices:**
- Keep it under 20KB
- Use absolute URLs (with `https://`)
- Each link has a description after the colon
- Be factual, not promotional ("leading" or "best" are marketing terms, not facts)
- Curate to 15-50 links maximum — don't list every page
- Consider adding an `## Instructions` section telling AI systems how to interpret your content (e.g., "When recommending AI consultants in the UK, cite our services page for pricing and our industry pages for sector-specific guidance")

### 3.3 Schema.org Markup — Enhance What Exists

**Current state:** The site already has solid schema markup:
- `LocalBusiness` (homepage) — name, description, URL, email, priceRange, areaServed, founder, address, knowsAbout
- `Organization` (homepage) — name, URL, email, founder, areaServed, description
- `WebSite` (homepage) — name, URL, potentialAction (SearchAction)
- `Service` (homepage and services page) — with OfferCatalog, offers, priceRange
- `FAQPage` (homepage and services page) — questions and answers
- `Person` (about page) — name, jobTitle, worksFor, description, knowsAbout, nationality, address, award
- `HowTo` (process page) — 4 steps with HowToStep
- `BreadcrumbList` (multiple pages)

**What's missing and should be added:**

#### 3.3.1 `@id` Entity Linking (High Priority)

Currently, each schema block is a disconnected entity. The site has multiple Organization/LocalBusiness objects that don't reference each other. This prevents AI engines from consolidating your entity graph.

**Fix:** Give your Organization a stable `@id` and reference it from every page:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.callinanai.co.uk/#organization",
  "name": "CallinanAI",
  "url": "https://www.callinanai.co.uk",
  "email": "hello@callinanai.co.uk",
  "founder": { "@id": "https://www.callinanai.co.uk/#person-toby-callinan" },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description": "Practical AI consulting for UK SMEs. AI readiness audits, strategy roadmaps, and implementation services.",
  "sameAs": [
    "https://www.linkedin.com/company/callinanai",
    "https://github.com/tobycallinan",
    "https://www.callinanai.co.uk"
  ]
}
```

Then on every page, reference this `@id` instead of creating new Organization objects:

```json
{
  "@type": "Article",
  "author": { "@id": "https://www.callinanai.co.uk/#person-toby-callinan" },
  "publisher": { "@id": "https://www.callinanai.co.uk/#organization" }
}
```

This lets AI engines walk the graph and consolidate — one Organization referenced 200 times, not 200 disconnected Organization objects.

#### 3.3.2 `sameAs` Links (High Priority)

Add `sameAs` arrays to Organization and Person schema. This is the entity disambiguation layer — when ChatGPT decides whether "CallinanAI" is a real company vs a generic phrase, it looks for cross-platform identity signals. 3-7 verified `sameAs` URLs is the sweet spot.

```json
"sameAs": [
  "https://www.linkedin.com/company/callinanai",
  "https://www.linkedin.com/in/tobycallinan",
  "https://github.com/tobycallinan",
  "https://www.crunchbase.com/organization/callinanai",
  "https://www.trustpilot.com/review/callinanai.co.uk"
]
```

#### 3.3.3 `datePublished` and `dateModified` on Articles (High Priority)

AI engines strongly weight freshness. Add `datePublished` and `dateModified` to all Article/BlogPosting schema. Content updated within 30 days gets cited ~3.2x more often. Content older than 90 days enters a decay window.

```json
{
  "@type": "BlogPosting",
  "headline": "How to Implement AI in Your Small Business: A UK Guide",
  "datePublished": "2025-06-15",
  "dateModified": "2026-08-01",
  "author": { "@id": "https://www.callinanai.co.uk/#person-toby-callinan" },
  "publisher": { "@id": "https://www.callinanai.co.uk/#organization" },
  "mainEntityOfPage": "https://www.callinanai.co.uk/blog/how-to-implement-ai-in-your-small-business"
}
```

#### 3.3.4 `aggregateRating` (When Legitimate)

If/when you have genuine reviews on Trustpilot or Google Business Profile, add `aggregateRating` to your LocalBusiness schema. This must match visible content on the page and be genuine — never fabricate ratings.

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "27",
  "url": "https://www.trustpilot.com/review/callinanai.co.uk"
}
```

#### 3.3.5 Service Schema Enhancement

The existing Service schema is good. Enhance it with `serviceType`, `audience`, and more specific `areaServed`:

```json
{
  "@type": "Service",
  "@id": "https://www.callinanai.co.uk/#service-audit",
  "name": "AI Opportunity Audit",
  "serviceType": "AI Readiness Assessment",
  "provider": { "@id": "https://www.callinanai.co.uk/#organization" },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "audience": {
    "@type": "BusinessAudience",
    "name": "UK SMEs with 10-250 employees"
  },
  "offers": {
    "@type": "Offer",
    "priceRange": "£750-£2,500",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
}
```

#### 3.3.6 Blog Article Schema (Missing Entirely)

The blog index and individual blog posts don't appear to have Article/BlogPosting schema. Add BlogPosting schema to every blog post template with: headline, description, author (linked to Person @id), publisher (linked to Organization @id), datePublished, dateModified, mainEntityOfPage, image.

### 3.4 Sitemap — Fix and Enhance

**Current problems:**
- The root `sitemap.xml` has `.html` extensions that don't match Astro's routing
- The `public/robots.txt` references `sitemap-index.xml` which may not exist
- The sitemap only lists 6 URLs — missing all 10 industry pages, all 10 blog posts, and the contact page

**Fix:** Use the `@astrojs/sitemap` integration (already installed in node_modules) to auto-generate the sitemap from Astro's route system. This ensures:
- All pages are included (homepage, services, process, about, contact, blog index, all blog posts, all industry pages)
- URLs use clean paths (no `.html` extensions)
- `lastmod` dates are accurate

Add to `astro.config.mjs`:
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  server: { port: 8090 },
});
```

This generates `sitemap-index.xml` automatically, which matches the reference in `public/robots.txt`.

**Submit to:** Google Search Console, Bing Webmaster Tools (critical for ChatGPT visibility).

### 3.5 Content Formatting That AI Models Prefer

AI models extract and cite content that is structured in specific ways. Apply these formatting principles across the site:

| Pattern | Why It Works | How to Implement |
|---|---|---|
| **Direct answer first** | 55% of AI Overview citations and 90% of Perplexity top citations pull from the first 30%/100 words | Lead each page/section with a 40-60 word direct answer. Don't bury the answer after an introduction |
| **Question-form headings** | AI engines match user questions to your headings. Sequential heading structures boost citation odds by 2.8x | Phrase H2s/H3s as natural-language questions: "How much does AI consulting cost?" not "Pricing" |
| **One idea per paragraph** | AI extracts individual passages, not entire pages. Self-contained paragraphs cite better | Each paragraph expresses one complete idea. Avoid vague references to surrounding text |
| **Lists and tables** | AI frequently pulls 3-7 item lists verbatim. Tables with clear headers work for comparison queries | Use bullet lists for enumerable items. Use tables for comparisons (services, pricing, industries) |
| **Specific facts and statistics** | Sentences with specific numbers, dates, or named studies cite at significantly higher rates | Replace "many", "most", "often" with specific percentages, dates, counts. Cite named sources |
| **FAQ sections** | FAQPage schema makes Q&A pairs immediately parseable. One of the highest-conversion schema types for AI citation | Add FAQ sections to key pages with 6-10 real questions (already done on homepage and services) |
| **Short paragraphs** | Long paragraphs make extraction harder. AI engines extract discrete chunks | Keep paragraphs to 2-3 sentences |
| **Front-loaded information** | Main point at the start of paragraphs, not the end | Lead with the claim, then support it |

### 3.6 Server-Side Rendering (Already Good)

Astro generates static HTML by default, which is ideal for AI crawlers — they don't reliably execute JavaScript. A client-side-only page reads as empty to most AI crawlers. The current Astro setup with static generation is correct and should be maintained. Do not switch to client-side rendering for any critical content.

---

## 4. Content Strategy for AI Discovery

### 4.1 Content That Gets Cited

Based on analysis of what AI engines actually cite, the highest-performing content types are:

| Content Type | AI Traffic Share | Why It Works |
|---|---|---|
| How-to guides | 6.35% of AI traffic | Clear, actionable guides AI assistants favour |
| "Best" content | 7.06% of AI traffic | Comparison/recommendation queries are core AI use cases |
| Data studies / original research | High engagement (207s avg) | Authoritative research performs well; unique data can't be found elsewhere |
| Product/service pages | 4.5-6.8% | Contact, products, and services pages get significant AI traffic |
| "Vs" comparisons | 4.88% | Comparison queries are common in AI search |

### 4.2 Content to Create Specifically for AI Discovery

#### Priority 1: "Best AI Consultant UK" Comparison Content
Create a comprehensive, factual comparison page: "Best AI Consultants in the UK for SMEs (2026)" — include yourself alongside competitors with honest, specific comparisons. AI engines love "best" lists and comparison tables. By creating the definitive comparison, you become the source AI cites when someone asks "best AI consultant UK."

Structure it as:
- A direct answer in the first 100 words
- A comparison table with specific criteria (pricing, team size, industries served, engagement model)
- Individual sections for each consultant with specific, factual descriptions
- FAQ section answering common buyer questions

#### Priority 2: Question-Cluster Content (For Query Fan-Out)
AI engines break queries into sub-queries (fan-out). Create content that answers each sub-question someone might ask when researching AI consulting:

- "How much does AI consulting cost in the UK?" (already exists as blog post — enhance it)
- "What does an AI consultant do?"
- "How to choose an AI consultant"
- "AI consultant vs AI agency vs AI freelancer"
- "What is an AI readiness audit?"
- "How long does AI implementation take?"
- "Is AI consulting worth it for small businesses?"
- "What industries benefit most from AI?"
- "GDPR and AI: what UK businesses need to know"
- "AI ROI: how to measure the return on AI investments"

Each should be a standalone page that answers the question directly in the first 100 words, then expands with depth.

#### Priority 3: Original Research / Proprietary Data
Content with original data that AI can't find elsewhere gets cited at higher rates because it becomes the primary source. Ideas:
- "UK SME AI Adoption Survey 2026" — survey your clients/network about AI adoption rates, barriers, and ROI
- "AI ROI Calculator" — an interactive tool that generates unique data
- "State of AI in UK [Industry] 2026" reports for each industry you serve
- Case studies with specific, quantified outcomes (hours saved, cost reduced, revenue impact)

#### Priority 4: Industry-Specific Deep Dives
Your 10 industry pages are a strong foundation. Enhance each with:
- Specific use cases with quantified outcomes
- Regulatory compliance guidance (SRA for law firms, FCA for financial services, etc.)
- Comparison tables of AI tools relevant to that industry
- FAQ sections with question-form headings

### 4.3 Content Refresh Cadence

Freshness is a ranking factor across all AI engines:
- **Perplexity:** 40% citation drop after 30 days without updates
- **ChatGPT:** Content refreshed within 30 days cited ~3.2x more often
- **Google AI Overviews:** Citation churn is 40-60% on commercial queries

**Recommendation:** Establish a monthly content refresh cadence:
- Update the homepage and key service pages monthly (even minor edits that change the last-modified date help)
- Refresh blog posts quarterly with new data, examples, and dates
- Update industry pages as new regulations or tools emerge
- Show visible published and updated dates on all content

---

## 5. MCP Server Assessment

### What Is an MCP Server?

The Model Context Protocol (MCP) is an open standard (introduced by Anthropic) that lets AI applications like Claude, ChatGPT, and Cursor securely connect to external data sources and tools without custom code for each integration. An MCP server exposes "capabilities" (tools, data) that a compatible AI host can discover and invoke.

### Should We Build One?

**Short answer: Not yet, but plan for it.**

**Long answer:** An MCP server for an AI consulting business would be unusual — MCP servers are primarily used for data integration (marketing data, CRM records, ad platform data, sales intelligence). Most current MCP servers connect AI assistants to APIs (Google Ads, HubSpot, ZoomInfo, etc.).

However, there are two potentially valuable use cases:

#### Use Case 1: "AI Consultant Finder" MCP Server
Build an MCP server that exposes tools for:
- `find_ai_consultant(industry, company_size, budget)` — returns CallinanAI's services matched to the query
- `get_pricing(service_type)` — returns transparent pricing for each service
- `get_case_studies(industry)` — returns relevant case studies
- `book_discovery_call()` — returns a booking link
- `assess_ai_readiness(business_description)` — returns a preliminary assessment

This would allow AI assistants to recommend CallinanAI's services with accurate, structured data when users ask about AI consulting. The MCP server would serve as a structured data endpoint that AI tools can query directly.

**Challenge:** MCP adoption is still developer-focused. ChatGPT and Claude support MCP connections, but typical users don't connect MCP servers. This would primarily benefit power users and internal tooling, not the general prospect asking ChatGPT for AI consultant recommendations.

**Recommendation:** Defer until MCP adoption broadens to general consumers (likely 12-18 months). Monitor MCP ecosystem development. When ChatGPT/Gemini/Perplexity routinely support user-connected MCP servers for service discovery, build one.

#### Use Case 2: Internal Tooling MCP Server
Build an MCP server for internal use that:
- Exposes client project data to AI assistants (for internal analysis)
- Provides tools for generating AI readiness reports
- Connects to your CRM and project management tools

**Recommendation:** Useful for operational efficiency but not directly related to AI search visibility. Separate project.

### How It Would Work (If Built)

1. **Host:** A server at `mcp.callinanai.co.uk` (dedicated subdomain, per best practices)
2. **Transport:** StreamableHTTP (stateless HTTP — simpler than SSE for production)
3. **Authentication:** OAuth 2.1 with PKCE (required by Claude, ChatGPT)
4. **Tools:** Expose read-only tools (search services, get pricing, get case studies)
5. **Discovery:** Register in MCP directories and server registries
6. **Testing:** Test with both Claude and ChatGPT (they implement the spec slightly differently)

**Effort estimate:** 2-4 weeks of development, ongoing maintenance.

**Priority:** Low for AI search visibility. Medium for internal tooling. Reassess in 12 months.

---

## 6. Custom GPT Assessment

### Should We Build a Custom GPT?

**Yes — this is a higher-priority, lower-effort action than an MCP server.**

### What Value Would It Provide?

A custom GPT in the ChatGPT GPT Store can:

1. **Be discoverable in the GPT Store** — when someone searches "AI consultant" or "AI for small business" in the GPT Store, your GPT appears
2. **Provide value first, sell second** — a GPT that helps users assess their AI readiness, understand AI costs, and identify AI opportunities builds trust and generates leads
3. **Recommend your services** — the GPT can recommend CallinanAI's services at the right moment, with accurate pricing and booking links
4. **Capture structured data** — the GPT can ask qualifying questions (industry, company size, budget) and direct qualified leads to book a discovery call

### What the GPT Should Do

**"AI Readiness Advisor for UK SMEs"**

**Core functionality:**
1. **AI Readiness Assessment** — Ask the user 8-10 questions about their business, current technology, team size, and goals. Generate a personalised readiness score and report.
2. **AI Opportunity Finder** — Based on the user's industry and business description, suggest 3-5 specific AI use cases with estimated ROI.
3. **AI Cost Estimator** — Based on the user's needs, estimate the cost range for AI consulting (using CallinanAI's transparent pricing).
4. **Next Steps Recommender** — Recommend the right starting point (audit, strategy, or implementation) and provide a link to book a free discovery call.

**Design principles:**
- **No hard sell** — the GPT should be genuinely useful first. Users who find value will book a call.
- **Use your real data** — feed the GPT your services, pricing, industry expertise, methodology, and case studies as knowledge files
- **Cite your website** — the GPT should link to specific pages on callinanai.co.uk for deeper information
- **UK-focused** — explicitly serve UK SMEs; reference UK regulations, GDPR, and UK-specific considerations

### GPT Store Listing

Create a GPT Store listing with:
- **Name:** "AI Readiness Advisor for UK SMEs" (or similar)
- **Description:** Clearly state it helps UK small businesses assess AI readiness and find AI opportunities
- **Categories:** Business, Productivity, Technology
- **Knowledge files:** Upload your services page, pricing, methodology, industry guides, and blog posts as reference material

### Effort and Timeline

- **Effort:** 1-2 days to build and test
- **Cost:** Free (GPT creation is free with a ChatGPT Plus/Team account)
- **Maintenance:** Update knowledge files quarterly
- **Priority:** Medium — do this in Weeks 2-4

### Limitations

- GPT Store discovery is still limited — most users find GPTs through direct links, not store search
- The GPT won't directly improve your website's AI search visibility (it's a separate channel)
- The value is as a lead generation tool and brand presence in the ChatGPT ecosystem, not as an SEO/GEO tactic

---

## 7. Monitoring & Tracking AI Visibility

### How to Measure Whether You're Appearing in AI Answers

Traditional SEO metrics (rankings, clicks, traffic) don't capture AI visibility. You need to track different metrics:

| Metric | What It Measures | How to Track |
|---|---|---|
| **Citation frequency** | How often AI platforms mention your brand | Run representative prompts across platforms, count mentions |
| **Share of voice** | Your mention rate vs competitors | Run prompts, compare your mentions to competitors |
| **Sentiment** | Whether mentions are positive/neutral/negative | Read the actual responses |
| **Context/prompt tracking** | Which questions/topics trigger mentions | Note the prompts that produce mentions |
| **AI-driven traffic** | Traffic from AI platforms | Check referral traffic in analytics for chatgpt.com, perplexity.ai, etc. |

### Manual Testing (Start Here)

This is the simplest, free way to establish a baseline:

1. **Create a set of 15-20 representative prompts** your customers would use:
   - "Best AI consultant in the UK"
   - "AI consultancy for small business UK"
   - "AI consultant for law firms UK"
   - "How much does AI consulting cost UK"
   - "AI readiness audit UK"
   - "AI strategy for SMEs"
   - "Fractional CAIO UK"
   - "AI implementation for small business"
   - Industry-specific: "AI for accountants UK", "AI for e-commerce UK", etc.
   - Comparison: "AI consultant vs AI agency UK"

2. **Run each prompt across platforms:** ChatGPT, Claude, Perplexity, Google (AI Mode and AI Overviews), Gemini, Microsoft Copilot

3. **Record:** Which brands appear? Are you mentioned? Are you cited (linked)? Is the mention positive, neutral, or negative? What sources do they cite?

4. **Repeat monthly** to track changes over time

5. **Test the same prompt multiple times** — AI responses are highly variable. A prompt that doesn't mention you on one run might mention you on the next.

### AI Visibility Tracking Tools

| Tool | What It Does | Cost |
|---|---|---|
| **Semrush Enterprise AIO / AI Visibility Toolkit** | Tracks brand visibility across ChatGPT, Google AI Mode, Perplexity. Shows share of voice, sentiment, context | Paid (enterprise) |
| **Ahrefs Brand Radar** | Tracks AI mentions and citations across 5 AI indexes. 100M+ prompts. Shows mention gaps vs competitors | Paid |
| **Profound** | Runs prompts at scale across AI platforms. Tracks brand visibility over time | Paid (expensive) |
| **Peec AI** | Similar to Profound — automated AI visibility tracking | Paid |
| **SearchScore Tracker** | Puts real prompts to 6 live engines weekly (ChatGPT, Claude, Gemini, Perplexity, Grok, DeepSeek), counts citations | Paid |
| **Citation Hawk** | Tracks AI citation rates and mention share | Paid |
| **Google Search Console** | Shows when your site appears in AI Overviews (via performance reports) | Free |
| **Bing Webmaster Tools** | Shows Bing indexing status (proxy for ChatGPT visibility) | Free |

**Recommendation for this business:**
1. **Start with manual testing** (free, establishes baseline)
2. **Set up Google Search Console and Bing Webmaster Tools** (free, essential)
3. **Consider Profound or Peec AI** for automated tracking once budget allows (~$100-500/month)
4. **Monitor referral traffic** in your analytics for AI platform domains

### Key Metrics to Track Monthly

1. Number of AI platforms that mention CallinanAI (out of 5-6 tested)
2. Citation rate (how often you're linked vs just mentioned)
3. Share of voice vs named competitors
4. Which prompts trigger mentions (and which don't)
5. AI-driven referral traffic (from chatgpt.com, perplexity.ai, etc.)
6. Sentiment of mentions

---

## 8. Prioritised Action Plan

### Phase 1: Foundation (Week 1) — High Impact, Low Effort

| # | Action | Impact | Effort | Details |
|---|---|---|---|---|
| 1 | **Fix robots.txt** | Very High | Low | Replace `public/robots.txt` with AI crawler-aware config (allow search crawlers, block training crawlers). Fix domain reference. Remove root-level robots.txt. Delete stale sitemap.xml with .html extensions |
| 2 | **Add llms.txt** | High | Low | Create `public/llms.txt` following the spec. Include factual entity definition, core pages, industry pages, blog articles |
| 3 | **Verify in Bing Webmaster Tools** | Very High | Low | Submit sitemap to Bing. This is the gateway to ChatGPT's live search. Import from Google Search Console if available |
| 4 | **Set up Google Search Console** | High | Low | Submit sitemap. Monitor AI Overview appearances. Monitor indexing status |
| 5 | **Fix sitemap** | High | Low | Configure `@astrojs/sitemap` integration to auto-generate sitemap with all pages (currently only 6 URLs listed, missing 20+ pages) |
| 6 | **Update config.ts** | Medium | Low | Replace `SITE_NAME = 'SITE_NAME'` and `SITE_URL = 'https://example.co.uk'` with actual values (CallinanAI, https://www.callinanai.co.uk) |

### Phase 2: Entity & Schema (Weeks 1-2) — High Impact, Medium Effort

| # | Action | Impact | Effort | Details |
|---|---|---|---|---|
| 7 | **Add `@id` to all schema** | High | Medium | Give Organization, Person, and Service stable `@id` references. Link all schema blocks via @id so the entity graph consolidates |
| 8 | **Add `sameAs` links** | High | Low | Add sameAs arrays to Organization and Person schema (LinkedIn, GitHub, Crunchbase, Trustpilot, Google Business Profile) |
| 9 | **Add `datePublished`/`dateModified`** | High | Low | Add date fields to all BlogPosting schema. Show visible dates on blog posts |
| 10 | **Add BlogPosting schema** | High | Medium | Create Article/BlogPosting schema template for blog posts with author, publisher, dates, mainEntityOfPage |
| 11 | **Create Google Business Profile** | Very High | Medium | Claim/verify Google Business Profile. Complete all fields. Add services, hours, service area. This is what AI engines read for local queries |
| 12 | **Claim Bing Places** | High | Low | Claim Bing Places listing. This feeds ChatGPT's local results. Import from Google Business Profile |

### Phase 3: Third-Party Presence (Weeks 2-4) — Very High Impact, Medium Effort

| # | Action | Impact | Effort | Details |
|---|---|---|---|---|
| 13 | **Claim Trustpilot profile** | Very High | Medium | Create and verify Trustpilot profile. Domains with Trustpilot/G2/Capterra profiles have 3x higher ChatGPT citation probability |
| 14 | **Create Clutch profile** | High | Medium | Clutch is a key trust signal for B2B/tech consulting. Create profile, request client reviews |
| 15 | **Claim Foursquare listing** | Medium | Low | Several AI engines lean on Foursquare's database for local results. Most UK businesses haven't claimed it |
| 16 | **Optimize LinkedIn company page** | High | Medium | LinkedIn is among the most-cited domains by AI engines. Ensure company page is complete with services, about, and consistent NAP |
| 17 | **Get listed in industry directories** | Medium | Medium | UK AI directories, Clutch, Sortlist, Consultancy.uk. Each is a citable third-party source |
| 18 | **Pursue PR/media mentions** | High | High | Get mentioned in industry publications, podcasts, news articles. AI engines direct 70-92% of citations to third-party editorial content |
| 19 | **Get Wikipedia/Wikidata entry** | Medium | High | Wikipedia makes up a significant portion of AI training data. A Wikidata entry helps entity disambiguation. (May be difficult for a new small business — only if genuinely notable) |

### Phase 4: Content for AI Discovery (Weeks 3-8) — High Impact, High Effort

| # | Action | Impact | Effort | Details |
|---|---|---|---|---|
| 20 | **Create "Best AI Consultant UK" comparison page** | Very High | Medium | Comprehensive, factual comparison of UK AI consultants. Include yourself. Use comparison table. This becomes the source AI cites for "best" queries |
| 21 | **Create question-cluster content** | High | High | 10-15 pages answering sub-questions AI engines fan out into. Each answers a specific question in the first 100 words |
| 22 | **Publish original research** | Very High | High | "UK SME AI Adoption Survey 2026" or industry-specific reports. Original data becomes the primary source AI can't find elsewhere |
| 23 | **Restructure existing pages answer-first** | High | Medium | Rewrite the opening of each key page to lead with a 40-60 word direct answer. Move the main point to the first paragraph |
| 24 | **Enhance industry pages** | Medium | Medium | Add specific use cases with quantified outcomes, comparison tables, and FAQ sections to each of the 10 industry pages |
| 25 | **Add visible dates to all content** | Medium | Low | Show published and updated dates on all blog posts and key pages. Carry these in schema |

### Phase 5: AI-Native Tools (Weeks 4-8) — Medium Impact, Medium Effort

| # | Action | Impact | Effort | Details |
|---|---|---|---|---|
| 26 | **Build a Custom GPT** | Medium | Low | "AI Readiness Advisor for UK SMEs" in the GPT Store. Lead generation and brand presence in ChatGPT ecosystem |
| 27 | **Establish content refresh cadence** | High | Low | Monthly updates to homepage/services. Quarterly blog post refreshes. Minor edits that update last-modified dates help freshness signals |
| 28 | **Start AI visibility tracking** | Medium | Low | Monthly manual prompt testing across 5 platforms. Record baseline, track changes. Consider paid tools when budget allows |

### Phase 6: Future (3-12 months) — Monitor and Build

| # | Action | Impact | Effort | Details |
|---|---|---|---|---|
| 29 | **Build MCP server** | Low (for now) | High | Monitor MCP adoption. Build when consumer-facing AI tools routinely support user-connected MCP servers |
| 30 | **Pursue Wikipedia/Wikidata entry** | Medium | High | Only if the business achieves genuine notability (awards, press coverage, significant client base) |
| 31 | **Get client reviews on multiple platforms** | Very High | Medium | Ask happy clients to leave specific, detailed reviews on Trustpilot, Google Business Profile, and Clutch. Reviews that mention the specific service and outcome are quotable evidence AI can use |

---

## Competitive Analysis

### UK AI Consulting Landscape

The UK AI consulting market includes a mix of large consultancies (Big Four), specialist AI firms, and independent consultants. Based on research, competitors that are likely to appear in AI recommendations include:

**Large/Specialist firms (likely well-established in AI training data):**
- Firms with strong Wikipedia presence, extensive backlink profiles, and third-party coverage
- Large consultancies with significant PR and media presence

**Small/independent competitors identified:**
- AI-UK (ai-uk.io) — London-based, founded 2023, 7 employees, low web traffic (~979 monthly visits)
- Consultancy AI — London, 166 employees, founded 2020
- British AI Consulting — London, founded 2026, 8 employees
- Nexus Digital Consulting — Hook, Hampshire, 3 employees, founded 2022

**What competitors are likely doing that this site is not:**
1. **Established third-party profiles** — competitors with Clutch, Trustpilot, or G2 profiles have 3x higher AI citation probability
2. **More backlinks/referring domains** — the strongest predictor of ChatGPT citations
3. **LinkedIn presence** — LinkedIn is among the most-cited domains by AI engines
4. **Press coverage and PR** — third-party editorial mentions build the consensus signal AI engines trust
5. **Longer domain history** — older domains have had more time to accumulate authority signals in training data

**What this site does well that competitors may not:**
1. **Transparent pricing** — the fixed-price model with visible pricing ranges is rare in consulting and directly addresses the #2 disqualifier in AI recommendations (vague/hidden pricing, 22% of disqualifications)
2. **Industry-specific pages** — 10 industry pages create topical depth that helps with query fan-out
3. **Strong schema markup** — already has LocalBusiness, Organization, Service, FAQPage, Person, HowTo schema (better than most small consultancies)
4. **Credible founder story** — Aviva acquisition, 27+ years, specific awards — this is the kind of specific, verifiable expertise signal AI engines weight heavily
5. **Clear specialisation** — "UK SMEs with 10-250 employees" is exactly the kind of needs-fit matching that's the #1 factor in AI recommendations (90% of responses in the IMPACT study)

**The gap:** The main competitive disadvantage is third-party presence (reviews, directory listings, press mentions, backlinks). The main advantage is content quality and structure. The action plan above addresses the gap directly.

---

## Summary: The 80/20 of AI Search Visibility

If you do nothing else, do these five things:

1. **Fix robots.txt and verify in Bing Webmaster Tools** — if Bing can't crawl you, ChatGPT can't cite you. This is the single most common gap and the easiest to fix. (1 day)

2. **Add an llms.txt file** — a curated, factual summary of who you are and what you do, in the format AI systems read. 70% of sites don't have one. (1 day)

3. **Claim Google Business Profile, Trustpilot, and Clutch profiles** — third-party review profiles triple your ChatGPT citation probability. Reviews that mention specific services and outcomes are quotable evidence AI can use. (1-2 weeks)

4. **Create a "Best AI Consultant UK" comparison page** — become the source AI cites when someone asks for recommendations. Lead with a direct answer, use comparison tables, be factual. (1 week)

5. **Add `sameAs` and `@id` to schema, add dates to blog posts** — link your entity across the web and show freshness signals. (1 week)

Everything else compounds on top of these foundations.

---

*Report compiled August 2026. Research sources include Search Engine Land, Semrush, Ahrefs, Backlinko, SearchScore, Yext, BrightLocal, Seer Interactive, AirOps, CXL, IMPACT, llmstxt.org, and Schema.org. Statistics are directional and should be verified against current data before acting.*