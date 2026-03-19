// Breadcrumb.tsx
import React, { forwardRef } from 'react';
import './Breadcrumb.scss';

// Define constants for variant properties
export const BREADCRUMB_BREAKPOINT = {
  DESKTOP: 'Desktop',
  MOBILE: 'Mobile'
} as const;

export const BREADCRUMB_THEME = {
  DEFAULT: 'Default',
  INVERSE_GREEN: 'Inverse - green',
  INVERSE_PURPLE: 'Inverse - purple'
} as const;

export const BREADCRUMB_TYPE = {
  BREADCRUMBS: 'Breadcrumbs',
  BACK: 'Back'
} as const;

// Define the props interface
export interface BreadcrumbProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /**
   * Optional CSS class name
   */
  className?: string;
  
  /**
   * The breakpoint to use for responsive layout
   * @default 'Desktop'
   */
  breakpoint?: typeof BREADCRUMB_BREAKPOINT[keyof typeof BREADCRUMB_BREAKPOINT];
  
  /**
   * The theme to apply to the breadcrumb
   * @default 'Default'
   */
  theme?: typeof BREADCRUMB_THEME[keyof typeof BREADCRUMB_THEME];
  
  /**
   * The type of breadcrumb to display
   * @default 'Breadcrumbs'
   */
  type?: typeof BREADCRUMB_TYPE[keyof typeof BREADCRUMB_TYPE];
  
  /**
   * The list of breadcrumb items to display (only applicable for Breadcrumbs type)
   */
  items?: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

// SVG components for icons
const ChevronRightIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M3 6L5 4L3 2" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 12L6 8L10 4" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const OverflowMenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 5.5C10.8284 5.5 11.5 4.82843 11.5 4C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4C8.5 4.82843 9.17157 5.5 10 5.5Z" 
      fill="currentColor"
    />
    <path 
      d="M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z" 
      fill="currentColor"
    />
    <path 
      d="M10 17.5C10.8284 17.5 11.5 16.8284 11.5 16C11.5 15.1716 10.8284 14.5 10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5Z" 
      fill="currentColor"
    />
  </svg>
);

// Default items for demonstration when none are provided
const defaultItems = [
  { label: 'Link 1', href: '#' },
  { label: 'Link 2', href: '#' },
  { label: 'Link 3', href: '#' },
  { label: 'Link 4', href: '#' },
  { label: 'Page', current: true }
];

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    { 
      className = '',
      breakpoint = BREADCRUMB_BREAKPOINT.DESKTOP,
      theme = BREADCRUMB_THEME.DEFAULT,
      type = BREADCRUMB_TYPE.BREADCRUMBS,
      items = defaultItems,
      ...rest
    }, 
    ref
  ) => {
    // Determine if the component is a back button
    const isBackButton = type === BREADCRUMB_TYPE.BACK;
    
    // Determine if the theme is inverse (green or purple)
    const isInverse = theme === BREADCRUMB_THEME.INVERSE_GREEN || theme === BREADCRUMB_THEME.INVERSE_PURPLE;
    
    // Generate modifier classes based on props
    const modifierClasses = [
      `breadcrumb--${breakpoint.toLowerCase()}`,
      `breadcrumb--${theme.toLowerCase().replace(' - ', '-')}`,
      `breadcrumb--${type.toLowerCase()}`
    ].join(' ');

    if (isBackButton) {
      return (
        <nav 
          ref={ref as React.Ref<HTMLElement>} 
          className={`breadcrumb ${modifierClasses} ${className}`}
          aria-label="Back"
          {...rest}
        >
          <div className="breadcrumb__container">
            <a href="#" className="breadcrumb__back-link">
              <span className="breadcrumb__icon">
                <ArrowLeftIcon />
              </span>
              <span className="breadcrumb__text">Back</span>
            </a>
          </div>
        </nav>
      );
    }

    // For mobile breadcrumbs, we just show the overflow menu and current page
    if (breakpoint === BREADCRUMB_BREAKPOINT.MOBILE && type === BREADCRUMB_TYPE.BREADCRUMBS) {
      // Get the current page label (defaulting to "Page")
      const currentItem = items.length > 0 ? 
        (items.find(item => item.current) || items[items.length - 1]) : 
        { label: "Page" };
      
      // TypeScript non-null assertion to confirm the label exists
      const label = currentItem?.label!;
      
      return (
        <nav 
          ref={ref as React.Ref<HTMLElement>} 
          className={`breadcrumb ${modifierClasses} ${className}`}
          aria-label="Breadcrumb"
          {...rest}
        >
          <div className="breadcrumb__container">
            <button className="breadcrumb__overflow-menu" aria-label="Show breadcrumb menu">
              <OverflowMenuIcon />
            </button>
            <span className="breadcrumb__current">{label}</span>
          </div>
        </nav>
      );
    }

    // Standard desktop breadcrumbs
    return (
      <nav 
        ref={ref as React.Ref<HTMLElement>} 
        className={`breadcrumb ${modifierClasses} ${className}`}
        aria-label="Breadcrumb"
        {...rest}
      >
        <div className="breadcrumb__container">
          <ol className="breadcrumb__list">
            {items.map((item, index) => {
              const isLastItem = index === items.length - 1;
              
              return (
                <li 
                  key={index} 
                  className={`breadcrumb__item ${isLastItem ? 'breadcrumb__item--current' : ''}`}
                >
                  {isLastItem ? (
                    <span className="breadcrumb__current">{item.label}</span>
                  ) : (
                    <>
                      <a href={item.href || '#'} className="breadcrumb__link">
                        {item.label}
                      </a>
                      <span className="breadcrumb__separator">
                        <ChevronRightIcon />
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;