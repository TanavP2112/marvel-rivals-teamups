import clsx from 'clsx';
import { ROLE_BG_CLASS, ROLE_TEXT_CLASS, ROLE_LABEL } from '@/constants/roles';
import type { Hero } from '@/types/hero';

interface HeroCardProps {
  hero: Hero;
  onSelect: (hero: Hero) => void;
}

export function HeroCard({ hero, onSelect }: HeroCardProps) {
  return (
    <button
      onClick={() => onSelect(hero)}
      className={clsx(
        'group relative overflow-hidden rounded-[10px] border border-line bg-panel p-4 text-left transition-transform hover:-translate-y-0.5 hover:border-neutral-600',
      )}>
      <span
        className={clsx(
          'absolute inset-x-0 top-0 h-[3px]',
          ROLE_BG_CLASS[hero.role],
        )}
      />

      {hero.isNew && (
        <span className='absolute right-[-30px] top-3 rotate-[35deg] bg-duelist px-9 py-0.5 text-[10px] font-black uppercase tracking-wide text-white'>
          New S9
        </span>
      )}

      <div className='mb-3.5 flex h-20 w-20 items-center justify-center rounded-[9px] border border-line bg-panel-2 text-lg'>
        <img
          className='h-20 w-20 rounded-[9px] object-contain'
          src={hero.img}
          alt=''
        />
      </div>

      <h4 className='mb-1 text-base font-semibold'>{hero.name}</h4>
      <div
        className={clsx(
          'text-[11px] font-extrabold uppercase tracking-wide',
          ROLE_TEXT_CLASS[hero.role],
        )}>
        {ROLE_LABEL[hero.role]}
      </div>

      <div
        className={clsx(
          'mt-3.5 flex items-center gap-1.5 text-[11.5px]',
          hero.unlocked ? 'text-gold' : 'text-neutral-400',
        )}>
        {hero.unlocked ? '● Loadouts confirmed' : '🔒 Reveals July 10'}
      </div>
    </button>
  );
}
