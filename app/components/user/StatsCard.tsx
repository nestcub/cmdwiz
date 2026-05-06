import React from 'react';
import Icon from '../ui/Icon';

interface StatsCardProps {
  icon: string;
  value: string;
  label: string;
  tone?: 'primary' | 'secondary' | 'tertiary';
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, tone = 'secondary' }) => {
  const accent =
    tone === 'primary' ? 'text-primary' : tone === 'tertiary' ? 'text-tertiary' : 'text-secondary';
  return (
    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center justify-center text-center">
      <span className={`${accent} mb-1`}>
        <Icon name={icon} className="text-2xl" />
      </span>
      <span className="font-headline font-bold text-xl text-on-surface">{value}</span>
      <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mt-0.5">
        {label}
      </span>
    </div>
  );
};

export default StatsCard;
