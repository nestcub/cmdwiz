'use client';

import React, { useState, useRef } from 'react';
import Icon from '../ui/Icon';
import SwipeCard from './SwipeCard';
import type { Command } from '../../types';

interface SwipeDeckProps {
  commands: Command[];
  onComplete?: () => void;
}

type Direction = 'left' | 'right' | null;

const SwipeDeck: React.FC<SwipeDeckProps> = ({ commands, onComplete }) => {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [exitDirection, setExitDirection] = useState<Direction>(null);
  const dragStart = useRef<number | null>(null);

  const current = commands[index];
  const isFinished = !current;

  const advance = (dir: Direction) => {
    if (!current || exitDirection) return;
    setExitDirection(dir);
    window.setTimeout(() => {
      setExitDirection(null);
      setDragOffset(0);
      setIndex((i) => {
        const next = i + 1;
        if (next >= commands.length) onComplete?.();
        return next;
      });
    }, 220);
  };

  const handlePointerDown = (clientX: number) => {
    if (exitDirection) return;
    dragStart.current = clientX;
  };

  const handlePointerMove = (clientX: number) => {
    if (dragStart.current === null) return;
    setDragOffset(clientX - dragStart.current);
  };

  const handlePointerEnd = () => {
    if (dragStart.current === null) return;
    if (Math.abs(dragOffset) > 80) {
      advance(dragOffset > 0 ? 'right' : 'left');
    } else {
      setDragOffset(0);
    }
    dragStart.current = null;
  };

  const reset = () => {
    setIndex(0);
    setDragOffset(0);
    setExitDirection(null);
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 space-y-5">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon name="check_circle" filled className="text-primary text-4xl" />
        </div>
        <div>
          <h3 className="font-headline font-bold text-2xl text-on-surface">All caught up</h3>
          <p className="text-on-surface-variant text-sm mt-1">
            You've worked through every command in this deck.
          </p>
        </div>
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-lg bg-surface-container-highest text-primary text-xs font-headline font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors"
        >
          Start over
        </button>
      </div>
    );
  }

  const translateX =
    exitDirection === 'left'
      ? -400
      : exitDirection === 'right'
      ? 400
      : dragOffset;
  const rotation = translateX / 25;
  const opacity = exitDirection ? 0 : 1;

  return (
    <div className="flex flex-col items-center justify-start min-h-[600px]">
      <div className="w-full max-w-sm flex justify-between mb-5 px-2 opacity-60">
        <div className="flex items-center gap-2 text-error text-xs font-headline font-bold uppercase tracking-widest">
          <Icon name="keyboard_double_arrow_left" className="text-sm" />
          Skip
        </div>
        <div className="flex items-center gap-2 text-primary text-xs font-headline font-bold uppercase tracking-widest">
          Learned
          <Icon name="keyboard_double_arrow_right" className="text-sm" />
        </div>
      </div>

      <div
        className="w-full max-w-sm relative perspective-lg select-none"
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerEnd}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => dragStart.current !== null && handlePointerMove(e.clientX)}
        onMouseUp={handlePointerEnd}
        onMouseLeave={handlePointerEnd}
      >
        <div
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
            opacity,
          }}
        >
          <SwipeCard command={current} />
        </div>

        <div className="absolute -top-4 -right-4 bg-primary text-on-primary font-headline font-black px-3 py-1 rounded-full shadow-lg shadow-primary/20 scale-110 text-xs">
          +{current.xpReward} XP
        </div>
      </div>

      <div className="mt-10 flex gap-8">
        <button
          onClick={() => advance('left')}
          aria-label="Skip"
          className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-error border border-error/10 active:scale-90 transition-transform"
        >
          <Icon name="close" className="text-3xl" />
        </button>
        <button
          onClick={() => advance('right')}
          aria-label="Mark learned"
          className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-lg shadow-primary/10 active:scale-90 transition-transform"
        >
          <Icon name="done" filled className="text-3xl" />
        </button>
      </div>

      <p className="mt-6 text-[10px] uppercase tracking-widest text-on-surface-variant">
        {index + 1} / {commands.length}
      </p>
    </div>
  );
};

export default SwipeDeck;
