// UtilityButton.tsx
import React, { forwardRef } from 'react';
import './UtilityButton.scss';

/**
 * UtilityButton states
 */
export const UTILITY_BUTTON_STATE = {
  DEFAULT: 'default',
  HOVER: 'hover',
  ACTIVE: 'active',
  FOCUS: 'focus',
  LOADING: 'loading',
  DISABLED: 'disabled',
  SKELETON: 'skeleton'
} as const;

/**
 * UtilityButton themes
 */
export const UTILITY_BUTTON_THEME = {
  DEFAULT: 'default',
  ON_COLOUR: 'on-colour',
  INVERSE: 'inverse',
  OVERLAY: 'overlay',
  GHOST: 'ghost'
} as const;

export interface UtilityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Custom class name for the component
   */
  className?: string;
  
  /**
   * Icon element to be displayed in the button
   */
  icon?: React.ReactNode;
  
  /**
   * Button state
   */
  state?: typeof UTILITY_BUTTON_STATE[keyof typeof UTILITY_BUTTON_STATE];
  
  /**
   * Button theme
   */
  theme?: typeof UTILITY_BUTTON_THEME[keyof typeof UTILITY_BUTTON_THEME];
  
  /**
   * ARIA label for the button
   */
  ariaLabel?: string;
}

export const UtilityButton = forwardRef<HTMLButtonElement, UtilityButtonProps>(({
  className = '',
  icon,
  state = UTILITY_BUTTON_STATE.DEFAULT,
  theme = UTILITY_BUTTON_THEME.DEFAULT,
  ariaLabel = 'Utility button',
  disabled,
  onClick,
  ...props
}, ref) => {
  // Determine if button should be disabled based on state
  const isDisabled = disabled || state === UTILITY_BUTTON_STATE.DISABLED || state === UTILITY_BUTTON_STATE.SKELETON;
  
  // Determine the classes based on state and theme
  const themeClass = `utility-button--theme-${theme}`;
  const stateClass = `utility-button--state-${state}`;
  
  return (
    <button
      ref={ref}
      className={`utility-button ${themeClass} ${stateClass} ${className}`}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <div className="utility-button__content">
        {state === UTILITY_BUTTON_STATE.LOADING ? (
          <div className="utility-button__loading">
            {/* Loading spinner */}
            <div className="utility-button__spinner" />
          </div>
        ) : icon ? (
          <div className="utility-button__icon">{icon}</div>
        ) : (
          <div className="utility-button__icon utility-button__icon--default">
            {/* Default tennis icon will be implemented with CSS background */}
          </div>
        )}
      </div>
    </button>
  );
});

// PropTypes have been removed as they're not available in this project

UtilityButton.displayName = 'UtilityButton';

export default UtilityButton;