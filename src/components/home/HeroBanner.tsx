import { Countdown } from './Countdown'

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-16 text-center">
      <div
        className="pointer-events-none absolute -inset-x-[10%] -top-[40%] h-[420px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(224,55,46,0.16), transparent 65%)',
        }}
      />

      <span
        className="relative mb-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-panel-2 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-wider text-gold"
        style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
      >
        ● Season 9 · Mystery of Thebes
      </span>

      <h1 className="relative mx-auto mb-3 font-display text-[clamp(36px,6vw,64px)] font-black uppercase leading-[1.02] tracking-tight">
        Team-Up
        <span className="block bg-gradient-to-b from-white to-gold bg-clip-text text-transparent">
          Loadouts
        </span>
      </h1>

      <p className="relative mx-auto mb-8 max-w-xl text-base leading-relaxed text-neutral-400">
        Every hero now equips one of two Team-Up Loadouts before a match. Base Effects are always
        on — Enhanced Effects kick in when your partner hero is on the team. Track what&rsquo;s
        confirmed, vote on what you&rsquo;re running.
      </p>

      <div className="relative">
        <Countdown />
      </div>
    </section>
  )
}
