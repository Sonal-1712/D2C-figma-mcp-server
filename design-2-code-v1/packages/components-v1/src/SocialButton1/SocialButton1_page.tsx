// SocialButton1_page.tsx
import React from 'react';
import SocialButton1, { BUTTONS } from './SocialButton1';
import './SocialButton1Page.scss';

// Create an Apple logo SVG since we can't load the actual image in this context
const AppleLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5C17.88 20.74 17.00 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.35 4.26 13 3.5Z" />
  </svg>
);

// Mock the image loading in the component by replacing the image with our SVG
const replaceSocialButtonImages = () => {
  if (typeof document !== 'undefined') {
    const images = document.querySelectorAll('.wdl-social-button1__logo-img');
    images.forEach((img) => {
      // Create a new SVG element directly instead of cloning
      if (img.parentElement) {
        const container = img.parentElement;
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute('width', '24');
        svgElement.setAttribute('height', '24');
        svgElement.setAttribute('viewBox', '0 0 24 24');
        svgElement.setAttribute('fill', 'black');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M18.71 19.5C17.88 20.74 17.00 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.35 4.26 13 3.5Z');
        
        svgElement.appendChild(path);
        container.appendChild(svgElement);
        img.remove();
      }
    });
  }
};

// Call the function after a short delay to ensure DOM is ready
setTimeout(replaceSocialButtonImages, 100);

const SocialButton1Page: React.FC = () => {
  return (
    <div className="social-button1-page">
      <h1 className="social-button1-page__title">SocialButton1 Component</h1>
      
      <section className="social-button1-page__section">
        <h2 className="social-button1-page__heading">Button Variants</h2>
        <div className="social-button1-page__group">
          <div className="social-button1-page__item">
            <SocialButton1 buttons={BUTTONS.ONE} />
            <span className="social-button1-page__label">Single Button</span>
          </div>
          <div className="social-button1-page__item">
            <SocialButton1 buttons={BUTTONS.TWO} />
            <span className="social-button1-page__label">Two Buttons</span>
          </div>
          <div className="social-button1-page__item">
            <SocialButton1 buttons={BUTTONS.THREE} />
            <span className="social-button1-page__label">Three Buttons</span>
          </div>
        </div>
      </section>

      <section className="social-button1-page__section">
        <h2 className="social-button1-page__heading">Custom Width Examples</h2>
        <div className="social-button1-page__group">
          <div className="social-button1-page__item">
            <div style={{ width: '300px' }}>
              <SocialButton1 buttons={BUTTONS.ONE} />
            </div>
            <span className="social-button1-page__label">Fixed Width (300px)</span>
          </div>
          <div className="social-button1-page__item">
            <div style={{ width: '50%' }}>
              <SocialButton1 buttons={BUTTONS.TWO} />
            </div>
            <span className="social-button1-page__label">Percentage Width (50%)</span>
          </div>
        </div>
      </section>

      <section className="social-button1-page__section">
        <h2 className="social-button1-page__heading">Responsive Examples</h2>
        <div className="social-button1-page__responsive-demo">
          <div className="social-button1-page__responsive-container">
            <SocialButton1 buttons={BUTTONS.THREE} />
          </div>
          <span className="social-button1-page__label">Responsive Container (resize the window)</span>
        </div>
      </section>

      <section className="social-button1-page__section">
        <h2 className="social-button1-page__heading">Integration Example</h2>
        <div className="social-button1-page__integration-example">
          <div className="social-button1-page__form">
            <h3>Sign In</h3>
            <div className="social-button1-page__form-row">
              <SocialButton1 buttons={BUTTONS.ONE} />
            </div>
            <div className="social-button1-page__separator">
              <span>or</span>
            </div>
            <div className="social-button1-page__form-row">
              <input type="email" placeholder="Email" className="social-button1-page__input" />
            </div>
            <div className="social-button1-page__form-row">
              <input type="password" placeholder="Password" className="social-button1-page__input" />
            </div>
            <div className="social-button1-page__form-row">
              <button className="social-button1-page__submit-button">Sign In</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialButton1Page;