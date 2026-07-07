import { useCountdown } from '@/hooks/useCountdown'

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="min-w-16 rounded-lg border border-line bg-panel px-3.5 py-2.5">
      <b className="block font-display text-2xl font-black tabular-nums">
        {String(value).padStart(2, '0')}
      </b>
      <small className="mt-0.5 block text-[10px] uppercase tracking-wide text-neutral-400">
        {label}
      </small>
    </div>
  )
}

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <div>
      <div className="inline-flex gap-2.5">
        <Cell value={days} label="days" />
        <Cell value={hours} label="hrs" />
        <Cell value={minutes} label="min" />
        <Cell value={seconds} label="sec" />
      </div>
      <div className="mt-2.5 text-xs text-neutral-400">
        until Season 9 goes live — July 10, 2026 (exact server time may shift)
      </div>
    </div>
  )
}
