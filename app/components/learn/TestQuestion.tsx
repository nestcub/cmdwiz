'use client';

import React, { useState } from 'react';
import Icon from '../ui/Icon';
import GradientButton from '../ui/GradientButton';
import ProgressBar from '../ui/ProgressBar';
import type { Mission } from '../../types';

interface TestQuestionProps {
  mission: Mission;
  index: number;
  total: number;
  onNext: () => void;
}

const TestQuestion: React.FC<TestQuestionProps> = ({ mission, index, total, onNext }) => {
  const [typed, setTyped] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  const correctOption = mission.options.find((o) => o.correct);
  const isCorrect = selectedLetter !== null
    ? mission.options.find((o) => o.letter === selectedLetter)?.correct === true
    : typed.trim() === mission.expectedCommand;

  const handleSelect = (letter: string) => {
    if (resolved) return;
    setSelectedLetter(letter);
    setResolved(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resolved || typed.trim().length === 0) return;
    setResolved(true);
  };

  const handleNext = () => {
    setTyped('');
    setSelectedLetter(null);
    setResolved(false);
    onNext();
  };

  const progressPct = ((index + 1) / total) * 100;

  return (
    <div className="px-4 space-y-6">
      <header>
        <div className="flex justify-between items-end mb-2 px-1">
          <span className="font-headline text-xs font-bold tracking-widest text-secondary uppercase">
            Mission: {mission.title}
          </span>
          <span className="font-headline text-xs font-bold text-tertiary">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        <ProgressBar percent={progressPct} />
      </header>

      <section className="bg-surface-container-low rounded-xl p-6 border-l-4 border-primary">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="info" className="text-primary text-sm" />
          <h2 className="font-headline text-sm font-bold tracking-tight uppercase text-primary/80">
            Objective
          </h2>
        </div>
        <p className="text-lg font-headline font-medium leading-tight text-on-surface">
          {mission.objective}
        </p>
        {mission.filePath && (
          <div className="mt-4 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
            <code className="font-mono text-sm text-tertiary">File: {mission.filePath}</code>
          </div>
        )}
      </section>

      <section>
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-focus-within:opacity-100 transition duration-500" />
          <div className="relative bg-surface-container-lowest rounded-xl p-4">
            <div className="flex items-center gap-3">
              <span className="text-primary font-mono font-bold">$</span>
              <input
                type="text"
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                disabled={resolved}
                placeholder="Type the command..."
                className="w-full bg-transparent border-none focus:ring-0 focus:outline-none font-mono text-primary placeholder:text-surface-variant text-lg"
              />
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
              {mission.suggestionPills.map((pill, i) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setTyped(pill)}
                  className={`flex-none px-3 py-1.5 bg-surface-container-high rounded-md text-xs font-mono transition-colors ${
                    i === 0 ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </form>
      </section>

      <section className="space-y-3">
        <h3 className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant px-1">
          Quick select options
        </h3>
        {mission.options.map((option) => {
          const active = selectedLetter === option.letter;
          const showCorrect = resolved && option.correct;
          const showWrong = resolved && active && !option.correct;
          return (
            <button
              key={option.letter}
              type="button"
              onClick={() => handleSelect(option.letter)}
              disabled={resolved}
              className={`w-full group flex items-center justify-between p-4 rounded-xl transition-all duration-200 text-left ${
                showCorrect
                  ? 'bg-surface-container-highest border-2 border-primary ring-4 ring-primary/5'
                  : showWrong
                  ? 'bg-surface-container-highest border-2 border-error ring-4 ring-error/5'
                  : 'bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30'
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-lg font-mono text-xs ${
                    showCorrect
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-high text-secondary'
                  }`}
                >
                  {option.letter}
                </span>
                <code
                  className={`font-mono text-sm ${
                    showCorrect ? 'text-primary font-bold' : 'text-on-surface'
                  }`}
                >
                  {option.text}
                </code>
              </div>
              {showCorrect && <Icon name="check_circle" filled className="text-primary" />}
              {showWrong && <Icon name="cancel" filled className="text-error" />}
            </button>
          );
        })}
      </section>

      {resolved && (
        <section
          className={`relative overflow-hidden rounded-2xl p-6 border ${
            isCorrect ? 'bg-primary/5 border-primary/20' : 'bg-error/5 border-error/20'
          }`}
        >
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="relative flex items-start gap-4 mb-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isCorrect ? 'bg-primary/20' : 'bg-error/20'
              }`}
            >
              <Icon
                name={isCorrect ? 'military_tech' : 'error'}
                filled
                className={`text-3xl ${isCorrect ? 'text-primary' : 'text-error'}`}
              />
            </div>
            <div>
              <h4
                className={`font-headline font-bold text-xl tracking-tight ${
                  isCorrect ? 'text-primary' : 'text-error'
                }`}
              >
                {isCorrect ? 'System optimized!' : 'Try again'}
              </h4>
              <p className="text-tertiary text-sm leading-relaxed mt-1">
                {isCorrect ? (
                  mission.successExplanation
                ) : (
                  <>
                    The correct command is{' '}
                    <code className="bg-surface-container-high px-1 rounded text-primary">
                      {correctOption?.text}
                    </code>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
          <div
            className={`relative flex items-center justify-between pt-4 border-t ${
              isCorrect ? 'border-primary/10' : 'border-error/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-2xl font-black font-headline terminal-glow-text ${
                  isCorrect ? 'text-primary' : 'text-error'
                }`}
              >
                {isCorrect ? `+${mission.xpReward} XP` : '+0 XP'}
              </span>
            </div>
            <GradientButton
              onClick={handleNext}
              className="text-xs uppercase tracking-widest px-5 py-2.5"
            >
              Next Node
            </GradientButton>
          </div>
        </section>
      )}
    </div>
  );
};

export default TestQuestion;
