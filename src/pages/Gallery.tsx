
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

const galleryData = [
  {
    id: 'editors-desk',
    title: "The Editor's Desk",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop",
    description: "A comprehensive archaeological study of editorial processes throughout five decades of architectural discourse. This immersive installation reconstructs the physical and intellectual spaces where editorial decisions were made, revealing the hidden networks of correspondence, the evolution of academic standards, and the persistent tensions between local and international architectural thought. Through digitized manuscripts, annotated proofs, and reconstructed desk spaces, visitors encounter the material culture of knowledge production that has shaped architectural education and practice.",
    size: "large"
  },
  {
    id: 'ecosystem',
    title: "The Ecosystem",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=6000&auto=format&fit=crop",
    description: "An intricate data visualization mapping the interconnected network of architectural discourse and academic relationships that have emerged around the journal over fifty years. This dynamic installation reveals patterns of collaboration, citation networks, and intellectual genealogies that connect METU to global architectural academia. Interactive nodes allow visitors to explore how ideas migrate across continents, how theoretical frameworks evolve through translation and interpretation, and how a single publication can become the nexus of an international community of practice.",
    size: "normal"
  },
  {
    id: 'correspondence',
    title: "The Correspondence Network",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=5530&auto=format&fit=crop",
    description: "A comprehensive visualization of the global network of academic correspondence and intellectual exchange that has sustained the journal's international relevance. Drawing from thousands of letters, emails, and editorial communications, this installation maps the geography of architectural knowledge, revealing how ideas travel across borders and how academic relationships form the invisible infrastructure of intellectual life. Visitors can trace individual correspondences that led to breakthrough publications, or explore the collective patterns that reveal the journal's role in shaping international architectural discourse.",
    size: "normal"
  },
  {
    id: 'chronogram',
    title: "The Chronogram",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop",
    description: "A temporal mapping of architectural knowledge evolution across five decades, presenting the journal's evolution through multiple temporal scales simultaneously. This installation combines traditional timeline visualization with speculative futures, showing how architectural ideas emerge, develop, and transform over time. Through interactive elements, visitors can explore how global events, technological changes, and cultural shifts have influenced the journal's content and direction, while algorithmic projections suggest possible futures for architectural publishing and knowledge dissemination.",
    size: "large"
  },
  {
    id: 'citations',
    title: "Citation Geographies",
    year: "2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=5760&auto=format&fit=crop",
    description: "An innovative geographic visualization exploring the spatial distribution of academic influence and citation patterns in architectural scholarship. This installation maps how knowledge travels geographically, revealing the centers and peripheries of architectural discourse, the colonial and post-colonial dynamics of academic publishing, and the emergence of new intellectual territories. Through layered cartographic representations, visitors encounter the political geography of knowledge production and the role of language, translation, and cultural context in shaping global architectural theory.",
    size: "normal"
  },
  {
    id: 'corpus',
    title: "The Complete Visual Corpus",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
    description: "Every visual element published across five decades, creating a comprehensive visual archaeology of architectural representation. This monumental installation presents over 10,000 images, drawings, diagrams, and photographs as a single navigable landscape, revealing the evolution of architectural visualization, the changing tools and techniques of representation, and the persistent visual languages that connect generations of architects. Machine learning algorithms identify visual patterns and relationships that human eyes might miss, creating new readings of familiar images and unexpected connections across decades of architectural thought.",
    size: "large"
  },
  {
    id: 'tree',
    title: "The Tree",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=6000&auto=format&fit=crop",
    description: "A dendritic visualization of knowledge branching and growth within the journal's intellectual ecosystem. This organic data structure maps how ideas branch, merge, and evolve through citation networks, collaborative relationships, and thematic development. Visitors can explore how foundational concepts have grown into complex theoretical frameworks, trace the genealogies of architectural thinking, and discover unexpected connections between seemingly disparate research areas. The installation reveals the journal not as a linear accumulation of knowledge but as a living, growing organism of interconnected ideas.",
    size: "normal"
  },
  {
    id: 'orbit',
    title: "The Orbit",
    year: "2024", 
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=5120&auto=format&fit=crop",
    description: "A celestial model of architectural discourse where publications, authors, and concepts exist in gravitational relationships with each other. This dynamic installation visualizes the journal's intellectual solar system, with major theoretical contributions as planets, smaller articles as satellites, and emerging ideas as comets crossing established orbits. Visitors can manipulate the system's parameters to observe how intellectual gravity shapes the formation of schools of thought, the emergence of new theoretical territories, and the complex dance of influence and citation that characterizes academic discourse.",
    size: "normal"
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const GalleryItem = ({ item, index }: { item: any; index: number }) => {
    const isReverse = index % 2 === 1;
    const isLarge = item.size === 'large';
    
    return (
      <div className={`grid ${isLarge ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center mb-32 ${isReverse && !isLarge ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image */}
        <div 
          className={`group cursor-pointer ${isReverse && !isLarge ? 'lg:col-start-2' : ''}`}
          onClick={() => setSelectedItem(item)}
        >
          <div className={`relative overflow-hidden bg-gray-900 rounded-lg transition-all duration-700 group-hover:shadow-2xl ${
            isLarge ? 'aspect-[21/9]' : 'aspect-[4/3]'
          }`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            
            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center text-white">
                <span className="text-lg font-medium">Explore</span>
                <ArrowRight className="ml-3 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className={`space-y-6 ${isReverse && !isLarge ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
              {item.title}
            </h2>
            <p className="text-xl text-gray-400 font-light">{item.year}</p>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl">
            {item.description}
          </p>
          
          <button
            onClick={() => setSelectedItem(item)}
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium text-lg"
          >
            View Full Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wide">
              Exhibition
            </h1>
            <div className="w-32 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the curated collection of visualizations, archives, and interactive experiences 
              that map 50 years of architectural discourse and intellectual evolution through 
              innovative digital storytelling and data visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Items */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {galleryData.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-full w-full flex flex-col items-center animate-scale-fade-in">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 pulse-glow"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative mb-8 w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full max-h-[60vh] object-contain rounded-lg"
              />
            </div>
            
            <div className="text-center text-white max-w-4xl">
              <h3 className="text-4xl font-bold mb-4 tracking-wide">{selectedItem.title}</h3>
              <p className="text-gray-300 mb-6 text-xl">{selectedItem.year}</p>
              <div className="w-24 h-px bg-white mx-auto mb-8"></div>
              <p className="text-gray-200 leading-relaxed text-lg">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
