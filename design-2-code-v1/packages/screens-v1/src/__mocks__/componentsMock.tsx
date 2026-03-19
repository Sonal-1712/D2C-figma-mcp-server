import React from 'react';

// Button components
export const Button: React.FC<any> = ({ children, onClick, style, state }) => (
  <button 
    onClick={onClick} 
    className={`mock-button ${style || ''} ${state || ''}`}
  >
    {children}
  </button>
);

export const UtilityButton: React.FC<any> = ({ icon, onClick, ariaLabel }) => (
  <button onClick={onClick} aria-label={ariaLabel} className="mock-utility-button">
    {icon}
  </button>
);

export const LogoButton: React.FC<any> = ({ onClick }) => (
  <button onClick={onClick} className="mock-logo-button">Logo</button>
);

export const SocialButton: React.FC<any> = ({ social, onClick }) => (
  <button onClick={onClick} className="mock-social-button">{social}</button>
);

export const SocialButtonGroup: React.FC<any> = ({ children }) => (
  <div className="mock-social-button-group">{children}</div>
);

// Form components
export const InputField: React.FC<any> = ({ 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  helperText, 
  state 
}) => (
  <div className={`mock-input-field ${state || ''}`}>
    <label>{label}</label>
    <input 
      type={type === 'Password' ? 'password' : 'text'} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {helperText && <div className="mock-helper-text">{helperText}</div>}
  </div>
);

export const Checkbox: React.FC<any> = ({ 
  label, 
  checked, 
  onChange, 
  showHelperText, 
  helperText, 
  state 
}) => (
  <div className={`mock-checkbox ${state || ''}`}>
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={onChange}
    />
    <label>{label}</label>
    {showHelperText && helperText && (
      <div className="mock-helper-text">{helperText}</div>
    )}
  </div>
);

// Display components
export const SectionHero: React.FC<any> = ({ title, size }) => (
  <div className={`mock-section-hero ${size || ''}`}>{title}</div>
);

export const InPageMessage: React.FC<any> = ({ 
  status, 
  title, 
  message, 
  buttonText, 
  onButtonClick 
}) => (
  <div className={`mock-in-page-message ${status || ''}`}>
    <h3>{title}</h3>
    <p>{message}</p>
    {buttonText && (
      <button onClick={onButtonClick}>{buttonText}</button>
    )}
  </div>
);

// Export dummy types to match the actual components
export type ButtonProps = any;
export type UtilityButtonProps = any;
export type SocialButtonProps = any;
export type SocialLogoProps = any;
