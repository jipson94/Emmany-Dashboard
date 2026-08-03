# Emmany — Design System

Design system for **Emmany**, a B2B **fintech payment infrastructure** brand. Emmany provides *payment orchestration*: routing transactions across mobile money, cards and bank rails through one secure API. The flagship product is **Emmany Gateway** — positioned as *"Payment Infrastructure · Secure Orchestration"* for banks, fintechs and platforms (primary market: Francophone Africa, hence bilingual FR/EN copy).

> Tagline: **One gateway for every payment rail.**

## Sources provided
The brand was derived entirely from four uploaded brand assets (no codebase or Figma link was given):
- `uploads/6.png` → `assets/emmany-logo-horizontal.png` — primary horizontal lockup (mark + navy wordmark).
- `uploads/14.png` → `assets/emmany-mark.png` / `assets/emmany-mark-trim.png` — the icon mark only.
- `uploads/2.jpg` → `assets/brand-board.jpg` — brand rationale board (logo construction, color meanings, lockups on blue/cyan/navy).
- `uploads/3.jpg` → `assets/typography-board.jpg` — typeface (Montserrat) + do/don't logo usage + brand pattern.

Colors were sampled directly from the artwork: **Blue `#0042EC`**, **Cyan `#01FCE9`**, **Navy `#041833`**.

---

## CONTENT FUNDAMENTALS
How Emmany writes.

- **Tone:** confident, precise, trustworthy — fintech/B2B. Reassuring about security and compliance without being stiff. It sells *infrastructure* and *safety* (the #1 argument for banks).
- **Voice / person:** speaks to *you* (the builder/business): "One API, every rail." "Go from sandbox to production in days." First-person plural for the company: "We route, retry and secure every transaction."
- **Casing:** Sentence case for headings and buttons ("Get started", "View the docs"). UPPERCASE only for short eyebrows/labels with wide tracking ("PAYMENT INFRASTRUCTURE", "WHY EMMANY").
- **Bilingual:** brand rationale is French; product copy here is English with local touches (XOF currency, Orange Money / Wave / MTN providers, phone `+221…`). Match the audience's language.
- **Numbers & proof:** concrete metrics carry the message — "99.99% uptime", "<150ms auth", "€2.4B+ processed", "40+ payment methods", "12 markets". Use real-feeling figures, tabular/mono for money.
- **Verbs:** action-first — *orchestrate, route, settle, reconcile, secure, launch*. The product noun family: gateway, rail, transaction, payout, ledger, sandbox, webhook.
- **Emoji:** **never.** Not part of the brand. Use Lucide icons instead.
- **Vibe:** "infrastructure your finance team can trust." Modern, technical, safe.

## VISUAL FOUNDATIONS
- **Colors:** a tight fintech triad. Vivid **blue `#0042EC`** (confiance/tech, primary actions & links), **cyan `#01FCE9`** (innovation/speed, accents, highlights, high-energy CTAs on dark), **navy `#041833`** (security/authority, primary text & dark surfaces). Cool-tinted neutral grays. Semantic status: green success, amber warning, red danger. Max 1–2 background colors per surface; white and `--gray-50` do most of the work. See `tokens/colors.css`.
- **Type:** **Montserrat** exclusively (geometric sans; the brand's declared typeface — full weight range Thin→Black + italics). Display/H1 = ExtraBold (800) with tight tracking (`-0.03em`); headings Bold (700); body Regular (400) at 1.5–1.65 line-height; labels/eyebrows SemiBold (600) UPPERCASE with `0.12em` tracking. See `tokens/typography.css`.
- **Backgrounds:** clean white and pale-blue (`--blue-50`) sections; dark sections use navy or the `--gradient-ink`. Signature texture = the **brand mark tiled** at low opacity (~6–12%), white on blue/navy (see `guidelines/cards/brand-pattern.html`). Radial cyan/blue glows behind heroes. No photography supplied — use gradients + the mark pattern.
- **Gradients:** the "transaction flow" dégradé is core to the brand story — `--gradient-brand` (blue→cyan), `--gradient-flow` (cyan→blue→navy, = raw transaction → secured payment), `--gradient-ink` (navy). Used on hero panels, CTA bands, KPI tiles. Avoid purple/violet gradients — off-brand.
- **Corner radii:** soft and rounded, echoing the logo's **capsule endpoints**. Cards 16px (`--radius-lg`), controls 12px, buttons & pills fully rounded (`--radius-pill`).
- **Cards:** white, 1px `--border-subtle`, 16px radius, soft **cool navy-tinted shadow** (`--shadow-xs` at rest). Interactive cards lift `translateY(-3px)` to `--shadow-lg` on hover. Optional gradient accent bar across the top edge.
- **Shadows:** cool, navy-based (`rgba(4,24,51,…)`), soft and diffuse — never harsh black. Brand glow variants (`--shadow-brand` blue, `--shadow-accent` cyan) for primary/accent buttons.
- **Buttons:** pill-shaped, Montserrat SemiBold. Primary = blue + brand glow; accent = cyan (dark text) for high-conversion; secondary = navy; outline & ghost for low emphasis.
- **Hover states:** buttons darken one step (blue-500→600) and lift 1px; links go blue-500→600; cards lift + deepen shadow. **Press:** returns to flat (no lift). No bounce.
- **Motion:** quick and confident — 120–320ms, `--ease-out` `cubic-bezier(0.22,1,0.36,1)`. Fades and small translates; **no bounce, no spring**.
- **Borders:** 1px hairlines in `--border-subtle`/`--border-default`; 1.5px on form controls, thickening to `--color-primary` on focus with a soft blue focus ring (`--ring`).
- **Transparency & blur:** sticky nav uses `backdrop-filter: blur(12px)` + translucent white once scrolled. Otherwise transparency is reserved for overlay glows and the tiled-mark texture.
- **Imagery vibe:** cool, technical, bright — blues and cyans, no warmth, no grain. Product is visualized through UI mockups (dashboards, code panels), not stock photos.

## ICONOGRAPHY
- **Icon set: [Lucide](https://lucide.dev)** (CDN-linked) — chosen as the closest match to the brand's clean, rounded, 2px-stroke geometric feel. *Substitution flagged:* no icon assets were provided, so Lucide is a stand-in; swap if the team has a house set.
- Usage: 2px stroke, `currentColor`, rounded caps/joins. Sizes 16–22px inline, 40–48px in feature "chips" (icon on `--blue-50` rounded square). In UI kits, rendered via `<i data-lucide="name">` + `lucide.createIcons()` (see `ui_kits/website/Site.jsx`).
- **Emoji:** never used. **Unicode glyphs:** only the select chevron `▾` and social marks; everything else is Lucide.
- **Brand mark** (`assets/emmany-mark-trim.png`) doubles as an icon/favicon and as a tiled background texture (white via `filter: brightness(0) invert(1)`).

---

## Components
Reusable React primitives (`window.EmmanyDesignSystem_<hash>.<Name>`), styled with CSS custom properties. See each `.prompt.md` for usage.

- **Button** (`components/forms/`) — pill CTA; variants primary/accent/secondary/outline/ghost, sizes sm/md/lg, icon slots. *(Starting point)*
- **IconButton** (`components/forms/`) — square icon-only button.
- **Input** (`components/forms/`) — labeled text field, leading icon, hint/error, focus ring.
- **Select** (`components/forms/`) — styled native dropdown.
- **Checkbox** (`components/forms/`) — custom blue-fill checkbox.
- **Switch** (`components/forms/`) — pill toggle (capsule shape).
- **Badge** (`components/feedback/`) — status/label pill, soft or solid, optional dot.
- **Alert** (`components/feedback/`) — inline info/success/warning/danger banner, dismissible.
- **Card** (`components/surfaces/`) — rounded surface, hover lift, optional gradient accent bar. *(Starting point)*
- **StatCard** (`components/surfaces/`) — KPI/metric card, light + dark variants.
- **Logo** (`components/brand/`) — official Emmany lockup (mark + wordmark, optional "Gateway" sub-brand, light/dark tone).

## UI Kits
- **Website** (`ui_kits/website/`) — interactive multi-page marketing site: Home, Developers, Pricing, Contact/sign-up. See its `README.md`. *(Starting point)*

---

## Root index / manifest
- `styles.css` — global entry point (consumers link this one file); `@import`s all tokens + base.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `components/` — `forms/`, `feedback/`, `surfaces/`, `brand/` (each: `.jsx`, `.d.ts`, `.prompt.md`, `*.card.html`).
- `ui_kits/website/` — website recreation + screens.
- `guidelines/cards/` — 15 foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.
- `assets/` — logos, mark, favicon, brand & typography boards.
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent Skills manifest.

## Caveats & substitutions
- **Fonts:** Montserrat is loaded from **Google Fonts CDN** (`tokens/fonts.css`) — Google Fonts *is* the canonical source for Montserrat. If self-hosted/offline `.woff2` binaries are required, drop them in `assets/fonts/` and swap the `@import` for `@font-face` rules.
- **Icons:** Lucide substituted for a house icon set (none provided).
- **Logo variants:** only full-color mark + navy/white wordmark were derivable. The wordmark is set live in Montserrat ExtraBold (matches the artwork); no separate monochrome mark file was provided.
