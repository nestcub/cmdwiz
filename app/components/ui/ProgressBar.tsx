import React from 'react';

interface ProgressBarProps {
  percent: number;
  pulse?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  pulse = true,
  variant = 'secondary',
  className = '',
}) => {
  const safePercent = Math.max(0, Math.min(100, percent));
  const fill =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary to-primary-container'
      : 'bg-gradient-to-r from-secondary to-secondary-container';

  return (
    <div
      className={`h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={safePercent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full ${fill} relative`}
        style={{ width: `${safePercent}%` }}
      >
        {pulse && <div className="absolute inset-0 bg-white/20 animate-pulse" />}
      </div>
    </div>
  );
};

export default ProgressBar;
