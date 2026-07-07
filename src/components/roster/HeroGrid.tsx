import { useMemo } from 'react'
import { HEROES } from '@/data/heroes'
import type { Hero } from '@/types/hero'
import { HeroCard } from './HeroCard'
import type { RoleFilterValue } from './RoleFilter'

interface HeroGridProps {
  filter: RoleFilterValue
  onSelect: (hero: Hero) => void
}

export function HeroGrid({ filter, onSelect }: HeroGridProps) {
  const heroes = useMemo(
    () => HEROES.filter((h) => filter === 'all' || h.role === filter),
    [filter],
  )

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5 pb-16">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} onSelect={onSelect} />
      ))}
    </div>
  )
}
