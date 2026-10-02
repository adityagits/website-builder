# Website Builder

## Purpose

A lightweight, **dependency-free visual page builder** for creating HTML websites without writing code, and a
**reusable starter kit** for building your own page-builder products later.

The project has two goals:

1. **A working builder** – drag components from a sidebar onto a page, edit text and images inline, manage multiple
   pages, preview on desktop/tablet/mobile, and export clean static HTML.
2. **A reusable theme** – `theme/theme.css` holds every design decision (colours, fonts, radius, spacing) as CSS
   variables and styles every component. Copy it into a new project, change the tokens, and the whole site is re-skinned.

It is inspired by popular WordPress page builders (Elementor, Beaver Builder, Divi, Gutenberg, Brizy, Bricks, etc.),
reduced to the essentials: a **Pages / Components / Theme** left sidebar, a live canvas, and an inspector on the right.

## Run

No installation, no server, no build step. **Open `index.html` in a browser** (double-click it).

Optional: any static server also works (VS Code Live Server, `npx serve`, etc.). When served over `http://`, exported
pages embed `theme.css`; when opened as a file they link `theme/theme.css`, so keep the `theme/` folder next to exported pages.
Google Fonts used by some presets need an internet connection. Projects autosave in the browser (localStorage);
use **Export → Project (.json)** to back up or move them.

## Project structure

| Path | Purpose |
|---|---|
| `theme/theme.css` | **The reusable theme.** Design tokens (`--wb-*`) + styles for every component. |
| `src/components.js` | Component library. Push to `WB.components` to add your own. |
| `src/theme-presets.js` | Theme presets (token overrides). |
| `src/builder.js` | Editor: pages, drag & drop, inline editing, inspector, theme editor, history, export. |
| `builder/` | Editor UI styles (`builder.css`) and canvas-only styles (`canvas.css`); not shipped in exported pages. |

## Builder features

- **Pages sidebar** – add, duplicate, delete pages; file name (slug), SEO title, meta description; link pages with `slug.html`.
- **Components sidebar** – searchable, grouped by category; drag onto the canvas or click to insert; reorder via the block handle.
- **Theme sidebar** – colours, fonts (Google Fonts), corner radius, content width, section spacing, presets, custom CSS; download `theme.css`.
- **Inspector** – section background, padding, alignment, width, anchor ID, raw HTML editing; link / image / button settings for the selected element.
- **Canvas** – inline text editing, responsive device preview, preview mode, undo/redo, autosave (localStorage).
- **Export** – current page, all pages, theme CSS, or the project as JSON (import supported).

## Components

### Available now

| Category | Components |
|---|---|
| Navigation | Navbar |
| Hero | Hero · Centered, Hero · Split, Hero · Background image |
| Content | Text block, Image + text, Full image, Gallery, Video embed |
| Features | Features grid, Feature rows, Stats, Steps |
| Social proof | Logo cloud, Testimonials, Team |
| Conversion | Pricing, Call to action, Newsletter, Contact form, FAQ |
| Footer | Footer, Footer · Simple |
| Layout | Spacer, Divider, Custom HTML |

### Planned

| Category | Components |
|---|---|
| Navigation | Navbar with mobile hamburger menu, Sticky/transparent navbar, Breadcrumbs, Announcement bar |
| Hero | Hero with video background, Hero with form, Hero with product mockup |
| Content | Tabs, Accordion, Timeline, Table, Code block, Quote / pull-quote, Image slider/carousel, Before/after |
| Features | Icon list, Comparison table, Process flow, Bento grid |
| Social proof | Testimonial carousel, Case-study cards, Rating/reviews, Awards & badges |
| Conversion | Countdown timer, Popup / modal, Multi-step form, Lead-magnet banner, Pricing toggle (monthly/yearly) |
| E-commerce | Product grid, Product detail, Cart summary, Category cards |
| Blog | Post list, Post card, Author box, Sidebar widgets |
| Maps & contact | Google Map embed, Opening hours, Social links |
| Layout | Columns (1–6) container, Section with background image/video, Sidebar layout |
| Builder features | Drag-drop nested elements, Global/reusable blocks, Saved section templates, Full-page templates, Zip export, Image library |

## Add a component

```js
WB.components.push({
  id: "my-block", label: "My block", category: "Content", icon: "★",
  html: () => `<section class="wb-section"><div class="wb-container"><h2>Hello</h2></div></section>`,
});
WB.componentById["my-block"] = WB.components.at(-1);
```

Section options are plain data-attributes handled by the theme:
`data-bg="alt|dark|primary"`, `data-pad="none|sm|md|lg|xl"`, `data-align="left|center|right"`, `data-width="narrow|wide|full"`.

## Reuse the theme in a new project

1. Copy `theme/theme.css` into your project and link it: `<link rel="stylesheet" href="theme.css">`.
2. Edit the variables in the `:root` block (or use the Theme tab and **Download theme.css**).
3. Use the `wb-*` classes from `src/components.js` as markup examples.
