// Breadcrumb.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Breadcrumb, { BREADCRUMB_BREAKPOINT, BREADCRUMB_THEME, BREADCRUMB_TYPE, BreadcrumbProps } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Breadcrumb component with various breakpoint, theme, and type options.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    breakpoint: {
      control: 'select',
      options: Object.values(BREADCRUMB_BREAKPOINT),
      description: 'Breakpoint size'
    },
    theme: {
      control: 'select',
      options: Object.values(BREADCRUMB_THEME),
      description: 'Breadcrumb theme'
    },
    type: {
      control: 'select',
      options: Object.values(BREADCRUMB_TYPE),
      description: 'Breadcrumb type'
    },
    items: {
      control: 'object',
      description: 'Breadcrumb items (for Breadcrumbs type)'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Default items for breadcrumbs
const defaultItems = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Subcategory', href: '#' },
  { label: 'Current Page', current: true }
];

// Default Breadcrumb
export const Default: Story = {
  args: {
    breakpoint: BREADCRUMB_BREAKPOINT.DESKTOP,
    theme: BREADCRUMB_THEME.DEFAULT,
    type: BREADCRUMB_TYPE.BREADCRUMBS,
    items: defaultItems
  }
};

// Breadcrumb Types
export const BreadcrumbsType: Story = {
  args: {
    ...Default.args,
    type: BREADCRUMB_TYPE.BREADCRUMBS
  }
};

export const BackType: Story = {
  args: {
    ...Default.args,
    type: BREADCRUMB_TYPE.BACK
  }
};

// Breakpoint Variations
export const DesktopBreakpoint: Story = {
  args: {
    ...Default.args,
    breakpoint: BREADCRUMB_BREAKPOINT.DESKTOP
  }
};

export const MobileBreakpoint: Story = {
  args: {
    ...Default.args,
    breakpoint: BREADCRUMB_BREAKPOINT.MOBILE
  }
};

export const MobileBackType: Story = {
  args: {
    ...Default.args,
    breakpoint: BREADCRUMB_BREAKPOINT.MOBILE,
    type: BREADCRUMB_TYPE.BACK
  }
};

// Theme Variations
export const DefaultTheme: Story = {
  args: {
    ...Default.args,
    theme: BREADCRUMB_THEME.DEFAULT
  }
};

export const InverseGreenTheme: Story = {
  args: {
    ...Default.args,
    theme: BREADCRUMB_THEME.INVERSE_GREEN
  },
  parameters: {
    backgrounds: { 
      default: 'dark-green'
    }
  }
};

export const InversePurpleTheme: Story = {
  args: {
    ...Default.args,
    theme: BREADCRUMB_THEME.INVERSE_PURPLE
  },
  parameters: {
    backgrounds: { 
      default: 'dark-purple' 
    }
  }
};

// Combined Variations
export const BackInverseGreen: Story = {
  args: {
    ...Default.args,
    type: BREADCRUMB_TYPE.BACK,
    theme: BREADCRUMB_THEME.INVERSE_GREEN
  },
  parameters: {
    backgrounds: { 
      default: 'dark-green'
    }
  }
};

export const BackInversePurple: Story = {
  args: {
    ...Default.args,
    type: BREADCRUMB_TYPE.BACK,
    theme: BREADCRUMB_THEME.INVERSE_PURPLE
  },
  parameters: {
    backgrounds: { 
      default: 'dark-purple'
    }
  }
};

// Different item counts
export const FewItems: Story = {
  args: {
    ...Default.args,
    items: [
      { label: 'Home', href: '#' },
      { label: 'Current Page', current: true }
    ]
  }
};

export const ManyItems: Story = {
  args: {
    ...Default.args,
    items: [
      { label: 'Home', href: '#' },
      { label: 'Category 1', href: '#' },
      { label: 'Subcategory 1', href: '#' },
      { label: 'Item Type', href: '#' },
      { label: 'Product Line', href: '#' },
      { label: 'Collection', href: '#' },
      { label: 'Series', href: '#' },
      { label: 'Current Product', current: true }
    ]
  }
};

// All variants showcase
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3>Breadcrumb Types</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div>
            <h4>Breadcrumbs Type</h4>
            <Breadcrumb {...args} type={BREADCRUMB_TYPE.BREADCRUMBS} />
          </div>
          <div>
            <h4>Back Type</h4>
            <Breadcrumb {...args} type={BREADCRUMB_TYPE.BACK} />
          </div>
        </div>
      </div>
      
      <div>
        <h3>Breakpoint Variations</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div>
            <h4>Desktop</h4>
            <Breadcrumb {...args} breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP} />
          </div>
          <div>
            <h4>Mobile</h4>
            <div style={{ maxWidth: '375px', border: '1px dashed #ccc', padding: '8px' }}>
              <Breadcrumb {...args} breakpoint={BREADCRUMB_BREAKPOINT.MOBILE} />
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3>Theme Variations</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div>
            <h4>Default Theme</h4>
            <Breadcrumb {...args} theme={BREADCRUMB_THEME.DEFAULT} />
          </div>
          <div style={{ backgroundColor: '#0b2917', padding: '16px' }}>
            <h4 style={{ color: 'white' }}>Inverse Green Theme</h4>
            <Breadcrumb {...args} theme={BREADCRUMB_THEME.INVERSE_GREEN} />
          </div>
          <div style={{ backgroundColor: '#240330', padding: '16px' }}>
            <h4 style={{ color: 'white' }}>Inverse Purple Theme</h4>
            <Breadcrumb {...args} theme={BREADCRUMB_THEME.INVERSE_PURPLE} />
          </div>
        </div>
      </div>
    </div>
  )
};