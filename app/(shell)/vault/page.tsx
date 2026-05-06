'use client';

import React, { useMemo, useState } from 'react';
import SearchBar from '../../components/vault/SearchBar';
import CategoryTabs from '../../components/vault/CategoryTabs';
import SavedCommandCard from '../../components/vault/SavedCommandCard';
import EmptyState from '../../components/vault/EmptyState';
import { commands } from '../../data/commands';

const CATEGORY_OPTIONS = ['All Commands', 'Git', 'Docker', 'Bash', 'Linux', 'Network', 'Kubernetes'];

export default function VaultPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Commands');
  const [savedIds, setSavedIds] = useState<string[]>(() => commands.map((c) => c.id));

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const visible = useMemo(() => {
    return commands
      .filter((c) => savedIds.includes(c.id))
      .filter((c) => (category === 'All Commands' ? true : c.category === category))
      .filter((c) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          c.name.toLowerCase().includes(q) ||
          c.command.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [savedIds, category, query]);

  return (
    <div className="px-6 space-y-6">
      <header className="space-y-2">
        <p className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
          Vault
        </p>
        <h1 className="font-headline font-bold text-3xl text-on-surface tracking-tight italic">
          Saved Commands
        </h1>
      </header>

      <SearchBar value={query} onChange={setQuery} />

      <CategoryTabs
        categories={CATEGORY_OPTIONS}
        active={category}
        onChange={setCategory}
      />

      {visible.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {visible.map((command) => (
            <SavedCommandCard
              key={command.id}
              command={command}
              saved={savedIds.includes(command.id)}
              onToggleSave={toggleSave}
            />
          ))}
        </div>
      )}
    </div>
  );
}
