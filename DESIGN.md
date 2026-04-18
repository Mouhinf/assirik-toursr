# Design Brief

## Direction

**Assirik Tours Professional Portal** — Trustworthy, modern, minimal Senegalese services website with navy structural anchoring and warm gold accents. Light-first with refined dark mode support.

## Tone

Professional minimalism with warmth. Geometric sans-serif headings paired with clean body text create hierarchy through weight and scale, not visual clutter. The restricted 3-color palette (navy, sky-blue, gold) establishes international polish and corporate trust.

## Differentiation

Strategic use of the brand palette creates a cohesive, premium feel. Alternating light-gray sections provide visual breathing room. Gentle AOS.js scroll animations and smooth hover transitions add sophistication without distraction. Fixed header anchors navigation; hamburger menu ensures mobile-first functionality.

## Color Palette

| Token       | OKLCH                 | Role                                      |
| ----------- | --------------------- | ----------------------------------------- |
| background  | 0.99 0.005 240        | Light cream background for maximum read   |
| foreground  | 0.18 0.02 250         | Deep navy text for high contrast          |
| primary     | 0.30 0.18 250         | Navy structural (header, footer, titles)  |
| secondary   | 0.55 0.15 240         | Sky blue for CTAs, buttons, accents       |
| accent      | 0.68 0.18 60          | Gold for hover states, icons, highlights  |
| muted       | 0.97 0.008 240        | Light gray for section backgrounds        |
| card        | 1.0 0.002 240         | White for card surfaces                   |
| destructive | 0.55 0.22 25          | Warm red for errors/warnings              |

## Typography

- **Display**: Space Grotesk — geometric sans-serif for headings, hero text, section labels. Professional, modern, geometric weight.
- **Body**: Plus Jakarta Sans — clean, friendly sans-serif for paragraph text, UI labels, form inputs. Balanced readability and warmth.
- **Scale**: Hero `text-5xl md:text-7xl font-bold tracking-tight` | H2 `text-3xl md:text-4xl font-bold tracking-tight` | Label `text-sm font-semibold tracking-widest uppercase` | Body `text-base md:text-lg`

## Elevation & Depth

Minimal shadow hierarchy. Card surfaces use subtle elevation (`shadow-card`), hero/modals use elevated shadow (`shadow-elevated`). Avoid layered shadows; rely on color contrast and spacing to define depth.

## Structural Zones

| Zone    | Background       | Border              | Notes                                                          |
| ------- | ---------------- | ------------------- | -------------------------------------------------------------- |
| Header  | primary (navy)   | none / border-b     | Fixed, white text, gold accent on hover                        |
| Section | muted (gray)     | —                   | Alternating muted/background for visual rhythm                 |
| Content | background       | —                   | White cards on light background                                |
| Footer  | primary (navy)   | border-t            | White text, gold icons, legal/copyright text                   |

## Spacing & Rhythm

Section gaps: 4rem (lg) / 2rem (md). Card padding: 2rem (lg) / 1.5rem (md). Micro-spacing: 0.5rem gaps within cards. Consistent rhythm establishes visual hierarchy and breathing room across viewports.

## Component Patterns

- **Buttons**: Sky blue primary, navy hover, gold accent on secondary. Rounded `rounded-lg`, padding `px-6 py-3`, smooth transition `transition-smooth`.
- **Cards**: White background, subtle shadow `shadow-card`, `rounded-lg`, hover lift (`shadow-elevated`), gold border-top accent on department cards.
- **Badges**: Navy background, white text, `rounded-full` for pill shape, used in service tags and department identifiers.
- **Input**: Light gray border, navy focus ring, `rounded-md`, clean aesthetic with adequate padding.

## Motion

- **Entrance**: AOS.js fade-in-up on scroll, 600ms duration, gentle `ease-out` timing. Applied to cards, sections, CTA elements.
- **Hover**: CSS `transition-smooth` (0.3s cubic-bezier) on buttons, cards, links. Gold accent appears on interactive elements.
- **Decorative**: Minimal. Smooth shadow transitions on card hover, subtle text color shifts on link hover.

## Constraints

- No decorative gradients; only functional use (hero overlay gradient). No bouncy animations; all motion is calm and professional.
- Fixed header on desktop, hamburger toggle on mobile. No full-screen overlays unless modals.
- Typography scale: 3-4 tiers only (hero, h2, label, body). Avoid intermediate sizes.
- Gold accent reserved for hover states, icons, and department headers. Not used for body text or backgrounds.

## Signature Detail

Gradient navy overlay on hero background image + gold department card accents create visual entry and departmental differentiation without clutter.
