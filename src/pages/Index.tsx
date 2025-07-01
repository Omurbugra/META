
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [lettersVisible, setLettersVisible] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const title = "META JFA";
  
  useEffect(() => {
    // Animate letters one by one
    const letterTimer = setInterval(() => {
      setLettersVisible(prev => {
        if (prev < title.length) {
          return prev + 1;
        } else {
          clearInterval(letterTimer);
          // Show subtitle after title animation
          setTimeout(() => setShowSubtitle(true), 500);
          // Show button after subtitle
          setTimeout(() => setShowButton(true), 3000);
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(letterTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 architectural-grid opacity-30" />
      
      {/* Geometric Elements */}
      <div className="absolute inset-0">
        {/* Top horizontal line */}
        <div 
          className="absolute top-20 left-0 w-full h-px bg-white geometric-line"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Vertical lines */}
        <div 
          className="absolute left-20 top-0 w-px h-full bg-white geometric-line"
          style={{ animationDelay: '2.5s' }}
        />
        <div 
          className="absolute right-20 top-0 w-px h-full bg-white geometric-line"
          style={{ animationDelay: '3s' }}
        />
        
        {/* Bottom horizontal line */}
        <div 
          className="absolute bottom-20 left-0 w-full h-px bg-white geometric-line"
          style={{ animationDelay: '3.5s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold tracking-wider mb-4">
              {title.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block letter-reveal ${
                    index < lettersVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    transformOrigin: 'center bottom'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className="mb-16 h-20 flex items-center justify-center">
            {showSubtitle && (
              <p className="text-xl md:text-2xl font-light max-w-3xl typewriter">
                50 Years of METU Journal of the Faculty of Architecture
              </p>
            )}
          </div>

          {/* Animated Button */}
          <div className="flex justify-center">
            {showButton && (
              <Link to="/gallery">
                <Button 
                  size="lg" 
                  className="text-lg px-16 py-8 font-medium tracking-widest bg-white text-black hover:bg-gray-100 transition-all duration-500 transform slide-in-left pulse-glow border-2 border-white"
                >
                  ENTER EXHIBITION
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Architectural Drawing Elements */}
      <svg className="absolute bottom-10 left-10 w-32 h-32 opacity-30" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.5" className="architectural-draw" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: '4s' }} />
        <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: '4.5s' }} />
      </svg>

      <svg className="absolute top-10 right-10 w-32 h-32 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" className="architectural-draw" style={{ animationDelay: '5s' }} />
        <line x1="20" y1="20" x2="80" y2="80" stroke="white" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: '5.5s' }} />
        <line x1="80" y1="20" x2="20" y2="80" stroke="white" strokeWidth="0.3" className="architectural-draw" style={{ animationDelay: '6s' }} />
      </svg>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border border-white rounded-full flex justify-center opacity-50">
          <div className="w-1 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
