// Form.tsx
import React from 'react';
import SectionHero from '../../../components-v1/src/SectionHero';
import InputField, { INPUT_TYPE, INPUT_STATE } from '../../../components-v1/src/InputField';
import { UtilityButton, UTILITY_BUTTON_THEME } from '../../../components-v1/src/UtilityButton';
import Checkbox, { CHECKBOX_STATE } from '../../../components-v1/src/Checkbox';
import SocialButton1, { BUTTONS } from '../../../components-v1/src/SocialButton1';
import Button, { BUTTON_STYLE } from '../../../components-v1/src/Button';
import './Form.scss';

// Close icon SVG
const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export interface FormProps {
  /**
   * Optional className for additional styling
   */
  className?: string;

  /**
   * Callback function triggered when the form is submitted
   */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;

  /**
   * Callback function triggered when close button is clicked
   */
  onClose?: () => void;

  /**
   * Callback function triggered when sign up button is clicked
   */
  onSignUp?: () => void;
}

/**
 * Form screen component for user login
 */
export const Form: React.FC<FormProps> = ({
  className = '',
  onSubmit,
  onClose,
  onSignUp,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    }
  };

  return (
    <div className={`form ${className}`}>
      <div className="form__heading">
        <SectionHero 
          title="Log in"
          size="Small"
          showSubtitle={false}
          showTooltip={false}
          showLink={false}
          className="form__section-hero"
        />
        <UtilityButton
          theme={UTILITY_BUTTON_THEME.OVERLAY}
          ariaLabel="Close"
          icon={closeIcon}
          onClick={handleClose}
        />
      </div>

      <div className="form__content">
        <form className="form__form-container" onSubmit={handleSubmit}>
          <InputField 
            inputType={INPUT_TYPE.TEXT}
            state={INPUT_STATE.FILLED}
            label="Email"
            value="alexventers@gmail.com"
            className="form__input-field"
          />

          <div className="form__input-fields">
            <InputField 
              inputType={INPUT_TYPE.PASSWORD}
              state={INPUT_STATE.FILLED}
              label="Password"
              value="••••••••••"
              className="form__input-field"
            />
          </div>

          <div className="form__password-forgot">
            <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
          </div>

          <div className="form__checkbox">
            <Checkbox
              state={CHECKBOX_STATE.SELECTED}
              label="Remember me"
            />
          </div>
        </form>

        <div className="form__button-group">
          <p className="form__recaptcha-text">
            This site is protected by reCAPTCHA and the Google <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> and <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a> apply.
          </p>

          <SocialButton1 
            buttons={BUTTONS.THREE}
            className="form__social-buttons"
          />

          <Button
            styleVariant={BUTTON_STYLE.PRIMARY}
            className="form__button"
            onClick={() => {
              const form = document.querySelector('form');
              if (form) form.requestSubmit();
            }}
          >
            Log in
          </Button>
          
          <Button
            styleVariant={BUTTON_STYLE.TERTIARY}
            className="form__button"
            onClick={handleSignUp}
          >
            Don't have an account? Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;