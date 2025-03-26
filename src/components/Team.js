import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

function Team() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Team member data with placeholder images
  const teamMembers = [
    {
      id: 1,
      name: "Elena Rodriguez",
      role: "Founder & Lead Percussionist",
      bio: "A Grammy-nominated percussionist with over 15 years of experience in world music fusion.",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Carlos Mendez",
      role: "Musical Director",
      bio: "Virtuoso guitarist and ethnomusicologist specializing in Latin American rhythms.",
      image: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "Vocal Coach & Singer",
      bio: "Internationally acclaimed vocalist with expertise in world music and vocal training.",
      image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Marcus Williams",
      role: "Rhythm & Dance Instructor",
      bio: "Professional dancer and choreographer with a passion for global dance traditions.",
      image: "/api/placeholder/400/400",
      socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Sofia Chen",
      role: "Music Producer & Composer",
      bio: "Award-winning producer blending traditional and contemporary musical styles.",
      image: "/api/placeholder/400/400",
      socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Diego Hernandez",
      role: "World Music Researcher",
      bio: "Ethnomusicologist dedicated to preserving and promoting cultural musical heritage.",
      image: "/api/placeholder/400/400",
      socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className={`bg-gradient-to-b from-purple-900/70 to-black py-16 px-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-purple-200">
            The passionate artists and researchers behind Ritmo Collective, united by a love for global musical traditions.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`bg-gray-900/50 backdrop-blur-sm border border-purple-900/30 rounded-lg overflow-hidden transition-all duration-700 transform hover:scale-[1.02] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Member Image */}
              <div className="w-full aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Member Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-300">{member.role}</p>
                </div>

                <p className="text-gray-300 mb-4">{member.bio}</p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a 
                    href={member.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href={member.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Twitter size={24} />
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

export default Team;