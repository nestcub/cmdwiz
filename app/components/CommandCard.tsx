import React from 'react';
import { Terminal, Info } from 'lucide-react';

interface Command {
  id: string;
  command: string;
  description: string;
  example: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface CommandCardProps {
  command: Command;
}

const CommandCard: React.FC<CommandCardProps> = ({ command }) => {
  const difficultyColors = {
    beginner: 'text-green-400 bg-green-900/20 border-green-600',
    intermediate: 'text-yellow-400 bg-yellow-900/20 border-yellow-600',
    advanced: 'text-red-400 bg-red-900/20 border-red-600',
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-green-400" />
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            {command.category}
          </span>
        </div>
        <div className={`px-2 py-1 rounded-md text-xs font-semibold border ${difficultyColors[command.difficulty]}`}>
          {command.difficulty}
        </div>
      </div>

      {/* Command */}
      <div className="bg-black rounded-lg border border-gray-600 p-4 mb-4">
        <code className="text-green-400 text-lg font-mono break-all">
          {command.command}
        </code>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
          <p className="text-gray-300 text-sm leading-relaxed">
            {command.description}
          </p>
        </div>

        {/* Example */}
        <div className="bg-gray-900 rounded-lg p-3 border-l-4 border-blue-500">
          <p className="text-xs text-blue-300 mb-1 font-semibold uppercase tracking-wide">
            Example
          </p>
          <code className="text-gray-300 text-sm font-mono">
            {command.example}
          </code>
        </div>
      </div>

    </div>
  );
};

export default CommandCard;