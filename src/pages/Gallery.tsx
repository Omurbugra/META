
import { useState } from "react";
import { X, ArrowRight, Grid, List, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryData = [
  {
    id: 'editors-desk',
    title: "The Editor's Desk",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop",
    description: "A comprehensive archaeological study of editorial processes throughout five decades of architectural discourse. This immersive installation reconstructs the physical and intellectual spaces where editorial decisions were made, revealing the hidden networks of correspondence, the evolution of academic standards, and the persistent tensions between local and international architectural thought. Through digitized manuscripts, annotated proofs, and reconstructed desk spaces, visitors encounter the material culture of knowledge production that has shaped architectural education and practice. The installation includes over 500 original documents, 12 reconstructed workspaces from different decades, and interactive digital archives that allow visitors to trace the evolution of editorial standards and practices. Each desk setup represents a different era in the journal's history, complete with period-appropriate typewriters, reference books, correspondence files, and editorial notes that reveal the meticulous process behind each publication decision.",
    size: "large"
  },
  {
    id: 'ecosystem',
    title: "The Ecosystem",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=6000&auto=format&fit=crop",
    description: "An intricate data visualization mapping the interconnected network of architectural discourse and academic relationships that have emerged around the journal over fifty years. This dynamic installation reveals patterns of collaboration, citation networks, and intellectual genealogies that connect METU to global architectural academia. Interactive nodes allow visitors to explore how ideas migrate across continents, how theoretical frameworks evolve through translation and interpretation, and how a single publication can become the nexus of an international community of practice. The visualization processes over 15,000 academic papers, 8,000 author relationships, and 25,000 citations to create a living map of architectural knowledge. Visitors can manipulate temporal controls to watch the network grow and evolve, observe the emergence of new research clusters, and discover unexpected connections between seemingly disparate fields of architectural inquiry.",
    size: "normal"
  },
  {
    id: 'correspondence',
    title: "The Correspondence Network",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=5530&auto=format&fit=crop",
    description: "A comprehensive visualization of the global network of academic correspondence and intellectual exchange that has sustained the journal's international relevance. Drawing from thousands of letters, emails, and editorial communications, this installation maps the geography of architectural knowledge, revealing how ideas travel across borders and how academic relationships form the invisible infrastructure of intellectual life. Visitors can trace individual correspondences that led to breakthrough publications, or explore the collective patterns that reveal the journal's role in shaping international architectural discourse. The archive includes over 12,000 pieces of correspondence spanning 50 years, from handwritten letters in the early years to contemporary digital exchanges. Interactive displays allow visitors to read selected correspondence, understand the personal relationships behind professional collaborations, and witness the gradual transformation of academic communication from formal letters to instant digital dialogue.",
    size: "normal"
  },
  {
    id: 'chronogram',
    title: "The Chronogram",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop",
    description: "A temporal mapping of architectural knowledge evolution across five decades, presenting the journal's evolution through multiple temporal scales simultaneously. This installation combines traditional timeline visualization with speculative futures, showing how architectural ideas emerge, develop, and transform over time. Through interactive elements, visitors can explore how global events, technological changes, and cultural shifts have influenced the journal's content and direction, while algorithmic projections suggest possible futures for architectural publishing and knowledge dissemination. The chronogram integrates historical data from 1,200 published articles, major global events, technological milestones, and cultural movements to create a comprehensive temporal landscape. Visitors can zoom from decade-long trends to month-by-month editorial decisions, understanding how external forces shaped the journal's intellectual trajectory and how the journal itself influenced broader architectural discourse.",
    size: "large"
  },
  {
    id: 'citations',
    title: "Citation Geographies",
    year: "2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=5760&auto=format&fit=crop",
    description: "An innovative geographic visualization exploring the spatial distribution of academic influence and citation patterns in architectural scholarship. This installation maps how knowledge travels geographically, revealing the centers and peripheries of architectural discourse, the colonial and post-colonial dynamics of academic publishing, and the emergence of new intellectual territories. Through layered cartographic representations, visitors encounter the political geography of knowledge production and the role of language, translation, and cultural context in shaping global architectural theory. The visualization analyzes citation patterns from 45,000 academic papers across 120 countries, revealing how geographical proximity, language barriers, and institutional relationships influence knowledge circulation. Interactive maps allow visitors to explore citation flows between different regions, understand how certain ideas gain global currency while others remain geographically bounded, and observe the gradual shift from Euro-American dominance to more distributed global networks of architectural knowledge.",
    size: "normal"
  },
  {
    id: 'corpus',
    title: "The Complete Visual Corpus",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
    description: "Every visual element published across five decades, creating a comprehensive visual archaeology of architectural representation. This monumental installation presents over 10,000 images, drawings, diagrams, and photographs as a single navigable landscape, revealing the evolution of architectural visualization, the changing tools and techniques of representation, and the persistent visual languages that connect generations of architects. Machine learning algorithms identify visual patterns and relationships that human eyes might miss, creating new readings of familiar images and unexpected connections across decades of architectural thought. The corpus includes technical drawings, conceptual sketches, building photographs, urban plans, detail drawings, and experimental visualizations, all organized through both chronological and thematic clustering algorithms. Visitors can explore visual evolution through time, discover recurring motifs and techniques, and understand how representational methods both reflect and shape architectural thinking.",
    size: "large"
  },
  {
    id: 'tree',
    title: "The Tree",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=6000&auto=format&fit=crop",
    description: "A dendritic visualization of knowledge branching and growth within the journal's intellectual ecosystem. This organic data structure maps how ideas branch, merge, and evolve through citation networks, collaborative relationships, and thematic development. Visitors can explore how foundational concepts have grown into complex theoretical frameworks, trace the genealogies of architectural thinking, and discover unexpected connections between seemingly disparate research areas. The installation reveals the journal not as a linear accumulation of knowledge but as a living, growing organism of interconnected ideas. The tree structure analyzes thematic evolution across 1,200 published articles, identifying 156 major conceptual branches and thousands of smaller idea clusters. Interactive exploration allows visitors to follow the development of specific concepts from their first appearance through their contemporary manifestations, understanding how architectural ideas undergo mutation, hybridization, and evolution as they move through different authors, contexts, and time periods.",
    size: "normal"
  },
  {
    id: 'orbit',
    title: "The Orbit",
    year: "2024", 
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=5120&auto=format&fit=crop",
    description: "A celestial model of architectural discourse where publications, authors, and concepts exist in gravitational relationships with each other. This dynamic installation visualizes the journal's intellectual solar system, with major theoretical contributions as planets, smaller articles as satellites, and emerging ideas as comets crossing established orbits. Visitors can manipulate the system's parameters to observe how intellectual gravity shapes the formation of schools of thought, the emergence of new theoretical territories, and the complex dance of influence and citation that characterizes academic discourse. The orbital model processes influence metrics from 2,400 authors and 1,200 articles, calculating gravitational forces based on citation frequency, collaborative relationships, and thematic proximity. The dynamic system allows visitors to observe how intellectual influence operates across time, how certain ideas achieve stable orbits while others follow elliptical paths through the academic universe, and how the gravitational pull of major theoretical works shapes the trajectory of emerging scholarship.",
    size: "normal"
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [layoutType, setLayoutType] = useState<'grid' | 'list'>('grid');

  const GalleryItem = ({ item, index }: { item: any; index: number }) => {
    if (layoutType === 'list') {
      return (
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16 group">
          <div className="lg:col-span-2">
            <div 
              className="cursor-pointer relative overflow-hidden bg-gray-900 rounded-lg aspect-[4/3] group-hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Eye className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-lg">{item.year}</p>
            </div>
            <p className="text-gray-200 leading-relaxed text-base line-clamp-4">
              {item.description}
            </p>
            <Button
              onClick={() => setSelectedItem(item)}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View Full Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      );
    }

    const isReverse = index % 2 === 1;
    const isLarge = item.size === 'large';
    
    return (
      <div className={`grid ${isLarge ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center mb-24 group ${isReverse && !isLarge ? 'lg:grid-flow-dense' : ''}`}>
        <div 
          className={`cursor-pointer ${isReverse && !isLarge ? 'lg:col-start-2' : ''}`}
          onClick={() => setSelectedItem(item)}
        >
          <div className={`relative overflow-hidden bg-gray-900 rounded-lg transition-all duration-700 group-hover:shadow-2xl ${
            isLarge ? 'aspect-[21/9]' : 'aspect-[4/3]'
          }`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <Eye className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12" />
            </div>
          </div>
        </div>
        
        <div className={`space-y-6 ${isReverse && !isLarge ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
              {item.title}
            </h2>
            <p className="text-xl text-gray-400 font-light">{item.year}</p>
            <div className="w-24 h-px bg-white"></div>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl line-clamp-4">
            {item.description}
          </p>
          
          <Button
            onClick={() => setSelectedItem(item)}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            View Full Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Explore the curated collection of visualizations, archives, and interactive experiences 
              that map 50 years of architectural discourse and intellectual evolution through 
              innovative digital storytelling and data visualization.
            </p>
            
            {/* Layout Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-400">Layout:</span>
              <div className="flex items-center bg-gray-900 rounded-lg p-1">
                <Button
                  variant={layoutType === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLayoutType('grid')}
                  className={`${layoutType === 'grid' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'} transition-all duration-200`}
                >
                  <Grid className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={layoutType === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLayoutType('list')}
                  className={`${layoutType === 'list' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'} transition-all duration-200`}
                >
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
              </div>
            </div>
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

      {/* Enhanced Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-start justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative max-w-6xl w-full my-8">
            {/* Close Button */}
            <Button
              onClick={() => setSelectedItem(null)}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-gray-300 hover:bg-white/10 z-10"
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Modal Content */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-[50vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">{selectedItem.title}</h3>
                  <p className="text-gray-400 text-xl mb-6">{selectedItem.year}</p>
                  <div className="w-24 h-px bg-white mb-8"></div>
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
