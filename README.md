# Dany's Bees

Pure honey from the mountains of Northern Lebanon. Family crafted in Barhalioun since the 1980s.

**Live site:** [danysbees.com](https://danysbees.com)

## Quick Start

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/     # Astro components (Header, Footer, ProductCard, etc.)
├── content/        # CMS data (JSON + Markdown)
│   ├── products/   # One JSON file per honey product
│   ├── tours/      # One JSON file per tour tier
│   ├── blog/       # Markdown blog posts
│   └── testimonials/
├── data/           # Site config, navigation
├── i18n/           # Translations (en.json, ar.json, fr.json)
├── layouts/        # Base HTML layout
├── pages/          # Route pages ([lang]/ prefix for i18n)
└── styles/         # Global CSS with Tailwind 4 theme
public/             # Static assets (images, fonts, icons, PWA)
```

## Adding Content

### Add a New Product

1. Copy an existing file in `src/content/products/` (e.g., `thyme.json`)
2. Save as `your-product.json` with a unique `id`
3. Fill in all fields: `name`, `description`, `tasting_notes`, and `flora_source` need `en`, `ar`, and `fr` values
4. Place a product photo at `public/images/products/your-product.jpg`
5. The product page at `/en/products/your-product/` is auto-generated

### Add a Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Use this frontmatter template:
   ```yaml
   ---
   title:
     en: "Your Title"
     ar: "العنوان"
     fr: "Votre Titre"
   date: "2026-04-15"
   author: "Dany"
   description:
     en: "Short description"
     ar: "وصف قصير"
     fr: "Courte description"
   image: "/images/blog/your-image.jpg"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Write the post content in Markdown below the frontmatter
4. Place the blog image at `public/images/blog/your-image.jpg`

### Update Prices

Edit the `price_usd` field in the relevant JSON file in `src/content/products/`.

### Update Translations

Edit `src/i18n/en.json`, `ar.json`, or `fr.json`. Keys are organized by section (nav, hero, products, tours, etc.).

## Deployment

The site auto-deploys to GitHub Pages when you push to `main`:

1. Push your changes: `git push origin main`
2. GitHub Actions builds and deploys automatically
3. The workflow is defined in `.github/workflows/deploy.yml`

### Custom Domain Setup

1. The `public/CNAME` file is set to `danysbees.com`
2. In your domain registrar, add:
   - A record: `185.199.108.153` (and .109, .110, .111)
   - CNAME record: `www` → `your-username.github.io`
3. In GitHub repo Settings → Pages → Custom domain → enter `danysbees.com`

## Tech Stack

- **Astro 5**: Static site generator
- **Tailwind CSS 4**: Utility-first CSS
- **TypeScript**: Type-safe data layer
- **i18n**: English, Arabic (RTL), French
- **No client-side framework**: Vanilla JS for interactivity

## Fonts (Self-hosted)

Place `.woff2` font files in `public/fonts/`:
- `PlayfairDisplay-Regular.woff2`, `PlayfairDisplay-Bold.woff2`
- `Inter-Regular.woff2`, `Inter-Medium.woff2`, `Inter-SemiBold.woff2`
- `NotoNaskhArabic-Regular.woff2`, `NotoNaskhArabic-Bold.woff2`
- `NotoSansArabic-Regular.woff2`, `NotoSansArabic-Medium.woff2`

## Form Submissions

Forms use [Formspree](https://formspree.io). Replace the placeholder `YOUR_FORM_ID` in `src/data/siteConfig.ts` with your actual Formspree form IDs for:
- Contact form
- Tour booking form
- Newsletter subscription
