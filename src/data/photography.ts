export interface PhotoItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  location?: string;
  imageSrc?: string;
  aspectRatio: '4/5' | '16/9' | '3/4' | '1/1' | '4/3' | '16/10';
  gridSpan?: string;
  curatorNote?: string;
  featured?: boolean;
}

export const PHOTOGRAPHY_ITEMS: PhotoItem[] = [
  {
    id: 'photo-1',
    slug: 'chromatic-solitude',
    title: 'Chromatic Solitude',
    category: 'Atmosphere & Light',
    description: 'An exploration of urban stillness bathed in ambient neon and evening shadows, capturing the pause between motion and silence.',
    date: '2025',
    location: 'Urban Series',
    imageSrc: '',
    aspectRatio: '4/5',
    gridSpan: 'md:col-span-1',
    curatorNote: 'High tonal dynamic range with selective amber and teal reflections.',
    featured: true,
  },
  {
    id: 'photo-2',
    slug: 'echoes-in-transit',
    title: 'Echoes in Transit',
    category: 'Cinematic Motion',
    description: 'Kinetic light streaks across glass and metal, framing passenger geometry in rapid metropolitan migration.',
    date: '2025',
    location: 'Transit Study',
    imageSrc: '',
    aspectRatio: '16/9',
    gridSpan: 'md:col-span-2',
    curatorNote: 'Long exposure interplay between rhythmic rail lines and ambient illumination.',
    featured: true,
  },
  {
    id: 'photo-3',
    slug: 'natural-equilibrium',
    title: 'Natural Equilibrium',
    category: 'Organic Forms',
    description: 'Botanical textures and undulating foliage captured in diffuse overcast light, revealing subtle structural symmetry.',
    date: '2024',
    location: 'Field Research',
    imageSrc: '',
    aspectRatio: '1/1',
    gridSpan: 'md:col-span-1',
    curatorNote: 'Micro-composition highlighting organic emerald tones and tactile depth.',
    featured: true,
  },
  {
    id: 'photo-4',
    slug: 'midnight-geometry',
    title: 'Midnight Geometry',
    category: 'Architectural Shadow',
    description: 'Sharp brutalist angles sliced by harsh industrial floodlights, reducing modern architecture to bold geometric planes.',
    date: '2024',
    location: 'Night Study',
    imageSrc: '',
    aspectRatio: '4/3',
    gridSpan: 'md:col-span-1',
    curatorNote: 'Monochrome contrast with warm golden architectural edge spill.',
    featured: false,
  },
  {
    id: 'photo-5',
    slug: 'fleeting-cadence',
    title: 'Fleeting Cadence',
    category: 'Street Documentary',
    description: 'Unrehearsed human silhouettes against morning mist, capturing spontaneous micro-interactions in public space.',
    date: '2024',
    location: 'Street Observation',
    imageSrc: '',
    aspectRatio: '3/4',
    gridSpan: 'md:col-span-1',
    curatorNote: 'Natural light diffusion with layered depth of field.',
    featured: false,
  },
  {
    id: 'photo-6',
    slug: 'radiant-horizons',
    title: 'Radiant Horizons',
    category: 'Panoramic Mood',
    description: 'A study of twilight gradients where sky transitions into deep oceanic indigo, evoking contemplation and scale.',
    date: '2024',
    location: 'Coastline',
    imageSrc: '',
    aspectRatio: '16/9',
    gridSpan: 'md:col-span-2',
    curatorNote: 'Minimal horizon framing with layered coral and deep forest color grading.',
    featured: true,
  },
];
