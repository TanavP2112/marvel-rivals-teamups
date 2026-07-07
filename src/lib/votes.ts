import type { VoteSide, VoteTally } from '@/types/hero'

/**
 * Vote persistence, abstracted behind a small interface.
 *
 * Today this reads/writes localStorage, which is fine for local dev but
 * is per-browser only — votes won't be shared across visitors.
 *
 * To move this onto Supabase once the backend is ready:
 *   1. Create the `hero_loadout_votes` table (see supabase/schema.sql)
 *      and the `increment_vote` RPC function defined there.
 *   2. Replace the bodies of `getVotes` / `castVote` below with calls
 *      through `supabase` from `@/lib/supabase`, e.g.
 *
 *        const { data } = await supabase
 *          .from('hero_loadout_votes')
 *          .select('side, votes')
 *          .eq('hero_id', heroId)
 *
 *        await supabase.rpc('increment_vote', { p_hero_id: heroId, p_side: side })
 *
 *   The rest of the app only talks to `useVotes` (see `@/hooks/useVotes`),
 *   so no component changes are needed when you swap this out.
 */

const STORAGE_PREFIX = 'rivals-votes:'

export async function getVotes(heroId: string): Promise<VoteTally> {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + heroId)
    return raw ? (JSON.parse(raw) as VoteTally) : { a: 0, b: 0 }
  } catch {
    return { a: 0, b: 0 }
  }
}

export async function castVote(heroId: string, side: VoteSide): Promise<VoteTally> {
  const current = await getVotes(heroId)
  const next: VoteTally = { ...current, [side]: current[side] + 1 }
  try {
    localStorage.setItem(STORAGE_PREFIX + heroId, JSON.stringify(next))
  } catch {
    // localStorage unavailable (e.g. private browsing) — vote just won't persist
  }
  return next
}
