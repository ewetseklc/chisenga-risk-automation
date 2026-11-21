# Periwynk rebrand and review fixes (21 November 2026)

Branch: `periwynk-preview`. The live version is tagged `pre-periwynk-2026-11-21`, which hasn't been touched. Nothing has been pushed or deployed, and DNS and `CNAME` are unchanged. Spec: `site-review-2026-11-21/review.md`.

Format: OLD -> NEW. "(new)" means added text and "(removed)" means deleted text.

---

## Every page (shared)

### Header
- Logo: "CRA" text logo (animated letters) -> flower mark A + "Periwynk" wordmark (`/assets/brand/periwynk-mark-a.svg`, `/assets/brand/periwynk-wordmark-colour-on-cream.svg`). Alt text: "Periwynk". Link label: "Chisenga Risk & Automation home" -> "Periwynk home".
- Nav: "Approach" / "Systems" / "Fit" -> "Approach" / "Examples" / "About" / "Fit" / "Blog".
- Nav button: "Let’s Talk" (home) and "Map My Workflow" (Privacy/Terms) -> "Book a free 15-minute call".
- Mobile menu (hamburger) now on every page, including Privacy, Terms and the blog. It closes when you pick a link or press Escape.
- Desktop nav now shows from 960px (it was 768px) so five links and the longer button fit. Below 960px the menu button is used.

### Footer
- "Chisenga Risk & Automation (CRA)" -> "Periwynk LLC"
- "St. Louis, Missouri" -> "St. Louis, Missouri" (unchanged)
- (new) "formerly Chisenga Risk & Automation"
- Links: "LinkedIn" / "Privacy Policy" / "Terms of Service" -> "Privacy" / "Terms" / "Blog" / "LinkedIn"

### Head and metadata
- Old CRA favicon links removed (the `CRA Favicon.png` and `favicon.png` files are still in the repo). The logo pack's favicon snippet was added, along with `site.webmanifest` and `theme-color`.
- Canonical, og:title/description/url/image (absolute URL `https://cra.software/assets/og/periwynk-launch-1200.png`, 1200x1200), og:site_name, twitter card/title/description/image. Every page has an RSS `<link rel="alternate">`.
- Reveal animation fallback: an inline head script adds class `js` to `<html>`, and `.reveal` content is only hidden under `.js`. Without JavaScript everything shows (checked in headless Chrome with JS off).
- Button text on the blue CTA: cream -> #111111 (contrast).
- All pages now load one shared script, `/assets/site.js` (menu, reveal, nav background, hero parallax).

---

## Homepage (index.html)

### Metadata
- `<title>`: "Chisenga Risk & Automation | Less Busywork. More Room for What Matters." -> "Periwynk | Less busywork. More room for what matters."
- meta/og/twitter description: "We help business owners simplify everyday work with practical automation that saves time, reduces wasted effort, and makes room for customers and life outside work." -> "I help owners of small service businesses spend less time on admin, like answering enquiries, chasing quotes and following up with customers. Start with a free 15-minute call."
- JSON-LD: name "Chisenga Risk & Automation" -> "Periwynk LLC". Added alternateName "Chisenga Risk & Automation", logo, image and sameAs LinkedIn. founder is now a Person (Ewetse Chisenga, alternateName Evan Chisenga, LinkedIn). address now has addressCountry US. serviceType adds "Data analysis" and "Business process analysis" (no website building). description -> "Helping owners of small service businesses spend less time on admin, like answering enquiries, chasing quotes and following up with customers."
- Google Analytics: unchanged.

### Hero
- H1: unchanged ("Less busywork. More room for what matters.").
- Subhead: "We help you untangle the everyday work that takes more time and energy than it should. Together, we build practical systems that reduce wasted effort, recover missed opportunities, and give you room to focus on your customers and your life outside work." -> "I help owners of small service businesses spend less time on admin, like answering enquiries, chasing quotes and following up with customers. We look at how the work happens now, then I set up the fixes with you."
- Button: "Let’s Talk" (cal.com) -> "Book a free 15-minute call" (Calendly).
- Micro line: "A 45-minute conversation about what’s draining your energy and how we can make things easier." -> "A free 15-minute call to find one thing eating up your week."

### The Day-to-Day
- Label and H2 unchanged ("THE DAY-TO-DAY", "The little things can take over your day.").
- Last sentence of the paragraph: "We look closely at where your time and money are slipping away, then help take that work off your plate." -> "I look closely at where your time and money are going, then help take that work off your plate." (We -> I, and "slipping away" is cut. The rest of the paragraph is word for word.)

### Approach
- Label: "OUR APPROACH" -> "MY APPROACH"
- H2: "First, we listen. Then, we make things simpler." -> "First, I listen. Then, I help make things simpler."
- Lead: "You know your business. We bring a fresh pair of eyes and the technical skill to connect the pieces. Together, we decide what is worth changing and what is already working well." -> "You know your business. I bring a fresh pair of eyes and the technical skill to connect the pieces. We decide together what is worth changing and what is already working well."
- 01 MAP: "We start with your day-to-day. You show us what happens, where things get held up, and what keeps landing back on your desk. Together, we choose a clear place to start." -> "It starts with a free 15-minute call to find one thing eating up your week. If it looks useful, the next step is a paid mapping session. You show me what happens day to day, where things get held up, and what keeps landing back on your desk. Then we choose a clear place to start."
- 02 BUILD (label kept, your call): "We build around the tools and routines you already use. We handle the technical work, explain the changes clearly, and focus on saving time and keeping valuable opportunities from slipping away." -> "I set up the fixes with you, starting with the tools and routines you already use. I handle the technical side and explain each change clearly, so you save time and fewer enquiries get missed."
- Pipeline animation and its labels: unchanged.
- 03 EXTEND: "We check what is working and refine what needs attention. As your business changes, we help the system keep up, with improvements guided by the results you can see." -> "After that, ongoing help is optional. I check what is working, fix what needs attention, and help things keep up as your business changes."

### Our Work -> Examples (section id `#systems` -> `#examples`)
- Label: "OUR WORK" -> "EXAMPLES"
- H2: "Practical systems. Everyday relief." -> "Examples of what I set up"
- (new) note: "These are examples of the kind of thing I set up, including tools I use in my own business. They are not client case studies."
- Card 1 tag: "CLIENT WORK" -> "EXAMPLE"
- Card 1 body: "A text-message and booking system for a field service business, helping past customers hear from the team when it is time to book again." -> "An example of the kind of system I set up: text messages and a booking link that remind past customers when it is time to book again."
- Card 2 tag: "BUILT FOR OUR BUSINESS" -> "IN MY OWN BUSINESS"
- Card 2 body: "A system we use to organise prospect lists and understand which enquiries are worth pursuing, so follow-up starts with a clearer picture." -> "A system I use to organise prospect lists and see which enquiries are worth following up, so I start with a clearer picture."
- Card 3 tag: "IN USE IN OUR BUSINESS" -> "IN MY OWN BUSINESS"
- Card 3 body: "An automated calling system we use to ask initial questions and direct promising enquiries to the right next step." -> "An automated calling system I use to ask the first questions and point promising enquiries to the right next step."
- Card headings unchanged ("Reconnect with past customers", "Know who to follow up with", "Make the first conversation easier").

### About (new section, `#about`, placed just before Working With Me)
- (new) label "ABOUT ME", H2 "Hi, I’m Evan."
- (new) "I’m Ewetse Chisenga, and most people call me Evan. I’m based in St. Louis, Missouri, I studied Actuarial Science, and I work one to one with small business owners. I’d much rather talk in person or on LinkedIn than over a form, so come and say hello."
- (new) link "Find me on LinkedIn"
- (new) round photo placeholder (cream circle with the faded flower mark), waiting for `/assets/evan.jpg`

### Working With Us -> Working With Me
- Label: "WORKING WITH US" -> "WORKING WITH ME"
- H2: unchanged ("Your business matters. So does the person running it.")
- Para 1: "We take time to understand what you are carrying before suggesting what to change. We work month-to-month, agree on a clear measure of progress, and handle the technical details so you can stay focused on your customers and your team." -> "I take time to understand what you are carrying before suggesting what to change. Ongoing help is month-to-month. We agree on a clear measure of progress, and I handle the technical details so you can stay focused on your customers and your team."
- Para 2 (actuarial): "Our background in actuarial science and data analysis brings care and rigour to the work. We look at where time and money are being lost, build around the evidence, and measure the difference. The aim is a business that runs more smoothly and asks less of you." -> "My background in actuarial science and data analysis brings care and rigour to the work. I look at where time and money are being lost, work from the evidence, and measure the difference. The aim is a business that runs more smoothly and asks less of you."
  - Note: this goes slightly beyond "we -> I only". The cut list includes "build around the evidence", so I swapped it for "work from the evidence" (the wording from the 26 Oct draft). Everything else is word for word.

### Fit
- Unchanged (label, H2 and all four points, including "even if it feels a little messy").

### FAQ (new section, `#faq`)
- (new) label "FAQ", H2 "A few things you might be wondering."
- (new) "What happens on the free call?" / "It takes 15 minutes. You tell me what is taking up your time, and we find one thing eating up your week. If I can help, I explain what the next step would look like."
- (new) "What does it cost?" / "The first call is free. If it is useful, the next step is a paid mapping session. You can then choose ongoing help if you want it. I can talk you through the price on the call."
- (new) "How involved do I need to be?" / "You show me how the work happens today. I set up the fixes with you and explain what I am changing as I go."
- (new) "Do I have to change the tools I use?" / "I start with what you already use. If I think something different would help, I explain why and talk it through with you before changing anything." (from the 26 Oct draft, with "a different tool" changed to "something different")
- (new) "Can I work with you remotely?" / "Yes. Most of the work happens over video calls, so it doesn’t matter where you are." (your approved answer)

### Closing band
- H2: "Let’s untangle the day-to-day together." -> "Let’s make the day-to-day easier." ("day-to-day" is wrapped in a nowrap span so it no longer breaks as "day- / to-day")
- Button: "Let’s Talk" -> "Book a free 15-minute call"
- Micro: "In 45 minutes, we’ll talk about your setup, find what is draining your energy, and map out a simpler way to run things. We care about you as well as your business. Please join from a computer so we can share screens." -> "In 15 minutes, we talk about how your days go and pick one thing worth fixing first. We care about you as well as your business."
  - "We care about you as well as your business" is kept word for word. I dropped "Please join from a computer so we can share screens" because the free call is now 15 minutes and I don't know whether the Calendly event uses screen sharing. Put it back if it does.

### Links
- All booking links: `https://cal.com/cra-cal/workflow-mapping-session` -> `https://calendly.com/ewetsekchisenga/new-meeting`
- Footer links now use root paths (`/privacy.html`, `/terms.html`, `/blog/`).

---

## Privacy (privacy.html)
- `<title>`: "Privacy Policy | Chisenga Risk & Automation" -> "Privacy Policy | Periwynk"
- (new) meta description: "How Periwynk LLC handles the information you share."
- Header: "CRA" text logo + "Map My Workflow" (cal.com/cra-cal/15min), no mobile menu -> the same header as the homepage (Periwynk logo, nav, "Book a free 15-minute call" via Calendly, working mobile menu).
- Para 1: "Chisenga Risk & Automation collects only the information you choose to share with us, for example when you book a working session or write to us directly. We use that information to respond to you and to operate the engagement you requested." -> "Periwynk LLC collects only the information you choose to share with me, for example when you book a call or message me directly. I use that information to reply to you and to run the work you asked for."
- Para 2: "We do not sell personal information. Analytics on this site may record anonymous usage data. If you want a record deleted or have a question about how we handle data, contact us through the booking page or LinkedIn listed in the site footer." -> "I do not sell personal information. Analytics on this site may record anonymous usage data. If you want a record deleted or have a question about how I handle data, contact me through the booking page or on LinkedIn." ("booking page" links to Calendly)
- (new) "Contact: message me on LinkedIn." (plus a TODO comment for an email address)
- Footer: see shared changes.
- "Last updated": the page didn't have one, so none was added.

## Terms (terms.html)
- `<title>`: "Terms of Service | Chisenga Risk & Automation" -> "Terms of Service | Periwynk"
- (new) meta description: "Terms for working with Periwynk LLC."
- Header: same change as Privacy.
- Para 1: "Work with Chisenga Risk & Automation is scoped in writing..." -> "Work with Periwynk LLC is scoped in writing..." (the rest of the paragraph is unchanged)
- Para 2: "The website copy describes our approach and is not a guarantee of a specific financial outcome. If you have questions about a proposed engagement, raise them in the working session before any build begins." -> "The website copy describes my approach and is not a guarantee of a specific financial outcome. If you have questions about a proposed engagement, raise them on the free 15-minute call before any work begins." ("free 15-minute call" links to Calendly)
- (new) "Contact: message me on LinkedIn." (plus a TODO comment)
- "Last updated": the page didn't have one, so none was added.

## how-it-works.html
- The whole old insurance page (unsourced stats, "30-day pilot", broken nav) -> a tiny redirect stub to `/` (meta refresh 0, canonical, `location.replace`, noindex). Visible text: "This page has moved. Go to the homepage." Nothing links to it any more.

## Blog (all new)
- `/blog/index.html`: label "BLOG", H1 "Notes from Periwynk", intro "Short, plain posts about where the time goes in a small business, and what helps. Written by me, Evan.", "Follow with RSS" link, and a list of posts (title, date, summary). The one entry is marked "Draft".
- `/blog/why-cra-is-now-periwynk/index.html`: "Why CRA is now Periwynk, and what isn’t changing", dated 21 November 2026, byline Evan Chisenga with a photo placeholder. It has a visible DRAFT banner and `<meta name="robots" content="noindex">`, plus og/twitter tags using the launch image. About 280 words. It ends with "Talk to me about this on LinkedIn" and the booking button. The "Why the new name" section is a visible placeholder ("[Evan: add a sentence or two on why you chose the name Periwynk.]") because no reason is on record and I didn't invent one.
- `/blog/_template.html`: a post template with usage notes in a comment. It is noindex with a draft banner by default. GitHub Pages (Jekyll) doesn't publish files whose names start with `_`, so the template stays private.
- `/blog/rss.xml`: RSS 2.0 with the one post.

## Other files
- New: `robots.txt` (allow all, plus a Sitemap line), `sitemap.xml` (home, blog, blog post, privacy, terms; cra.software URLs with a TODO).
- New: `assets/brand/` (mark A, wordmark), `assets/og/periwynk-launch-1200.png`, favicons and `site.webmanifest` in the root, `assets/site.js`.
- `styles.css`: logo, contrast, reveal fallback, nowrap, about/photo, FAQ, legal, blog, draft banner and footer styles. The look, colours, fonts, hero art, cards and pipeline are unchanged.
- `README.md`: rewritten to describe Periwynk and the static GitHub Pages setup. The old text described "AI-powered workflow automation for insurance agencies, TPAs, and mid-market carriers".

---

## TODO for Evan

1. **Switch URLs to periwynk.com** once the domain points here (and update `CNAME` then):
   - `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD url/logo/image)
   - `privacy.html`, `terms.html`, `blog/index.html`, `blog/why-cra-is-now-periwynk/index.html`, `blog/_template.html` (canonical, og:url, og:image)
   - `how-it-works.html` (canonical)
   - `robots.txt` (Sitemap line), `sitemap.xml`, `blog/rss.xml`
2. **Your photo:** save it as `/assets/evan.jpg`, then swap the placeholder div for the `<img>` given in the comment in `index.html` (About section) and `blog/why-cra-is-now-periwynk/index.html` (byline). The template has the same comment.
3. **Contact email:** add one (for example hello@periwynk.com) when the business inbox exists: `privacy.html` and `terms.html`, where the comment sits above the "Contact" line.
4. **Prices (not published):** placeholders in `index.html` under 01 MAP (mapping session), 03 EXTEND (ongoing help) and the FAQ "What does it cost?".
5. **BUILD label:** whether to rename "02 BUILD" is your call (`index.html`, comment in the BUILD card).
6. **Blog post:** rewrite it in your own words and add your reason for the name (`blog/why-cra-is-now-periwynk/index.html`). To publish: delete the DRAFT banner, change robots to `index, follow`, and remove "· Draft" in `blog/index.html`. Check it before `blog/rss.xml` goes live.
7. **Closing band:** decide whether to bring back "Please join from a computer so we can share screens" (see above).

## Not done, and why
- **DSO email** (review action 1, due about 1 Dec): outside the website; still to do.
- **Redirect cra.software -> periwynk.com, DNS, CNAME, push/deploy:** not allowed in this task.
- **Contact email:** not added, as instructed (TODO above).
- **Prices ($999 and monthly):** not published, as instructed.
- **Google Analytics on Privacy, Terms and the blog:** only the homepage had it, and I was told to keep GA as is, so I didn't add it. Add the same tag to the blog pages if you want to track the blog as a funnel.
- **"Last updated" dates:** Privacy and Terms never had one, so there was nothing to update.
- **Blog posts 2 and 3, and a branded og:image per post:** only post 1 was asked for. It uses the ready-made launch image, as the review suggests.
- **Old files left in place:** `CRA Favicon.png`, `favicon.png` and `@V4-Homepage-Spec.md` (the spec mentions CRA but isn't linked from any page). Note that GitHub Pages still serves `@V4-Homepage-Spec.md` publicly; move it out of the repo if you don't want it online.
- **"CRA" still visible** only in the footer "formerly" line, the JSON-LD alternateName and the blog post (its title also appears in the blog list and RSS), as allowed.
- **FAQ on AI** (from the 26 Oct draft): left out to keep the copy away from naming tools, and because positioning on AI is on hold.

## Checks run
- grep across all html/css/xml/txt/js: no em dashes, no " -- ", no "cal.com", no "we build" / "untangle" / "draining" / "slipping away" / "build around", no "$" prices, no "CLIENT WORK", no "our team".
- JSON-LD, RSS and sitemap parse cleanly.
- Headless Chrome, served locally at 1280px and 390px: no horizontal overflow on any page, no console errors, the how-it-works stub lands on `/`, the mobile menu opens on Privacy, and with JS off the content below the hero is visible.
