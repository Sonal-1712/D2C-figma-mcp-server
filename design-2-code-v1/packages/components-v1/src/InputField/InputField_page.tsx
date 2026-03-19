// InputField_page.tsx
import React, { useState } from 'react';
import InputField, { INPUT_TYPE, INPUT_STATE } from './InputField';
import './InputFieldPage.scss';

const InputFieldPage: React.FC = () => {
  // State to keep track of form values
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    country: '',
    bio: ''
  });

  // State to keep track of validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    // Clear error when user starts typing again
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = { ...errors };
    let hasErrors = false;
    
    if (!formValues.name) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }
    
    if (!formValues.email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
      hasErrors = true;
    }
    
    if (!formValues.password) {
      newErrors.password = 'Password is required';
      hasErrors = true;
    } else if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      hasErrors = true;
    }
    
    if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      hasErrors = true;
    }
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="input-field-page">
      <h1 className="input-field-page__title">InputField Component</h1>
      
      <section className="input-field-page__section">
        <h2 className="input-field-page__heading">Input Field Types</h2>
        <div className="input-field-page__group">
          <div className="input-field-page__item">
            <InputField label="Text Input" placeholder="Enter some text" />
          </div>
          <div className="input-field-page__item">
            <InputField inputType={INPUT_TYPE.PASSWORD} label="Password Input" placeholder="Enter password" />
          </div>
          <div className="input-field-page__item">
            <InputField inputType={INPUT_TYPE.DROPDOWN} label="Dropdown Input" />
          </div>
          <div className="input-field-page__item">
            <InputField inputType={INPUT_TYPE.DATE} label="Date Input" />
          </div>
          <div className="input-field-page__item input-field-page__item--wide">
            <InputField inputType={INPUT_TYPE.TEXT_AREA} label="Text Area Input" placeholder="Enter multiple lines of text" />
          </div>
        </div>
      </section>

      <section className="input-field-page__section">
        <h2 className="input-field-page__heading">Input Field States</h2>
        <div className="input-field-page__group">
          <div className="input-field-page__item">
            <InputField label="Default" placeholder="Default state" />
          </div>
          <div className="input-field-page__item">
            <InputField label="Focus" state={INPUT_STATE.FOCUS_KEYBOARD} placeholder="Focus state" />
          </div>
          <div className="input-field-page__item">
            <InputField label="Filled" state={INPUT_STATE.FILLED} value="Filled input" />
          </div>
          <div className="input-field-page__item">
            <InputField label="Error" state={INPUT_STATE.EMPTY_ERROR} helperText="Error message" />
          </div>
          <div className="input-field-page__item">
            <InputField label="Disabled" state={INPUT_STATE.DISABLED} disabled />
          </div>
          <div className="input-field-page__item">
            <InputField label="Read Only" state={INPUT_STATE.READONLY} value="Read only value" readOnly />
          </div>
          <div className="input-field-page__item">
            <InputField label="Optional" optional placeholder="Optional field" />
          </div>
          <div className="input-field-page__item">
            <InputField label="With Helper" helperText="This is a helper text" placeholder="Field with helper" />
          </div>
        </div>
      </section>

      <section className="input-field-page__section">
        <h2 className="input-field-page__heading">Form Example</h2>
        <form className="input-field-page__form" onSubmit={handleSubmit}>
          <InputField 
            label="Full Name" 
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            state={errors.name ? INPUT_STATE.EMPTY_ERROR : INPUT_STATE.DEFAULT}
            helperText={errors.name}
          />
          
          <InputField 
            label="Email" 
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            state={errors.email ? INPUT_STATE.EMPTY_ERROR : INPUT_STATE.DEFAULT}
            helperText={errors.email}
          />
          
          <div className="input-field-page__form-row">
            <InputField 
              inputType={INPUT_TYPE.PASSWORD}
              label="Password" 
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter password"
              state={errors.password ? INPUT_STATE.EMPTY_ERROR : INPUT_STATE.DEFAULT}
              helperText={errors.password}
            />
            
            <InputField 
              inputType={INPUT_TYPE.PASSWORD}
              label="Confirm Password" 
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              state={errors.confirmPassword ? INPUT_STATE.EMPTY_ERROR : INPUT_STATE.DEFAULT}
              helperText={errors.confirmPassword}
            />
          </div>
          
          <div className="input-field-page__form-row">
            <InputField 
              inputType={INPUT_TYPE.DATE}
              label="Date of Birth" 
              name="dateOfBirth"
              value={formValues.dateOfBirth}
              onChange={handleChange}
              optional
            />
            
            <InputField 
              inputType={INPUT_TYPE.DROPDOWN}
              label="Country" 
              name="country"
              value={formValues.country}
              onChange={handleChange}
              optional
            />
          </div>
          
          <InputField 
            inputType={INPUT_TYPE.TEXT_AREA}
            label="Bio" 
            name="bio"
            value={formValues.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            optional
          />
          
          <div className="input-field-page__form-actions">
            <button type="submit" className="input-field-page__submit-button">Submit</button>
            <button type="reset" className="input-field-page__reset-button">Reset</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default InputFieldPage;