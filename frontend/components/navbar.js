import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHowDropdown, setShowHowDropdown] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
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

  const isActive = isSticky || isHovered;

  return (
    <div
      className={`w-full z-50 transition-all duration-1000 ${
        isSticky ? 'fixed top-0 shadow-md py-3' : 'absolute top-0 py-6'
      } ${isActive ? 'bg-white' : ''}`}
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
          className={`text-2xl font-bold ${isActive ? 'text-decorilla-dark' : 'text-white'}`}
        >
          <span className={isActive ? 'text-decorilla-blue' : 'text-white'}>DECO</span>WISE
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 relative">
          {/* HOW IT WORKS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowHowDropdown(true)}
            onMouseLeave={() => setShowHowDropdown(false)}
          >
            <Link
              href="/how-it-works"
              className={`font-medium ${
                isActive
                  ? 'text-decorilla-gray hover:text-decorilla-blue'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              HOW IT WORKS
            </Link>

            {showHowDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link
                  href="/how-it-works/process"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  Design Process
                </Link>
                <Link
                  href="/how-it-works/pricing"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  Pricing
                </Link>
                <Link
                  href="/how-it-works/faq"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  FAQs
                </Link>
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
              className={`font-medium ${
                isActive
                  ? 'text-decorilla-gray hover:text-decorilla-blue'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              PORTFOLIO
            </Link>

            {showPortfolioDropdown && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                <Link
                  href="/portfolio/livingroom"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  Living Room Design
                </Link>
                <Link
                  href="/portfolio/bedroom"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  Bedroom Design
                </Link>
                <Link
                  href="/portfolio/kitchen"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  Kitchen Design
                </Link>
                <Link
                  href="/portfolio/diningroom"
                  className="block px-4 py-2 text-decorilla-dark hover:bg-gray-100"
                >
                  Dining Room Design
                </Link>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {['style-quiz', 'blog', 'gift-cards', 'login'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`font-medium ${
                isActive
                  ? 'text-decorilla-gray hover:text-decorilla-blue'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {item.replace(/-/g, ' ').toUpperCase()}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/login"
          className={`rounded-md font-medium px-6 py-2 transition-all duration-300 ${
            isActive
              ? 'bg-decorilla-blue hover:bg-blue-700 text-white'
              : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
          }`}
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
}
