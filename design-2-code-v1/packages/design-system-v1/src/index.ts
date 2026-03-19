/**
 * Wimbledon Design System - Main Entry Point
 *
 * This is the main entry point for the Wimbledon Design System.
 * It exports both SCSS styles and TypeScript utilities.
 */

// Export SCSS styles
import './scss/index.scss';

// Export colors as constants
// This allows using the design system colors in TypeScript/JavaScript
export const colors = {
  // Primary brand colors
  wimbledonGreen: {
    base: '#006633',
    10: '#CCE0D6',
    20: '#AACCBB',
    30: '#80B399',
    40: '#559977',
    50: '#2A8055',
    60: '#00552B',
    70: '#004422',
    80: '#00331A',
    90: '#002211',
    100: '#00140A'
  },
  wimbledonPurple: {
    base: '#540082',
    10: '#DDCCE6',
    20: '#C6AAD5',
    30: '#AA80C1',
    40: '#8D55AC',
    50: '#712A97',
    60: '#46006C',
    70: '#380057',
    80: '#2A0041',
    90: '#1C002B',
    100: '#11001A'
  },
  // Neutrals
  grey: {
    5: '#F2F4F8',
    10: '#E4E9F1',
    15: '#DDE1E6',
    20: '#CDD3DA',
    25: '#C1C7CD',
    30: '#ADB5BD',
    35: '#A2A9B0',
    40: '#9199A1',
    45: '#878D96',
    50: '#757B85',
    55: '#697077',
    60: '#5D646A',
    65: '#4D5358',
    70: '#434A51',
    75: '#343A3F',
    80: '#2B3236',
    85: '#222A2F',
    90: '#212121',
    95: '#121619'
  },
  white: '#FFFFFF'
};

// Export typography utility functions
export const typography = {
  /**
   * Convert Points to REM (1pt = 1.3333px at 96dpi; 1rem = 16px)
   * @param pt - Points value
   * @returns REM value as string with 'rem' unit
   */
  ptToRem: (pt: number): string => `${(pt * (96 / 72)) / 16}rem`,

  /**
   * Convert percentage to em letter-spacing, e.g. -3% => -0.03em
   * @param pct - Percentage value
   * @returns EM value as string with 'em' unit
   */
  pctToEm: (pct: number): string => `${pct / 100}em`,

  /**
   * Convert percentage line-height to unitless number, e.g. 150% => 1.5
   * @param pct - Percentage value
   * @returns Unitless line height as number
   */
  pctToLh: (pct: number): number => pct / 100,
};

// Export CSS class names as constants
export const styleClasses = {
  // Heading classes
  heading: {
    h1: 'wdl-heading-01',
    h2: 'wdl-heading-02',
    h3: 'wdl-heading-03',
    h4: 'wdl-heading-04',
    h5: 'wdl-heading-05',
    h6: 'wdl-heading-06',
    h7: 'wdl-heading-07',
    h8: 'wdl-heading-08',
    h9: 'wdl-heading-09',
    h10: 'wdl-heading-10',
    h11: 'wdl-heading-11',
    h12: 'wdl-heading-12',
    h13: 'wdl-heading-13',
    h14: 'wdl-heading-14',
    // Caps variants
    h2Caps: 'wdl-heading-02-caps',
    h8Caps: 'wdl-heading-08-caps',
    h9Caps: 'wdl-heading-09-caps',
    h10Caps: 'wdl-heading-10-caps',
    // Expressive variants
    h1Expressive: 'wdl-heading-01-expressive',
    h2Expressive: 'wdl-heading-02-expressive',
    h2ExpressiveCaps: 'wdl-heading-02-expressive-caps',
  },
  // Display classes
  display: {
    d140Caps: 'wdl-display-140-caps',
    d88Caps: 'wdl-display-88-caps',
    d64Caps: 'wdl-display-64-caps',
    d56Caps: 'wdl-display-56-caps',
    d40Caps: 'wdl-display-40-caps',
    d32Caps: 'wdl-display-32-caps',
    d28Caps: 'wdl-display-28-caps',
    d56Sentence: 'wdl-display-56-sentence',
    d32Sentence: 'wdl-display-32-sentence',
  },
  // Body text classes
  body: {
    b1: 'wdl-body-01',
    b2: 'wdl-body-02',
    b3: 'wdl-body-03',
    b4: 'wdl-body-04',
    b1List: 'wdl-body-01-list',
    b2List: 'wdl-body-02-list',
    b3List: 'wdl-body-03-list',
    b1Expressive: 'wdl-body-01-expressive',
    b2Expressive: 'wdl-body-02-expressive',
    b3Expressive: 'wdl-body-03-expressive',
    b4Expressive: 'wdl-body-04-expressive',
    b1ExpressiveList: 'wdl-body-01-expressive-list',
    b2ExpressiveList: 'wdl-body-02-expressive-list',
  },
  // Label classes
  label: {
    l1: 'wdl-label-01',
    l2: 'wdl-label-02',
    l3: 'wdl-label-03',
    l4: 'wdl-label-04',
    l5: 'wdl-label-05',
    l5Medium: 'wdl-label-05-medium',
  },
  // Helper text classes
  helper: {
    h1: 'wdl-helper-01',
    h2: 'wdl-helper-02',
  },
  // Tag classes
  tag: {
    t1: 'wdl-tag-01',
    t2: 'wdl-tag-02',
    t3: 'wdl-tag-03',
    t4: 'wdl-tag-04',
    t5: 'wdl-tag-05',
  },
  // Link classes
  link: {
    link: 'wdl-link',
    linkExpressive: 'wdl-link-01-expressive',
  },
  // Background utility classes
  background: {
    grey: 'wdl-bg-grey',
    white: 'wdl-bg-white',
    hover: 'wdl-bg-hover',
    active: 'wdl-bg-active',
    selected: 'wdl-bg-selected',
    selectedHover: 'wdl-bg-selected-hover',
    inverse01: 'wdl-bg-inverse-01',
    inverse01Hover: 'wdl-bg-inverse-01-hover',
    inverse02: 'wdl-bg-inverse-02',
    brand01: 'wdl-bg-brand-01',
    brand02: 'wdl-bg-brand-02',
    brand03: 'wdl-bg-brand-03',
    brand04: 'wdl-bg-brand-04',
  },
  // Button utility classes
  button: {
    primary: 'wdl-button-primary',
    secondary: 'wdl-button-secondary',
    tertiary: 'wdl-button-tertiary',
    danger: 'wdl-button-danger',
  },
  // Text utility classes
  text: {
    brand01: 'wdl-text-brand-01',
    brand02: 'wdl-text-brand-02',
    brand03: 'wdl-text-brand-03',
    primary: 'wdl-text-primary',
    secondary: 'wdl-text-secondary',
    secondaryDark: 'wdl-text-secondary-dark',
    placeholder: 'wdl-text-placeholder',
    helper: 'wdl-text-helper',
    error: 'wdl-text-error',
    disabled: 'wdl-text-disabled',
    disabledInverse: 'wdl-text-disabled-inverse',
    onColour: 'wdl-text-on-colour',
    inverse: 'wdl-text-inverse',
    inverseSecondary01: 'wdl-text-inverse-secondary-01',
    inverseSecondary01Light: 'wdl-text-inverse-secondary-01-light',
    inverseSecondary02: 'wdl-text-inverse-secondary-02',
    highlight: 'wdl-text-highlight',
  },
  // Support utility classes
  support: {
    error: 'wdl-support-error',
    success: 'wdl-support-success',
    warning: 'wdl-support-warning',
    info: 'wdl-support-info',
  },
  // Tag utility classes
  tags: {
    supportBlue: 'wdl-support-tag-blue',
    supportGreen: 'wdl-support-tag-green',
    supportRed: 'wdl-support-tag-red',
    supportYellow: 'wdl-support-tag-yellow',
    brandGrey: 'wdl-brand-tag-grey',
    brandGreyDark: 'wdl-brand-tag-grey-dark',
    brandGreen: 'wdl-brand-tag-green',
    brandGreenInverse: 'wdl-brand-tag-green-inverse',
    brandPurple: 'wdl-brand-tag-purple',
    brandPurpleInverse: 'wdl-brand-tag-purple-inverse',
    brandGold: 'wdl-brand-tag-gold',
    brandGoldInverse: 'wdl-brand-tag-gold-inverse',
    brandPetuniaInverse: 'wdl-brand-tag-petunia-inverse',
  },
};

// Export CSS variables as a helper object for accessing in JavaScript
export const cssVariables = {
  background: {
    grey: 'var(--wdl-background-grey)',
    white: 'var(--wdl-background-white)',
    hover: 'var(--wdl-background-hover)',
    active: 'var(--wdl-background-active)',
    selected: 'var(--wdl-background-selected)',
    selectedHover: 'var(--wdl-background-selected-hover)',
    inverse01: 'var(--wdl-background-inverse-01)',
    inverse01Hover: 'var(--wdl-background-inverse-01-hover)',
    inverse02: 'var(--wdl-background-inverse-02)',
    brand01: 'var(--wdl-background-brand-01)',
    brand02: 'var(--wdl-background-brand-02)',
    brand03: 'var(--wdl-background-brand-03)',
    brand04: 'var(--wdl-background-brand-04)',
  },
  text: {
    brand01: 'var(--wdl-text-brand-01)',
    brand02: 'var(--wdl-text-brand-02)',
    brand03: 'var(--wdl-text-brand-03)',
    primary: 'var(--wdl-text-primary)',
    secondary: 'var(--wdl-text-secondary)',
    secondaryDark: 'var(--wdl-text-secondary-dark)',
    placeholder: 'var(--wdl-text-placeholder)',
    helper: 'var(--wdl-text-helper)',
    error: 'var(--wdl-text-error)',
    disabled: 'var(--wdl-text-disabled)',
    onColour: 'var(--wdl-text-on-colour)',
    inverse: 'var(--wdl-text-inverse)',
  },
  button: {
    primary: 'var(--wdl-button-primary)',
    primaryHover: 'var(--wdl-button-primary-hover)',
    primaryActive: 'var(--wdl-button-primary-active)',
    secondary: 'var(--wdl-button-secondary)',
    secondaryHover: 'var(--wdl-button-secondary-hover)',
    secondaryActive: 'var(--wdl-button-secondary-active)',
    tertiary: 'var(--wdl-button-tertiary)',
    tertiaryHover: 'var(--wdl-button-tertiary-hover)',
    tertiaryActive: 'var(--wdl-button-tertiary-active)',
    danger: 'var(--wdl-button-danger)',
    dangerHover: 'var(--wdl-button-danger-hover)',
    dangerActive: 'var(--wdl-button-danger-active)',
    disabled: 'var(--wdl-button-disabled)',
  },
  focus: {
    focus: 'var(--wdl-focus)',
    inset: 'var(--wdl-focus-inset)',
    inverse: 'var(--wdl-focus-inverse)',
  },
  support: {
    error: 'var(--wdl-support-error)',
    success: 'var(--wdl-support-success)',
    warning: 'var(--wdl-support-warning)',
    info: 'var(--wdl-support-info)',
  },
};

/**
 * Helper function to generate CSS class names with conditional classes
 * @param baseClass Base class name
 * @param conditionalClasses Object with class names as keys and boolean conditions as values
 * @returns String of space-separated class names
 */
export function combineClassNames(baseClass: string, conditionalClasses: Record<string, boolean> = {}): string {
  const classes = [baseClass];
  
  Object.keys(conditionalClasses).forEach((className: string) => {
    if (conditionalClasses[className]) {
      classes.push(className);
    }
  });
  
  return classes.filter(Boolean).join(' ');
}

// Export default for convenience
export default {
  colors,
  typography,
  styleClasses,
  cssVariables,
  combineClassNames
};
