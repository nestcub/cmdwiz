import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/ui/Icon';
import CommandRecipe from '../../../components/vault/CommandRecipe';
import { getCommandById } from '../../../data/commands';

interface PageProps {
  params: { id: string };
}

export default function VaultDetailPage({ params }: PageProps) {
  const command = getCommandById(params.id);
  if (!command) notFound();

  return (
    <div className="px-6 space-y-10">
      <Link
        href="/vault"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary text-sm transition-colors"
      >
        <Icon name="arrow_back" className="text-base" />
        Back to vault
      </Link>

      <section>
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1 min-w-0">
            <span className="text-secondary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              {command.tags[0] || command.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface tracking-tighter break-all">
              {command.name}
            </h2>
          </div>
          <button
            type="button"
            className="p-3 rounded-xl bg-surface-container-high text-primary hover:bg-primary/10 transition-colors active:scale-90"
            aria-label="Saved"
          >
            <Icon name="bookmark" filled />
          </button>
        </div>
        <div className="bg-surface-container-lowest p-5 rounded-xl border-b-2 border-primary/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <Icon name="code" className="text-6xl" />
          </div>
          <div className="relative z-10">
            <code className="font-mono text-primary text-sm leading-relaxed break-all">
              {command.command}
            </code>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="h-px flex-grow bg-outline-variant/30" />
          <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-tertiary/60">
            Functional Description
          </h3>
          <div className="h-px flex-grow bg-outline-variant/30" />
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
          <p className="text-on-surface/80 leading-relaxed text-sm">{command.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-high p-4 rounded-lg">
            <span className="text-[10px] font-bold text-primary/60 uppercase block mb-1">
              Category
            </span>
            <span className="text-xs font-medium text-on-surface">{command.category}</span>
          </div>
          <div className="bg-surface-container-high p-4 rounded-lg">
            <span className="text-[10px] font-bold text-secondary/60 uppercase block mb-1">
              Difficulty
            </span>
            <span className="text-xs font-medium text-on-surface capitalize">
              {command.difficulty}
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2">
          <Icon name="terminal" className="text-primary text-lg" />
          Execution Recipes
        </h3>
        {command.recipes.map((recipe, i) => (
          <CommandRecipe
            key={recipe.label}
            recipe={recipe}
            accent={i % 2 === 0 ? 'secondary' : 'primary'}
          />
        ))}
      </section>

      <section>
        <a
          href={command.docLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl hover:border-primary/50 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
              <Icon name="menu_book" className="text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface">Official Documentation</h4>
              <p className="text-xs text-on-surface-variant">View the technical reference</p>
            </div>
          </div>
          <Icon
            name="open_in_new"
            className="text-on-surface-variant group-hover:translate-x-1 transition-transform"
          />
        </a>
      </section>
    </div>
  );
}
