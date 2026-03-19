// MediaList.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import MediaList, { MediaListProps, MediaTileItem, MediaTileItemProps, MEDIA_TILE_STATE } from './MediaList';

export default {
  title: 'Components/MediaList',
  component: MediaList,
  parameters: {
    componentSubtitle: 'A list of media items that can display channel or broadcaster information',
  },
} as Meta;

// MediaList Template
const MediaListTemplate: Story<MediaListProps> = (args) => <MediaList {...args} />;

// MediaTileItem Template
const MediaTileItemTemplate: Story<MediaTileItemProps> = (args) => <MediaTileItem {...args} />;

// MediaList Story - Default
export const Default: Story<MediaListProps> = MediaListTemplate.bind({});
Default.args = {
  tileCount: 5,
};

// MediaList Story - Short List
export const ShortList: Story<MediaListProps> = MediaListTemplate.bind({});
ShortList.args = {
  tileCount: 3,
};

// MediaTileItem Stories
export const SingleTileItem: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
SingleTileItem.args = {
  broadcaster: true,
  onAir: true,
  offAir: true,
  radio: true,
  showIcon: false,
  state: MEDIA_TILE_STATE.DEFAULT,
};

export const TileWithPlayIcon: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
TileWithPlayIcon.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: true,
  state: MEDIA_TILE_STATE.DEFAULT,
};

export const OnAirTile: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
OnAirTile.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.DEFAULT,
};

export const OffAirTile: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
OffAirTile.args = {
  broadcaster: true,
  onAir: false,
  offAir: true,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.DEFAULT,
};

export const RadioTile: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
RadioTile.args = {
  broadcaster: true,
  onAir: false,
  offAir: false,
  radio: true,
  showIcon: false,
  state: MEDIA_TILE_STATE.DEFAULT,
};

// Interactive States
export const HoverState: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
HoverState.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.HOVER,
};

export const ActiveState: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
ActiveState.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.ACTIVE,
};

export const SelectedState: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
SelectedState.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.SELECTED,
};

export const FocusState: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
FocusState.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.FOCUS,
};

export const DisabledState: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
DisabledState.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.DISABLED,
};

export const SkeletonState: Story<MediaTileItemProps> = MediaTileItemTemplate.bind({});
SkeletonState.args = {
  broadcaster: true,
  onAir: true,
  offAir: false,
  radio: false,
  showIcon: false,
  state: MEDIA_TILE_STATE.SKELETON,
};
