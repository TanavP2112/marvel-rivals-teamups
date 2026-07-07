import { useEffect, useState } from 'react'

// Season 9 target launch — update if NetEase shifts the date/time.
const TARGET = new Date('2026-07-10T09:00:00Z').getTime()

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useCountdown(target: number = TARGET): CountdownParts {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining % 86_400_000) / 3_600_000),
    minutes: Math.floor((remaining % 3_600_000) / 60_000),
    seconds: Math.floor((remaining % 60_000) / 1_000),
  }
}
