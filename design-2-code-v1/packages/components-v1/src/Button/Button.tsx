// Button.tsx
import React, { forwardRef } from 'react';
import './Button.scss';

export const BUTTON_STYLE = {
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  TERTIARY: 'Tertiary',
  DANGER_PRIMARY: 'Danger primary',
  DANGER_SECONDARY: 'Danger secondary',
  DANGER_TERTIARY: 'Danger tertiary'
} as const;

export const BUTTON_STATE = {
  DEFAULT: 'Default',
  HOVER: 'Hover',
  ACTIVE: 'Active',
  FOCUS: 'Focus',
  LOADING: 'Loading',
  DISABLED: 'Disabled',
  SKELETON: 'Skeleton'
} as const;

export const BUTTON_THEME = {
  DEFAULT: 'Default',
  ON_COLOUR: 'On-colour',
  INVERSE: 'Inverse'
} as const;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /**
   * Button style variant
   * @default 'Primary'
   */
  styleVariant?: typeof BUTTON_STYLE[keyof typeof BUTTON_STYLE];
  
  /**
   * Button state
   * @default 'Default'
   */
  state?: typeof BUTTON_STATE[keyof typeof BUTTON_STATE];
  
  /**
   * Button theme
   * @default 'Default'
   */
  theme?: typeof BUTTON_THEME[keyof typeof BUTTON_THEME];
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Button content
   */
  children?: React.ReactNode;
}

/**
 * Button component with various style variants, states, and themes
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    styleVariant = BUTTON_STYLE.PRIMARY,
    state = BUTTON_STATE.DEFAULT,
    theme = BUTTON_THEME.DEFAULT,
    className = '',
    children = 'Button',
    disabled = false,
    ...rest
  } = props;

  // Convert variants to CSS class-friendly format (lowercase, no spaces)
  const styleClass = styleVariant.toLowerCase().replace(/\s+/g, '-');
  const stateClass = state.toLowerCase().replace(/\s+/g, '-');
  const themeClass = theme.toLowerCase().replace(/\s+/g, '-');
  
  // Combine classes
  const buttonClasses = [
    'wdl-button',
    `wdl-button--${styleClass}`,
    `wdl-button--${stateClass}`,
    `wdl-button--${themeClass}`,
    className
  ].join(' ');

  // Handle loading and skeleton states
  const isLoading = state === BUTTON_STATE.LOADING;
  const isSkeleton = state === BUTTON_STATE.SKELETON;
  const isDisabled = disabled || state === BUTTON_STATE.DISABLED;

  // Render loading spinner if loading
  const renderLoadingSpinner = () => {
    const isSmall = false; // Default to large spinner
    return (
      <span className="wdl-button__loading">
        <span className={`wdl-button__spinner ${isSmall ? 'wdl-button__spinner--small' : ''}`}>
          <span className="wdl-button__spinner-circle"></span>
        </span>
      </span>
    );
  };

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled || isSkeleton}
      aria-busy={isLoading}
      {...rest}
    >
      <span className="wdl-button__content">
        {isLoading ? renderLoadingSpinner() : children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
export default Button;