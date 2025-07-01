
const About = () => {
  const highlights = [
    "The Editor's Desk",
    "The Ecosystem", 
    "The Correspondence Network",
    "The Chronogram",
    "The Tree",
    "The Circle",
    "The Source Code",
    "Citation Geographies",
    "Citation Chronologies",
    "The Orbit",
    "The Dymaxion World",
    "The Drawings",
    "The Complete Visual Corpus",
    "Visual Legacy in Motion",
    "The Dictionary"
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">About the Exhibition</h1>
        </div>

        <div className="prose prose-lg max-w-none animate-fade-up">
          <div className="text-xl leading-relaxed space-y-8 text-gray-800">
            <div>
              <h2 className="text-2xl font-semibold mb-4">50 Years of METU Journal of Architecture</h2>
              <p>
                To celebrate the 50th anniversary of the METU Journal of the Faculty of Architecture, 
                META JFA presents thematic selections, archival materials, and multi-modal archival 
                visualizations that excavate, map, and reimagine the intellectual knowledge production 
                cultivated over half a century.
              </p>
            </div>

            <p>
              META JFA explores the creative tension between text, design, and education, revealing 
              how the written word has fundamentally shaped the Faculty's foundations since 1975. 
              The journal, we discover, is not merely a repository of knowledge but an active 
              cartographic project that has continually redrawn the boundaries of our fields.
            </p>

            <p>
              Yet in making these maps, we take possession of and literally define an interface: 
              we name features, reveal relationships, indicate boundaries, and mark unknown regions 
              for exploration.
            </p>

            <p>
              What you encounter is simultaneously familiar and disorienting—a terrain inhabited 
              for half a century yet only now apprehensible as a totality. We invite you not to 
              observe but to co-cartograph this landscape, to recognize in these patterns not merely 
              what has been written, but what might yet be imagined into existence. The map, after all, 
              is never the territory—it is the territory's future.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">META JFA Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={highlight}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
