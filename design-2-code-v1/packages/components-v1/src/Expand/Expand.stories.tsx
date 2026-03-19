// Expand.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Expand } from './Expand';

const meta: Meta<typeof Expand> = {
  title: 'Components/Expand',
  component: Expand,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Expand>;

export const Default: Story = {
  args: {},
};

export const WithCustomClassName: Story = {
  args: {
    className: 'custom-expand-class',
  },
};