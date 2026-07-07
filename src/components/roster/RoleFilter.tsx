import { ROLES, ROLE_BG_CLASS, ROLE_LABEL } from '@/constants/roles'
import type { Role } from '@/types/hero'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export type RoleFilterValue = 'all' | Role

interface RoleFilterProps {
  value: RoleFilterValue
  onChange: (value: RoleFilterValue) => void
}

export function RoleFilter({ value, onChange }: RoleFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 py-6">
      <FilterButton active={value === 'all'} onClick={() => onChange('all')}>
        All Heroes
      </FilterButton>
      {ROLES.map((role) => (
        <FilterButton key={role} active={value === role} onClick={() => onChange(role)}>
          <span className={clsx('mr-1.5 inline-block h-1.5 w-1.5 rounded-full', ROLE_BG_CLASS[role])} />
          {ROLE_LABEL[role]}
        </FilterButton>
      ))}
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-full border px-4 py-2 text-[13px] font-bold tracking-wide transition-colors',
        active
          ? 'border-neutral-100 bg-neutral-100 text-ink'
          : 'border-line bg-panel text-neutral-400 hover:border-neutral-600 hover:text-neutral-100',
      )}
    >
      {children}
    </button>
  )
}
