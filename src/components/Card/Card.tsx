import React from 'react';

export interface CardProps {
  /**
   * Card contents
   */
  children: React.ReactNode;
  /**
   * Card title
   */
  title?: string;
  /**
   * Card variant
   */
  variant?: 'default' | 'elevated' | 'outlined';
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Card component for displaying content in a structured way
 */
export const Card: React.FC<CardProps> = ({
  children,
  title,
  variant = 'default',
  className = '',
}) => {
  const baseClasses = 'rounded-lg p-6';

  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-gray-200',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
};
