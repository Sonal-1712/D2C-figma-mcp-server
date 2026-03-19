// Checkbox.tsx
import React, { forwardRef } from 'react';
import './Checkbox.scss';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * State of the checkbox
   */
  state?: "Default" | "Selected" | "Error" | "Focus" | "Disabled";
  /**
   * Label text or content for the checkbox
   */
  label?: React.ReactNode;
  /**
   * Error text to display when state is "Error"
   */
  errorText?: string;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const CHECKBOX_STATE = {
  DEFAULT: "Default",
  SELECTED: "Selected",
  ERROR: "Error",
  FOCUS: "Focus",
  DISABLED: "Disabled"
} as const;

/**
 * Checkbox component
 */
const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const { 
    state = CHECKBOX_STATE.DEFAULT, 
    label = "Body text, that could include links for additional information Privacy Policy and the Terms of Use",
    errorText = "Error-text",
    className = '', 
    ...rest 
  } = props;

  const isDisabled = state === CHECKBOX_STATE.DISABLED;
  const isError = state === CHECKBOX_STATE.ERROR;
  const isFocus = state === CHECKBOX_STATE.FOCUS;
  const isSelected = state === CHECKBOX_STATE.SELECTED;

  return (
    <div 
      ref={ref} 
      className={`checkbox ${state.toLowerCase()} ${className}`} 
      {...rest}
    >
      <div className="checkbox-container">
        <div className="checkbox-content">
          <div className="checkbox-icon-text">
            <div className="checkbox-icon">
              {(state === CHECKBOX_STATE.SELECTED || state === CHECKBOX_STATE.DISABLED) ? (
                <div className="checkbox-icon-filled">
                  <div className="checkbox-icon-filled-inner"></div>
                </div>
              ) : (
                <div className="checkbox-icon-empty">
                  <div className="checkbox-icon-empty-inner"></div>
                </div>
              )}
            </div>
            <p className="checkbox-label">{label}</p>
          </div>
          
          {isError && (
            <div className="checkbox-error-text">
              <p>{errorText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;