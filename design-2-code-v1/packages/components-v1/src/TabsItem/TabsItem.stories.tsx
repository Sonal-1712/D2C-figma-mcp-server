// TabsItem.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TabsItem, { TAB_SIZE, TAB_STATE, TAB_ALIGNMENT, TAB_THEME, TabsItemProps } from './TabsItem';

const meta: Meta<typeof TabsItem> = {
  title: 'Components/TabsItem',
  component: TabsItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TabsItem component with various size variants, states, and themes.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    alignment: {
      control: 'select',
      options: Object.values(TAB_ALIGNMENT),
      description: 'Alignment of the tab content',
    },
    showBadge: {
      control: 'boolean',
      description: 'Whether to show the badge',
    },
    showTag: {
      control: 'boolean',
      description: 'Whether to show the tag',
    },
    size: {
      control: 'select',
      options: Object.values(TAB_SIZE),
      description: 'Size of the tab',
    },
    state: {
      control: 'select',
      options: Object.values(TAB_STATE),
      description: 'State of the tab',
    },
    theme: {
      control: 'select',
      options: Object.values(TAB_THEME),
      description: 'Theme of the tab',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabsItem>;

// Default tab
export const Default: Story = {
  args: {
    alignment: TAB_ALIGNMENT.LEFT,
    showBadge: true,
    showTag: true,
    size: TAB_SIZE.LARGE,
    state: TAB_STATE.DEFAULT,
    theme: TAB_THEME.DEFAULT,
  },
};

// Selected tab
export const Selected: Story = {
  args: {
    ...Default.args,
    state: TAB_STATE.SELECTED,
  },
};

// Hover tab
export const Hover: Story = {
  args: {
    ...Default.args,
    state: TAB_STATE.HOVER,
  },
};

// Focus tab
export const Focus: Story = {
  args: {
    ...Default.args,
    state: TAB_STATE.FOCUS,
  },
};

// Disabled tab
export const Disabled: Story = {
  args: {
    ...Default.args,
    state: TAB_STATE.DISABLED,
  },
};

// Skeleton tab
export const Skeleton: Story = {
  args: {
    ...Default.args,
    state: TAB_STATE.SKELETON,
  },
};

// Small tab
export const Small: Story = {
  args: {
    ...Default.args,
    size: TAB_SIZE.SMALL,
  },
};

// Medium tab
export const Medium: Story = {
  args: {
    ...Default.args,
    size: TAB_SIZE.MEDIUM,
  },
};

// Centre alignment
export const CentreAligned: Story = {
  args: {
    ...Default.args,
    alignment: TAB_ALIGNMENT.CENTRE,
  },
};

// Inverse theme
export const Inverse: Story = {
  args: {
    ...Default.args,
    theme: TAB_THEME.INVERSE,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Without badge
export const WithoutBadge: Story = {
  args: {
    ...Default.args,
    showBadge: false,
  },
};

// Without tag
export const WithoutTag: Story = {
  args: {
    ...Default.args,
    showTag: false,
  },
};

// All variants in a grid layout
export const AllVariants: Story = {
  render: (args: TabsItemProps) => {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {Object.values(TAB_STATE).map((state) => (
          <div key={state} style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{state}</div>
            <TabsItem {...args} state={state} />
          </div>
        ))}
      </div>
    );
  },
  args: {
    ...Default.args,
  },
};

// All themes and alignments
export const ThemesAndAlignments: Story = {
  render: () => {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Default Theme, Left Alignment</div>
          <TabsItem theme={TAB_THEME.DEFAULT} alignment={TAB_ALIGNMENT.LEFT} />
        </div>
        <div>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Default Theme, Centre Alignment</div>
          <TabsItem theme={TAB_THEME.DEFAULT} alignment={TAB_ALIGNMENT.CENTRE} />
        </div>
        <div style={{ backgroundColor: '#006633', padding: '16px' }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold', color: 'white' }}>Inverse Theme, Left Alignment</div>
          <TabsItem theme={TAB_THEME.INVERSE} alignment={TAB_ALIGNMENT.LEFT} />
        </div>
        <div style={{ backgroundColor: '#006633', padding: '16px' }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold', color: 'white' }}>Inverse Theme, Centre Alignment</div>
          <TabsItem theme={TAB_THEME.INVERSE} alignment={TAB_ALIGNMENT.CENTRE} />
        </div>
      </div>
    );
  },
};