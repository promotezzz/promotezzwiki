import type { ModWikiData } from '../types/wiki';

const rightClickPotsData: ModWikiData = {
  slug: 'rightclickpots',
  title: 'RightClickPots',
  tagline: 'When you right click a potion, it throws it on you instantly.',
  version: 'v1.0.0',
  loader: 'Fabric 1.21.1+',
  author: 'Promotezz',
  lastUpdated: 'September 2026',
  requirements: ['Minecraft 1.21.1+', 'Fabric Loader', 'Fabric API'],
  downloads: [
    { label: 'View on Modrinth', url: 'https://modrinth.com/mod/rightclickpots', primary: true, type: 'modrinth' },
    { label: 'GitHub Repository', url: 'https://github.com/promotezzz/RightClickPots', type: 'github' }
  ],
  overview: [
    'RightClickPots is a simple client-side Fabric mod for Minecraft 1.21.1 and up. When you right-click a potion, it throws it on you instantly.'
  ],
  features: [
    {
      title: 'Instant Potion Throw',
      description: 'Right-click any potion to instantly throw it on yourself.',
      badge: 'Core'
    },
    {
      title: 'Quick Toggle',
      description: 'Quickly toggle the mod on or off with a keybind.',
      badge: 'Controls'
    }
  ],
  configGuide: {
    modMenuDescription: 'Configure mod settings in-game via Mod Menu.',
    quickToggleDescription: 'Toggle the mod on or off with a keybind set in Options > Controls > Key Binds > RightClickPots.'
  },
  faq: [
    {
      question: 'What does RightClickPots do?',
      answer: 'When you right-click a potion, it throws it on you instantly.'
    },
    {
      question: 'What versions does it support?',
      answer: 'RightClickPots is Fabric only, for Minecraft 1.21.1 and up.'
    }
  ],
  issueReporting: {
    enabled: true,
    githubRepoUrl: 'https://github.com/promotezz/RightClickPots',
    submitHint: 'Include your Minecraft version and any details.'
  }
};

export const WIKI_PAGES: Record<string, ModWikiData> = {
  'rightclickpots': rightClickPotsData,
  'rightclickpot': rightClickPotsData,
  'rightclickpots-wiki': rightClickPotsData
};

/**
 * Helper function to retrieve a mod by its URL slug.
 * Case-insensitive match.
 */
export function getModBySlug(slug: string): ModWikiData | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim().replace(/^\//, '');
  return WIKI_PAGES[clean];
}

/**
 * List all available slugs
 */
export function getAllModSlugs(): string[] {
  return Object.keys(WIKI_PAGES);
}

/**
 * Returns distinct canonical mod wiki items (no aliases)
 */
export function getUniqueModList(): ModWikiData[] {
  return [rightClickPotsData];
}
