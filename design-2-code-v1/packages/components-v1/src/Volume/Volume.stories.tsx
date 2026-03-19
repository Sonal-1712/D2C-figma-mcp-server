// Volume.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Volume } from './Volume';

const meta: Meta<typeof Volume> = {
  title: 'Components/Volume',
  component: Volume,
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
type Story = StoryObj<typeof Volume>;

export const VolumeWithSlider: Story = {
  args: {
    volume: true,
  },
};

export const VolumeCompact: Story = {
  args: {
    volume: false,
  },
};