// GlobalFooter.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import GlobalFooter, { FOOTER_BREAKPOINT, GlobalFooterProps } from './GlobalFooter';

const meta: Meta<typeof GlobalFooter> = {
  title: 'Components/GlobalFooter',
  component: GlobalFooter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Global footer component with responsive variants for different screen sizes.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    breakpoint: {
      control: 'select',
      options: Object.values(FOOTER_BREAKPOINT),
      description: 'Breakpoint variant to display'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GlobalFooter>;

// Default GlobalFooter (Mobile)
export const Default: Story = {
  args: {
    breakpoint: FOOTER_BREAKPOINT.MOBILE
  }
};

// Tablet Breakpoint
export const Tablet: Story = {
  args: {
    breakpoint: FOOTER_BREAKPOINT.TABLET
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

// Desktop Breakpoint
export const Desktop: Story = {
  args: {
    breakpoint: FOOTER_BREAKPOINT.DESKTOP
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

// Max Breakpoint
export const Max: Story = {
  args: {
    breakpoint: FOOTER_BREAKPOINT.MAX
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

// Responsive GlobalFooter that changes based on viewport width
export const Responsive: Story = {
  render: (args) => {
    // In a real component, you would use a hook or media query to determine breakpoint
    return (
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '40px' }}>
          <h3>Mobile Viewport (320px width)</h3>
          <GlobalFooter {...args} breakpoint={FOOTER_BREAKPOINT.MOBILE} />
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h3>Tablet Viewport (675px width)</h3>
          <GlobalFooter {...args} breakpoint={FOOTER_BREAKPOINT.TABLET} />
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h3>Desktop Viewport (1440px width)</h3>
          <GlobalFooter {...args} breakpoint={FOOTER_BREAKPOINT.DESKTOP} />
        </div>
        
        <div>
          <h3>Max Viewport (1440px width with alternate layout)</h3>
          <GlobalFooter {...args} breakpoint={FOOTER_BREAKPOINT.MAX} />
        </div>
      </div>
    );
  }
};

// Story with dark background
export const OnDarkBackground: Story = {
  args: {
    breakpoint: FOOTER_BREAKPOINT.DESKTOP
  },
  parameters: {
    backgrounds: { default: 'dark' },
    viewport: { defaultViewport: 'desktop' }
  }
};