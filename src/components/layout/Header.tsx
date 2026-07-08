export function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-2.5 text-[15px] font-black uppercase tracking-wide'>
          <span className='flex h-7 w-7 -rotate-6 items-center justify-center rounded-md bg-gradient-to-br from-duelist to-gold text-sm font-black text-ink'>
            S9
          </span>
          Best Rivals Team-Ups
        </div>
        <nav className='flex gap-6 text-[13px] text-neutral-400'>
          <a
            className='transition-colors hover:text-gold'
            href='#roster'>
            Roster
          </a>
          <a
            className='transition-colors hover:text-gold'
            href='#how-it-works'>
            How it works
          </a>
        </nav>
      </div>
    </header>
  );
}
