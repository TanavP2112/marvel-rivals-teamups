import { useCallback, useState } from 'react'
import { getVoterProfile, setVoterProfile } from '@/lib/voterProfile'
import type { VoterProfile } from '@/types/hero'

export function useVoterProfile() {
  const [profile, setProfileState] = useState<VoterProfile | null>(() => getVoterProfile())

  const saveProfile = useCallback((next: VoterProfile) => {
    setVoterProfile(next)
    setProfileState(next)
  }, [])

  return { profile, saveProfile }
}
