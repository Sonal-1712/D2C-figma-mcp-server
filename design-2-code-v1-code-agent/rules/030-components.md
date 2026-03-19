# Component Rules

This document outlines the rules and conditions that must be followed when generating components in the Design 2 Code project. These rules ensure consistency, quality, and maintainability across all components.

## Mandatory Rules

### Directory and File Structure Rules

1. **Component Location Rule**
   - All components MUST be created in `design-2-code-v1/packages/components-v1/src/[ComponentName]`
   - Component names MUST use PascalCase format

2. **Required Files Rule**
   - Each component MUST have the following files:
     - `[ComponentName].tsx` - Component implementation
     - `[ComponentName].scss` - Component-specific styles
     - `[ComponentName]_page.tsx` - Usage example showing all variants and states
     - `index.ts` - Export file

3. **File Naming Rule**
   - File names MUST match the component name exactly
   - All component files MUST include filename comment at the top

### Implementation Rules

1. **Language and Framework Rules**
   - All components MUST be implemented using TypeScript and React
   - All components MUST be compatible with React 18+
   - NO third-party libraries or frameworks are allowed unless explicitly approved

2. **Component Pattern Rules**
   - Components MUST use functional components with hooks
   - Components MUST use the forwardRef pattern when forwarding refs
   - Components MUST NOT use Component.defaultProps (not supported in React 18+)
   - Components MUST handle all variants and states via props within a single component
   - NO splitting of variants or states into separate components 
     CRITICAL: Do not use interactive states (e.g., hover, default, focus) as props. Treat them as interaction states instead.

3. **Styling Rules**
   - All styles MUST be defined in the SCSS file
   - NO Tailwind classes are allowed
   - NO inline styles are allowed
   - All design tokens MUST be reused from relative path - `design-2-code-v1/packages/design-system-v1/src/scss`. Make sure to do correct import
   - NO hardcoded color values are allowed (no hex, rgb, rgba, hsl, etc.) - colors MUST be reused from design tokens
   - **⚠️ SUPER CRITICAL: If the MCP tool output specifies tokens that don't exist in the design system's token files:**
     - Check if a semantically equivalent token already exists in the design system
     - If not, ADD the missing token to the appropriate token file (colors.scss, typography.scss, etc.)
     - THEN use the token in your component styling
     - NEVER hardcode color values directly in component SCSS files
   - All color and token usage MUST follow the map-get pattern as shown in the implementation standards:
     ```scss
     .component {
       background-color: map-get($wdl-icon, icon-interactive-1);
       color: map-get($wdl-text, text-on-colour);
     }
     ```

4. **SUPER CRITICAL: Dimensions and Spacing Rules**
   - All component dimensions (width, height) MUST EXACTLY match the design specifications
   - All component spacing (padding, margin) MUST EXACTLY match the design specifications
   - NO approximations or "close enough" dimensions are allowed
   - You MUST measure and implement the exact pixel values from the design
   - All layout dimensions MUST be verified against the original design before completion
   - Deviations from specified dimensions will be considered a critical implementation error
   - Use exact pixel measurements for all component dimensions specified in the design

5. **Accessibility Rules**
   - All components MUST comply with WCAG 2.1 AA standards
   - Components MUST use semantic HTML elements
   - Components MUST support keyboard navigation where applicable
   - Components MUST use appropriate ARIA attributes when necessary
   - All images MUST include meaningful alt text

### Testing and Verification Rules

1. **SUPER CRITICAL: Storybook Testing Rule**
   - **All components MUST be tested in Storybook before being considered complete**
   - **It is ABSOLUTELY MANDATORY to run Storybook and verify the component visually and functionally**
   - **All TypeScript errors, styling issues, and runtime problems MUST be fixed before marking the component as complete**
   - **DO NOT skip the testing phase - component implementation is NOT complete until it is verified in Storybook**

2. **Error Handling Rules**
   - All build errors MUST be fixed before completing the component
   - All console errors and warnings MUST be addressed
   - All components MUST function without errors in Storybook

3. **Testing Rules**
   - All component variants MUST be testable in Storybook
   - All interactive elements MUST be functional
   - All components MUST be responsive
   - All components MUST be accessible

4. **Design Alignment Rules**
   - All components MUST undergo a design alignment review
   - All components MUST visually match the original design specifications
   - Component styling MUST be verified against the original design
   - All colors MUST match the design through proper design token usage
   - All typography MUST match the design specifications
   - All spacing and layout MUST match the design
   - All component states and variants MUST match their design counterparts
   - Any deviations from the original design MUST be documented and justified

### Documentation Rules

1. **Code Documentation Rules**
   - All props MUST be documented with JSDoc comments
   - All non-obvious code MUST include explanatory comments
   - Component purpose and usage MUST be documented

2. **Example Rules**
   - Usage examples MUST demonstrate all variants and states
   - Usage examples MUST use realistic prop values

## Prohibited Actions

1. **Prohibited Code Practices**
   - NO use of `any` type in TypeScript
   - NO implicit type conversions
   - NO use of deprecated React features
   - NO hardcoded values that should be props

2. **Prohibited Style Practices**
   - NO use of Tailwind or other utility CSS frameworks
   - NO inline styles
   - NO direct use of pixel values without design token reference
   - NO !important declarations unless absolutely necessary

3. **Prohibited Content Practices**
   - NO placeholder text in final components
   - NO copyrighted images or assets without proper licensing
   - NO adding extra descriptions or text not in the original design

## Component Validation Conditions

Before a component is considered complete, it MUST meet these conditions:

1. All required files exist and are properly named
2. Component implementation follows all rules specified above
3. **SUPER CRITICAL: Component renders correctly in Storybook with all variants and without errors**
4. Component passes build process without errors
5. Component is accessible according to WCAG 2.1 AA standards
6. Component is responsive and displays correctly at all breakpoints
7. Component is properly documented

For implementation details, code examples, and specific guidance, refer to:
`design-2-code-v1-code-agent/memory-bank/010-project/031-implementation-standards-components.md`

For the step-by-step workflow process, refer to:
`design-2-code-v1-code-agent/workflows/components-generate.md`