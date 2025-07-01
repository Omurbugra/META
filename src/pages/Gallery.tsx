
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "The Editor's Desk",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop",
    description: "A comprehensive view of editorial processes throughout five decades"
  },
  {
    id: 2,
    title: "The Ecosystem",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=6000&auto=format&fit=crop",
    description: "Mapping the interconnected network of architectural discourse"
  },
  {
    id: 3,
    title: "The Correspondence Network", 
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=5530&auto=format&fit=crop",
    description: "Visualizing the global network of academic correspondence"
  },
  {
    id: 4,
    title: "The Chronogram",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop",
    description: "A temporal mapping of architectural knowledge evolution"
  },
  {
    id: 5,
    title: "Citation Geographies",
    year: "2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=5760&auto=format&fit=crop",
    description: "Geographic distribution of academic influence and citation patterns"
  },
  {
    id: 6,
    title: "The Complete Visual Corpus",
    year: "1975-2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
    description: "Every visual element published across five decades"
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Exhibition Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the curated collection of visualizations, archives, and interactive experiences 
            that map 50 years of architectural discourse.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full flex flex-col items-center">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="text-center text-white mt-6 max-w-2xl">
              <h3 className="text-2xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-300 mb-4">{selectedItem.year}</p>
              <p className="text-gray-200 leading-relaxed">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
