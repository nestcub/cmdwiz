'use client';

import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Icon from '../ui/Icon';

interface HeaderProps {
  streakDays?: number;
}

const Header: React.FC<HeaderProps> = ({ streakDays = 7 }) => {
  return (
    <header className="bg-surface/80 backdrop-blur-lg fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 shadow-xl shadow-black/20 flex justify-between items-center px-6 h-16">
      <Link href="/" className="flex items-center gap-2 group">
        <Icon name="terminal" className="text-primary" />
        <h1 className="font-headline font-bold tracking-tighter text-xl text-primary">
          CmdWiz
        </h1>
      </Link>
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-1">
          <span className="font-headline font-bold text-xs text-primary">
            ⚡ {streakDays} Streak
          </span>
        </div>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'w-8 h-8',
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Sign in"
            >
              <Icon name="login" className="text-base" />
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
