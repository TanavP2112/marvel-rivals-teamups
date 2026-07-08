import { useState } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import { PLATFORM_OPTIONS, RANK_OPTIONS, RANK_SWATCH, REGION_OPTIONS } from '@/constants/voterProfile'
import type { Platform, RankTier, Region, VoterProfile } from '@/types/hero'

interface VoterProfileModalProps {
  initial: VoterProfile | null
  onSubmit: (profile: VoterProfile) => void
  onCancel: () => void
}

export function VoterProfileModal({ initial, onSubmit, onCancel }: VoterProfileModalProps) {
  const [platform, setPlatform] = useState<Platform | null>(initial?.platform ?? null)
  const [region, setRegion] = useState<Region | null>(initial?.region ?? null)
  const [rank, setRank] = useState<RankTier | null>(initial?.rank ?? null)

  const canSubmit = platform !== null && region !== null && rank !== null

  return (
    <div className="px-7 py-7">
      <h2 className="mb-1.5 text-xl font-black uppercase tracking-tight">
        Quick check before you vote
      </h2>
      <p className="mb-6 max-w-lg text-[13.5px] leading-relaxed text-neutral-400">
        We ask this once so loadout votes can be broken down by platform, region, and rank. It's
        saved on this device only — change it any time from the vote screen.
      </p>

      <Section title="Platform">
        <div className="grid max-w-xs grid-cols-2 gap-3">
          {PLATFORM_OPTIONS.map((opt) => (
            <OptionCard key={opt.value} selected={platform === opt.value} onClick={() => setPlatform(opt.value)}>
              {opt.label}
            </OptionCard>
          ))}
        </div>
      </Section>

      <Section title="Region">
        <div className="grid max-w-md grid-cols-3 gap-3">
          {REGION_OPTIONS.map((opt) => (
            <OptionCard key={opt.value} selected={region === opt.value} onClick={() => setRegion(opt.value)}>
              {opt.label}
            </OptionCard>
          ))}
        </div>
      </Section>

      <Section title="Rank">
        <div className="grid max-w-md grid-cols-3 gap-3">
          {RANK_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setRank(opt.value)}
              className={clsx(
                'flex flex-col items-center gap-2 rounded-lg border px-3 py-3.5 transition-colors',
                rank === opt.value
                  ? 'border-gold bg-panel-2'
                  : 'border-line bg-panel-2/50 hover:border-neutral-600',
              )}
            >
              <span
                className={clsx(
                  'h-6 w-6 rotate-45 rounded-[6px] bg-gradient-to-br',
                  RANK_SWATCH[opt.value],
                )}
              />
              <span className="text-[12px] font-semibold">{opt.label}</span>
            </button>
          ))}
        </div>
      </Section>

      <div className="mt-7 flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="rounded-lg border border-line px-4 py-2.5 text-[13px] font-bold text-neutral-400 transition-colors hover:text-neutral-100"
        >
          Cancel
        </button>
        <button
          disabled={!canSubmit}
          onClick={() => canSubmit && onSubmit({ platform, region, rank })}
          className={clsx(
            'rounded-lg px-5 py-2.5 text-[13px] font-extrabold tracking-wide transition-colors',
            canSubmit
              ? 'bg-gold text-[#1a1200] hover:brightness-110'
              : 'cursor-not-allowed bg-panel-2 text-neutral-500',
          )}
        >
          Cast my vote
        </button>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <div className="mb-2.5 text-[11px] font-black uppercase tracking-wide text-neutral-400">
        {title}
      </div>
      {children}
    </div>
  )
}

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-lg border px-4 py-3 text-[13px] font-semibold transition-colors',
        selected
          ? 'border-gold bg-panel-2 text-gold'
          : 'border-line bg-panel-2/50 text-neutral-300 hover:border-neutral-600',
      )}
    >
      {children}
    </button>
  )
}
