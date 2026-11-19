import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import logo from '../../assets/DPlogo.png';
import { Link } from 'react-scroll';

const Navbar = ({ theme = 'dark', toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressBarRef = useRef(null);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let rafId = null;

    const updateScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const shouldBeScrolled = y > 25;

      if (shouldBeScrolled !== scrolledRef.current) {
        scrolledRef.current = shouldBeScrolled;
        setScrolled(shouldBeScrolled);
      }

      if (progressBarRef.current) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          const ratio = Math.min(1, Math.max(0, y / totalScroll));
          progressBarRef.current.style.transform = `scaleX(${ratio})`;
        }
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const navLinks = [
    { to: 'intro', label: 'Home' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'education', label: 'Education & Research' },
    { to: 'creative', label: 'Creative Works' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Dynamic Scroll Progress Bar - Hardware Accelerated */}
      <div 
        ref={progressBarRef}
        className="navbar-progress-bar" 
        aria-hidden="true"
      />

      <nav className="navbar-container">
        {/* Brand Logo */}
        <Link to="intro" smooth={true} offset={-80} duration={500} className="brand-logo">
          <img src={logo} alt="Dwarika Prasad Padhee Logo" className="logo-img" />
          <div className="brand-text">
            <span className="brand-name">Dwarika<span className="highlight-dot">.</span></span>
            <span className="brand-role">ERP & IT Engineer | Full Stack</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="desktop-menu">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              activeClass="active-nav-item"
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle Button (Dark Obsidian / Light Cyan) */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Obsidian Theme' : 'Switch to Light Cyan Theme'}
            aria-label="Toggle visual theme"
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <a
            href="https://leetcode.com/u/Dwarikadp03/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-leetcode-badge"
            title="LeetCode Problem Solver"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 6.01 6.01 0 0 0 1.258.077 6.136 6.136 0 0 0 2.453-.556l3.666-2.115a1.2 1.2 0 1 0-1.199-2.08l-3.666 2.115a3.738 3.738 0 0 1-1.496.339 3.664 3.664 0 0 1-.767-.047 3.54 3.54 0 0 1-2.873-2.308 3.327 3.327 0 0 1-.209-.609 3.322 3.322 0 0 1-.037-1.417 3.15 3.15 0 0 1 .723-1.259l3.853-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-2.348zM16.5 10.5a1.2 1.2 0 0 0-1.2 1.2v6.6a1.2 1.2 0 0 0 2.4 0v-6.6a1.2 1.2 0 0 0-1.2-1.2zm3.6-4.8a1.2 1.2 0 0 0-.848.352l-2.4 2.4a1.2 1.2 0 0 0 1.697 1.697l2.4-2.4A1.2 1.2 0 0 0 20.1 5.7z"/>
            </svg>
            <span>LeetCode</span>
          </a>

          <Link
            to="contact"
            smooth={true}
            offset={-75}
            duration={500}
            className="nav-cta-btn"
          >
            <span>Let's Talk</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            className={`mobile-toggle-btn ${showMenu ? 'open' : ''}`}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle navigation menu"
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Drawer */}
      <div className={`mobile-drawer ${showMenu ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-content">
          <button
            type="button"
            className="mobile-theme-btn"
            onClick={() => {
              toggleTheme();
              setShowMenu(false);
            }}
          >
            {theme === 'light' ? '☀️ Mode: Light Cyan (Tap for Dark)' : '🌙 Mode: Dark Obsidian (Tap for Light)'}
          </button>
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={500}
              className="mobile-nav-link"
              onClick={() => setShowMenu(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://leetcode.com/u/Dwarikadp03/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
            style={{ color: '#f59e0b' }}
          >
            LeetCode Profile (@Dwarikadp03)
          </a>
          <a
            href="./Dwarika_Prasad_Padhee_CV.pdf"
            download="Dwarika_Prasad_Padhee_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
            style={{ color: '#38bdf8' }}
            onClick={() => setShowMenu(false)}
          >
            Download CV (PDF)
          </a>
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="mobile-cta-btn"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;