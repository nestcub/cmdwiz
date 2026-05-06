'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '../ui/Icon';

type Tab = {
  href: string;
  icon: string;
  label: string;
  match: (pathname: string) => boolean;
};

const tabs: Tab[] = [
  {
    href: '/',
    icon: 'home',
    label: 'Home',
    match: (p) => p === '/',
  },
  {
    href: '/learn',
    icon: 'school',
    label: 'Learn',
    match: (p) => p.startsWith('/learn'),
  },
  {
    href: '/vault',
    icon: 'bookmark',
    label: 'Vault',
    match: (p) => p.startsWith('/vault'),
  },
  {
    href: '/user',
    icon: 'person',
    label: 'User',
    match: (p) => p.startsWith('/user'),
  },
];

const BottomNav: React.FC = () => {
  const pathname = usePathname() || '/';

  return (
    <nav className="bg-surface/70 backdrop-blur-2xl fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md rounded-t-2xl z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex justify-around items-center pt-3 pb-8 px-4">
      {tabs.map((tab) => {
        const active = tab.match(pathname);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-xl transition-all active:scale-90 duration-150 ${
              active
                ? 'text-primary bg-primary/10'
                : 'text-tertiary/40 hover:text-primary'
            }`}
          >
            <Icon name={tab.icon} filled={active} className="mb-1" />
            <span className="font-body text-[10px] font-black uppercase tracking-widest">
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
