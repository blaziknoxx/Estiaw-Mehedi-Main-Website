export interface TrackItem {
  number: number;
  title: string;
  note?: string;
}

export interface MusicCredit {
  role: string;
  name: string;
}

export interface MusicRelease {
  id: string;
  slug: string;
  title: string;
  artist: string;
  releaseType: 'Single' | 'EP' | 'Album' | 'Ambient Work';
  year: string;
  date?: string;
  description: string;
  linerNotes?: string;
  artworkSrc?: string;
  aspectRatio: '1/1';
  featured?: boolean;
  links: {
    spotify: string;
    appleMusic: string;
    tidal: string;
  };
  tracklist?: TrackItem[];
  credits?: MusicCredit[];
  moodKeywords: string[];
}

export const MUSIC_RELEASES: MusicRelease[] = [
  {
    id: 'release-1',
    slug: 'resonance-in-amber',
    title: 'Resonance in Amber',
    artist: 'ESTIAQ MEHEDI',
    releaseType: 'Single',
    year: '2025',
    date: '2025',
    description: 'A contemplative instrumental study exploring warm analog oscillators, spatial reverberations, and organic acoustic decay.',
    linerNotes: 'Composed and mixed independently. Focused on minimal melodic repetition, warmth of vintage tape saturation, and immersive low-end resonance.',
    artworkSrc: '',
    aspectRatio: '1/1',
    featured: true,
    links: {
      spotify: 'https://open.spotify.com/artist/4tUOMKIWDwxn2nV2ha9x5E?si=mD1hQbkvSkimZS8K42Lh7A&utm_source=copy-link',
      appleMusic: 'https://music.apple.com/us/artist/estiaq-mehedi/1708027030',
      tidal: 'https://tidal.com/artist/42231013/u',
    },
    tracklist: [
      { number: 1, title: 'Resonance in Amber (Original Mix)', note: 'Master Audio' },
    ],
    credits: [
      { role: 'Composition & Production', name: 'ESTIAQ MEHEDI' },
      { role: 'Mixing & Sound Design', name: 'ESTIAQ MEHEDI' },
    ],
    moodKeywords: ['Analog Synthesis', 'Atmospheric', 'Warm Melodic'],
  },
  {
    id: 'release-2',
    slug: 'chromatic-nocturne',
    title: 'Chromatic Nocturne',
    artist: 'ESTIAQ MEHEDI',
    releaseType: 'EP',
    year: '2024',
    date: '2024',
    description: 'A 4-part nocturnal soundscape blending modular arpeggios, sub-harmonic textures, and cinematic ambient passages.',
    linerNotes: 'Constructed during late-night studio sessions, capturing the stillness of urban twilight through polyphonic modular timbres.',
    artworkSrc: '',
    aspectRatio: '1/1',
    featured: false,
    links: {
      spotify: 'https://open.spotify.com/artist/4tUOMKIWDwxn2nV2ha9x5E?si=mD1hQbkvSkimZS8K42Lh7A&utm_source=copy-link',
      appleMusic: 'https://music.apple.com/us/artist/estiaq-mehedi/1708027030',
      tidal: 'https://tidal.com/artist/42231013/u',
    },
    tracklist: [
      { number: 1, title: 'Phase Velocity', note: 'Introductory Tone' },
      { number: 2, title: 'Midnight Mirage', note: 'EP Core Movement' },
      { number: 3, title: 'Sub-Harmonic Drift', note: 'Ambient Interlude' },
      { number: 4, title: 'Dissolving Dusk', note: 'Outro Reverberation' },
    ],
    credits: [
      { role: 'Composition & Synthesis', name: 'ESTIAQ MEHEDI' },
      { role: 'Mastering & Direction', name: 'ESTIAQ MEHEDI' },
    ],
    moodKeywords: ['Downtempo', 'Cinematic', 'Deep Forest', 'Nocturnal'],
  },
  {
    id: 'release-3',
    slug: 'frequency-horizons',
    title: 'Frequency Horizons',
    artist: 'ESTIAQ MEHEDI',
    releaseType: 'Single',
    year: '2024',
    date: '2024',
    description: 'Warm evolving tape loops intertwined with minimalist rhythmic pulses, evoking expansive horizon views.',
    linerNotes: 'Recorded with hardware tape processing and organic field textures, celebrating intentional imperfections in pitch and timbre.',
    artworkSrc: '',
    aspectRatio: '1/1',
    featured: false,
    links: {
      spotify: 'https://open.spotify.com/artist/4tUOMKIWDwxn2nV2ha9x5E?si=mD1hQbkvSkimZS8K42Lh7A&utm_source=copy-link',
      appleMusic: 'https://music.apple.com/us/artist/estiaq-mehedi/1708027030',
      tidal: 'https://tidal.com/artist/42231013/u',
    },
    tracklist: [
      { number: 1, title: 'Frequency Horizons', note: 'Single' },
    ],
    credits: [
      { role: 'Composition', name: 'ESTIAQ MEHEDI' },
      { role: 'Analog Production', name: 'ESTIAQ MEHEDI' },
    ],
    moodKeywords: ['Tape Loops', 'Textural', 'Meditative'],
  },
  {
    id: 'release-4',
    slug: 'tactile-silence',
    title: 'Tactile Silence',
    artist: 'ESTIAQ MEHEDI',
    releaseType: 'Ambient Work',
    year: '2023',
    date: '2023',
    description: 'An immersive long-form sound sculpture exploring granular synthesis, subtle string harmonics, and the spatial sensation of silence.',
    linerNotes: 'An artistic exploration of the acoustic spaces between notes. Designed for focused listening through high-fidelity headphones.',
    artworkSrc: '',
    aspectRatio: '1/1',
    featured: false,
    links: {
      spotify: 'https://open.spotify.com/artist/4tUOMKIWDwxn2nV2ha9x5E?si=mD1hQbkvSkimZS8K42Lh7A&utm_source=copy-link',
      appleMusic: 'https://music.apple.com/us/artist/estiaq-mehedi/1708027030',
      tidal: 'https://tidal.com/artist/42231013/u',
    },
    tracklist: [
      { number: 1, title: 'Tactile Silence (Part I: Inhale)', note: 'Movement I' },
      { number: 2, title: 'Tactile Silence (Part II: Suspension)', note: 'Movement II' },
    ],
    credits: [
      { role: 'Sound Sculpture', name: 'ESTIAQ MEHEDI' },
    ],
    moodKeywords: ['Granular', 'Field Recordings', 'Introspective'],
  },
];
