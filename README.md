# Website Builder

A dependency-free, drag-and-drop HTML page builder (vanilla JS) with a **Pages / Components / Theme** sidebar,
a live responsive canvas, an inspector, undo/redo, and clean HTML export.

## Run
```bash
python3 -m http.server 8080   # then open http://localhost:8080
```
(Opening `index.html` directly also works; exports then link `theme/theme.css` instead of inlining it.)

## Structure
| Path | Purpose |
|---|---|
| `theme/theme.css` | **The reusable theme.** Design tokens (`--wb-*`) + styles for every component. Copy into any new project. |
| `src/components.js` | Component library (navbar, heroes, features, pricing, FAQ, forms, footer…). Push to `WB.components` to add your own. |
| `src/theme-presets.js` | Theme presets (token overrides). |
| `src/builder.js` | Editor: pages, drag & drop, inline editing, inspector, theme editor, history, export. |
| `builder/` | Editor UI styles (`builder.css`) and canvas-only styles (`canvas.css`) — not shipped in exported pages. |

## Features
- **Pages tab**: add / duplicate / delete pages, slug, SEO title & description. Link pages with `slug.html`.
- **Components tab**: searchable, categorised; drag onto the canvas or click to insert; reorder by dragging the block handle.
- **Theme tab**: colors, fonts (Google Fonts), radius, width, spacing, presets, custom CSS; **Download theme.css** to reuse the look elsewhere.
- **Inspector**: per-section background, padding, alignment, width, anchor id, raw HTML editing; per-element link/image/button settings.
- Desktop/tablet/mobile preview, preview mode, undo/redo, autosave (localStorage), project JSON import/export.

## Add a component
```js
WB.components.push({ id: "my-block", label: "My block", category: "Content", icon: "★",
  html: () => `<section class="wb-section"><div class="wb-container"><h2>Hello</h2></div></section>` });
WB.componentById["my-block"] = WB.components.at(-1);
```
Section options are plain data-attributes handled by the theme: `data-bg="alt|dark|primary"`, `data-pad="none|sm|md|lg|xl"`,
`data-align`, `data-width`.
