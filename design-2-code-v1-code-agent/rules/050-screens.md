# Screen Rules

This document outlines the critical rules and conditions for screen generation in the Design 2 Code project. These rules define what should be done, while implementation details of how to do it are in the implementation standards.

## References

- For step-by-step workflow process: `design-2-code-v1-code-agent/workflows/screens-generate-updated.md`
- For code implementation standards: `design-2-code-v1-code-agent/memory-bank/010-project/033-implementation-standards-screens-updated.md`

## Critical Rules for Screen Generation

### 1. **Screen Specifications**
   - Always use complete specifications from the MCP tool
   - Never proceed with incomplete specifications
   - If specifications are truncated, stop and notify the user immediately

### 2. **Screen Organization**
   - All screen components must be placed directly under the src directory
   - Each screen must have its own directory with a hierarchical organization:
     ```
     design-2-code-v1/packages/screens-v1/src/[ScreenName]/
     ├── [ScreenName].tsx - Main screen component
     ├── [ScreenName].css - Screen styles
     ├── index.ts - Export file
     ├── components/ - Directory for screen-specific components
     │   ├── [ComponentName1]/ - First component directory
     │   ├── [ComponentName2]/ - Second component directory
     │   └── ...
     ```
   - This structure must be strictly followed for all screen implementations

### 3. Screen Overwrite Protection

**CRITICAL**: Before proceeding with implementation, you MUST check if a screen with the same name already exists in the packages directory. If it does:

1. **NEVER automatically overwrite an existing screen**
2. **ALWAYS ask the user for explicit permission before proceeding**
3. **Provide information about the existing screen to help the user make an informed decision**

When a screen with the same name exists, provide the user with clear options:
- Override the existing screen
- Create a screen with a different name
- Cancel the operation

Only proceed with overwriting if the user explicitly chooses to override the existing screen.

### 4. Component Dependency Analysis

**⚠️ CRITICAL DEPENDENCY ANALYSIS PROCESS: ⚠️**

For each dependent component identified in the initial specification:

1. **Locate Matching Component**
   - Check the matching component at location: `design-2-code-v1/packages/components-v1/src`
   - When a match is found, use that component's name as the dependency
   - Check if that component exists in the corresponding packages directory
   - Use the existing component implementation as the dependency without fetching new specifications

2. **Handle Missing Components**
   - If a required component is missing, it MUST be generated under `design-2-code-v1/packages/components-v1/src`
   - Follow the component generation workflow to create these missing components
   - Do not proceed with screen implementation until all dependencies are created

3. **Component Organization**
   - **Dependent Components**: 
     - All dependent components identified in the Figma specification MUST be reused from the components-v1 package
     - If a dependent component doesn't exist, it MUST be generated in `design-2-code-v1/packages/components-v1/src`
   - **Screen-Specific (Non-Dependent) Components**:
     - Components that are NOT dependencies but are only needed for a specific screen MUST be created within the screen's components directory
     - Path structure: `design-2-code-v1/packages/screens-v1/src/[ScreenName]/components/[ComponentName]/`
     - Each screen-specific component must have its own directory with:
       - `[ComponentName].tsx` - Component implementation
       - `[ComponentName].css` - Component styles
       - `index.ts` - Export file
     - These screen-specific components should not be placed in the components-v1 package
     - The subfolder structure is specifically for these non-dependent, screen-specific components

### 5. Sample Application Integration

**⚠️ CRITICAL: All screen components MUST be tested in sample application ⚠️**

- Screens must work in integrated (sample application) environments
- Each screen must be demonstrated in the sample application with real usage examples
- Screens must be imported from the correct package path into the sample application
- Verify all screen interactions, states, and edge cases in the actual application context

## Dependency Checking Rules

### Critical Rules for Dependency Checking

1. **Mandatory Dependency Verification**
   - Before starting any screen implementation, you MUST verify that all dependent components exist in the packages directory
   - This verification cannot be skipped under any circumstances
   - If any dependent component is missing, you MUST stop code generation immediately

2. **Missing Dependency Handling**
   - When a dependent component is missing, provide a clear and detailed message to the user including:
     - The name of the missing component(s)
     - The component_id of each missing component
     - Instructions to generate the missing component(s) first

3. **Multiple Missing Dependencies**
   - If multiple dependent components are missing, list all of them in your message
   - Provide details for each missing component
   - Suggest an order for generating the missing components if there are dependencies between them

### Dependency Report Format

When reporting missing dependencies, use this formal format:

```
# Dependency Analysis Report for SystemBanner

## Dependencies Found:
- Social button: - STATUS: MISSING
- Content: - STATUS: EXISTS (packages/components-v1/src/Content)

## Missing Dependencies:
- Social button

## Required Action:
According to the nested component generation rules, I need to stop code generation when dependent components are not found in the packages directory.

Before I can implement the SystemBanner component, you need to:

1. Generate the Section hero component first
2. Generate the Utility button component
3. Generate the Social button component
4. Then request the SystemBanner component generation again

I recommend generating the components in the order listed above, as there might be dependencies between them.
```

## Screen Locations

Screens must be stored in the following location with the required hierarchical structure:
```
design-2-code-v1/packages/screens-v1/src/[ScreenName]/
├── [ScreenName].tsx
├── [ScreenName].css
├── index.ts
├── components/
│   ├── [ComponentName1]/
│   │   ├── [ComponentName1].tsx
│   │   ├── [ComponentName1].css
│   │   └── index.ts
│   └── ...
```

For example:
```
design-2-code-v1/packages/screens-v1/src/Form/
├── Form.tsx
├── Form.css
├── index.ts
├── components/
│   ├── FormHeader/
│   │   ├── FormHeader.tsx
│   │   ├── FormHeader.css
│   │   └── index.ts
│   ├── FormInputGroup/
│   │   ├── FormInputGroup.tsx
│   │   ├── FormInputGroup.css
│   │   └── index.ts
│   └── ...
```

## Screen Usage

### Sample Application
- All screens must be demonstrable in the sample application
- Sample application must show real-world usage examples
- Import screens using the correct package path:
  ```tsx
  import { ScreenName } from '../../../../packages/screens-v1/src/ScreenName';
  ```
- Screens must be configured with appropriate props
- Screens must be integrated into appropriate pages/sections
- Screens must be properly styled in the application context
- Screens must respond correctly to user interactions
- Sample application integration is MANDATORY for all screen components

## General Rules

1. **Do not modify JSON specifications**
   - Never optimize the MCP tool response
   - Preserve complete data from Figma

2. **Screen Completeness**
   - A screen is only considered complete when it:
     - Functions correctly in the sample application
     - Has complete documentation
     - Is properly exported from its package

## Implementation Reference

For all code implementation details including:
- File structure
- TypeScript implementation patterns
- CSS styling guidelines
- Best practices for screen development
- Troubleshooting common issues
- Implementation checklists

Refer to: `design-2-code-v1-code-agent/memory-bank/010-project/033-implementation-standards-screens.md`
