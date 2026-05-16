# Forest Hills PTO Website

A modern, parent-friendly website for the Forest Hills Elementary PTO in Lake Oswego, Oregon. Designed to replace the cluttered district-required page and make it easy for parents to find what matters — events, volunteer opportunities, who's on the board, and what the PTO actually does — without wading through walls of text.

**Live site:** _coming soon_  
**Official school PTO page (district-required):** https://fh.losdschools.org/about-forest-hills/parent-teacher-organization

## What this is

- Built in [v0](https://v0.app) by Vercel — a no-code/low-code tool that uses plain English prompts
- Code is automatically synced from v0 to this GitHub repo
- Deployed on Vercel (free tier, suitable for a PTO)
- Designed mobile-first; most parents will read this on their phones

## Who maintains it

Maintained by the Forest Hills PTO Communications role.

- **2025–2027:** Shaun Swensen (PTO President, project lead)
- **2027 onward:** Handoff in progress — see [`MAINTENANCE.md`](./MAINTENANCE.md)

## How to make changes

You do not need to know how to code.

1. Go to the [v0 project](https://v0.app/chat/projects/prj_tDQQSHLn8visp3Xhx1p5xq2V5DWz)
2. Start a new chat in the project
3. Describe what you want to change in plain English (e.g. "update the dues page to say $80 per child")
4. v0 will make the change and push it to this repo automatically
5. Vercel will deploy the change to the live site

See [`MAINTENANCE.md`](./MAINTENANCE.md) for step-by-step examples of common updates (changing events, swapping board members, etc.).

## What's intentionally not in this repo

- Parent or student contact information — that stays in our private directory tools, never in code
- Payment processing credentials — handled by the dues processor
- Anything connected to ParentSquare or Falcon Flash distribution lists

## Tech stack

For future reference if a developer ever needs to touch this directly:

- Next.js (App Router) with TypeScript
- Tailwind CSS + shadcn/ui components
- Hosted on Vercel
- All page routes live in `app/`
- Shared UI components live in `components/`

## Questions

Email the PTO Communications chair (placeholder — to be filled in).
