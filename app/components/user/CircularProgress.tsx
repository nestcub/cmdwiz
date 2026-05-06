import React from 'react';

interface CircularProgressProps {
  percent: number;
  children: React.ReactNode;
  size?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percent,
  children,
  size = 128,
}) => {
  const safe = Math.max(0, Math.min(100, percent));
  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(closest-side, #0c1322 79%, transparent 80% 100%), conic-gradient(#5af0b3 ${safe}%, #191f2f 0)`,
  };

  return (
    <div
      className="rounded-full flex items-center justify-center p-2"
      style={style}
      role="img"
      aria-label={`${safe}% complete`}
    >
      {children}
    </div>
  );
};

export default CircularProgress;
