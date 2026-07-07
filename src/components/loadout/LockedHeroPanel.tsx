import type { Hero } from '@/types/hero'

interface LockedHeroPanelProps {
  hero: Hero
  onClose: () => void
}

export function LockedHeroPanel({ hero, onClose }: LockedHeroPanelProps) {
  return (
    <div className="px-7 py-16 text-center">
      <div className="mb-3.5 text-3xl">🔒</div>
      <h2 className="mb-2 text-xl font-black uppercase">{hero.name}</h2>
      <p className="mx-auto max-w-sm text-[13.5px] leading-relaxed text-neutral-400">
        {hero.note ? `${hero.note} — ` : ''}
        Team-Up Loadout details for {hero.name} haven&rsquo;t been published yet. NetEase said a
        full hero-by-hero list is coming ahead of the July 10 launch — this card will unlock the
        moment those numbers are confirmed.
      </p>
      <button
        onClick={onClose}
        className="mx-auto mt-5 block max-w-[200px] rounded-lg border border-line py-2.5 text-[13px] font-extrabold tracking-wide text-neutral-100 transition-colors hover:border-gold hover:text-gold"
      >
        Close
      </button>
    </div>
  )
}
