// MediaList_page.tsx
import React from 'react';
import MediaList, { MediaTileItem, MEDIA_TILE_STATE } from './MediaList';
import './MediaListPage.scss';

export default function MediaListPage() {
  return (
    <div className="media-list-page">
      <h1>MediaList Component</h1>
      
      <section className="component-section">
        <h2>Default MediaList</h2>
        <p>Default MediaList with 3 items</p>
        <div className="component-example">
          <MediaList tileCount={3} />
        </div>
      </section>
      
      <section className="component-section">
        <h2>MediaTileItem Variants</h2>
        <p>The individual tile items can have different combinations of tags and elements.</p>
        
        <div className="component-example">
          <h3>All Tags (ON AIR, OFF AIR, RADIO) with Broadcaster Logo</h3>
          <MediaTileItem 
            broadcaster={true}
            onAir={true}
            offAir={true}
            radio={true}
            showIcon={false}
          />
        </div>
        
        <div className="component-example">
          <h3>Only ON AIR tag with Play Icon</h3>
          <MediaTileItem 
            broadcaster={false}
            onAir={true}
            offAir={false}
            radio={false}
            showIcon={true}
          />
        </div>
        
        <div className="component-example">
          <h3>Only OFF AIR tag</h3>
          <MediaTileItem 
            broadcaster={false}
            onAir={false}
            offAir={true}
            radio={false}
            showIcon={false}
          />
        </div>
        
        <div className="component-example">
          <h3>Only RADIO tag</h3>
          <MediaTileItem 
            broadcaster={false}
            onAir={false}
            offAir={false}
            radio={true}
            showIcon={false}
          />
        </div>
        
        <div className="component-example">
          <h3>Only Broadcaster Logo</h3>
          <MediaTileItem 
            broadcaster={true}
            onAir={false}
            offAir={false}
            radio={false}
            showIcon={false}
          />
        </div>
        
        <div className="component-example">
          <h3>With Play Icon</h3>
          <MediaTileItem 
            broadcaster={true}
            onAir={true}
            offAir={false}
            radio={false}
            showIcon={true}
          />
        </div>
      </section>
      
      <section className="component-section">
        <h2>MediaTileItem States</h2>
        <p>The media tile items can have different interactive states.</p>
        
        <div className="component-example">
          <h3>Default State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.DEFAULT} />
        </div>
        
        <div className="component-example">
          <h3>Hover State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.HOVER} />
        </div>
        
        <div className="component-example">
          <h3>Active State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.ACTIVE} />
        </div>
        
        <div className="component-example">
          <h3>Selected State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.SELECTED} />
        </div>
        
        <div className="component-example">
          <h3>Focus State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.FOCUS} />
        </div>
        
        <div className="component-example">
          <h3>Disabled State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.DISABLED} />
        </div>
        
        <div className="component-example">
          <h3>Skeleton State</h3>
          <MediaTileItem state={MEDIA_TILE_STATE.SKELETON} />
        </div>
      </section>
    </div>
  );
}