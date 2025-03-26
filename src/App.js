import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Team from './components/Team';
import Events from './components/Events';
import DJMixes from './components/DJMixes';
import { Menu, X, Instagram, Music, Facebook, Youtube } from 'lucide-react';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <div className="app relative">
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleDrawer}
          className="fixed top-4 left-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } flex flex-col`}
        >
          <div className="p-6 mt-14">
            <div className="text-2xl font-bold text-white mb-6">Ritmo Collective</div>
            <nav className="nav">
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link 
                    to="/" 
                    className="text-white hover:text-red-400 transition-colors block py-1 px-1"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="text-white hover:text-red-400 transition-colors block py-1 px-1"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/events" 
                    className="text-white hover:text-red-400 transition-colors block py-1 px-1"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/mixes" 
                    className="text-white hover:text-red-400 transition-colors block py-1 px-1"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    DJ Mixes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="mt-auto p-6 border-t border-white/10">
            <div className="social-links flex space-x-4 mb-4">
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
            <p className="text-white/50 text-xs">&copy; {new Date().getFullYear()} Ritmo Collective</p>
          </div>
        </div>
        
        {/* Overlay when drawer is open */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-30 backdrop-blur-sm"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
        )}
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mixes" element={<DJMixes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;