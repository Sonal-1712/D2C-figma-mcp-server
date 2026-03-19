// InputField.tsx
import React, { forwardRef, useState } from 'react';
import './InputField.scss';

export const INPUT_TYPE = {
  TEXT: 'Text input',
  DROPDOWN: 'Dropdown',
  DATE: 'Date',
  PASSWORD: 'Password',
  TEXT_AREA: 'Text area'
} as const;

export const INPUT_STATE = {
  DEFAULT: 'Default',
  FOCUS_POINTER: 'Focus (pointer)',
  FOCUS_KEYBOARD: 'Focus (keyboard)',
  FILLED: 'Filled',
  EMPTY_ERROR: 'Empty error',
  FILLED_ERROR: 'Filled error',
  DISABLED: 'Disabled',
  READONLY: 'Read-only',
  SKELETON: 'Skeleton'
} as const;

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'type'> {
  /**
   * Input field type
   * @default 'Text input'
   */
  inputType?: typeof INPUT_TYPE[keyof typeof INPUT_TYPE];
  
  /**
   * Input field state
   * @default 'Default'
   */
  state?: typeof INPUT_STATE[keyof typeof INPUT_STATE];
  
  /**
   * Label text
   */
  label?: string;
  
  /**
   * Helper or error text
   */
  helperText?: string;
  
  /**
   * Whether the field is optional
   * @default false
   */
  optional?: boolean;

  /**
   * Whether to show the password (for password type)
   * @default false
   */
  showPassword?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}

/**
 * InputField component with various types and states
 */
const InputField = forwardRef<HTMLDivElement, InputFieldProps>((props, ref) => {
  const {
    inputType = INPUT_TYPE.TEXT,
    state = INPUT_STATE.DEFAULT,
    label = 'Label',
    helperText,
    optional = false,
    showPassword = false,
    className = '',
    placeholder = 'Placeholder text',
    value,
    disabled = false,
    readOnly = false,
    ...rest
  } = props;

  // Local state to track password visibility
  const [passwordVisible, setPasswordVisible] = useState<boolean>(showPassword);
  
  // Determine if the component is in an error state
  const isError = state === INPUT_STATE.EMPTY_ERROR || state === INPUT_STATE.FILLED_ERROR;
  
  // Determine actual state based on props
  let actualState = state;
  if (disabled) {
    actualState = INPUT_STATE.DISABLED;
  } else if (readOnly) {
    actualState = INPUT_STATE.READONLY;
  }

  // Combine classes for the container
  const containerClasses = [
    'wdl-input-field',
    `wdl-input-field--${inputType.toLowerCase().replace(/\s+/g, '-')}`,
    `wdl-input-field--${actualState.toLowerCase().replace(/\s+/g, '-')}`,
    className
  ].join(' ');

  // Combine classes for the field
  const fieldClasses = [
    'wdl-input-field__field',
    isError ? 'wdl-input-field__field--error' : '',
    actualState === INPUT_STATE.FOCUS_KEYBOARD || actualState === INPUT_STATE.FOCUS_POINTER ? 'wdl-input-field__field--focus' : '',
    actualState === INPUT_STATE.DISABLED ? 'wdl-input-field__field--disabled' : '',
    actualState === INPUT_STATE.READONLY ? 'wdl-input-field__field--readonly' : ''
  ].filter(Boolean).join(' ');

  // Combine classes for the label
  const labelClasses = [
    'wdl-input-field__label',
    isError ? 'wdl-input-field__label--error' : ''
  ].join(' ');

  // Helper/error text classes
  const helperTextClasses = [
    'wdl-input-field__helper-text',
    isError ? 'wdl-input-field__helper-text--error' : ''
  ].join(' ');

  // Render the appropriate input based on type
  const renderInput = () => {
    switch(inputType) {
      case INPUT_TYPE.TEXT_AREA:
        return (
          <textarea
            className="wdl-input-field__input"
            placeholder={actualState === INPUT_STATE.DEFAULT ? placeholder as string : undefined}
            value={value}
            disabled={actualState === INPUT_STATE.DISABLED}
            readOnly={actualState === INPUT_STATE.READONLY}
            {...rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        );
      
      case INPUT_TYPE.PASSWORD:
        return (
          <div className="wdl-input-field__input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              className="wdl-input-field__input"
              placeholder={actualState === INPUT_STATE.DEFAULT ? placeholder as string : undefined}
              value={value}
              disabled={actualState === INPUT_STATE.DISABLED}
              readOnly={actualState === INPUT_STATE.READONLY}
              {...rest as React.InputHTMLAttributes<HTMLInputElement>}
            />
            {inputType === INPUT_TYPE.PASSWORD && actualState !== INPUT_STATE.SKELETON && (
              <button
                type="button"
                className="wdl-input-field__password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
                tabIndex={-1}
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                disabled={actualState === INPUT_STATE.DISABLED || actualState === INPUT_STATE.READONLY}
              >
                <span className={`wdl-input-field__password-toggle-icon ${passwordVisible ? 'wdl-input-field__password-toggle-icon--visible' : 'wdl-input-field__password-toggle-icon--hidden'}`}></span>
              </button>
            )}
          </div>
        );
      
      case INPUT_TYPE.DROPDOWN:
        return (
          <div className="wdl-input-field__input-container">
            <select
              className="wdl-input-field__input"
              value={value as string}
              disabled={actualState === INPUT_STATE.DISABLED}
              {...rest as React.SelectHTMLAttributes<HTMLSelectElement>}
            >
              <option value="" disabled selected hidden>{actualState === INPUT_STATE.DEFAULT ? placeholder : undefined}</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {actualState !== INPUT_STATE.SKELETON && (
              <div className="wdl-input-field__dropdown-arrow"></div>
            )}
          </div>
        );

      case INPUT_TYPE.DATE:
        return (
          <div className="wdl-input-field__input-container">
            <input
              type="date"
              className="wdl-input-field__input"
              placeholder={actualState === INPUT_STATE.DEFAULT ? placeholder as string : undefined}
              value={value as string}
              disabled={actualState === INPUT_STATE.DISABLED}
              readOnly={actualState === INPUT_STATE.READONLY}
              {...rest as React.InputHTMLAttributes<HTMLInputElement>}
            />
            {actualState !== INPUT_STATE.SKELETON && (
              <div className="wdl-input-field__calendar-icon"></div>
            )}
          </div>
        );
      
      default:
        return (
          <input
            type="text"
            className="wdl-input-field__input"
            placeholder={actualState === INPUT_STATE.DEFAULT ? placeholder as string : undefined}
            value={value}
            disabled={actualState === INPUT_STATE.DISABLED}
            readOnly={actualState === INPUT_STATE.READONLY}
            {...rest as React.InputHTMLAttributes<HTMLInputElement>}
          />
        );
    }
  };

  // Render error icon
  const renderErrorIcon = () => {
    if (isError) {
      return <div className="wdl-input-field__error-icon"></div>;
    }
    return null;
  };

  return (
    <div ref={ref} className={containerClasses}>
      <div className="wdl-input-field__label-container">
        <label className={labelClasses}>{label}</label>
        {optional && (
          <span className="wdl-input-field__optional">Optional</span>
        )}
      </div>
      <div className={fieldClasses}>
        {renderInput()}
        {renderErrorIcon()}
      </div>
      {helperText && (
        <div className={helperTextClasses}>
          {helperText}
        </div>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';
export default InputField;