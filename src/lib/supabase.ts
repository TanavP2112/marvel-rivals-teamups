import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/**
 * `supabase` is `undefined` until VITE_SUPABASE_URL and
 * VITE_SUPABASE_ANON_KEY are set (see .env.example). Nothing in this
 * project calls it yet — `lib/votes.ts` still uses localStorage — so it's
 * safe to leave unconfigured until the backend is ready. Guard any new
 * call site with `if (!supabase) return` (or similar) since it's typed
 * as possibly undefined on purpose.
 */
export const supabase: SupabaseClient | undefined =
  url && anonKey ? createClient(url, anonKey) : undefined
