// NavigationHeader.tsx
import React, { forwardRef } from 'react';
import { UtilityButton } from '../UtilityButton';
import './NavigationHeader.scss';

/**
 * NavigationHeader breakpoints
 */
export const NAVIGATION_HEADER_BREAKPOINT = {
  DESKTOP: 'Desktop',
  TABLET: 'Tablet',
  MOBILE: 'Mobile'
} as const;

/**
 * NavigationHeader authentication states
 */
export const NAVIGATION_HEADER_AUTHENTICATION = {
  LOGGED_OUT: 'Logged out',
  LOGGED_IN: 'Logged in'
} as const;

/**
 * NavigationHeader styles
 */
export const NAVIGATION_HEADER_THEME = {
  DEFAULT: 'Default',
  INVERSE: 'Inverse'
} as const;

export interface NavigationHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class name for the component
   */
  className?: string;
  
  /**
   * Breakpoint for responsive layout
   * Desktop: Full layout with all navigation elements
   * Tablet: Compact layout with fewer navigation elements
   * Mobile: Minimal layout for small screens
   */
  breakpoint?: typeof NAVIGATION_HEADER_BREAKPOINT[keyof typeof NAVIGATION_HEADER_BREAKPOINT];
  
  /**
   * Authentication state
   */
  authentication?: typeof NAVIGATION_HEADER_AUTHENTICATION[keyof typeof NAVIGATION_HEADER_AUTHENTICATION];
  
  /**
   * Visual theme
   */
  theme?: typeof NAVIGATION_HEADER_THEME[keyof typeof NAVIGATION_HEADER_THEME];
  
  /**
   * Custom logo element
   */
  logo?: React.ReactNode;
  
  /**
   * Array of quicklinks to display
   */
  quicklinks?: {
    text: string;
    href?: string;
    hasExternalIcon?: boolean;
    onClick?: () => void;
  }[];
  
  /**
   * Event date text
   */
  eventDateText?: string;
  
  /**
   * On menu click handler
   */
  onMenuClick?: () => void;
  
  /**
   * On search click handler
   */
  onSearchClick?: () => void;
  
  /**
   * On user click handler
   */
  onUserClick?: () => void;
}

export const NavigationHeader = forwardRef<HTMLDivElement, NavigationHeaderProps>(({
  className = '',
  breakpoint = NAVIGATION_HEADER_BREAKPOINT.DESKTOP,
  authentication = NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT,
  theme = NAVIGATION_HEADER_THEME.DEFAULT,
  logo = null,
  quicklinks = [
    { text: 'Quicklink 1' },
    { text: 'Quicklink 2' },
    { text: 'Quicklink 3', hasExternalIcon: true }
  ],
  eventDateText = '30 June - 13 July 2025',
  onMenuClick,
  onSearchClick,
  onUserClick,
  ...rest
}, ref) => {
  // Determine which icons to show based on breakpoint, authentication, and style
  const showQuicklinks = breakpoint === NAVIGATION_HEADER_BREAKPOINT.DESKTOP;
  
  // Generate the appropriate CSS classes based on props
  const rootClasses = [
    'navigation-header',
    `navigation-header--breakpoint-${breakpoint.toLowerCase().replace(' ', '-')}`,
    `navigation-header--authentication-${authentication.toLowerCase().replace(' ', '-')}`,
    `navigation-header--theme-${theme.toLowerCase()}`
  ].join(' ');

  // SVG icons as React components
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
      <path d="M4 6h24v2H4zm0 10h24v2H4zm0 10h24v2H4z"/>
    </svg>
  );
  
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8v2H6v20h20v-8h2v8a2 2 0 0 1-2 2z"/>
      <path d="M30 10h-6V4h2v3.59l8.29-8.3L36 2l-8.29 8.29L31 14v-2h4z"/>
    </svg>
  );
  
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
      <path d="M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9 9 9 0 0 1-9-9z"/>
    </svg>
  );
  
  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
      <path d="M16 8a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>
      <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 0 1-6-1.6v-1a6 6 0 0 1 12 0v1a12 12 0 0 1-6 1.6zm9-4.87v-.52a8 8 0 0 0-18 0v.52a12 12 0 1 1 18 0z"/>
    </svg>
  );

  // Default Wimbledon logo 
  const WimbledonLogo = () => (
    <div className="navigation-header__logo-image">
      {/* This is a placeholder for the actual SVG. The styling will be handled in the SCSS file */}
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
        <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#006633"/>
        <path d="M34.4561 22.0001C34.4561 28.9155 28.9155 34.4561 22.0001 34.4561C15.0846 34.4561 9.54407 28.9155 9.54407 22.0001C9.54407 15.0846 15.0846 9.54407 22.0001 9.54407C28.9155 9.54407 34.4561 15.0846 34.4561 22.0001Z" fill="white"/>
        <path d="M32.4871 22.0001C32.4871 27.8303 27.8303 32.4871 22.0001 32.4871C16.1698 32.4871 11.513 27.8303 11.513 22.0001C11.513 16.1698 16.1698 11.513 22.0001 11.513C27.8303 11.513 32.4871 16.1698 32.4871 22.0001Z" fill="#006633"/>
        <path d="M30.8501 22.0001C30.8501 26.9249 26.9249 30.8501 22.0001 30.8501C17.0752 30.8501 13.15 26.9249 13.15 22.0001C13.15 17.0752 17.0752 13.15 22.0001 13.15C26.9249 13.15 30.8501 17.0752 30.8501 22.0001Z" fill="white"/>
        <path d="M27.0111 22.0001C27.0111 24.5019 24.8769 26.6111 22.2999 26.6111C22.1979 26.6111 22.0969 26.6071 21.9969 26.6001C21.9969 26.6001 22.0001 15.3881 22.0001 15.3881C22.0001 15.3881 22.0001 17.2791 22.0001 17.3381C22.0001 17.3981 21.5651 16.9701 21.5651 16.9701L22.0001 17.3791V18.2611L20.9031 17.3791C20.9031 17.3791 21.9971 18.4091 22.0001 18.4091C22.0031 18.4091 22.0001 19.2601 22.0001 19.2601L20.9031 18.2611L22.0001 19.2911V20.1731L20.9031 19.2911C20.9031 19.2911 21.9971 20.3211 22.0001 20.3211C22.0031 20.3211 22.0001 21.1781 22.0001 21.1781L20.9031 20.1731L22.0001 21.2031V22.0851L20.9031 21.2031C20.9031 21.2031 21.9971 22.2331 22.0001 22.2331C22.0031 22.2331 22.0001 23.0901 22.0001 23.0901L20.9031 22.0851L22.0001 23.1151V24.0031L20.9031 23.1151C20.9031 23.1151 21.9971 24.1451 22.0001 24.1451C22.0031 24.1451 22.0001 25.0021 22.0001 25.0021L20.9031 23.9971L22.0001 25.0271V26.5971C19.4991 26.5061 17.4891 24.5221 17.4891 22.0001C17.4891 19.4773 19.5419 17.4001 22.0301 17.4001H22.0001V15.3901C19.0012 15.3901 16.5671 18.3513 16.5671 22.0001C16.5671 25.6479 19.0012 28.6091 22.0001 28.6091C24.9989 28.6091 27.4331 25.6489 27.4331 22.0001C27.4331 18.3513 24.9989 15.3901 22.0001 15.3901V17.3901C24.7251 17.3901 27.0111 19.4429 27.0111 22.0001Z" fill="#006633"/>
      </svg>
    </div>
  );

  return (
    <div 
      ref={ref} 
      className={`${rootClasses} ${className}`}
      {...rest}
    >
      <div className="navigation-header__content">
        <div className="navigation-header__navigation-content">
          <div className="navigation-header__burger-menu">
            <UtilityButton
              icon={<MenuIcon />}
              ariaLabel="Menu"
              onClick={onMenuClick}
              theme={theme === NAVIGATION_HEADER_THEME.INVERSE ? 'inverse' : 'default'}
            />
          </div>
          
          {showQuicklinks && (
            <>
              <div className="navigation-header__divider">
                <div className="navigation-header__divider-line" />
              </div>
              
              <div className="navigation-header__tab-group">
                {quicklinks.map((link, index) => (
                  <div key={index} className="navigation-header__tab">
                    <div className="navigation-header__tab-content">
                      <div className="navigation-header__tab-text">{link.text}</div>
                      {link.hasExternalIcon && (
                        <div className="navigation-header__tab-icon">
                          <ExternalLinkIcon />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="navigation-header__logo">
          {logo || <WimbledonLogo />}
          <p className="navigation-header__date">{eventDateText}</p>
        </div>
        
        <div className="navigation-header__navigation-actions">
          <div className="navigation-header__ibm-logo">
            {/* IBM logo */}
            <div className="navigation-header__ibm-logo-image">IBM</div>
          </div>
          
          {breakpoint === NAVIGATION_HEADER_BREAKPOINT.DESKTOP && (
            <>
              <div className="navigation-header__divider">
                <div className="navigation-header__divider-line" />
              </div>
              
              <UtilityButton
                icon={<SearchIcon />}
                ariaLabel="Search"
                onClick={onSearchClick}
                theme={theme === NAVIGATION_HEADER_THEME.INVERSE ? 'inverse' : 'default'}
              />
            </>
          )}
          
          <UtilityButton
            icon={<UserIcon />}
            ariaLabel="User account"
            onClick={onUserClick}
            theme={theme === NAVIGATION_HEADER_THEME.INVERSE ? 'inverse' : 'default'}
          />
        </div>
      </div>
    </div>
  );
});

NavigationHeader.displayName = 'NavigationHeader';

export default NavigationHeader;