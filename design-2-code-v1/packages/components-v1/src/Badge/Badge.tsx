// Badge.tsx
import React from 'react';
import './Badge.scss';

export interface BadgeProps {
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Badge type
   */
  type?: 'Indicator' | 'Status' | 'Counter';
  /**
   * Badge text content (for Counter type)
   */
  count?: number | string;
}

/**
 * Badge component for displaying status indicators
 */
export const Badge: React.FC<BadgeProps> = ({
  className = '',
  type = 'Indicator',
  count
}) => {
  return (
    <div className={`wdl-badge wdl-badge--${type.toLowerCase()} ${className}`}>
      {type === 'Counter' && (
        <span className="wdl-badge__count">{count}</span>
      )}
    </div>
  );
};

export default Badge;