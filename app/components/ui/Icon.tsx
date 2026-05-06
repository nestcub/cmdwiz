import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  filled?: boolean;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, filled = false, className = '', ...rest }) => {
  return (
    <span
      className={`material-symbols-outlined${filled ? ' filled' : ''} ${className}`.trim()}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  );
};

export default Icon;
