'use client';

import React, { useState } from 'react';
import Icon from '../ui/Icon';
import type { Recipe } from '../../types';

interface CommandRecipeProps {
  recipe: Recipe;
  accent?: 'primary' | 'secondary';
}

const CommandRecipe: React.FC<CommandRecipeProps> = ({ recipe, accent = 'secondary' }) => {
  const [copied, setCopied] = useState(false);
  const borderColor =
    accent === 'primary'
      ? 'border-primary/20 group-hover:border-primary'
      : 'border-secondary/20 group-hover:border-secondary';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(recipe.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* no-op */
    }
  };

  return (
    <div className="group">
      <div className="flex justify-between items-center px-4 py-2 bg-surface-container-highest rounded-t-lg">
        <span className="text-[10px] font-mono text-tertiary/60 uppercase tracking-widest">
          {recipe.label}
        </span>
        <button
          type="button"
          onClick={copy}
          className="text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Copy"
        >
          <Icon name={copied ? 'check' : 'content_copy'} className="text-xs" />
        </button>
      </div>
      <div
        className={`bg-surface-container-lowest p-5 rounded-b-lg font-mono text-xs overflow-x-auto border-l-2 ${borderColor} transition-colors`}
      >
        <pre className="text-on-surface whitespace-pre-wrap break-all">{recipe.code}</pre>
      </div>
      <p className="mt-2 text-[11px] text-on-surface-variant/80 px-1 italic">
        {recipe.explanation}
      </p>
    </div>
  );
};

export default CommandRecipe;
