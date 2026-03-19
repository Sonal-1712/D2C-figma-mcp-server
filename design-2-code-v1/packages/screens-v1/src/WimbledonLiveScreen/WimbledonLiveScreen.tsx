// WimbledonLiveScreen.tsx
import React from 'react';
import './WimbledonLiveScreen.scss';
import { Breadcrumb } from '@design-2-code/components-v1';
import { GlobalFooter } from '@design-2-code/components-v1';
import { NavigationHeader } from '@design-2-code/components-v1';
import { Sound } from '@design-2-code/components-v1';
import { Volume } from '@design-2-code/components-v1';
import { Expand } from '@design-2-code/components-v1';
import { Badge } from '@design-2-code/components-v1';

export interface WimbledonLiveScreenProps {
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Responsive breakpoint
   */
  breakpoint?: 'Mobile' | 'Desktop';
}

/**
 * WimbledonLiveScreen component for displaying the Wimbledon live content
 */
export const WimbledonLiveScreen: React.FC<WimbledonLiveScreenProps> = ({
  className = '',
  breakpoint = 'Desktop'
}) => {
  const isDesktop = breakpoint === 'Desktop';
  
  return (
    <div className={`wdl-wimbledon-live ${className}`}>
      <header className="wdl-wimbledon-live__header">
        <div className="wdl-wimbledon-live__navigation">
          <NavigationHeader 
            breakpoint={isDesktop ? "Desktop" : "Mobile"}
            quicklinks={[
              { text: 'Tickets' },
              { text: 'Museum and Tour' },
              { text: 'Shop', hasExternalIcon: true }
            ]}
            eventDateText="30 June - 13 July 2026"
          />
        </div>
      </header>
      
      <div className="wdl-wimbledon-live__container">
        <Breadcrumb 
          className="wdl-wimbledon-live__breadcrumb" 
          type="Back" 
          breakpoint="Desktop"
        />
        
        <div className="wdl-wimbledon-live__hero">
          <div className="wdl-wimbledon-live__hero-title">
            <p className="wdl-wimbledon-live__hero-subtitle">THE CHAMPIONSHIPS 2026</p>
            <h1 className="wdl-wimbledon-live__hero-heading">WIMBLEDON LIVE</h1>
          </div>
        </div>
        
        <div className="wdl-wimbledon-live__content">
          <div className="wdl-wimbledon-live__grid">
            <div className="wdl-wimbledon-live__main-video">
              <div className="wdl-wimbledon-live__video-player">
                <img 
                  src="/assets/media.png" 
                  alt="Wimbledon match" 
                  className="wdl-wimbledon-live__video-image"
                />
                <div className="wdl-wimbledon-live__video-controls">
                  <p className="wdl-wimbledon-live__video-time">0:10 / 0:41</p>
                  <div className="wdl-wimbledon-live__video-buttons">
                    <Sound className="wdl-wimbledon-live__sound" />
                    <Volume className="wdl-wimbledon-live__volume" volume={false} />
                    <Expand className="wdl-wimbledon-live__expand" />
                  </div>
                  <div className="wdl-wimbledon-live__video-progress">
                    <div className="wdl-wimbledon-live__video-progress-bar">
                      <div className="wdl-wimbledon-live__video-progress-indicator"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wdl-wimbledon-live__video-info">
                <h2 className="wdl-wimbledon-live__video-title">The Wimbledon Channel</h2>
                <p className="wdl-wimbledon-live__video-description">9am - Close of play</p>
              </div>
            </div>
            
            <div className="wdl-wimbledon-live__media-list">
              <div className="wdl-wimbledon-live__list-item wdl-wimbledon-live__list-item--active">
                <div className="wdl-wimbledon-live__item-content">
                  <div className="wdl-wimbledon-live__item-tags">
                    <div className="wdl-wimbledon-live__item-tag wdl-wimbledon-live__item-tag--live">
                      <span className="wdl-wimbledon-live__live-icon"></span>
                      <span className="wdl-wimbledon-live__tag-text">ON AIR</span>
                    </div>
                  </div>
                  <div className="wdl-wimbledon-live__item-text">
                    <h3 className="wdl-wimbledon-live__item-title">The Wimbledon Channel</h3>
                    <p className="wdl-wimbledon-live__item-description">9am - Close of play</p>
                  </div>
                </div>
                <Badge type="Indicator" className="wdl-wimbledon-live__item-badge" />
              </div>
              
              {/* Additional media list items would follow the same pattern */}
            </div>
          </div>
        </div>
        
        <div className="wdl-wimbledon-live__banner">
          <div className="wdl-wimbledon-live__banner-content">
            <div className="wdl-wimbledon-live__banner-text">
              <p className="wdl-wimbledon-live__banner-subtitle">explore more</p>
              <h2 className="wdl-wimbledon-live__banner-heading">TV Coverage and Schedules</h2>
              <p className="wdl-wimbledon-live__banner-description">
                Find out exactly where to tune in. Discover the official TV broadcasters in your country 
                to follow every match live and catch the moments that matter most on the big screen.
              </p>
            </div>
            <button className="wdl-wimbledon-live__banner-button">Learn More</button>
          </div>
        </div>
      </div>
      
      <GlobalFooter breakpoint={isDesktop ? "Desktop" : "Mobile"} className="wdl-wimbledon-live__footer" />
    </div>
  );
};

export default WimbledonLiveScreen;