import React, { useState } from 'react';
import { ChevronRight, Code, GitBranch, Server, Database, Shield, Globe } from 'lucide-react';

interface OnboardingProps {
  onComplete: (profile: {
    background: string;
    selectedPacks: string[];
    isLoggedIn: boolean;
  }) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [selectedBackground, setSelectedBackground] = useState<string>('');
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);

  const backgrounds = [
    { id: 'developer', label: 'Developer', icon: Code },
    { id: 'student', label: 'Student', icon: Globe },
    { id: 'sysadmin', label: 'System Admin', icon: Server },
    { id: 'beginner', label: 'Complete Beginner', icon: Shield },
  ];

  const commandPacks = [
    { id: 'linux', label: 'Linux Commands', icon: Server, color: 'bg-blue-900' },
    { id: 'git', label: 'Git Version Control', icon: GitBranch, color: 'bg-orange-900' },
    { id: 'docker', label: 'Docker Containers', icon: Database, color: 'bg-blue-800' },
    { id: 'networking', label: 'Network Tools', icon: Globe, color: 'bg-purple-900' },
  ];

  const togglePack = (packId: string) => {
    setSelectedPacks(prev => 
      prev.includes(packId) 
        ? prev.filter(id => id !== packId)
        : [...prev, packId]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedBackground) {
      setStep(2);
    } else if (step === 2 && selectedPacks.length > 0) {
      onComplete({
        background: selectedBackground,
        selectedPacks,
        isLoggedIn: false
      });
    }
  };

  const handleSkip = () => {
    onComplete({
      background: '',
      selectedPacks: [],
      isLoggedIn: false
    });
  };

  return (
    <div className="p-6 space-y-8 min-h-full flex flex-col">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-400">Getting Started</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Let&apos;s personalize your CLI learning experience
        </p>
        <div className="flex justify-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${step === 1 ? 'bg-green-400' : 'bg-gray-600'}`} />
          <div className={`w-3 h-3 rounded-full ${step === 2 ? 'bg-green-400' : 'bg-gray-600'}`} />
        </div>
      </div>

      {step === 1 && (
        <section className="space-y-6 flex-1">
          <h3 className="text-lg font-semibold text-green-300 text-center">What&apos;s your background?</h3>
          <div className="grid grid-cols-2 gap-4">
            {backgrounds.map((bg) => {
              const Icon = bg.icon;
              const isSelected = selectedBackground === bg.id;
              
              return (
                <button
                  key={bg.id}
                  onClick={() => setSelectedBackground(bg.id)}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-green-400 bg-green-900/20 text-green-300'
                      : 'border-gray-600 hover:border-gray-500 text-gray-300'
                  }`}
                >
                  <Icon className="w-10 h-10 mx-auto mb-3" />
                  <span className="text-sm font-medium">{bg.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6 flex-1">
          <h3 className="text-lg font-semibold text-green-300 text-center">Choose command packs</h3>
          <div className="space-y-4">
            {commandPacks.map((pack) => {
              const Icon = pack.icon;
              const isSelected = selectedPacks.includes(pack.id);
              
              return (
                <button
                  key={pack.id}
                  onClick={() => togglePack(pack.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-4 ${
                    isSelected
                      ? 'border-green-400 bg-green-900/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${pack.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-200">{pack.label}</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Essential commands and workflows
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleNext}
          disabled={step === 1 ? !selectedBackground : selectedPacks.length === 0}
          className={`w-full p-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
            (step === 1 ? selectedBackground : selectedPacks.length > 0)
              ? 'bg-green-600 hover:bg-green-500 text-black'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>{step === 1 ? 'Next' : 'Get Started'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <button
          onClick={handleSkip}
          className="w-full p-3 text-gray-400 hover:text-gray-300 transition-colors duration-200"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default Onboarding;