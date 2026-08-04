# Portfolio 2026 Structure Proposal

## Current State

- The project is Vite-based, but the current app is vanilla JavaScript, not React.
- Styling is split across component-level SCSS files and global SCSS.
- Existing portfolio content is useful as source material, especially project text, links, images, videos, CV and skill labels.
- Existing assets are mixed together in `src/assets` and `public/assetsProces`.
- `src/assets` is about 115 MB, mostly because of large images and MP4 demos.

## Design Direction From Screenshots

- Personal, hand-drawn, professional visual language.
- One-page portfolio for job search.
- Hero uses the custom laptop illustration.
- Laptop screen cycles between:
  - `Hello World!`
  - `I am Tina Wulff`
  - `i do...`
  - `Web Development`
  - `UX/UI & Design`
  - `Visual Art`
- Projects use stacked cards with category filters:
  - Featured
  - Web Development
  - UX/UI & Design
  - Visual Art
- Featured is the default project filter.
- Cards use an exported transparent SVG border asset from Figma, with CSS-controlled fill color and opacity underneath.
- Stack & Competencies uses chips/tags.
- Skills are shown together by default, then highlighted/filtered on hover or click/tap by category.

## Recommended Target Structure

```txt
src/
  app/
    App.jsx
    main.jsx
  assets/
    brand/
      favicon.png
      logo-dark.png
      logo-white.png
    illustrations/
      laptop-hero.png
      stacked-card-border.svg
      stacked-card-border.png
    projects/
      selected project images
    legacy/
      pixel-profile2.png
      sript-img.png
  components/
    common/
      Button.jsx
      Chip.jsx
      SectionHeading.jsx
      Tabs.jsx
    hero/
      Hero.jsx
      LaptopIllustration.jsx
      ScreenSequence.jsx
    projects/
      ProjectFilters.jsx
      ProjectStack.jsx
      ProjectCard.jsx
    skills/
      SkillChips.jsx
      SkillCategoryTabs.jsx
    layout/
      Header.jsx
      Footer.jsx
  data/
    categories.js
    projects.js
    skills.js
  styles/
    globals.css
    tokens.css
```

## Data First

Keep portfolio content in `src/data` and let components stay presentational. This makes filtering, featured projects, hover/click skill states and future edits much easier.

Initial files added:

- `src/data/categories.js`
- `src/data/projects.js`
- `src/data/skills.js`

## Suggested Cleanup Order

1. Use a real Vite React base in this project.
2. Add Tailwind and CSS tokens.
3. Move current vanilla files into `src/legacy` or delete them after the new React shell renders.
4. Add the two new Figma assets:
   - `src/assets/illustrations/laptop-hero.png`
   - `src/assets/illustrations/stacked-card-border.svg`
5. Keep CV in `public`:
   - `public/files/TinaWulff-CV2026.pdf`
6. Keep large videos out of the active build until they are compressed or externally hosted.
7. Move only selected assets into the new build.
8. Build a minimal React shell with tokens and layout only.
9. Implement hero animation.
10. Implement project stacked cards.
11. Implement Stack & Competencies interactions.

## Proposed Components

- `Hero`: Owns the first viewport and laptop composition.
- `LaptopIllustration`: Renders the laptop asset and defines the screen slot.
- `ScreenSequence`: Handles timed text transitions inside the laptop screen.
- `ProjectFilters`: Reusable tab/filter controls for project categories.
- `ProjectStack`: Maps filtered project data into stacked cards.
- `ProjectCard`: One project card with tags, links, media and category color.
- `SkillChips`: All skill chips, with active/highlight states.
- `SkillCategoryTabs`: Optional category controls for non-hover devices.

## Design Tokens

Use CSS variables as the source of truth, then map them into Tailwind.

Suggested token groups:

- `--color-page`
- `--color-ink`
- `--color-screen`
- `--color-web`
- `--color-ux`
- `--color-visual-art`
- `--color-featured`
- `--color-general`
- `--font-hand`
- `--font-body`
- `--radius-card`
- `--shadow-sketch`

## Asset Notes

- Keep imported build assets in `src/assets`.
- Keep truly public files such as favicon in `public`.
- Compress or replace very large PNGs/videos before launch.
- Current MP4 demos are parked in `src/legacy/media/projects` and are not part of the active build.
- Rename typo-like filenames when moving assets, for example `sript-img.png`.
- Keep original source exports in a separate folder only if they are still useful.
