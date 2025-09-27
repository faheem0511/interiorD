import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHowDropdown, setShowHowDropdown] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileHowDropdown, setShowMobileHowDropdown] = useState(false);
  const [showMobilePortfolioDropdown, setShowMobilePortfolioDropdown] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > heroHeight);
    };

    heroRef.current = document.querySelector('.hero-section');
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setShowMobileHowDropdown(false);
        setShowMobilePortfolioDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = isSticky || isHovered;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setShowMobileHowDropdown(false);
      setShowMobilePortfolioDropdown(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowMobileHowDropdown(false);
    setShowMobilePortfolioDropdown(false);
  };

  return (
    <>
      <div
        className={`w-full z-50 transition-all duration-1000 ${
          isSticky ? 'fixed top-0 shadow-md py-3' : 'absolute top-0 py-6'
        } ${isActive || isMobileMenuOpen ? 'bg-white' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowHowDropdown(false);
          setShowPortfolioDropdown(false);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold z-60 ${
              isActive || isMobileMenuOpen ? 'text-decorilla-dark' : 'text-white'
            }`}
            onClick={closeMobileMenu}
          >
            <span className={isActive || isMobileMenuOpen ? 'text-decorilla-blue' : 'text-white'}>
              DECO
            </span>
            WISE
          </Link>


          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 relative">
            {/* HOW IT WORKS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowHowDropdown(true)}
              onMouseLeave={() => setShowHowDropdown(false)}
            >
              <Link
                href="/how-it-works"
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-decorilla-gray hover:text-decorilla-blue'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                HOW IT WORKS
              </Link>

              {showHowDropdown && (
                <div className="absolute top-full left-0 pt-3 animate-fadeInDown">
                  <div className="relative w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                    <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                    <Link
                      href="/how-it-works/process"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      Design Process
                    </Link>
                    <Link
                      href="/how-it-works/pricing"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/how-it-works/faq"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PORTFOLIO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowPortfolioDropdown(true)}
              onMouseLeave={() => setShowPortfolioDropdown(false)}
            >
              <Link
                href="/portfolio"
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-decorilla-gray hover:text-decorilla-blue'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                PORTFOLIO
              </Link>

              {showPortfolioDropdown && (
                <div className="absolute top-full left-0 pt-3 animate-fadeInDown">
                  <div className="relative w-56 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                    <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                    <Link
                      href="/portfolio/livingroom"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      Living Room Design
                    </Link>
                    <Link
                      href="/portfolio/bedroom"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      Bedroom Design
                    </Link>
                    <Link
                      href="/portfolio/kitchen"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      Kitchen Design
                    </Link>
                    <Link
                      href="/portfolio/diningroom"
                      className="block px-4 py-3 text-decorilla-dark hover:bg-[#A78A68] hover:text-white transition-all duration-200"
                    >
                      Dining Room Design
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {['style-quiz'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-decorilla-gray hover:text-decorilla-blue'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.replace(/-/g, ' ').toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/login"
            className={`hidden md:block rounded-md font-medium px-6 py-2 transition-all duration-300 ${
              isActive
                ? 'bg-decorilla-blue hover:bg-decorilla-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-transparent border-2 border-white text-white hover:bg-white/10 hover:shadow-lg'
            }`}
          >
            GET STARTED
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden z-60 w-6 h-6 flex flex-col justify-center items-center space-y-1 transition-all duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isActive || isMobileMenuOpen ? 'bg-decorilla-dark' : 'bg-white'
              } ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isActive || isMobileMenuOpen ? 'bg-decorilla-dark' : 'bg-white'
              } ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isActive || isMobileMenuOpen ? 'bg-decorilla-dark' : 'bg-white'
              } ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6 pt-20">
          {/* Mobile Nav Links */}
          <nav className="space-y-4">
            {/* HOW IT WORKS Mobile Dropdown */}
            <div>
              <button
                onClick={() => setShowMobileHowDropdown(!showMobileHowDropdown)}
                className="flex items-center justify-between w-full text-left font-medium text-decorilla-dark hover:text-decorilla-blue transition-colors duration-200 py-2"
              >
                HOW IT WORKS
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showMobileHowDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showMobileHowDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-2 pt-2">
                  <Link
                    href="/how-it-works/process"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Design Process
                  </Link>
                  <Link
                    href="/how-it-works/pricing"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/how-it-works/faq"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </Link>
                </div>
              </div>
            </div>

            {/* PORTFOLIO Mobile Dropdown */}
            <div>
              <button
                onClick={() => setShowMobilePortfolioDropdown(!showMobilePortfolioDropdown)}
                className="flex items-center justify-between w-full text-left font-medium text-decorilla-dark hover:text-decorilla-blue transition-colors duration-200 py-2"
              >
                PORTFOLIO
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showMobilePortfolioDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showMobilePortfolioDropdown ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-2 pt-2">
                  <Link
                    href="/portfolio/livingroom"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Living Room Design
                  </Link>
                  <Link
                    href="/portfolio/bedroom"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Bedroom Design
                  </Link>
                  <Link
                    href="/portfolio/kitchen"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Kitchen Design
                  </Link>
                  <Link
                    href="/portfolio/diningroom"
                    className="block py-2 text-decorilla-gray hover:text-decorilla-blue transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Dining Room Design
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Mobile Nav Items */}
            {['style-quiz', 'blog', 'login'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="block font-medium text-decorilla-dark hover:text-decorilla-blue transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                {item.replace(/-/g, ' ').toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8">
            <Link
              href="/login"
              className="block w-full text-center bg-decorilla-blue hover:bg-decorilla-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={closeMobileMenu}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}