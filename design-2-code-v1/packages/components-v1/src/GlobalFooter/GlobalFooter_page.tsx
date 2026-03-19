// GlobalFooter_page.tsx
import React from 'react';
import GlobalFooter, { FOOTER_BREAKPOINT } from './GlobalFooter';
import './GlobalFooterPage.scss';

const GlobalFooterPage: React.FC = () => {
  return (
    <div className="global-footer-page">
      <h1 className="global-footer-page__title">Global Footer Component</h1>
      
      <section className="global-footer-page__section">
        <h2 className="global-footer-page__heading">Mobile Breakpoint (320px)</h2>
        <div className="global-footer-page__container global-footer-page__container--mobile">
          <GlobalFooter breakpoint={FOOTER_BREAKPOINT.MOBILE} />
        </div>
        <div className="global-footer-page__description">
          <p>
            Mobile layout features a stacked design with:
          </p>
          <ul>
            <li>Logo at the top</li>
            <li>Social media icons below the logo</li>
            <li>Navigation links in a vertical column</li>
            <li>Copyright text at the bottom</li>
          </ul>
        </div>
      </section>

      <section className="global-footer-page__section">
        <h2 className="global-footer-page__heading">Tablet Breakpoint (675px)</h2>
        <div className="global-footer-page__container global-footer-page__container--tablet">
          <GlobalFooter breakpoint={FOOTER_BREAKPOINT.TABLET} />
        </div>
        <div className="global-footer-page__description">
          <p>
            Tablet layout features a mixed approach:
          </p>
          <ul>
            <li>Logo and social media icons in a horizontal row</li>
            <li>Navigation links in a horizontal row</li>
            <li>Copyright text centered below</li>
          </ul>
        </div>
      </section>

      <section className="global-footer-page__section">
        <h2 className="global-footer-page__heading">Desktop Breakpoint (1440px)</h2>
        <div className="global-footer-page__container global-footer-page__container--desktop">
          <GlobalFooter breakpoint={FOOTER_BREAKPOINT.DESKTOP} />
        </div>
        <div className="global-footer-page__description">
          <p>
            Desktop layout features a fully horizontal design:
          </p>
          <ul>
            <li>Logo and social media icons in a horizontal row</li>
            <li>Copyright text on the left</li>
            <li>Navigation links on the right</li>
          </ul>
        </div>
      </section>

      <section className="global-footer-page__section">
        <h2 className="global-footer-page__heading">Max Breakpoint (1440px with alternative layout)</h2>
        <div className="global-footer-page__container global-footer-page__container--max">
          <GlobalFooter breakpoint={FOOTER_BREAKPOINT.MAX} />
        </div>
        <div className="global-footer-page__description">
          <p>
            Max layout features a reversed order in the bottom section:
          </p>
          <ul>
            <li>Logo and social media icons in a horizontal row</li>
            <li>Copyright text on the left</li>
            <li>Navigation links on the right</li>
          </ul>
        </div>
      </section>

      <section className="global-footer-page__section">
        <h2 className="global-footer-page__heading">On Dark Background</h2>
        <div className="global-footer-page__container global-footer-page__container--dark">
          <GlobalFooter breakpoint={FOOTER_BREAKPOINT.DESKTOP} />
        </div>
        <div className="global-footer-page__description">
          <p>
            Footer displayed on a dark background showcases color contrast and visibility.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GlobalFooterPage;