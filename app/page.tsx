'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import Home from './components/Home';
import Onboarding from './components/Onboarding';
import Learn from './components/Learn';
import Test from './components/Test';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'onboarding' | 'home' | 'learn' | 'test'>('onboarding');
  const [userProfile, setUserProfile] = useState<{
    background: string;
    selectedPacks: string[];
    isLoggedIn: boolean;
  } | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <Onboarding onComplete={(profile) => {
          setUserProfile(profile);
          setCurrentScreen('home');
        }} />;
      case 'home':
        return <Home userProfile={userProfile} onNavigate={setCurrentScreen} />;
      case 'learn':
        return <Learn />;
      case 'test':
        return <Test />;
      default:
        return <Home userProfile={userProfile} onNavigate={setCurrentScreen} />;
    }
  };

  const showBottomNav = currentScreen !== 'onboarding';

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* App Container - Mobile-first centered layout */}
      <div className="max-w-md mx-auto bg-black min-h-screen shadow-2xl relative">
        {/* Header */}
        <header className="flex items-center justify-center py-4 border-b border-gray-700">
          <Terminal className="w-6 h-6 mr-2" />
          <h1 className="text-lg font-bold">CmdWiz</h1>
        </header>

        {/* Main Content */}
        <main className="pb-20 min-h-screen">
          {renderScreen()}
        </main>

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen as 'home' | 'learn' | 'test'} onNavigate={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}