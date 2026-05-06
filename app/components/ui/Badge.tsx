import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  tone?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, tone = 'secondary', className = '' }) => {
  const styles =
    tone === 'primary'
      ? 'text-primary bg-primary/10'
      : tone === 'tertiary'
      ? 'text-tertiary bg-tertiary/10'
      : 'text-secondary bg-secondary/10';

  return (
    <span
      className={`text-[10px] font-black uppercase tracking-widest py-0.5 px-2 rounded ${styles} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
