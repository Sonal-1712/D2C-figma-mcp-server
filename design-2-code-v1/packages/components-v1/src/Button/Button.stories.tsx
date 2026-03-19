// Button.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button, { BUTTON_STYLE, BUTTON_STATE, BUTTON_THEME, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component with various style variants, states, and themes.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: 'select',
      options: Object.values(BUTTON_STYLE),
      description: 'Button style variant'
    },
    state: {
      control: 'select',
      options: Object.values(BUTTON_STATE),
      description: 'Button state'
    },
    theme: {
      control: 'select',
      options: Object.values(BUTTON_THEME),
      description: 'Button theme'
    },
    children: {
      control: 'text',
      description: 'Button content'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Button
export const Default: Story = {
  args: {
    children: 'Button',
    styleVariant: BUTTON_STYLE.PRIMARY,
    state: BUTTON_STATE.DEFAULT,
    theme: BUTTON_THEME.DEFAULT
  }
};

// Style Variants
export const Primary: Story = {
  args: {
    ...Default.args,
    children: 'Primary Button',
    styleVariant: BUTTON_STYLE.PRIMARY
  }
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    children: 'Secondary Button',
    styleVariant: BUTTON_STYLE.SECONDARY
  }
};

export const Tertiary: Story = {
  args: {
    ...Default.args,
    children: 'Tertiary Button',
    styleVariant: BUTTON_STYLE.TERTIARY
  }
};

export const DangerPrimary: Story = {
  args: {
    ...Default.args,
    children: 'Danger Primary',
    styleVariant: BUTTON_STYLE.DANGER_PRIMARY
  }
};

export const DangerSecondary: Story = {
  args: {
    ...Default.args,
    children: 'Danger Secondary',
    styleVariant: BUTTON_STYLE.DANGER_SECONDARY
  }
};

export const DangerTertiary: Story = {
  args: {
    ...Default.args,
    children: 'Danger Tertiary',
    styleVariant: BUTTON_STYLE.DANGER_TERTIARY
  }
};

// States
export const Hover: Story = {
  args: {
    ...Default.args,
    children: 'Hover State',
    state: BUTTON_STATE.HOVER
  }
};

export const Active: Story = {
  args: {
    ...Default.args,
    children: 'Active State',
    state: BUTTON_STATE.ACTIVE
  }
};

export const Focus: Story = {
  args: {
    ...Default.args,
    children: 'Focus State',
    state: BUTTON_STATE.FOCUS
  }
};

export const Loading: Story = {
  args: {
    ...Default.args,
    children: 'Loading State',
    state: BUTTON_STATE.LOADING
  }
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled State',
    state: BUTTON_STATE.DISABLED
  }
};

export const Skeleton: Story = {
  args: {
    ...Default.args,
    children: 'Skeleton State',
    state: BUTTON_STATE.SKELETON
  }
};

// Themes
export const SecondaryDefaultTheme: Story = {
  args: {
    ...Secondary.args,
    children: 'Default Theme',
    theme: BUTTON_THEME.DEFAULT
  }
};

export const SecondaryOnColourTheme: Story = {
  args: {
    ...Secondary.args,
    children: 'On-Colour Theme',
    theme: BUTTON_THEME.ON_COLOUR
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

export const SecondaryInverseTheme: Story = {
  args: {
    ...Secondary.args,
    children: 'Inverse Theme',
    theme: BUTTON_THEME.INVERSE
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// With Icon
export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '8px' }}>
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
          <path d="M9 4H7v5h5V7H9z"/>
        </svg>
        With Icon
      </>
    )
  }
};

// Story that showcases all variants together
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3>Style Variants</h3>
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY}>Primary</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.SECONDARY}>Secondary</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.TERTIARY}>Tertiary</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.DANGER_PRIMARY}>Danger Primary</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.DANGER_SECONDARY}>Danger Secondary</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.DANGER_TERTIARY}>Danger Tertiary</Button>
        </div>
      </div>
      
      <div>
        <h3>States (Primary Style)</h3>
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.DEFAULT}>Default</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.HOVER}>Hover</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.ACTIVE}>Active</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.FOCUS}>Focus</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.LOADING}>Loading</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.DISABLED}>Disabled</Button>
          <Button {...args} styleVariant={BUTTON_STYLE.PRIMARY} state={BUTTON_STATE.SKELETON}>Skeleton</Button>
        </div>
      </div>
      
      <div>
        <h3>Themes (Secondary Style)</h3>
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', alignItems: 'center' }}>
          <Button {...args} styleVariant={BUTTON_STYLE.SECONDARY} theme={BUTTON_THEME.DEFAULT}>Default Theme</Button>
          <div style={{ padding: '16px', backgroundColor: '#006633', borderRadius: '4px' }}>
            <Button {...args} styleVariant={BUTTON_STYLE.SECONDARY} theme={BUTTON_THEME.ON_COLOUR}>On-Colour Theme</Button>
          </div>
          <div style={{ padding: '16px', backgroundColor: '#0B2917', borderRadius: '4px' }}>
            <Button {...args} styleVariant={BUTTON_STYLE.SECONDARY} theme={BUTTON_THEME.INVERSE}>Inverse Theme</Button>
          </div>
        </div>
      </div>
    </div>
  )
};