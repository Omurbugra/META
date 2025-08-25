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
    longDescription: 'This is the international scholarly ecosystem of METU JFA. The upper section traces the journal\'s physical distribution network from 1975-1989, marking each recipient institution and individual scholar worldwide. It reveals how the journal established its international academic presence in its early years. Below, a comparative timeline situates METU JFA among 140 peer publications issued by architectural schools, institutions, and student initiatives. It traces which journals remain active and which have concluded, highlighting METU JFA\’s enduring significance within the evolving publication landscape across architecture, planning, and design.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/eco.jpg'],
    thumbnailUrl: '/IMAJ/thumb/eco.jpg',
    aspectRatio: 'landscape',
    tags: ['ecosystem'],
    year: 2025,
    featured: true
  },
  {
    id: '2',
    title: 'The Correspondence Network ',
    description: 'An intricate web of editorial letters that reveal METU JFA’s early intellectual community.',
    longDescription: 'This is the intricate web of correspondence between METU JFA\’s editorial board and its diverse network of contacts during the journal\’s foundational years. Each connecting line represents an exchange of letters with scholars, practitioners, and institutions, with thicker lines indicating more frequent communication, effectively revealing the journal\’s intellectual community and professional relationships. This visualization offers a rare glimpse into the human infrastructure that supported METU JFA\’s early development, showcasing how editorial relationships and international connections were deliberately cultivated through personal correspondence in the pre-digital era, laying the groundwork for its scholarly reputation and global reach.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/CorrespondenceMap.jpg'],
    thumbnailUrl: '/IMAJ/thumb/CorrespondenceMap.jpg',
    aspectRatio: 'portrait',
    tags: ['network', 'letters'],
    year: 2025,
    featured: true
  },
  {
    id: '3',
    title: 'The Chronogram',
    description: 'A branching map of key topics that have shaped METU JFA’s discourse across five decades.',
    longDescription: 'This chronogram, inspired by Charles Jencks\'s influential “Evolutionary Tree to the Year 2000,” maps the fluid intellectual landscape of METU JFA across fifty years. Rather than presenting a linear history, this visualization captures the unfolding of key topics across the journal’s pages over time. Keywords and topics branch, intersect, and recombine over time, revealing how ideas faded and flowed, sometimes diverging only to converge again years later. Like Jencks\'s diagrams that illustrated the plurality of modernism and postmodernism, this Chronogram demonstrates how scholarly production in METU JFA resisted simple categorization, showing how contributors moved between methodological streams and theoretical positions instead. This basemap of the journal\'s intellectual territory invites viewers to trace the organic development of the conversation in Turkey and beyond, revealing patterns of continuity and rupture in scholarly preoccupations across fifty years of publication.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/CHRONOGRAM.jpg'],
    thumbnailUrl: '/IMAJ/thumb/CHRONOGRAM.jpg',
    aspectRatio: 'landscape',
    tags: ['chronogram', 'topics'],
    year: 2025,
    featured: true
  },
  {
    id: '4',
    title: 'The Circle',
    description: 'A constellation of 834 academic reviewers visualized through scale and connection.',
    longDescription: 'The Circle honors the often-invisible academic labor that underpins METU JFA\'s scholarly integrity. Each of the 834 circles represents an individual reviewer who has contributed their expertise to the journal over the years, with circle size proportional to the number of manuscripts evaluated. The resulting constellation reveals both the dedicated core of frequent reviewers and the expansive periphery of specialists consulted for particular submissions. The visualization is based on the complete dataset from 2013 to the present, enriched with archival information from the 1980s and 1990s, offering a layered view of the journal’s evolving reviewer network. Together, these contributors stand as a testament to the collective effort that transforms individual manuscripts into verified scholarship and to the community of experts who uphold the standards that define METU JFA’s academic integrity.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/circle.jpg'],
    thumbnailUrl: '/IMAJ/thumb/circle.jpg',
    aspectRatio: 'square',
    tags: ['reviewers', 'circle'],
    year: 2025,
    featured: true
  },
  {
    id: '5',
    title: 'The Orbit',
    description: 'Chronologically visualizes the thematic shifts in 614 METU JFA articles.',
    longDescription: 'The Orbit maps the intellectual cosmos of METU JFA, organizing 614 articles into 45 thematic categories ranging from architecture to planning and urban studies, building technologies and product design. Organized chronologically around the circumference, it reveals the shifting rhythms of academic inquiry, showing when certain topics gained prominence, receded, or sustained consistent attention. The radial arrangement invites multiple readings: trace the trajectory of a single theme, identify moments of thematic convergence, or observe broader patterns in the journal\'s scholarly focus. This comprehensive visual synthesis offers insights into how METU JFA has both responded to and shaped evolving concerns in multidisciplinary scholarship.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/orbit.jpg'],
    thumbnailUrl: '/IMAJ/thumb/orbit.jpg',
    aspectRatio: 'square',
    tags: ['themes'],
    year: 2025,
    featured: true
  },
  {
    id: '6',
    title: 'Citation Geographies',
    description: 'Maps 50 years of citation origins and their geopolitical implications.',
    longDescription: 'Citation Geographies maps the geographical origins of scholarship that has influenced METU JFA\'s intellectual production in the last fifty years. Tracking citations across 614 articles, the chart reveals the evolving dominance of cited sources from 26 countries, highlighting pronounced asymmetries in scholarly exchange. It exposes how Turkish and Anglo-American publications have maintained central positions as reference points, while contributions from regions like Japan, Iran, or the Netherlands appear only as peripheral tributaries to the journal\'s knowledge stream. By visualizing these patterns of intellectual importation, Citation Geographies prompts critical reflection on the geopolitics of citation: Whose voices are amplified? Whose remain marginal? And how might we reimagine a more inclusive and epistemically diverse scholarly landscape?',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/Citation_Geographies.jpg'],
    thumbnailUrl: '/IMAJ/thumb/Citation_Geographies.jpg',
    aspectRatio: 'portrait',
    tags: ['citation', 'geography'],
    year: 2025,
    featured: true
  },
  {
    id: '7',
    title: 'Citation Chronologies',
    description: 'Reveals how each field engages with history through its citations.',
    longDescription: 'This dual-axis Citation Geographies maps the historical depth of scholarship across METU JFA\'s diverse thematic terrain. It reveals the temporal reach of each article\'s citation practices, illustrating how different research domains engage with historical and contemporary sources. By organizing articles across 45 thematic categories and mapping their citation timespans, patterns emerge showing which domains consistently draw upon centuries of accumulated knowledge and which primarily reference recent scholarship. This chart offers insight into the temporal consciousness of different subfields, revealing where long historical perspectives prevail and where discourse remains anchored in contemporary conversations.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/Citation_Chronologies.jpg'],
    thumbnailUrl: '/IMAJ/thumb/Citation_Chronologies.jpg',
    aspectRatio: 'portrait',
    tags: ['citation', 'time'],
    year: 2025,
    featured: true
  },
  {
    id: '8',
    title: 'The Dymaxion World',
    description: 'A Fuller-inspired projection of 811 cities mentioned in METU JFA articles.',
    longDescription: 'Inspired by Buckminster Fuller\'s revolutionary cartographic projection, this visualization remaps the global spatial conversation as represented in METU JFA\'s pages. The map plots 811 cities mentioned across 614 articles, creating a comprehensive spatial index of the journal\'s geographic imagination. Unlike conventional maps, this Dymaxion projection presents the world as an interconnected network without visual center or periphery. Ten magnified clusters highlight, both the expected centers of case studies and unexpected localities that have entered the journal\'s scholarly attention. This alternative cartography challenges traditional geopolitical framings by displaying the actual distribution of places discussed in JFA’s scholarship, revealing both the journal\'s global reach and its spatial biases. The visualization invites you to trace how METU JFA has navigated between local contexts and global discourses across its publication history.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/Dymaxion.jpg'],
    thumbnailUrl: '/IMAJ/thumb/Dymaxion.jpg',
    aspectRatio: 'landscape',
    tags: ['dymaxion', 'map'],
    year: 2025,
    featured: true
  },
  {
    id: '9',
    title: 'The Drawings of Volume 6:1',
    description: 'Revives a 1980 article made purely of drawings by Fahrettin Tolun.',
    longDescription: 'This composite poster revives a singular moment in METU JFA’s publication history: Volume 6:1 from 1980, which featured a unique “article” by Fahrettin Tolun titled Almanya ve Fransa’dan Çizgiler, 1954–1960 (Lines from Germany and France, 1954–1960), composed entirely of architectural drawings. Tolun’s work stands as a testament to the journal’s early recognition of drawing as a critical mode of architectural thinking. As both a time capsule and a curatorial intervention, this recomposition invites reflection on how representational techniques have evolved across METU JFA’s fifty-year history, while honoring a moment when the journal deliberately positioned itself as a platform for visual architectural discourse.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/drawings6.1.jpg'],
    thumbnailUrl: '/IMAJ/thumb/drawings6.1.jpg',
    aspectRatio: 'portrait',
    tags: ['drawing'],
    year: 2025,
    featured: true
  },
  {
    id: '10',
    title: 'The Drawings of Volume 6:2',
    description: 'Showcases Salih Memecan’s drawing-only article from 1980.',
    longDescription: 'Published in the immediate aftermath of Tolun’s visual essay, Çizgi ve Çevre (Line and Environment) by Salih Memecan appeared in Volume 6:2 (1980) as another rare contribution composed entirely through drawing. This composite poster reconfigures that unique moment, showcasing Memecan’s engagement with the line not only as a graphic tool, but as a mode of inquiry and critique. The piece underscores METU JFA’s sustained commitment to visual discourse—foregrounding drawing as a method of reflection, provocation, and disciplinary expansion. Viewed alongside Tolun’s work, it reveals the journal’s openness to alternative architectural expressions and evolving modes of representation.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/drawings6.2.jpg'],
    thumbnailUrl: '/IMAJ/thumb/drawings6.2.jpg',
    aspectRatio: 'portrait',
    tags: ['drawing'],
    year: 2025,
    featured: true
  },
  {
    id: '11',
    title: 'The Dictionary',
    description: 'An A–Z sculptural dictionary of 26 terms drawn from METU JFA archives.',
    longDescription: 'Taking inspiration from Genel Tasarım Sözlüğü Üzerine Bir Deneme [A Study on a General Design Dictionary] by Ülker Belge, published in Bulletin Volume 1, Issue 3 in 1972, this installation offers a compact dictionary drawn from METU JFA’s own corpus of knowledge production. The Dictionary offers an alphabetical cross-section of the journal\'s disciplinary language, presenting 26 key terms that anchor discourse across architecture, urban planning, and design. Each sculptural letter houses curated quotations drawn from five decades of publication, revealing how these foundational concepts have been interpreted, contested, and reimagined over time. As you interact with this typographic installation, pulling up mini-pages and comparing contexts, you will experience firsthand how seemingly fixed disciplinary vocabulary shifts across theoretical frameworks, historical moments, and cultural settings. The Dictionary reminds us that even the most familiar terms in our fields are not fixed definitions, but dynamic sites of ongoing intellectual negotiations.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/sozluk_1.jpg', '/IMAJ/sozluk_2.jpg', '/IMAJ/sozluk_3.jpg', '/IMAJ/sozluk_4.jpg', '/IMAJ/sozluk_5.jpg', '/IMAJ/sozluk_on.jpg'],
    thumbnailUrl: '/IMAJ/sozluk_on.jpg',
    aspectRatio: 'portrait',
    tags: ['dictionary'],
    year: 2025,
    featured: true
  },
  {
    id: '12',
    title: 'Visual Legacy in Motion',
    description: 'Transforms static journal visuals into animated, AI-generated sequences.',
    longDescription: 'This playful media installation breathes the temporal dimension into the journal\'s historical visual record. Using AI-assisted animation, it transforms 18 static images from METU JFA\'s pages into dynamic scenes. Once-frozen moments, streets lined with motionless figures, architectural spaces suspended in stillness, now pulse with simulated motion. The transformation creates a delightful temporal dissonance as viewers witness decades-old documentation suddenly behave like contemporary video footage. Beyond its immediate charm, this piece invites reflection on how emerging technologies allow us to experience historical materials in unprecedented ways.',
    mediaType: 'video',
    mediaUrls: ['https://www.youtube.com/embed/S7cxvbhXxqA'],
    thumbnailUrl: '/IMAJ/thumb/motion.jpg',
    aspectRatio: 'landscape',
    tags: ['animation'],
    year: 2025,
    featured: true
  },
  {
    id: '13',
    title: 'The Visual Corpus',
    description: 'A raw, unfiltered slideshow of 585 published visuals from METU JFA.',
    longDescription: 'This comprehensive slideshow presents the unedited visual legacy of METU JFA, displaying all 585 images published across the journal\'s fifty-year history. Deliberately presented without curatorial intervention, this visual archive offers a raw, unfiltered view that reveals evolving conventions in photography, drawing techniques, diagramming, and visualization methods, tracking the shift from hand-drawn illustrations to digital renderings, from analog photographs to computational simulations. Taken as a whole, this unmodified visual corpus offers a unique window into the journal\'s contribution to visual culture within architecture and allied fields across five decades of publication.',
    mediaType: 'video',
    mediaUrls: ['https://www.youtube.com/embed/vTy5mxFs6pY'],
    thumbnailUrl: '/IMAJ/thumb/Corpus.jpg',
    aspectRatio: 'square',
    tags: ['slideshow'],
    year: 2025,
    featured: true
  },
  {
    id: '14',
    title: 'The Source Code',
    description: 'An immersive 3D environment representing the journal’s citation network.',
    longDescription: 'Following the curators\' secret agenda, the Source Code honors print culture as the generative matrix of scholarly thought, reimagining bibliography not as a static list but as an encompassing environment that surrounds and contextualizes all academic production. It plunges viewers into a three-dimensional bibliographic universe, a visual representation of METU JFA\'s citation ecosystem composed of 1200 repeatedly cited sources across 614 articles. As the camera navigates through this virtual world of book covers, each title momentarily comes into focus before receding into the broader constellation, creating a spatial experience of moving through the journal\'s theoretical foundations. This digital environment transforms the typically invisible network of citation and influence into an explorable terrain, allowing you to grasp intuitively the density and diversity of resources that have shaped discourse within architecture, urban planning, and design over the journal\'s history. ',
    mediaType: 'interactive',
    mediaUrls: ['https://omurbugra.github.io/3djfa/'],
    interactiveUrl: 'https://omurbugra.github.io/3djfa/',
    thumbnailUrl: '/IMAJ/thumb/source.jpg',
    aspectRatio: 'landscape',
    tags: ['3d', 'citation'],
    year: 2025,
    featured: true
  },
  {
    id: '15',
    title: 'The Editor’s Desk',
    description: 'A reconstruction of METU JFA’s pre-digital editorial infrastructure.',
    longDescription: 'The Editor’s Desk reconstructs the pre-digital workspace of METU JFA\'s early editorial operations, featuring an authentic typewriter alongside period folders and administrative materials borrowed from the Journal’s archives. The carefully staged desk scene materializes the physical infrastructure that once supported scholarly communication, invoking the tactile, mechanical processes through which scholarly knowledge was collected, evaluated, edited, and disseminated before the digital turn. Each artifact in this installation represents a node in the complex workflow that transformed manuscripts into published scholarship. The Editor’s Desk serves as a counterpoint to contemporary digital publishing practices, reminding viewers of the labor-intensive material culture that shaped academic discourse for much of METU JFA\'s history and honoring the hands-on editorial work that established the journal\'s scholarly foundations.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/desk_1.jpg', '/IMAJ/desk_2.jpg', '/IMAJ/desk_3.jpg', '/IMAJ/desk_4.jpg', '/IMAJ/desk_5.jpg'],
    thumbnailUrl: '/IMAJ/desk_1.jpg',
    aspectRatio: 'portrait',
    tags: ['editorial'],
    year: 2025,
    featured: true
  },
  {
    id: '16',
    title: 'The Tree',
    description: 'An evolving wooden archive of all METU JFA articles since 1975.',
    longDescription: 'This interactive wooden sculpture displays the full list of articles published in METU JFA, with each plaque representing a single contribution. Shaped like a tree, the installation symbolizes the journal’s evolving body of knowledge, growing upward from its roots in 1975 to the most recent branches of scholarship. Chronologically arranged from bottom to top, the structure reflects both temporal continuity and organic expansion. As you engage with the plaques, the tree shifts shape; its form never fixed, always responsive. The Tree celebrates not only the journal’s cumulative legacy, but also the unique perspective of each reader, researcher, and participant. It invites you to reconfigure the archive, making visible the many ways scholarship can be approached, assembled, and reimagined.',
    mediaType: 'image',
    mediaUrls: ['/IMAJ/agac_1.jpg', '/IMAJ/agac_2.jpg', '/IMAJ/agac_3.jpg', '/IMAJ/agac_4.jpg', '/IMAJ/agac_5.jpg'],
    thumbnailUrl: '/IMAJ/agac_1.jpg',
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