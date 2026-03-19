# Build Error Fixes

## SASS Variable Errors

### Issue: Undefined SASS Variables
```
✘ [ERROR] Undefined variable.
   ╷
80 │   background-color: map-get($wdl-status, error);
   │                             ^^^^^^^^^^^
   ╵
```

### Solution:
1. Check SASS variable usage in `.module.scss`
2. Verify variable definition in imported files
3. Replace with correct variable from available maps

Example:
```scss
// Before
.danger {
  color: $white;
  background-color: map-get($wdl-status, error);
  &:hover {
    background-color: color.adjust(map-get($wdl-status, error), $lightness: -10%);
  }
}

// After
.danger {
  color: $white;
  background-color: map-get($wdl-support, support-error);
  &:hover {
    background-color: color.adjust(map-get($wdl-support, support-error), $lightness: -10%);
  }
}
```

## SCSS Loader Configuration

### Issue: No Loader Configured
```
✘ [ERROR] No loader is configured for ".scss" files: ../atoms-v1/src/Button/Button.module.scss
```

### Solution:
1. Check `tsup.config.ts` in package directory
2. Ensure SCSS loader is properly configured
3. Update build configuration if necessary

## SASS Deprecation Warnings

### Global Built-in Functions
```
Deprecation Warning [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.
```

### @import Rule Deprecation
```
@import './wdl_colors.scss';
  ╷
16 │ @import './wdl_colors.scss';
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  warning: @import rules will not be evaluated in a future release of Dart Sass.
  Consider migrating to @use.
```

## Best Practices
1. Check existing components for patterns
2. Use consistent import structure
3. Test in Storybook before committing
4. Fix errors immediately
5. Verify SASS variables exist
6. Follow established naming conventions

# SASS Import Deprecation Fixes

## Context
Project has SASS import deprecation warnings from older `@use` syntax.

## Investigation
```
WARN  ▲ [WARNING] Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.
```

## Solution Attempts
1. Changed `@use` to `@import` in:
   - `wdl_tokens.scss`
   - `PageIndicator.module.scss`
2. Warnings persisted for `map-get` function

## Current Issues
1. With `@import`:
   ```
   ERROR: No loader is configured for ".scss" files
   ```

2. With `@use`:
   ```
   ERROR: Undefined variable.
   --wdl-background-grey: #{map-get($wdl-background, background-grey)};
   ```

## Action Plan
1. **Short-term**: Fix namespacing with `@use`
2. **Medium-term**: Update variable references with correct namespace
   - Example: `map-get(colors.$wdl-background, background-grey)`
3. **Long-term**: Update build config and migrate to newer syntax

# Component Specification Storage

Use this folder structure:
```
specifications/[file_key]/
├── atoms/
│   └── [component-name]-[id]-spec.json
├── molecules/
│   └── [component-name]-[id]-spec.json
├── organizms/
│   └── [component-name]-[id]-spec.json
├── layouts/
│   └── [component-name]-[id]-spec.json
└── flows/
    └── [component-name]-[id]-spec.json
```

# Storybook Build Error Fixes

## Export/Import Mismatch

### Problem
Inconsistent export/import patterns cause Storybook loading failures.

### Solution
1. Update index.ts with both exports:
```typescript
export * from './[ComponentName]';
export { default } from './[ComponentName]';
```

2. Use default import in stories:
```typescript
import ComponentName from './[ComponentName]';
```

## Undefined SCSS Variables

### Problem
Component styles use undefined variables.

### Solution
Check imported files for correct variables:

```scss
/* Before */
font-family: $font-family;

/* After */
font-family: map-get($wdl-fonts, gotham);
```

### Common Variables
- Fonts: `map-get($wdl-fonts, gotham)`
- Colors: `map-get($wdl-grey, 30)`
- Text: `map-get($wdl-text, text-primary)`

## SASS Deprecation Warnings
Multiple warnings from outdated SASS syntax.

## Prevention Recommendations
1. Use consistent export/import patterns
2. Validate SCSS variables
3. Update dependencies regularly
4. Implement pre-commit hooks
5. Add component tests

# Design System Centralization

## Issue: Duplicated Design System Files
Multiple copies of design system files existed:
- In design-system-v1 package root: colors.scss, typography.scss, tokens.scss, global.scss
- In design-system-v1/src/scss: colors.scss, typography.scss, tokens.scss, global.scss
- In application src/styles/design-system: colors.scss, typography.scss, tokens.scss, global.scss, spacing.scss

This created confusion and inconsistency, with some components using one path and others using different paths.

## Solution
1. Keep design system files only in design-system-v1/src/scss
2. Add spacing.scss from application to the design-system-v1 package
3. Update index.scss in the design system to include all files:
   ```scss
   @import './colors';
   @import './typography';
   @import './tokens';
   @import './spacing';
   @import './global';
   ```
4. Update applications to import the entire design system:
   ```scss
   /* Import Wimbledon design system */
   @import '~@wimbledon/design-system-v1';
   ```
5. Remove all application-specific design system files

## Benefits
- Single source of truth for design tokens
- Simplified imports in component and application styles
- Easier maintenance and updates
- Consistent styling across all components and applications

## Related Fixes
For comprehensive guidelines on design system usage, see: [Design System Best Practices](./070-design-system-best-practices.md)
