'use client';

import React, { useState } from 'react';
import Icon from '../ui/Icon';
import TerminalCard from '../ui/TerminalCard';
import type { Command } from '../../types';

interface SwipeCardProps {
  command: Command;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ command }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TerminalCard className="card-rotate w-full">
      <div className="p-7 space-y-7">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Icon name="terminal" className="text-lg" />
            <span className="font-headline font-bold tracking-tight text-lg">
              {command.name}
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {command.description}
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-lg border-l-4 border-primary/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <Icon name="content_copy" className="text-4xl" />
          </div>
          <code className="block font-mono text-primary text-sm sm:text-base tracking-tight leading-relaxed break-all">
            {command.command}
          </code>
        </div>

        <div className="space-y-3 pt-4 border-t border-outline-variant/10">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center justify-between w-full text-xs font-headline font-bold text-secondary tracking-widest uppercase"
          >
            <span>Syntax &amp; example</span>
            <Icon
              name={expanded ? 'expand_less' : 'expand_more'}
              className="text-base"
            />
          </button>
          {expanded && (
            <div className="space-y-3">
              <div className="bg-surface-container-highest/30 p-3 rounded text-[13px] font-mono text-on-surface-variant leading-relaxed">
                <span className="text-primary font-bold block">SYNTAX:</span>
                {command.syntax}
              </div>
              <div className="bg-surface-container-highest/30 p-3 rounded text-[13px] font-mono text-on-surface-variant leading-relaxed">
                <span className="text-secondary font-bold block">COMMON USE:</span>
                {command.commonUse}
              </div>
            </div>
          )}
        </div>
      </div>
    </TerminalCard>
  );
};

export default SwipeCard;
