import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CHART_COLORS } from '@/constants/chartColors'
import { RANK_LABEL, RANK_OPTIONS, RANK_SHORT_LABEL } from '@/constants/voterProfile'
import type { RankTier, VoteTally } from '@/types/hero'

interface LoadoutRankChartProps {
  byRank: Record<RankTier, VoteTally>
  labelA: string
  labelB: string
}

interface ChartRow {
  rank: RankTier
  shortLabel: string
  fullLabel: string
  pctA: number
  pctB: number
  total: number
}

export function LoadoutRankChart({ byRank, labelA, labelB }: LoadoutRankChartProps) {
  const data: ChartRow[] = RANK_OPTIONS.map(({ value }) => {
    const tally = byRank[value] ?? { a: 0, b: 0 }
    const total = tally.a + tally.b
    return {
      rank: value,
      shortLabel: RANK_SHORT_LABEL[value],
      fullLabel: RANK_LABEL[value],
      pctA: total === 0 ? 0 : Math.round((tally.a / total) * 100),
      pctB: total === 0 ? 0 : Math.round((tally.b / total) * 100),
      total,
    }
  })

  const hasAnyVotes = data.some((row) => row.total > 0)

  return (
    <div className="border-t border-line px-7 py-6">
      <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-neutral-400">
        Pick rate by rank
      </div>

      {!hasAnyVotes ? (
        <div className="flex h-[180px] items-center justify-center text-[13px] text-neutral-500">
          No votes yet at any rank — be the first
        </div>
      ) : (
        <>
          <div className="mb-3 flex gap-4 text-[12px] text-neutral-400">
            <LegendDot color={CHART_COLORS.duelist} label={`${labelA} loadout`} />
            <LegendDot color={CHART_COLORS.gold} label={`${labelB} loadout`} />
          </div>

          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barGap={2} margin={{ top: 4, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke={CHART_COLORS.line} />
                <XAxis
                  dataKey="shortLabel"
                  tick={{ fill: CHART_COLORS.textDim, fontSize: 11 }}
                  axisLine={{ stroke: CHART_COLORS.line }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v: number) => `${v}%`}
                  tick={{ fill: CHART_COLORS.textDim, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={38}
                />
                <Tooltip
                  cursor={{ fill: CHART_COLORS.panel2 }}
                  content={(props) => (
                    <RankTooltip
                      active={props.active}
                      payload={props.payload as unknown as { payload: ChartRow }[] | undefined}
                      labelA={labelA}
                      labelB={labelB}
                    />
                  )}
                />
                <Bar dataKey="pctA" fill={CHART_COLORS.duelist} radius={[3, 3, 0, 0]} maxBarSize={16} />
                <Bar dataKey="pctB" fill={CHART_COLORS.gold} radius={[3, 3, 0, 0]} maxBarSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  )
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  )
}

function RankTooltip({
  active,
  payload,
  labelA,
  labelB,
}: {
  active?: boolean
  payload?: { payload: ChartRow }[]
  labelA: string
  labelB: string
}) {
  if (!active || !payload || payload.length === 0) return null
  const row = payload[0]?.payload
  if (!row) return null

  return (
    <div className="rounded-lg border border-line bg-panel px-3 py-2.5 text-[12px] shadow-lg">
      <div className="mb-1.5 font-bold">{row.fullLabel}</div>
      <div className="text-neutral-300">
        {labelA}: <span className="font-semibold text-duelist">{row.pctA}%</span>
      </div>
      <div className="text-neutral-300">
        {labelB}: <span className="font-semibold text-gold">{row.pctB}%</span>
      </div>
      <div className="mt-1 text-neutral-500">{row.total} vote{row.total === 1 ? '' : 's'}</div>
    </div>
  )
}
