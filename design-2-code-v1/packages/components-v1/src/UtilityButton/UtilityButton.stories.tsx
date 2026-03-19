// UtilityButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UtilityButton, UTILITY_BUTTON_STATE, UTILITY_BUTTON_THEME } from './UtilityButton';

// SVG icon example
const TennisIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
    <path
      d="M16.5,13c0-.17,0-.33,0-.5a6.5,6.5,0,1,0-13,0c0,.17,0,.33,0,.5h0a5.33,5.33,0,0,0,5.21,5.48h.58c2.75,0,5-2.63,5.21-5.48ZM11.5,16.5a3.5,3.5,0,0,1-3,0l1.5-2-1.5-2,1.5-2-1.5-2,1.5-2h0c2,0,3.5,2.35,3.5,5A5.73,5.73,0,0,1,11.5,16.5Z"
      fill="currentColor"
    />
  </svg>
);

export default {
  title: 'Components/UtilityButton',
  component: UtilityButton,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: Object.values(UTILITY_BUTTON_STATE),
      description: 'Button state'
    },
    theme: {
      control: { type: 'select' },
      options: Object.values(UTILITY_BUTTON_THEME),
      description: 'Button theme'
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Show custom icon instead of default'
    },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof UtilityButton>;

const Template: ComponentStory<typeof UtilityButton> = (args) => <UtilityButton {...args} />;

// Default story
export const Default: ComponentStory<typeof UtilityButton> = Template.bind({});
Default.args = {
  state: UTILITY_BUTTON_STATE.DEFAULT,
  theme: UTILITY_BUTTON_THEME.DEFAULT
};

// With Custom Icon story
export const WithCustomIcon: ComponentStory<typeof UtilityButton> = Template.bind({});
WithCustomIcon.args = {
  state: UTILITY_BUTTON_STATE.DEFAULT,
  theme: UTILITY_BUTTON_THEME.DEFAULT,
  icon: <TennisIcon />
};

// On-colour Theme story
export const OnColour: ComponentStory<typeof UtilityButton> = Template.bind({});
OnColour.args = {
  state: UTILITY_BUTTON_STATE.DEFAULT,
  theme: UTILITY_BUTTON_THEME.ON_COLOUR
};

// Inverse Theme story
export const Inverse: ComponentStory<typeof UtilityButton> = Template.bind({});
Inverse.args = {
  state: UTILITY_BUTTON_STATE.DEFAULT,
  theme: UTILITY_BUTTON_THEME.INVERSE
};

// Overlay Theme story
export const Overlay: ComponentStory<typeof UtilityButton> = Template.bind({});
Overlay.args = {
  state: UTILITY_BUTTON_STATE.DEFAULT,
  theme: UTILITY_BUTTON_THEME.OVERLAY
};

// Ghost Theme story
export const Ghost: ComponentStory<typeof UtilityButton> = Template.bind({});
Ghost.args = {
  state: UTILITY_BUTTON_STATE.DEFAULT,
  theme: UTILITY_BUTTON_THEME.GHOST
};

// Loading State story
export const Loading: ComponentStory<typeof UtilityButton> = Template.bind({});
Loading.args = {
  state: UTILITY_BUTTON_STATE.LOADING,
  theme: UTILITY_BUTTON_THEME.DEFAULT
};

// Disabled State story
export const Disabled: ComponentStory<typeof UtilityButton> = Template.bind({});
Disabled.args = {
  state: UTILITY_BUTTON_STATE.DISABLED,
  theme: UTILITY_BUTTON_THEME.DEFAULT
};

// Skeleton State story
export const Skeleton: ComponentStory<typeof UtilityButton> = Template.bind({});
Skeleton.args = {
  state: UTILITY_BUTTON_STATE.SKELETON,
  theme: UTILITY_BUTTON_THEME.DEFAULT
};

// All Variants Grid
export const AllVariants: ComponentStory<typeof UtilityButton> = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Default</div>
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>On-colour</div>
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Inverse</div>
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Overlay</div>
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Ghost</div>
    
    {Object.values(UTILITY_BUTTON_STATE).map((state) => (
      <React.Fragment key={`state-row-${state}`}>
        <UtilityButton key={`default-${state}`} state={state} theme={UTILITY_BUTTON_THEME.DEFAULT} />
        <UtilityButton key={`oncolour-${state}`} state={state} theme={UTILITY_BUTTON_THEME.ON_COLOUR} />
        <UtilityButton key={`inverse-${state}`} state={state} theme={UTILITY_BUTTON_THEME.INVERSE} />
        <UtilityButton key={`overlay-${state}`} state={state} theme={UTILITY_BUTTON_THEME.OVERLAY} />
        <UtilityButton key={`ghost-${state}`} state={state} theme={UTILITY_BUTTON_THEME.GHOST} />
      </React.Fragment>
    ))}
  </div>
);