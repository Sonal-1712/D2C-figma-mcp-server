// Checkbox.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps, CHECKBOX_STATE } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(CHECKBOX_STATE),
      description: 'State of the checkbox',
      defaultValue: CHECKBOX_STATE.DEFAULT
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    errorText: {
      control: 'text',
      description: 'Error text to display when state is "Error"',
      if: { arg: 'state', eq: CHECKBOX_STATE.ERROR }
    },
    className: {
      control: 'text',
      description: 'Additional class name for custom styling'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    state: CHECKBOX_STATE.DEFAULT,
    label: 'Body text, that could include links for additional information Privacy Policy and the Terms of Use'
  }
};

export const Selected: Story = {
  args: {
    state: CHECKBOX_STATE.SELECTED,
    label: 'Body text, that could include links for additional information Privacy Policy and the Terms of Use'
  }
};

export const Error: Story = {
  args: {
    state: CHECKBOX_STATE.ERROR,
    label: 'Body text, that could include links for additional information Privacy Policy and the Terms of Use',
    errorText: 'Error-text'
  }
};

export const Focus: Story = {
  args: {
    state: CHECKBOX_STATE.FOCUS,
    label: 'Body text, that could include links for additional information Privacy Policy and the Terms of Use'
  }
};

export const Disabled: Story = {
  args: {
    state: CHECKBOX_STATE.DISABLED,
    label: 'Body text, that could include links for additional information Privacy Policy and the Terms of Use'
  }
};

export const CustomLabel: Story = {
  args: {
    state: CHECKBOX_STATE.DEFAULT,
    label: 'I agree to the Terms and Conditions'
  }
};

export const RichTextLabel: Story = {
  render: () => (
    <Checkbox 
      state={CHECKBOX_STATE.DEFAULT}
      label={<>Body text, with <a href="#">links</a> for additional information</>}
    />
  )
};

export const SelectedWithCustomLabel: Story = {
  args: {
    state: CHECKBOX_STATE.SELECTED,
    label: 'I agree to the Terms and Conditions'
  }
};