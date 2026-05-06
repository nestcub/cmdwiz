import React from 'react';

interface TerminalCardProps {
  sessionLabel?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalCard: React.FC<TerminalCardProps> = ({
  sessionLabel = 'bash — session',
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-surface-container-lowest rounded-xl p-1 terminal-glow border border-outline-variant/10 relative ${className}`}
    >
      <div className="bg-surface-container-low rounded-[0.65rem] overflow-hidden">
        <div className="bg-surface-container-highest px-4 py-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          </div>
          <span className="text-[10px] font-mono text-on-surface-variant/50 tracking-widest uppercase">
            {sessionLabel}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default TerminalCard;
