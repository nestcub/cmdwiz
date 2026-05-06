import React from 'react';
import ModeTile from '../../components/learn/ModeTile';

export default function LearnHubPage() {
  return (
    <div className="px-6 space-y-8">
      <header className="space-y-2">
        <p className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
          Learn
        </p>
        <h1 className="font-headline font-bold text-3xl text-on-surface tracking-tight">
          Pick your mode
        </h1>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          Three ways to grow your CLI fluency — discovery, drills, and structured paths.
        </p>
      </header>

      <section className="space-y-4">
        <ModeTile
          href="/learn/swipe"
          icon="school"
          title="Swipe Cards"
          description="Discover one command at a time. Swipe right to learn, left to skip."
          accent="primary"
        />
        <ModeTile
          href="/learn/test"
          icon="quiz"
          title="Test Mode"
          description="Real-world missions: type the command or pick the right option."
          accent="secondary"
        />
        <ModeTile
          href="/learn/collections"
          icon="library_books"
          title="Collections"
          description="Curated learning paths organized by tool — Linux, Git, Docker, and more."
          accent="tertiary"
        />
      </section>
    </div>
  );
}
