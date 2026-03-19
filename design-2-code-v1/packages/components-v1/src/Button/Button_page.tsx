// Button_page.tsx
import React from 'react';
import Button, { BUTTON_STYLE, BUTTON_STATE, BUTTON_THEME } from './Button';
import './ButtonPage.scss';

const ButtonPage: React.FC = () => {
  return (
    <div className="button-page">
      <h1 className="button-page__title">Button Component</h1>
      
      <section className="button-page__section">
        <h2 className="button-page__heading">Style Variants</h2>
        <div className="button-page__group">
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY}>Primary Button</Button>
            <span className="button-page__label">Primary</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.SECONDARY}>Secondary Button</Button>
            <span className="button-page__label">Secondary</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.TERTIARY}>Tertiary Button</Button>
            <span className="button-page__label">Tertiary</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.DANGER_PRIMARY}>Danger Primary</Button>
            <span className="button-page__label">Danger Primary</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.DANGER_SECONDARY}>Danger Secondary</Button>
            <span className="button-page__label">Danger Secondary</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.DANGER_TERTIARY}>Danger Tertiary</Button>
            <span className="button-page__label">Danger Tertiary</span>
          </div>
        </div>
      </section>

      <section className="button-page__section">
        <h2 className="button-page__heading">States (Primary Style)</h2>
        <div className="button-page__group">
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.DEFAULT}>Default</Button>
            <span className="button-page__label">Default</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.HOVER}>Hover</Button>
            <span className="button-page__label">Hover</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.ACTIVE}>Active</Button>
            <span className="button-page__label">Active</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.FOCUS}>Focus</Button>
            <span className="button-page__label">Focus</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.LOADING}>Loading</Button>
            <span className="button-page__label">Loading</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.DISABLED}>Disabled</Button>
            <span className="button-page__label">Disabled</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.SKELETON}>Skeleton</Button>
            <span className="button-page__label">Skeleton</span>
          </div>
        </div>
      </section>

      <section className="button-page__section">
        <h2 className="button-page__heading">Theme Variants (Secondary Style)</h2>
        <div className="button-page__group">
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.SECONDARY} theme={BUTTON_THEME.DEFAULT}>Default Theme</Button>
            <span className="button-page__label">Default Theme</span>
          </div>
          <div className="button-page__item button-page__item--dark">
            <Button styleVariant={BUTTON_STYLE.SECONDARY} theme={BUTTON_THEME.ON_COLOUR}>On-Colour Theme</Button>
            <span className="button-page__label">On-Colour Theme</span>
          </div>
          <div className="button-page__item button-page__item--inverse">
            <Button styleVariant={BUTTON_STYLE.SECONDARY} theme={BUTTON_THEME.INVERSE}>Inverse Theme</Button>
            <span className="button-page__label">Inverse Theme</span>
          </div>
        </div>
      </section>

      <section className="button-page__section">
        <h2 className="button-page__heading">Theme Variants (Tertiary Style)</h2>
        <div className="button-page__group">
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.TERTIARY} theme={BUTTON_THEME.DEFAULT}>Default Theme</Button>
            <span className="button-page__label">Default Theme</span>
          </div>
          <div className="button-page__item button-page__item--inverse">
            <Button styleVariant={BUTTON_STYLE.TERTIARY} theme={BUTTON_THEME.INVERSE}>Inverse Theme</Button>
            <span className="button-page__label">Inverse Theme</span>
          </div>
        </div>
      </section>

      <section className="button-page__section">
        <h2 className="button-page__heading">With Icons</h2>
        <div className="button-page__group">
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY}>
              <svg className="button-page__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
                <path d="M9 4H7v5h5V7H9z"/>
              </svg>
              With Icon
            </Button>
            <span className="button-page__label">Icon Button</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.SECONDARY}>
              <svg className="button-page__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.5 11.5l3.8-3.8c.2-.2.2-.5 0-.7l-3.8-3.8c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L10.9 7H4.5C4.2 7 4 7.2 4 7.5S4.2 8 4.5 8h6.4l-3.1 3.1c-.2.2-.2.5 0 .7.1.1.2.1.4.1s.2 0 .3-.1z"/>
              </svg>
              With Icon
            </Button>
            <span className="button-page__label">Icon Button</span>
          </div>
        </div>
      </section>
      
      <section className="button-page__section">
        <h2 className="button-page__heading">Size Variations</h2>
        <div className="button-page__group">
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} className="button-page__button-small">Small</Button>
            <span className="button-page__label">Small</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY}>Default</Button>
            <span className="button-page__label">Default</span>
          </div>
          <div className="button-page__item">
            <Button styleVariant={BUTTON_STYLE.PRIMARY} className="button-page__button-large">Large</Button>
            <span className="button-page__label">Large</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonPage;