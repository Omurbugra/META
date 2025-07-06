export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  mediaType: 'image' | 'video' | 'interactive';
  mediaUrls: string[];
  thumbnailUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  tags: string[];
  year: number;
  featured: boolean;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Ecosystem',
    description: 'The international scholarly ecosystem of METU JFA, tracing its global distribution and academic presence.',
    longDescription: 'This is the international scholarly ecosystem of METU JFA. The upper section traces the journal\'s physical distribution network from 1975–1989, marking each recipient institution and individual scholar worldwide... highlighting METU JFA’s enduring significance within the evolving publication landscape across architecture, planning, and design.',
    mediaType: 'image',
    mediaUrls: ['/META/IMAJ/eco.jpg'],
    thumbnailUrl: '/META/IMAJ/eco.jpg',
    aspectRatio: 'landscape',
    tags: ['ecosystem'],
    year: 2025,
    featured: true
  },
  {
    id: '2',
    title: 'The Correspondence Network',
    description: 'An intricate web of editorial letters that reveal METU JFA’s early intellectual community.',
    longDescription: 'This is the intricate web of correspondence between METU JFA\'s editorial board and its diverse network of contacts during the journal\'s foundational years... showcasing how editorial relationships and international connections were deliberately cultivated through personal correspondence in the pre-digital era.',
    mediaType: 'image',
    mediaUrls: ['/META/IMAJ/CorrespondenceMap.png'],
    thumbnailUrl: '/META/IMAJ/CorrespondenceMap.png',
    aspectRatio: 'portrait',
    tags: ['network', 'letters'],
    year: 2025,
    featured: true
  },
  {
    id: '3',
    title: 'The Chronogram',
    description: 'A branching map of key topics that have shaped METU JFA’s discourse across five decades.',
    longDescription: 'This chronogram, inspired by Charles Jencks\'s influential “Evolutionary Tree to the Year 2000,” maps the fluid intellectual landscape of METU JFA across fifty years...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'landscape',
    tags: ['chronogram', 'topics'],
    year: 2025,
    featured: true
  },
  {
    id: '4',
    title: 'The Circle',
    description: 'A constellation of 834 academic reviewers visualized through scale and connection.',
    longDescription: 'The Circle honors the often-invisible academic labor that underpins METU JFA\'s scholarly integrity...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'square',
    tags: ['reviewers', 'circle'],
    year: 2025,
    featured: true
  },
  {
    id: '5',
    title: 'The Orbit',
    description: 'Chronologically visualizes the thematic shifts in 614 METU JFA articles.',
    longDescription: 'The Orbit maps the intellectual cosmos of METU JFA...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'square',
    tags: ['themes'],
    year: 2025,
    featured: true
  },
  {
    id: '6',
    title: 'Citation Geographies',
    description: 'Maps 50 years of citation origins and their geopolitical implications.',
    longDescription: 'Citation Geographies maps the geographical origins of scholarship...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'portrait',
    tags: ['citation', 'geography'],
    year: 2025,
    featured: true
  },
  {
    id: '7',
    title: 'Citation Chronologies',
    description: 'Reveals how each field engages with history through its citations.',
    longDescription: 'This dual-axis Citation Geographies maps the historical depth of scholarship...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'portrait',
    tags: ['citation', 'time'],
    year: 2025,
    featured: true
  },
  {
    id: '8',
    title: 'The Dymaxion World',
    description: 'A Fuller-inspired projection of 811 cities mentioned in METU JFA articles.',
    longDescription: 'Inspired by Buckminster Fuller\'s revolutionary cartographic projection...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'landscape',
    tags: ['dymaxion', 'map'],
    year: 2025,
    featured: true
  },
  {
    id: '9',
    title: 'The Drawings of Volume 6:1',
    description: 'Revives a 1980 article made purely of drawings by Fahrettin Tolun.',
    longDescription: 'This composite poster revives a singular moment in METU JFA’s publication history...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'portrait',
    tags: ['drawing'],
    year: 2025,
    featured: true
  },
  {
    id: '10',
    title: 'The Drawings of Volume 6:2',
    description: 'Showcases Salih Memecan’s drawing-only article from 1980.',
    longDescription: 'Published in the immediate aftermath of Tolun’s visual essay...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'portrait',
    tags: ['drawing'],
    year: 2025,
    featured: true
  },
  {
    id: '11',
    title: 'The Dictionary',
    description: 'An A–Z sculptural dictionary of 26 terms drawn from METU JFA archives.',
    longDescription: 'Taking inspiration from Genel Tasarım Sözlüğü Üzerine Bir Deneme by Ülker Belge...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'portrait',
    tags: ['dictionary'],
    year: 2025,
    featured: true
  },
  {
    id: '12',
    title: 'Visual Legacy in Motion',
    description: 'Transforms static journal visuals into animated, AI-generated sequences.',
    longDescription: 'This playful media installation breathes the temporal dimension into the journal\'s visual record...',
    mediaType: 'video',
    mediaUrls: ['https://example.com/video.mp4'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'landscape',
    tags: ['animation'],
    year: 2025,
    featured: true
  },
  {
    id: '13',
    title: 'The Visual Corpus',
    description: 'A raw, unfiltered slideshow of 585 published visuals from METU JFA.',
    longDescription: 'This comprehensive slideshow presents the unedited visual legacy of METU JFA...',
    mediaType: 'video',
    mediaUrls: ['https://example.com/video.mp4'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'square',
    tags: ['slideshow'],
    year: 2025,
    featured: true
  },
  {
    id: '14',
    title: 'The Source Code',
    description: 'An immersive 3D environment representing the journal’s citation network.',
    longDescription: 'Following the curators\' secret agenda, the Source Code honors print culture...',
    mediaType: 'interactive',
    mediaUrls: ['https://example.com/3d'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'landscape',
    tags: ['3d', 'citation'],
    year: 2025,
    featured: true
  },
  {
    id: '15',
    title: 'The Editor’s Desk',
    description: 'A reconstruction of METU JFA’s pre-digital editorial infrastructure.',
    longDescription: 'The Editor’s Desk reconstructs the pre-digital workspace of METU JFA...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'landscape',
    tags: ['editorial'],
    year: 2025,
    featured: true
  },
  {
    id: '16',
    title: 'The Tree',
    description: 'An evolving wooden archive of all METU JFA articles since 1975.',
    longDescription: 'This interactive wooden sculpture displays the full list of articles published in METU JFA...',
    mediaType: 'image',
    mediaUrls: ['https://example.com'],
    thumbnailUrl: 'https://example.com/thumb.jpg',
    aspectRatio: 'portrait',
    tags: ['archive'],
    year: 2025,
    featured: true
  }
];

export const getProjectsByType = (type: string) => {
  if (type === 'all') return projects;
  return projects.filter(project => project.mediaType === type);
};

export const getProjectsByTag = (tag: string) => {
  return projects.filter(project => project.tags.includes(tag));
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getAllTags = () => {
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};