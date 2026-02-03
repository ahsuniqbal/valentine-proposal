import CelebrationAnimation from '@/components/CelebrationAnimation';
import FloatingHearts from '@/components/FloatingHearts';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

const ValentinePage = () => {
  const name = 'Ahsun'
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const capitalizedName = name 
    ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    : 'My Love';

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 20;
    
    const maxX = container.width - buttonWidth - padding;
    const maxY = container.height - buttonHeight - padding;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  }, []);

  const handleYesClick = () => {
    setShowCelebration(true);

    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_d3sk5sn',
      template_id: 'template_q0b4g9s',
      user_id: 'on4tlltNrKccdA7Tx',
      template_params: { 'name': name }
    })
  };

  // Set initial position after mount
  useEffect(() => {
    if (containerRef.current && !isNoButtonMoved) {
      const container = containerRef.current.getBoundingClientRect();
      setNoButtonPosition({ 
        x: container.width / 2 + 70,
        y: container.height / 2 + 80 
      });
    }
  }, [isNoButtonMoved]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      <FloatingHearts />
      
      {showCelebration && <CelebrationAnimation />}
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {!showCelebration ? (
          <>
            {/* Main Question Card */}
            <div className="text-center max-w-lg mx-auto">
              {/* Decorative hearts */}
              <div className="text-5xl mb-6 animate-pulse">💕</div>

              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground/90 italic mb-12 leading-relaxed">
                Hey!
              </p>
              
              {/* Name with elegant styling */}
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-primary mb-8 drop-shadow-sm">
                {capitalizedName}
              </h1>
              
              {/* The Question */}
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground/90 italic mb-12 leading-relaxed">
                Will you be my Valentine?
              </p>
              
              {/* Yes Button - Always in place */}
              <button
                onClick={handleYesClick}
                className="px-12 py-4 text-xl font-serif bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-primary/90"
              >
                Yes! 💖
              </button>
            </div>

            {/* No Button - Moves around */}
            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              onTouchStart={moveNoButton}
              className="px-8 py-3 text-lg font-serif bg-muted text-muted-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out"
              style={{
                position: 'absolute',
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: isNoButtonMoved ? 'all 0.3s ease-out' : 'none',
              }}
            >
              No
            </button>
          </>
        ) : (
          /* Celebration Message */
          <div className="text-center animate-scale-in">
            <div className="text-6xl mb-8">💕</div>
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-primary mb-6">
              Yay!
            </h1>
            <p className="font-serif text-2xl sm:text-3xl text-foreground/90 italic mb-4">
              I knew you'd say yes!
            </p>
            <p className="font-script text-4xl sm:text-5xl text-primary/80 mt-8">
              Thank you, {capitalizedName}! 💖
            </p>
          </div>
        )}
      </div>

      {/* Decorative gradient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-primary/5 via-transparent to-accent/5 z-0" />
    </div>
  );
};

export default ValentinePage;
