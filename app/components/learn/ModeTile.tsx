import React from 'react';
import Link from 'next/link';
import Icon from '../ui/Icon';

interface ModeTileProps {
  href: string;
  icon: string;
  title: string;
  description: string;
  accent?: 'primary' | 'secondary' | 'tertiary';
}

const ModeTile: React.FC<ModeTileProps> = ({
  href,
  icon,
  title,
  description,
  accent = 'primary',
}) => {
  const accentColor =
    accent === 'primary'
      ? 'text-primary'
      : accent === 'secondary'
      ? 'text-secondary'
      : 'text-tertiary';

  return (
    <Link
      href={href}
      className="relative overflow-hidden rounded-xl p-5 bg-surface-container-low hover:bg-surface-container transition-colors block group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
        <Icon name={icon} className="text-6xl" />
      </div>
      <div className="relative space-y-2">
        <Icon name={icon} className={`text-2xl ${accentColor}`} filled />
        <h3 className={`font-headline font-bold text-lg ${accentColor}`}>{title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed max-w-[80%]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ModeTile;
