// SectionHero_page.tsx
import React, { useState } from 'react';
import SectionHero, { BREAKPOINTS, SIZES, THEMES } from './SectionHero';
import './SectionHeroPage.scss';

const SectionHeroPage: React.FC = () => {
  // State to keep track of selected options for the interactive demo
  const [selectedBreakpoint, setSelectedBreakpoint] = useState<string>(BREAKPOINTS.DESKTOP);
  const [selectedSize, setSelectedSize] = useState<string>(SIZES.MAX_BRAND);
  const [selectedTheme, setSelectedTheme] = useState<string>(THEMES.DEFAULT);
  const [showSubtitle, setShowSubtitle] = useState<boolean>(true);
  const [showLink, setShowLink] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const [customTitle, setCustomTitle] = useState<string>('SECTION HERO');
  const [customSubtitle, setCustomSubtitle] = useState<string>(
    'Use an optional subtitle to add quick context or scope to the section. Keep it brief make sure it adds new, relevant detail rather than repeating the title.'
  );

  // Handle option selection
  const handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const value = 
      event.target.type === 'checkbox' 
        ? (event.target as HTMLInputElement).checked 
        : event.target.value;
    setter(value);
  };

  return (
    <div className="section-hero-page">
      <h1 className="section-hero-page__title">SectionHero Component</h1>
      
      <section className="section-hero-page__section">
        <h2 className="section-hero-page__heading">Interactive Demo</h2>
        
        <div className="section-hero-page__controls">
          <div className="section-hero-page__control-group">
            <h3 className="section-hero-page__control-heading">Main Options</h3>
            <div className="section-hero-page__control-row">
              <div className="section-hero-page__control">
                <label htmlFor="breakpoint">Breakpoint:</label>
                <select 
                  id="breakpoint" 
                  value={selectedBreakpoint} 
                  onChange={(e) => handleOptionChange(e, setSelectedBreakpoint)}
                >
                  {Object.values(BREAKPOINTS).map(bp => (
                    <option key={bp} value={bp}>{bp}</option>
                  ))}
                </select>
              </div>
              
              <div className="section-hero-page__control">
                <label htmlFor="size">Size:</label>
                <select 
                  id="size" 
                  value={selectedSize} 
                  onChange={(e) => handleOptionChange(e, setSelectedSize)}
                >
                  {Object.values(SIZES).map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              
              <div className="section-hero-page__control">
                <label htmlFor="theme">Theme:</label>
                <select 
                  id="theme" 
                  value={selectedTheme} 
                  onChange={(e) => handleOptionChange(e, setSelectedTheme)}
                >
                  {Object.values(THEMES).map(theme => (
                    <option key={theme} value={theme}>{theme}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="section-hero-page__control-group">
            <h3 className="section-hero-page__control-heading">Optional Elements</h3>
            <div className="section-hero-page__control-row section-hero-page__control-row--checkboxes">
              <div className="section-hero-page__control section-hero-page__control--checkbox">
                <input 
                  type="checkbox" 
                  id="showSubtitle" 
                  checked={showSubtitle} 
                  onChange={(e) => handleOptionChange(e, setShowSubtitle)}
                />
                <label htmlFor="showSubtitle">Show Subtitle</label>
              </div>
              
              <div className="section-hero-page__control section-hero-page__control--checkbox">
                <input 
                  type="checkbox" 
                  id="showLink" 
                  checked={showLink} 
                  onChange={(e) => handleOptionChange(e, setShowLink)}
                />
                <label htmlFor="showLink">Show Link</label>
              </div>
              
              <div className="section-hero-page__control section-hero-page__control--checkbox">
                <input 
                  type="checkbox" 
                  id="showTooltip" 
                  checked={showTooltip} 
                  onChange={(e) => handleOptionChange(e, setShowTooltip)}
                  disabled={selectedSize === SIZES.MAX_BRAND}
                />
                <label htmlFor="showTooltip">Show Tooltip</label>
                {selectedSize === SIZES.MAX_BRAND && (
                  <span className="section-hero-page__control-note">(Only available for Small/Medium sizes)</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="section-hero-page__control-group">
            <h3 className="section-hero-page__control-heading">Content Customization</h3>
            <div className="section-hero-page__control">
              <label htmlFor="customTitle">Title:</label>
              <input 
                type="text" 
                id="customTitle" 
                value={customTitle} 
                onChange={(e) => handleOptionChange(e, setCustomTitle)}
              />
            </div>
            
            <div className="section-hero-page__control">
              <label htmlFor="customSubtitle">Subtitle:</label>
              <textarea 
                id="customSubtitle" 
                value={customSubtitle} 
                onChange={(e) => handleOptionChange(e, setCustomSubtitle)}
                rows={3}
              />
            </div>
          </div>
        </div>
        
        <div className="section-hero-page__preview">
          <h3 className="section-hero-page__control-heading">Preview</h3>
          <div className={`section-hero-page__preview-container section-hero-page__preview-container--${selectedBreakpoint.toLowerCase()}`}>
            <SectionHero 
              title={customTitle}
              subtitle={customSubtitle}
              breakpoint={selectedBreakpoint as typeof BREAKPOINTS[keyof typeof BREAKPOINTS]}
              size={selectedSize as typeof SIZES[keyof typeof SIZES]}
              theme={selectedTheme as typeof THEMES[keyof typeof THEMES]}
              showSubtitle={showSubtitle}
              showLink={showLink}
              showTooltip={showTooltip}
            />
          </div>
        </div>
      </section>
      
      <section className="section-hero-page__section">
        <h2 className="section-hero-page__heading">Common Examples</h2>
        
        <div className="section-hero-page__examples">
          <div className="section-hero-page__example">
            <h3 className="section-hero-page__example-title">Desktop, Max (brand) Size, Default Theme</h3>
            <div className="section-hero-page__example-container">
              <SectionHero 
                title="FEATURED CONTENT" 
                subtitle="This section showcases the main featured content across the site."
                breakpoint={BREAKPOINTS.DESKTOP}
                size={SIZES.MAX_BRAND}
                theme={THEMES.DEFAULT}
              />
            </div>
          </div>
          
          <div className="section-hero-page__example">
            <h3 className="section-hero-page__example-title">Desktop, Max (brand) Size, Inverse Purple Theme</h3>
            <div className="section-hero-page__example-container">
              <SectionHero 
                title="EVENT HIGHLIGHTS" 
                subtitle="Explore the key moments from our recent events and conferences."
                breakpoint={BREAKPOINTS.DESKTOP}
                size={SIZES.MAX_BRAND}
                theme={THEMES.INVERSE_PURPLE}
              />
            </div>
          </div>
          
          <div className="section-hero-page__example">
            <h3 className="section-hero-page__example-title">Desktop, Medium Size with Link</h3>
            <div className="section-hero-page__example-container">
              <SectionHero 
                title="Product Features" 
                subtitle="Discover what makes our products stand out from the competition."
                breakpoint={BREAKPOINTS.DESKTOP}
                size={SIZES.MEDIUM}
                theme={THEMES.DEFAULT}
                showLink={true}
                linkText="View All Features"
                showTooltip={true}
              />
            </div>
          </div>
          
          <div className="section-hero-page__example">
            <h3 className="section-hero-page__example-title">Mobile, Small Size with Tooltip</h3>
            <div className="section-hero-page__example-container section-hero-page__example-container--mobile">
              <SectionHero 
                title="Related Articles" 
                subtitle="More content you might be interested in."
                breakpoint={BREAKPOINTS.MOBILE}
                size={SIZES.SMALL}
                theme={THEMES.DEFAULT}
                showTooltip={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-hero-page__section">
        <h2 className="section-hero-page__heading">Usage Guidelines</h2>
        
        <div className="section-hero-page__guidelines">
          <h3>When to Use</h3>
          <ul>
            <li>Use <strong>Max (brand)</strong> size for main page sections or important announcements</li>
            <li>Use <strong>Medium</strong> size for secondary content sections</li>
            <li>Use <strong>Small</strong> size for related content, sidebars, or supplementary information</li>
          </ul>
          
          <h3>Best Practices</h3>
          <ul>
            <li>Keep titles concise and meaningful</li>
            <li>Use subtitles to provide additional context, not to repeat the title</li>
            <li>Choose appropriate theme colors based on the section's importance and surrounding content</li>
            <li>Use the tooltip only when additional explanation might be helpful</li>
            <li>Include links when there's related content users might want to explore</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SectionHeroPage;