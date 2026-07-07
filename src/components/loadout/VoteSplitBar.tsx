import type { VoteTally } from '@/types/hero'

interface VoteSplitBarProps {
  votes: VoteTally
  labelA: string
  labelB: string
}

export function VoteSplitBar({ votes, labelA, labelB }: VoteSplitBarProps) {
  const total = votes.a + votes.b
  const pctA = total === 0 ? 50 : Math.round((votes.a / total) * 100)
  const pctB = 100 - pctA

  return (
    <div className="px-7 pb-7 pt-4">
      <div className="mb-2 flex justify-between text-[11.5px] font-bold text-neutral-400">
        <span>
          {labelA} loadout — {pctA}%
        </span>
        <span>
          {labelB} loadout — {pctB}%
        </span>
      </div>
      <div className="flex h-2.5 overflow-hidden rounded-md bg-panel-2">
        <div className="bg-duelist" style={{ width: `${pctA}%` }} />
        <div className="bg-gold" style={{ width: `${pctB}%` }} />
      </div>
      <div className="mt-2 text-center text-[11px] text-neutral-400">
        {total === 0 ? 'No votes yet — be the first' : `${total} vote${total === 1 ? '' : 's'} so far`}
      </div>
    </div>
  )
}
