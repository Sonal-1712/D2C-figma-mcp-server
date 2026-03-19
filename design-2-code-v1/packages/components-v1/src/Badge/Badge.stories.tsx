// Badge.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Indicator: Story = {
  args: {
    type: 'Indicator',
  },
};

export const Status: Story = {
  args: {
    type: 'Status',
  },
};

export const Counter: Story = {
  args: {
    type: 'Counter',
    count: 5,
  },
};

export const LargeCounter: Story = {
  args: {
    type: 'Counter',
    count: 99,
  },
};