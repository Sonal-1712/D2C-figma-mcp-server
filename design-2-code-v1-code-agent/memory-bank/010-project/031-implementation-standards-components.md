# Implementation Standards for Components

This document outlines the implementation standards for components in the Design 2 Code project.

## File Structure

Each component must consist of the following files:

1. **Component File**: `{ComponentName}.tsx` - The component implementation
2. **Styling File**: `{ComponentName}.scss` - Component-specific styles
3. **Usage Example File**: `{ComponentName}_page.tsx` - Example showing all variants and states
4. **Storybook File**: `{ComponentName}.stories.tsx` - Storybook stories for all variants and states

**⚠️ CRITICAL: ALL files listed above are MANDATORY and must be created for each component. Missing ANY of these files will result in an incomplete implementation.**

Requirements:
- Import `{ComponentName}.scss` inside `{ComponentName}.tsx`
- Add filename comment at top of each file

Example:
```typescript
// ICAButton.tsx
// ICAButton.scss
```

## TypeScript Implementation

Follow these guidelines when implementing components:

1. **Use TypeScript**: Define interfaces for props with proper typing
   ```typescript
   export interface {ComponentName}Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
     size?: "small" | "large";
     state?: "disabled" | "loading";
   }
   ```
   CRITICAL: Do not use interactive states (e.g., hover, default, focus) as props. Treat them as interaction states instead.

2. **Create Variant Constants**: Define constant objects for variant properties
   ```typescript
   export const BUTTON_SIZE = {
     SMALL: "small",
     LARGE: "large"
   } as const;
   ```

3. **Use forwardRef Pattern**: All components must follow this structure
   ```typescript
   const {ComponentName} = forwardRef<HTMLDivElement, {ComponentName}Props>((props, ref) => {
     const { className, ...rest } = props;

     return (
       <div ref={ref} className={'component-root ' + (className || '')} {...rest}>
         {/* JSX */}
       </div>
     );
   });

   {ComponentName}.displayName = '{ComponentName}';
   export default {ComponentName};
   ```

4. **Do Not Use defaultProps**: Not supported in React 18+. Use default values in parameter destructuring instead.

5. **Do Not Split Variants**: Handle all variants via props inside the same component.

## SCSS Implementation

Follow these guidelines for styling components:

1. **All Styling in SCSS File**: All styling must go inside `{ComponentName}.scss`

2. **Do Not Use**:
   - Tailwind classes
   - Inline styles
   - Third-party UI frameworks

3. **Use Semantic HTML Elements Only**:
   - button
   - div
   - span
   - img
   - input

4. **Design Token Reuse**: Reuse color, typography, and tokens from project styles

   **⚠️ CRITICAL: Design tokens MUST be reused from path `design-2-code-v1/packages/design-system-v1/src/scss`**
   
   **ABSOLUTELY NO HARDCODING of color values is allowed, including:**
   - No hex colors (e.g., `#ffffff`, `#f5f5f5`, `#000000`)
   - No rgb/rgba colors (e.g., `rgb(255, 255, 255)`, `rgba(0, 0, 0, 0.5)`)
   - No named colors (e.g., `white`, `black`, `gray`)
   - No hardcoded border colors
   - No hardcoded background colors
   
   **⚠️ SUPER CRITICAL: If the MCP tool output specifies tokens that don't exist in the design system's token files:**
   1. Check if a semantically equivalent token already exists in the design system
   2. If not, ADD the missing token to the appropriate token file (e.g., colors.scss, typography.scss)
   3. THEN use the token in your component styling
   4. NEVER hardcode color values directly in component SCSS files
   
   **ALL colors MUST use the map-get pattern with appropriate design tokens:**

5. **Style Implementation Example**:
   ```scss
   // CORRECT:
   .component {
     background-color: map-get($wdl-icon, icon-interactive-1);
     color: map-get($wdl-text, text-on-colour);
     border: 1px solid map-get($wdl-border, border-subtle-1);
   }
   
   // INCORRECT:
   .component {
     background-color: #f4f4f4; // WRONG: Hardcoded hex color
     color: black;              // WRONG: Hardcoded named color
     border: 1px solid #e0e0e0; // WRONG: Hardcoded border color
   }
   ```

## Layout and Dimensions Implementation

**⚠️ SUPER CRITICAL: Exact Dimensions Must Be Followed**

When implementing component dimensions, you MUST STRICTLY adhere to the exact dimensions specified in the design:

1. **Width and Height**:
   - All component and element widths MUST EXACTLY match the design specifications
   - All component and element heights MUST EXACTLY match the design specifications
   - NO approximations or "close enough" dimensions are acceptable
   - Use fixed pixel values when specified in the design
   - Use percentage or relative values ONLY when specified in the design

2. **Padding and Margin**:
   - All padding values MUST EXACTLY match the design specifications
   - All margin values MUST EXACTLY match the design specifications
   - Spacing between elements MUST EXACTLY match the design
   - Use the spacing tokens from design system when appropriate

3. **Implementation Verification**:
   - Verify all dimensions with design tools (measure distances in pixels)
   - Compare implemented component dimensions with design specifications
   - Document any intentional deviations and get approval

**IMPLEMENTATION PROCEDURE**:
1. Extract exact pixel dimensions from design specifications
2. Implement exact values in component styling
3. Verify measurements match the design exactly
4. Document all dimension values used

When implementing layouts, follow these conversion guidelines:

- flex → display:flex
- items-center → align-items:center
- justify-center → justify-content:center
- gap-[8px] → gap:8px
- rounded-[8px] → border-radius:8px

## Images & Icons

**⚠️ CRITICAL: ALL images and icons present in the design MUST be implemented in the component.**

1. **Images**: Use img elements with proper alt text
   ```jsx
   <img src={imageAsset} alt="description" />
   ```

   - Verify all images from the design specification are included in the implementation
   - Do not omit any images that appear in the design
   - If an image is conditional (shown only in certain states), implement the conditional logic

2. **Icons**: Use span elements with appropriate class names
   ```jsx
   <span className="icon-chevron-down"></span>
   ```
   
   - Ensure all icons from the design are implemented
   - Use consistent icon implementation across components

## Accessibility

Code must comply with WCAG 2.1 AA standards:

- Use semantic HTML
- Ensure keyboard accessibility
- Add ARIA attributes when necessary
- Include meaningful alt text for images

## Design Alignment Review

A critical step in the component generation process is ensuring that the implemented component accurately reflects the original design specifications. This section outlines the standards for conducting a design alignment review.

### Design Specification Comparison

1. **Re-fetch Original Design Specifications**
   - Use the MCP Figma Server's get_design_context tool to re-fetch the original design specifications
   - Compare the generated component against these specifications

2. **Visual Fidelity Verification**
   - Compare the rendered component in Storybook with the original design screenshot
   - Verify that all visual elements match the design, including:
     - Sizes and dimensions
     - Spacing and layout
     - Corner radii and shape
     - Shadows and effects
     - Element positioning

3. **Color Implementation Verification**
   - Verify that all colors match the design specifications
   - Ensure proper usage of design tokens for colors
   - Check all element states (default, hover, active, focus, disabled) for correct color implementation
   - Compare rendered colors against the design to check for accurate representation

4. **Typography Verification**
   - Check font family, size, weight, and style
   - Verify line height and letter spacing
   - Ensure text alignment matches design
   - Compare against typography tokens from the design system

5. **Layout and Spacing Verification**
   - Check padding and margins around and between elements
   - Verify container dimensions and constraints
   - Check alignment of elements (vertical and horizontal)
   - Ensure consistent spacing following the design

6. **States and Variants Verification**
   - Verify all component states (default, hover, active, focus, disabled, loading)
   - Check all variants specified in the design
   - Ensure transitions between states match design specifications
   - Test interactive behaviors for accurate implementation

7. **Responsive Behavior Verification**
   - Check component behavior at different screen sizes
   - Verify adaptability to container width
   - Ensure layout changes at breakpoints match design specifications

### Documentation of Alignment Issues

When discrepancies are found between the implementation and design:

1. **Document Issues**
   - Screenshot the issue with annotations
   - Note the specific property or behavior that doesn't match
   - Reference the original design specification

2. **Categorize Issues**
   - Visual issues (colors, typography, spacing)
   - Behavioral issues (interaction, states, animations)
   - Responsive issues (layout changes, adaptability)

3. **Prioritize Issues**
   - Critical issues (significantly different from design)
   - Major issues (noticeable differences that affect usability)
   - Minor issues (subtle differences that don't affect functionality)

### Implementation Adjustments

After identifying alignment issues:

1. **Make Targeted Adjustments**
   - Update component styling (SCSS) to match design
   - Modify component logic (TSX) for correct behavior
   - Address state transitions and animations

2. **Retest After Adjustments**
   - Verify fixes in Storybook
   - Check that adjustments don't break other variants or states
   - Validate fixes against original design

3. **Document Changes**
   - Note what was changed to align with design
   - Document any design decisions or compromises made
   - Update component documentation if necessary

## Component Generation Checklist

Before completing a component implementation, ensure that:

- [ ] Component files have been created (TSX, SCSS, Usage Example, Storybook)
- [ ] Component logic has been implemented using TypeScript
- [ ] Component styling has been implemented in SCSS using design tokens (NO HARDCODED COLORS)
- [ ] All variants and states have been implemented
- [ ] All images and icons from the design have been implemented
- [ ] Component is accessible (WCAG 2.1 AA compliant)
- [ ] Storybook stories include all variants and states
- [ ] Design alignment review has been conducted and all issues resolved
- [ ] Code is clean, reusable, and production-ready

**⚠️ FINAL VERIFICATION CHECKLIST:**

1. **Color Usage**: Verify NO hardcoded colors are used - check every color property
2. **Images**: Confirm ALL images from the design are included in the implementation
3. **Files**: Ensure ALL required files are created (TSX, SCSS, _page.tsx, stories.tsx)
4. **Storybook**: Test component in Storybook to verify all variants and states
5. **Design Alignment**: Confirm component visually and functionally matches original design
