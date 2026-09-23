# CRA Homepage Specification: Current Implementation

Last reconciled with local source: 23 September 2026.

This document records the current homepage at `index.html`, its shared `styles.css`, assets, copy, and inline JavaScript. It supersedes earlier V4 instructions wherever those instructions conflict with this implementation. It describes the local working tree, not a verified production deployment.

## 1. Purpose, audience, and voice

Chisenga Risk & Automation helps business owners simplify repetitive work, recover missed opportunities and lost margins, and reclaim time and energy. The current offer is broader than insurance: practical business automation informed by actuarial science and data analysis.

The homepage should feel welcoming, attentive, and technically capable. Use a warm “we” voice. Respect the owner's understanding of their business, explain technical work through everyday outcomes, and reassure them that they do not need a perfectly organised setup before talking to CRA.

Prioritise time saved, fewer missed follow-ups, less duplication, healthier margins, and more room for customers, family, and life outside work. Keep the writing professional and specific without clinical language such as “diagnose operational friction.” Avoid promises of fully autonomous operation, job elimination, guaranteed revenue, or results that are not supported by evidence.

Use no em dashes in new copy. Preserve the approved wording below unless a new copy change is requested.

### Booking experience

All four homepage booking links use:

`https://cal.com/cra-cal/workflow-mapping-session`

The CTA label is **Let’s Talk**. Locations: desktop navigation, mobile drawer, hero, and closing invitation. All retain `target="_blank"` and `rel="noopener noreferrer"`. The mobile drawer link is plain text; the other three use button styling.

The conversation lasts 45 minutes, according to the owner's supplied booking description. Visitors are asked to join from a computer for screen sharing. The booking service is external; the homepage has no embedded calendar or submission form.

Tone reference supplied by the owner, not a second block to add to the page:

> Let's untangle the day-to-day together. In 45 minutes, we'll chat about your setup, find what's draining your energy, and map out a simpler way to run things. I’m invested in you, not just your business. Please join from a computer so we can share screens.

## 2. Architecture and file ownership

- Plain semantic HTML, one shared CSS file, and minimal inline vanilla JavaScript.
- No framework, package build, bundler, or external animation library.
- GitHub Pages remains the intended deployment platform. `CNAME` contains `cra.software`.
- `index.html` is the current homepage and contains the menu, reveal, navigation scroll-state, and hero parallax scripts.
- `styles.css` is the actual stylesheet filename. References in older requests to `style.css` mean this existing file; do not create a second stylesheet.
- `Fonts/` supplies local Basique Pro fonts. `A.png` supplies the decorative hero artwork.
- `CRA Favicon.png` is the active favicon asset.
- `privacy.html` and `terms.html` are linked from the footer.
- `how-it-works.html` still exists as an older insurance-focused page. It is not the current homepage's approach section and is not linked from the homepage.
- The six former individual service landing pages are absent.
- The homepage has no theme switcher, stat counters, toolkit chips, pricing section, email contact link, or GitHub footer link.

Existing changes in the working tree must not be discarded during future implementation. Updating this document does not publish the site.

## 3. Current design system

The visual direction is warm, polished, and approachable: a stone canvas, bold geometric sans-serif headings, a faded hero illustration, rounded methodology blocks, and restrained movement.

Earlier serif typography, dark full-page canvas, periwinkle-to-purple CTA gradients, amber accents, and the two-column hero are superseded. Do not reintroduce them. Avoid bento layouts or neon effects. The green receipt dot has an intentional, small glow; this is distinct from large glowing panels.

### Colour tokens and usage

The current root variables are:

```css
--bg: #ece7de;
--bg-module: #f4f0e8;
--ink: #111111;
--muted: #111111;
--line: #c4bdb0;
--accent: #5c4fd4;
--graphite: #1a1a1a;
--periwinkle: #c8cfff;
--on-dark: #ece7de;
--radius: 3px;
--max: 1160px;
```

Additional literal colours:
- `#7692e4`: CTA fill, hero highlight, pipeline conveyor, and logo hover.
- `#ffffff`: MAP/EXTEND panels, pipeline nodes, and receipt.
- `rgba(200, 207, 255, 0.3)`: tag backgrounds.
- `rgba(17, 17, 17, 0.03)`: pipeline shell.
- `#10B981`: receipt status dot.
- `#b7b0a4`: supporting text in the graphite closing band.

`--muted` currently equals the main text colour; its name does not imply a lighter grey. The violet accent remains for label rules and fit checkmarks. Cascade detail: `.section p` overrides paragraph label/tag colours, and `.module p` sets card paragraph/tag size to `0.98rem`. These are current implementation facts, not new styling requirements.

### Typography

Five local **WOFF**, not WOFF2, faces are declared at the beginning of the stylesheet:

- Thin, 100: `Fonts/Basique_4.woff`.
- Light, 300: `Fonts/Basique_3.woff`.
- Regular, 400: `Fonts/Basique_2.woff`.
- Bold, 700: `Fonts/Basique_1.woff`.
- Black, 900: `Fonts/Basique.woff`.

Every face uses `font-family: "Basique Pro"`, normal style, and `font-display: swap`. Body, H1/H2/H3, logo, native buttons, and CTA links explicitly use `"Basique Pro", -apple-system, sans-serif !important`.

- Body: `1.0625rem`, line-height `1.65`.
- H1: `clamp(2.6rem, 7vw, 4.5rem)`, weight 900, line-height 1.1.
- Desktop hero H1 at 768px and wider: `4.5rem`.
- H2: `clamp(1.85rem, 4vw, 2.65rem)`.
- H3: `1.35rem`.
- H2/H3: weight 700, line-height 1.15.
- Headings: letter-spacing `-0.02em`, graphite `#111111`, except light headings in the closing band.
- `.text-highlight`: `#7692e4`.
- `.micro`: `0.875rem`, top margin 1rem, max-width 28rem.

IBM Plex Mono remains a Google Fonts dependency at weights 400 and 500 for labels and tags. It is not the methodology body font. Homepage Google Fonts imports no longer request Plus Jakarta Sans or Source Sans 3.

### Containers and spacing

- `.wrap`: `width: min(90%, 1160px)`, centred.
- `.narrow`: max-width 40rem.
- Major `.section` blocks: 120px vertical padding and a 1px top divider.
- Hero and closing band also use 120px vertical padding by default.
- Hero drops to 88px vertical padding below 768px.
- Tags are inline blocks, 9999px radius, 4px 12px padding, mono uppercase text, and 1rem bottom margin.
- Primary buttons use 9999px radius, blue fill/border, cream text, weight 600, `0.9rem` text, and `0.75rem 1.4rem` padding.
- Nav button is smaller: `0.8rem` text and `0.45rem 0.95rem` padding.
- Button hover translates upward 3px over 0.2 seconds, without a glow.

## 4. Page structure and exact approved copy

Keep this order: header/navigation, hero, day-to-day, approach, work examples, working with us, fit, closing invitation, footer.

Navigation labels and targets:
- Approach → `#approach`.
- Systems → `#systems`.
- Fit → `#fit`.
- Let’s Talk → the booking URL above.

The visible nav still says “Systems” even though the destination section label is “OUR WORK.” Preserve stable anchor IDs.

The text below is the current approved copy, in reading order. Paragraph breaks represent separate content elements, including labels and tags.

### Hero

> Less busywork. More room for what matters.

> We help you untangle the everyday work that takes more time and energy than it should. Together, we build practical systems that reduce wasted effort, recover missed opportunities, and give you room to focus on your customers and your life outside work.

> A 45-minute conversation about what’s draining your energy and how we can make things easier.

CTA: **Let’s Talk**.

### The day-to-day (#bottleneck)

> THE DAY-TO-DAY

> The little things can take over your day.

> Following up with an enquiry. Copying details between tools. Checking that nothing has been missed. Each task seems small, until they fill your day and follow you home. We look closely at where your time and money are slipping away, then help take that work off your plate.

### Our approach (#approach)

> OUR APPROACH

> First, we listen. Then, we make things simpler.

> You know your business. We bring a fresh pair of eyes and the technical skill to connect the pieces. Together, we decide what is worth changing and what is already working well.

> 01 MAP

> We start with your day-to-day. You show us what happens, where things get held up, and what keeps landing back on your desk. Together, we choose a clear place to start.

> 02 BUILD

> We build around the tools and routines you already use. We handle the technical work, explain the changes clearly, and focus on saving time and keeping valuable opportunities from slipping away.

> New Enquiry

> Find the Right Person

> Save the Details

> Enquiry passed along

> 03 EXTEND

> We check what is working and refine what needs attention. As your business changes, we help the system keep up, with improvements guided by the results you can see.

### Our work (#systems)

> OUR WORK

> Practical systems. Everyday relief.

> CLIENT WORK

> Reconnect with past customers

> A text-message and booking system for a field service business, helping past customers hear from the team when it is time to book again.

> BUILT FOR OUR BUSINESS

> Know who to follow up with

> A system we use to organise prospect lists and understand which enquiries are worth pursuing, so follow-up starts with a clearer picture.

> IN USE IN OUR BUSINESS

> Make the first conversation easier

> An automated calling system we use to ask initial questions and direct promising enquiries to the right next step.

### Working with us (#firm)

> WORKING WITH US

> Your business matters. So does the person running it.

> We take time to understand what you are carrying before suggesting what to change. We work month-to-month, agree on a clear measure of progress, and handle the technical details so you can stay focused on your customers and your team.

> Our background in actuarial science and data analysis brings care and rigour to the work. We look at where time and money are being lost, build around the evidence, and measure the difference. The aim is a business that runs more smoothly and asks less of you.

### Fit (#fit)

> IS THIS FOR YOU?

> A good place to start if…

> The same repetitive tasks keep taking time away from customers, your team, or home.

> Missed follow-ups, duplicate work, or delays are costing you money.

> You want a simpler way of working, with someone to help you figure it out.

> You are ready to share how things work today, even if it feels a little messy.

### Closing invitation (#book)

> Let’s untangle the day-to-day together.

> In 45 minutes, we’ll talk about your setup, find what is draining your energy, and map out a simpler way to run things. We care about you as well as your business. Please join from a computer so we can share screens.

CTA: **Let’s Talk**.

### Hero highlight markup

```html
<h1>Less busywork. More room for <span class="text-highlight">what matters.</span></h1>
```

### Work-example provenance

The first example is client work. The second and third describe CRA's own systems. Do not rewrite internal work as a client case study. The former 20% retention claim was removed, as was the pipeline's “0.2s” execution claim.

### Footer

Text:
- Chisenga Risk & Automation (CRA)
- St. Louis, Missouri

Links:
- LinkedIn: `https://www.linkedin.com/in/ewetsechisenga/`, new tab with noopener/noreferrer.
- Privacy Policy: `privacy.html`.
- Terms of Service: `terms.html`.

There is no visible copyright year in the current footer.

## 5. Navigation, hero, and responsive layouts

### Fixed navigation

`.nav` is fixed to top/left 0, width 100%, z-index 9999. Its default background is transparent with a thin bottom border. Background colour, backdrop filter, and shadow transition over 0.3 seconds.

On load and on passive scroll events, JavaScript toggles `.nav-scrolled` when `window.scrollY > 50`. The scrolled state applies:
- `rgba(236, 231, 222, 0.95)` background with `!important`.
- 12px backdrop blur.
- `0 4px 20px rgba(0,0,0,0.05)` shadow.

The row has a minimum height of 4rem. Desktop links display from 768px upward. Below that width, the hamburger controls the fixed drawer at top 4rem, z-index 9998. Drawer links close the menu. The button updates `aria-expanded` and its open/close label.

The CRA mark remains a homepage anchor, with a span around each letter and an accessible homepage label. It is not a non-clickable div. Logo hover changes colour to blue and letter spacing to 0.1em. Individual letters run `idleWave` every six seconds with delays 0, 0.15, and 0.3 seconds; each rises 4px briefly and settles. Desktop nav underlines expand from the centre on hover or keyboard focus.

### Watermark hero

There is one copy layer and one decorative background layer, not a two-column layout. The hero uses relative positioning, isolation, hidden overflow, min-height 90vh, flex alignment, and the spacing above.

- Copy width: `min(100%, 42rem)`.
- Hero inner wrapper: z-index 1; min-height `clamp(28rem, 54vw, 42rem)`.
- Subheadline: max-width 38rem and 2rem bottom margin.
- Artwork wrapper: absolute; top/left 50%; width 140%; min-width 1200px; z-index -1; transform `translate(-30%, -50%)`; pointer events disabled.
- Image: width 100%, automatic height, opacity 0.35, multiply blending.
- At 768px and below: image opacity 0.15.
- Below 768px: hero inner minimum height 31rem and top-aligned content.

The markup uses `aria-hidden="true"` on the artwork wrapper and empty image alt text. The background asset is `A.png`, a 1536 × 1024 PNG.

Parallax uses a passive scroll listener and requestAnimationFrame scheduling. It sets the wrapper's independent CSS `translate` to `0 scrollY*0.12px`, retaining the base transform. It is skipped when reduced motion is requested at page load.

### Other section layouts

- Day-to-day: narrow centred container with left-aligned content.
- Work examples: equal cards in a single column by default and three columns from 768px. Gap 1.25rem; top margin 2.25rem; warm module fill, 1px border, 3px radius, and 1.5rem 1.4rem padding.
- Working with us: stacked by default; `1fr 1.15fr` columns with 3.5rem gap from 768px.
- Fit: one column by default; two columns from 768px. Four text items with small CSS checkmarks.
- Closing band: graphite background, centred content, max-width 32rem. Current order is heading, button, supporting paragraph.
- Footer: stacked by default; `1fr auto auto` grid from 768px.

## 6. Methodology and Living Pipeline

### Shared step treatment

An ordered `.ladder` list holds 01 MAP, 02 BUILD, and 03 EXTEND. It is always a vertical stack, with 1.5rem gap, 1.75rem left padding, and 0.35rem left margin.

All three descriptions use exactly `class="ladder-copy"`: Basique Pro, 1.02rem, weight 400, line-height 1.65, 0.35rem top margin. There is no separate BUILD paragraph font-size or monospace override. Each step is a non-interactive content block with 40px corners and 3rem padding. MAP and EXTEND are white; BUILD is periwinkle.

The main left timeline is a 2px-wide absolute `::before` element, not a border. It uses a repeating vertical gradient with periwinkle for 4px and transparent space through 12px. Its background size is 2px 12px. `vertical-conveyor` animates background-position-y from 0 to 100% over 15 seconds linearly and infinitely.

### Pipeline components

The BUILD diagram has the accessible description:

> A new enquiry reaches the right person and its details are saved

Three white pills contain inline envelope, filter, and database icons, respectively. The SVG icons are decorative. The pipeline is illustrative, not a live integration or a clickable interface.

- Wrapper: 2rem top margin, max-width 34rem; 1.5rem top margin below 768px.
- Shell: flex, relative positioning, 2rem padding, 24px radius, subtle dark tint.
- Nodes: flex alignment centred vertically and horizontally, 10px icon gap, 14px 28px padding, minimum height 3rem, 9999px radius.
- Node text: Basique Pro, weight 700, line-height 1.2, size `clamp(0.64rem, 1.5vw, 0.78rem)`; labels do not wrap.
- Nodes use `flex: 0 0 auto`, relative positioning, z-index 1, and a soft shadow.
- Icons are 1rem squares using currentColor strokes.

At 769px and wider, the nodes are horizontal. A single SVG path sits behind them at z-index 0, vertically centred. It uses blue `#7692e4`, stroke width 2, round linecaps, and dasharray 4 8. `workflow-flow` moves dash offset from 100 to 0 over 15 seconds, linearly and infinitely.

At 768px and below, the node containers become columns with 20px gaps. The horizontal SVG is hidden. A centred 2px pseudo-element behind the nodes uses a blue/transparent repeating gradient, 4px coloured per 12px repeat, animated downward with `workflow-vertical-flow` from background-position-y 0 to 100% over 15 seconds.

The white receipt below reads **Enquiry passed along**. It has a 9999px radius, 0.45rem 0.75rem padding, 0.75rem bold Basique text, and a 0.5rem green dot. The dot pulses every 1.8 seconds, scaling to 1.2 with a subtle glow. No JSON box or execution-time claim remains.

## 7. Motion and accessibility behavior

- Smooth anchor scrolling is enabled on the HTML element.
- Existing `.reveal` wrappers cover major section content, all three methodology steps, and all three work cards.
- Initial state: opacity 0, translateY(30px), transition all 0.8s cubic-bezier(0.16, 1, 0.3, 1).
- IntersectionObserver threshold 0.1 adds `.in-view`, then unobserves the element. Reveals occur once per page load.
- Active state: opacity 1 and translateY(0).
- Reveals are applied to content wrappers/cards, not literally every section element.
- Reduced-motion CSS sets smooth scrolling to auto, animation and transition durations to 0.01ms, and animation iteration count to one.
- Semantic header, labelled navigation, main, sections, ordered methodology list, articles, list items, and footer are retained.
- SVG decoration and hero artwork are hidden from assistive technology; text remains real HTML.
- Preserve keyboard access to links and the native menu button.

Current limitations: reveal content depends on JavaScript; there is no no-JavaScript reveal fallback. The mobile menu toggles and closes on link selection, but does not currently implement Escape dismissal or a focus trap. Do not claim these features are implemented.

## 8. Favicon and asset policy

The selected favicon is the **wide blue CRA lettering** version from the owner's 09:42 attachment. The later square white-backed 09:57 version was explicitly reverted.

- Active filename: `CRA Favicon.png`.
- Current dimensions: 1774 × 887, RGBA PNG.
- Source attachment: `ChatGPT Image Sep 23, 2026, 09_42_22 AM.png`.
- SHA-1 for identification: `dd49569c224c79e9bb42c3446fc8177b57e83409`.
- HTML URL: `CRA%20Favicon.png`, encoding the space.
- All four HTML pages reference this favicon.
- Homepage and legacy deep-dive also use it as their apple-touch-icon.
- The older `favicon.png` asset is not the selected icon.

Replace the contents of the active filename when an updated favicon is approved. Do not automatically crop, square, redesign, or switch back to an earlier attachment. Browser favicon caches can delay the visible effect of an asset replacement.

## 9. Metadata, structured data, and analytics

Title, Open Graph title, and Twitter title all use:

> Chisenga Risk & Automation | Less Busywork. More Room for What Matters.

Meta description, Open Graph description, Twitter description, and JSON-LD description all use:

> We help business owners simplify everyday work with practical automation that saves time, reduces wasted effort, and makes room for customers and life outside work.

Additional current metadata:
- Open Graph URL: `https://cra.software/`.
- Open Graph type: `website`.
- Twitter card: `summary_large_image`.
- Author: Ewetse Chisenga.
- Robots: `index, follow`.
- UTF-8 charset and responsive viewport.
- No dedicated social preview image or canonical link is currently defined.

JSON-LD uses schema.org `ProfessionalService`, the CRA business name, `https://cra.software`, founder Ewetse Chisenga, United States service area, and a PostalAddress with St. Louis, MO. Service types remain Workflow mapping, Process automation, and Operational systems.

Google Analytics is retained via async gtag.js and measurement ID `G-YFLQ71NZKJ`. The document does not introduce additional tracking, forms, or services.

## 10. Adjacent pages and known verification gaps

These are current-state notes, not instructions to silently expand future homepage edits:

- `how-it-works.html` still contains the earlier insurance offer, old booking URL, theme-toggle markup, and obsolete homepage anchor targets. It shares the current stylesheet but has not been migrated to the present design.
- Privacy and Terms still have “Map My Workflow” navigation CTAs pointing to the older `/15min` booking URL. They do not contain the homepage scroll-state/menu scripts.
- Those three pages still import older Google font families in addition to IBM Plex Mono, even though the shared stylesheet now specifies local Basique Pro.
- Homepage copy and metadata were refreshed without modifying those pages. Favicon replacements apply across all of them through the shared asset.
- The longer, non-wrapping pipeline labels have not been visually verified at desktop and mobile widths. Fixed pill padding, non-shrinking nodes, and the 34rem wrapper may produce overflow and need a separately authorised layout adjustment.
- At exactly 768px, desktop nav/cards coexist with the mobile pipeline and faded hero artwork. This follows the current breakpoints.
- Percentage-based vertical background animations depend on element height. Their perceived speed and loop continuity, and the SVG loop's continuity, need browser verification; a 15-second duration alone is not proof of a seamless conveyor.
- Prior checks covered copy, booking destinations, section anchors, JSON-LD parsing, and diff whitespace. Browser preview could not launch during the copy refresh. Do not describe the current layout as fully visually tested.
- No production deployment was verified during this documentation update.

## 11. Acceptance checklist for future changes

1. Preserve exact current copy unless a copy change is requested; retain all stable section IDs.
2. Keep four homepage “Let’s Talk” links pointed at the current workflow-mapping-session URL, with new-tab/security attributes.
3. Keep the local Basique font mapping and shared methodology description class intact.
4. Preserve the latest accepted wide blue favicon under its unchanged filename.
5. Check desktop and mobile layouts at 1440, 1024, 769, 768, 390, and 320px, including long labels, tags, headline wrapping, and the closing invitation.
6. Verify that no horizontal overflow occurs, particularly in BUILD. Report issues rather than silently rewriting approved labels.
7. Scroll through reveals, fixed-nav translucency, logo motion, hero parallax, and both conveyor orientations. Check reduced-motion behavior.
8. Test mobile menu opening, closing, link navigation, and keyboard access; verify fixed-nav overlap at anchor destinations.
9. Check local asset loading, four booking links, footer destinations, metadata consistency, and valid JSON-LD.
10. Confirm no em dashes or removed performance claims have returned.
11. Use `git diff --check` and inspect the change scope. Keep deployment build-free and do not publish without an explicit publishing request.

This document is the implementation reference for the current homepage. Known gaps above are intentionally distinguished from completed features.
