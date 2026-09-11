import type { ModWikiData } from '../types/wiki';

const rightClickPotsData: ModWikiData = {
  slug: 'rightclickpots',
  title: 'RightClickPots',
  tagline: 'Client-side Fabric mod for instant potion usage, fast potting hotkeys, and automated weapon re-swap.',
  version: 'v1.0.0',
  loader: 'Fabric 1.21.1+',
  author: 'Promotezz',
  lastUpdated: 'September 2026',
  requirements: ['Minecraft 1.21.1+', 'Fabric Loader 0.16+', 'Fabric API', 'Java 21+'],
  downloads: [
    { label: 'View on Modrinth', url: 'https://modrinth.com/mod/rightclickpots', primary: true, type: 'modrinth' },
    { label: 'GitHub Repository', url: 'https://github.com/promotezzz/RightClickPots', type: 'github' }
  ],
  overview: [
    'RightClickPots is an ultra-responsive client-side utility mod engineered for fast-paced combat and PvP on Minecraft 1.21.1 and higher. It eliminates cumbersome hotbar slot swapping by letting you instantly splash or drink potions with a single click or hotkey.',
    'After triggering, RightClickPots automatically returns your active hand to your primary weapon or previous slot in under 40 milliseconds, completely preventing attack delay resets.',
    'Built with pure client-side packet timing—fully compatible with Lunar, Dawn, and standard Fabric modpacks on 1.21.1+.'
  ],
  features: [
    {
      title: 'Instant Splash & Auto Re-Swap',
      description: 'Splashes health or buff potions and snaps your hotbar back to your sword or weapon instantly.',
      badge: 'Combat'
    },
    {
      title: 'Zero Packet Desync',
      description: 'Safely synced with client tick timing to prevent ghost items, visual glitches, or rubberbanding.',
      badge: 'Performance'
    }
  ],
  configGuide: {
    modMenuDescription: 'Access and customize all mod settings directly in-game through the Mod Menu graphical screen.',
    quickToggleDescription: 'Quickly toggle RightClickPots on or off on the fly by configuring your toggle key in Options > Controls > Key Binds > RightClickPots.'
  },
  changelog: [
    {
      version: 'v1.0.0',
      date: '2026-09-10',
      changes: [
        'Initial release of RightClickPots client mod',
        'Added sub-40ms automatic hotbar slot restoration',
        'Added custom keybind support in standard Minecraft controls menu',
        'Integrated zero-desync inventory scanner'
      ]
    }
  ],
  faq: [
    {
      question: 'Is RightClickPots allowed on multiplayer servers?',
      answer: 'RightClickPots runs completely client-side. Always review your specific server rules regarding fast potting or slot-swap utilities.'
    },
    {
      question: 'Does this interfere with my crosshair or attack cooldown?',
      answer: 'No. The mod uses sub-tick swapping to preserve your main weapon attack meter without causing swing delays.'
    }
  ],
  issueReporting: {
    enabled: true,
    githubRepoUrl: 'https://github.com/promotezz/RightClickPots',
    submitHint: 'Include your Minecraft version, Fabric Loader version, and any other installed combat or HUD mods.'
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
