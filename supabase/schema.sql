-- Suggested schema for persisting Team-Up Loadout votes.
-- Not applied automatically — run this against your own Supabase project
-- whenever you're ready to move off localStorage (see src/lib/votes.ts).

create table if not exists hero_loadout_votes (
  hero_id text not null,
  side text not null check (side in ('a', 'b')),
  votes integer not null default 0,
  primary key (hero_id, side)
);

-- Atomic increment, so concurrent votes from different visitors can't
-- race and clobber each other the way a naive read-then-write would.
create or replace function increment_vote(p_hero_id text, p_side text)
returns void as $$
begin
  insert into hero_loadout_votes (hero_id, side, votes)
  values (p_hero_id, p_side, 1)
  on conflict (hero_id, side)
  do update set votes = hero_loadout_votes.votes + 1;
end;
$$ language plpgsql;

-- Row Level Security: reads are public, writes only go through the RPC
-- above (called with the anon key), so there's no direct insert/update path.
alter table hero_loadout_votes enable row level security;

create policy "Anyone can read vote tallies"
  on hero_loadout_votes for select
  using (true);
