'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '../components/ui/Icon';
import GradientButton from '../components/ui/GradientButton';
import AtmosphericBackground from '../components/layout/AtmosphericBackground';

type Background = {
  id: string;
  label: string;
  icon: string;
};

type Pack = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

const backgrounds: Background[] = [
  { id: 'developer', label: 'Developer', icon: 'code' },
  { id: 'student', label: 'Student', icon: 'school' },
  { id: 'sysadmin', label: 'System Admin', icon: 'dns' },
  { id: 'beginner', label: 'Complete Beginner', icon: 'rocket_launch' },
];

const packs: Pack[] = [
  {
    id: 'linux',
    label: 'Linux Commands',
    description: 'Filesystem, permissions, processes',
    icon: 'terminal',
  },
  {
    id: 'git',
    label: 'Git Version Control',
    description: 'Branches, commits, rebases',
    icon: 'commit',
  },
  {
    id: 'docker',
    label: 'Docker Containers',
    description: 'Run, build, prune images',
    icon: 'deployed_code',
  },
  {
    id: 'networking',
    label: 'Network Tools',
    description: 'Diagnostics and inspection',
    icon: 'lan',
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedBackground, setSelectedBackground] = useState<string>('');
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);

  const togglePack = (id: string) => {
    setSelectedPacks((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const persistAndContinue = (profile: { background: string; selectedPacks: string[] }) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cmdwiz:profile', JSON.stringify(profile));
    }
    router.push('/');
  };

  const handleNext = () => {
    if (step === 1 && selectedBackground) {
      setStep(2);
      return;
    }
    if (step === 2 && selectedPacks.length > 0) {
      persistAndContinue({ background: selectedBackground, selectedPacks });
    }
  };

  const handleSkip = () => {
    persistAndContinue({ background: '', selectedPacks: [] });
  };

  const canAdvance = step === 1 ? !!selectedBackground : selectedPacks.length > 0;

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body relative">
      <AtmosphericBackground />
      <div className="max-w-md mx-auto min-h-screen flex flex-col px-6 py-10 relative">
        <header className="text-center space-y-4 mb-10">
          <div className="flex items-center justify-center gap-2">
            <Icon name="terminal" className="text-primary" />
            <h1 className="font-headline font-bold tracking-tighter text-2xl text-primary">
              CmdWiz
            </h1>
          </div>
          <h2 className="font-headline font-bold text-3xl tracking-tight text-on-surface">
            Getting Started
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Personalize your CLI learning experience.
          </p>
          <div className="flex justify-center gap-2">
            <div
              className={`h-1.5 w-8 rounded-full transition-colors ${
                step === 1 ? 'bg-primary' : 'bg-surface-container-highest'
              }`}
            />
            <div
              className={`h-1.5 w-8 rounded-full transition-colors ${
                step === 2 ? 'bg-primary' : 'bg-surface-container-highest'
              }`}
            />
          </div>
        </header>

        <section className="flex-1">
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">
                What's your background?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {backgrounds.map((bg) => {
                  const active = selectedBackground === bg.id;
                  return (
                    <button
                      key={bg.id}
                      onClick={() => setSelectedBackground(bg.id)}
                      className={`p-5 rounded-xl text-left transition-all duration-200 ${
                        active
                          ? 'bg-surface-container-highest ring-2 ring-primary'
                          : 'bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      <Icon
                        name={bg.icon}
                        className={`text-3xl mb-3 ${
                          active ? 'text-primary' : 'text-tertiary'
                        }`}
                      />
                      <p className="font-headline font-bold text-sm text-on-surface">
                        {bg.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">
                Choose command packs
              </h3>
              <div className="space-y-3">
                {packs.map((pack) => {
                  const active = selectedPacks.includes(pack.id);
                  return (
                    <button
                      key={pack.id}
                      onClick={() => togglePack(pack.id)}
                      className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-200 ${
                        active
                          ? 'bg-surface-container-highest ring-2 ring-primary'
                          : 'bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          active ? 'bg-primary/20 text-primary' : 'bg-surface-container-highest text-secondary'
                        }`}
                      >
                        <Icon name={pack.icon} className="text-2xl" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-headline font-bold text-on-surface">{pack.label}</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">{pack.description}</p>
                      </div>
                      {active && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Icon name="check" className="text-on-primary text-base" filled />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        <div className="space-y-3 pt-8">
          <GradientButton
            onClick={handleNext}
            disabled={!canAdvance}
            className="w-full uppercase tracking-widest text-xs"
          >
            <span className="flex items-center justify-center gap-2">
              {step === 1 ? 'Next' : 'Get Started'}
              <Icon name="arrow_forward" className="text-base" />
            </span>
          </GradientButton>
          <button
            onClick={handleSkip}
            className="w-full p-3 text-on-surface-variant hover:text-on-surface text-sm transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
