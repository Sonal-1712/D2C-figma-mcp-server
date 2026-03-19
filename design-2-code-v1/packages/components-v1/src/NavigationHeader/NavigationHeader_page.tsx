// NavigationHeader_page.tsx
import React, { useState } from 'react';
import { 
  NavigationHeader, 
  NAVIGATION_HEADER_BREAKPOINT, 
  NAVIGATION_HEADER_AUTHENTICATION,
  NAVIGATION_HEADER_THEME 
} from './NavigationHeader';

import './NavigationHeaderPage.scss';

const NavigationHeaderPage: React.FC = () => {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState<typeof NAVIGATION_HEADER_BREAKPOINT[keyof typeof NAVIGATION_HEADER_BREAKPOINT]>(
    NAVIGATION_HEADER_BREAKPOINT.DESKTOP
  );
  const [selectedAuthentication, setSelectedAuthentication] = useState<typeof NAVIGATION_HEADER_AUTHENTICATION[keyof typeof NAVIGATION_HEADER_AUTHENTICATION]>(
    NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT
  );
  const [selectedTheme, setSelectedTheme] = useState<typeof NAVIGATION_HEADER_THEME[keyof typeof NAVIGATION_HEADER_THEME]>(
    NAVIGATION_HEADER_THEME.DEFAULT
  );
  
  const handleBreakpointChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreakpoint(event.target.value as typeof NAVIGATION_HEADER_BREAKPOINT[keyof typeof NAVIGATION_HEADER_BREAKPOINT]);
  };
  
  const handleAuthenticationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthentication(event.target.value as typeof NAVIGATION_HEADER_AUTHENTICATION[keyof typeof NAVIGATION_HEADER_AUTHENTICATION]);
  };
  
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(event.target.value as typeof NAVIGATION_HEADER_THEME[keyof typeof NAVIGATION_HEADER_THEME]);
  };
  
  return (
    <div className="navigation-header-page">
      <div className="navigation-header-page__controls">
        <div className="navigation-header-page__control">
          <label htmlFor="breakpoint">Breakpoint:</label>
          <select id="breakpoint" value={selectedBreakpoint} onChange={handleBreakpointChange}>
            {Object.values(NAVIGATION_HEADER_BREAKPOINT).map((breakpoint) => (
              <option key={breakpoint} value={breakpoint}>
                {breakpoint}
              </option>
            ))}
          </select>
        </div>
        
        <div className="navigation-header-page__control">
          <label htmlFor="authentication">Authentication:</label>
          <select id="authentication" value={selectedAuthentication} onChange={handleAuthenticationChange}>
            {Object.values(NAVIGATION_HEADER_AUTHENTICATION).map((auth) => (
              <option key={auth} value={auth}>
                {auth}
              </option>
            ))}
          </select>
        </div>
        
        <div className="navigation-header-page__control">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" value={selectedTheme} onChange={handleThemeChange}>
            {Object.values(NAVIGATION_HEADER_THEME).map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div 
        className={`navigation-header-page__preview ${selectedTheme === NAVIGATION_HEADER_THEME.INVERSE ? 'navigation-header-page__preview--dark' : ''}`}
      >
        <div className="navigation-header-page__preview-content">
          <NavigationHeader
            breakpoint={selectedBreakpoint}
            authentication={selectedAuthentication}
            theme={selectedTheme}
            eventDateText="30 June - 13 July 2025"
            quicklinks={[
              { text: 'Tickets' },
              { text: 'Players' },
              { text: 'Visit', hasExternalIcon: true }
            ]}
            onMenuClick={() => console.log('Menu clicked')}
            onSearchClick={() => console.log('Search clicked')}
            onUserClick={() => console.log('User clicked')}
          />
        </div>
      </div>
      
      <div className="navigation-header-page__section">
        <h2>NavigationHeader Component</h2>
        <p>
          The NavigationHeader component is a responsive header that adapts to different screen sizes and provides 
          different layouts for desktop, tablet, and mobile viewports.
        </p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Responsive design with three breakpoints (Desktop, Tablet, Mobile)</li>
          <li>Support for different authentication states (Logged in, Logged out)</li>
          <li>Two theme options (Default, Inverse)</li>
          <li>Customizable quicklinks with optional external link icon</li>
          <li>Configurable event date display</li>
          <li>Custom logo support</li>
        </ul>
        
        <h3>Usage Guidelines</h3>
        <ul>
          <li>Use the <strong>Desktop</strong> breakpoint for viewports wider than 1024px</li>
          <li>Use the <strong>Tablet</strong> breakpoint for viewports between 675px and 1024px</li>
          <li>Use the <strong>Mobile</strong> breakpoint for viewports narrower than 675px</li>
          <li>Use the <strong>Inverse</strong> theme when placing the header over dark backgrounds or images</li>
          <li>Customize quicklinks to provide navigation to key pages in your application</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationHeaderPage;