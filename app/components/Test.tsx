import React, { useState } from 'react';
import { ChevronRight, Code, GitBranch, Server, Globe, Trophy, Clock, Target } from 'lucide-react';
import QuizScreen from './QuizScreen';

interface TestPack {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  questionCount: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

const Test: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const testPacks: TestPack[] = [
    {
      id: 'linux-basics',
      title: 'Linux Basics',
      description: 'Test your knowledge of fundamental Linux commands',
      icon: Server,
      color: 'bg-blue-900',
      questionCount: 10,
      difficulty: 'beginner',
      estimatedTime: '5 min'
    },
    {
      id: 'git-fundamentals',
      title: 'Git Fundamentals',
      description: 'Version control commands and workflows',
      icon: GitBranch,
      color: 'bg-orange-900',
      questionCount: 8,
      difficulty: 'intermediate',
      estimatedTime: '4 min'
    },
    {
      id: 'docker-containers',
      title: 'Docker Containers',
      description: 'Container management and Docker CLI',
      icon: Code,
      color: 'bg-blue-800',
      questionCount: 12,
      difficulty: 'advanced',
      estimatedTime: '6 min'
    },
    {
      id: 'networking-tools',
      title: 'Network Tools',
      description: 'Network diagnostics and monitoring commands',
      icon: Globe,
      color: 'bg-purple-900',
      questionCount: 6,
      difficulty: 'intermediate',
      estimatedTime: '3 min'
    },
    {
      id: 'system-admin',
      title: 'System Administration',
      description: 'Advanced system management commands',
      icon: Server,
      color: 'bg-red-900',
      questionCount: 15,
      difficulty: 'advanced',
      estimatedTime: '8 min'
    }
  ];

  const difficultyColors = {
    beginner: 'text-green-400 bg-green-900/20 border-green-600',
    intermediate: 'text-yellow-400 bg-yellow-900/20 border-yellow-600',
    advanced: 'text-red-400 bg-red-900/20 border-red-600',
  };

  if (selectedTest) {
    return <QuizScreen testId={selectedTest} onBack={() => setSelectedTest(null)} />;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-green-400">Command Tests</h2>
        <p className="text-gray-400 text-sm">
          Choose a test pack to challenge your CLI knowledge
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
          <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
          <div className="text-lg font-bold text-green-400">0</div>
          <div className="text-xs text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
          <Target className="w-6 h-6 text-blue-400 mx-auto mb-1" />
          <div className="text-lg font-bold text-green-400">0%</div>
          <div className="text-xs text-gray-400">Avg Score</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
          <Clock className="w-6 h-6 text-purple-400 mx-auto mb-1" />
          <div className="text-lg font-bold text-green-400">0</div>
          <div className="text-xs text-gray-400">Best Time</div>
        </div>
      </div>

      {/* Test Packs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green-300">Available Tests</h3>
        <div className="space-y-3">
          {testPacks.map((pack) => {
            const Icon = pack.icon;
            
            return (
              <button
                key={pack.id}
                onClick={() => setSelectedTest(pack.id)}
                className="w-full p-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${pack.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-200">{pack.title}</h4>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-400">{pack.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-2">
                      <div className={`px-2 py-1 rounded text-xs font-semibold border ${difficultyColors[pack.difficulty]}`}>
                        {pack.difficulty}
                      </div>
                      <span className="text-xs text-gray-500">
                        {pack.questionCount} questions
                      </span>
                      <span className="text-xs text-gray-500">
                        ~{pack.estimatedTime}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-600">
        <h3 className="font-semibold text-purple-300 mb-2">Coming Soon</h3>
        <p className="text-gray-300 text-sm mb-3">
          Timed challenges, multiplayer contests, and custom test creation
        </p>
        <div className="text-xs text-gray-400">
          Stay tuned for more exciting features!
        </div>
      </div>
    </div>
  );
};

export default Test;