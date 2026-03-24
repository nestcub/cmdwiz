import React from 'react';
import { User, Trophy, Target, BookOpen, LogIn, UserPlus } from 'lucide-react';

interface HomeProps {
  userProfile: {
    background: string;
    selectedPacks: string[];
    isLoggedIn: boolean;
  } | null;
  onNavigate: (screen: 'home' | 'learn' | 'test') => void;
}

const Home: React.FC<HomeProps> = ({ userProfile, onNavigate }) => {
  const backgroundLabels: { [key: string]: string } = {
    developer: 'Developer',
    student: 'Student',
    sysadmin: 'System Admin',
    beginner: 'Complete Beginner',
  };

  const packLabels: { [key: string]: string } = {
    linux: 'Linux Commands',
    git: 'Git Version Control',
    docker: 'Docker Containers',
    networking: 'Network Tools',
  };

  if (!userProfile?.isLoggedIn) {
    return (
      <div className="p-6 space-y-8 min-h-full flex flex-col justify-center">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
            <User className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">Welcome to CmdWiz</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Master command-line tools through interactive learning
          </p>
        </div>

        {/* Auth Prompt */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center space-y-4">
          <Trophy className="w-12 h-12 text-yellow-400 mx-auto" />
          <h3 className="text-lg font-semibold text-green-300">
            Join Contests & Track Progress
          </h3>
          <p className="text-gray-300 text-sm">
            Sign up to participate in coding contests, track your learning progress, and compete with other developers
          </p>
          
          <div className="space-y-3 pt-4">
            <button className="w-full bg-green-600 hover:bg-green-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <UserPlus className="w-5 h-5" />
              <span>Sign Up Now</span>
            </button>
            
            <button className="w-full border border-green-600 text-green-400 hover:bg-green-900/20 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-green-300">Start Learning</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('learn')}
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors duration-200 text-center"
            >
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-200">Learn Commands</span>
            </button>
            
            <button
              onClick={() => onNavigate('test')}
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors duration-200 text-center"
            >
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-200">Take Tests</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-400">Welcome back!</h2>
            <p className="text-gray-300 text-sm">
              {userProfile.background ? backgroundLabels[userProfile.background] : 'CLI Learner'}
            </p>
          </div>
        </div>

        {/* Selected Packs */}
        {userProfile.selectedPacks.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-green-300">Your Command Packs</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.selectedPacks.map((packId) => (
                <span
                  key={packId}
                  className="px-3 py-1 bg-green-900/20 border border-green-600 rounded-full text-xs text-green-300"
                >
                  {packLabels[packId] || packId}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">0</div>
          <div className="text-xs text-gray-400">Commands Learned</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-1">0</div>
          <div className="text-xs text-gray-400">Tests Completed</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-green-300">Continue Learning</h3>
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('learn')}
            className="w-full p-4 bg-blue-900/20 hover:bg-blue-900/30 border border-blue-600 rounded-lg transition-colors duration-200 flex items-center space-x-4"
          >
            <BookOpen className="w-8 h-8 text-blue-400" />
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-blue-300">Learn Commands</h4>
              <p className="text-xs text-gray-400">Swipe through command cards</p>
            </div>
          </button>
          
          <button
            onClick={() => onNavigate('test')}
            className="w-full p-4 bg-purple-900/20 hover:bg-purple-900/30 border border-purple-600 rounded-lg transition-colors duration-200 flex items-center space-x-4"
          >
            <Target className="w-8 h-8 text-purple-400" />
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-purple-300">Take Tests</h4>
              <p className="text-xs text-gray-400">Test your knowledge</p>
            </div>
          </button>
        </div>
      </div>

      {/* Contests Section */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-4 border border-yellow-600">
        <div className="flex items-center space-x-3 mb-3">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h3 className="font-semibold text-yellow-300">Upcoming Contests</h3>
        </div>
        <p className="text-gray-300 text-sm mb-3">
          Join weekly CLI challenges and compete with developers worldwide
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-200">
          View Contests
        </button>
      </div>
    </div>
  );
};

export default Home;