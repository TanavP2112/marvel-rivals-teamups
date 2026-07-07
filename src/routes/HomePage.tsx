import { useState } from 'react'
import { getRouteApi } from '@tanstack/react-router'
import { HeroBanner } from '@/components/home/HeroBanner'
import { StepsExplainer } from '@/components/home/StepsExplainer'
import { HeroGrid } from '@/components/roster/HeroGrid'
import { RoleFilter, type RoleFilterValue } from '@/components/roster/RoleFilter'
import { LoadoutModal } from '@/components/loadout/LoadoutModal'
import { getHeroById } from '@/data/heroes'
import type { Hero } from '@/types/hero'

const routeApi = getRouteApi('/')

export function HomePage() {
  const { hero: heroId } = routeApi.useSearch()
  const navigate = routeApi.useNavigate()
  const [filter, setFilter] = useState<RoleFilterValue>('all')

  const activeHero = getHeroById(heroId)

  const openHero = (hero: Hero) => {
    navigate({ search: { hero: hero.id } })
  }

  const closeModal = () => {
    navigate({ search: {} })
  }

  return (
    <>
      <HeroBanner />
      <StepsExplainer />

      <section id="roster" className="mx-auto max-w-6xl px-6">
        <RoleFilter value={filter} onChange={setFilter} />
        <HeroGrid filter={filter} onSelect={openHero} />
      </section>

      <LoadoutModal hero={activeHero} onClose={closeModal} />
    </>
  )
}
