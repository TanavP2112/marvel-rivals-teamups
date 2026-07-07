const STEPS = [
  {
    num: '01 / PICK',
    title: 'Choose a loadout pre-match',
    body: 'Every hero has two Team-Up Loadouts on offer. Pick one before you load in — no need to wait and hope the right teammate shows up.',
  },
  {
    num: '02 / BASE',
    title: 'Base Effect is always active',
    body: 'Your chosen loadout grants its ability or passive regardless of who else is on your team. No coordination required.',
  },
  {
    num: '03 / ENHANCE',
    title: 'Enhanced if your partner shows up',
    body: "If the loadout's matching hero is also on your team, the effect gets stronger — rewarding synergy without demanding it.",
  },
]

export function StepsExplainer() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 pt-5">
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.num} className="bg-panel px-6 py-6">
            <span className="mb-2.5 block font-mono text-[13px] font-bold text-gold">
              {step.num}
            </span>
            <h3 className="mb-2 text-[15.5px] font-semibold">{step.title}</h3>
            <p className="text-[13.5px] leading-relaxed text-neutral-400">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
