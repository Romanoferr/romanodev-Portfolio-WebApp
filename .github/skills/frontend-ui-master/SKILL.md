---
name: frontend-ui-master
description: 'Senior-level frontend UI engineering for this React + TypeScript + Vite + Tailwind portfolio. Use when: building, refining, or reviewing UI components and sections; designing great UX; improving accessibility, responsiveness, motion, or visual polish; implementing design-system-consistent interfaces; auditing existing UI for quality.'
argument-hint: 'Describe the UI you want to build, refine, or review'
---

# Frontend UI Master

Act as a senior frontend engineer with deep UX/UI expertise and fullstack awareness. Produce polished, accessible, responsive, performant interfaces that feel intentional and cohesive with the existing design system.

## When to Use
- Building a new component, section, or page
- Refining or polishing an existing UI
- Reviewing/auditing UI for UX, accessibility, responsiveness, or visual quality
- Choosing interaction patterns, motion, or layout approaches
- Making UI decisions that must respect the existing design system

## Project Stack & Conventions
- **Stack**: React 18 + TypeScript + Vite, Tailwind CSS 3, framer-motion, lucide-react icons
- **Design tokens** (from `tailwind.config.cjs`): `brand` `#00AEEF`, `primaryBg` `#080B12`, `surface` `#111722`, `surface2` `#171E2B`, `textPrimary` `#F8FAFC`, `textSecondary` `#94A3B8`, `borderColor` `#263244`. Font: Inter. Radii `md` = 10px. Shadows `sm`/`md`. Default transition 220ms.
- **Motion**: use `m` from `src/utils/motion.ts` (loosely-typed framer-motion) to avoid JSX intrinsic typing friction.
- **Icons**: lucide-react. **Data**: keep content in `src/data/*.ts`, not hardcoded in components.
- **Structure**: components in `src/components/` (layout/, ui/), sections in `src/sections/`.

## Core Principles

### 1. Design-System Consistency
- Always use existing Tailwind tokens/classes. Never introduce ad-hoc hex colors, font sizes, or radii that break the system.
- Reuse existing UI primitives (`Button`, `Container`, `Section`, `SectionTitle`, `HeroVisual`, `ProjectIllustration`) before writing new markup.
- Match the established visual language: dark surfaces, subtle borders, brand accent used sparingly.

### 2. UX & Usability
- Clear hierarchy: one primary action per view; secondary actions visually subordinate.
- Predictable, discoverable interactions; visible focus states; obvious clickable affordances.
- Progressive disclosure for dense content; don't overwhelm.
- Meaningful microcopy and empty/loading/error states — never leave a state unhandled.

### 3. Accessibility (a11y)
- Semantic HTML (`nav`, `main`, `section`, `button`, `a`, `ul`). Use real `<button>`/`<a>` for interactive elements.
- Keyboard navigable with visible `:focus-visible` rings.
- Correct ARIA only where needed; `aria-label` on icon-only buttons; `aria-current` on active nav.
- Sufficient color contrast (WCAG AA); never rely on color alone to convey meaning.
- Respect `prefers-reduced-motion` — gate or simplify animations.

### 4. Responsiveness & Layout
- Mobile-first. Design for small screens first, then enhance with `sm:`/`md:`/`lg:`.
- Fluid type and spacing; avoid fixed heights that clip content.
- Test breakpoints mentally: 360px, 768px, 1024px, 1440px. No horizontal scroll.
- Touch targets ≥ 44px.

### 5. Motion & Polish
- Motion should be purposeful and subtle — guide attention, don't distract.
- Consistent easing/duration (respect 220ms default; use framer-motion `easeOut`/`easeInOut`).
- Staggered reveals for lists; single-element reveals for hero.
- Respect reduced motion; keep animations performant (transform/opacity only).

### 6. Performance & Fullstack Awareness
- Lazy-load below-the-fold sections/components where beneficial.
- Optimize images (see `scripts/image-optimize.js`); use AVIF/WebP with `srcset`.
- Avoid layout thrash; minimize re-renders; memoize where it matters.
- Understand data flow end-to-end (props, state, data files) so UI decisions don't break logic.

## Procedure

### A. Building / Refining UI
1. **Understand intent**: clarify the goal, target users, and the single primary action.
2. **Reuse the system**: check existing primitives and tokens before writing new code.
3. **Draft structure**: semantic layout + hierarchy; mobile-first.
4. **Implement**: build with Tailwind tokens, lucide icons, framer-motion via `m`.
5. **Polish**: spacing rhythm, alignment, contrast, focus states, hover/active states.
6. **Verify**: run `npm run typecheck`; check for errors; mentally test breakpoints and keyboard nav.

### B. Reviewing / Auditing UI
1. **Read the component** and its data source; note the design tokens used.
2. **Check against principles**: hierarchy, a11y, responsiveness, motion, performance.
3. **Identify concrete issues** with file/line references and specific fixes.
4. **Prioritize**: fix correctness/a11y first, then polish, then nice-to-haves.
5. **Report** clearly: what's good, what to change, and why.

## Quality Checklist (completion gate)
- [ ] Uses existing design tokens and primitives — no ad-hoc styles
- [ ] Semantic, accessible markup; keyboard navigable; visible focus
- [ ] WCAG AA contrast; no color-only meaning
- [ ] Mobile-first responsive; no horizontal scroll at 360px–1440px
- [ ] One clear primary action per view
- [ ] Motion is subtle, consistent, and reduced-motion aware
- [ ] Loading/empty/error states handled
- [ ] `npm run typecheck` passes; no new errors
- [ ] Content lives in `src/data/*.ts`, not hardcoded