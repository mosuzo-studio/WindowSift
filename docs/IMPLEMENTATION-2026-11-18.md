# Implementation and validation

Audit date: 2026-11-18 (Asia/Shanghai).

## Starting state

Empty local directory; GitHub connector returned 404 for the corresponding repository before repository creation.

Workspace root AGENTS.md was absent. SnipArc-site AGENTS.md and the actual shared header/footer, i18n helper, Astro config and Pages workflow were inspected. SnipArc-site remained unchanged.

## Design and implementation

Blue inspection workspace with interactive source/tree/details illustration and scoped example search. No real app screenshot is represented by this illustration.

Shared v3 header/footer markup, layout and menu behavior are adapted from SnipArc-site. Two locale routes only, with static builds and GitHub Pages deployment. Product copy is centralized in src/data/content.ts; registered terms and source boundaries are in docs/terminology.md.

## Validation

- Astro checks: zero errors, warnings or hints.
- Production build: 23 outputs, including 22 localized pages plus 404.
- Static verification checks local links, anchors, images, one h1, locale, alternates, canonical domain, CNAME and sitemap.
- Chromium browser checks at 320 / 390 / 768 / 1440 px, both locales: no horizontal overflow or page errors. Menus, Escape, language switching, FAQ and product interactions passed.
- KeySplera reduced-motion handling freezes animated previews until the visitor plays them.
- Desktop and mobile full-page screenshots saved in the task output folder; these website previews are not product screenshots.

## Provenance and limits

Supplied WindowSift.exe SHA-256: 2d14fab70733568586deab3c0f80a417e5126f7078179f7a3bc3c74f190517cc.

Program claims were checked against supplied executable strings and local implementation sources; a live session of the renamed native builds was not inspected because the required desktop-control runtime was not exposed. See terminology.md for exact sources. Do not describe that source audit as runtime feature testing.

DNS CNAME already pointed to mosuzo-studio.github.io. DNS credentials were not used. No binary release uploaded; software licensing and unverified performance metrics were not invented.
