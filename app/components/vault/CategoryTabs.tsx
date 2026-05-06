'use client';

import React from 'react';

interface CategoryTabsProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, active, onChange }) => {
  return (
    <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
      <div className="flex gap-3">
        {categories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`px-5 py-2 rounded-full font-label text-sm whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20 font-bold'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
