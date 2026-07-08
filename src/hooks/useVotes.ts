import { useCallback, useEffect, useState } from 'react'
import { castVote, getVotes } from '@/lib/votes'
import type { RankTier, VoteBreakdown, VoteSide } from '@/types/hero'

const EMPTY: VoteBreakdown = { overall: { a: 0, b: 0 }, byRank: {} as VoteBreakdown['byRank'] }

export function useVotes(heroId: string | undefined) {
  const [votes, setVotes] = useState<VoteBreakdown>(EMPTY)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!heroId) {
      setVotes(EMPTY)
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    getVotes(heroId).then((v) => {
      if (!cancelled) {
        setVotes(v)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [heroId])

  const vote = useCallback(
    async (side: VoteSide, rank: RankTier) => {
      if (!heroId) return
      const next = await castVote(heroId, side, rank)
      setVotes(next)
    },
    [heroId],
  )

  return { votes, loading, vote }
}
