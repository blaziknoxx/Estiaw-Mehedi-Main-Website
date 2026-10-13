export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  coverSrc?: string;
  aspectRatio: '16/10' | '16/9' | '4/3';
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'project-1',
    slug: 'sound-sculpt-canvas',
    title: 'SoundSculpt Canvas',
    category: 'Interactive Audio & WebGL',
    year: '2025',
    description: 'An interactive audio-visual synthesizer translating frequency harmonics into organic real-time generative mesh geometries.',
    fullDescription: 'SoundSculpt Canvas explores the synesthetic boundary between audible tone and visual matter. Built with custom Web Audio API DSP nodes and responsive canvas shaders, it transforms live user microphone input or generated modular oscillators into fluid, chromatic 3D deformations.',
    coverSrc: '',
    aspectRatio: '16/10',
    technologies: ['TypeScript', 'Web Audio API', 'Canvas API', 'GLSL Shaders', 'Vite'],
    features: [
      'Real-time FFT frequency spectrum & waveform analysis',
      'Custom oscillator bank with analog-modeled saturation',
      'Liquid chromatic aberration shaders',
      'Export high-resolution generative snapshot frames',
    ],
    githubUrl: 'https://github.com/blaziknoxx',
    featured: true,
  },
  {
    id: 'project-2',
    slug: 'lumina-editorial-engine',
    title: 'Lumina Editorial Engine',
    category: 'Design Systems & Web',
    year: '2025',
    description: 'A typography-first publishing layout system crafted for visual artists, photographers, and independent creators.',
    fullDescription: 'Lumina was conceived as a digital publishing architecture for creators who demand editorial elegance without the bloat of traditional CMS themes. Features dynamic fluid typography scaling, zero-layout-shift responsive media containers, and liquid glass navigation states.',
    coverSrc: '',
    aspectRatio: '16/10',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    features: [
      'Fluid clamp-based typographic scale',
      'Art-directed asymmetric masonry arrangements',
      'Strict zero-pill metadata typography hierarchy',
      'Full keyboard accessibility and WCAG AA contrast compliance',
    ],
    githubUrl: 'https://github.com/blaziknoxx',
    featured: true,
  },
  {
    id: 'project-3',
    slug: 'aperture-raw-viewer',
    title: 'Aperture RAW Viewer',
    category: 'Creative Tools & Utilities',
    year: '2024',
    description: 'A focused, distraction-free photo evaluation and color grading inspector designed for darkroom workflow.',
    fullDescription: 'A standalone browser utility enabling photographers to inspect EXIF metadata, analyze RGB histogram distributions, and experiment with LUT color transformations directly on local files without server uploads.',
    coverSrc: '',
    aspectRatio: '16/9',
    technologies: ['TypeScript', 'Canvas 2D', 'EXIF Parser', 'Web Workers'],
    features: [
      'Client-side zero-upload private image processing',
      'Interactive multi-channel RGB histogram',
      'Split-screen A/B comparison loupe',
      'Lightweight keyboard shortcut navigation',
    ],
    githubUrl: 'https://github.com/blaziknoxx',
    featured: false,
  },
  {
    id: 'project-4',
    slug: 'chroma-modular-palette',
    title: 'Chroma Modular Palette',
    category: 'Color Science & UI',
    year: '2024',
    description: 'Algorithmic color token generator based on perceptual OKLCH color spaces, ensuring harmonious gradients and accessible contrast.',
    fullDescription: 'An experiment in algorithmic color harmony that generates balanced monochromatic, complementary, and split-chroma palettes for digital art and interface design, with real-time APCA and WCAG contrast validation.',
    coverSrc: '',
    aspectRatio: '16/9',
    technologies: ['TypeScript', 'OKLCH Color Math', 'Tailwind CSS'],
    features: [
      'Perceptually uniform lightness curves',
      'Export directly to Tailwind CSS or CSS Custom Properties',
      'Accessible foreground/background contrast testing matrix',
    ],
    githubUrl: 'https://github.com/blaziknoxx',
    featured: false,
  },
];
