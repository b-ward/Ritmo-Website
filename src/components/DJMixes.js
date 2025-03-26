import React, { useState, useEffect } from 'react';

function DJMixes() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Sample mixes data - in a real application, this might come from an API
  const mixes = [
    {
      id: 1,
      title: "Pixel Chick Nexus Mix",
      artist: "Ritmo Collective",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1847888790&color=%236B46C1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      artistUrl: "https://soundcloud.com/ritmocollectivo",
      trackUrl: "https://soundcloud.com/ritmocollectivo/pixel-chick-nexus-mix",
      date: "March 2025",
      genre: "Electronic / House",
      duration: "60 minutes"
    },
    {
      id: 2,
      title: "Siki Nexus Mix",
      artist: "Siki",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1847353341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      artistUrl: "https://soundcloud.com/ritmocollectivo",
      trackUrl: "https://soundcloud.com/ritmocollectivo/siki-nexus-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      date: "February 2025",
      genre: "Electronic / House",
      duration: "60 minutes"
    }
    // {
    //   id: 3,
    //   title: "Afro Beats Exploration",
    //   artist: "Beat Sculptor",
    //   embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1847888790&color=%236B46C1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    //   artistUrl: "https://soundcloud.com/ritmocollectivo",
    //   trackUrl: "https://soundcloud.com/ritmocollectivo/pixel-chick-nexus-mix",
    //   date: "January 2025",
    //   genre: "Afrobeats / Amapiano",
    //   duration: "90 minutes"
    // }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className={`bg-gradient-to-b from-purple-900/70 to-black py-16 px-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mixes</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-purple-200">
            Explore exclusive sets from the talented artists in our collective. From deep house to experimental beats, there's something for everyone.
          </p>
        </div>
      </div>

      {/* Mixes Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-12">
          {mixes.map((mix) => (
            <div 
              key={mix.id} 
              className={`bg-gray-900/50 backdrop-blur-sm border border-purple-900/30 rounded-lg overflow-hidden transition-all duration-700 transform hover:scale-[1.01] transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{mix.title}</h2>
                    <p className="text-purple-300">{mix.artist}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-gray-400 text-sm">
                    <span className="mr-4">{mix.date}</span>
                    <span className="mr-4">{mix.genre}</span>
                    <span>{mix.duration}</span>
                  </div>
                </div>
                
                {/* SoundCloud Embed */}
                <div className="mb-4">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src={mix.embedUrl}
                    title={mix.title}
                    className="rounded-md"
                  ></iframe>
                </div>
                
                {/* Attribution */}
                <div className="text-xs text-gray-500 mt-2">
                  <a href={mix.artistUrl} title={mix.artist} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                    {mix.artist}
                  </a> · 
                  <a href={mix.trackUrl} title={mix.title} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-1">
                    {mix.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Ritmo Collective. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DJMixes;