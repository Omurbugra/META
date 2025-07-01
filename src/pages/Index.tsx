import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Team from "./Team";


const Index = () => {
  const [lettersVisible, setLettersVisible] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const title = "META JFA";

  useEffect(() => {
    const letterTimer = setInterval(() => {
      setLettersVisible((prev) => {
        if (prev < title.length) {
          return prev + 1;
        } else {
          clearInterval(letterTimer);
          setTimeout(() => setShowSubtitle(true), 500);
          setTimeout(() => setShowButton(true), 3000);
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(letterTimer);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-500">
          <div className="absolute inset-0 architectural-grid opacity-30" />

          <div className="absolute inset-0">
            <div className="absolute top-20 left-0 w-full h-px bg-foreground/50 geometric-line" style={{ animationDelay: "2s" }} />
            <div className="absolute left-20 top-0 w-px h-full bg-foreground/50 geometric-line" style={{ animationDelay: "2.5s" }} />
            <div className="absolute right-20 top-0 w-px h-full bg-foreground/50 geometric-line" style={{ animationDelay: "3s" }} />
            <div className="absolute bottom-20 left-0 w-full h-px bg-foreground/50 geometric-line" style={{ animationDelay: "3.5s" }} />
          </div>

          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-6">
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold tracking-wider mb-4">
                  {title.split("").map((letter, index) => (
                      <span
                          key={index}
                          className={`inline-block letter-reveal ${
                              index < lettersVisible ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            animationDelay: `${index * 0.2}s`,
                            transformOrigin: "center bottom",
                          }}
                      >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                  ))}
                </h1>
              </div>

              {showSubtitle && (
                  <div className="mb-16 h-20 flex items-center justify-center">
                    <p className="text-xl md:text-2xl font-light max-w-3xl typewriter text-muted-foreground">
                      50 Years of METU Journal of the Faculty of Architecture
                    </p>
                  </div>
              )}

              {showButton && (
                  <div className="flex justify-center">
                    <Link to="/gallery">
                      <Button
                          size="lg"
                          className="text-lg px-16 py-8 font-medium tracking-widest bg-foreground text-background hover:bg-muted transition-all duration-500 transform slide-in-left pulse-glow border-2 border-foreground"
                      >
                        ENTER EXHIBITION
                      </Button>
                    </Link>
                  </div>
              )}
            </div>
          </div>

          {/* Decorative SVG */}
          <svg className="absolute bottom-10 left-10 w-32 h-32 opacity-30" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="architectural-draw" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: "4s" }} />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: "4.5s" }} />
          </svg>

          <svg className="absolute top-10 right-10 w-32 h-32 opacity-30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="architectural-draw" style={{ animationDelay: "5s" }} />
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: "5.5s" }} />
            <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: "6s" }} />
          </svg>

          <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={handleScrollDown}
          >
            <div className="w-6 h-12 border border-foreground rounded-full flex justify-center opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-1 h-4 bg-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="min-h-screen bg-background text-foreground py-20 transition-colors">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-8 tracking-wide">About the Exhibition</h2>
              <div className="w-32 h-px bg-foreground mx-auto mb-8"></div>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                To celebrate the 50th anniversary of the METU Journal of the Faculty of Architecture, META JFA presents thematic selections, archival materials, and multi-modal archival visualizations that excavate, map, and reimagine the intellectual knowledge production cultivated over half a century.
              </p>
              <p>
                META JFA explores the creative tension between text, design, and education, revealing how the written word has fundamentally shaped the Faculty's foundations since 1975. The journal, we discover, is not merely a repository of knowledge but an active cartographic project that has continually redrawn the boundaries of our fields.
              </p>
              <p>
                Yet in making these maps, we take possession of and literally define an interface: we name features, reveal relationships, indicate boundaries, and mark unknown regions for exploration.
              </p>
              <p>
                What you encounter is simultaneously familiar and disorienting—a terrain inhabited for half a century yet only now apprehensible as a totality. We invite you not to observe but to co-cartograph this landscape, to recognize in these patterns not merely what has been written, but what might yet be imagined into existence. The map, after all, is never the territory—it is the territory's future.
              </p>
            </div>
          </div>
        </div>
        <Team />
      </div>
  );
};

export default Index;
