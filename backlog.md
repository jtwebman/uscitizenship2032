# BACKLOG: USCitizenship2032.com

## Legend
- **P0** = Must have before launch
- **P1** = Should have soon after launch
- **P2** = Important but can wait
- **P3** = Nice to have / future

---

## SITE BUILD (P0) - COMPLETE

- [x] Initialize Astro 6 project with Tailwind CSS 4
- [x] Design system: Teal + Constitutional Gold palette, researched for non-partisan civic advocacy
- [x] Home page: hero, 3-step explainer, stats bar, partisan bridge, "Does NOT" section, CTA
- [x] Amendment text page: full text of Sections 1-4 with plain-English explanations
- [x] International comparison page: 30-country table with sourced laws and color-coded system types
- [x] "What This Does NOT Do" section on home page
- [x] "Built for Both Sides" section on home page (partisan bridge)
- [x] "Why This Matters" page: the problem, why an amendment, what both sides get
- [x] About page: JT's story, what the project is and is not, next steps
- [x] Mobile-responsive design (verified with Playwright screenshots)
- [x] Cloudflare Workers adapter configured (Astro 6 + wrangler)
- [x] Basic SEO: meta tags, Open Graph, Twitter cards on all pages
- [x] Simple language pass: 4th-grade reading level, no em dashes, simple punctuation
- [x] Font size bump to 18px base for readability
- [x] Deployed to Cloudflare Workers
- [x] Custom domain setup (uscitizenship2032.com)
- [x] Custom favicon: gold "28" on charcoal (SVG + PNG 16/32 + Apple touch icon)
- [x] Social share image (og:image 1200x630)
- [x] Sitemap integration (@astrojs/sitemap)
- [x] robots.txt and ai.txt (allow all crawlers and AI)
- [x] Canonical URLs and JSON-LD structured data

## GITHUB & OPEN SOURCE (P0) - COMPLETE

- [x] Git repo initialized with jtwebman@gmail.com
- [x] GitHub remote added (jtwebman/uscitizenship2032)
- [x] README.md with project overview, tech stack, local dev instructions
- [x] LICENSE: dual MIT (code) + CC BY-SA 4.0 (content)
- [x] CONTRIBUTING.md with guidelines, simple language rules, code of conduct
- [x] Issue templates: Amendment Feedback, Legal Analysis, Bug Report, Question
- [x] Pull request template with checklist
- [x] Initial commit and push to GitHub
- [ ] Set up GitHub repo description and topics

## CI/CD (P0) - COMPLETE

- [x] Biome linter with recommended + a11y rules
- [x] npm-package-json-lint enforcing exact dependency versions
- [x] .npmrc with save-exact=true
- [x] GitHub Actions CI: lint + build on PRs to main
- [x] GitHub Actions CD: lint + build + deploy on push to main
- [x] Cloudflare API token and account ID secrets configured

## REFERENCE DATA - COMPLETE

- [x] 30-country citizenship law research with sourced links
- [x] global-citizenship-laws.md reference file
- [x] design-system.md with color palette, typography, and usage rules
- [x] plan.md updated with all decisions from planning session

---

## REMAINING WORK

### EMAIL & SUPPORTERS (P0)

- [ ] Email capture form (Cloudflare Workers or simple third-party like Buttondown/ConvertKit)
- [ ] Thank-you / confirmation page
- [ ] Privacy policy (even minimal, needed if collecting emails)
- [ ] First welcome email draft: what this is, what comes next, how to help

### INTERACTIVE TOOLS (P1)

- [ ] `StatusChecker.tsx` — "What would this mean for my family?" input: birth year + parental status, output: visual roadmap
- [ ] `VestingProgress.tsx` — animated bar showing 10-year path from interim status to citizenship
- [ ] `GlobalMap.astro` — visual comparison of citizenship models worldwide
- [ ] Share buttons on tool results (pre-written tweet/post with the user's result)

### CONTENT & MESSAGING (P1)

- [ ] Economic data research: birth tourism volume, hospital cost data, benefit draw estimates
- [ ] One-page PDF / press kit for media outreach
- [ ] FAQ page addressing the most obvious objections from both sides
- [ ] "Stories" section: archetype profiles (e.g., "Maria, born in Houston...") showing who benefits
- [ ] Blog or updates section for momentum signals

### LEGAL & AMENDMENT TEXT (P1)

- [ ] Identify 1-2 constitutional law professors willing to do an initial review
- [ ] Resolve "continuous residency" edge cases:
  - [ ] Military families stationed abroad
  - [ ] Study abroad or family emergencies
  - [ ] Foster care / state custody situations
  - [ ] Split-custody across borders
- [ ] Define what "Registered Resident" status means operationally (rights, restrictions, documentation)
- [ ] Research: does this require repealing/modifying the 14th Amendment, or can it layer on top?
- [x] Draft a "plain English" version of each section for the site

### NAMING & LANGUAGE (P2)

- [ ] Crowdsource alternatives to "Registered Resident" via GitHub discussion or public poll
- [ ] Test messaging with small focus groups or online polls (both left-leaning and right-leaning)
- [ ] Develop a consistent vocabulary guide (what we call things and why)

### OPEN SOURCE & COMMUNITY (P2)

- [x] GitHub repo set up with templates and contributing guide
- [ ] Define governance: who merges changes? Advisory board? Community vote?

### OUTREACH & GROWTH (P2)

- [ ] Identify 10-20 journalists/commentators who cover immigration from a centrist or "third way" angle
- [ ] Draft a cold outreach email template
- [ ] Identify potential allies: orgs, academics, former officials who have called for reform
- [ ] Social media presence: at minimum a handle on X/Twitter
- [ ] Reddit strategy: r/law, r/immigration, r/NeutralPolitics, r/moderatepolitics

### LEGAL STRUCTURE (P3)

- [ ] Research 501(c)(4) formation if traction warrants it
- [ ] Consult on whether accepting donations requires formal org structure
- [ ] Terms of use for the site

### HARD QUESTIONS TO ANSWER (Ongoing)

These do not have a priority. They need to be answered as they come up, and the answers will shape the project:

- [ ] Does this proposal require a new amendment, or could it be achieved through legislation + a Supreme Court reinterpretation of the 14th?
- [ ] How do you handle children born to undocumented parents who have been in the U.S. for 20+ years but have no legal status? Are those parents "invested" in America?
- [ ] What happens to the interim-status child if the family is deported before the 10-year mark?
- [ ] How does this interact with existing DACA/TPS protections?
- [ ] Is there a path to get a single state legislature to pass a "resolution of support" as a proof of concept?
