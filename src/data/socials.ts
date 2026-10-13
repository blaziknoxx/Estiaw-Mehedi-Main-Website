export interface SocialPlatform {
  id: string;
  name: string;
  handle?: string;
  url: string;
  description: string;
  category: 'code' | 'social' | 'photo' | 'chat' | 'music';
  accentColor: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@blaziknoxx',
    url: 'https://github.com/blaziknoxx',
    description: 'Development & Projects',
    category: 'code',
    accentColor: '#159A91',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1GtbYjNwqH/?mibextid=wwXIfr',
    description: 'Social & Updates',
    category: 'social',
    accentColor: '#36A852',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@estiaq_mehedi',
    url: 'https://www.instagram.com/estiaq_mehedi?dlrf=MWU3YXo5YzhldnlxYQ%3D%3D&utm_source=qr',
    description: 'Photography & Moments',
    category: 'photo',
    accentColor: '#EF684F',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    handle: '@Saadnoxx',
    url: 'https://t.me/Saadnoxx',
    description: 'Connect With Me',
    category: 'chat',
    accentColor: '#E2B52C',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/4tUOMKIWDwxn2nV2ha9x5E?si=mD1hQbkvSkimZS8K42Lh7A&utm_source=copy-link',
    description: 'Listen to My Music',
    category: 'music',
    accentColor: '#36A852',
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/estiaq-mehedi/1708027030',
    description: 'Music & Releases',
    category: 'music',
    accentColor: '#D83A3A',
  },
  {
    id: 'tidal',
    name: 'TIDAL',
    url: 'https://tidal.com/artist/42231013/u',
    description: 'High-Fidelity Music',
    category: 'music',
    accentColor: '#087F5B',
  },
];
