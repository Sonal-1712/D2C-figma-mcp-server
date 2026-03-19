// FormScreen.tsx
import React from 'react';
import styles from '../styles/formPage.module.scss';

/**
 * FormScreen is a simplified version of the Form screen for the Next.js app
 */
const FormScreen: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <h2>Log in</h2>
        <button className={styles.closeButton} aria-label="Close">×</button>
      </div>

      <div className={styles.formContent}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <label className={styles.label}>Email</label>
            <input 
              type="email" 
              className={styles.input} 
              value="alexventers@gmail.com" 
              readOnly 
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Password</label>
            <div className={styles.passwordContainer}>
              <input 
                type="password" 
                className={styles.input} 
                value="••••••••••" 
                readOnly 
              />
              <button className={styles.showPasswordButton} aria-label="Show password">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4C5.45 4 2 8 2 10C2 12 5.45 16 10 16C14.55 16 18 12 18 10C18 8 14.55 4 10 4Z" stroke="#121619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#121619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className={styles.forgotPassword}>
              <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
            </div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="remember" checked readOnly />
            <label htmlFor="remember">Remember me</label>
          </div>
        </form>

        <div className={styles.buttonGroup}>
          <p className={styles.recaptchaText}>
            This site is protected by reCAPTCHA and the Google <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> and <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a> apply.
          </p>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#4285F4"/>
                <path d="M12 11V14H16.5C16.2 15.58 14.9 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C13.53 7 14.9 7.61 15.91 8.61L18.32 6.2C16.77 4.72 14.53 3.8 12 3.8C7.59 3.8 4 7.39 4 11.8C4 16.21 7.59 19.8 12 19.8C16.41 19.8 19.5 16.31 19.5 11.9C19.5 11.42 19.46 10.95 19.37 10.5H12V11Z" fill="white"/>
              </svg>
            </button>
            <button className={styles.socialButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#3B5998"/>
                <path d="M15 8H13C12.45 8 12 8.45 12 9V11H15L14.8 13H12V19H10V13H8V11H10V9.5C10 7.57 11.57 6 13.5 6H15V8Z" fill="white"/>
              </svg>
            </button>
            <button className={styles.socialButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="black"/>
                <path d="M15.07 16.69C14.46 17.06 13.75 17.25 12.99 17.25C11.73 17.25 10.68 16.71 9.89 15.65C9.1 14.58 8.71 13.13 8.71 11.31C8.71 9.62 9.04 8.2 9.71 7.06C10.38 5.91 11.5 5.34 13.07 5.34C13.69 5.34 14.27 5.49 14.81 5.8C15.35 6.11 15.76 6.52 16.03 7.03L15.18 7.87C14.97 7.5 14.69 7.19 14.34 6.96C13.99 6.73 13.57 6.62 13.08 6.62C12 6.62 11.17 7.06 10.6 7.93C10.03 8.8 9.75 9.93 9.75 11.31C9.75 12.8 10.06 13.94 10.67 14.73C11.28 15.51 12.09 15.91 13.08 15.91C14.32 15.91 15.13 15.38 15.51 14.31H12.9V12.99H16.96V17.04H15.95L15.07 16.69Z" fill="white"/>
              </svg>
            </button>
          </div>

          <button className={styles.primaryButton} onClick={() => console.log('Login clicked')}>
            Log in
          </button>
          
          <button className={styles.tertiaryButton} onClick={() => console.log('Sign up clicked')}>
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormScreen;