// TabsItem.tsx
import React, { forwardRef } from 'react';
import './TabsItem.scss';

export const TAB_SIZE = {
  SMALL: 'Small',
  MEDIUM: 'Medium',
  LARGE: 'Large',
} as const;

export const TAB_STATE = {
  DEFAULT: 'Default',
  SELECTED: 'Selected',
  HOVER: 'Hover',
  FOCUS: 'Focus',
  DISABLED: 'Disabled',
  SKELETON: 'Skeleton',
} as const;

export const TAB_ALIGNMENT = {
  LEFT: 'Left',
  CENTRE: 'Centre',
} as const;

export const TAB_THEME = {
  DEFAULT: 'Default',
  INVERSE: 'Inverse',
} as const;

export interface TabsItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * Alignment of the tab content
   */
  alignment?: typeof TAB_ALIGNMENT[keyof typeof TAB_ALIGNMENT];
  
  /**
   * Whether to show the badge
   */
  showBadge?: boolean;
  
  /**
   * Whether to show the tag
   */
  showTag?: boolean;
  
  /**
   * Size of the tab
   */
  size?: typeof TAB_SIZE[keyof typeof TAB_SIZE];
  
  /**
   * State of the tab
   */
  state?: typeof TAB_STATE[keyof typeof TAB_STATE];
  
  /**
   * Theme of the tab
   */
  theme?: typeof TAB_THEME[keyof typeof TAB_THEME];
}

const TabsItem = forwardRef<HTMLDivElement, TabsItemProps>((props, ref) => {
  const {
    className = '',
    alignment = TAB_ALIGNMENT.LEFT,
    showBadge = true,
    showTag = true,
    size = TAB_SIZE.LARGE,
    state = TAB_STATE.DEFAULT,
    theme = TAB_THEME.DEFAULT,
    ...rest
  } = props;

  // Generate classNames based on props
  const baseClass = 'wdl-tabs-item';
  
  const tabClasses = [
    baseClass,
    `${baseClass}--${alignment.toLowerCase()}`,
    `${baseClass}--${size.toLowerCase()}`,
    `${baseClass}--${state.toLowerCase()}`,
    `${baseClass}--${theme.toLowerCase()}`,
    className
  ].filter(Boolean).join(' ');

  // Don't render anything if in skeleton state
  if (state === TAB_STATE.SKELETON) {
    return (
      <div 
        ref={ref} 
        className={`${baseClass} ${baseClass}--skeleton ${baseClass}--${alignment.toLowerCase()} ${baseClass}--${size.toLowerCase()} ${baseClass}--${theme.toLowerCase()} ${className}`} 
        {...rest}
      >
        <div className={`${baseClass}__skeleton-content`}>
          <div className={`${baseClass}__skeleton-line`}></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={tabClasses} {...rest}>
      {showTag && (
        <div className={`${baseClass}__tag ${baseClass}__tag--${size.toLowerCase()}`}>
          <span className={`${baseClass}__tag-text`}>
            {size === TAB_SIZE.SMALL ? 'LIVE' : 'LIVE'}
          </span>
        </div>
      )}
      
      <div className={`${baseClass}__content`}>
        <p className={`${baseClass}__text`}>Tab</p>
      </div>
      
      {showBadge && (
        <div className={`${baseClass}__badge`}></div>
      )}
    </div>
  );
});

TabsItem.displayName = 'TabsItem';

export default TabsItem;