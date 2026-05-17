# Forest Hills PTO Site — Working Context

This document captures the decisions, direction, and current state of the Forest Hills PTO website project. It exists so anyone (including future-me or an AI assistant in a new session) can pick up where work left off without re-deriving the reasoning behind choices.

## Who this is for

The site serves Forest Hills Elementary parents in Lake Oswego, Oregon. Primary audience:
- New families (first kindergartner, transferring from private, new to district)
- Existing parents who feel overwhelmed by the Falcon Flash weekly email
- Parents who want to engage but aren't sure how
- Board members and committee leads who need a reference

## What problem the site solves

The official district-mandated PTO page (https://fh.losdschools.org/about-forest-hills/parent-teacher-organization) is required but ugly and not user-friendly. The Falcon Flash weekly email contains way too much content and overwhelms parents. Our site replaces both as the friendly "front door" — scannable, mobile-first, calendar-as-source-of-truth, with a clear path for new families.

## Tone and design principles

- Inspired by gowindmill.com structurally but warmer
- Inspired by Palisades PTO packet for tone (Amy shared this; mom-friendly feel)
- Visual references: Humaan, Major Tom (warm humanist illustration over corporate)
- LOSF (https://losfoundation.org) for "real nonprofit, real impact" infographic feel
- Less words. If they want more words, they click. Assume people aren't reading.
- Hand-drawn warmth in specific moments (calendar especially), restraint elsewhere
- Mobile-first

## Tech stack

- Built in v0 by Vercel (no-code/low-code, plain English prompts)
- Auto-syncs from v0 to GitHub: https://github.com/blazerbeam/v0-forest-hills-pto-website
- v0 project: https://v0.app/chat/projects/prj_tDQQSHLn8visp3Xhx1p5xq2V5DWz
- Deployed to Vercel
- Domain: fhpto.org (Porkbun registrar, A record to 76.76.21.21, CNAME www to cname.vercel-dns.com)
- Next.js, TypeScript, Tailwind, shadcn/ui

## Color palette

- **Primary:** Falcon red #C8102E, Navy #1B2A5B
- **Accent (used sparingly):** Warm gold #D4A437 (warmth/community), Sage green #87A878 (grounding/informational)
- Calendar page has its own multi-color palette (children's book / illustrated brochure) — don't override it with the system above

## Key decisions made (and why)

- **Dues demoted from primary CTA and nav button.** PTO is considering whether dues continue. Leading with payment sets the wrong tone for new families. "I'm new here" is the primary CTA. Dues exists as a regular nav item.
- **"I'm new here" is the primary CTA.** Survey results showed new family welcome is the top gap. Inclusivity concerns also showed up in survey — this CTA signals "you belong" before "give us money."
- **Calendar built in two parts:** illustrated annual overview (brochure feel, like the printed version parents kept on their fridge) + interactive list view with filters. Disclaimer banner notes 2026-27 dates are estimates until board confirms.
- **Future FH (bond rebuild) gets its own page.** Forest Hills is being demolished and rebuilt. Students relocate to Uplands during construction. District owns the official source of truth — we link out to https://bond.losdschools.org/projects/forest-hills-elementary/project-updates. Calm/factual tone.
- **PTO vs. LOSF uses LOSF's own framing.** "Parent Clubs fund things. Bond measures fund buildings. The Foundation funds people — teachers." Quoted directly from LOSF FAQ with attribution.
- **Sponsors page reframed around "one commitment, a year of Forest Hills"** instead of static tiers. Includes 501(c)(3) language and Tax ID. Tax ID: 93-0858044
- **Stats are real:** $60K+ gala, $500 per teacher, 12 field trips. No placeholders.
- **Multi-page architecture over single-page scroll.** Different parent audiences want different things, multi-page lets us send targeted links.

## Pages

- `/` Home — hero with "I'm new here" primary CTA, calendar promo strip, Future FH banner, "This week" event cards, "Find what you need" 6-tile grid, survey callout, impact stats
- `/new-families` — Welcome for new families
- `/events` — Filterable event list
- `/volunteer` — Ways to help
- `/board` — Board members with gradient placeholders (awaiting real headshots)
- `/about-pto` — What the PTO does
- `/dues` — Dues info (deprioritized)
- `/future-fh` — Bond rebuild and relocation info
- `/calendar` — Illustrated yearly overview + interactive list (the most important page)
- `/pto-vs-losf` — Comparison with LOSF
- `/sponsors` — Sponsor page with 501(c)(3) info
- `/resources` — District link directory
- `/classroom-parents` — Grade-level contacts
- `/falcon-flash` — Newsletter archive
- `/recent-wins` — PTO accomplishments

## Survey results (April-May 2026, ~32 responses)

The April-May 2026 parent survey shaped many decisions. Key themes:
- Dominant: fear of overcommitment, not lack of interest. "Scheduling conflicts," "meeting times don't work," "I didn't know what was needed," "I felt my attendance would get me volun-told"
- Calendar trust: stale/changed dates without updates is a major issue. Quote: "when the PTO calendar was published at the beginning of the year myself and other folks planned our schedules around it. When things changed they were not updated on the website or Google doc"
- Inclusivity flags: comments about feeling unwelcomed, including one parent of color who noted volunteers weren't welcoming
- Most preferred contribution: behind-the-scenes from home, one-time event help, classroom help — NOT committee leadership or meetings
- Most common availability: weekday mornings (kids at school)
- Asks: hybrid/Zoom for meetings; monthly summary vs weekly firehose; smaller fundraisers vs intimidating gala

Survey still open: https://us12.list-manage.com/survey?u=f2c68e6bdef7c7f3600d0542a&id=5138905a25&attribution=false

## Board (2025-26 roster, on /board page)

- Shaun Swensen — President (K, 3rd)
- Jeremy Myrland — Vice President (4th twins)
- Brianna O'Gorman — Operations Treasurer (4th)
- Kyle Renalds — Compliance Treasurer (1st)
- Kathryn Kuntz — Secretary (5th)
- Gretchen McClaughry — Volunteer Coordinator (3rd, 5th)
- Iris Ringer — Communications (4th)

## Maintenance

- Project log and maintenance recipes are in MAINTENANCE.md
- I'm rotating off after 2026-27 school year — handoff to next Communications chair, ideally with v0 access so a non-developer can maintain

## What's queued / unresolved

These are flagged but not yet built or decided:
- "Ways to help" homepage section addressing survey "I want to help but don't know how" theme
- Real board headshots (using gradient placeholders for now)
- Real classroom parents list per grade
- Real sponsor logos (once we have sponsors)
- 2026-27 dates confirmed by board before August 2026
- Email forwarding setup at Porkbun (pto@fhpto.org, sponsors@fhpto.org)
- Decision on whether dues continue or are replaced/eliminated
- Possible "Ways to help" section based on survey filter (one-time / from home / classroom / committee)
- Possible board page redesign once real photos arrive
- "About PTO" page visual refresh (deferred, may revisit later)
- The board page gradient density may be too loud once real photos don't replace it — monitor

- ---

## Session log

This section tracks substantive work sessions. Newest at top.

### Session 2 — May 17, 2026

Picked up after board feedback from initial prototype share. Key board signals: keep it simple, make it maintainable for future board members, ~90% of content should be evergreen.

**What got built:**
- New `/at-a-glance` dashboard page — consolidates what/who/when/how on one page for parents who want the quick scan. Six sections: What the PTO does, Who runs the PTO, When things happen (mini illustrated calendar), How it works, Quick facts (with $12K+ classroom startup stat), Want to go deeper. Includes homepage link.
- `/classroom-parents` populated with real 2025–26 data. K–5 only (excluded Pre-K). Names only, no emails. Leads shown prominently with "Also helping:" line for supporters. Grade filter chips.
- `/volunteer` rebuilt with 17 real committees split into Ongoing vs. Seasonal & Event sections. Chair names where known, "TBD — could be you" for openings. Email-to-join CTAs with pre-filled subject lines.
- Site-wide email change to `fhptoprez@gmail.com` (one real, monitored address) — replaced placeholder role-based addresses everywhere.
- Calendar updates: Sept 25 Carnival marked confirmed, May 14 Round-up marked confirmed.
- Content corrections: Round-up vs. Spring Gala alternation (every other year), Fall Fun Run becoming a fundraiser starting 2026–27.
- Print CSS added to `/at-a-glance` and `/calendar` — browser-print path, hides nav/footer, adds print-only contact line.
- Visual refinements: subtler "Last updated" treatment on `/at-a-glance` matching the calendar's pattern.
- MAINTENANCE.md restructured into clear sections: common updates, annual checklist, fundraiser swap recipe, operational setup, project log.

**Key decisions this session:**
- **No personal cell phones published.** Board contact stays at `fhptoprez@gmail.com`. Personal emails not on site.
- **No AI-generated faces or stock photos of people.** Board page gradient placeholders stay until real headshots arrive.
- **Print CSS = "good enough."** Browser-print path with hidden nav/footer. Not building a real PDF generator. Saved PDFs are clean even though print previews look rougher.
- **Maintenance simplicity > feature richness.** Following the board's signal, declined to add features that increase ongoing edit burden.
- **Role-based emails deferred.** Single `fhptoprez@gmail.com` for now. When Porkbun email forwarding is set up, replace with `*@fhpto.org` addresses sitewide via simple v0 find-and-replace.

**Board feedback received during session:**
- Kathryn: "Love it! Keep it as simple as possible and easier than easy to maintain for future board members."
- Iris: "Like 90% should be fairly evergreen info."
- Others: positive without specifics.

Shaun's response: framed the project as a 3-hour evening build, committed to maintaining for a trial year, will measure usage before scaling.

### Session 1 — May 15–16, 2026

Initial site build and first board share. See full project log in MAINTENANCE.md.

---

## What's queued / unresolved

Updated end of Session 2. Still pending:

- **Real board headshots.** Gradient placeholders still in place on `/board`.
- **Real classroom parents for 2026–27.** Current list is 2025–26 with disclaimer.
- **Real sponsors.** Empty state still showing on `/sponsors`.
- **More confirmed 2026–27 calendar dates.** Sept 25 and May 14 confirmed. Rest still estimates.
- **Email forwarding setup at Porkbun.** Will let us replace `fhptoprez@gmail.com` with `*@fhpto.org` addresses sitewide.
- **"Ways to help" homepage section.** Still queued from the original survey insights — addressing "I'd help but I don't know how" / fear-of-volun-told theme.
- **Real photos throughout.** Forest Hills photos for hero areas, event photos, etc.
- **Board page gradient density.** May feel too loud once real photos arrive. Monitor.
- **Possible business question.** Whether to offer this as a service to other PTOs (separate conversation, not blocking).

## Open conversations

Things mentioned but not decided:

- **Whether dues continue at all.** Some on the board are reconsidering. Site is structured to make demotion easy if it goes that way.
- **Falcon Flash future.** Survey signal was "monthly summary vs. weekly firehose." Not a website decision yet but related.
- **Personal-site mention.** Shaun is adding fhpto.org as a "What I'm Building" entry on jeremymyrland.com.
