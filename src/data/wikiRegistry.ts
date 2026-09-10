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
      title: 'Smart Potion Priority System',
      description: 'Automatically detects Splash Health II first, then Speed II, or falls back to any configured potion order.',
      badge: 'Smart'
    },
    {
      title: 'Inventory Quick-Scan',
      description: 'Optionally pulls potions directly from top inventory rows when your hotbar runs out of pots.',
      badge: 'QoL'
    },
    {
      title: 'Zero Packet Desync',
      description: 'Safely synced with client tick timing to prevent ghost items, visual glitches, or rubberbanding.',
      badge: 'Performance'
    }
  ],
  installation: [
    {
      step: 1,
      title: 'Install Fabric Loader',
      description: 'Ensure Fabric Loader (0.16.0 or higher) is installed for Minecraft 1.21.1 or above.'
    },
    {
      step: 2,
      title: 'Download from Modrinth & Install Fabric API',
      description: 'Download RightClickPots from Modrinth and place RightClickPots.jar alongside Fabric API inside your .minecraft/mods folder.',
      commandOrPath: '%appdata%/.minecraft/mods/RightClickPots.jar'
    },
    {
      step: 3,
      title: 'Configure Keybind in Controls',
      description: 'Launch Minecraft, go to Options > Controls > Key Binds > RightClickPots, and bind your preferred potting key (default: C or Mouse Button 4).'
    }
  ],
  commands: [
    { command: '/rcp', description: 'Opens in-game settings overlay to customize delays and priority.' },
    { command: '/rcp toggle', description: 'Quickly enable or disable fast potting.' },
    { command: '/rcp reload', description: 'Reloads config/rightclickpots.json from disk.' },
    { command: '/rcp priority <health|speed|fire>', description: 'Sets potion priority ranking.' }
  ],
  config: {
    filename: 'config/rightclickpots.json',
    language: 'json',
    description: 'Fine-tune swap delays (in milliseconds) and inventory scanning behavior.',
    code: `{
  "enabled": true,
  "keybind": "key.keyboard.c",
  "swapDelayMs": 35,
  "autoReswapToWeapon": true,
  "allowInventoryPull": true,
  "priorityOrder": [
    "minecraft:splash_potion{Potion:'minecraft:strong_healing'}",
    "minecraft:splash_potion{Potion:'minecraft:strong_regeneration'}",
    "minecraft:splash_potion{Potion:'minecraft:strong_swiftness'}"
  ],
  "soundFeedback": true
}`
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
