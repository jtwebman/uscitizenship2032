# PROJECT MASTER SPEC: USCitizenship2032.com
**Version:** 1.1.0
**Lead:** JT Turner
**Status:** Strategic Blueprint for 2032 Sunrise Implementation

---

## 1. MISSION & EXECUTIVE SUMMARY
The goal of `USCitizenship2032.com` is to modernize U.S. birthright citizenship by transitioning from an unconditional "soil-only" model to a "qualified-plus-vesting" model.

This proposal directly addresses the 2026 legal volatility (e.g., *Barbara v. Trump*) by providing a stable, data-driven framework that balances national security with human rights and fairness.

**The Core Brand:** A pragmatic third way — built by an American frustrated with the all-or-nothing shouting match. Not left, not right, just forward.

**Audience Strategy (Phased):**
1. **Launch:** Media & policy influencers (fresh angle, strong soundbites)
2. **Growth:** Grassroots voters (simple, emotional, shareable)
3. **Depth:** Policy wonks & legal community (precision, data, open-source amendment text)

**Org Model:** Personal project. No formal org structure yet — move fast, add structure if traction warrants it.

---

## 2. THE CONSTITUTIONAL SOURCE CODE (28th Amendment)

### Section 1: The New Root Logic
Citizenship at birth is conferred only to persons born within the United States who have at least one parent who is a **U.S. Citizen** or a **Lawful Permanent Resident (LPR)** at the time of birth.

### Section 2: The "Vesting" Protocol (Fairness & Integration)
Children born in the U.S. to non-qualifying parents are granted a protected interim status (working title: **"Registered Resident"** — final naming to be crowdsourced during public review). This status "auto-upgrades" to full Citizenship upon:
* **The 10-Year Trigger:** Completion of 10 years of continuous U.S. residency (verified via school/tax records). *(Edge cases to resolve: military families, study abroad, family emergencies — see backlog.)*
* **The Derivative Trigger:** A parent becomes a citizen while the child is under age 18.

### Section 3: The "Zero-Statelessness" Catch
The United States shall grant citizenship to any person born within its territory who would otherwise be stateless. (International Compliance Error-Handling).

### Section 4: The Legacy Shield (Versioning)
**Effective Date: January 1, 2032.** All persons born prior to this date are "Legacy v1.0 Citizens." Their status is permanent, irrevocable, and unaffected by this amendment.

---

## 3. INTERNATIONAL BENCHMARKING
The site must prove that the U.S. is joining the standard used by serious, sovereign nations — not drifting from it.

**Full 30-country reference with sourced laws:** See [`global-citizenship-laws.md`](global-citizenship-laws.md)

**The headline stat:** Of 30 countries surveyed, only 3 (Canada, Brazil, Chile) grant unconditional birthright citizenship. The U.S. is an extreme outlier among developed nations.

| System Type | Count | Examples |
| :--- | :--- | :--- |
| Unconditional Jus Soli | 3 of 30 | Canada, Brazil, Chile |
| Qualified Jus Soli | 11 of 30 | UK, Australia, Germany, France, Ireland, New Zealand, India |
| Jus Sanguinis (descent only) | 16 of 30 | Japan, Switzerland, all Nordics, Netherlands, Italy, South Korea |
| **U.S. v2.0 (Proposed)** | — | **Qualified jus soli + 10-year vesting path** |

**Key messaging angles:**
- Australia's 10-year auto-upgrade is nearly identical to our proposal — strongest direct comparison.
- Every Nordic country (the progressive gold standard) uses pure descent-based citizenship. Zero birthright soil.
- Ireland and India both moved AWAY from unconditional birthright in recent decades — precedent for the U.S.
- Germany only added any jus soli in 2000 — mature democracies evolve.

---

## 4. THE PARTISAN BRIDGE (Messaging Strategy)

### For the Right (Conservative/Security)
* **Sovereignty:** America decides who is American — not a geographic accident. Aligns with Switzerland, Japan, and the UK.
* **Ends "Birth Tourism":** Closes the loophole where tourists can gain a lifetime of benefits via a short visit. *(Need real economic data: hospital costs, benefit draw estimates, birth tourism volume.)*
* **Allegiance-Based:** Ensures children are born into families already invested in the American system (LPRs/Citizens).
* **Enforcement Teeth:** Clear verification at the point of birth via existing USCIS/SSN systems. *(Detail the "how" — the right wants to know the mechanism.)*

### For the Left (Progressive/Civil Rights)
* **The 10-Year Guarantee / Dreamer Shield:** No child who grows up in an American school will ever be deported. This essentially *constitutionalizes* the Dream Act for the next generation — that's the headline.
* **Ending Uncertainty:** Replaces the fear of retroactive executive orders with a permanent, constitutional "Legacy Shield."
* **Zero-Statelessness Leadership:** Section 3 is a global-standard humanitarian commitment. Promote this from a subsection to a headline feature.
* **Protection FROM what's happening now:** Frame the amendment as a shield against the current legal chaos (executive orders, *Barbara v. Trump*), not as a new restriction.

### For Everyone: What This Does NOT Do
*(Pre-empt fears from both sides)*
* Does NOT deport anyone — ever.
* Does NOT affect anyone born before January 1, 2032.
* Does NOT create a surveillance registry.
* Does NOT eliminate any path to citizenship that exists today.
* Does NOT change how legal immigration works.

---

## 5. TECHNICAL ARCHITECTURE (Astro Islands)

### **A. Tech Stack**
* **Framework:** Astro 5.0 (Static-first for 100/100 SEO).
* **Styling:** Tailwind CSS (Institutional/Legal Design Language).
* **Interactivity:** Preact (Minimalist "Islands" for calculators).
* **Infrastructure:** Cloudflare Pages + D1 (Edge SQL for supporter registry).

### **B. Core Components**
1. **`StatusChecker.tsx` (Island):**
   - Inputs: Birth Year, Parental Status.
   - Outputs: Visual roadmap (Legacy vs. v2.0 Path).
2. **`VestingProgress.tsx` (Island):**
   - An interactive bar showing how a child moves from "Registered Resident" to "Citizen" over 10 years.
3. **`GlobalMap.astro` (Static):**
   - A comparison tool showing how v2.0 aligns with G7 standards.

---

## 6. PROJECT ROADMAP

### Phase 1: Launch (The Whitepaper)
* Ship `USCitizenship2032.com` as a static site with the amendment text, international comparison, partisan bridge messaging, and "What This Does NOT Do" section.
* Include a clear "About / Who's Behind This" page — JT's story as a frustrated pragmatist.
* Email capture for supporters (lightweight — no donations yet).

### Phase 2: Engage (The Tools)
* Launch the "Status Checker" interactive tool to drive shares and build the supporter list.
* Publish economic data and sourced arguments for both sides.
* Begin media outreach with a tight press kit.

### Phase 3: Open Source (The Movement)
* Open-source the amendment text on GitHub for public peer-review and pull requests on the wording.
* Crowdsource the interim status naming (replace "Registered Resident").
* Seek an initial constitutional law review to seed the public draft.
* Build community governance for how changes get accepted.