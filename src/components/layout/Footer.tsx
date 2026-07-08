export function Footer() {
  return (
    <footer className='border-t border-line px-6 py-9 text-neutral-400'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-[12.5px]'>
        <div>© 2026 Rivals Team-Up Tracker — built by fans, for fans</div>
        <div className='flex gap-4'>
          <a
            className='transition-colors hover:text-gold'
            href='#'>
            Contact
          </a>
          <a
            className='transition-colors hover:text-gold'
            href='#'>
            Suggest a correction
          </a>
        </div>
      </div>
      <div className='mx-auto mt-4 max-w-6xl'>
        <p className='max-w-2xl text-[11.5px] leading-relaxed opacity-75'>
          This is an unofficial, fan-made tracker. This is not the official data
          given by Netease, as this is community-driven. Not affiliated with or
          endorsed by NetEase Games or Marvel.
        </p>
      </div>
    </footer>
  );
}
