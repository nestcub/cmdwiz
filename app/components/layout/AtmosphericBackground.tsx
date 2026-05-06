import React from 'react';

const AtmosphericBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[5%] -right-[5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px]" />
    </div>
  );
};

export default AtmosphericBackground;
