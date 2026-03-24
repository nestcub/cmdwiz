import React from 'react';
import { Home, BookOpen, Brain } from 'lucide-react';

interface BottomNavProps {
  currentScreen: 'home' | 'learn' | 'test';
  onNavigate: (screen: 'home' | 'learn' | 'test') => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'learn', icon: BookOpen, label: 'Learn' },
    { id: 'test', icon: Brain, label: 'Test' },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as 'home' | 'learn' | 'test')}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-green-400 bg-gray-700' 
                  : 'text-gray-400 hover:text-green-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;