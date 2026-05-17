# Maintenance Guide

This document explains how to keep the Forest Hills PTO website current. It assumes you have **no coding experience** and are working through [v0](https://v0.app).

## Before you start

You'll need:

1. Access to the v0 project: https://v0.app/chat/projects/prj_tDQQSHLn8visp3Xhx1p5xq2V5DWz
2. A v0 account (free tier works for basic edits)
3. Roughly 10 minutes of focus

That's it. v0 handles the rest — code, deployment, and pushing changes to GitHub.

## How v0 works (the short version)

You talk to v0 the same way you'd talk to a person. "Change the dues amount to $80." "Add a new event to the homepage called Spring Carnival on May 3rd." "Replace the photo on the New Families page." v0 makes the change, you preview it, and if it looks right you publish.

Every change you publish in v0 automatically:
1. Updates the live site
2. Saves a copy in this GitHub repo (so we have a history)

## Safe prompt pattern

When you want to fix or change something specific, use this format:

> "On the [page name] page, in the [section name] section, the text currently reads:
> '[paste exact existing text]'
>
> Replace with:
> '[new text]'
>
> Do not change anything else on the page."

The "do not change anything else" matters — without it, v0 may interpret a small fix as license to redesign the surrounding area.

---

## Common updates

### Update a calendar event

When the board confirms a date or you need to add a new event, in v0 say:
> "On the /calendar page, mark [event name] as confirmed for [specific date]. Apply the sage green '(confirmed)' tag in both Section 1 (Year at a glance) and Section 2 (Find your next event). Also update the Last updated date to [today]."

### Update or add a committee chair

When a chair changes or fills a TBD slot, in v0 say:
> "On the /volunteer page, for the [committee name] committee, change the chair from [old name] to [new name]." Or: "On the /volunteer page, for [committee name], the chair is no longer TBD. The new chair is [name]."

### Update classroom parents

In the fall, when 2026–27 room parents are confirmed:
> "On the /classroom-parents page, replace the 2025–26 data with the 2026–27 data. Here's the new list: [paste data]. Also update the top informational panel to reflect the current school year."

### Add a new sponsor

> "On the /sponsors page in the [Falcon Tier / Community Tier / Friends of Forest Hills] section, add a sponsor: [business name], [short description], [website URL]." Upload the logo as an image attachment in the same chat.

### Update the Future FH timeline

The district publishes monthly updates at https://bond.losdschools.org/projects/forest-hills-elementary/project-updates. Roughly once a month:
> "On the Future FH page, add a new timeline entry at the top dated [month/year] with this summary: [paste 1–2 sentences]."

### Update or hide the homepage survey callout

When the survey closes or a new one launches:
- To update: "On the homepage, in the 'Help shape next year' section, change the survey link to [new URL]."
- To hide: "On the homepage, remove the 'Help shape next year' survey callout section."

### Update a resource link

> "On the /resources page in the [section name] section, change the link for [link title] to [new URL]."

### Fix specific text on the site

Use the safe prompt pattern above. The "do not change anything else" guardrail prevents accidental redesigns.

---

## Annual checklist (late August / early September)

- [ ] Board roster on /board page
- [ ] Annual calendar on /calendar
- [ ] Classroom parents list on /classroom-parents
- [ ] Volunteer committee chairs on /volunteer
- [ ] At-a-glance "When" section with new school year
- [ ] Year on the footer copyright
- [ ] Welcome message on homepage and /new-families
- [ ] Sponsors page year reference (e.g., "2026–27 sponsor community")

---

## Annual swap: spring fundraiser

The PTO alternates between two spring fundraisers each year:
- **Even years** (spring 2026, 2028): Spring Gala
- **Odd years** (spring 2025, 2027): The Round-up (western-themed: mechanical bulls, cocktails, BBQ)

After each event, references on the site need updating for next year:
- /at-a-glance "How we fund it" copy + May month card
- /calendar May month card
- /about-pto Fundraising category card
- /sponsors intro paragraph

Historical references stay accurate (e.g., "$60K+ raised at our 2026 Spring Gala" remains valid forever).

---

## Operational setup (one-time tasks)

### Set up email forwarding

The site currently uses fhptoprez@gmail.com as the canonical contact email. To replace with a fhpto.org address (recommended once a successor PTO president is in place):

1. Log into Porkbun, go to Domain Management → fhpto.org → Email Forwarding
2. Add forwarding for `info@fhpto.org` (or similar) → forward to whoever should receive PTO mail
3. In v0, say: "Replace every instance of fhptoprez@gmail.com on the site with [new address]."

### Other future role-based addresses (when needed)

Once the PTO grows or splits responsibilities, you may want:
- `sponsors@fhpto.org` → forwards to sponsorship coordinator
- `volunteer@fhpto.org` → forwards to volunteer coordinator
- Each one is a 30-second Porkbun task + a v0 prompt to update references

---

## When something breaks

1. Don't panic. Every change has a history.
2. Open the v0 project. v0 has version history per chat — revert the most recent change.
3. If you can't figure it out, revert the most recent commit on GitHub. A developer can do this for you in 30 seconds.

## Things to leave alone

Don't manually edit files directly in GitHub unless you know what you're doing. v0 is the source of truth — editing GitHub directly can cause sync conflicts.

---

## Handing this off

When the current maintainer rotates off the PTO:

1. Add the next maintainer's name to the README
2. Walk them through this document in person if possible
3. Grant them access to the v0 project (v0 has team sharing)
4. Add them as a collaborator on this GitHub repo
5. Make sure they have the Vercel account login
6. Make sure they know the canonical contact email setup (currently fhptoprez@gmail.com)

---

## Project log

- **May 16, 2026** — Site shared with PTO board as working prototype. Beta tag in header. Major work completed in initial build:
  - Homepage with "I'm new here" primary CTA, dues demoted
  - Real stats added ($60K+ gala, $500 teacher grants, 12 field trips)
  - Calendar page with illustrated annual overview + interactive list view
  - Future FH page with bond rebuild content
  - Sponsors page with 501(c)(3) info and Tax ID 93-0858044
  - Resources page with district links
  - PTO vs. LOSF page using LOSF's own "fund things / fund buildings / fund people" framing
  - Survey callout on homepage
  - Board page with gradient placeholders (awaiting real headshots)
  - Two accent colors introduced: warm gold (#D4A437), sage green (#87A878)

- **May 17, 2026** — Follow-up session based on board feedback. Major additions:
  - New /at-a-glance dashboard page consolidating key info on one page
  - Calendar updates: confirmed Sept 25 Carnival, confirmed May 14 Round-up
  - Site-wide email change to fhptoprez@gmail.com (single canonical contact)
  - Content updates: Round-up vs. Gala alternation, Fun Run as fundraiser starting 2026–27, classroom startup funds stat ($12K+)
  - /classroom-parents populated with 2025–26 data (K-5, no emails, leads + supporters)
  - /volunteer rebuilt with 17 real committees, chairs where known, "TBD — could be you" for openings
  - Print CSS added to /at-a-glance and /calendar (browser-print path, hides nav/footer)
  - Visual refinements: subtler "Last updated" treatment matching calendar pattern
