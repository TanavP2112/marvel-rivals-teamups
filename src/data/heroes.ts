import type { Hero } from '@/types/hero'

/**
 * Season 9 launches July 10, 2026, and NetEase has said the full
 * hero-by-hero Team-Up Loadout list is still coming ahead of that date.
 *
 * Only add `loadouts` (and flip `unlocked: true`) once a hero's exact
 * base + enhanced effects have been confirmed in official patch notes.
 * Until then, leave the hero unlocked: false so the UI shows an honest
 * "reveals July 10" state instead of guessed-at abilities.
 */
export const HEROES: Hero[] = [
  {
    id: 'adam_warlock',
    name: 'Adam Warlock',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Mantis',
        base: 'Grants an immediate small area healing burst when taking fatal damage.',
        enhanced: 'Upgraded scaling and reduced cooldown when Mantis is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Star-Lord',
        base: 'Leaves behind a protective revive beacon upon death.',
        enhanced: 'Beacon health increased when Star-Lord is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/adam-warlock.webp',
  },
  {
    id: 'angela',
    name: 'Angela',
    role: 'vanguard',
    unlocked: true,
    note: 'HP reduced to 350; now utilizes 200 Regenerative Shield.',
    loadouts: [
      {
        partner: 'Thor',
        base: 'Empowers broad melee swings with extra elemental lightning chip damage.',
        enhanced: 'Chain lightning arcs to one additional target if Thor is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Hela',
        base: 'Converts critical killing blows into a brief speed surge.',
        enhanced: 'Surge duration extended when Hela is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/angela.webp',
  },
  {
    id: 'black_cat',
    name: 'Black Cat',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Spider-Man',
        base: 'Reveals low-health targets within a close-range radius through solid walls.',
        enhanced: 'Wall-hack tracking distance increased when paired with Spider-Man.',
        enhancedConfirmed: false,
      },
      {
        partner: 'The Hood',
        base: 'Gains temporary bonus movement speed when attacking from behind.',
        enhanced: 'Speed boost duration extended when paired with The Hood.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/black-cat.webp',
  },
  {
    id: 'black_panther',
    name: 'Black Panther',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Magik',
        base: 'Sprinting and wall-running builds up a kinetic energy strike gauge.',
        enhanced: 'Kinetic discharge deals bonus damage when Magik is on the team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Namor',
        base: 'Successfully dodging an attack resets the cooldown of the primary dash skill.',
        enhanced: 'Grants a temporary armor shield upon reset if Namor is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/black-panther.webp',
  },
  {
    id: 'black_widow',
    name: 'Black Widow',
    role: 'duelist',
    unlocked: true,
    note: 'Full rework confirmed for S9: Transformed into aggressive close-range flanker; sniper tied to Ultimate.',
    loadouts: [
      {
        partner: 'Hawkeye',
        base: 'Melee takedowns immediately reveal the nearest enemy position.',
        enhanced: 'Detection radius expanded when Hawkeye is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Winter Soldier',
        base: 'Grappling hook speed and maximum deploy distance are slightly increased.',
        enhanced: 'Hook cooldown reduced by 1.5 seconds if Winter Soldier is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/black-widow.webp',
  },
  {
    id: 'blade',
    name: 'Blade',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Hela',
        base: 'Heals for a small percentage of critical weapon damage dealt to bleeding enemies.',
        enhanced: 'Vampiric lifesteal percentage enhanced when Hela is on the team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Moon Knight',
        base: 'Primary sword strikes build a stackable attack speed buff up to 5 times.',
        enhanced: 'Buff duration increased when paired with Moon Knight.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/blade.webp',
  },
  {
    id: 'captain_america',
    name: 'Captain America',
    role: 'vanguard',
    unlocked: true,
    note: 'HP reduced to 300; now utilizes 300 Regenerative Shield.',
    loadouts: [
      {
        partner: 'Hulk',
        base: 'Sprinting forward with the shield raised creates a deflection barrier.',
        enhanced: 'Deflection barrier absorbs more damage when Hulk is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Winter Soldier',
        base: 'Bouncing the shield off a wall grants a brief movement speed boost.',
        enhanced: 'Boost percentage increased if Winter Soldier is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/captain-america.webp',
  },
  {
    id: 'cloak_and_dagger',
    name: 'Cloak & Dagger',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Luna Snow',
        base: 'Sustained healing on a single target gradually charges a defensive light shield.',
        enhanced: 'Shield maximum capacity increased when paired with Luna Snow.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Mister Fantastic',
        base: 'Dashing backwards leaves behind a smoke screen that breaks enemy lock-on.',
        enhanced: 'Smoke screen duration extended when Mister Fantastic is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/cloak-and-dagger.webp',
  },
  {
    id: 'cyclops',
    name: 'Cyclops',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Wolverine',
        base: 'Optic blasts inflict a vulnerability state on high-armor enemies.',
        enhanced: 'Vulnerability depth increased when Wolverine is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Storm',
        base: 'Hitting consecutive shots boosts primary energy recharge rate.',
        enhanced: 'Recharge multiplier increased when paired with Storm.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/cyclops.webp',
  },
  {
    id: 'daredevil',
    name: 'Daredevil',
    role: 'duelist',
    unlocked: false,
    note: 'No confirmed loadouts yet.',
    img: '/images/daredevil.webp',
  },
  {
    id: 'deadpool',
    name: 'Deadpool',
    role: 'vanguard',
    unlocked: true,
    note: 'Base health increased to 500.',
    loadouts: [
      {
        partner: 'Wolverine',
        base: 'Passively regenerates health slowly when out of direct combat for 5 seconds.',
        enhanced: 'Out-of-combat timer reduced to 3 seconds when Wolverine is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Squirrel Girl',
        base: 'Throwing dual swords creates an explosion of distracting firecrackers.',
        enhanced: 'Firecracker blind duration increased if Squirrel Girl is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/deadpool.webp',
  },
  {
    id: 'devil_dinosaur',
    name: 'Devil Dinosaur',
    role: 'vanguard',
    unlocked: true,
    note: 'Base health scaled up to 850.',
    loadouts: [
      {
        partner: 'Moon Knight',
        base: 'Ground stomp attacks inflict a brief slow effect on squishy targets.',
        enhanced: 'Slow percentage increased if Moon Knight is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Jeff the Land Shark',
        base: 'Chomp attacks grant a tiny bite-sized self-healing reward.',
        enhanced: 'Bite-sized healing increased when Jeff is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/devil-dinosaur.webp',
  },
  {
    id: 'doctor_strange',
    name: 'Doctor Strange',
    role: 'vanguard',
    unlocked: true,
    note: 'Base health buffed to 650; shield cap scaled to 850.',
    loadouts: [
      {
        partner: 'Iron Man',
        base: 'Opening a portal clears harmful negative status effects from entering allies.',
        enhanced: 'Allies gain brief speed out of the portal when Iron Man is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Spider-Man',
        base: 'Levitation abilities consume less internal mystical energy over time.',
        enhanced: 'Levitation speed enhanced if Spider-Man is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/doctor-strange.webp',
  },
  {
    id: 'elsa_bloodstone',
    name: 'Elsa Bloodstone',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Blade',
        base: 'Shotgun blasts deal bonus damage against active supernatural or monstrous entities.',
        enhanced: 'Bonus damage scale increased when Blade is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'The Hood',
        base: 'Reloading right after a dodge roll fills the weapon clip with burning incendiary rounds.',
        enhanced: 'Incendiary burn duration increased if paired with The Hood.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/elsa-bloodstone.webp',
  },
  {
    id: 'emma_frost',
    name: 'Emma Frost',
    role: 'vanguard',
    unlocked: true,
    loadouts: [
      {
        partner: 'Psylocke',
        base: 'Switching into Diamond Form releases an immediate psychic shockwave.',
        enhanced: 'Shockwave range increased when Psylocke is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Cyclops',
        base: 'Mental assault beams reduce the target\'s active movement speed.',
        enhanced: 'Slow percentage enhanced if Cyclops is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/emma-frost.webp',
  },
  {
    id: 'groot',
    name: 'Groot',
    role: 'vanguard',
    unlocked: true,
    note: 'Base health increased to 850.',
    loadouts: [
      {
        partner: 'Rocket Raccoon',
        base: 'Spawning a wooden wall wall expands active healing zone coverage.',
        enhanced: 'Wall durability increased if Rocket Raccoon is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Mantis',
        base: 'Rooting an enemy with vine traps triggers a small health burst for nearby friends.',
        enhanced: 'Burst healing amount increased when Mantis is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/groot.webp',
  },
  {
    id: 'hawkeye',
    name: 'Hawkeye',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Black Widow',
        base: 'Sonic arrows uncover hidden flankers through walls within an expanded zone.',
        enhanced: 'Detection zone persists longer when Black Widow is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Invisible Woman',
        base: 'Firing from an elevated high-ground vantage point reduces arrow sound profile.',
        enhanced: 'Arrow reload speed increased if Invisible Woman is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/hawkeye.webp',
  },
  {
    id: 'hela',
    name: 'Hela',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Angela',
        base: 'Securing a elimination drops a dark rune that restores light shield metrics.',
        enhanced: 'Rune shield value increased when Angela is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Loki',
        base: 'Nightsword impacts generate extra ultimate ability charge on critical hits.',
        enhanced: 'Charge multiplier increased if Loki is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/hela.webp',
  },
  {
    id: 'hulk',
    name: 'Hulk',
    role: 'vanguard',
    unlocked: true,
    note: 'HP reduced to 400; uses 300 Regenerative Shield. Basic punch damage up to 45.',
    loadouts: [
      {
        partner: 'Captain America',
        base: 'Gain a ground-slam attack that damages and knocks back nearby enemies.',
        enhanced: 'Upgraded version confirmed when Captain America is on your team — exact numbers land with full patch notes.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Wolverine',
        base: 'Gain crowd-control immunity, shrugging off stuns and roots.',
        enhanced: 'Upgraded version confirmed when Wolverine is on your team — exact numbers land with full patch notes.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/hulk.webp',
  },
  {
    id: 'human_torch',
    name: 'Human Torch',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Storm',
        base: 'Fire fireballs through convective wind currents to accelerate their flight speed.',
        enhanced: 'Fireball size scales up when passing through Storm\'s active zones.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Mister Fantastic',
        base: 'Sustained flame damage burns away low-tier armor modifications.',
        enhanced: 'Burn ticks faster when Mister Fantastic is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/human-torch.webp',
  },
  {
    id: 'invisible_woman',
    name: 'Invisible Woman',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Mister Fantastic',
        base: 'Projecting a bubble shield onto allies also grants a minor speed buff.',
        enhanced: 'Speed buff percentage enhanced when Mister Fantastic is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'The Thing',
        base: 'Entering full invisibility drops a small decoy clone to absorb damage.',
        enhanced: 'Decoy clone health scaled up if The Thing is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/invisible-woman.webp',
  },
  {
    id: 'iron_fist',
    name: 'Iron Fist',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Luke Cage',
        base: 'Consecutive punch connections build a stackable physical defense layer.',
        enhanced: 'Defense stack maximum limit raised if Luke Cage is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Psylocke',
        base: 'Charged heavy strikes release a localized energy wave that disrupts shield channeling.',
        enhanced: 'Disruption radius expanded when paired with Psylocke.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/iron-fist.webp',
  },
  {
    id: 'iron_man',
    name: 'Iron Man',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Doctor Strange',
        base: 'Repulsor blasts gain increased accuracy and projectile velocity at long range.',
        enhanced: 'Energy blast damage fall-off reduced when Doctor Strange is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Rocket Raccoon',
        base: 'Overloading the arc reactor deploys a small targeting micro-drone.',
        enhanced: 'Micro-drone lock-on speed enhanced if Rocket Raccoon is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/iron-man.webp',
  },
  {
    id: 'jeff_the_land_shark',
    name: 'Jeff the Land Shark',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Luna Snow',
        base: 'Swimming through ice paths grants an immediate burst of movement speed.',
        enhanced: 'Swimming speed multiplier increased when Luna Snow is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Namor',
        base: 'Spitting healing bubbles cleanses basic slow effects from friendly targets.',
        enhanced: 'Bubbles apply a minor jump-height boost if Namor is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/jeff-the-land-shark.webp',
  },
  {
    id: 'jubilee',
    name: 'Jubilee',
    role: 'strategist',
    unlocked: true,
    isNew: true,
    note: 'New Character at launch for Season 9.',
    loadouts: [
      {
        partner: 'Cyclops',
        base: 'Blinding firework explosions lower target weapon reload speed parameters.',
        enhanced: 'Blindness duration extended slightly when Cyclops is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Wolverine',
        base: 'Pyrotechnic healing sparks scale up when tracking low-health targets.',
        enhanced: 'Healing output tracking threshold optimized if Wolverine is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/jubilee.webp',
  },
  {
    id: 'loki',
    name: 'Loki',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Hela',
        base: 'Illusion clones deal a small amount of reflection damage when destroyed.',
        enhanced: 'Reflection explosion radius increased when Hela is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Thor',
        base: 'Swapping places with an active clone grants a tiny shield layer.',
        enhanced: 'Shield duration extended if Thor is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/loki.webp',
  },
  {
    id: 'luna_snow',
    name: 'Luna Snow',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Jeff the Land Shark',
        base: 'Ice fields slow down approaching enemy vanguard units.',
        enhanced: 'Slowing magnitude scaled up when Jeff is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Namor',
        base: 'Idol performances trigger automatic passive health regeneration on yourself.',
        enhanced: 'Self-healing ticks for higher values if Namor is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/luna-snow.webp',
  },
  {
    id: 'magik',
    name: 'Magik',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Black Panther',
        base: 'Stepping through a portal empowers the next melee slash with bonus reach.',
        enhanced: 'Reach distance scaled higher when Black Panther is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Storm',
        base: 'Limbo strikes charge faster when staying near elemental active zones.',
        enhanced: 'Ultimate charge gain accelerated if Storm is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/magik.webp',
  },
  {
    id: 'magneto',
    name: 'Magneto',
    role: 'vanguard',
    unlocked: true,
    loadouts: [
      {
        partner: 'Scarlet Witch',
        base: 'Metallic shield absorption fields convert enemy bullets into kinetic energy projectiles.',
        enhanced: 'Projectile discharge damage scales up with Scarlet Witch present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Polaris',
        base: 'Passively increases the maximum shield volume available to frontline units.',
        enhanced: 'Shield regeneration rate boosted when Polaris is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/magneto.webp',
  },
  {
    id: 'mantis',
    name: 'Mantis',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Adam Warlock',
        base: 'Nature paths boost the movement speed metrics of all healing recipients.',
        enhanced: 'Speed boost duration extended if Adam Warlock is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Groot',
        base: 'Applying life spores to tanks increases their incoming healing efficiency modifiers.',
        enhanced: ' spore attachment duration extended when Groot is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/mantis.webp',
  },
  {
    id: 'mister_fantastic',
    name: 'Mister Fantastic',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Invisible Woman',
        base: 'Elastic grapples pull targets further away from their squad layout positions.',
        enhanced: 'Grapple stun duration increased when Invisible Woman is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Human Torch',
        base: 'Stretching physical parameters reduces incoming critical headshot damage multipliers.',
        enhanced: 'Headshot damage reduction increased when paired with Human Torch.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/mister-fantastic.webp',
  },
  {
    id: 'moon_knight',
    name: 'Moon Knight',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Blade',
        base: 'Crescent dart throwing patterns expand to cover a wider tracking spread arc.',
        enhanced: 'Dart velocity increased if Blade is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Devil Dinosaur',
        base: 'Landing a critical strike lowers active cooldown timers on utility tools.',
        enhanced: 'Cooldown reduction increased when Devil Dinosaur is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/moon-knight.webp',
  },
  {
    id: 'namor',
    name: 'Namor',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Luna Snow',
        base: 'Summoning aquatic tools applies a wet state that interacts with cold elements.',
        enhanced: 'Wet duration expanded when Luna Snow is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Jeff the Land Shark',
        base: 'Trident strikes deal bonus pierce metrics to heavy shield structures.',
        enhanced: 'Shield damage multiplier increased if Jeff is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/namor.webp',
  },
  {
    id: 'peni_parker',
    name: 'Peni Parker',
    role: 'vanguard',
    unlocked: true,
    loadouts: [
      {
        partner: 'Spider-Man',
        base: 'Cybernetic web nests slow down high-speed mechanical project elements.',
        enhanced: 'Web nest attachment range expanded if Spider-Man is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Venom',
        base: 'Mech armor thrusters consume less resource metrics during continuous vertical climbs.',
        enhanced: 'Vertical climb velocity increased when Venom is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/peni-parker.webp',
  },
  {
    id: 'psylocke',
    name: 'Psylocke',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Emma Frost',
        base: 'Psionic blade sweeps pass through basic physical defensive wall objects.',
        enhanced: 'Blade sweep damage scales higher when Emma Frost is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Iron Fist',
        base: 'Telepathic dashes grant a brief windows of complete evasion frameworks.',
        enhanced: 'Evasion duration extended if Iron Fist is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/psylocke.webp',
  },
  {
    id: 'rocket_raccoon',
    name: 'Rocket Raccoon',
    role: 'strategist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Groot',
        base: 'Riding on friendly tank modules boosts primary weapon fire rate speeds.',
        enhanced: 'Fire rate multiplier increased when Groot is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Iron Man',
        base: 'Repair kits supply bonus ammo counts to high-damage offensive units.',
        enhanced: 'Ammo replenishment count increased if Iron Man is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/rocket-raccoon.webp',
  },
  {
    id: 'rogue',
    name: 'Rogue',
    role: 'vanguard',
    unlocked: true,
    note: 'HP reduced to 350; uses 225 Regenerative Shield. Damage reduction lowered to 55%.',
    loadouts: [
      {
        partner: 'Wolverine',
        base: 'Stealing powers from targets adds a layer of continuous health recovery points.',
        enhanced: 'Recovery speed accelerated when Wolverine is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Spider-Man',
        base: 'Physical punch combos pull rogue units closer to target layouts.',
        enhanced: 'Pull distance metrics enhanced if Spider-Man is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/rogue.webp',
  },
  {
    id: 'scarlet_witch',
    name: 'Scarlet Witch',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Magneto',
        base: 'Chaos magic hexes disrupt enemy active ultimate charge regeneration processes.',
        enhanced: 'Disruption duration extended when Magneto is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Loki',
        base: 'Teleportation metrics leave behind an unstable chaos particle trap object.',
        enhanced: 'Trap detonation damage increased if Loki is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/scarlet-witch.webp',
  },
  {
    id: 'spider_man',
    name: 'Spider-Man',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Black Cat',
        base: 'Web shooters pull targets away from map ledge extraction points.',
        enhanced: 'Pull velocity increased when paired with Black Cat.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Peni Parker',
        base: 'Wall crawling speed is accelerated on high-vertical structural objects.',
        enhanced: 'Wall crawl stamina efficiency increased when Peni Parker is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/spider-man.webp',
  },
  {
    id: 'squirrel_girl',
    name: 'Squirrel Girl',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Deadpool',
        base: 'Squirrel swarms block target character vision perimeters with fuzzy static filters.',
        enhanced: 'Vision blocking density increased when Deadpool is on your team.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Groot',
        base: 'Acorn artillery items apply small structural armor debuffs to mechanical tanks.',
        enhanced: 'Debuff scaling enhanced if Groot is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/squirrel-girl.webp',
  },
  {
    id: 'star_lord',
    name: 'Star-Lord',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Rocket Raccoon',
        base: 'Jetpack maneuvers burn less global fuel metrics when flying backward profiles.',
        enhanced: 'Fuel capacity increased when Rocket Raccoon is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Adam Warlock',
        base: 'Blaster shots deal bonus damage parameters against shield target units.',
        enhanced: 'Shield break damage increased if Adam Warlock is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/star-lord.webp',
  },
  {
    id: 'storm',
    name: 'Storm',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Thor',
        base: 'Weather switching mechanics emit a continuous chain lightning pulse string.',
        enhanced: 'Lightning pulse frequency accelerated when Thor is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Cyclops',
        base: 'Wind vortex acceleration corridors grant increased forward speed settings.',
        enhanced: 'Corridor width expanded if Cyclops is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/storm.webp',
  },
  {
    id: 'the_hood',
    name: 'The Hood',
    role: 'vanguard',
    unlocked: false,
    isNew: true,
    note: 'Mid-season release confirmed for Season 9.5.',
    loadouts: [
      {
        partner: 'Elsa Bloodstone',
        base: 'Dark magic pistols fire faster when health drop below critical metrics.',
        enhanced: 'Upgraded tier unlocked when Elsa Bloodstone joins match operations.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Black Cat',
        base: 'Invisibility cloaks hide health bar visual components completely from view panels.',
        enhanced: 'Cloak uptime extended if Black Cat is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/the-hood.webp',
  },
  {
    id: 'the_punisher',
    name: 'The Punisher',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Captain America',
        base: 'Deploying turrets triggers a localized bullet defense dome system layer.',
        enhanced: 'Dome durability metrics enhanced if Captain America is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Winter Soldier',
        base: 'Shotgun blast swaps grant instant max-tier speed velocity boosts.',
        enhanced: 'Swap weapon speed accelerated when paired with Winter Soldier.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/the-punisher.webp',
  },
  {
    id: 'the_thing',
    name: 'The Thing',
    role: 'vanguard',
    unlocked: true,
    note: 'Stone Haymaker health threshold ceiling raised to 150.',
    loadouts: [
      {
        partner: 'Invisible Woman',
        base: 'Rock shields generate extra layer attributes when defending low-health squishies.',
        enhanced: 'Shield protection volume expanded when Invisible Woman is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Human Torch',
        base: 'Ground slams create molten lava cracks that burn targets tracking through zones.',
        enhanced: 'Lava burn damage ticks higher if Human Torch is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/the-thing.webp',
  },
  {
    id: 'thor',
    name: 'Thor',
    role: 'vanguard',
    unlocked: true,
    loadouts: [
      {
        partner: 'Loki',
        base: 'Lightning strikes restore partial ultimate energy bars on multi-target connections.',
        enhanced: 'Energy return percentage scaled up when Loki is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Angela',
        base: 'Hammer throws knock down targets for slightly longer temporal settings.',
        enhanced: 'Knockdown duration extended if Angela is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/thor.webp',
  },
  {
    id: 'venom',
    name: 'Venom',
    role: 'vanguard',
    unlocked: true,
    loadouts: [
      {
        partner: 'Spider-Man',
        base: 'Symbiote ropes grapple enemy targets further away from extraction routes.',
        enhanced: 'Grapple speed metrics enhanced when Spider-Man is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Peni Parker',
        base: 'Shield generation tools scale up when surrounding structural traps are active.',
        enhanced: 'Shield metrics threshold raised if Peni Parker is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/venom.webp',
  },
  {
    id: 'winter_soldier',
    name: 'Winter Soldier',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Captain America',
        base: 'Cybernetic punches bypass standard front-facing shield barrier objects.',
        enhanced: 'Punch impact damage increased when Captain America is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Black Widow',
        base: 'Emp rounds short-circuit enemy utility weapon reload platforms.',
        enhanced: 'Short-circuit duration extended if Black Widow is present.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/winter-soldier.webp',
  },
  {
    id: 'wolverine',
    name: 'Wolverine',
    role: 'duelist',
    unlocked: true,
    loadouts: [
      {
        partner: 'Hulk',
        base: 'Berserker rage states boost life tracking mechanics when low on health points.',
        enhanced: 'Life tracking recovery percentage increased when Hulk is present.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Cyclops',
        base: 'Claw lunges bypass a fraction of heavy tank armor metrics.',
        enhanced: 'Armor bypass percentage enhanced if Cyclops is on your team.',
        enhancedConfirmed: false,
      },
    ],
    img: '/images/wolverine.webp',
  },
]

export function getHeroById(id: string | undefined): Hero | undefined {
  if (!id) return undefined
  return HEROES.find((h) => h.id === id)
}
