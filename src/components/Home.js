import React, { useState, useEffect } from 'react';
import Video from '../public/images/loop.mp4'
import Logo from '../public/images/logo.png'
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Instagram, Music, Facebook, Youtube } from 'lucide-react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after a slight delay to allow video to buffer
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden m-0 p-0">
       {/* Video Background */}
       <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
         <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-between">
        {/* Header Section */}
        <div className="pt-10 md:pt-16 text-center">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Ritmo Collective
            <div className="flex items-center justify-center">
                <img className="w-32 h-32" src={Logo} alt="Logo"></img>
            </div>
          </h1>
          
          {/* Social Media Icons */}
          <div className={`flex justify-center gap-6 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="https://www.instagram.com/ritmocollective/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://soundcloud.com/ritmocollectivo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
              <Music size={28} />
            </a>
            <a href="https://www.facebook.com/people/Ritmo-Collective/61556839276343/#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://www.youtube.com/@Ritmocollective" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
              <Youtube size={28} />
            </a>
          </div>
          
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link to="/events" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg flex items-center gap-2 transition-all">
              Upcoming Events <Calendar size={18} />
            </Link>
            <Link to="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm flex items-center gap-2 transition-all">
              Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        {/* Footer Section */}
        <div className={`mt-16 text-center text-white/70 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <p>© {new Date().getFullYear()} Ritmo Collective. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;