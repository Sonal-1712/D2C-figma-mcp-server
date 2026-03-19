// Sound.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sound } from './Sound';

const meta: Meta<typeof Sound> = {
  title: 'Components/Sound',
  component: Sound,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sound>;

export const SoundOff: Story = {
  args: {
    sound: false,
  },
};

export const SoundOn: Story = {
  args: {
    sound: true,
  },
};