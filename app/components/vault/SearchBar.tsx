'use client';

import React from 'react';
import Icon from '../ui/Icon';

interface SearchBarProps {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search saved commands...',
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Icon name="search" className="text-secondary/60 text-xl" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-surface-container-highest border-b-2 border-transparent focus:border-primary transition-all duration-300 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default SearchBar;
