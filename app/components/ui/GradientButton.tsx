import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold px-6 py-3 rounded-lg active:scale-95 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GradientButton;
