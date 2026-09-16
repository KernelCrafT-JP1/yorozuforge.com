# Design QA — YOROZU FORGE

## Result

No actionable P0/P1/P2 visual or interaction findings remain.

final result: passed

## Comparison targets

- Source visual truth: `../design-concepts/workshop-v3/displayed-2.png` (1190 × 1322), user-selected option 2.
- Final browser-rendered implementation: `qa/desktop-final-full.png` (1190px wide).
- State: homepage, profile collapsed, contact dialog closed, top of page. Viewport 1190 × 1450 used to capture the complete implementation; source uses the same width. Height difference reflects the requested profile disclosure added after source selection.
- Full-view combined evidence: `qa/comparison-final.png`.
- Focused typography comparison: `qa/typography-comparison.png`.
- Mobile evidence: `qa/mobile-final.png`, `qa/mobile-bottom.png` (390 × 844 viewport), `qa/contact-mobile.png`, `qa/profile-mobile.png`.
- Tablet evidence: `qa/tablet.png` (768 × 1024 viewport).
- Minimum width: DOM bounds checked at 320px, no horizontal overflow or clipped links/buttons/headings.
- Browser: Codex in-app browser. The early fullPage mobile capture incorrectly reflowed the image; those mobile-v1/v2 artifacts were discarded as evidence. Final mobile evidence uses live viewport captures.

## Required fidelity surfaces

1. **Fonts / typography**: Noto Sans JP Variable, self-hosted, heavy display weight (font range clamps to 900), readable medium-weight body. First Dela Gothic One attempt was too squat and was replaced. Exact synthetic glyph shapes in the image are not a real supplied font; the final upright heavy Japanese family preserves the hierarchy, two-line desktop hero, black manifesto and orange emphasis. Slight character-shape and quote-mark differences are acceptable P3.
2. **Spacing / layout**: Header 52px, hero 527px, manifesto 166px at 1190px. Hero boundary matches source at ~579px. Two service columns narrowed to match reference. The representative profile is a compact disclosure that adds ~50px to the page, an intentional user-requested content addition. Mobile nav collapses; hero and manifesto reflow without overflow.
3. **Colors / tokens**: White, near-black, vermilion. Primary button darkened to #da3a15 to give white small text 4.57:1 contrast. Small orange navigation text #d83713. Large display accent #e83d16. Matte photographic paper texture retained; gradients are not used. Color adjustment for accessibility is intentional.
4. **Image quality / assets**: Original supplied logo is used unchanged with correct ratio and white ground. Three real built-in Image Gen paper assets (desktop hero, mobile hero, manifesto band) were inspected and included. WebP encoding reduced decorative assets to ~227KB combined, preserving the visible paper texture. No handmade CSS/SVG substitute imagery. Icons are from Phosphor.
5. **Copy / content**: Core approved hero and BOOTH wording retained. IT相談・受託開発 prominent, fonts secondary. Representative 冨田 和臣 and supplied profile are verbatim. BOOTH destination and email match user input. No invented prices, achievements, clients, promises or dated footer.

## Comparison history and fixes

### Iteration 1 — blocked

Evidence: `qa/comparison-v1.png`, `qa/desktop-v1.png`.
- P1: Dela Gothic One too squat/heavy, headline and manifesto visually narrow. Replaced with Noto Sans JP and adjusted sizing/spacing.
- P2: Hero boundary ~605px vs source ~579px; service columns overly wide. Reduced header/hero excess, narrowed columns, tightened service spacing.
- P2: Orange period overlapped the orange paper corner. Moved manifesto background down so period is legible on black.

### Iteration 2 — blocked

Evidence: `qa/desktop-v2.png`, initial live mobile captures.
- Typography/layout fixes visibly improved fidelity. Manifesto period still overlapped the corner; moved the background further down.
- Mobile desktop background crop hid paper; generated a portrait-specific edge asset.
- P2 accessibility: original button orange had 4.11:1 contrast for small white text. Darkened functional controls to 4.57:1.
- Mobile service paragraphs had isolated last characters. Added mobile-only semantic line breaks and balanced hero paragraphs.

### Iteration 3 — passed

Evidence: `qa/comparison-final.png`, `qa/typography-comparison.png`, `qa/mobile-final.png`, `qa/mobile-bottom.png`.
- All earlier P1/P2 issues fixed and visually rechecked.
- No further visual fixes after the final comparison.

## Interaction checks

- Hero CTA opens a labelled native dialog. Email address and mailto subject inspected against user input.
- Copy address action displays success; no actual email was sent.
- Escape closes dialog and restores focus to the initiating button.
- Mobile menu opens; service link scrolls to correct section and closes menu.
- Profile disclosure opens and reveals supplied professional history.
- BOOTH anchors use the exact supplied URL, a new tab, and noreferrer.
- Footer contact controls use the same working dialogue; controls have focus styles and mobile tap areas.
- Browser console: no warnings/errors during verification.
- Build: production build succeeds.

## Follow-up polish

- P3: Generated reference type contours differ from an actual web font. Current font is a close accessible implementation, not a rasterized heading.
- External mail application's behavior depends on visitors' device configuration. A copyable address is provided as fallback.
- DNS and HTTPS provisioning are deployment steps and are tracked separately from design fidelity.
