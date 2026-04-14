# Design System Document: STREICHER TRAD

## 1. Overview & Creative North Star: "The Architectural Atelier"
This design system moves away from the "fintech-template" aesthetic toward a **High-End Editorial** experience. The Creative North Star is **The Architectural Atelier**: a philosophy that treats digital space like a physical gallery in Paris. 

To achieve this, we reject standard UI conventions. We do not use borders to define sections; we use light and shadow. We do not use stock photography; we use abstract geometric forms and generative textures. The layout should feel "intentional yet asymmetric," using generous whitespace to signal prestige. The goal is to make the user feel they are receiving bespoke counsel, not using a mass-market tool.

---

## 2. Colors & Surface Philosophy
The palette balances the "Deep Plum" heritage of French luxury with a "Warm Stone" neutral base.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. Traditional "boxes" make an interface feel cramped and technical. 
- **Transitions:** Define boundaries through shifts in background color (e.g., a `surface-container-low` section sitting on a `surface` background).
- **The Signature Gradient:** Use the `primary` to `primary-container` gradient (#C72386 → #8B1A6B) exclusively for high-impact moments: Hero backgrounds, primary CTAs, and abstract geometry.

### Surface Hierarchy & Nesting
Treat the UI as a series of layered, fine-paper sheets.
- **Base Layer:** `surface` (#fbf9f6) is your canvas.
- **Secondary Sections:** Use `surface-container-low` (#f5f3f0) for large structural areas.
- **High-Priority Content:** Use `surface-container-lowest` (#ffffff) to make cards "pop" against the warm gray background without needing a shadow.

### The "Glass & Gradient" Rule
For floating navigational elements or modal overlays, use **Glassmorphism**:
- **Background:** `surface` at 70% opacity.
- **Effect:** `backdrop-blur: 20px`.
- **Polish:** A 1px "Ghost Border" using `outline-variant` at 15% opacity to catch the light.

---

## 3. Typography: The Editorial Voice
We use a dual-typeface system to balance technical precision with modern elegance.

*   **Display & Headlines (Manrope):** Chosen for its geometric purity. Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em) to create an authoritative, editorial feel. 
*   **Body & Labels (Inter):** Chosen for its exceptional legibility at small scales. Use `body-md` for all advisory text.

**Hierarchy as Identity:**
- **The "Hero" Treatment:** Pair a `display-md` headline in `on-surface` with a `title-md` sub-header in `primary`. The contrast in scale conveys confidence.
- **The "Caption" Treatment:** Use `label-md` in `secondary` for metadata, always in All Caps with +0.05em tracking to evoke high-fashion branding.

---

## 4. Elevation & Depth
Depth in this system is "Atmospheric," not "Structural."

*   **The Layering Principle:** Stacking `surface-container` tiers is the primary method of depth. An inner card (`surface-container-highest`) placed on a section (`surface-container-low`) creates a natural inset look.
*   **Ambient Shadows:** If an element must float (e.g., a dropdown), use:
    - `box-shadow: 0 24px 48px -12px rgba(139, 26, 107, 0.08);`
    - *Note:* The shadow color is a tinted version of our plum `primary`, making the shadow feel like a natural light reflection rather than "dirt" on the page.
*   **Glassmorphism:** Use for persistent headers. It allows the abstract geometric shapes of the background to bleed through, maintaining a sense of continuity.

---

## 5. Components

### Buttons: The "Jewel" Elements
- **Primary:** Gradient fill (#8B1A6B → #C72386), `on-primary` text, `rounded-md`. No shadow.
- **Secondary:** `surface-container-highest` fill with `primary` text. Use for low-emphasis actions.
- **Tertiary:** Text-only in `primary` with an underline that appears only on hover.

### Cards: The "Paper" Principle
- **Constraint:** Zero borders. Zero dividers.
- **Structure:** Use `surface-container-lowest` (#FFFFFF) against a `surface-container-low` (#F5F3F0) background. 
- **Spacing:** Minimum 32px internal padding (`4xl` in standard scales) to ensure the content "breathes."

### Input Fields: The "Minimalist" Form
- **State:** Only a bottom border (2px) using `outline-variant`. 
- **Active State:** The bottom border transforms into the `primary` gradient.
- **Labels:** Always `label-md` floating above the input in `secondary` color.

### Abstract Geometric Shapes (The "Visual Hook")
- In place of stock photos, use SVG-based geometric compositions.
- Use `primary-fixed-dim` (#ffaedc) at 10% opacity for large, background-overlapping circles or "shard" shapes to add depth to the whitespace.

---

## 6. Do’s and Don'ts

### Do:
- **Do** use asymmetric layouts. Align a headline to the left and the body text to a 60% width container on the right.
- **Do** use "Ghost Borders" at <20% opacity only when strictly necessary for accessibility.
- **Do** prioritize the `surface-container-low` (#f5f3f0) as the primary "working" background to reduce eye strain and feel more premium than pure white.

### Don't:
- **Don't** use 1px solid black or dark charcoal borders. This immediately breaks the high-end editorial feel.
- **Don't** use standard "drop shadows" (e.g., `rgba(0,0,0,0.2)`).
- **Don't** use dividers/lines to separate list items. Use 16px or 24px of vertical whitespace instead.
- **Don't** use stock photos of people in suits. Rely on typography and abstract geometry to convey "Investment Advisory."

---

## 7. Signature Interaction Pattern
When hovering over a "Wealth Tier" or "Investment Strategy" card, the background should not change color. Instead, the "Ghost Border" should subtly glow with the `primary` gradient, and the abstract shape behind it should scale by 5%, creating a "Macro-lens" focus effect.