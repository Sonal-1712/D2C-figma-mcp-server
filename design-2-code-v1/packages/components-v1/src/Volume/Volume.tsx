// Volume.tsx
import React from 'react';
import { Sound } from '../Sound';
import './Volume.scss';

export interface VolumeProps {
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Volume state - true to show volume slider, false to show only sound button
   */
  volume?: boolean;
}

/**
 * Volume component for audio/video controls
 */
export const Volume: React.FC<VolumeProps> = ({
  className = '',
  volume = true
}) => {
  return (
    <div className={`wdl-volume ${!volume ? 'wdl-volume--compact' : ''} ${className}`}>
      {volume && (
        <div className="wdl-volume__bar">
          <div className="wdl-volume__bar-background"></div>
          <div className="wdl-volume__bar-progress"></div>
        </div>
      )}
      <Sound className="wdl-volume__sound" sound={true} />
    </div>
  );
};

export default Volume;