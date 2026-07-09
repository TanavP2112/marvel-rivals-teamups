import clsx from 'clsx';
import type { Loadout } from '@/types/hero';

interface LoadoutPanelProps {
  label: string;
  loadout: Loadout;
  onVote: () => void;
  picked: boolean;
}

export function LoadoutPanel({
  label,
  loadout,
  onVote,
  picked,
}: LoadoutPanelProps) {
  return (
    <div className='p-1.5'>
      <div className='mb-1.5 text-[11px] uppercase tracking-wide text-neutral-400'>
        Partner · {loadout.partner}
      </div>
      <h3 className='mb-3.5 text-lg font-semibold'>{label}</h3>

      <div className='mb-2.5 rounded-[9px] border border-line bg-panel-2 px-4 py-3.5'>
        <span className='mb-1.5 block text-[10.5px] font-black uppercase tracking-wide text-neutral-400'>
          Base Effect
        </span>
        <p className='text-[13.5px] leading-relaxed'>{loadout.base}</p>
      </div>

      <div className='relative rounded-[9px] border border-gold-dim bg-panel-2 px-4 py-3.5'>
        <span className='mb-1.5 block text-[10.5px] font-black uppercase tracking-wide text-gold'>
          Enhanced · with {loadout.partner}
        </span>
        <p
          className={clsx(
            'text-[13.5px] leading-relaxed',
            !loadout.enhancedConfirmed && 'italic text-neutral-400',
          )}>
          {loadout.enhanced}
        </p>
      </div>

      <button
        onClick={onVote}
        className={clsx(
          'mt-3 w-full rounded-lg border py-2.5 text-[13px] font-extrabold tracking-wide transition-colors',
          picked
            ? 'border-gold bg-gold text-[#1a1200]'
            : 'border-line text-neutral-100 hover:border-gold hover:text-gold',
        )}>
        I&rsquo;m running this
      </button>
    </div>
  );
}
