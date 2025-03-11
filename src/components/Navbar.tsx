import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GetStartedButton from './GetStartedButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img src="/newlogo.png" alt="SignalsHQ Logo" className="h-8 w-auto" />
          <span className="text-xl font-display font-bold text-gray-900">SignalsHQ</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-base font-display font-medium text-gray-700 hover:text-purple-600 transition-colors">Features</a>
          <a href="#clients" className="text-base font-display font-medium text-gray-700 hover:text-purple-600 transition-colors">Clients</a>
          <a href="#faq" className="text-base font-display font-medium text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
          <GetStartedButton />
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-6 px-6 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#features" 
              className="text-base font-display font-medium text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#clients" 
              className="text-base font-display font-medium text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </a>
            <a 
              href="#faq" 
              className="text-base font-display font-medium text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2">
              <GetStartedButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
