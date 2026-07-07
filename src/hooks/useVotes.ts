import { useCallback, useEffect, useState } from 'react'
import { castVote, getVotes } from '@/lib/votes'
import type { VoteSide, VoteTally } from '@/types/hero'

const EMPTY: VoteTally = { a: 0, b: 0 }

export function useVotes(heroId: string | undefined) {
  const [votes, setVotes] = useState<VoteTally>(EMPTY)
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
    async (side: VoteSide) => {
      if (!heroId) return
      const next = await castVote(heroId, side)
      setVotes(next)
    },
    [heroId],
  )

  return { votes, loading, vote }
}
