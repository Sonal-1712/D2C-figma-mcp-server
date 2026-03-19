// SectionHero.tsx
import React from 'react';
import './SectionHero.scss';

// SVG assets
const helpIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 1.25C5.16797 1.25 1.25 5.16797 1.25 10C1.25 14.832 5.16797 18.75 10 18.75C14.832 18.75 18.75 14.832 18.75 10C18.75 5.16797 14.832 1.25 10 1.25ZM10 17.5C5.85742 17.5 2.5 14.1426 2.5 10C2.5 5.85742 5.85742 2.5 10 2.5C14.1426 2.5 17.5 5.85742 17.5 10C17.5 14.1426 14.1426 17.5 10 17.5Z" fill="#697077"/>
<path d="M10 6.25C8.79688 6.25 7.8125 7.23438 7.8125 8.4375C7.8125 8.78125 8.09375 9.0625 8.4375 9.0625C8.78125 9.0625 9.0625 8.78125 9.0625 8.4375C9.0625 7.92188 9.48438 7.5 10 7.5C10.5156 7.5 10.9375 7.92188 10.9375 8.4375C10.9375 8.95312 10.5156 9.375 10 9.375C9.65625 9.375 9.375 9.65625 9.375 10V11.5625C9.375 11.9062 9.65625 12.1875 10 12.1875C10.3438 12.1875 10.625 11.9062 10.625 11.5625V10.5859C11.6016 10.2578 12.1875 9.40625 12.1875 8.4375C12.1875 7.23438 11.2031 6.25 10 6.25Z" fill="#697077"/>
<path d="M10 15C10.5178 15 10.9375 14.5803 10.9375 14.0625C10.9375 13.5447 10.5178 13.125 10 13.125C9.48223 13.125 9.0625 13.5447 9.0625 14.0625C9.0625 14.5803 9.48223 15 10 15Z" fill="#697077"/>
</svg>`;

const arrowRightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
<path d="M8.50391 1.09375L13.9102 6.5L8.50391 11.9062M13.9102 6.5H0" stroke="#006633" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const BREAKPOINTS = {
  DESKTOP: 'Desktop',
  MOBILE: 'Mobile'
} as const;

export const SIZES = {
  MAX_BRAND: 'Max (brand)',
  MEDIUM: 'Medium',
  SMALL: 'Small'
} as const;

export const THEMES = {
  DEFAULT: 'Default',
  INVERSE_PURPLE: 'Inverse purple',
  INVERSE_GREEN: 'Inverse green',
  GOLD: 'Gold'
} as const;

export interface SectionHeroProps {
  /** Main title for the section */
  title?: string;
  
  /** Subtitle or short description for additional context */
  subtitle?: string;
  
  /** Tag or small text that appears above the title (shown only in Max brand size) */
  tag?: string | undefined;
  
  /** Link text for the optional CTA */
  linkText?: string;
  
  /** URL for the optional CTA */
  linkUrl?: string;
  
  /** Viewport breakpoint */
  breakpoint?: typeof BREAKPOINTS[keyof typeof BREAKPOINTS];
  
  /** Whether to show the link */
  showLink?: boolean;
  
  /** Whether to show the subtitle */
  showSubtitle?: boolean;
  
  /** Whether to show the tooltip */
  showTooltip?: boolean;
  
  /** Size variant for the section hero */
  size?: typeof SIZES[keyof typeof SIZES];
  
  /** Theme variant for the section hero */
  theme?: typeof THEMES[keyof typeof THEMES];
  
  /** CSS class name for custom styling */
  className?: string;
  
  /** Handler for the CTA link click */
  onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * SectionHero component
 * 
 * A versatile component for section headers with various sizes, themes, and optional elements
 */
const SectionHero: React.FC<SectionHeroProps> = ({
  title = 'SECTION',
  subtitle = 'Use an optional subtitle to add quick context or scope to the section. Keep it brief make sure it adds new, relevant detail rather than repeating the title. If the title and layout already make the purpose clear, skip the subtitle.',
  tag = 'TAG/SUBTITLE',
  linkText = 'Link',
  linkUrl = '#',
  breakpoint = BREAKPOINTS.DESKTOP,
  showLink = false,
  showSubtitle = true,
  showTooltip = true,
  size = SIZES.MAX_BRAND,
  theme = THEMES.DEFAULT,
  className = '',
  onLinkClick
}) => {
  // Generate modifier classes for component variants
  const getModifierClasses = () => {
    const modifiers = [
      `wdl-section-hero--${breakpoint.toLowerCase()}`,
      `wdl-section-hero--${size.toLowerCase().replace(/\s|\(|\)/g, '-')}`,
      `wdl-section-hero--${theme.toLowerCase().replace(/\s/g, '-')}`
    ];
    
    return modifiers.join(' ');
  };

  // Determine if it's a small or medium size for different rendering approach
  const isSmallOrMedium = size === SIZES.SMALL || size === SIZES.MEDIUM;
  
  // Determine if it's a brand (Max) size for different rendering approach
  const isBrandSize = size === SIZES.MAX_BRAND;
  
  // Determine if it's an inverse theme
  const isInverse = theme === THEMES.INVERSE_GREEN || theme === THEMES.INVERSE_PURPLE;

  return (
    <section 
      className={`wdl-section-hero ${getModifierClasses()} ${className}`}
      aria-labelledby="section-title"
    >
      {/* Background for Max (brand) size */}
      {isBrandSize && <div className="wdl-section-hero__background"></div>}
      
      <div className="wdl-section-hero__container">
        {/* Title area */}
        <div className="wdl-section-hero__title-area">
          {/* Tag - for Max (brand) size only */}
          {isBrandSize && tag && (
            <div className="wdl-section-hero__tag">
              {tag}
            </div>
          )}
          
          {/* Title */}
          <h2 id="section-title" className="wdl-section-hero__title">
            {title}
          </h2>
          
          {/* Tooltip - for small or medium sizes */}
          {isSmallOrMedium && showTooltip && (
            <div className="wdl-section-hero__tooltip" title="More information">
              <span className="wdl-section-hero__tooltip-icon" dangerouslySetInnerHTML={{ __html: helpIcon }}></span>
            </div>
          )}
        </div>
        
        {/* Subtitle */}
        {showSubtitle && subtitle && (
          <div className="wdl-section-hero__subtitle">
            {subtitle}
          </div>
        )}
        
        {/* Link - for Desktop or Small sizes */}
        {showLink && (
          <a 
            href={linkUrl} 
            className="wdl-section-hero__link"
            onClick={onLinkClick}
            aria-label={`${linkText} about ${title}`}
          >
            <span>{linkText}</span>
            <span className="wdl-section-hero__link-icon" dangerouslySetInnerHTML={{ __html: arrowRightIcon }}></span>
          </a>
        )}
      </div>
    </section>
  );
};

export default SectionHero;