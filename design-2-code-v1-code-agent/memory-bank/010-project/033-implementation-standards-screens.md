# Implementation Standards for Screens

This document outlines the implementation standards for screen components in the Design 2 Code project. Screen components are composed of multiple reusable components and follow specific implementation guidelines to ensure consistency and quality.

## File Structure

Each screen component must be organized in its own directory directly under the src folder with the following structure:

```
design-2-code-v1/packages/screens-v1/src/[ScreenName]/
├── [ScreenName].tsx - The main screen component implementation
├── [ScreenName].css - Screen-specific styles
├── index.ts - Export file
├── components/ - Directory for screen-specific components
│   ├── [ComponentName1]/ - Directory for first screen-specific component
│   │   ├── [ComponentName1].tsx
│   │   ├── [ComponentName1].css
│   │   └── index.ts
│   ├── [ComponentName2]/ - Directory for second screen-specific component
│   │   ├── [ComponentName2].tsx
│   │   ├── [ComponentName2].css
│   │   └── index.ts
│   └── ...
```

1. **Main Screen File**: `[ScreenName].tsx` - The main screen component implementation
2. **Screen Styling File**: `[ScreenName].css` - Screen-specific styles
3. **Screen Index File**: `index.ts` - Export file
4. **Components Directory**: `components/` - Directory containing all screen-specific components

All files must include a filename comment at the top:

```typescript
// [ScreenName].tsx
// [ScreenName].css
// index.ts
```

## Component Reuse and Dependency Management

### 1. **Reuse Existing Components**

CRITICAL: For all instances of components in the screen, you MUST reuse components that are already available in the code base at:
```
design-2-code-v1/packages/components-v1/src
```

If a required component doesn't exist, you must create it following the component generation standards before implementing the screen.

### 2. **Component Name-Based Dependency Discovery**

1. **Extract Component Names Directly from Figma Specification**: 
   - Identify direct child components (like frames named "Heading" and "Content") in the Figma specification

   Example of identifying child components in a specification:
   ```typescript
   // Example of extracting component IDs from the main specification
   const extractDependencyIds = (specification) => {
     const dependencies = [];
     
     // Look through direct children to find frames and components
     if (specification.children) {
       specification.children.forEach(child => {
         // Add the component ID if it exists
         if (child.id) {
           dependencies.push(child.id);
         }
       });
     }
     
     return dependencies;
   };
   ```

2. **Use Matching Components Directly**:
   - When a match is found, use the existing implemented component directly
   - Do NOT fetch additional specifications for these dependencies

   ```tsx
   // Import dependent components based on component name matching
   import { DependentComponent } from '../../components-v1/src/DependentComponent';
   ```

### 3. **Study Component APIs**

After locating dependency components, analyze their API:

```typescript
// Read component files to understand their APIs
const dependentComponentPath = `design-2-code-v1/packages/${type}-v1/src/${name}/${name}.tsx`;
const dependentComponentAPI = readFile(dependentComponentPath);

// Analyze the component's props interface
// Example: Extract props interface from the component file
interface DependentComponentProps {
  // Props extracted from the dependent component
}
```

### 4. **Component Generation Paths**

**⚠️ CRITICAL: Follow the correct paths for generating components: ⚠️**

1. **Dependent Components**:
   - All dependent components identified in the Figma specification MUST be reused from `design-2-code-v1/packages/components-v1/src`
   - If a dependent component doesn't exist, it MUST be generated under `design-2-code-v1/packages/components-v1/src`
   - These are reusable components that may be used by multiple screens
   - Follow the component generation workflow to create these components

2. **Screen-Specific Components (Non-Dependent Components)**:
   - Components that are NOT dependencies but are only relevant to a specific screen MUST be generated within the screen's components directory
   - Path structure: `design-2-code-v1/packages/screens-v1/src/[ScreenName]/components/[ComponentName]/`
   - Each screen-specific component must have its own directory with these files:
     - `[ComponentName].tsx` - Component implementation
     - `[ComponentName].css` - Component-specific styles
     - `index.ts` - Export file
   - These components should not be placed in the components-v1 package
   - The subfolder structure is specifically for these non-dependent, screen-specific components

3. **For Non-Instance UI Elements**:
   - When Figma elements are not instances but should be grouped as components:
   - Determine if the component is reusable across screens:
     - If reusable: Create the component in `design-2-code-v1/packages/components-v1/src`
     - If screen-specific: Create the component in the screen's directory
   - Then use the newly created component in your screen

## TypeScript Implementation

Follow these guidelines when implementing screen components:

1. **Use TypeScript**: Define interfaces for props and use proper typing throughout
   ```tsx
   export interface ScreenProps {
     /**
      * Screen title
      */
     title: string;
     /**
      * Screen description
      */
     description?: string;
     /**
      * Additional CSS class name
      */
     className?: string;
   }
   ```

2. **Use Functional Components**: Use React functional components with hooks
   ```tsx
   const Screen: React.FC<ScreenProps> = ({
     title,
     description,
     className = '',
   }) => {
     // Screen implementation
   };
   ```

3. **Use forwardRef Pattern**: For components that need to forward a ref
   ```tsx
   const Screen = React.forwardRef<HTMLDivElement, ScreenProps>(
     ({ title, description, className = '' }, ref) => {
       // Screen implementation
     }
   );
   ```

4. **Do Not Use Component.defaultProps**: Not supported in React 18+
   ```tsx
   // Incorrect
   Screen.defaultProps = {
     className: ''
   };

   // Correct - use default values in parameter destructuring
   const Screen: React.FC<ScreenProps> = ({
     title,
     description,
     className = '',
   }) => {
     // Screen implementation
   };
   ```

## Component Composition

### 1. **Import Child Components**

Properly import all child components, including both shared components and screen-specific components:

```tsx
// Import shared components from components-v1 package
import { Button } from '../../components-v1/src/Button';
import { InputField } from '../../components-v1/src/InputField';

// Import screen-specific components from the screen's components directory
import { HeaderSection } from './components/HeaderSection';
import { ContentBlock } from './components/ContentBlock';
```

### 2. **Pass Only Necessary Props**

When using dependent components, pass only the props they need:

```tsx
<DependentComponent
  prop1={value1}
  prop2={value2}
  // Only pass required or relevant props
/>
```

### 3. **Handle State Management**

Manage state at the appropriate level:

```tsx
const [isVisible, setIsVisible] = useState(true);

const handleDismiss = () => {
  setIsVisible(false);
  if (onDismiss) {
    onDismiss();
  }
};
```

### 4. **Implement Event Handlers**

Create event handlers to manage interactions between components:

```tsx
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Escape' && dismissible) {
    handleDismiss();
  }
};
```

## CSS Implementation

Follow these guidelines for styling screen components:

### 1. **Design Token Reuse**

**⚠️ CRITICAL: Design tokens MUST be reused from path `design-2-code-v1/packages/design-system-v1/src/scss`**
   
**ABSOLUTELY NO HARDCODING of color values is allowed, including:**
- No hex colors (e.g., `#ffffff`, `#f5f5f5`, `#000000`)
- No rgb/rgba colors (e.g., `rgb(255, 255, 255)`, `rgba(0, 0, 0, 0.5)`)
- No named colors (e.g., `white`, `black`, `gray`)
- No hardcoded border colors
- No hardcoded background colors

**⚠️ SUPER CRITICAL: If the Figma specification specifies tokens that don't exist in the design system's token files:**
1. Check if a semantically equivalent token already exists in the design system
2. If not, ADD the missing token to the appropriate token file (e.g., colors.scss, typography.scss)
3. THEN use the token in your component styling
4. NEVER hardcode color values directly in component CSS files

**ALL colors MUST use the CSS variable pattern with appropriate design tokens:**

```css
/* CORRECT: */
.component {
  background-color: var(--wdl-icon-interactive-1);
  color: var(--wdl-text-on-colour);
  border: 1px solid var(--wdl-border-subtle-1);
}

/* INCORRECT: */
.component {
  background-color: #f4f4f4; /* WRONG: Hardcoded hex color */
  color: black;              /* WRONG: Hardcoded named color */
  border: 1px solid #e0e0e0; /* WRONG: Hardcoded border color */
}
```

### 2. **Extract Styling from Figma Variables**

Map all Figma styling variables to appropriate design tokens:

- **Colors**: Map to color tokens in the design system
- **Typography**: Map to typography tokens
- **Spacing**: Map to spacing tokens
- **Border radius**: Map to border radius tokens

Example of mapping Figma variables to design tokens:
```css
/* Figma: Background/Grey-10 -> Design System: --wdl-background-grey-10 */
.container {
  background-color: var(--wdl-background-grey-10);
}

/* Figma: Text/Default -> Design System: --wdl-text-default */
.heading {
  color: var(--wdl-text-default);
  font-family: var(--wdl-fonts-gotham);
  font-size: var(--wdl-font-sizes-heading-xl);
  font-weight: var(--wdl-font-weights-bold);
}
```

### 3. **Layout and Dimensions Implementation**

**⚠️ SUPER CRITICAL: Exact Dimensions Must Be Followed**

When implementing component dimensions, you MUST STRICTLY adhere to the exact dimensions specified in the Figma design:

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
1. Extract exact pixel dimensions from Figma design specifications
2. Implement exact values in component styling
3. Verify measurements match the design exactly
4. Document all dimension values used

When implementing layouts, follow these conversion guidelines:

- flex → display: flex
- items-center → align-items: center
- justify-center → justify-content: center
- gap-[8px] → gap: 8px
- rounded-[8px] → border-radius: 8px

### 4. **CSS Import Structure**

Import design system CSS variables and use them consistently throughout your component.

### 5. **Component Layout**

Use flexbox or grid for component layout:
```css
.screenContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
}

.screenContainer .content {
  flex: 1;
  min-width: 0; /* Prevent flex item from overflowing */
}

.screenContainer .sidebar {
  flex-shrink: 0;
}
```

### 6. **No Tailwind or CVA**

- Do not use Tailwind CSS for styling
- Avoid CVA variant systems
- All styling must be in CSS files

## Images and Assets

### 1. **Fetch All Images**

**⚠️ CRITICAL: All images used in the Figma design MUST be fetched and used in the code implementation**

- Extract image URLs from the Figma design
- Download and save images to appropriate locations
- Use the images in your components with proper alt text

```tsx
// Image usage example
<img src="/path/to/image.png" alt="Descriptive alt text" className={styles.image} />
```

### 2. **Image Dimensions**

Ensure images have the exact same dimensions as in the Figma design:

```css
.image {
  width: 240px;
  height: 160px;
  object-fit: cover;
}
```

## Responsive Behavior

Ensure the screen is responsive according to the design specifications:

```css
.screenContainer {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .screenContainer {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .screenContainer {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## Sample Application Integration

**CRITICAL: All screen components MUST be tested in the sample application**

Integrate screens into the sample application to test them in a real application context:

1. **Import Screen**: Import the screen using the correct path
   ```tsx
   // Example import in sample-application-v1/src/pages/index.tsx
   import { Screen } from '../../../../packages/screens-v1/src/Screen';
   ```

2. **Screen Usage**: Use the screen with appropriate props
   ```tsx
   // Example usage in sample application
   <Screen
     title="Welcome to the Application"
     description="This is a demonstration of the Screen component in a real application context."
   />
   ```

3. **Integration Guidelines**:
   - Choose the appropriate page/location for the screen based on its purpose
   - Configure the screen with realistic props that represent actual use cases
   - Ensure the screen is responsive and works well in the application layout
   - Test all interactive features in the application context

4. **Styling Considerations**:
   - Screens should use their own CSS styles
   - Handle any integration-specific styling in the page CSS
   - Ensure the screen appearance is consistent with the design specifications
   - Test responsiveness in the application context

5. **Testing Methodology**:
   - Test all interactive elements (buttons, inputs, etc.)
   - Verify all states and variants function correctly
   - Check for any console errors or warnings
   - Test responsiveness at various screen sizes
   - Validate accessibility in the application context

6. **Sample Implementation Example**:

   Page structure in sample application:
   ```tsx
   // sample-application-v1/src/pages/screen-example.tsx
   import React, { useState } from 'react';
   import styles from '../styles/ScreenExample.css';
   
   // Import screen component
   import { Screen } from '../../../../packages/screens-v1/src/Screen';
   
   const ScreenExamplePage: React.FC = () => {
     return (
       <div className={styles.container}>
         <h1>Sample Application</h1>
         
         {/* Screen demonstration */}
         <div className={styles.screenDemo}>
           <Screen
             title="Welcome to the Sample Application"
             description="This demonstrates the Screen component in a real application context."
           />
         </div>
       </div>
     );
   };
   
   export default ScreenExamplePage;
   ```

## Index File Implementation

Create an index.ts file that exports both named and default exports:

```tsx
// index.ts
export * from './Screen';
export { default } from './Screen';
```

## Component Export Implementation

Ensure the component is exported correctly in the component file:

```tsx
// Screen.tsx
export const Screen: React.FC<ScreenProps> = ({ ... }) => {
  // Component implementation
};

export default Screen;
```

## Accessibility Requirements

All screens must comply with WCAG 2.1 AA standards:

1. **Semantic HTML**: Use semantic HTML elements for proper structure
   ```tsx
   <header>
     <h1>{title}</h1>
   </header>
   <main>
     <section>
       <h2>Section Title</h2>
       <p>{content}</p>
     </section>
   </main>
   ```

2. **ARIA Attributes**: Use ARIA attributes when necessary
   ```tsx
   <button 
     aria-label="Close" 
     aria-expanded={isExpanded}
     onClick={handleClose}
   >
     Close
   </button>
   ```

3. **Keyboard Navigation**: Ensure screens are keyboard navigable
   ```tsx
   const handleKeyDown = (event: React.KeyboardEvent) => {
     if (event.key === 'Enter' || event.key === ' ') {
       handleAction();
     }
   };

   <div 
     role="button" 
     tabIndex={0}
     onKeyDown={handleKeyDown}
     onClick={handleAction}
   >
     Action
   </div>
   ```

4. **Color Contrast**: Ensure sufficient color contrast
   - All text must have a contrast ratio of at least 4.5:1 against its background
   - Large text (18pt+) must have a contrast ratio of at least 3:1

5. **Screen Reader Support**: Ensure screens work well with screen readers
   ```tsx
   <img 
     src="image.png" 
     alt="Descriptive text about the image" 
     aria-hidden={false} 
   />

   <span className={styles.icon} aria-hidden="true"></span>
   ```

## Visual Fidelity to Figma Design

**⚠️ CRITICAL: The implemented screen MUST match the Figma design with high accuracy**

To ensure visual fidelity:

1. **Compare dimensions** between the implemented screen and the Figma design
2. **Check colors** to ensure they match the design system tokens
3. **Verify typography** including font family, size, weight, and line height
4. **Validate spacing** between elements
5. **Check border radiuses** and other visual details
6. **Test at multiple viewport sizes** to ensure responsive behavior matches design intent

## Troubleshooting Common Issues

### Component Dependency Issues

If a screen depends on components that don't exist in the codebase:

1. Stop screen implementation immediately
2. Create the missing component under `design-2-code-v1/packages/components-v1/src`
3. Then resume the screen implementation

Example message:
```
I've analyzed the screen and identified that it depends on a component "SocialButton" that doesn't exist in the codebase.

Before I can implement the screen, I need to:
1. Create the SocialButton component first
2. Then implement the screen using the created component
```

### CSS Variable Errors

If you encounter undefined CSS variable errors:

```
Property value expected
background-color: var(--wdl-status-error);
```

Follow these steps:
1. Check which CSS file contains the variable definition
2. Check for typos in variable names
3. Ensure the correct import path is used
4. Look for an equivalent variable that might be used instead
5. Add the missing variable to the appropriate design system file if necessary

Example fix:
```css
/* Before */
.danger {
  background-color: var(--wdl-status-error);
}

/* After */
.danger {
  background-color: var(--wdl-support-error);
}
```

### Export/Import Mismatch Errors

If screens aren't showing up in the sample application due to export/import mismatches:

1. Update the index.ts file to export both named and default exports:
   ```typescript
   export * from './Screen';
   export { default } from './Screen';
   ```

2. Ensure the import statements are correct:
   ```typescript
   // In sample application
   import { Screen } from '../../../../packages/screens-v1/src/Screen';
   ```

### Sample Application Integration Issues

If you encounter issues when integrating the screen into the sample application:

1. **Path Issues**: Verify that the import path is correct
   ```typescript
   // Correct path
   import { Screen } from '../../../../packages/screens-v1/src/Screen';
   
   // Common incorrect paths
   import { Screen } from '../../packages/screens-v1/src/Screen'; // Wrong level
   import Screen from '../../../../packages/screens-v1/src/Screen'; // Missing named export
   ```

2. **Build Issues**: Ensure the screen builds correctly before integrating
   ```
   cd design-2-code-v1 && pnpm build
   ```

3. **Props Issues**: Verify that all required props are provided with appropriate values
   ```tsx
   // Incorrect - missing required props
   <Screen />
   
   // Correct - all required props provided
   <Screen
     title="Screen Title"
     description="Screen description"
   />
   ```

4. **Style Issues**: Check for style conflicts between screen styles and application styles
   ```css
   /* Add scoping in application styles if needed */
   .screenWrapper .screenName {
     /* Override styles if necessary */
   }
   ```

## Screen Implementation Checklist

Before completing a screen implementation, ensure that:

- [ ] Screen specification has been extracted from Figma
- [ ] Screen structure, variants, and properties have been analyzed
- [ ] Screen dependencies have been identified and verified to exist in the codebase
- [ ] Any missing components have been created first
- [ ] All images and assets have been extracted from the design
- [ ] Screen files have been created (TSX, CSS, Index)
- [ ] Screen logic and styling have been implemented
- [ ] All design tokens have been properly used (no hardcoded values)
- [ ] Screen visually matches the Figma design with high accuracy
- [ ] Screen has been integrated into the sample application
- [ ] Screen has been tested in the sample application context
- [ ] Screen usage and props have been documented
- [ ] All errors have been fixed
- [ ] Screen is responsive in the sample application
- [ ] Screen is accessible in the sample application