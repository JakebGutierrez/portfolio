# Decisions

A short log of deliberate choices, so they don't get re-litigated or "fixed" later.

## Entrance animation starts at opacity .01, not 0

Text painted at exactly opacity 0 never registers a contentful paint, so the
page reports no FCP/LCP to Lighthouse or real-user metrics. Starting at .01 is
visually identical and fixes the metrics.

## Fonts load via CSS, not the JS bundle

Importing the font CSS through the stylesheet (rather than the JS entry point)
lets the browser discover the font files earlier and avoids FOUT.

## Links in collapsed accordions leave the tab order via a visibility transition

Keyboard focus must not land inside hidden content. `visibility` transitions
alongside the height/opacity animation so links in closed entries are
unfocusable without breaking the open/close animation.

## --faint brightened #5C6178 → #7C829B

The mockup's #5C6178 measured 2.96:1 against the background; small mono text
needs 4.5:1 (WCAG AA). Approved deviation from the mockup.

## The left column's empty vertical space is intentional

It is a reserved slot for a future WebGL/Three.js centrepiece (v2). Do not
fill it or "fix" it.

## No resume link

The brief specified a Resume contact link (`/resume.pdf`), but it was removed
on 2026-07-08 at the owner's request — email and LinkedIn suffice. Don't
re-add it from the brief.

## Mana Chart lives at manachart.app

The brief's URLs (mtgchart.com, github.com/JakebGutierrez/mtg-chart) are
outdated: the site moved to https://manachart.app and the repo was renamed
to `manachart` (2026-07-08).

## Fonts are self-hosted (no Google CDN)

Privacy, performance, and no layout shift. The ~99 Lighthouse performance
score attributable to the font fetch is an accepted trade-off.
