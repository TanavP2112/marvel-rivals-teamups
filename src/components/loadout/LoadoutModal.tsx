import { useEffect } from 'react'
import { ROLE_LABEL } from '@/constants/roles'
import { useVotes } from '@/hooks/useVotes'
import type { Hero, VoteSide } from '@/types/hero'
import { LoadoutPanel } from './LoadoutPanel'
import { LockedHeroPanel } from './LockedHeroPanel'
import { VoteSplitBar } from './VoteSplitBar'

interface LoadoutModalProps {
  hero: Hero | undefined
  onClose: () => void
}

export function LoadoutModal({ hero, onClose }: LoadoutModalProps) {
  const { votes, vote } = useVotes(hero?.unlocked ? hero.id : undefined)

  useEffect(() => {
    if (!hero) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [hero, onClose])

  if (!hero) return null

  const handleVote = (side: VoteSide) => vote(side)

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
                onVote={() => handleVote('a')}
                picked={votes.a > votes.b}
              />
              <div className="flex items-center justify-center px-3.5 py-3.5 font-black text-gold">
                VS
              </div>
              <LoadoutPanel
                label="Loadout B"
                loadout={hero.loadouts![1]}
                onVote={() => handleVote('b')}
                picked={votes.b > votes.a}
              />
            </div>

            <VoteSplitBar
              votes={votes}
              labelA={hero.loadouts![0].partner}
              labelB={hero.loadouts![1].partner}
            />
          </>
        )}
      </div>
    </div>
  )
}
