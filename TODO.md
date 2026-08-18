# Site TODO List

Items that need doing but can't be completed yet (require live domain, real clients, or external accounts).

## Pre-Launch (do before going live)

- [ ] **Set SITE_NAME in src/config.ts** - replace "SITE_NAME" placeholder with actual business name
- [ ] **Set SITE_URL in src/config.ts** - replace "example.co.uk" with actual domain
- [ ] **Set CONTACT_EMAIL in src/config.ts** - replace "hello@example.co.uk" with real email
- [ ] **Update llms.txt** - replace SITE_NAME and example.co.uk with real values
- [ ] **Update robots.txt** - replace example.co.uk sitemap URL with real domain
- [ ] **Add og:image** - create 1200x630px branded social sharing image, add og:image meta tag to all pages
- [ ] **Add site.webmanifest** - PWA manifest file for mobile bookmarking
- [ ] **Wire up contact form email** - the API endpoint at /api/contact currently logs to console. Connect to real email service (Resend, Postmark, or SMTP)
- [ ] **Wire up blog newsletter form** - the newsletter signup on blog pages has no handler. Connect to email service (Mailchimp, Buttondown, etc.)
- [ ] **Add favicon** - create proper favicon set (16x16, 32x32, 180x180 for Apple Touch Icon)
- [ ] **Add Google Analytics or Plausible** - no analytics tracking currently installed

## Post-Launch (do after site is live)

- [ ] **Verify in Google Search Console** - submit sitemap, claim domain
- [ ] **Verify in Bing Webmaster Tools** - submit sitemap, claim domain. CRITICAL: ChatGPT uses Bing's index (87% correlation). If Bing can't find you, ChatGPT can't cite you.
- [ ] **Claim Google Business Profile** - local SEO + AI discovery. Domains with review profiles have 3x higher ChatGPT citation probability.
- [ ] **Claim Bing Places** - same as above but for Bing/ChatGPT
- [ ] **Create Trustpilot profile** - third-party reviews triple AI citation probability. Ask clients to leave specific, detailed reviews mentioning services and outcomes.
- [ ] **Create Clutch profile** - B2B review platform. AI engines cite Clutch listings for "best AI consultant" queries.
- [ ] **Create Foursquare listing** - additional local citation signal
- [ ] **Optimise LinkedIn company page** - LinkedIn is among the most-cited domains by AI engines. Ensure company page has full description, services, and links to website.
- [ ] **Build Custom GPT** - "AI Readiness Advisor for UK SMEs" in the GPT Store. Lead generation + presence in ChatGPT ecosystem. Ask users about their business, assess AI readiness, recommend next steps with link to book a discovery call.
- [ ] **Get client testimonials** - replace the removed placeholder testimonials with real client quotes. Even one is better than three fake ones.
- [ ] **Write real case studies** - 3 case studies with Challenge/Solution/Results format, real metrics, anonymised client names. ~1,000 words each.
- [ ] **Add team/network profiles** - brief profiles of the network of specialists beyond the founder
- [ ] **Set up AI visibility tracking** - monthly manual prompt testing across ChatGPT, Gemini, Perplexity, Claude, Copilot. Record baseline, track changes. Log results in a spreadsheet.
- [ ] **Create video content** - 2-minute "Meet Toby" video for About page
- [ ] **Pursue press coverage** - industry publications, local business media, podcasts. Third-party editorial mentions build the consensus signal AI engines trust.
- [ ] **Consider Wikipedia/Wikidata entry** - only if business achieves genuine notability (awards, press, significant client base)

## Future (3-12 months)

- [ ] **Build MCP server** - Monitor MCP adoption. Build when consumer-facing AI tools routinely support user-connected MCP servers (likely 12-18 months). Would expose services, pricing, and booking capability to AI assistants.
- [ ] **Publish original research** - "UK SME AI Adoption Survey 2026" or industry-specific reports. Original data becomes the primary source AI can't find elsewhere.
- [ ] **Create question-cluster content** - 10-15 pages answering sub-questions AI engines fan out into (e.g., "How much does an AI consultant cost UK?", "What does an AI readiness audit include?", "AI consultant vs in-house hire")
- [ ] **Add Calendly/Cal.com self-scheduling** - let visitors book discovery calls directly without filling a form
- [ ] **Add ROI calculator** - interactive tool that estimates AI savings based on business size and industry
- [ ] **Add exit-intent email capture** - offer "AI Readiness Checklist" PDF as lead magnet