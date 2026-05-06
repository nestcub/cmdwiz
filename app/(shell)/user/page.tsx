'use client';

import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Icon from '../../components/ui/Icon';
import GradientButton from '../../components/ui/GradientButton';
import CircularProgress from '../../components/user/CircularProgress';
import StatsCard from '../../components/user/StatsCard';
import RecommendedPath from '../../components/user/RecommendedPath';
import ActivityItem from '../../components/user/ActivityItem';
import { activity } from '../../data/activity';

export default function UserPage() {
  return (
    <div className="px-6 space-y-8">
      <SignedOut>
        <section className="text-center space-y-5 pt-12">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-surface-container-low flex items-center justify-center">
            <Icon name="person" className="text-primary text-4xl" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">No profile yet</h2>
            <p className="text-on-surface-variant text-sm mt-1">
              Sign in to track your progress, streaks, and badges.
            </p>
          </div>
          <SignInButton mode="modal">
            <GradientButton className="text-xs uppercase tracking-widest">
              Sign in
            </GradientButton>
          </SignInButton>
        </section>
      </SignedOut>
      <SignedIn>
        <SignedInProfile />
      </SignedIn>
    </div>
  );
}

const SignedInProfile: React.FC = () => {
  const { user } = useUser();
  const name = user?.firstName || user?.username || 'Operator';
  const avatar = user?.imageUrl;

  return (
    <>
      <section className="flex flex-col items-center text-center pt-2">
        <div className="relative group mb-6">
          <CircularProgress percent={75}>
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full border-4 border-surface shadow-xl"
              />
            ) : (
              <div className="w-full h-full rounded-full border-4 border-surface bg-surface-container-high flex items-center justify-center">
                <Icon name="person" filled className="text-primary text-5xl" />
              </div>
            )}
          </CircularProgress>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-headline font-bold text-xs px-3 py-1 rounded-full shadow-lg">
            LVL 42
          </div>
        </div>
        <h1 className="font-headline font-bold text-3xl tracking-tight text-on-surface mb-1">
          {name}
        </h1>
        <p className="font-headline text-secondary tracking-widest text-sm font-medium">
          LEVEL 42 ARCHITECT
        </p>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <StatsCard icon="local_fire_department" value="12" label="Streak" tone="secondary" />
        <StatsCard icon="terminal" value="342" label="Cmds" tone="primary" />
        <StatsCard icon="trophy" value="15/50" label="Awards" tone="tertiary" />
      </section>

      <section>
        <h2 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 px-1">
          Recommended Path
        </h2>
        <RecommendedPath
          title="Advanced Regex Mastery"
          description="Bridge the gap between simple text matching and structural parsing. Unlock the 'Pattern Seeker' title."
          icon="psychology"
          href="/learn/swipe"
          progressPercent={66}
        />
      </section>

      <section>
        <div className="flex justify-between items-end mb-4 px-1">
          <h2 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            System Activity
          </h2>
          <span className="text-xs text-secondary font-medium">VIEW LOGS</span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
          {activity.map((entry, i) => (
            <React.Fragment key={entry.id}>
              <ActivityItem entry={entry} />
              {i < activity.length - 1 && <div className="h-px bg-white/5 mx-4" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
        <div className="flex items-center gap-3">
          <Icon name="logout" className="text-on-surface-variant" />
          <span className="text-sm font-headline font-semibold text-on-surface">Account</span>
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: { avatarBox: 'w-9 h-9' },
          }}
        />
      </section>
    </>
  );
};
