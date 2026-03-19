# Wimbledon Design System

This package contains the core design system for Wimbledon React component libraries. It provides a unified set of design tokens, styles, and utilities that ensure consistency across all Wimbledon components and applications.

## Installation

```bash
# Using npm
npm install @design-2-code/design-system-v1

# Using pnpm
pnpm add @design-2-code/design-system-v1

# Using yarn
yarn add @design-2-code/design-system-v1
```

## Usage

### SCSS Styles

To import all design system styles:

```scss
// In your SCSS file
@import '@design-2-code/design-system-v1';
```

Or you can import specific parts of the design system:

```scss
// Import just the styles you need
@use '@design-2-code/design-system-v1/dist/sass/scss/colors' as colors;
@use '@design-2-code/design-system-v1/dist/sass/scss/typography' as typography;
@use '@design-2-code/design-system-v1/dist/sass/scss/tokens' as tokens;
```

### TypeScript/JavaScript

```tsx
import { colors, typography, styleClasses, cssVariables, combineClassNames } from '@design-2-code/design-system-v1';

// Use color constants
const primaryColor = colors.design2CodeGreen.base; // #006633

// Use typography utilities
const fontSize = typography.ptToRem(16); // "1.33333rem"

// Use CSS class names
const headingClass = styleClasses.heading.h1; // "wdl-heading-01"

// Use CSS variables
const textColor = cssVariables.text.primary; // "var(--wdl-text-primary)"

// Combine class names conditionally
const buttonClass = combineClassNames(
  styleClasses.button.primary, 
  { 'is-disabled': isDisabled }
); // "wdl-button-primary is-disabled" (when isDisabled is true)
```

## Available Design Tokens

### Colors

The design system provides comprehensive color palettes:

- Primary brand colors: `design2CodeGreen`, `design2CodePurple`
- Neutrals: `grey` (with shades from 5 to 95)
- Supporting colors: Various color families with shades from 10 to 100

### Typography

Typography utilities include:

- Heading styles: `wdl-heading-01` through `wdl-heading-14`
- Display styles: Large headlines with various sizes
- Body text styles: Regular and expressive variants
- Label styles: Small text for labels and captions
- Helper text styles: Text for form hints and helper messages

### Semantic Tokens

The design system provides semantic tokens for:

- Background colors
- Text colors
- Border styles
- Button styles
- Icons
- Focus states
- Support states (error, warning, success, info)
- Layer styles
- Field styles

## Integration with Other Packages

This design system should be used as a dependency in the following packages:

- `@design-2-code/atoms-v1`
- `@design-2-code/molecules-v1`
- `@design-2-code/organisms-v1`
- `@design-2-code/layouts-v1`

## Development

### Building the Package

```bash
# Install dependencies
pnpm install

# Build the package
pnpm run build

# Watch for changes during development
pnpm run dev
```

## License

MIT
