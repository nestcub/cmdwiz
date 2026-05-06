import React from 'react';
import Link from 'next/link';
import Icon from '../ui/Icon';

interface RecommendedPathProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  progressPercent: number;
}

const RecommendedPath: React.FC<RecommendedPathProps> = ({
  title,
  description,
  icon,
  href,
  progressPercent,
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl p-6 bg-surface-container-high group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform pointer-events-none">
        <Icon name={icon} className="text-6xl" />
      </div>
      <div className="relative z-10">
        <h3 className="font-headline font-bold text-xl text-primary mb-2">{title}</h3>
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed max-w-[80%]">
          {description}
        </p>
        <Link
          href={href}
          className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold px-6 py-2.5 rounded-lg text-sm active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          RESUME SESSION
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
        <div
          className="h-full bg-secondary shadow-[0_0_10px_#7bd0ff] animate-pulse"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default RecommendedPath;
