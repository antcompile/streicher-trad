
You are working in the `/Users/admin/Git/danysbees` repo. Build the complete website for **Dany's Bees** — a family-owned honey business in Barhalioun, Northern Lebanon (beekeeping since the 1980s). Generate every file needed so that `npm install && npm run build && npm run preview` works on the first try. Write complete, production-ready files — no placeholder comments like `// rest of component here` or `...`. Create each file using the Write tool, working through the project structure systematically.

---

## 1. PROJECT OVERVIEW

**Brand:** Dany's Bees
**Domain:** danysbees.com
**Email:** admin@danysbees.com
**Phone:** +961 3 394 824
**WhatsApp:** +9613394824
**Instagram:** @danysbees
**Location:** Barhalioun, North Lebanon

**What this site IS:** A catalog + contact-to-order website with tour booking. Customers browse products and tours, then order via WhatsApp message or phone call. There is NO shopping cart, NO checkout, and NO payment processing.

**What this site IS NOT:** An e-commerce store. Do not build cart functionality, payment integrations, user accounts, or authentication of any kind.

---

## 2. TECHNICAL ARCHITECTURE

### Framework & Tooling
- **Astro 5.x** (static site generator)
- **TypeScript** for type-safe data and components
- **Tailwind CSS 4** for all styling (utility-first)
- **No client-side JS framework** for most pages. Use Astro islands with vanilla JS or Preact **only** for: mobile nav drawer, language switcher, tour date picker
- Output: fully static (`output: 'static'` in astro.config)

### Hosting & Deployment
- **GitHub Pages** with auto-deploy via GitHub Actions
- Generate `.github/workflows/deploy.yml`
- Generate `public/CNAME` containing `danysbees.com`
- Set `site: 'https://danysbees.com'` in `astro.config.mjs`

### PWA
- Generate `public/manifest.webmanifest` with app name in EN/AR/FR
- Simple service worker with cache-first strategy for static assets
- PWA icons at 192px and 512px (use the hexagon+crown+bee logo)
- Include all required `<meta>` tags for iOS and Android installability

### Project Structure (follow exactly)
```
danysbees/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── CNAME
│   ├── manifest.webmanifest
│   ├── sw.js
│   ├── robots.txt
│   ├── favicon.svg            # Hexagon+bee logo as SVG
│   ├── icons/
│   │   ├── icon-192.png       # PWA icon (placeholder)
│   │   └── icon-512.png       # PWA icon (placeholder)
│   ├── images/
│   │   ├── hero/              # Hero background images
│   │   ├── products/          # Product photos (600x600)
│   │   ├── tours/             # Tour gallery photos (800x600)
│   │   ├── about/             # Family/story photos
│   │   └── blog/              # Blog thumbnails (400x300)
│   └── fonts/                 # Self-hosted web fonts
│       ├── PlayfairDisplay-Bold.woff2
│       ├── PlayfairDisplay-Regular.woff2
│       ├── Inter-Regular.woff2
│       ├── Inter-Medium.woff2
│       ├── Inter-SemiBold.woff2
│       ├── NotoNaskhArabic-Regular.woff2
│       ├── NotoNaskhArabic-Bold.woff2
│       ├── NotoSansArabic-Regular.woff2
│       └── NotoSansArabic-Medium.woff2
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileNav.astro     # Slide-in drawer
│   │   ├── LanguageSwitcher.astro
│   │   ├── ProductCard.astro
│   │   ├── TourCard.astro
│   │   ├── BlogCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── SectionHeading.astro
│   │   ├── TrustBadge.astro
│   │   ├── BookingForm.astro
│   │   ├── ContactForm.astro
│   │   ├── NewsletterForm.astro
│   │   └── SEO.astro           # <head> meta, OG, hreflang, JSON-LD
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell with i18n dir/lang
│   ├── pages/
│   │   ├── index.astro         # Redirects to /en/
│   │   └── [lang]/
│   │       ├── index.astro
│   │       ├── products/
│   │       │   ├── index.astro
│   │       │   └── [slug].astro
│   │       ├── tours/
│   │       │   └── index.astro
│   │       ├── about.astro
│   │       ├── blog/
│   │       │   ├── index.astro
│   │       │   └── [slug].astro
│   │       └── contact.astro
│   ├── content/
│   │   ├── config.ts           # Astro content collection schemas
│   │   ├── products/           # One JSON file per product
│   │   ├── tours/              # One JSON file per tour tier
│   │   ├── blog/               # Markdown files with frontmatter
│   │   └── testimonials/       # JSON files
│   ├── i18n/
│   │   ├── en.json
│   │   ├── ar.json
│   │   ├── fr.json
│   │   ├── languages.ts        # Language config and helpers
│   │   └── utils.ts            # useTranslation(), getLocalizedPath()
│   ├── data/
│   │   ├── navigation.ts
│   │   └── siteConfig.ts
│   └── styles/
│       └── global.css          # @font-face, Tailwind imports, base styles
```

---

## 3. DATA LAYER (JSON Content — The "CMS")

The site owner will update products, prices, and content by editing JSON and Markdown files directly in the repo. No external CMS. Mark any unknown values with `// TODO: Replace with actual value` comments.

### Product Schema (generate 6 files in `src/content/products/`)

```jsonc
// src/content/products/wildflower.json
{
  "id": "wildflower",
  "name": {
    "en": "Wildflower Honey",
    "ar": "عسل الأزهار البرية",
    "fr": "Miel de Fleurs Sauvages"
  },
  "price_usd": 23, // TODO: Confirm pricing for each variety
  "weight_kg": 1,
  "description": {
    "en": "A rich, complex blend harvested from the diverse wildflowers of Northern Lebanon's mountain meadows. Each jar captures the unique terroir of our region.",
    "ar": "مزيج غني ومعقد يُحصد من الأزهار البرية المتنوعة في مروج جبال شمال لبنان. كل جرة تحتوي على نكهة فريدة من منطقتنا.",
    "fr": "Un mélange riche et complexe récolté à partir des fleurs sauvages variées des prairies montagneuses du Nord-Liban."
  },
  "tasting_notes": {
    "en": "Floral, complex, with hints of mountain herbs",
    "ar": "زهري، معقد، مع لمسات من أعشاب الجبل",
    "fr": "Floral, complexe, avec des notes d'herbes de montagne"
  },
  "flora_source": {
    "en": "Mixed wildflowers — Northern Lebanon highlands",
    "ar": "أزهار برية مختلطة — مرتفعات شمال لبنان",
    "fr": "Fleurs sauvages mélangées — hauts plateaux du Nord-Liban"
  },
  "season": "spring-summer",
  "in_stock": true,
  "includes_spoon": true,
  "image": "/images/products/wildflower.jpg",
  "badge": null
}
```

Generate all 6 products with this schema:
1. **Wildflower** — spring-summer, floral complex
2. **Thyme** (`zaatar`) — summer, bold herbaceous, badge: "Most Popular"
3. **Citrus** — spring, bright and light, delicate
4. **Honeycomb** — raw cut comb, higher price ~$30, badge: "Raw Comb"
5. **Oak** (`sindian`) — autumn, dark and robust, earthy
6. **Beeswax Products** — candles/blocks, lower price ~$15, different weight

For each product, generate a WhatsApp order URL:
`https://wa.me/96103394824?text=Hi!%20I'd%20like%20to%20order%20{URL-encoded product name in current language}`

### Tour Schema (generate 2 files in `src/content/tours/`)

```jsonc
// src/content/tours/standard.json
{
  "id": "standard",
  "name": {
    "en": "Honey & Hive Experience",
    "ar": "تجربة العسل والخلية",
    "fr": "Expérience Miel & Ruche"
  },
  "tagline": {
    "en": "Get up close with our bees",
    "ar": "تعرف على نحلنا عن قرب",
    "fr": "Approchez-vous de nos abeilles"
  },
  "price_display": {
    "en": "$25 per person",
    "ar": "٢٥$ للشخص",
    "fr": "25$ par personne"
  },
  "duration": "2-3 hours",
  "max_group": 20,
  "availability": "March — October",
  "includes": {
    "en": [
      "Visit the apiary with a family beekeeper guide",
      "Suit up in full professional beekeeper gear",
      "Open live hives and observe the bees at work",
      "Taste multiple fresh honey varieties on-site",
      "Learn the art of traditional Lebanese beekeeping",
      "Photo opportunities in the apiary",
      "A jar of honey to take home"
    ],
    "ar": ["..."],
    "fr": ["..."]
  },
  "description": { "en": "...", "ar": "...", "fr": "..." },
  "image": "/images/tours/standard-tour.jpg",
  "gallery": [
    "/images/tours/gallery-1.jpg",
    "/images/tours/gallery-2.jpg",
    "/images/tours/gallery-3.jpg",
    "/images/tours/gallery-4.jpg"
  ]
}
```

Generate 2 tour tiers:
1. **Standard: "Honey & Hive Experience"** — regular availability, 2-3 hours, $25/person (TODO: confirm price)
2. **Premium: "Honey Harvest Experience"** — few times per year during extraction season, full day, $75/person (TODO: confirm price), includes: everything in standard PLUS hands-on honey extraction with centrifuge, filtering and jarring your own honey, take home a large jar you extracted yourself. Badge: "Limited — By Season Only"

### Blog Content (generate 3 seed posts in `src/content/blog/`)

Create 3 Markdown files with full frontmatter and ~300 words of real content each:
1. `health-benefits-of-raw-lebanese-honey.md` — health/wellness angle
2. `a-day-in-the-life-of-a-lebanese-beekeeper.md` — storytelling, day-in-the-life
3. `understanding-honey-varieties.md` — educational, explains thyme vs oak vs wildflower

Frontmatter schema:
```yaml
---
title: { en: "...", ar: "...", fr: "..." }
date: "2026-04-01"
author: "Dany"
description: { en: "...", ar: "...", fr: "..." }
image: "/images/blog/health-benefits.jpg"
tags: ["health", "honey"]
---
```

### Testimonials (generate 5 placeholders in `src/content/testimonials/`)

```jsonc
{
  "name": "Sarah M.",
  "location": { "en": "Beirut", "ar": "بيروت", "fr": "Beyrouth" },
  "quote": {
    "en": "The best honey I've ever tasted. You can really taste the difference from store-bought.",
    "ar": "أفضل عسل تذوقته في حياتي. تستطيع فعلاً تذوق الفرق عن العسل المُشترى من المتاجر.",
    "fr": "Le meilleur miel que j'ai jamais goûté. On sent vraiment la différence."
  },
  "type": "product", // or "tour"
  "rating": 5,
  "date": "2025-11-15"
}
```

---

## 4. INTERNATIONALIZATION (i18n)

### URL Structure
- `/en/` — English (default, canonical)
- `/ar/` — Arabic
- `/fr/` — French
- Root `/` redirects to `/en/` via a simple `<meta http-equiv="refresh">` or Astro middleware

### Translation Architecture
- Central files: `src/i18n/en.json`, `ar.json`, `fr.json`
- Organized by namespace:
```json
{
  "nav": { "home": "Home", "products": "Our Honey", "tours": "Tours", "about": "Our Story", "blog": "Blog", "contact": "Contact" },
  "hero": { "title": "Pure Honey from the Mountains of Lebanon", "subtitle": "Family-crafted in Barhalioun, Northern Lebanon", "cta_shop": "Shop Honey", "cta_tour": "Book a Tour" },
  "products": { "heading": "Our Honey", "order_whatsapp": "Order on WhatsApp", "order_call": "Call to Order", "per_kg": "per kg", "includes_spoon": "Includes free honey spoon", "bulk": "Ordering for a group or event? Call us for special pricing.", "view_all": "View All Honey" },
  "tours": { "heading": "Visit Our Bees", "book_now": "Book Now", "includes": "What's Included", "availability": "Availability", "max_group": "Max Group Size", "duration": "Duration", "faq": "Frequently Asked Questions" },
  "shipping": { "lebanon": "Free delivery across Lebanon", "europe": "Ships to France & Europe — please allow 1 month for pre-orders", "bulk_note": "Call for group/bulk pricing" },
  "newsletter": { "heading": "Stay in the Hive", "subtitle": "Get updates on new honey harvests, seasonal tours, and beekeeping stories.", "placeholder": "Your email", "button": "Subscribe" },
  "footer": { "copyright": "© 2026 Dany's Bees. All rights reserved.", "tagline": "Pure honey from our family to yours." },
  "common": { "read_more": "Read More", "back": "Back", "loading": "Loading...", "phone": "Call Us", "whatsapp": "WhatsApp" },
  "booking": { "name": "Full Name", "email": "Email", "phone": "Phone Number", "date": "Preferred Date", "group_size": "Group Size", "tour_type": "Tour Type", "message": "Additional Message", "submit": "Submit Request", "success": "Thank you! We'll get back to you within 24 hours.", "prefer_call": "Prefer to call?" },
  "about": { "heading": "Our Story", "section1_title": "The Beginning", "section2_title": "Our Bees & Our Land", "section3_title": "Our Process", "section4_title": "Our Promise" }
}
```

Generate full Arabic and French translations for all keys.

### Arabic RTL — CRITICAL REQUIREMENTS

This is a first-class requirement, NOT an afterthought. When `lang === "ar"`:

1. Set `dir="rtl"` and `lang="ar"` on `<html>`
2. Use Tailwind `rtl:` variant utilities for ALL directional spacing:
   - `ml-4` becomes `ml-4 rtl:ml-0 rtl:mr-4` (or use logical properties: `ms-4`)
   - Prefer Tailwind's logical properties (`ps-`, `pe-`, `ms-`, `me-`) over physical (`pl-`, `pr-`, `ml-`, `mr-`) wherever possible
3. Mirror horizontal layouts: logo moves right, nav flows right-to-left
4. Text alignment: use `text-start` and `text-end` instead of `text-left`/`text-right`
5. Elements that must STAY LTR even in RTL context (wrap with `dir="ltr"`):
   - Phone numbers
   - Email addresses
   - URLs
   - WhatsApp links
   - Prices in USD
6. Arabic fonts:
   - Headlines: **Noto Naskh Arabic** (serif, matches Playfair Display's feel)
   - Body: **Noto Sans Arabic** (clean, matches Inter)
7. Numbers: use Western Arabic numerals (0-9), NOT Eastern (٠-٩) — except in price displays where culturally appropriate
8. Form inputs: set `dir="auto"` on all `<input>` and `<textarea>` elements

Test EVERY component mentally in both LTR and RTL. Common pitfalls: border-radius that should mirror, icon arrows that should flip, flex-row that should reverse.

### French
- Standard LTR, same layout as English
- Same fonts as English (Latin character set)

### Language Switcher
- Display as: `EN | AR | FR` text links in the header
- On click: navigate to the same page in the target language
- Store preference in `localStorage` under key `danysbees-lang`
- On first visit, check `localStorage` → `navigator.language` → fallback to `en`

---

## 5. VISUAL DESIGN SYSTEM

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `gold-500` (Primary) | `#D4941A` | CTAs, highlights, active states |
| `gold-600` | `#B8860B` | Hover states, darker accents |
| `gold-300` | `#F5D78E` | Light gold backgrounds, badge fills |
| `cream` | `#FFF8F0` | Page background (warm, NOT pure white) |
| `cream-dark` | `#F5E6C8` | Alternating section backgrounds |
| `dark` | `#1A1A1A` | Primary text (NOT pure black) |
| `muted` | `#6B6B6B` | Secondary text, captions |
| `olive` | `#5C6B3C` | Earthy accent — badges, tags, nature references |
| `olive-light` | `#E8EDDF` | Olive tint backgrounds |
| `white` | `#FFFFFF` | Card surfaces, overlays |
| `error` | `#C44536` | Form validation errors |
| `success` | `#588157` | Success messages |

Register these as Tailwind theme colors. The overall palette is: warm gold + cream + olive green accents on a warm off-white base.

### Typography

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| Headlines (EN/FR) | Playfair Display | Georgia, serif | 400, 700 |
| Body (EN/FR) | Inter | system-ui, sans-serif | 400, 500, 600 |
| Headlines (AR) | Noto Naskh Arabic | serif | 400, 700 |
| Body (AR) | Noto Sans Arabic | sans-serif | 400, 500 |

Self-host ALL fonts — no Google Fonts CDN calls. Define `@font-face` rules in `global.css`.

Type scale:
- Hero headline: `text-4xl sm:text-5xl md:text-7xl` with Playfair Display Bold
- Section headings: `text-2xl sm:text-3xl md:text-4xl` with Playfair Display Regular
- Sub-headings: `text-xl md:text-2xl` with Inter SemiBold
- Body: `text-base` (16px) with Inter Regular, `leading-relaxed`
- Small/caption: `text-sm` with Inter Regular, text-muted

### Spacing & Layout
- **Whitespace is generous.** Every major section uses `py-16 md:py-24` padding.
- Max content width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` (1152px)
- Full-bleed hero: `max-w-none` with content constrained inside
- Card style: `rounded-2xl shadow-md border border-gold-300/30 bg-white`
- Section separation: alternate between `bg-cream` and `bg-white` backgrounds — no hard divider lines
- **Breathing room between all elements.** If unsure, add more space, not less.

### Visual Motifs
- Subtle honeycomb SVG pattern as a background texture on hero and section accents (very faint, 3-5% opacity)
- Hexagon shapes for icons, badges, and decorative elements
- Organic curves and rounded corners throughout — nothing sharp or corporate
- Photography-forward: large images, not stock illustrations

---

## 6. PAGE-BY-PAGE SPECIFICATIONS

### 6.0 Root Index (`src/pages/index.astro`)
- Simple redirect to `/en/` via `<meta http-equiv="refresh" content="0;url=/en/">`

### 6.1 Homepage (`src/pages/[lang]/index.astro`)

Build these blocks in this exact order, top to bottom:

| # | Block | Specification |
|---|-------|---------------|
| 1 | **Header** | Sticky top. Logo (hexagon + crown + bee icon) on start side. Nav links center: Home, Our Honey, Tours, Our Story, Blog, Contact. End side: Language Switcher + "Order Now" WhatsApp CTA button (gold, with WhatsApp icon). Mobile: hamburger icon triggers slide-in drawer. Background: transparent over hero, transitions to `bg-white/95 backdrop-blur-sm` on scroll. |
| 2 | **Hero** | Full viewport height (`min-h-screen`). Background: placeholder for a warm, soft-focus landscape photo of Northern Lebanon mountains/apiary with a warm amber gradient overlay (`bg-gradient-to-b from-black/40 to-black/20`). Centered content: Large serif headline in white: "Pure Honey from the Mountains of Lebanon". Subtitle: "Family-crafted in Barhalioun, Northern Lebanon". Two CTAs side by side: "Shop Honey" (solid gold button) and "Book a Tour" (white outlined button). Scroll-down indicator chevron at bottom, subtle bounce animation. |
| 3 | **Trust Strip** | `bg-cream-dark`. Horizontal row of 4 trust badges with hexagon-shaped icons: "100% Raw & Unfiltered", "Family-Owned Since the 1980s", "Northern Lebanon Terroir", "Free Honey Spoon with Every Jar". On mobile: 2x2 grid. |
| 4 | **Product Highlights** | `bg-white`. Section heading: "Our Honey" with subtitle "Taste the mountains of Lebanon in every spoonful." 3-column grid of featured products (Thyme, Wildflower, Oak). Each `ProductCard`: image (square, rounded-xl), name, price, one-line tasting notes, gold "Order on WhatsApp" button. Below grid: centered "View All Honey →" link. |
| 5 | **Our Story Teaser** | `bg-cream`. Two-column layout (stacked on mobile): Left column — placeholder photo area (beekeeper working with hives, warm natural light). Right column — small olive label "OUR STORY", serif heading "Three Generations of Beekeeping", 2-3 paragraph teaser about the family tradition, the land, the passion. "Read Our Full Story →" link. |
| 6 | **Tour Teaser** | `bg-white`. Full-width section. Section heading: "Visit Our Bees" with subtitle "An unforgettable experience in the heart of Lebanese nature." Photo grid: 3 photos in a row (guests in bee suits, close-up of hive inspection, group photo). Below: brief description + "Explore Our Tours →" gold button. |
| 7 | **Blog Teaser** | `bg-cream`. Section heading: "From the Hive" with subtitle "Stories, tips, and honey wisdom." 3-column grid of latest blog posts as `BlogCard`: thumbnail, title, date, excerpt (2 lines), "Read More" link. |
| 8 | **Testimonials** | `bg-white`. Section heading: "What Our Customers Say". 3 `TestimonialCard` components in a row (1-col on mobile): quote text in italic, 5-star rating, name, location. |
| 9 | **Newsletter** | `bg-gold-500` (golden background section for contrast). White text. Heading: "Stay in the Hive". Subtitle: "Get updates on new harvests, seasonal tours, and beekeeping stories." Centered email input + "Subscribe" button (white button on gold background). |
| 10 | **Footer** | `bg-dark text-white`. 4-column grid (stacked on mobile): (1) Script "Dany's Bees" text logo (white version) + short brand tagline, (2) Quick Links: nav items, (3) Contact: phone (tel: link), email (mailto: link), WhatsApp link, address, (4) Follow Us: Instagram icon+link. Below columns: horizontal rule + copyright line. |

### 6.2 Products Listing (`src/pages/[lang]/products/index.astro`)

- Section heading: "Our Honey Collection"
- 3-column grid (2-col tablet, 1-col mobile) of all 6 products as `ProductCard`
- Each card: product image, name, price per kg, tasting notes, flora source tag (olive badge), "Order on WhatsApp" button + "Call to Order" text link
- Below grid: **Shipping Info Box** — rounded card with two columns: "Lebanon" (free delivery across Lebanon) and "International" (ships to France & Europe, 1-month pre-order)
- Below shipping: **Bulk Order Callout** — "Ordering for a group, event, or business? Call us at +961 03 394 824 for special pricing."

### 6.3 Product Detail (`src/pages/[lang]/products/[slug].astro`)

Two-column layout (stacked on mobile):
- **Left**: Large product image (placeholder, square with rounded corners)
- **Right**: Product name (serif heading), price + weight, tasting notes, flora source, season badge, "Includes free honey spoon" note, large gold "Order on WhatsApp" button (full width), "Or call us: +961 03 394 824" link below
- **Below**: Full description paragraph
- **Below**: "You Might Also Like" — 3 related product cards

### 6.4 Tours & Experiences (`src/pages/[lang]/tours/index.astro`)

| # | Block | Specification |
|---|-------|---------------|
| 1 | **Hero** | Shorter hero (60vh). Background: photo of guests in bee suits with mountain backdrop. Heading: "Experience Our Apiary". Subtitle: "Suit up, meet the bees, and taste fresh honey straight from the hive." |
| 2 | **Tour Tiers** | Two `TourCard` components side by side (stacked on mobile). Each card: tour name, tagline, price, duration, availability, bulleted "What's Included" list, CTA button "Book This Tour". Premium card has a gold "Limited — By Season Only" badge and a slightly elevated/highlighted style. |
| 3 | **What to Expect** | Timeline/steps section with 5-6 steps: (1) Arrive at the apiary in Barhalioun, (2) Suit up in professional beekeeper gear, (3) Open live hives with your guide, (4) Taste fresh honey varieties, (5) Learn about Lebanese beekeeping traditions, (6) Take photos & take home a jar. Each step: number in hexagon, title, short description, placeholder for a small photo. |
| 4 | **Photo Gallery** | 3x2 grid of tour photos (placeholder). Simple lightbox or click-to-enlarge with CSS (no heavy JS library). |
| 5 | **FAQ** | Accordion (details/summary HTML elements — no JS needed). Questions: "What should I wear?", "Is it safe for children?", "What if it rains?", "How far is it from Beirut?", "Can I buy honey on-site?", "How do I get there?", "Can I bring my own camera?", "What about bee allergies?" |
| 6 | **Booking Form** | `BookingForm` component. Fields: Name, Email, Phone, Preferred Date (date input), Group Size (dropdown 1-20), Tour Type (Standard/Premium radio), Additional Message (textarea). Submit button. On submit: use Formspree (placeholder action URL `https://formspree.io/f/YOUR_FORM_ID`). Success message inline. Below form: "Prefer to talk? Call us at +961 03 394 824 or message us on WhatsApp" with clickable links. |
| 7 | **Sticky Mobile CTA** | On mobile only: fixed bottom bar with "Book a Tour" button that smooth-scrolls to the booking form. Hidden on desktop. |

### 6.5 About / Our Story (`src/pages/[lang]/about.astro`)

Full-width narrative page. Sections:

1. **Hero**: shorter (50vh), warm-tone photo background, heading "Our Story"
2. **The Beginning**: placeholder text about how the family started beekeeping. Include a placeholder family photo area.
3. **Our Bees & Our Land**: describe the Barhalioun region, Northern Lebanon — the altitude, the flora (thyme, oak/sindian, hawthorn/zaatar, citrus, wildflowers), the Mediterranean climate, why it makes exceptional honey. Include a placeholder landscape photo.
4. **Our Process**: how the honey is harvested, extracted by hand, unfiltered, unheated, jarred. Emphasize traditional methods. Placeholder process photos.
5. **Our Promise**: quality commitment, raw and natural, family values, sustainability, bee welfare first. A pull quote from the beekeeper: "We take care of the bees, and the bees take care of us."
6. **Lebanon Map Logo**: display the Lebanon map honeycomb logo as a decorative element

### 6.6 Blog Listing (`src/pages/[lang]/blog/index.astro`)

- Section heading: "From the Hive"
- 2-column grid (1-col mobile) of blog post cards
- Card: thumbnail, title, date, author, excerpt (3 lines), tags, "Read More →"

### 6.7 Blog Post (`src/pages/[lang]/blog/[slug].astro`)

- Back link to blog listing
- Article layout: max-w-3xl centered
- Title (large serif), date, author, tags
- Featured image (full width within container)
- Rendered Markdown content with proper heading hierarchy
- Share links (WhatsApp, copy link) at bottom
- "More from the Hive" — 2 related posts

### 6.8 Contact (`src/pages/[lang]/contact.astro`)

Two-column layout:
- **Left**: Contact form (Name, Email, Subject dropdown [General Inquiry, Product Order, Tour Booking, Wholesale, Other], Message). Submit via Formspree.
- **Right**: Direct contact info card: phone (tel: link), email (mailto: link), WhatsApp button, Instagram link, address: "Barhalioun, North Lebanon". Below: placeholder for an embedded map or a static image of the location. Business hours: "TODO: Add business hours"

---

## 7. COMPONENT SPECIFICATIONS

### `WhatsAppButton.astro`
Props: `productName: string` (URL-encoded), `lang: string`, `size: "sm" | "md" | "lg"`
Renders: `<a href="https://wa.me/96103394824?text={greeting}" target="_blank" rel="noopener">` with WhatsApp icon SVG + translated label.
Greeting template per language:
- EN: `Hi! I'd like to order {productName}. Please let me know the details.`
- AR: `مرحبا! أود طلب {productName}. أرجو إعلامي بالتفاصيل.`
- FR: `Bonjour! Je souhaite commander {productName}. Merci de me donner les détails.`

### `SEO.astro`
Props: `title, description, image, lang, slug, type`
Generates:
- `<title>` with site name suffix: `{pageTitle} | Dany's Bees`
- `<meta name="description">`
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`
- `hreflang` alternate links for all 3 languages
- `<link rel="canonical">`
- JSON-LD: `LocalBusiness` on homepage, `Product` on product pages, `Event` on tours, `BlogPosting` on blog posts

### `Header.astro`
- Transparent background initially, transitions to `bg-white/95 backdrop-blur-sm shadow-sm` when scrolled past 50px (use Astro island with tiny vanilla JS `IntersectionObserver` or scroll listener)
- Logo (hexagon + crown + bee icon, ~40px height) links to `/{lang}/`
- Active nav link gets gold underline

---

## 8. SEO, PERFORMANCE & ACCESSIBILITY

### SEO
- Unique `<title>` and `<meta description>` per page in the active language
- `hreflang` on every page (en, ar, fr + x-default pointing to en)
- JSON-LD structured data (LocalBusiness, Product, Event, BlogPosting)
- Generate `robots.txt` and XML sitemap (use `@astrojs/sitemap`)
- `<link rel="canonical">` on every page

### Performance
- Use Astro's `<Image>` component for all images (automatic optimization)
- Lazy-load all images below the fold (`loading="lazy"`)
- Self-hosted fonts with `font-display: swap` and preload critical fonts
- Preload hero background image
- Target: **Lighthouse 90+** on all four metrics
- Minimal JS: total client-side JS budget under 20KB gzipped
- No Google Analytics or third-party tracking scripts

### Accessibility
- Semantic HTML: `<main>`, `<nav aria-label="...">`, `<article>`, `<section aria-labelledby="...">`
- All images: descriptive `alt` text in the current language
- Skip-to-content link as first focusable element
- Focus-visible outlines on all interactive elements (gold ring)
- WCAG AA color contrast (4.5:1 body text, 3:1 large text) — verify gold-on-cream meets this; if not, darken the gold for text-on-cream contexts
- All form fields have visible `<label>` elements
- `prefers-reduced-motion`: disable the hero scroll chevron animation and any other transitions
- **NO dark mode.** Do not implement `prefers-color-scheme` handling.

---

## 9. INTERACTIVE BEHAVIOR

| Feature | Implementation |
|---------|---------------|
| **Mobile Navigation** | Hamburger icon toggles slide-in drawer from end side (right for LTR, left for RTL). Drawer covers full height, `bg-white`, includes nav links + language switcher + WhatsApp CTA. Close button (X). Body scroll locked when open. Use Astro island with vanilla JS. |
| **Header Scroll** | Transparent → white/blur transition on scroll. Use `IntersectionObserver` on a sentinel `<div>` below the hero. |
| **WhatsApp Buttons** | Open `wa.me` deep link in new tab. Pre-filled message includes product name in current language. |
| **Tour Booking Form** | Client-side validation (required fields). Submit to Formspree. Show inline success/error message. Date input uses native `<input type="date">`. |
| **Newsletter Form** | Submit to Formspree (or Mailchimp embed endpoint). Inline success state. |
| **FAQ Accordion** | Pure HTML `<details><summary>` elements. CSS-only open/close transitions. No JS. |
| **Smooth Scroll** | For anchor links: `scroll-behavior: smooth` in CSS. Mobile sticky CTA scrolls to `#booking`. |
| **Language Switcher** | Navigate to equivalent page in new language. Store in `localStorage`. |
| **Image Gallery** | CSS-only grid. Clicking opens the image URL in a new tab (simple, no lightbox JS). |

---

## 10. WHAT NOT TO BUILD (Anti-Requirements)

Do NOT implement any of the following:
- Shopping cart, checkout, or payment processing
- User accounts or authentication
- Database or backend server
- Dark mode or `prefers-color-scheme` handling
- Animation libraries (Framer Motion, GSAP, AOS)
- Cookie consent banner (no third-party tracking)
- Comment system on blog posts
- Search functionality
- Chat widget or chatbot
- Social media feed embeds
- Complex image lightbox (keep it simple)
- Server-side rendering (SSR) — this is fully static

---

## 11. DESIGN INSPIRATION REFERENCES

Borrow these specific elements from these real honey websites:

| Site | What to Borrow |
|------|----------------|
| **Atelier du Miel** (atelierdumiel.com) | Gold-on-cream color system, trust-marker badge approach, "hive to home" storytelling framing |
| **Asalli** (asalli.com) | Terroir-based storytelling — name the specific region, flora, altitude. Simple 6-item navigation. |
| **Two Hives Honey** (twohiveshoney.com) | Three-pillar site architecture (Shop / Experience / Learn). Founder philosophy front and center. Playfair Display serif for headlines. |
| **BeeWeaver** (beeweaver.com) | Family heritage "since the 1980s" positioning. Combined experience model (tours + shopping). Warm golden notification bar. |
| **Lydgate Farms** (lydgatefarms.com) | Tour booking page structure: FAQ-driven layout, sticky Book Now CTA, clear pricing, logistics transparency. |
| **Drizzle Honey** (drizzlehoney.com) | Generous whitespace (80px+ vertical spacing between sections), breathable layout, minimalist product cards. |
| **ACTIVIST Manuka** (activistmanuka.com) | Earthy color palette (gold + olive + cream), certification trust badges, newsletter subscription model. |

---

## 12. ASSET REFERENCE

The following brand assets exist and will be placed in the appropriate directories. For now, use placeholder `<img>` tags with descriptive `alt` text and the correct `src` paths.

| Asset | Intended Path | Use |
|-------|--------------|-----|
| Hexagon + crown + bee (clean) | `/images/logos/logo-icon.svg` | **Primary header logo**, Favicon, PWA icon |
| Script "Dany's Bees" text mark | `/images/logos/logo-text.svg` | Footer, About page hero, secondary branding |
| Lebanon map + honeycomb | `/images/logos/logo-map.svg` | About page, decorative element |
| "D" monogram | `/images/logos/logo-monogram.svg` | Loading states, small contexts |
| Branded honey dipper | `/images/logos/honey-dipper.png` | Product page accent |

---

## 13. OUTPUT FORMAT (Claude Code Specific)

You are running inside Claude Code in the `/Users/admin/Git/danysbees` directory. Use the **Write** tool to create each file. Do not use placeholder elisions like `// ...` or `/* remaining styles */`. Every file must be complete and functional.

**Generate files in this order:**
1. `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
2. `.github/workflows/deploy.yml`
3. `src/styles/global.css`
4. `src/i18n/` — all translation files and utilities
5. `src/data/` — site config, navigation
6. `src/content/` — product JSON, tour JSON, blog Markdown, testimonials
7. `src/layouts/BaseLayout.astro`
8. `src/components/` — all 15 components
9. `src/pages/` — all pages (index redirect, then [lang]/ pages)
10. `public/` — manifest, robots.txt, service worker, CNAME, favicon placeholder

**After generating all files:**
1. Run `npm install` to install dependencies
2. Run `npm run build` to verify the site builds without errors
3. Fix any build errors before proceeding
4. Run `npm run preview` and confirm the site serves
5. Generate a `README.md` with:
   - Project setup instructions (`npm install`, `npm run dev`, `npm run build`)
   - How to add a new product (which JSON file to create, copy an existing one)
   - How to add a blog post (which Markdown file to create)
   - How to update prices (which field to edit in which file)
   - How to deploy (push to main → auto-deploys via GitHub Actions)
   - How to connect the custom domain (GitHub Pages CNAME settings)

---

