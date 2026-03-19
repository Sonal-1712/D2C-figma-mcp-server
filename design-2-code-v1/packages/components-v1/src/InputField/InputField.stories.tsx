// InputField.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InputField, { INPUT_TYPE, INPUT_STATE } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'InputField component with various types and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: 'select',
      options: Object.values(INPUT_TYPE),
      description: 'Input field type'
    },
    state: {
      control: 'select',
      options: Object.values(INPUT_STATE),
      description: 'Input field state'
    },
    label: {
      control: 'text',
      description: 'Label text'
    },
    helperText: {
      control: 'text',
      description: 'Helper or error text'
    },
    optional: {
      control: 'boolean',
      description: 'Whether the field is optional'
    },
    showPassword: {
      control: 'boolean',
      description: 'Whether to show the password'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the field is read-only'
    },
    value: {
      control: 'text',
      description: 'Input value'
    },
    onChange: {
      action: 'changed',
      description: 'Change handler'
    }
  }
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Default Text Input
export const TextInput: Story = {
  args: {
    inputType: INPUT_TYPE.TEXT,
    state: INPUT_STATE.DEFAULT,
    label: 'Label',
    helperText: '',
    optional: false,
    placeholder: 'Placeholder text',
    value: '',
    disabled: false,
    readOnly: false
  }
};

// Focus Text Input
export const TextInputFocus: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.FOCUS_KEYBOARD
  }
};

// Filled Text Input
export const TextInputFilled: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.FILLED,
    value: 'Input value'
  }
};

// Error Text Input
export const TextInputError: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.EMPTY_ERROR,
    helperText: 'Error message goes here'
  }
};

// Filled Error Text Input
export const TextInputFilledError: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.FILLED_ERROR,
    helperText: 'Error message goes here',
    value: 'Invalid value'
  }
};

// Disabled Text Input
export const TextInputDisabled: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.DISABLED,
    disabled: true
  }
};

// Read-only Text Input
export const TextInputReadOnly: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.READONLY,
    readOnly: true,
    value: 'Read-only value'
  }
};

// Skeleton Text Input
export const TextInputSkeleton: Story = {
  args: {
    ...TextInput.args,
    state: INPUT_STATE.SKELETON
  }
};

// Dropdown Input
export const DropdownInput: Story = {
  args: {
    ...TextInput.args,
    inputType: INPUT_TYPE.DROPDOWN
  }
};

// Date Input
export const DateInput: Story = {
  args: {
    ...TextInput.args,
    inputType: INPUT_TYPE.DATE
  }
};

// Password Input (Hidden)
export const PasswordInputHidden: Story = {
  args: {
    ...TextInput.args,
    inputType: INPUT_TYPE.PASSWORD,
    showPassword: false,
    value: 'password123'
  }
};

// Password Input (Visible)
export const PasswordInputVisible: Story = {
  args: {
    ...TextInput.args,
    inputType: INPUT_TYPE.PASSWORD,
    showPassword: true,
    value: 'password123'
  }
};

// Text Area Input
export const TextAreaInput: Story = {
  args: {
    ...TextInput.args,
    inputType: INPUT_TYPE.TEXT_AREA,
    value: 'This is a multi-line text area input. It can contain multiple lines of text.'
  }
};

// With Helper Text
export const WithHelperText: Story = {
  args: {
    ...TextInput.args,
    helperText: 'This is a helper text'
  }
};

// Optional Field
export const OptionalField: Story = {
  args: {
    ...TextInput.args,
    optional: true
  }
};

// Story showcasing all variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Text Input Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.DEFAULT} label="Default" placeholder="Placeholder text" />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.FOCUS_KEYBOARD} label="Focus" placeholder="Placeholder text" />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.FILLED} label="Filled" value="Input value" />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.EMPTY_ERROR} label="Empty Error" helperText="Error message goes here" />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.FILLED_ERROR} label="Filled Error" value="Invalid value" helperText="Error message goes here" />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.DISABLED} label="Disabled" disabled />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.READONLY} label="Read-only" value="Read-only value" readOnly />
          <InputField inputType={INPUT_TYPE.TEXT} state={INPUT_STATE.SKELETON} label="Skeleton" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Input Types</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <InputField inputType={INPUT_TYPE.TEXT} label="Text Input" placeholder="Enter text" />
          <InputField inputType={INPUT_TYPE.DROPDOWN} label="Dropdown Input" />
          <InputField inputType={INPUT_TYPE.DATE} label="Date Input" />
          <InputField inputType={INPUT_TYPE.PASSWORD} label="Password Input (Hidden)" value="password123" />
          <InputField inputType={INPUT_TYPE.PASSWORD} label="Password Input (Visible)" value="password123" showPassword />
          <InputField inputType={INPUT_TYPE.TEXT_AREA} label="Text Area Input" placeholder="Enter multiple lines of text" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Additional Features</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <InputField label="With Helper Text" helperText="This is a helper text" />
          <InputField label="Optional Field" optional />
        </div>
      </div>
    </div>
  )
};