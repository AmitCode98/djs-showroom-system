# Design System Specification

> Boilerplate Design System Template. Specific brand tokens and styles from `VoltAgent/awesome-design-md` can be incorporated below.

---

## 1. Visual Theme
- **Aesthetic Direction**: [e.g., Clean Minimalist / Dark Futuristic / Warm Editorial / Precision Industrial]
- **Surface Elevation & Shadows**:
  - `Level 0 (Flat)`: `none`
  - `Level 1 (Card / Subtle)`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
  - `Level 2 (Dropdown / Popover)`: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
  - `Level 3 (Modal / Dialog)`: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`
- **Border Radii**:
  - `sm`: `4px`
  - `md`: `8px`
  - `lg`: `12px`
  - `full`: `9999px`
- **Glassmorphism / Blurs**:
  - Background backdrop blur: `backdrop-blur-md bg-background/80`
  - Subtle borders: `border border-border/40`

---

## 2. Color Palette
- **Primary / Brand**:
  - `primary-50`: `hsl(var(--primary-50))`
  - `primary-500` (Default): `hsl(var(--primary))`
  - `primary-600` (Hover): `hsl(var(--primary-hover))`
  - `primary-foreground`: `hsl(var(--primary-foreground))`
- **Secondary / Accent**:
  - `secondary`: `hsl(var(--secondary))`
  - `secondary-foreground`: `hsl(var(--secondary-foreground))`
  - `accent`: `hsl(var(--accent))`
  - `accent-foreground`: `hsl(var(--accent-foreground))`
- **Neutrals / Surfaces**:
  - `background`: `hsl(var(--background))`
  - `foreground`: `hsl(var(--foreground))`
  - `card`: `hsl(var(--card))`
  - `card-foreground`: `hsl(var(--card-foreground))`
  - `muted`: `hsl(var(--muted))`
  - `muted-foreground`: `hsl(var(--muted-foreground))`
  - `border`: `hsl(var(--border))`
- **Feedback & Semantics**:
  - `success`: `hsl(var(--success, 142 76% 36%))`
  - `warning`: `hsl(var(--warning, 38 92% 50%))`
  - `destructive` / `error`: `hsl(var(--destructive))`
  - `info`: `hsl(var(--info, 199 89% 48%))`

---

## 3. Typography Rules (Tanishq Inspired Luxury Stack)
- **Font Families**:
  - Headings / Editorial: `Fraunces, serif` (`--font-heading` / `var(--font-fraunces)`) — Luxury variable serif with refined contrast and high-end editorial prestige.
  - Body & UI / Modern Sans: `Albert Sans, sans-serif` (`--font-body` / `var(--font-albert-sans)`) — Ultra-clean geometric sans-serif for numbers, prices, badges, and showroom buttons.
  - Cultural Accents: `Hind Siliguri, sans-serif` (`--font-bengali` / `var(--font-hind-siliguri)`) — Authentic Bengali script for regional wedding and gold hallmarks.
- **Type Scale**:
  - `Display / H1`: `2.25rem (36px)` / `line-height: 2.5rem` / `font-weight: 700`
  - `H2`: `1.875rem (30px)` / `line-height: 2.25rem` / `font-weight: 600`
  - `H3`: `1.5rem (24px)` / `line-height: 2rem` / `font-weight: 600`
  - `H4`: `1.25rem (20px)` / `line-height: 1.75rem` / `font-weight: 600`
  - `Body / Base`: `1rem (16px)` / `line-height: 1.5rem` / `font-weight: 400`
  - `Body Small / Subtext`: `0.875rem (14px)` / `line-height: 1.25rem` / `font-weight: 400`
  - `Caption / Micro`: `0.75rem (12px)` / `line-height: 1rem` / `font-weight: 500`

---

## 4. Layout Principles
- **Grid & Spacing Scale**:
  - Baseline unit: `4px` (Tailwind standard 0.5 = 2px, 1 = 4px, 2 = 8px, 4 = 16px, 6 = 24px, 8 = 32px)
  - Container max-widths:
    - Content: `max-w-4xl`
    - Standard Page: `max-w-7xl`
    - Full width with gutters: `px-4 sm:px-6 lg:px-8`
- **Responsive Breakpoints**:
  - Mobile: `< 640px` (`sm`)
  - Tablet: `640px - 1024px` (`md`, `lg`)
  - Desktop: `1024px+` (`xl`, `2xl`)
- **Spacing & Alignment**:
  - Consistent optical padding (e.g. vertical rhythm using `space-y-4` or `gap-4`)
  - Alignment to baseline grid and visual balance over mathematical centering when optical alignment feels better

---

## 5. Component States & Interaction Guidelines
- **States**:
  - `Default`: Rest state with crisp contrast and accessible colors (WCAG AA compliant minimum).
  - `Hover`: Subtle luminance shift or border highlight (150ms-200ms ease-out). Avoid jarring shifts.
  - `Active / Pressed`: Slight scale-down (`scale-[0.98]`) or deepened background for tangible tactile response.
  - `Focus-Visible`: Unambiguous keyboard focus rings (`ring-2 ring-offset-2 ring-primary outline-none`).
  - `Disabled`: Reduced opacity (`opacity-50 pointer-events-none cursor-not-allowed`).
  - `Loading / Skeleton`: Shimmering pulse with skeleton shapes matching final layout dimensions.
- **Motion & Transitions**:
  - Micro-interactions: `150ms - 250ms` using natural spring or `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Enter / Exit transitions: Exit faster than enter (e.g., Enter `200ms ease-out`, Exit `150ms ease-in`).
  - Respect `prefers-reduced-motion`: Fallback to immediate opacity or zero translation.
