// Expand.tsx
import React from 'react';
import './Expand.scss';

export interface ExpandProps {
  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Expand component for expanding content to fullscreen
 */
export const Expand: React.FC<ExpandProps> = ({
  className = ''
}) => {
  const expandIconPath = '/assets/expand-icon.svg';
  const expandVectorPath = '/assets/expand-vector.svg';

  return (
    <div className={`wdl-expand ${className}`}>
      <img 
        src={expandIconPath} 
        alt="" 
        className="wdl-expand__icon-base" 
      />
      <div className="wdl-expand__vector-container">
        <img 
          src={expandVectorPath} 
          alt="Expand" 
          className="wdl-expand__vector" 
        />
      </div>
    </div>
  );
};

export default Expand;