// NavigationHeader.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { 
  NavigationHeader, 
  NavigationHeaderProps, 
  NAVIGATION_HEADER_BREAKPOINT, 
  NAVIGATION_HEADER_AUTHENTICATION,
  NAVIGATION_HEADER_THEME
} from './NavigationHeader';

export default {
  title: 'Components/NavigationHeader',
  component: NavigationHeader,
  argTypes: {
    breakpoint: {
      control: { type: 'select' },
      options: Object.values(NAVIGATION_HEADER_BREAKPOINT),
      description: 'The breakpoint for responsive layout'
    },
    authentication: {
      control: { type: 'select' },
      options: Object.values(NAVIGATION_HEADER_AUTHENTICATION),
      description: 'The authentication state'
    },
    theme: {
      control: { type: 'select' },
      options: Object.values(NAVIGATION_HEADER_THEME),
      description: 'The visual theme'
    },
    quicklinks: {
      control: { type: 'object' },
      description: 'Array of quicklinks to display'
    },
    eventDateText: {
      control: { type: 'text' },
      description: 'Event date text'
    },
    logo: {
      control: { type: 'boolean' },
      description: 'Use custom logo'
    },
    onMenuClick: { action: 'menu clicked' },
    onSearchClick: { action: 'search clicked' },
    onUserClick: { action: 'user clicked' }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation header component with support for different breakpoints, authentication states, and visual themes.'
      }
    }
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.args;
      return (
        <div
          style={{
            background: theme === NAVIGATION_HEADER_THEME.INVERSE ? '#0B2917' : 'white',
            padding: '0',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Story />
        </div>
      );
    }
  ]
} as ComponentMeta<typeof NavigationHeader>;

// Custom logo for stories
const CustomLogo = () => (
  <div style={{ 
    width: '44px', 
    height: '44px', 
    borderRadius: '50%', 
    backgroundColor: '#540082', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'white',
    fontFamily: 'Gotham, sans-serif',
    fontWeight: 700,
    fontSize: '12px'
  }}>
    LOGO
  </div>
);

const defaultQuicklinks = [
  { text: 'Tickets' },
  { text: 'Players' },
  { text: 'Visit', hasExternalIcon: true }
];

const Template: ComponentStory<typeof NavigationHeader> = (args) => 
  <NavigationHeader {...args} />;

// Default
export const Default: ComponentStory<typeof NavigationHeader> = Template.bind({});
Default.args = {
  breakpoint: NAVIGATION_HEADER_BREAKPOINT.DESKTOP,
  authentication: NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT,
  theme: NAVIGATION_HEADER_THEME.DEFAULT,
  eventDateText: '30 June - 13 July 2025',
  quicklinks: defaultQuicklinks
};

// Inverse
export const Inverse: ComponentStory<typeof NavigationHeader> = Template.bind({});
Inverse.args = {
  breakpoint: NAVIGATION_HEADER_BREAKPOINT.DESKTOP,
  authentication: NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT,
  theme: NAVIGATION_HEADER_THEME.INVERSE,
  eventDateText: '30 June - 13 July 2025',
  quicklinks: defaultQuicklinks
};

// Tablet
export const Tablet: ComponentStory<typeof NavigationHeader> = Template.bind({});
Tablet.args = {
  breakpoint: NAVIGATION_HEADER_BREAKPOINT.TABLET,
  authentication: NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT,
  theme: NAVIGATION_HEADER_THEME.DEFAULT,
  eventDateText: '30 June - 13 July 2025',
  quicklinks: defaultQuicklinks
};

// Mobile
export const Mobile: ComponentStory<typeof NavigationHeader> = Template.bind({});
Mobile.args = {
  breakpoint: NAVIGATION_HEADER_BREAKPOINT.MOBILE,
  authentication: NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT,
  theme: NAVIGATION_HEADER_THEME.DEFAULT,
  eventDateText: '30 June - 13 July 2025',
  quicklinks: defaultQuicklinks
};

// Logged In
export const LoggedIn: ComponentStory<typeof NavigationHeader> = Template.bind({});
LoggedIn.args = {
  breakpoint: NAVIGATION_HEADER_BREAKPOINT.DESKTOP,
  authentication: NAVIGATION_HEADER_AUTHENTICATION.LOGGED_IN,
  theme: NAVIGATION_HEADER_THEME.DEFAULT,
  eventDateText: '30 June - 13 July 2025',
  quicklinks: defaultQuicklinks
};

// Custom Logo
export const WithCustomLogo: ComponentStory<typeof NavigationHeader> = Template.bind({});
WithCustomLogo.args = {
  breakpoint: NAVIGATION_HEADER_BREAKPOINT.DESKTOP,
  authentication: NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT,
  theme: NAVIGATION_HEADER_THEME.DEFAULT,
  eventDateText: '30 June - 13 July 2025',
  quicklinks: defaultQuicklinks,
  logo: <CustomLogo />
};

// All Variants Grid
export const AllVariants: ComponentStory<typeof NavigationHeader> = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px', 
    padding: '20px',
    backgroundColor: 'white' 
  }}>
    <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Desktop - Default Theme</div>
    <NavigationHeader 
      breakpoint={NAVIGATION_HEADER_BREAKPOINT.DESKTOP} 
      authentication={NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT}
      theme={NAVIGATION_HEADER_THEME.DEFAULT}
      quicklinks={defaultQuicklinks}
      eventDateText="30 June - 13 July 2025"
    />
    
    <div style={{ 
      marginTop: '20px', 
      marginBottom: '8px', 
      fontWeight: 'bold' 
    }}>
      Desktop - Inverse Theme
    </div>
    <div style={{ 
      backgroundColor: '#0B2917', 
      display: 'flex', 
      justifyContent: 'center' 
    }}>
      <NavigationHeader 
        breakpoint={NAVIGATION_HEADER_BREAKPOINT.DESKTOP} 
        authentication={NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT}
        theme={NAVIGATION_HEADER_THEME.INVERSE}
        quicklinks={defaultQuicklinks}
        eventDateText="30 June - 13 July 2025"
      />
    </div>
    
    <div style={{ 
      marginTop: '20px', 
      marginBottom: '8px', 
      fontWeight: 'bold' 
    }}>
      Tablet - Default Theme
    </div>
    <NavigationHeader 
      breakpoint={NAVIGATION_HEADER_BREAKPOINT.TABLET} 
      authentication={NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT}
      theme={NAVIGATION_HEADER_THEME.DEFAULT}
      quicklinks={defaultQuicklinks}
      eventDateText="30 June - 13 July 2025"
    />
    
    <div style={{ 
      marginTop: '20px', 
      marginBottom: '8px', 
      fontWeight: 'bold' 
    }}>
      Mobile - Default Theme
    </div>
    <NavigationHeader 
      breakpoint={NAVIGATION_HEADER_BREAKPOINT.MOBILE} 
      authentication={NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT}
      theme={NAVIGATION_HEADER_THEME.DEFAULT}
      quicklinks={defaultQuicklinks}
      eventDateText="30 June - 13 July 2025"
    />
    
    <div style={{ 
      marginTop: '20px', 
      marginBottom: '8px', 
      fontWeight: 'bold' 
    }}>
      Desktop - Logged In
    </div>
    <NavigationHeader 
      breakpoint={NAVIGATION_HEADER_BREAKPOINT.DESKTOP} 
      authentication={NAVIGATION_HEADER_AUTHENTICATION.LOGGED_IN}
      theme={NAVIGATION_HEADER_THEME.DEFAULT}
      quicklinks={defaultQuicklinks}
      eventDateText="30 June - 13 July 2025"
    />
    
    <div style={{ 
      marginTop: '20px', 
      marginBottom: '8px', 
      fontWeight: 'bold' 
    }}>
      Desktop - Custom Logo
    </div>
    <NavigationHeader 
      breakpoint={NAVIGATION_HEADER_BREAKPOINT.DESKTOP} 
      authentication={NAVIGATION_HEADER_AUTHENTICATION.LOGGED_OUT}
      theme={NAVIGATION_HEADER_THEME.DEFAULT}
      quicklinks={defaultQuicklinks}
      eventDateText="30 June - 13 July 2025"
      logo={<CustomLogo />}
    />
  </div>
);