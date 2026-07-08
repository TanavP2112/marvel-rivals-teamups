-- Suggested schema for persisting Team-Up Loadout votes.
-- Not applied automatically — run this against your own Supabase project
-- whenever you're ready to move off localStorage (see src/lib/votes.ts).
--
-- `rank` is stored per-row (rather than aggregated) so it's possible to
-- regroup by rank, platform, or region later without losing information —
-- the app currently only charts by rank, but the raw rows support more.

create table if not exists hero_loadout_votes (
  id bigint generated always as identity primary key,
  hero_id text not null,
  side text not null check (side in ('a', 'b')),
  rank text not null check (
    rank in ('bronze','silver','gold','platinum','diamond','grandmaster','celestial','eternity','one-above-all')
  ),
  created_at timestamptz not null default now()
);

create index if not exists hero_loadout_votes_hero_id_idx on hero_loadout_votes (hero_id);

-- Overall tallies (mirrors what VoteSplitBar shows):
--   select side, count(*) from hero_loadout_votes where hero_id = 'hulk' group by side;
--
-- Per-rank breakdown (mirrors what LoadoutRankChart shows):
--   select rank, side, count(*) from hero_loadout_votes where hero_id = 'hulk' group by rank, side;

-- Row Level Security: reads are public, writes only go through the RPC
-- below (called with the anon key), so there's no direct insert path.
alter table hero_loadout_votes enable row level security;

create policy "Anyone can read votes"
  on hero_loadout_votes for select
  using (true);

create or replace function cast_vote(p_hero_id text, p_side text, p_rank text)
returns void as $$
begin
  insert into hero_loadout_votes (hero_id, side, rank)
  values (p_hero_id, p_side, p_rank);
end;
$$ language plpgsql;
