// SocialButton1.tsx
import React, { forwardRef } from 'react';
import './SocialButton1.scss';

export const BUTTONS = {
  ONE: '1',
  TWO: '2',
  THREE: '3'
} as const;

export interface SocialButton1Props {
  /**
   * Number of social buttons to display
   * @default '1'
   */
  buttons?: typeof BUTTONS[keyof typeof BUTTONS];
  
  /**
   * Custom class name
   */
  className?: string;
}

/**
 * SocialButton1 component displays a row of 1-3 social login buttons
 */
const SocialButton1 = forwardRef<HTMLDivElement, SocialButton1Props>((props, ref) => {
  const {
    buttons = BUTTONS.ONE,
    className = '',
  } = props;

  const is2Or3 = buttons === BUTTONS.TWO || buttons === BUTTONS.THREE;
  const is3 = buttons === BUTTONS.THREE;

  // Construct the container class based on the number of buttons
  const containerClass = [
    'wdl-social-button1',
    is2Or3 ? 'wdl-social-button1--multi' : '',
    className
  ].filter(Boolean).join(' ');

  // Render individual social buttons
  const renderSocialButton = (key: number) => (
    <div key={key} className="wdl-social-button1__button">
      <div className="wdl-social-button1__button-content">
        <div className="wdl-social-button1__logo">
          <img 
            src="/apple-logo.svg" 
            alt="Apple logo" 
            className="wdl-social-button1__logo-img" 
          />
        </div>
      </div>
    </div>
  );

  // Create an array with the number of buttons to render
  const buttonCount = parseInt(buttons);
  const socialButtons = Array.from({ length: buttonCount }, (_, i) => renderSocialButton(i));

  return (
    <div ref={ref} className={containerClass}>
      {socialButtons}
    </div>
  );
});

SocialButton1.displayName = 'SocialButton1';
export default SocialButton1;