```markdown
# Design System: The Artisanal Alchemist

## 1. Overview & Creative North Star
The "Artisanal Alchemist" is a high-end editorial framework designed to bridge the gap between Lebanese tradition and modern digital luxury. This system rejects the rigid, boxy constraints of standard e-commerce templates in favor of **"Organic Editorialism."** 

### Creative North Star: The Golden Hour
The design should feel like sunlight filtering through Lebanese cedar trees—warm, intentional, and fleeting. We move beyond "standard" UI by employing intentional asymmetry, allowing photography to bleed off-edge, and using typography as a structural element rather than just a label. We prioritize "breathable" layouts where white space isn't "empty," but rather a premium canvas for the honey’s rich textures.

---

## 2. Colors & Tonal Depth
Our palette is a dialogue between the sun-drenched Lebanese landscape and the precision of the hive. 

### The "No-Line" Rule
**Traditional borders are strictly prohibited.** To define sections, designers must utilize background color shifts. For example, a `surface-container-low` (#f9f3eb) section should sit directly against a `surface` (#fff8f1) background. This creates a soft-focus transition that feels organic rather than mechanical.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper sheets:
*   **Base Layer:** `surface` (#fff8f1) for the main canvas.
*   **Elevated Elements:** `surface-container-lowest` (#ffffff) for high-importance cards.
*   **Recessed Elements:** `surface-container-high` (#eee7df) for footer or utility areas.
This "tonal layering" creates depth through value rather than artificial shadows.

### The Glass & Gradient Rule
To add "soul," use **Glassmorphism** for navigation bars and floating filters. Apply a background blur (12px–20px) to `surface` at 80% opacity. For CTAs, avoid flat fills; use a subtle linear gradient from `primary` (#805600) to `primary_container` (#d4941a) at a 135-degree angle to mimic the shimmer of liquid honey.

---

## 3. Typography: The Editorial Voice
Our typography pairing is a tribute to heritage and clarity.

*   **Headlines (Playfair Display / Noto Naskh Arabic):** Use `display-lg` to `headline-sm` for narrative storytelling. These should often be center-aligned or offset to create an asymmetrical, magazine-style rhythm.
*   **Body & Utility (Inter / Noto Sans Arabic):** Use `body-lg` for product descriptions to ensure a premium reading experience. `label-md` and `label-sm` are reserved for metadata and small captions, always set with a slightly increased letter-spacing (0.05rem) for a refined feel.
*   **Arabic Logic:** The Noto Naskh serif should carry the same visual weight as Playfair Display. Ensure line-heights for Arabic are increased by 20% compared to Latin text to accommodate the script's ascending and descending flourishes.

---

## 4. Elevation & Depth: Tonal Layering
We do not use "drop shadows" in the traditional sense. We use **Ambient Light.**

*   **The Layering Principle:** If a product card needs to stand out, do not add a shadow. Place it on a `surface-container-low` background and change the card's color to `surface-container-lowest`. The subtle contrast is enough for a premium eye.
*   **Ambient Shadows:** If a floating element (like a shopping cart drawer) requires a shadow, it must be `on-surface` (#1e1b17) at 5% opacity with a 40px blur and a 10px Y-offset. This mimics natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#d5c4af) at **15% opacity**. A solid 100% opaque border is a failure of the system.

---

## 5. Components

### Buttons: The Tactile Touch
*   **Primary:** A gradient-filled container (`primary` to `primary_container`) with `on_primary` (#ffffff) text. Use `lg` (1rem) roundedness to maintain a soft, organic feel.
*   **Tertiary (Text-only):** `primary` (#805600) text with an animated underline that expands from the center on hover. No container.

### Cards & Lists: The Infinite Canvas
*   **Card Design:** Forbid the use of divider lines. Separate content using `surface-container` shifts or vertical white space (32px, 48px, or 64px). 
*   **Photography:** Cards should be "photography-forward." The image should occupy at least 60% of the card area, using the `lg` (1rem) corner radius.
*   **Hexagon Motif:** Use `secondary_container` (#d8eaaf) for subtle, watermark-style hexagon motifs in the background of cards to denote the hive origin.

### Input Fields: The Minimalist Entry
*   **Styling:** Only a bottom border using `outline_variant` (#d5c4af). Upon focus, the label (using `label-md`) should float upward and transition to `primary` (#805600).
*   **Error State:** Use `error` (#ba1a1a) only for the text and a 2px bottom border; do not flood the input field with red.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place a `display-lg` headline on the left and a product image slightly offset to the right.
*   **Use Tonal Transitions:** Shift background colors between sections (e.g., from `background` to `surface_container_low`) to tell a story of different product tiers.
*   **Respect the "Honey" Flow:** Use the `xl` (1.5rem) roundedness for large image containers to mimic the viscous, flowing nature of the product.

### Don’t:
*   **Don't use 1px solid black or dark grey borders.** It breaks the organic warmth of the Lebanese sun.
*   **Don't use harsh shadows.** If it looks like a "box," it isn't "The Artisanal Alchemist."
*   **Don't crowd the content.** If a page feels full, add 24px of padding to the top and bottom of the section.
*   **Don't use generic icons.** Use custom, thin-stroke (1.5px) icons that utilize the `secondary` (#556436) olive green.

---

## 7. Signature Texture
To elevate the experience, apply a subtle **grain overlay** (opacity 3%) over the entire `background`. This gives the digital surface a paper-like, tactile quality that feels as handmade as the honey itself.