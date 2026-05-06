import React from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/Icon';
import { collections } from '../../../data/collections';

export default function CollectionsPage() {
  return (
    <div className="px-6 space-y-6">
      <header className="space-y-2">
        <p className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
          Collections
        </p>
        <h1 className="font-headline font-bold text-3xl text-on-surface tracking-tight">
          Learning Paths
        </h1>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          Each pack is a fixed deck of commands. Work through them in sequence to build mastery.
        </p>
      </header>

      <section className="space-y-3">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/learn/collections/${collection.id}`}
            className="block p-5 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                <Icon name={collection.iconName} className="text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  {collection.title}
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">{collection.description}</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mt-2">
                  {collection.commandIds.length} commands
                </p>
              </div>
              <Icon name="chevron_right" className="text-on-surface-variant" />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
