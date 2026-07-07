# Rivals Team-Up Tracker

Fan-made tracker for Marvel Rivals Season 9's reworked Team-Up Loadout
system. React + TypeScript + Tailwind CSS v4 + TanStack Router, built with
Vite.

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build     # type-checks (tsc -b) then builds to dist/
npm run typecheck  # type-check only
```

## Project structure

```
src/
  components/
    layout/       Header, Footer, RootLayout (wraps every route)
    home/         HeroBanner, Countdown, StepsExplainer
    roster/       RoleFilter, HeroGrid, HeroCard
    loadout/      LoadoutModal, LoadoutPanel, LockedHeroPanel, VoteSplitBar
  constants/       roles.ts — labels/colors/icons per role
  data/            heroes.ts — the hero roster + loadout content
  hooks/           useCountdown, useVotes
  lib/             votes.ts (vote persistence), supabase.ts (client stub)
  routes/          HomePage.tsx — the route's page component
  router.tsx       TanStack Router setup
  main.tsx         React entry point
supabase/
  schema.sql       Suggested table + RPC for vote persistence
```

## Adding a hero's confirmed loadouts

Edit `src/data/heroes.ts`. Flip `unlocked: true` and add a `loadouts` tuple
once a hero's Team-Up Loadouts are officially confirmed:

```ts
{
  id: 'storm',
  name: 'Storm',
  role: 'duelist',
  unlocked: true,
  loadouts: [
    { partner: '...', base: '...', enhanced: '...', enhancedConfirmed: true },
    { partner: '...', base: '...', enhanced: '...', enhancedConfirmed: true },
  ],
}
```

Everything else (the card, modal, voting) just works — no component changes
needed.

## Routing

Uses `@tanstack/react-router` with a single `/` route whose `hero` search
param drives which Loadout Showdown modal is open (`/?hero=hulk`), so a
hero's page is shareable and back-button friendly. Add more routes in
`src/router.tsx`.

## Backend / Supabase

Votes currently persist to `localStorage` via `src/lib/votes.ts` — fine for
local dev, but not shared across visitors. To wire up Supabase:

1. Create a Supabase project, then run `supabase/schema.sql` against it.
2. Copy `.env.example` to `.env.local` and fill in your project's URL and
   anon key.
3. Update `getVotes` / `castVote` in `src/lib/votes.ts` to call through the
   `supabase` client from `src/lib/supabase.ts` instead of `localStorage`
   (comments in that file show the shape of the calls). No other file
   needs to change — the rest of the app only talks to `useVotes`.

## Notes

Season 9 ("Mystery of Thebes") launches July 10, 2026. NetEase has said a
full hero-by-hero Team-Up Loadout list is still coming, so most heroes in
`heroes.ts` are intentionally left `unlocked: false` rather than shipping
guessed-at abilities.
