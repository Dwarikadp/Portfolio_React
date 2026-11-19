import React, { useState, useEffect } from 'react';
import './intro.css';
import ProPhoto1 from '../../../assets/ProPhoto1.jpeg';
import ProPhoto2 from '../../../assets/ProPhoto2.jpeg';
import ProPhoto3 from '../../../assets/ProPhoto3.jpeg';
import DwarikaCV from '../../../assets/Dwarika Prasad Padhee CV N.pdf';
import { Link } from 'react-scroll';

const profilePhotos = [ProPhoto1, ProPhoto2, ProPhoto3];

const roles = [
  'ERP and IT Engineer',
  'Full stack developer'
];

const Intro = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Profile photo cycle: changes cleanly every 7 seconds with a crisp, subtle glitch transition
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      // 1. Subtle, quick glitch transition (total ~350ms)
      setIsGlitching(true);

      setTimeout(() => {
        setPhotoIndex((prev) => (prev + 1) % profilePhotos.length);
      }, 180);

      setTimeout(() => {
        setIsGlitching(false);
      }, 380);
    }, 7000);

    return () => clearInterval(cycleTimer);
  }, []);

  // Role typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(90);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 80);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        
        {/* Left Content Column */}
        <div className="intro-content">
          {/* Status Badge */}
          <div className="status-badge">
            <span className="pulsing-dot"></span>
            <span className="status-text">Metro Group | ERP & IT Engineer</span>
          </div>

          <h1 className="intro-headline">
            Hi, I'm <span className="name-highlight">Dwarika Prasad Padhee</span>
            <span className="role-subtext">
              I am a <span className="typewriter-text">{displayText}</span>
              <span className="typewriter-cursor">|</span>
            </span>
          </h1>

          <p className="intro-summary">
            <strong>ERP and IT Engineer</strong> and <strong>Full stack developer</strong> with specialized expertise in 
            <strong> Farvision ERP Workflows</strong>, <strong>Enterprise IT Infrastructure</strong>, <strong>Business Process Automation</strong> (Power Automate & M365), 
            and modern <strong>Full Stack Engineering</strong> (React.js, Node.js, Supabase). Proven track record developing enterprise 
            applications, conducting published <strong>Computer Vision research</strong>, and solving algorithmic problems on <strong>LeetCode</strong>.
          </p>

          {/* Quick Highlight Metrics & Badges */}
          <div className="intro-highlights">
            <div className="highlight-item">
              <span className="highlight-val">Jan 2026 – Present</span>
              <span className="highlight-lbl">Metro Group IT</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-val">JAIT (2026)</span>
              <span className="highlight-lbl">Published Research</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-val">69 FPS</span>
              <span className="highlight-lbl">Dehazing Speed</span>
            </div>
            <a 
              href="https://leetcode.com/u/Dwarikadp03/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="highlight-item highlight-leetcode"
              title="View Dwarika on LeetCode"
            >
              <span className="highlight-val leetcode-val">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#f59e0b" style={{ display: 'inline', marginRight: '4px' }}>
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 6.01 6.01 0 0 0 1.258.077 6.136 6.136 0 0 0 2.453-.556l3.666-2.115a1.2 1.2 0 1 0-1.199-2.08l-3.666 2.115a3.738 3.738 0 0 1-1.496.339 3.664 3.664 0 0 1-.767-.047 3.54 3.54 0 0 1-2.873-2.308 3.327 3.327 0 0 1-.209-.609 3.322 3.322 0 0 1-.037-1.417 3.15 3.15 0 0 1 .723-1.259l3.853-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-2.348zM16.5 10.5a1.2 1.2 0 0 0-1.2 1.2v6.6a1.2 1.2 0 0 0 2.4 0v-6.6a1.2 1.2 0 0 0-1.2-1.2zm3.6-4.8a1.2 1.2 0 0 0-.848.352l-2.4 2.4a1.2 1.2 0 0 0 1.697 1.697l2.4-2.4A1.2 1.2 0 0 0 20.1 5.7z"/>
                </svg>
                Dwarikadp03
              </span>
              <span className="highlight-lbl">LeetCode Profile</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="intro-actions">
            <Link to="projects" smooth={true} offset={-75} duration={500} className="btn-primary">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <a 
              href={DwarikaCV} 
              download="Dwarika_Prasad_Padhee_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
              title="Download Dwarika Prasad Padhee's CV"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="intro-socials">
            <span className="social-label">Connect:</span>
            <div className="social-links-group">
              <a href="https://leetcode.com/u/Dwarikadp03/" target="_blank" rel="noopener noreferrer" className="social-pill leetcode-pill" title="LeetCode Profile">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 6.01 6.01 0 0 0 1.258.077 6.136 6.136 0 0 0 2.453-.556l3.666-2.115a1.2 1.2 0 1 0-1.199-2.08l-3.666 2.115a3.738 3.738 0 0 1-1.496.339 3.664 3.664 0 0 1-.767-.047 3.54 3.54 0 0 1-2.873-2.308 3.327 3.327 0 0 1-.209-.609 3.322 3.322 0 0 1-.037-1.417 3.15 3.15 0 0 1 .723-1.259l3.853-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-2.348zM16.5 10.5a1.2 1.2 0 0 0-1.2 1.2v6.6a1.2 1.2 0 0 0 2.4 0v-6.6a1.2 1.2 0 0 0-1.2-1.2zm3.6-4.8a1.2 1.2 0 0 0-.848.352l-2.4 2.4a1.2 1.2 0 0 0 1.697 1.697l2.4-2.4A1.2 1.2 0 0 0 20.1 5.7z"/>
                </svg>
                <span>LeetCode</span>
              </a>
              <a href="https://www.linkedin.com/in/dwarikaprasad-padhee-6a1543258/" target="_blank" rel="noopener noreferrer" className="social-pill" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Dwarikadp" target="_blank" rel="noopener noreferrer" className="social-pill" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="mailto:dwarikaprasadpadhee03@gmail.com" className="social-pill" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email</span>
              </a>
              <a href="tel:+917848867524" className="social-pill" title="Call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 7848867524</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual Avatar Column with Pure Clean Photo (No Badges or Arrows) */}
        <div className="intro-visual">
          <div className="avatar-frame-wrapper">
            <div className="avatar-glow-ring"></div>
            
            {/* 100% Pure Clean Avatar Card - Photo only, completely unobstructed */}
            <div className={`avatar-card ${isGlitching ? 'glitch-active' : ''}`}>
              <img 
                src={profilePhotos[photoIndex]} 
                alt="Dwarika Prasad Padhee" 
                className="avatar-img" 
              />

              {/* Clean Slices that appear only during the brief 350ms glitch switch */}
              {isGlitching && (
                <>
                  <div 
                    className="clean-glitch-slice slice-top" 
                    style={{ backgroundImage: `url(${profilePhotos[photoIndex]})` }} 
                  />
                  <div 
                    className="clean-glitch-slice slice-mid" 
                    style={{ backgroundImage: `url(${profilePhotos[(photoIndex + 1) % profilePhotos.length]})` }} 
                  />
                  <div 
                    className="clean-glitch-slice slice-bot" 
                    style={{ backgroundImage: `url(${profilePhotos[photoIndex]})` }} 
                  />
                </>
              )}

              <div className="avatar-overlay-gradient"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;