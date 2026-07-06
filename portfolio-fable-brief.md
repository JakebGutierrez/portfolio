# Portfolio Site — Build Brief

## Role & intent
You are building my personal portfolio site. The design is ALREADY DECIDED — a working
single-file mockup is included in this repo as `mockup.html`. Your job is to translate
it faithfully into a small production project, not to redesign it. Where the mockup and
this brief conflict, this brief wins. Do not introduce new visual ideas.

Audience: recruiters and hiring managers for AI / software engineering roles, skimming fast.
Deploy target: Vercel free tier, custom domain `jakeb.cc`.

## Stack
- Vite + TypeScript, static output. No framework — this is one page of semantic HTML,
  one stylesheet, and a small amount of TS for the accordions and entrance animation classes.
- No runtime dependencies. Dev dependencies limited to Vite + TypeScript.
- Fonts: Instrument Sans (400/500/600) and IBM Plex Mono (400). Self-host via
  `@fontsource` packages or downloaded woff2 in `/public/fonts` with `font-display: swap`
  — do NOT load from the Google Fonts CDN in production.
- No localStorage/sessionStorage. No analytics. No cookies.

## Design tokens (authoritative)
```css
--bg:     #15161E;  /* dark indigo */
--ink:    #EAEBF2;
--muted:  #9298AB;
--faint:  #5C6178;
--line:   #262939;
--accent: #9AA8E8;  /* muted periwinkle */
```
Typography, spacing, layout, hover states, accordion mechanics, and entrance animation
are all as per `mockup.html`. Match it visually 1:1 at desktop and mobile widths.

## Layout summary (see mockup for exact treatment)
- Split grid: sticky left identity column (name, positioning line, contact links,
  "Sydney, Australia"), scrolling right column ("Selected work" accordion list +
  "Experience" strip).
- Below 800px: single column; left column content stacks on top, sticky behaviour off.
- All accordion entries CLOSED by default.

## Content (final copy — use verbatim, do not rewrite)
Name: **Jakeb Gutierrez**
Positioning: *Software engineer — LLM agent systems, MCP integrations, async Python.*

Contact links (left column, in this order):
1. mail@jakebgutierrez.com → `mailto:mail@jakebgutierrez.com`
2. GitHub → https://github.com/JakebGutierrez
3. LinkedIn → [CONFIRM SLUG — placeholder https://www.linkedin.com/in/jakebgutierrez]
4. Resume → `/resume.pdf` (I will drop `Jakeb-Gutierrez-Resume.pdf` into `/public`
   as `resume.pdf`; link opens in new tab)

### Projects (accordion entries, in this order)

**Mana Chart** — kind label: `web app / live`
> A web app where Magic: The Gathering players build custom grids of card artwork and
> export them as shareable images. Live in production with real users — card search,
> drag-and-drop layout, and high-resolution image export, built against the Scryfall API.

Stack line: `React · TypeScript · Scryfall API · canvas export · Vercel`
Links: Visit site → https://mtgchart.com · Source → https://github.com/JakebGutierrez/mtg-chart

**WobbleMIDI** — kind label: `audio tool`
> A drum-MIDI humaniser. Programmed drums are quantised and lifeless — WobbleMIDI adds
> statistically modelled timing and velocity, sampling per-hit deltas over a slowly
> drifting groove so the result pushes and pulls like a real drummer.

Stack line: `Python · statistical modelling · MIDI · desktop GUI`
Links: Source → https://github.com/JakebGutierrez/wobblemidi

**Agent Systems** — kind label: `case study`
> Async Python agent connecting a locally hosted LLM to a SIEM through MCP: a
> natural-language investigation query goes in, typed and structured results come out.
> Shipped into a shared agent platform behind a feature flag for safe rollout, with
> full async test coverage.

Stack line: `Python · asyncio · MCP · Pydantic · pytest`
No links. Italic note: *Built in a secure environment — happy to share more context in conversation.*

### Experience strip
- `2025 —` **Graduate Engineer, Department of Defence** — agent systems & MCP
  integration, AI/ML research pipelines, engineering data platforms.
- `2017 – 22` **B.E. Software, UTS** — with Diploma in Professional Engineering Practice.

## Quality floor (all required)
- Semantic HTML: single `h1`, real `button` elements for accordions with
  `aria-expanded`, landmarks (`header`/`main`/`aside`/`nav`/`section`).
- Visible keyboard focus states (accent outline as in mockup); full keyboard operability.
- `prefers-reduced-motion: reduce` disables entrance animation and accordion transition.
- External links: `target="_blank" rel="noopener"`.
- Meta: title `Jakeb Gutierrez — Software Engineer`, meta description, canonical
  `https://jakeb.cc`, Open Graph + Twitter card tags with a simple generated OG image
  (1200×630: bg colour, name in Instrument Sans, positioning line in muted).
- Favicon: simple monogram "JG" or a minimal mark in the accent colour on `--bg`;
  provide SVG favicon + apple-touch-icon PNG.
- Lighthouse targets on the deployed site: 100 / 100 / 100 / 100 (perf may be 99 with
  fonts; do not chase it with hacks).
- No console errors or warnings.

## Phases
1. **Scaffold** — Vite + TS project, fonts self-hosted, tokens as CSS custom properties,
   deploy pipeline verified on Vercel preview. Stop and show me.
2. **Page build** — full layout + content from this brief, matching `mockup.html` 1:1
   at 1440px, 1024px, 390px. Stop and show me screenshots at those widths.
3. **Polish** — meta/OG/favicon, reduced-motion audit, keyboard pass, Lighthouse run.
   Stop and report results.

Do not proceed past a phase without my sign-off. Ask before deviating from the mockup
for any reason other than the requirements in this brief.

## Out of scope (do not build)
- No blog, no multi-page routing, no CMS, no dark/light toggle, no Three.js
  (a WebGL centrepiece may be added in a future version — leave the left column's
  empty vertical space alone; it is intentional).
- No contact form. No animation libraries.
