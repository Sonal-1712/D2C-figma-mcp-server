// MediaList.tsx
import React, { forwardRef } from 'react';
import './MediaList.scss';

export interface MediaTileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Shows broadcaster logo
   */
  broadcaster?: boolean;
  /**
   * Shows OFF AIR tag
   */
  offAir?: boolean;
  /**
   * Shows ON AIR tag
   */
  onAir?: boolean;
  /**
   * Shows RADIO tag
   */
  radio?: boolean;
  /**
   * Shows play icon
   */
  showIcon?: boolean;
  /**
   * State of the media tile
   */
  state?: "Default" | "Selected" | "Hover" | "Active" | "Focus" | "Skeleton" | "Disabled";
}

export const MEDIA_TILE_STATE = {
  DEFAULT: "Default",
  SELECTED: "Selected",
  HOVER: "Hover",
  ACTIVE: "Active",
  FOCUS: "Focus",
  SKELETON: "Skeleton",
  DISABLED: "Disabled"
} as const;

export const MediaTileItem = forwardRef<HTMLDivElement, MediaTileItemProps>((props, ref) => {
  const { 
    className = '',
    broadcaster = true, 
    offAir = true, 
    onAir = true, 
    radio = true, 
    showIcon = false, 
    state = MEDIA_TILE_STATE.DEFAULT,
    ...rest 
  } = props;

  const mediaItemClass = `media-tile-item ${state.toLowerCase()} ${className}`;

  return (
    <div ref={ref} className={mediaItemClass} {...rest}>
      <div className="background"></div>
      <div className="content">
        <div className="tags">
          {onAir && (
            <div className="tag on-air">
              <div className="live-icon"></div>
              <p>ON air</p>
            </div>
          )}
          {offAir && (
            <div className="tag off-air">
              <p>off air</p>
            </div>
          )}
          {radio && (
            <div className="tag radio">
              <p>radio</p>
            </div>
          )}
          {broadcaster && (
            <div className="logo">
              <div className="logo-wrapper">
                <img alt="Broadcaster logo" src="" />
              </div>
            </div>
          )}
        </div>
        <div className="text">
          <div className="title">
            <p>Channel or Broadcaster name</p>
          </div>
          <p className="subtitle">Schedule and times</p>
        </div>
      </div>
      {showIcon && (
        <div className="play-icon">
          <div className="icon"></div>
        </div>
      )}
    </div>
  );
});

MediaTileItem.displayName = 'MediaTileItem';

export interface MediaListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of tiles to display
   */
  tileCount?: number;
}

const MediaList = forwardRef<HTMLDivElement, MediaListProps>((props, ref) => {
  const { className = '', tileCount = 7, ...rest } = props;
  
  const mediaListClass = `media-list ${className}`;
  
  return (
    <div ref={ref} className={mediaListClass} {...rest}>
      {Array.from({ length: tileCount }).map((_, index) => (
        <MediaTileItem key={index} />
      ))}
    </div>
  );
});

MediaList.displayName = 'MediaList';
export default MediaList;
