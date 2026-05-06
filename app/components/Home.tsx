'use client';

import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import Icon from './ui/Icon';
import GradientButton from './ui/GradientButton';
import GhostButton from './ui/GhostButton';

const backgroundLabels: { [key: string]: string } = {
  developer: 'Developer',
  student: 'Student',
  sysadmin: 'System Admin',
  beginner: 'Complete Beginner',
};

const packLabels: { [key: string]: string } = {
  linux: 'Linux',
  git: 'Git',
  docker: 'Docker',
  networking: 'Network',
};

interface HomeProps {
  background?: string;
  selectedPacks?: string[];
}

const Home: React.FC<HomeProps> = ({ background = '', selectedPacks = [] }) => {
  return (
    <div className="px-6 space-y-8">
      <SignedOut>
        <section className="text-center space-y-5 pt-6">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-surface-container-low flex items-center justify-center">
            <Icon name="terminal" className="text-primary text-4xl" />
          </div>
          <div className="space-y-2">
            <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">
              Welcome to CmdWiz
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Master command-line tools through interactive learning.
            </p>
          </div>
        </section>

        <section className="bg-surface-container-low rounded-2xl p-6 space-y-5 relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                <Icon name="trophy" filled className="text-xl" />
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface">
                Join contests &amp; track progress
              </h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Sign up to participate in coding contests, track your learning progress, and
              compete with developers worldwide.
            </p>
            <div className="space-y-3 pt-2">
              <SignUpButton mode="modal">
                <GradientButton className="w-full">
                  <span className="flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                    <Icon name="person_add" className="text-base" />
                    Sign up now
                  </span>
                </GradientButton>
              </SignUpButton>
              <SignInButton mode="modal">
                <GhostButton className="w-full">
                  <span className="flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                    <Icon name="login" className="text-base" />
                    Login
                  </span>
                </GhostButton>
              </SignInButton>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">
            Start learning
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/learn/swipe"
              className="p-5 bg-surface-container-low rounded-xl text-center hover:bg-surface-container transition-colors"
            >
              <Icon name="school" className="text-secondary text-3xl mb-2" />
              <p className="text-sm font-headline font-bold text-on-surface">Learn</p>
            </Link>
            <Link
              href="/learn/test"
              className="p-5 bg-surface-container-low rounded-xl text-center hover:bg-surface-container transition-colors"
            >
              <Icon name="quiz" className="text-tertiary text-3xl mb-2" />
              <p className="text-sm font-headline font-bold text-on-surface">Test</p>
            </Link>
          </div>
        </section>
      </SignedOut>

      <SignedIn>
        <SignedInHome background={background} selectedPacks={selectedPacks} />
      </SignedIn>
    </div>
  );
};

const SignedInHome: React.FC<HomeProps> = ({ background, selectedPacks }) => {
  const { user } = useUser();
  const firstName = user?.firstName || user?.username || 'Operator';

  return (
    <div className="space-y-6">
      <section className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Icon name="terminal" className="text-primary text-2xl" filled />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
              Welcome back
            </p>
            <h2 className="font-headline font-bold text-xl text-on-surface tracking-tight">
              {firstName}
            </h2>
            <p className="text-xs text-secondary mt-0.5">
              {background ? backgroundLabels[background] || 'CLI Learner' : 'CLI Learner'}
            </p>
          </div>
        </div>

        {selectedPacks && selectedPacks.length > 0 && (
          <div className="mt-5 space-y-2 relative">
            <h3 className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
              Your packs
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedPacks.map((id) => (
                <span
                  key={id}
                  className="text-[11px] font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                >
                  {packLabels[id] || id}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="bg-surface-container-low rounded-xl p-4 text-center">
          <p className="font-headline font-bold text-2xl text-primary">0</p>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">
            Commands learned
          </p>
        </div>
        <div className="bg-surface-container-low rounded-xl p-4 text-center">
          <p className="font-headline font-bold text-2xl text-secondary">0</p>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">
            Tests completed
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-headline text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">
          Continue learning
        </h3>
        <div className="space-y-3">
          <Link
            href="/learn/swipe"
            className="w-full p-4 bg-surface-container-low rounded-xl flex items-center gap-4 hover:bg-surface-container transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <Icon name="school" filled className="text-2xl" />
            </div>
            <div className="flex-1">
              <h4 className="font-headline font-bold text-on-surface">Swipe Cards</h4>
              <p className="text-xs text-on-surface-variant">Discover commands one at a time</p>
            </div>
            <Icon name="chevron_right" className="text-on-surface-variant" />
          </Link>
          <Link
            href="/learn/test"
            className="w-full p-4 bg-surface-container-low rounded-xl flex items-center gap-4 hover:bg-surface-container transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
              <Icon name="quiz" className="text-2xl" />
            </div>
            <div className="flex-1">
              <h4 className="font-headline font-bold text-on-surface">Test Mode</h4>
              <p className="text-xs text-on-surface-variant">Real-world CLI scenarios</p>
            </div>
            <Icon name="chevron_right" className="text-on-surface-variant" />
          </Link>
        </div>
      </section>

      <section className="bg-surface-container-high rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Icon name="trophy" className="text-6xl" />
        </div>
        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <Icon name="trophy" filled className="text-primary text-xl" />
            <h3 className="font-headline font-bold text-on-surface">Upcoming contests</h3>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-[80%]">
            Join weekly CLI challenges and compete with developers worldwide.
          </p>
          <GradientButton className="text-xs uppercase tracking-widest px-5 py-2.5">
            View Contests
          </GradientButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
