import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './component/Navbar/navbar';
import Intro from './component/Navbar/Intro/intro';
import Experience from './component/Experience/experience';
import Works from './component/Works/works';
import Skills from './component/Skills/skills';
import Education from './component/Education/education';
import Extra from './component/Extra/extra';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Buttery-smooth inertial momentum scrolling engine (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Ultra-smooth cascading scroll reveal animation observer
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    let observer;
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      };

      const handleIntersect = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      };

      observer = new IntersectionObserver(handleIntersect, observerOptions);
      const elementsToReveal = document.querySelectorAll(
        '.section-header, .glass-card, .project-card, .skill-category-card, .cert-card, .deliverable-card, .video-card, .contact-card, .contact-form-card, .timeline-card, .research-spotlight-card, .exp-tab-btn'
      );

      elementsToReveal.forEach((el, index) => {
        el.classList.add('reveal-on-scroll');
        const delay = (index % 4) + 1;
        if (delay > 1) {
          el.classList.add(`reveal-delay-${delay - 1}`);
        }
        observer.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme === 'light' ? 'app-light' : 'app-dark'}`}>
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow-3" aria-hidden="true" />

      {/* Main Navigation with Theme Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <Intro />

        {/* Professional Experience Section */}
        <Experience />

        {/* Featured Projects & Systems */}
        <Works />

        {/* Technical Skills & Expertise */}
        <Skills />

        {/* Education, Published Research & Certifications */}
        <Education />

        {/* Creative Showcase & Lightbox */}
        <Extra />

        {/* Contact Hub */}
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}

export default App;
