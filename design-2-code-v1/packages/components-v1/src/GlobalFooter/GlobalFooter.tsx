// GlobalFooter.tsx
import React, { forwardRef } from 'react';
import './GlobalFooter.scss';

export const FOOTER_BREAKPOINT = {
  MOBILE: 'Mobile',
  TABLET: 'Tablet',
  DESKTOP: 'Desktop',
  MAX: 'Max'
} as const;

export interface GlobalFooterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * Breakpoint variant to display
   * @default 'Mobile'
   */
  breakpoint?: typeof FOOTER_BREAKPOINT[keyof typeof FOOTER_BREAKPOINT];
}

/**
 * GlobalFooter component with responsive variants for different screen sizes
 */
const GlobalFooter = forwardRef<HTMLDivElement, GlobalFooterProps>((props, ref) => {
  const {
    breakpoint = FOOTER_BREAKPOINT.MOBILE,
    className = '',
    ...rest
  } = props;

  const isMobile = breakpoint === FOOTER_BREAKPOINT.MOBILE;
  const isTablet = breakpoint === FOOTER_BREAKPOINT.TABLET;
  const isDesktop = breakpoint === FOOTER_BREAKPOINT.DESKTOP;
  const isMax = breakpoint === FOOTER_BREAKPOINT.MAX;

  // Social media icons
  const renderSocialIcons = () => (
    <div className="global-footer__social-links">
      <a href="#" className="global-footer__social-button" aria-label="Facebook">
        <span className="global-footer__social-icon global-footer__social-icon--facebook"></span>
      </a>
      <a href="#" className="global-footer__social-button" aria-label="Twitter">
        <span className="global-footer__social-icon global-footer__social-icon--twitter"></span>
      </a>
      <a href="#" className="global-footer__social-button" aria-label="Instagram">
        <span className="global-footer__social-icon global-footer__social-icon--instagram"></span>
      </a>
      <a href="#" className="global-footer__social-button" aria-label="YouTube">
        <span className="global-footer__social-icon global-footer__social-icon--youtube"></span>
      </a>
      <a href="#" className="global-footer__social-button" aria-label="WeChat">
        <span className="global-footer__social-icon global-footer__social-icon--wechat"></span>
      </a>
      <a href="#" className="global-footer__social-button" aria-label="Weibo">
        <span className="global-footer__social-icon global-footer__social-icon--weibo"></span>
      </a>
    </div>
  );

  // Navigation links
  const renderLinks = () => (
    <div className={`global-footer__links${isDesktop || isMax ? ' global-footer__links--horizontal' : ''}`}>
      <a href="#" className="global-footer__link">Sitemap</a>
      <a href="#" className="global-footer__link">Contact</a>
      <a href="#" className="global-footer__link">Jobs</a>
      <a href="#" className="global-footer__link">Media</a>
      <a href="#" className="global-footer__link">Privacy</a>
      <a href="#" className="global-footer__link">Terms of use</a>
    </div>
  );

  // Copyright text
  const renderCopyright = () => (
    <div className="global-footer__copyright">
      <p>© Copyright IBM Corp. AELTC 2024. All Rights reserved.</p>
    </div>
  );

  // Top section (logo and social icons)
  const renderTopSection = () => (
    <div className={`global-footer__top${isTablet || isDesktop || isMax ? ' global-footer__top--horizontal' : ''}`}>
      <div className="global-footer__logo">
        <img 
          src="https://via.placeholder.com/114x40?text=Wimbledon+IBM" 
          alt="Wimbledon IBM" 
          className="global-footer__logo-img" 
        />
      </div>
      {renderSocialIcons()}
    </div>
  );

  // Footer section (links and copyright)
  const renderFooterSection = () => (
    <div className={`global-footer__bottom${isDesktop || isMax ? ' global-footer__bottom--horizontal' : ''}`}>
      {isMax ? (
        <>
          {renderCopyright()}
          {renderLinks()}
        </>
      ) : (
        <>
          {renderLinks()}
          {renderCopyright()}
        </>
      )}
    </div>
  );

  // Root class based on breakpoint
  const rootClass = [
    'global-footer',
    `global-footer--${breakpoint.toLowerCase()}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={ref}
      className={rootClass}
      data-breakpoint={breakpoint}
      {...rest}
    >
      {renderTopSection()}
      {renderFooterSection()}
    </div>
  );
});

GlobalFooter.displayName = 'GlobalFooter';
export default GlobalFooter;