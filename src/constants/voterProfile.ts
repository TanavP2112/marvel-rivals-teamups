import type { Platform, RankTier, Region } from '@/types/hero'

export const PLATFORM_OPTIONS: { value: Platform; label: string }[] = [
  { value: 'pc', label: 'PC' },
  { value: 'console', label: 'Console' },
]

export const REGION_OPTIONS: { value: Region; label: string }[] = [
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
]

export const RANK_OPTIONS: { value: RankTier; label: string }[] = [
  { value: 'bronze', label: 'Bronze' },
  { value: 'silver', label: 'Silver' },
  { value: 'gold', label: 'Gold' },
  { value: 'platinum', label: 'Platinum' },
  { value: 'diamond', label: 'Diamond' },
  { value: 'grandmaster', label: 'Grandmaster' },
  { value: 'celestial', label: 'Celestial' },
  { value: 'eternity', label: 'Eternity' },
  { value: 'one-above-all', label: 'One Above All' },
]

/** Tailwind gradient stops per rank — a stand-in for real rank badge art. */
export const RANK_SWATCH: Record<RankTier, string> = {
  bronze: 'from-amber-700 to-amber-500',
  silver: 'from-slate-400 to-slate-200',
  gold: 'from-yellow-500 to-amber-300',
  platinum: 'from-teal-400 to-cyan-200',
  diamond: 'from-sky-400 to-blue-300',
  grandmaster: 'from-fuchsia-500 to-purple-300',
  celestial: 'from-indigo-400 to-violet-200',
  eternity: 'from-rose-500 to-pink-300',
  'one-above-all': 'from-gold to-white',
}

export const RANK_LABEL: Record<RankTier, string> = Object.fromEntries(
  RANK_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RankTier, string>

/** Compact labels for tight spaces like chart axes — full names in RANK_LABEL. */
export const RANK_SHORT_LABEL: Record<RankTier, string> = {
  bronze: 'BRZ',
  silver: 'SLV',
  gold: 'GLD',
  platinum: 'PLT',
  diamond: 'DMD',
  grandmaster: 'GM',
  celestial: 'CEL',
  eternity: 'ETN',
  'one-above-all': 'OAA',
}

export const REGION_LABEL: Record<Region, string> = Object.fromEntries(
  REGION_OPTIONS.map((o) => [o.value, o.label]),
) as Record<Region, string>

export const PLATFORM_LABEL: Record<Platform, string> = Object.fromEntries(
  PLATFORM_OPTIONS.map((o) => [o.value, o.label]),
) as Record<Platform, string>
