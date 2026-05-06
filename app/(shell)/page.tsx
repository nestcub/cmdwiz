'use client';

import React, { useEffect, useState } from 'react';
import Home from '../components/Home';

interface StoredProfile {
  background: string;
  selectedPacks: string[];
}

export default function HomePage() {
  const [profile, setProfile] = useState<StoredProfile>({
    background: '',
    selectedPacks: [],
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = window.localStorage.getItem('cmdwiz:profile');
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as StoredProfile;
      setProfile(parsed);
    } catch {
      /* ignore */
    }
  }, []);

  return <Home background={profile.background} selectedPacks={profile.selectedPacks} />;
}
