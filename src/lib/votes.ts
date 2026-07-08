import { RANK_OPTIONS } from '@/constants/voterProfile'
import type { RankTier, VoteBreakdown, VoteSide, VoteTally } from '@/types/hero'

/**
 * Vote persistence, abstracted behind a small interface (same deal as
 * `lib/voterProfile.ts` — localStorage today, swap for Supabase later).
 *
 * To move onto Supabase:
 *   1. Add a `hero_loadout_votes` table with a `rank` column (see
 *      supabase/schema.sql) and its `cast_vote` RPC.
 *   2. Replace `getVotes` to select rows for a hero and group by (side, rank).
 *   3. Replace `castVote` to call `cast_vote` with { p_hero_id, p_side, p_rank }.
 *   Nothing outside this file needs to change — components only talk to
 *   `useVotes` (see `@/hooks/useVotes`).
 */

const STORAGE_PREFIX = 'rivals-votes:'

function emptyTally(): VoteTally {
  return { a: 0, b: 0 }
}

function emptyBreakdown(): VoteBreakdown {
  const byRank = {} as Record<RankTier, VoteTally>
  for (const { value } of RANK_OPTIONS) {
    byRank[value] = emptyTally()
  }
  return { overall: emptyTally(), byRank }
}

function isBreakdownShape(value: unknown): value is VoteBreakdown {
  return (
    !!value &&
    typeof value === 'object' &&
    'overall' in (value as Record<string, unknown>) &&
    'byRank' in (value as Record<string, unknown>)
  )
}

export async function getVotes(heroId: string): Promise<VoteBreakdown> {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + heroId)
    if (!raw) return emptyBreakdown()

    const parsed = JSON.parse(raw) as unknown
    const breakdown = emptyBreakdown()

    if (isBreakdownShape(parsed)) {
      breakdown.overall = parsed.overall
      // Merge onto a fresh empty map so a rank added after votes already
      // existed still shows up with a 0 tally instead of being undefined.
      breakdown.byRank = { ...breakdown.byRank, ...parsed.byRank }
      return breakdown
    }

    // Legacy `{ a, b }` shape from before rank breakdowns existed — keep
    // the totals, just without a rank split for votes cast before this.
    const legacy = parsed as Partial<VoteTally>
    breakdown.overall = { a: legacy.a ?? 0, b: legacy.b ?? 0 }
    return breakdown
  } catch {
    return emptyBreakdown()
  }
}

export async function castVote(
  heroId: string,
  side: VoteSide,
  rank: RankTier,
): Promise<VoteBreakdown> {
  const current = await getVotes(heroId)
  const next: VoteBreakdown = {
    overall: { ...current.overall, [side]: current.overall[side] + 1 },
    byRank: {
      ...current.byRank,
      [rank]: { ...current.byRank[rank], [side]: current.byRank[rank][side] + 1 },
    },
  }
  try {
    localStorage.setItem(STORAGE_PREFIX + heroId, JSON.stringify(next))
  } catch {
    // localStorage unavailable — vote just won't persist this session
  }
  return next
}
