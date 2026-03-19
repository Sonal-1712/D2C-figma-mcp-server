// SectionHero.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SectionHero, { BREAKPOINTS, SIZES, THEMES } from './SectionHero';

/**
 * ## SectionHero
 * 
 * A versatile component for section headers with various sizes, themes, and optional elements
 */
const meta: Meta<typeof SectionHero> = {
  title: 'Components/SectionHero',
  component: SectionHero,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile section header component with multiple size and theme variations.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: { 
      control: 'text', 
      description: 'Main title for the section' 
    },
    subtitle: { 
      control: 'text', 
      description: 'Subtitle or short description for additional context' 
    },
    tag: { 
      control: 'text', 
      description: 'Tag or small text that appears above the title' 
    },
    linkText: { 
      control: 'text', 
      description: 'Link text for the optional CTA' 
    },
    linkUrl: { 
      control: 'text', 
      description: 'URL for the optional CTA' 
    },
    breakpoint: {
      control: 'select',
      options: Object.values(BREAKPOINTS),
      description: 'Viewport breakpoint'
    },
    showLink: { 
      control: 'boolean', 
      description: 'Whether to show the link' 
    },
    showSubtitle: { 
      control: 'boolean', 
      description: 'Whether to show the subtitle' 
    },
    showTooltip: { 
      control: 'boolean', 
      description: 'Whether to show the tooltip' 
    },
    size: {
      control: 'select',
      options: Object.values(SIZES),
      description: 'Size variant for the section hero'
    },
    theme: {
      control: 'select',
      options: Object.values(THEMES),
      description: 'Theme variant for the section hero'
    },
    className: { 
      control: 'text', 
      description: 'CSS class name for custom styling' 
    },
    onLinkClick: { 
      action: 'clicked', 
      description: 'Handler for the CTA link click' 
    }
  }
};

export default meta;
type Story = StoryObj<typeof SectionHero>;

// Default story - Desktop, Max brand, Default theme
export const Default: Story = {
  args: {
    title: 'SECTION',
    subtitle: 'Use an optional subtitle to add quick context or scope to the section. Keep it brief make sure it adds new, relevant detail rather than repeating the title.',
    tag: 'TAG/SUBTITLE',
    linkText: 'Link',
    linkUrl: '#',
    breakpoint: BREAKPOINTS.DESKTOP,
    showLink: false,
    showSubtitle: true,
    showTooltip: true,
    size: SIZES.MAX_BRAND,
    theme: THEMES.DEFAULT
  }
};

// Desktop, Max brand, Gold theme
export const DesktopMaxGold: Story = {
  args: {
    ...Default.args,
    theme: THEMES.GOLD
  }
};

// Desktop, Max brand, Inverse Purple theme
export const DesktopMaxInversePurple: Story = {
  args: {
    ...Default.args,
    theme: THEMES.INVERSE_PURPLE
  }
};

// Desktop, Max brand, Inverse Green theme
export const DesktopMaxInverseGreen: Story = {
  args: {
    ...Default.args,
    theme: THEMES.INVERSE_GREEN
  }
};

// Mobile, Max brand, Default theme
export const MobileMaxDefault: Story = {
  args: {
    ...Default.args,
    breakpoint: BREAKPOINTS.MOBILE
  }
};

// Mobile, Max brand, Gold theme
export const MobileMaxGold: Story = {
  args: {
    ...Default.args,
    breakpoint: BREAKPOINTS.MOBILE,
    theme: THEMES.GOLD
  }
};

// Mobile, Max brand, Inverse Purple theme
export const MobileMaxInversePurple: Story = {
  args: {
    ...Default.args,
    breakpoint: BREAKPOINTS.MOBILE,
    theme: THEMES.INVERSE_PURPLE
  }
};

// Mobile, Max brand, Inverse Green theme
export const MobileMaxInverseGreen: Story = {
  args: {
    ...Default.args,
    breakpoint: BREAKPOINTS.MOBILE,
    theme: THEMES.INVERSE_GREEN
  }
};

// Desktop, Medium size, Default theme
export const DesktopMedium: Story = {
  args: {
    ...Default.args,
    title: 'Title',
    subtitle: 'Subtitle /Short description',
    tag: undefined,
    size: SIZES.MEDIUM
  }
};

// Desktop, Small size, Default theme
export const DesktopSmall: Story = {
  args: {
    ...Default.args,
    title: 'Title',
    subtitle: 'Subtitle /Short description',
    tag: undefined,
    size: SIZES.SMALL
  }
};

// Mobile, Small size, Default theme
export const MobileSmall: Story = {
  args: {
    ...Default.args,
    title: 'Title',
    subtitle: 'Subtitle /Short description',
    tag: undefined,
    breakpoint: BREAKPOINTS.MOBILE,
    size: SIZES.SMALL
  }
};

// With Link
export const WithLink: Story = {
  args: {
    ...Default.args,
    showLink: true
  }
};

// Without Subtitle
export const WithoutSubtitle: Story = {
  args: {
    ...Default.args,
    showSubtitle: false
  }
};

// Without Tooltip
export const WithoutTooltip: Story = {
  args: {
    ...Default.args,
    size: SIZES.SMALL,
    showTooltip: false
  }
};

// All Variants
export const AllVariants: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <div>
        <h2 style={{ marginBottom: '24px' }}>Desktop - Max (brand) Size Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          <SectionHero 
            title="DEFAULT THEME"
            subtitle="This is the default theme for max brand size" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.MAX_BRAND}
            theme={THEMES.DEFAULT}
          />
          
          <SectionHero 
            title="GOLD THEME"
            subtitle="This is the gold theme for max brand size" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.MAX_BRAND}
            theme={THEMES.GOLD}
          />
          
          <SectionHero 
            title="INVERSE PURPLE THEME"
            subtitle="This is the inverse purple theme for max brand size" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.MAX_BRAND}
            theme={THEMES.INVERSE_PURPLE}
          />
          
          <SectionHero 
            title="INVERSE GREEN THEME"
            subtitle="This is the inverse green theme for max brand size" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.MAX_BRAND}
            theme={THEMES.INVERSE_GREEN}
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '24px' }}>Desktop - Medium & Small Size Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <SectionHero 
            title="Medium Size"
            subtitle="This is the medium size variant" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.MEDIUM}
            theme={THEMES.DEFAULT}
            showTooltip={true}
          />
          
          <SectionHero 
            title="Small Size"
            subtitle="This is the small size variant" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.SMALL}
            theme={THEMES.DEFAULT}
            showTooltip={true}
          />
          
          <SectionHero 
            title="Small Size with Link"
            subtitle="This is the small size variant with a link" 
            breakpoint={BREAKPOINTS.DESKTOP}
            size={SIZES.SMALL}
            theme={THEMES.DEFAULT}
            showTooltip={true}
            showLink={true}
          />
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '24px' }}>Mobile Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '320px' }}>
          <SectionHero 
            title="MAX BRAND"
            subtitle="This is the mobile max brand size" 
            breakpoint={BREAKPOINTS.MOBILE}
            size={SIZES.MAX_BRAND}
            theme={THEMES.DEFAULT}
          />
          
          <SectionHero 
            title="Small Size"
            subtitle="This is the mobile small size variant" 
            breakpoint={BREAKPOINTS.MOBILE}
            size={SIZES.SMALL}
            theme={THEMES.DEFAULT}
            showTooltip={true}
          />
        </div>
      </div>
    </div>
  )
};