'use client';

import React, { useState } from 'react';
import Icon from './Icon';

interface CommandBlockProps {
  children: React.ReactNode;
  rawText?: string;
  copyable?: boolean;
  accent?: 'primary' | 'secondary';
  className?: string;
}

const CommandBlock: React.FC<CommandBlockProps> = ({
  children,
  rawText,
  copyable = false,
  accent = 'primary',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const accentBorder =
    accent === 'primary' ? 'border-primary/50' : 'border-secondary/50';

  const handleCopy = async () => {
    if (!rawText) return;
    try {
      await navigator.clipboard.writeText(rawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* no-op */
    }
  };

  return (
    <div
      className={`bg-surface-container-lowest p-5 rounded-lg border-l-4 ${accentBorder} relative overflow-hidden ${className}`}
    >
      {copyable && rawText && (
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1.5 rounded text-on-surface-variant/60 hover:text-primary transition-colors"
          aria-label="Copy command"
        >
          <Icon name={copied ? 'check' : 'content_copy'} className="text-base" />
        </button>
      )}
      <code className="block font-mono text-primary text-sm sm:text-base tracking-tight leading-relaxed break-all">
        {children}
      </code>
    </div>
  );
};

export default CommandBlock;
