# promotezz.wiki

Minimal, clean white documentation hub for mods, plugins, and software creations by **Promotezz**.

Designed with no cluttered catalogs or public filters — pages are accessed directly via their URL sublinks:
- Example: `promotezz.wiki.vercel.app/my-mod-wiki`
- Example: `promotezz.wiki.vercel.app/hud-customizer`
- Example: `promotezz.wiki.vercel.app/promotezzmods`

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Enter directory
cd promotezz-wiki

# 2. Run local development server
npm run dev
```

Visit `http://localhost:5173/my-mod-wiki` in your browser.

---

## 📝 How to Add a New Mod Wiki

All wikis are registered in [`src/data/wikiRegistry.ts`](./src/data/wikiRegistry.ts).

To add a new mod wiki (e.g. `/my-new-mod`), simply add an entry to the `WIKI_PAGES` object:

```ts
'my-new-mod': {
  slug: 'my-new-mod',
  title: 'My New Mod',
  tagline: 'Short description of what this mod does.',
  version: 'v1.0.0',
  loader: 'Fabric 1.20.4+',
  lastUpdated: 'September 2026',
  downloads: [
    { label: 'Download .jar', url: 'https://...', primary: true, type: 'direct' }
  ],
  overview: [
    'Overview paragraph 1...',
    'Overview paragraph 2...'
  ],
  features: [
    { title: 'Feature Name', description: 'What it does' }
  ],
  installation: [
    { step: 1, title: 'Download Mod', description: 'Put jar in .minecraft/mods' }
  ],
  commands: [
    { command: '/mymod', description: 'Opens menu' }
  ],
  config: {
    filename: 'config/mymod.json',
    language: 'json',
    code: '{\n  "enabled": true\n}'
  }
}
```

Once saved, it is immediately accessible at `promotezz.wiki.vercel.app/my-new-mod`!

---

## 🌐 Deploying to Vercel

This repository already includes `vercel.json` configured for Single Page Application (SPA) routing, so refreshing on `/my-mod-wiki` will never give a 404.

### Option A: Via GitHub & Vercel Dashboard
1. Push this folder to a GitHub repository (e.g. `promotezz-wiki`).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset: **Vite** (auto-detected).
4. Click **Deploy**.
5. Set your custom domain or use the free `promotezz.wiki.vercel.app` domain.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
