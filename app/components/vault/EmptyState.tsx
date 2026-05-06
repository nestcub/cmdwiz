import React from 'react';
import Link from 'next/link';
import Icon from '../ui/Icon';
import GradientButton from '../ui/GradientButton';

const EmptyState: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-24 h-24 mb-6 rounded-3xl bg-surface-container-highest flex items-center justify-center relative">
        <Icon name="folder_zip" className="text-5xl text-on-surface-variant/20" />
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
          <Icon name="add" className="text-primary text-xl" />
        </div>
      </div>
      <h2 className="font-headline font-bold text-2xl mb-2 text-on-surface">
        Your vault is empty.
      </h2>
      <p className="text-on-surface-variant leading-relaxed max-w-[240px] text-sm">
        Bookmark commands you use frequently for quick access.
      </p>
      <Link href="/learn/swipe" className="mt-8">
        <GradientButton>
          <span className="text-xs uppercase tracking-widest">Explore commands</span>
        </GradientButton>
      </Link>
    </section>
  );
};

export default EmptyState;
