import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  large?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = true, 
  large = false, 
  className = '',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${primary 
          ? 'bg-yellow-500 hover:bg-yellow-600 text-navy-900' 
          : 'bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10'}
        ${large ? 'py-4 px-8 text-lg' : 'py-3 px-6 text-base'}
        rounded-md font-semibold transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;