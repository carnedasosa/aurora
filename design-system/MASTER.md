# Aurora Tesoro — Design System: Liquid Editorial

**Version:** 1.0.0  
**Concept:** A fusion of liquid glassmorphism, high-end magazine layout (editorial grid), and motion-driven storytelling.

---

## 🎨 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Soft Cream** | `#F7F3EE` | Primary background, creates warmth and comfort. |
| **Deep Onyx** | `#111111` | Primary text, sophisticated and grounded. |
| **Refined Gold** | `#C7A86D` | Accent color, buttons, highlights, echoes brand luxury. |
| **Glass White** | `rgba(255,255,255,0.75)` | Cards, navbar, overlays with `backdrop-filter: blur(20px)`. |
| **Prismatic** | `linear-gradient` | Subtle chromatic aberration accents for specific hover states. |

---

## ✍️ Typography

| Layer | Font Family | Weight | Case | Style |
|-------|-------------|--------|------|-------|
| **Hero Headlines** | `Playfair Display` | 900 | Sentence | Asymmetric, clamp sizing. |
| **Section Titles** | `Playfair Display` | 500 | Uppercase | Letter-spacing: 0.15em. |
| **Body Text** | `Inter` | 400 | Sentence | Relaxed line-height: 1.8. |
| **Eyebrow Caps** | `Inter` | 600 | Uppercase | Accent color, 0.1em spacing. |

---

## ✨ Effects & Motion

### Liquid Glass
- **Backdrop Blur:** 20px-40px.
- **Border:** 1px solid `rgba(255,255,255,0.3)`.
- **Chromatic Aberration:** 2px offset on hover for high-end feel.

### Editorial Grid
- **Alignment:** Asymmetric. Use vertical spacers and "Floating" images.
- **Negative Space:** Generous. Sections should breathe.

### Motion Storytelling
- **Entrance:** Scroll-triggered float-ups.
- **Transitions:** 0.6s Cubic-bezier (0.25, 0.46, 0.45, 0.94).
- **Cursor:** Magnetic, morphing trail.

---

## 🚫 Anti-Patterns
- ❌ **No Emoji Icons:** Only use refined Lucide/Heroicons SVGs.
- ❌ **No Grid Symmetry:** Avoid standard 3-column rows for services; use Bento or staggered grid.
- ❌ **No Sharp Shadows:** Use multi-layered soft luxury shadows.
