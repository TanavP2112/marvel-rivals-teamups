import type { VoterProfile } from '@/types/hero'

/**
 * Same story as `lib/votes.ts` — localStorage for now, one device only.
 *
 * If this moves to Supabase later, the natural home for this data is as
 * extra columns on the vote row itself (platform/region/rank alongside
 * hero_id + side in `hero_loadout_votes`), so votes can be broken down
 * by who cast them without a separate profiles table.
 */

const KEY = 'rivals-voter-profile'

export function getVoterProfile(): VoterProfile | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as VoterProfile) : null
  } catch {
    return null
  }
}

export function setVoterProfile(profile: VoterProfile): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(profile))
  } catch {
    // localStorage unavailable — we'll just ask again next time
  }
}
