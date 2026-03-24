import React, { useState, useRef } from 'react';
import { RotateCcw } from 'lucide-react';
import CommandCard from './CommandCard';
import { commands } from '../data/commands';

const Learn: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentCommand = commands[currentIndex];

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % commands.length);
      setIsAnimating(false);
    }, 200);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + commands.length) % commands.length);
      setIsAnimating(false);
    }, 200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStart === 0) return;
    const currentX = e.touches[0].clientX;
    const offset = currentX - dragStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevCard();
      } else {
        nextCard();
      }
    }
    setDragStart(0);
    setDragOffset(0);
  };

  const handleMouseStart = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart === 0) return;
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  };

  const handleMouseEnd = () => {
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevCard();
      } else {
        nextCard();
      }
    }
    setDragStart(0);
    setDragOffset(0);
  };

  return (
    <div className="p-6 min-h-full flex flex-col">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-xl font-bold text-green-400">Learn Commands</h2>
      </div>

      {/* Card Container */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-full max-w-sm relative">
          {/* Command Card */}
          <div
            ref={cardRef}
            className={`transform transition-all duration-200 ${
              isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}
            style={{
              transform: `translateX(${dragOffset}px) ${
                isAnimating ? 'scale(0.95)' : 'scale(1)'
              }`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseStart}
            onMouseMove={dragStart ? handleMouseMove : undefined}
            onMouseUp={handleMouseEnd}
            onMouseLeave={handleMouseEnd}
          >
            <CommandCard command={currentCommand} />
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => setCurrentIndex(0)}
        className="mt-6 flex items-center justify-center space-x-2 w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
      >
        <RotateCcw className="w-4 h-4" />
        <span className="text-sm">Start Over</span>
      </button>
    </div>
  );
};

export default Learn;