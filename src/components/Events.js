import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Ticket } from 'lucide-react';

function Events() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const events = [
    {
      id: 1,
      title: "Global Rhythms Festival",
      date: "August 15-17, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Downtown Cultural Center",
      description: "A three-day celebration of world music featuring international artists, dance performances, and interactive workshops.",
      price: "$45 - $150",
      genre: "World Music",
      duration: "3 Days",
      tickets: "#"
    },
    {
      id: 2,
      title: "Latin Fusion Night",
      date: "September 22, 2024",
      time: "8:00 PM - 10:30 PM",
      location: "Ritmo Collective Studio",
      description: "An intimate evening of Latin jazz, salsa, and contemporary fusion with our resident musicians and special guest performers.",
      price: "$35",
      genre: "Latin Jazz",
      duration: "2.5 Hours",
      tickets: "#"
    },
    {
      id: 3,
      title: "World Percussion Masterclass",
      date: "October 5, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Arts Center",
      description: "An intensive workshop for musicians and enthusiasts, exploring rhythmic traditions from Africa, Latin America, and Asia.",
      price: "$75",
      genre: "Workshop",
      duration: "3 Hours",
      tickets: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className={`bg-gradient-to-b from-purple-900/70 to-black py-16 px-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-purple-200">
            Immerse yourself in unique musical experiences that celebrate global rhythms and cultural diversity.
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-12">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`bg-gray-900/50 backdrop-blur-sm border border-purple-900/30 rounded-lg overflow-hidden transition-all duration-700 transform hover:scale-[1.01] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{event.title}</h2>
                    <p className="text-purple-300">{event.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-gray-400 text-sm">
                    <span className="mr-4">{event.date}</span>
                    <span className="mr-4">{event.genre}</span>
                    <span>{event.duration}</span>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="mb-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center text-purple-400 mb-2">
                      <Clock className="mr-2" size={20} />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center text-purple-400 mb-2">
                      <MapPin className="mr-2" size={20} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-semibold text-purple-300">{event.price}</span>
                      <a 
                        href={event.tickets}
                        className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Ticket size={18} /> Get Tickets
                      </a>
                    </div>
                  </div>
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

export default Events;