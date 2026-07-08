import { lazy, Suspense, useEffect, useState } from 'react'
import { ROLE_LABEL } from '@/constants/roles'
import { PLATFORM_LABEL, RANK_LABEL, REGION_LABEL } from '@/constants/voterProfile'
import { useVotes } from '@/hooks/useVotes'
import { useVoterProfile } from '@/hooks/useVoterProfile'
import type { Hero, VoteSide, VoterProfile } from '@/types/hero'
import { LoadoutPanel } from './LoadoutPanel'
import { LockedHeroPanel } from './LockedHeroPanel'
import { VoteSplitBar } from './VoteSplitBar'
import { VoterProfileModal } from './VoterProfileModal'

// Recharts is the single heaviest dependency in this app — only load it
// once someone actually opens a hero's modal, not on first page load.
const LoadoutRankChart = lazy(() =>
  import('./LoadoutRankChart').then((m) => ({ default: m.LoadoutRankChart })),
)

interface LoadoutModalProps {
  hero: Hero | undefined
  onClose: () => void
}

export function LoadoutModal({ hero, onClose }: LoadoutModalProps) {
  const { votes, vote } = useVotes(hero?.unlocked ? hero.id : undefined)
  const { profile, saveProfile } = useVoterProfile()

  // Which side (if any) is waiting on the profile survey before it's cast.
  const [pendingVote, setPendingVote] = useState<VoteSide | null>(null)
  const [editingProfile, setEditingProfile] = useState(false)

  // Reset any in-flight survey state when the open hero changes.
  useEffect(() => {
    setPendingVote(null)
    setEditingProfile(false)
  }, [hero?.id])

  useEffect(() => {
    if (!hero) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [hero, onClose])

  if (!hero) return null

  const requestVote = (side: VoteSide) => {
    if (!profile) {
      setPendingVote(side)
    } else {
      vote(side, profile.rank)
    }
  }

  const handleProfileSubmit = (next: VoterProfile) => {
    saveProfile(next)
    if (pendingVote) {
      // Use `next.rank` (not `profile`) since the just-submitted profile
      // hasn't necessarily flowed through a re-render yet.
      vote(pendingVote, next.rank)
      setPendingVote(null)
    }
    setEditingProfile(false)
  }

  const handleProfileCancel = () => {
    setPendingVote(null)
    setEditingProfile(false)
  }

  const showSurvey = hero.unlocked && (pendingVote !== null || editingProfile)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-9 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-[840px] animate-[pop_.18s_ease] overflow-hidden rounded-2xl border border-line bg-panel">
        {!hero.unlocked ? (
          <LockedHeroPanel hero={hero} onClose={onClose} />
        ) : showSurvey ? (
          <VoterProfileModal
            initial={profile}
            onSubmit={handleProfileSubmit}
            onCancel={handleProfileCancel}
          />
        ) : (
          <>
            <div className="flex items-start justify-between border-b border-line px-7 py-6">
              <div>
                <h2 className="mb-1.5 text-2xl font-black uppercase tracking-tight">{hero.name}</h2>
                <p className="text-[13.5px] text-neutral-400">
                  {ROLE_LABEL[hero.role]} · Two Team-Up Loadouts to choose from
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-line bg-panel-2 text-neutral-400 hover:text-neutral-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-0 px-7 pb-2 pt-6 md:grid-cols-[1fr_auto_1fr]">
              <LoadoutPanel
                label="Loadout A"
                loadout={hero.loadouts![0]}
                onVote={() => requestVote('a')}
                picked={votes.overall.a > votes.overall.b}
              />
              <div className="flex items-center justify-center px-3.5 py-3.5 font-black text-gold">
                VS
              </div>
              <LoadoutPanel
                label="Loadout B"
                loadout={hero.loadouts![1]}
                onVote={() => requestVote('b')}
                picked={votes.overall.b > votes.overall.a}
              />
            </div>

            <VoteSplitBar
              votes={votes.overall}
              labelA={hero.loadouts![0].partner}
              labelB={hero.loadouts![1].partner}
            />

            <Suspense
              fallback={
                <div className="flex h-[220px] items-center justify-center border-t border-line text-[13px] text-neutral-500">
                  Loading rank breakdown…
                </div>
              }
            >
              <LoadoutRankChart
                byRank={votes.byRank}
                labelA={hero.loadouts![0].partner}
                labelB={hero.loadouts![1].partner}
              />
            </Suspense>

            {profile && (
              <div className="flex items-center justify-center gap-2 border-t border-line px-7 py-3 text-[11.5px] text-neutral-400">
                <span>
                  Voting as {PLATFORM_LABEL[profile.platform]} · {REGION_LABEL[profile.region]} ·{' '}
                  {RANK_LABEL[profile.rank]}
                </span>
                <button
                  onClick={() => setEditingProfile(true)}
                  className="font-bold text-gold hover:underline"
                >
                  change
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
