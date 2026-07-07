export type Role = 'vanguard' | 'duelist' | 'strategist'

export interface Loadout {
  /** The hero whose presence on your team enhances this loadout. */
  partner: string
  /** Always-active effect, regardless of team composition. */
  base: string
  /** Upgraded effect when `partner` is also on your team. */
  enhanced: string
  /** False until NetEase has published exact enhanced-effect numbers. */
  enhancedConfirmed: boolean
}

export interface Hero {
  id: string
  name: string
  role: Role
  /** True once both loadouts for this hero are confirmed and filled in. */
  unlocked: boolean
  /** Flags a hero new to this season. */
  isNew?: boolean
  /** Optional callout, e.g. "Full rework confirmed for S9". */
  note?: string
  /** Present once `unlocked` is true — always exactly two options. */
  loadouts?: [Loadout, Loadout]
}

export type VoteSide = 'a' | 'b'

export interface VoteTally {
  a: number
  b: number
}
