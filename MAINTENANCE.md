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

## Common updates

_This section will grow as we make decisions. Each entry is a recipe — copy the prompt into v0 and adjust._

### Update an event date or detail

> Coming soon — we'll fill this in as we set up the events page.

### Add a new board member

> Coming soon — we'll fill this in once we finalize the Board page.

### Change the annual dues amount

> Coming soon.

### Swap a photo

> Coming soon.

## When something breaks

If the live site looks wrong after a v0 change:

1. Don't panic. Every change has a history.
2. Open the v0 project and revert the most recent change (v0 has a version history per chat).
3. If you can't figure it out, the safest fallback is to **revert the most recent commit on GitHub**. A developer can do this for you in 30 seconds. Email a parent who works in tech, or ask the LO Schools Foundation for a referral.

## Things to leave alone

Don't manually edit files directly in GitHub unless you know what you're doing. v0 is the source of truth — editing GitHub directly can cause sync conflicts.

## Annual checklist

Things to update each school year (typically late August):

- [ ] Board roster on `/board` page
- [ ] Annual calendar on `/calendar` and `/events`
- [ ] Classroom parents list on `/classroom-parents`
- [ ] Dues amount on `/dues` (if changed)
- [ ] Year on the footer copyright
- [ ] Welcome message on the homepage and `/new-families`

## Handing this off

When the current maintainer rotates off the PTO:

1. Add the next maintainer's name to the README
2. Walk them through this document in person if possible
3. Grant them access to the v0 project (v0 has team sharing)
4. Add them as a collaborator on this GitHub repo
5. Make sure they have the Vercel account login

### Update the Future FH timeline
The Future FH page has a timeline of bond project milestones. The district publishes monthly updates at https://bond.losdschools.org/projects/forest-hills-elementary/project-updates. Roughly once a month, copy the latest project manager's note into a new timeline entry and remove the oldest. In v0, just say: "On the Future FH page, add a new timeline entry at the top dated [month/year] with this summary: [paste 1-2 sentences]."

### Add a new sponsor
On the Sponsors page, in the appropriate tier section, add a new sponsor card with: business name, short description, website URL, and logo (if available). In v0, just say: "On the Sponsors page in the [Falcon/Community/Friends] tier, add a sponsor: [business name], [description], [website]." Upload the logo as an image attachment in the same chat.

### Update a resource link
On the Resources page, if a district link changes, in v0 say: "On the Resources page in the [section name] section, change the link for [link title] to [new URL]."
