'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '../ui/Icon';
import Badge from '../ui/Badge';
import type { Command } from '../../types';

interface SavedCommandCardProps {
  command: Command;
  saved: boolean;
  onToggleSave: (id: string) => void;
}

const SavedCommandCard: React.FC<SavedCommandCardProps> = ({ command, saved, onToggleSave }) => {
  return (
    <article className="group bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <Link href={`/vault/${command.id}`} className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <Badge tone="secondary">{command.category}</Badge>
              {command.tags.slice(0, 1).map((tag) => (
                <Badge key={tag} tone="tertiary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="font-headline font-bold text-lg text-on-surface truncate">
              {command.name}
            </h3>
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:text-secondary transition-colors"
              aria-label="Share"
            >
              <Icon name="share" className="text-lg" />
            </button>
            <button
              type="button"
              onClick={() => onToggleSave(command.id)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest transition-colors ${
                saved ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
              aria-label={saved ? 'Unsave' : 'Save'}
            >
              <Icon name="bookmark" filled={saved} className="text-lg" />
            </button>
          </div>
        </div>
        <Link href={`/vault/${command.id}`} className="block">
          <div className="bg-surface-container-lowest rounded-lg p-4 font-mono text-sm border-l-2 border-primary group-hover:terminal-glow transition-all">
            <code className="text-primary-fixed break-all">{command.command}</code>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-on-surface-variant/60">
            <span>Saved recently</span>
            <span className="flex items-center gap-1">
              <Icon name="schedule" className="text-xs" /> {command.executionTime}
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default SavedCommandCard;
