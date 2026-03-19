/**
 * Type declarations for @design-2-code/components-v1
 */
declare module '@design-2-code/components-v1' {
  import React from 'react';
  
  // Breadcrumb
  export interface BreadcrumbProps {
    className?: string;
    type?: 'Back' | 'Default';
    breakpoint?: string;
  }
  export const Breadcrumb: React.FC<BreadcrumbProps>;
  
  // GlobalFooter
  export interface GlobalFooterProps {
    className?: string;
    breakpoint?: string;
  }
  export const GlobalFooter: React.FC<GlobalFooterProps>;
  
  // NavigationHeader
  export interface NavigationHeaderProps {
    className?: string;
    breakpoint?: string;
    authentication?: string;
    theme?: string;
    logo?: React.ReactNode;
    quicklinks?: {
      text: string;
      href?: string;
      hasExternalIcon?: boolean;
      onClick?: () => void;
    }[];
    eventDateText?: string;
    onMenuClick?: () => void;
    onSearchClick?: () => void;
    onUserClick?: () => void;
  }
  export const NavigationHeader: React.FC<NavigationHeaderProps>;
  
  // Sound
  export interface SoundProps {
    className?: string;
    onClick?: () => void;
  }
  export const Sound: React.FC<SoundProps>;
  
  // Volume
  export interface VolumeProps {
    className?: string;
    volume?: boolean;
    onChange?: (value: boolean) => void;
  }
  export const Volume: React.FC<VolumeProps>;
  
  // Expand
  export interface ExpandProps {
    className?: string;
    onClick?: () => void;
  }
  export const Expand: React.FC<ExpandProps>;
  
  // Badge
  export interface BadgeProps {
    className?: string;
    type?: string;
  }
  export const Badge: React.FC<BadgeProps>;
}