// Sound.tsx
import React from 'react';
import './Sound.scss';

export interface SoundProps {
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Sound state - true for sound on, false for sound off
   */
  sound?: boolean;
}

/**
 * Sound component for displaying sound on/off status
 */
export const Sound: React.FC<SoundProps> = ({
  className = '',
  sound = false
}) => {
  const soundOffIconPath = '/assets/sound-off-icon.svg';
  const soundOnIconPath = '/assets/sound-on-icon.svg';
  const soundOffVectorPath = '/assets/sound-off-vector.svg';
  const soundOnVectorPath = '/assets/sound-on-vector.svg';

  return (
    <div className={`wdl-sound ${className}`}>
      <img 
        src={soundOffIconPath} 
        alt="" 
        className="wdl-sound__icon-base" 
      />
      <div className="wdl-sound__vector-container">
        <img 
          src={sound ? soundOnVectorPath : soundOffVectorPath} 
          alt={sound ? "Sound on" : "Sound off"} 
          className="wdl-sound__vector" 
        />
      </div>
    </div>
  );
};

export default Sound;