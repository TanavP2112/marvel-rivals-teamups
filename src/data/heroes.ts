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
    id: 'hulk',
    name: 'Hulk',
    role: 'vanguard',
    unlocked: true,
    loadouts: [
      {
        partner: 'Captain America',
        base: 'Gain a ground-slam attack that damages and knocks back nearby enemies.',
        enhanced:
          'Upgraded version confirmed when Captain America is on your team — exact numbers land with full patch notes.',
        enhancedConfirmed: false,
      },
      {
        partner: 'Wolverine',
        base: 'Gain crowd-control immunity, shrugging off stuns and roots.',
        enhanced:
          'Upgraded version confirmed when Wolverine is on your team — exact numbers land with full patch notes.',
        enhancedConfirmed: false,
      },
    ],
  },
  { id: 'doctor-strange', name: 'Doctor Strange', role: 'vanguard', unlocked: false },
  { id: 'groot', name: 'Groot', role: 'vanguard', unlocked: false },
  { id: 'magneto', name: 'Magneto', role: 'vanguard', unlocked: false },
  { id: 'storm', name: 'Storm', role: 'duelist', unlocked: false },
  {
    id: 'black-widow',
    name: 'Black Widow',
    role: 'duelist',
    unlocked: false,
    note: 'Full rework confirmed for S9',
  },
  { id: 'spider-man', name: 'Spider-Man', role: 'duelist', unlocked: false },
  { id: 'wolverine', name: 'Wolverine', role: 'duelist', unlocked: false },
  { id: 'luna-snow', name: 'Luna Snow', role: 'strategist', unlocked: false },
  { id: 'rocket-raccoon', name: 'Rocket Raccoon', role: 'strategist', unlocked: false },
  { id: 'jeff', name: 'Jeff the Landshark', role: 'strategist', unlocked: false },
  {
    id: 'jubilee',
    name: 'Jubilee',
    role: 'strategist',
    unlocked: false,
    isNew: true,
    note: 'New Strategist this season',
  },
]

export function getHeroById(id: string | undefined): Hero | undefined {
  if (!id) return undefined
  return HEROES.find((h) => h.id === id)
}
