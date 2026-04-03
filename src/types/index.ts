export interface UniverseNode {
  id: string;
  label: string;
  size?: number;
  color: string;
  x?: number;
  y?: number;
  url?: string;
  emoji?: string;
  subtitle?: string;
  type?: string;
  pillar?: string;
  status?: 'active' | 'pending' | 'disabled';
}

export interface UniverseData {
  nodes: UniverseNode[];
  edges: [string, string][];
  showcaseNodes: string[];
}

export interface NodeInfo {
  id: string;
  label: string;
  emoji: string;
  subtitle: string;
  url?: string;
  color: string;
}

export interface SimsAction {
  emoji: string;
  label: string;
  key: string;
}

export interface OnlineUser {
  uid: string;
  name: string;
  photo: string;
  avatar?: string;
  status: 'libre' | 'ocupado' | 'nomolestar';
  planet: string;
  emoji: string;
}

export type ShipModel = string;

export interface BotTool {
  id: string;
  name: string;
  url: string;
  description: string;
  keywords: string;
  icon: string;
  type: 'affiliate' | 'tool' | 'resource';
  active: boolean;
}

export interface BotConfig {
  soul: string;
  tools: string;
  userTemplate: string;
}

export interface InboxMessage {
  fromUid: string;
  fromName: string;
  fromPhoto: string;
  text: string;
  emoji: string;
  ts: number;
  action?: string;
}

export interface FeedNotif {
  id: number;
  emoji: string;
  title: string;
  text: string;
  photo?: string;
  type: 'sent' | 'received' | 'system';
  ts: number;
}

export type NotifDuration = 10 | 30 | 60 | 0 | -1;
export type NotifSide = 'left' | 'right';

export interface CommunityShip {
  id: string;
  name: string;
  svg: string;
  authorUid: string;
  authorName: string;
  authorPhoto?: string;
  status: 'pending' | 'approved' | 'rejected';
  ts: number;
}

export interface CommunityAvatar {
  id: string;
  name: string;
  svg: string;
  authorUid: string;
  authorName: string;
  authorPhoto?: string;
  status: 'pending' | 'approved' | 'rejected';
  ts: number;
}
