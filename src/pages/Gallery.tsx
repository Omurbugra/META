
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

const galleryData = {
  featured: {
    id: 'featured',
    title: "The Editor's Desk",
    year: "1975-2025", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop",
    description: "A comprehensive view of editorial processes throughout five decades of architectural discourse",
    theme: "Archive"
  },
  archives: [
    {
      id: 'ecosystem',
      title: "The Ecosystem",
      year: "2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=6000&auto=format&fit=crop",
      description: "Mapping the interconnected network of architectural discourse and academic relationships",
      theme: "Visualization"
    },
    {
      id: 'correspondence',
      title: "The Correspondence Network", 
      year: "1975-2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=5530&auto=format&fit=crop",
      description: "Visualizing the global network of academic correspondence and intellectual exchange",
      theme: "Archive"
    }
  ],
  visualizations: [
    {
      id: 'chronogram',
      title: "The Chronogram",
      year: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop",
      description: "A temporal mapping of architectural knowledge evolution across five decades",
      theme: "Visualization"
    },
    {
      id: 'citations',
      title: "Citation Geographies",
      year: "2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=5760&auto=format&fit=crop",
      description: "Geographic distribution of academic influence and citation patterns in architectural scholarship",
      theme: "Visualization"
    }
  ],
  interactive: [
    {
      id: 'corpus',
      title: "The Complete Visual Corpus",
      year: "1975-2025",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
      description: "Every visual element published across five decades, creating a comprehensive visual archaeology",
      theme: "Interactive"
    }
  ]
};

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const SectionHeader = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center mb-16 slide-in-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">{title}</h2>
      <div className="w-32 h-px bg-white mx-auto mb-6 geometric-line"></div>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">{description}</p>
    </div>
  );

  const GalleryItem = ({ item, size = 'normal', delay = 0 }: { item: any; size?: 'large' | 'normal'; delay?: number }) => (
    <div 
      className={`group cursor-pointer slide-in-right gallery-item-large ${
        size === 'large' ? 'md:col-span-2' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
      onClick={() => setSelectedItem(item)}
    >
      <div className={`relative overflow-hidden bg-gray-900 rounded-lg ${
        size === 'large' ? 'aspect-[2/1]' : 'aspect-[4/3]'
      }`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        
        {/* Theme Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black bg-opacity-70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
          {item.theme}
        </div>

        {/* Hover Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center text-white">
            <span className="text-sm font-medium">Explore</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400">{item.year}</p>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Featured Work */}
      <section className="exhibition-section gallery-hero pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wide">
                Exhibition
              </h1>
              <div className="w-24 h-px bg-white mb-8 geometric-line"></div>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Explore the curated collection of visualizations, archives, and interactive experiences 
                that map 50 years of architectural discourse and intellectual evolution.
              </p>
              <div className="pulse-glow inline-block">
                <span className="text-sm font-medium tracking-widest text-gray-400">FEATURED WORK</span>
              </div>
            </div>
            
            <div className="slide-in-right">
              <GalleryItem item={galleryData.featured} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Archives Section */}
      <section className="exhibition-section py-20">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="The Archives"
            description="Historical materials and correspondence that trace the evolution of architectural thought"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            {galleryData.archives.map((item, index) => (
              <GalleryItem key={item.id} item={item} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Visualizations Section */}
      <section className="exhibition-section py-20">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="The Visualizations"
            description="Data-driven explorations revealing hidden patterns in architectural scholarship"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            {galleryData.visualizations.map((item, index) => (
              <GalleryItem key={item.id} item={item} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Interactive Experience Section */}
      <section className="exhibition-section py-20">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Interactive Experience"
            description="Tools and explorations that invite active engagement with the archive"
          />
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {galleryData.interactive.map((item, index) => (
              <GalleryItem key={item.id} item={item} size="large" delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-full flex flex-col items-center animate-scale-fade-in">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 pulse-glow"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative mb-8">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black bg-opacity-70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                {selectedItem.theme}
              </div>
            </div>
            
            <div className="text-center text-white max-w-2xl">
              <h3 className="text-3xl font-semibold mb-4 tracking-wide">{selectedItem.title}</h3>
              <p className="text-gray-300 mb-6 text-lg">{selectedItem.year}</p>
              <div className="w-24 h-px bg-white mx-auto mb-6"></div>
              <p className="text-gray-200 leading-relaxed text-lg">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
