'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TestQuestion from '../../../components/learn/TestQuestion';
import GradientButton from '../../../components/ui/GradientButton';
import Icon from '../../../components/ui/Icon';
import { missions } from '../../../data/missions';

export default function TestModePage() {
  const [index, setIndex] = useState(0);

  const isFinished = index >= missions.length;

  if (isFinished) {
    return (
      <div className="px-6 flex flex-col items-center text-center py-16 space-y-5">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon name="military_tech" filled className="text-primary text-4xl" />
        </div>
        <div>
          <h3 className="font-headline font-bold text-2xl text-on-surface">Mission complete</h3>
          <p className="text-on-surface-variant text-sm mt-1">
            You've cleared every node in this run.
          </p>
        </div>
        <div className="flex gap-3 pt-4">
          <GradientButton onClick={() => setIndex(0)} className="text-xs uppercase tracking-widest">
            Run Again
          </GradientButton>
          <Link
            href="/learn"
            className="px-5 py-3 rounded-lg bg-surface-container-highest text-primary text-xs font-headline font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors"
          >
            Back to Learn
          </Link>
        </div>
      </div>
    );
  }

  return (
    <TestQuestion
      mission={missions[index]}
      index={index}
      total={missions.length}
      onNext={() => setIndex((i) => i + 1)}
    />
  );
}
