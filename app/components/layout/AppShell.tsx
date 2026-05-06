import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import AtmosphericBackground from './AtmosphericBackground';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body relative">
      <AtmosphericBackground />
      <div className="max-w-md mx-auto min-h-screen relative">
        <Header />
        <main className="pt-20 pb-28 min-h-screen relative">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default AppShell;
