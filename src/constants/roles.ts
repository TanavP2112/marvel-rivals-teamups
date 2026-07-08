import type { Role } from '@/types/hero'

export const ROLES: Role[] = ['vanguard', 'duelist', 'strategist']

export const ROLE_LABEL: Record<Role, string> = {
  vanguard: 'Vanguard',
  duelist: 'Duelist',
  strategist: 'Strategist',
}

// export const ROLE_ICON: Record<Role, string> = {
//   vanguard: '🛡',
//   duelist: '⚔',
//   strategist: '✚',
// }

/** Tailwind background-color utility per role (role-colored edges, dots). */
export const ROLE_BG_CLASS: Record<Role, string> = {
  vanguard: 'bg-vanguard',
  duelist: 'bg-duelist',
  strategist: 'bg-strategist',
}

/** Tailwind text-color utility per role. */
export const ROLE_TEXT_CLASS: Record<Role, string> = {
  vanguard: 'text-vanguard',
  duelist: 'text-duelist',
  strategist: 'text-strategist',
}
