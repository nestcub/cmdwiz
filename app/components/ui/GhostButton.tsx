import React from 'react';

interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`bg-surface-container-highest border border-primary/20 text-primary font-headline font-semibold px-6 py-3 rounded-lg active:scale-95 transition-all hover:bg-primary/10 hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GhostButton;
