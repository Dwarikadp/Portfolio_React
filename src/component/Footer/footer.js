import React from 'react';
import './footer.css';
import logo from '../../assets/DPlogo.png';
import { Link } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src={logo} alt="Dwarika Prasad Padhee Logo" className="footer-logo-img" />
              <div>
                <span className="footer-name">Dwarika Prasad Padhee</span>
                <span className="footer-title">ERP and IT Engineer & Full stack developer</span>
              </div>
            </div>
            <p className="footer-desc">
              Building robust business architectures, streamlining corporate operations, and engineering full-stack and machine learning solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <span className="footer-col-head">Navigation</span>
            <div className="footer-links-list">
              <Link to="intro" smooth={true} offset={-75} duration={500} className="footer-nav-link">Home</Link>
              <Link to="experience" smooth={true} offset={-75} duration={500} className="footer-nav-link">Experience</Link>
              <Link to="projects" smooth={true} offset={-75} duration={500} className="footer-nav-link">Projects</Link>
              <Link to="skills" smooth={true} offset={-75} duration={500} className="footer-nav-link">Skills</Link>
              <Link to="education" smooth={true} offset={-75} duration={500} className="footer-nav-link">Education & Research</Link>
              <Link to="creative" smooth={true} offset={-75} duration={500} className="footer-nav-link">Creative Works</Link>
              <Link to="contact" smooth={true} offset={-75} duration={500} className="footer-nav-link">Contact</Link>
              <a href="./Dwarika_Prasad_Padhee_CV.pdf" download="Dwarika_Prasad_Padhee_CV.pdf" target="_blank" rel="noopener noreferrer" className="footer-nav-link" style={{ color: '#38bdf8' }}>Download CV (PDF)</a>
            </div>
          </div>

          {/* Quick Socials & Connect */}
          <div className="footer-connect-col">
            <span className="footer-col-head">Connect & Code</span>
            <div className="footer-social-row">
              <a href="https://leetcode.com/u/Dwarikadp03/" target="_blank" rel="noopener noreferrer" className="footer-soc-link" title="LeetCode @Dwarikadp03">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 6.01 6.01 0 0 0 1.258.077 6.136 6.136 0 0 0 2.453-.556l3.666-2.115a1.2 1.2 0 1 0-1.199-2.08l-3.666 2.115a3.738 3.738 0 0 1-1.496.339 3.664 3.664 0 0 1-.767-.047 3.54 3.54 0 0 1-2.873-2.308 3.327 3.327 0 0 1-.209-.609 3.322 3.322 0 0 1-.037-1.417 3.15 3.15 0 0 1 .723-1.259l3.853-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-2.348zM16.5 10.5a1.2 1.2 0 0 0-1.2 1.2v6.6a1.2 1.2 0 0 0 2.4 0v-6.6a1.2 1.2 0 0 0-1.2-1.2zm3.6-4.8a1.2 1.2 0 0 0-.848.352l-2.4 2.4a1.2 1.2 0 0 0 1.697 1.697l2.4-2.4A1.2 1.2 0 0 0 20.1 5.7z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dwarikaprasad-padhee-6a1543258/" target="_blank" rel="noopener noreferrer" className="footer-soc-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://github.com/Dwarikadp" target="_blank" rel="noopener noreferrer" className="footer-soc-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/_dwarika_dp?igsh=MWJhYTEzMTJ2bGcz" target="_blank" rel="noopener noreferrer" className="footer-soc-link" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="mailto:dwarikaprasadpadhee03@gmail.com" className="footer-soc-link" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="footer-sub-note">
              Based in Bhubaneswar, Odisha, India. Open for onsite & remote engagements.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} <strong>Dwarika Prasad Padhee</strong>. All rights reserved.
          </p>

          <button className="back-to-top-btn" onClick={scrollToTop}>
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;