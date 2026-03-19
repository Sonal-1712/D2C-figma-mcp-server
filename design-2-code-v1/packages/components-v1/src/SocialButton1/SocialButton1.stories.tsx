// SocialButton1.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SocialButton1, { BUTTONS, SocialButton1Props } from './SocialButton1';

// First, create an Apple logo SVG that we can use in the component
// This is to simulate the image we'd normally load from the public folder
const AppleLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5C17.88 20.74 17.00 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.35 4.26 13 3.5Z" />
  </svg>
);

// Create the meta object for the Storybook component
const meta: Meta<typeof SocialButton1> = {
  title: 'Components/SocialButton1',
  component: SocialButton1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SocialButton1 component displays a row of 1-3 social login buttons.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    buttons: {
      control: 'select',
      options: Object.values(BUTTONS),
      description: 'Number of social buttons to display'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names'
    }
  },
  decorators: [
    (Story) => {
      // This decorator adds the Apple logo to the global window object
      // In a real implementation, we'd have the actual image file in the public folder
      if (typeof window !== 'undefined') {
        const originalImage = window.Image;
        window.Image = class extends originalImage {
          constructor() {
            super();
            setTimeout(() => {
              if (this.src?.includes('apple-logo.svg')) {
                const event = new Event('load');
                this.dispatchEvent(event);
              }
            }, 0);
          }
        };
      }
      
      return (
        <div style={{ padding: '1rem', maxWidth: '600px' }}>
          <Story />
        </div>
      );
    }
  ]
};

export default meta;
type Story = StoryObj<typeof SocialButton1>;

// Single Button
export const SingleButton: Story = {
  args: {
    buttons: BUTTONS.ONE
  },
  render: (args) => (
    <div>
      <h3 style={{ marginBottom: '16px' }}>Single Social Button</h3>
      <SocialButton1 {...args} />
      {/* Show the Apple logo since we can't load real images in this context */}
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
        <AppleLogo />
      </div>
    </div>
  )
};

// Two Buttons
export const TwoButtons: Story = {
  args: {
    buttons: BUTTONS.TWO
  },
  render: (args) => (
    <div>
      <h3 style={{ marginBottom: '16px' }}>Two Social Buttons</h3>
      <SocialButton1 {...args} />
      {/* Show the Apple logo since we can't load real images in this context */}
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
        <AppleLogo />
      </div>
    </div>
  )
};

// Three Buttons
export const ThreeButtons: Story = {
  args: {
    buttons: BUTTONS.THREE
  },
  render: (args) => (
    <div>
      <h3 style={{ marginBottom: '16px' }}>Three Social Buttons</h3>
      <SocialButton1 {...args} />
      {/* Show the Apple logo since we can't load real images in this context */}
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
        <AppleLogo />
      </div>
    </div>
  )
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Single Button</h3>
        <SocialButton1 buttons={BUTTONS.ONE} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Two Buttons</h3>
        <SocialButton1 buttons={BUTTONS.TWO} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Three Buttons</h3>
        <SocialButton1 buttons={BUTTONS.THREE} />
      </div>
      
      {/* Show the Apple logo since we can't load real images in this context */}
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
        <AppleLogo />
      </div>
    </div>
  )
};