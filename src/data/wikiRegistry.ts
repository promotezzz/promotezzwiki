import type { ModWikiData } from '../types/wiki';

export const WIKI_PAGES: Record<string, ModWikiData> = {
  // RightClickPots client-side mod by Promotezz
  'rightclickpots': {
    slug: 'rightclickpots',
    title: 'RightClickPots',
    tagline: 'Client-side Fabric mod for instant potion usage, fast potting hotkeys, and automated weapon re-swap.',
    badge: 'Client-Side Mod',
    version: 'v1.0.0',
    loader: 'Fabric 1.20.4+ / NeoForge',
    author: 'Promotezz',
    lastUpdated: 'September 2026',
    requirements: ['Fabric Loader 0.15+', 'Fabric API 0.96.0+', 'Java 17+'],
    downloads: [
      { label: 'Download RightClickPots.jar', url: '#', primary: true, type: 'direct' },
      { label: 'GitHub Repository', url: 'https://github.com', type: 'github' }
    ],
    overview: [
      'RightClickPots is an ultra-responsive client-side utility mod engineered for fast-paced combat and PvP. It eliminates cumbersome hotbar slot swapping by letting you instantly splash or drink potions with a single click or hotkey.',
      'After triggering, RightClickPots automatically returns your active hand to your primary weapon or previous slot in under 40 milliseconds, completely preventing attack delay resets.',
      'Built with pure client-side packet timing—fully compatible with Lunar, Dawn, and standard Fabric modpacks.'
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
        title: 'Download Fabric Loader',
        description: 'Ensure Fabric Loader (0.15.0 or higher) is installed for Minecraft 1.20.4.'
      },
      {
        step: 2,
        title: 'Install Fabric API & Mod',
        description: 'Place RightClickPots-v1.0.0.jar and Fabric API inside your .minecraft/mods folder.',
        commandOrPath: '%appdata%/.minecraft/mods/RightClickPots-v1.0.0.jar'
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
  },

  // Alias for /rightclickpots-wiki
  'rightclickpots-wiki': {
    slug: 'rightclickpots',
    title: 'RightClickPots',
    tagline: 'Client-side Fabric mod for instant potion usage, fast potting hotkeys, and automated weapon re-swap.',
    badge: 'Client-Side Mod',
    version: 'v1.0.0',
    loader: 'Fabric 1.20.4+ / NeoForge',
    author: 'Promotezz',
    lastUpdated: 'September 2026',
    requirements: ['Fabric Loader 0.15+', 'Fabric API 0.96.0+', 'Java 17+'],
    downloads: [
      { label: 'Download RightClickPots.jar', url: '#', primary: true, type: 'direct' },
      { label: 'GitHub Repository', url: 'https://github.com', type: 'github' }
    ],
    overview: [
      'RightClickPots is an ultra-responsive client-side utility mod engineered for fast-paced combat and PvP. It eliminates cumbersome hotbar slot swapping by letting you instantly splash or drink potions with a single click or hotkey.',
      'After triggering, RightClickPots automatically returns your active hand to your primary weapon or previous slot in under 40 milliseconds, completely preventing attack delay resets.',
      'Built with pure client-side packet timing—fully compatible with Lunar, Dawn, and standard Fabric modpacks.'
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
        title: 'Download Fabric Loader',
        description: 'Ensure Fabric Loader (0.15.0 or higher) is installed for Minecraft 1.20.4.'
      },
      {
        step: 2,
        title: 'Install Fabric API & Mod',
        description: 'Place RightClickPots-v1.0.0.jar and Fabric API inside your .minecraft/mods folder.',
        commandOrPath: '%appdata%/.minecraft/mods/RightClickPots-v1.0.0.jar'
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
  },

  // Example template matching user's requested slug
  'my-mod-wiki': {
    slug: 'my-mod-wiki',
    title: 'Example Mod',
    tagline: 'A minimal documentation example showcasing how to structure your wiki.',
    badge: 'Fabric / NeoForge',
    version: 'v1.0.0',
    loader: 'Minecraft 1.20.4+',
    author: 'Promotezz',
    lastUpdated: 'September 2026',
    requirements: ['Fabric API 0.96.0+', 'Java 17 or higher'],
    downloads: [
      { label: 'Download .jar (Latest)', url: 'https://github.com', primary: true, type: 'direct' },
      { label: 'Source Code', url: 'https://github.com', type: 'github' },
      { label: 'Modrinth Page', url: 'https://modrinth.com', type: 'modrinth' }
    ],
    overview: [
      'Welcome to the official documentation for Example Mod. This page serves as a reference for installation, configuration parameters, keybinds, and troubleshooting.',
      'Designed for lightweight performance with zero unnecessary background ticks or dependencies.'
    ],
    features: [
      {
        title: 'Lightweight & Optimized',
        description: 'Zero impact on game framerates with fully asynchronous rendering hooks.',
        badge: 'Core'
      },
      {
        title: 'Custom In-Game Keybinds',
        description: 'Easily rebindable in the standard Controls > Key Binds menu.',
        badge: 'Controls'
      },
      {
        title: 'Hot-Reloadable Config',
        description: 'Changes to the configuration file take effect immediately without restarting the game.',
        badge: 'Config'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Install Fabric Loader',
        description: 'Ensure you have Fabric Loader installed for Minecraft 1.20.4 or higher.'
      },
      {
        step: 2,
        title: 'Add Fabric API',
        description: 'Download Fabric API and place the .jar into your Minecraft mods folder.'
      },
      {
        step: 3,
        title: 'Install Mod Jar',
        description: 'Drop the compiled mod file directly into your mods directory.',
        commandOrPath: '.minecraft/mods/example-mod-1.0.0.jar'
      }
    ],
    commands: [
      { command: '/mymod reload', description: 'Reloads configuration file from disk.', permission: 'mymod.admin' },
      { command: '/mymod toggle', description: 'Quickly toggles the on-screen overlay display.', permission: 'mymod.use' },
      { command: '/mymod help', description: 'Prints available commands and documentation link.' }
    ],
    config: {
      filename: 'config/mymod.json',
      language: 'json',
      description: 'Editable via any text editor or with Mod Menu in-game.',
      code: `{
  "enabled": true,
  "overlay": {
    "posX": 12,
    "posY": 12,
    "scale": 1.0,
    "opacity": 0.95
  },
  "debugLogging": false
}`
    },
    changelog: [
      {
        version: 'v1.0.0',
        date: '2026-09-10',
        changes: [
          'Initial release with core functionality',
          'Added hot-reloading configuration parser',
          'Included clean HUD renderer'
        ]
      }
    ],
    faq: [
      {
        question: 'Does this work on multiplayer servers?',
        answer: 'Yes! It is strictly client-side unless the server enforces specific blacklists.'
      },
      {
        question: 'How do I report bugs or submit feature suggestions?',
        answer: 'You can open an issue on the GitHub repository or reach out directly to Promotezz.'
      }
    ]
  },

  'promotezzmods': {
    slug: 'promotezzmods',
    title: 'promotezzmods',
    tagline: 'Custom Fabric mod package containing client utilities, optimizations, and custom tweaks.',
    badge: 'Fabric',
    version: 'v1.2.0',
    loader: 'Minecraft 1.20.4 (Fabric)',
    author: 'Promotezz',
    lastUpdated: 'September 2026',
    requirements: ['Fabric Loader 0.15+', 'Fabric API', 'Java 17+'],
    downloads: [
      { label: 'Download promotezzmods.jar', url: '#', primary: true, type: 'direct' },
      { label: 'GitHub Repository', url: '#', type: 'github' }
    ],
    overview: [
      'promotezzmods is a personal Fabric mod bringing essential client enhancements, responsive combat and inventory shortcuts, and custom gameplay HUD adjustments into a single cohesive jar file.',
      'Engineered to be completely conflict-free with standard PvP clients, Lunar, Dawn, and vanilla Fabric profiles.'
    ],
    features: [
      {
        title: 'Combat & Inventory Fluidity',
        description: 'Optimized packet handling and fluid inventory navigation shortcuts.',
        badge: 'PvP'
      },
      {
        title: 'Modular Systems',
        description: 'Every submodule can be independently toggled on or off without game restart.',
        badge: 'Modular'
      },
      {
        title: 'Zero Latency HUD',
        description: 'Direct draw-calls using modern Fabric rendering pipeline.',
        badge: 'Performance'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Download Fabric',
        description: 'Download the Fabric installer for your target Minecraft version.'
      },
      {
        step: 2,
        title: 'Place in Mods folder',
        description: 'Place promotezzmods.jar and Fabric API in your .minecraft/mods directory.',
        commandOrPath: '%appdata%/.minecraft/mods/'
      },
      {
        step: 3,
        title: 'Launch Game',
        description: 'Launch using the Fabric profile. Press RSHIFT to access the options.'
      }
    ],
    commands: [
      { command: '/pmods', description: 'Opens the in-game settings modal.' },
      { command: '/pmods reload', description: 'Forces a reload of all submodule configurations.' }
    ],
    config: {
      filename: 'config/promotezzmods.json',
      language: 'json',
      description: 'Configuration for enabled modules and custom styling.',
      code: `{
  "modules": {
    "quickPot": true,
    "scoreboardCleaner": true,
    "hudOverlay": true
  },
  "appearance": {
    "primaryColor": "#FFFFFF",
    "compactMode": true
  }
}`
    },
    changelog: [
      {
        version: 'v1.2.0',
        date: '2026-09-08',
        changes: [
          'Rewrote rendering engine to support Minecraft 1.20.4',
          'Added instant potion swap hotkey',
          'Reduced memory allocation footprint'
        ]
      }
    ]
  },

  'hud-customizer': {
    slug: 'hud-customizer',
    title: 'HUD Customizer',
    tagline: 'Clean, minimalist in-game HUD positioning and styling for Minecraft.',
    badge: 'Fabric Client',
    version: 'v2.1.0',
    loader: 'Fabric 1.20.x / 1.21',
    author: 'Promotezz',
    lastUpdated: 'August 2026',
    requirements: ['Fabric API'],
    downloads: [
      { label: 'Download HUD Customizer', url: '#', primary: true, type: 'direct' },
      { label: 'Source Code', url: '#', type: 'github' }
    ],
    overview: [
      'HUD Customizer allows players to reposition, recolor, and rescale any standard on-screen elements including armor durability, status effects, coordinates, CPS counter, and ping.',
      'Features a clean visual snap-to-grid drag editor directly in-game.'
    ],
    features: [
      {
        title: 'Drag & Drop Editor',
        description: 'Press the configured hotkey (default: Grave / `) to move elements freely on screen.'
      },
      {
        title: 'Snap to Grid',
        description: 'Pixel-perfect alignment with magnetic edges and customizable grid increments.'
      },
      {
        title: 'Custom Fonts & Outlines',
        description: 'Switch between clean shadow, outline, or modern flat typography.'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Put jar in mods folder',
        description: 'Drop hud-customizer-v2.1.0.jar into your .minecraft/mods folder.',
        commandOrPath: '%appdata%/.minecraft/mods/hud-customizer-v2.1.0.jar'
      },
      {
        step: 2,
        title: 'Launch & Configure',
        description: 'Open Minecraft, enter any world or server, and press ` to open the HUD layout editor.'
      }
    ],
    commands: [
      { command: '/hud edit', description: 'Opens the drag-and-drop HUD position editor.' },
      { command: '/hud reset', description: 'Resets all widgets to their default positions.' }
    ],
    config: {
      filename: 'config/hud_customizer.json',
      language: 'json',
      description: 'Coordinates and visibility toggles for each widget.',
      code: `{
  "snapToGrid": true,
  "gridSize": 4,
  "elements": {
    "armor": { "visible": true, "x": 10, "y": -40, "anchor": "BOTTOM_LEFT" },
    "coords": { "visible": true, "x": 8, "y": 8, "anchor": "TOP_LEFT" },
    "cps": { "visible": true, "x": -60, "y": 8, "anchor": "TOP_RIGHT" }
  }
}`
    }
  },

  'donutsmp-scoreboard-customizer': {
    slug: 'donutsmp-scoreboard-customizer',
    title: 'DonutSMP Scoreboard Customizer',
    tagline: 'Remove clutter, customize colors, and clean up the sidebar scoreboard on DonutSMP.',
    badge: 'Fabric Utility',
    version: 'v1.1.2',
    loader: 'Fabric 1.20.x',
    author: 'Promotezz',
    lastUpdated: 'August 2026',
    requirements: ['Fabric API'],
    downloads: [
      { label: 'Download Customizer (.jar)', url: '#', primary: true, type: 'direct' }
    ],
    overview: [
      'Specifically tailored for DonutSMP players who want a minimal, clutter-free sidebar. Hide redundant store advertisements, customize the balance and clan line formatting, or shift the scoreboard position.'
    ],
    features: [
      {
        title: 'Ad & Promo Hider',
        description: 'Automatically hides store links and promotional lines from the sidebar.'
      },
      {
        title: 'Custom Line Highlighting',
        description: 'Highlight your money balance, shulkers, or player coordinates in bold clean colors.'
      },
      {
        title: 'Opacity & Background Slider',
        description: 'Make the scoreboard background completely transparent for a sleek aesthetic.'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Add to mods',
        description: 'Place the jar file in your .minecraft/mods directory with Fabric API.'
      }
    ],
    commands: [
      { command: '/sbcleaner toggle', description: 'Toggles scoreboard cleaner on/off.' },
      { command: '/sbcleaner transparent', description: 'Toggles transparent sidebar background.' }
    ]
  },

  'ability-plugin': {
    slug: 'ability-plugin',
    title: 'AbilityPlugin',
    tagline: 'High-performance Spigot / Paper server plugin adding custom RPG abilities and skill triggers.',
    badge: 'Paper / Spigot',
    version: 'v3.0.0',
    loader: 'Paper 1.20+',
    author: 'Promotezz',
    lastUpdated: 'July 2026',
    requirements: ['Java 21', 'Paper 1.20.4 or higher'],
    downloads: [
      { label: 'Download AbilityPlugin.jar', url: '#', primary: true, type: 'direct' },
      { label: 'GitHub Repository', url: '#', type: 'github' }
    ],
    overview: [
      'AbilityPlugin delivers custom abilities, passive attributes, and cooldown management for Minecraft servers. Built with modern Paper event listeners for maximum tickrate performance.'
    ],
    features: [
      {
        title: 'Custom Action Triggers',
        description: 'Bind skills to right-click, shift-drop, sneaking, or double-jumping.'
      },
      {
        title: 'Actionbar Cooldown Display',
        description: 'Visual particle effects and real-time cooldown timer on the player actionbar.'
      },
      {
        title: 'Full Permission Control',
        description: 'Grant abilities by rank, permission nodes, or in-game unlockable items.'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Put jar in plugins folder',
        description: 'Place AbilityPlugin.jar into your server plugins folder.',
        commandOrPath: 'server/plugins/AbilityPlugin.jar'
      },
      {
        step: 2,
        title: 'Start Server',
        description: 'Start or restart the server to generate default configs in plugins/AbilityPlugin/config.yml.'
      }
    ],
    commands: [
      { command: '/ability give <player> <ability>', description: 'Gives a player a specific ability scroll.', permission: 'ability.admin' },
      { command: '/ability list', description: 'Lists all available abilities registered on the server.' },
      { command: '/ability reload', description: 'Reloads config.yml without server restart.', permission: 'ability.reload' }
    ],
    config: {
      filename: 'plugins/AbilityPlugin/config.yml',
      language: 'yaml',
      description: 'Cooldown durations, particle settings, and sound triggers.',
      code: `abilities:
  dash:
    enabled: true
    cooldown-seconds: 8
    distance-multiplier: 2.2
    sound: ENTITY_BAT_TAKEOFF
  thunderstrike:
    enabled: true
    cooldown-seconds: 25
    damage: 7.5
    aoe-radius: 4.0
actionbar:
  show-cooldown: true
  ready-message: "&aReady!"`
    }
  },

  'infinity-stones': {
    slug: 'infinity-stones',
    title: 'InfinityStones',
    tagline: 'Custom server plugin bringing the 6 Infinity Stones with cinematic abilities to Minecraft.',
    badge: 'Paper Plugin',
    version: 'v2.0.0',
    loader: 'Paper / Purpur 1.20+',
    author: 'Promotezz',
    lastUpdated: 'July 2026',
    requirements: ['Paper 1.20+', 'Java 17+'],
    downloads: [
      { label: 'Download InfinityStones.jar', url: '#', primary: true, type: 'direct' }
    ],
    overview: [
      'InfinityStones brings legendary cosmic artifacts to life on your Minecraft server: Space, Mind, Reality, Power, Time, and Soul. Each stone grants unique active and passive powers.'
    ],
    features: [
      {
        title: 'Space Stone: Dimensional Warp',
        description: 'Teleport to targeted blocks, open dimensional portals, and summon black holes.'
      },
      {
        title: 'Time Stone: Temporal Rewind',
        description: 'Reverses damage taken over the last 5 seconds and freezes nearby enemies.'
      },
      {
        title: 'Power Stone: Kinetic Blast',
        description: 'Devastating beam attack and immense melee strike damage multiplier.'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Install Jar',
        description: 'Drop InfinityStones.jar in plugins/ and restart your server.',
        commandOrPath: 'server/plugins/InfinityStones.jar'
      }
    ],
    commands: [
      { command: '/stones give <player> <stone>', description: 'Gives specified stone to player.', permission: 'stones.admin' },
      { command: '/stones summon', description: 'Triggers a meteor event dropping a random stone.' }
    ]
  },

  'ironandlead': {
    slug: 'ironandlead',
    title: 'Iron & Lead',
    tagline: 'Tactical firearm and industrial combat mechanics designed for modern Minecraft.',
    badge: 'Fabric Mod',
    version: 'v0.9.0',
    loader: 'Fabric 1.20.4',
    author: 'Promotezz',
    lastUpdated: 'June 2026',
    requirements: ['Fabric API'],
    downloads: [
      { label: 'Download Mod', url: '#', primary: true, type: 'direct' }
    ],
    overview: [
      'Iron & Lead adds balanced, lore-friendly industrial ballistic weaponry, crafted using iron, lead, and gunpowder. Includes custom recoil, ammo crafting recipes, and sound effects.'
    ],
    features: [
      {
        title: 'Hitscan & Ballistics',
        description: 'Precise projectile physics with calculated bullet drop and headshot multipliers.'
      },
      {
        title: 'Authentic Audio',
        description: 'Custom acoustic gunshot sounds with distance attenuation and echo.'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Client & Server Install',
        description: 'Must be installed on both client and server for multiplayer servers.'
      }
    ]
  },

  'game-optimizer-pro': {
    slug: 'game-optimizer-pro',
    title: 'Game Optimizer Pro',
    tagline: 'Lightweight desktop performance utility for input latency reduction and background debloating.',
    badge: 'Desktop Tool',
    version: 'v1.5.0',
    loader: 'Windows 10 / 11',
    author: 'Promotezz',
    lastUpdated: 'September 2026',
    requirements: ['Windows 10/11 64-bit', 'Administrator privileges'],
    downloads: [
      { label: 'Download Installer (.exe)', url: '#', primary: true, type: 'direct' },
      { label: 'Portable ZIP', url: '#', type: 'direct' }
    ],
    overview: [
      'A clean, bloat-free system optimization tool built for competitive gamers. Fine-tunes high-resolution multimedia timers (0.5ms timer resolution), unparks CPU cores, and silences non-critical telemetry during gaming sessions.'
    ],
    features: [
      {
        title: '0.5ms Timer Resolution',
        description: 'Locks system timer resolution for lower frame-time variance and smoother input response.'
      },
      {
        title: 'Process Priority Automation',
        description: 'Automatically elevates game executable priority while throttling background tasks.'
      },
      {
        title: 'Clean 1-Click Revert',
        description: 'Every optimization can be safely reverted with a single click back to Windows defaults.'
      }
    ],
    installation: [
      {
        step: 1,
        title: 'Run executable as Administrator',
        description: 'Launch GameOptimizerPro.exe with admin rights to allow system timer adjustments.'
      }
    ]
  }
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
 * List all available slugs (useful for quick reference / 404 hints)
 */
export function getAllModSlugs(): string[] {
  return Object.keys(WIKI_PAGES);
}

/**
 * Returns distinct canonical mod wiki items (no aliases)
 */
export function getUniqueModList(): ModWikiData[] {
  const seen = new Set<string>();
  const list: ModWikiData[] = [];
  for (const item of Object.values(WIKI_PAGES)) {
    if (!seen.has(item.slug)) {
      seen.add(item.slug);
      list.push(item);
    }
  }
  return list;
}
