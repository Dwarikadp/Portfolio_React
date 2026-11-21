import React, { useState } from 'react';
import './works.css';

import darPortalImg from '../../assets/DAR portal.png';
import siteUpdateImg from '../../assets/SIte update.png';
import trainingImg from '../../assets/Training.png';
import dehazeImg from '../../assets/Dehaze (1).png';
import salesForecastImg from '../../assets/SalesForecast.png';
import sentiAnlImg from '../../assets/SentiAnl.png';
import hotelBook from '../../assets/hotel.png';
import wanderIndImg from '../../assets/wanderInd.png';

const projects = [
  {
    id: 'dar-portal',
    title: 'Enterprise DAR Portal (Daily Activity Report)',
    category: 'Enterprise',
    tag: 'Metro Group Flagship System',
    image: darPortalImg,
    description: 'Organization-wide Daily Activity Reporting platform engineered for Metro Group. Features role-based access control (RBAC), multi-level hierarchical approval workflows, employee submission tracking, compliance analytics, and high-performance Excel import/export processing.',
    stats: [
      { label: 'Security', val: 'Role-Based RBAC' },
      { label: 'Integration', val: 'Excel I/O Engine' },
      { label: 'Scope', val: 'Organization-Wide' }
    ],
    tech: ['React.js', 'Supabase', 'JavaScript', 'Excel Parsing', 'MIS Reporting', 'Enterprise Security'],
    github: null,
    colab: null,
    docs: null
  },
  {
    id: 'site-update',
    title: 'Construction Progress Monitoring System (Site Update)',
    category: 'Enterprise',
    tag: 'Metro Group Real Estate Portal',
    image: siteUpdateImg,
    description: 'Centralized live site monitoring dashboard built for real estate property development. Empowers executive leadership to track construction milestones, visualize work status, manage project-wise unit completions, and make data-driven operational decisions.',
    stats: [
      { label: 'Analytics', val: 'Executive KPI' },
      { label: 'Site Sync', val: 'Real-time Updates' },
      { label: 'Tracking', val: 'Milestone Progress' }
    ],
    tech: ['React.js', 'Supabase', 'Next.js', 'Data Visualization', 'JavaScript', 'PostgreSQL'],
    github: null,
    colab: null,
    docs: null
  },
  {
    id: 'training-platform',
    title: 'Departmental Training & Certification Platform',
    category: 'Enterprise',
    tag: 'Corporate Learning Management',
    image: trainingImg,
    description: 'Centralized corporate learning and upskilling management system developed for Metro Group. Features department-specific modules, interactive milestone quizzes, progress tracking, employee compliance monitoring, and automated completion certificate issuance.',
    stats: [
      { label: 'Certification', val: 'Automated Creds' },
      { label: 'Curriculum', val: 'Dept-Specific' },
      { label: 'Analytics', val: 'Employee Progress' }
    ],
    tech: ['React.js', 'Bootstrap', 'REST APIs', 'User Analytics', 'Certification Engine'],
    github: null,
    colab: null,
    docs: null
  },
  {
    id: 'onsf-net',
    title: 'OnSF-Net: Spatial-Frequency Attention Image Dehazing',
    category: 'AI & ML',
    tag: 'Deep Learning / Computer Vision',
    image: dehazeImg,
    description: 'Novel spatial-frequency attention U-Net architecture engineered for real-time high-fidelity single-image haze removal. Achieves an ultra-fast 69 FPS throughput on benchmark edge datasets while preserving fine textures, structural details, and chromatic balance.',
    stats: [
      { label: 'Inference Speed', val: '69 FPS' },
      { label: 'PSNR / SSIM', val: '30.55 dB / 0.958' },
      { label: 'Dataset', val: 'HAZE1K' }
    ],
    tech: ['Python', 'PyTorch', 'Computer Vision', 'U-Net', 'HAZE1K', 'OpenCV'],
    github: 'https://github.com/Dwarikadp',
    colab: null,
    docs: null
  },
  {
    id: 'sales-forecasting',
    title: 'Sales Forecasting with Predictive Residual Modeling',
    category: 'AI & ML',
    tag: 'JAIT (2026) Published Paper',
    image: salesForecastImg,
    description: 'Hybrid time-series sales forecasting framework combining SARIMAX, Prophet, and Bi-LSTM neural networks with customer sentiment analysis. Published in the Journal of Advances in Information Technology (JAIT 2026), proving that sentiment-integrated residual modeling significantly outperforms standard statistical baselines.',
    stats: [
      { label: 'Error Metric', val: '9.82% MAPE' },
      { label: 'MAE', val: '49,270' },
      { label: 'Journal', val: 'JAIT Vol. 17' }
    ],
    tech: ['Python', 'Bi-LSTM', 'Prophet', 'SARIMAX', 'Scikit-Learn', 'Pandas'],
    github: null,
    colab: 'https://colab.research.google.com/drive/1jGB5jCLydzNr_P4ehY6oTzTCOo9tNqhu',
    docs: 'https://docs.google.com/document/d/1xJZLSR38WhfLMrIU28PtsWc_07QUVKKMo6ZohPb2Pm4/edit?tab=t.0'
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis & Customer Review Intelligence',
    category: 'AI & ML',
    tag: 'NLP Sentiment Classification',
    image: sentiAnlImg,
    description: 'Natural Language Processing sentiment engine using Valence Aware Dictionary and Sentiment Reasoner (VADER). Classifies multi-source customer reviews into granular polarity distributions to capture buyer sentiment dynamics and consumer trends.',
    stats: [
      { label: 'Method', val: 'VADER NLP' },
      { label: 'Accuracy', val: 'High Polarity Sync' },
      { label: 'Integration', val: 'Forecast Residuals' }
    ],
    tech: ['Python', 'VADER NLP', 'NLTK', 'TextBlob', 'Matplotlib', 'Scikit-Learn'],
    github: null,
    colab: 'https://colab.research.google.com/drive/1jGB5jCLydzNr_P4ehY6oTzTCOo9tNqhu',
    docs: 'https://docs.google.com/document/d/1xJZLSR38WhfLMrIU28PtsWc_07QUVKKMo6ZohPb2Pm4/edit?tab=t.0'
  },
  {
    id: 'hotel-booking',
    title: 'Interactive Hotel Booking Platform',
    category: 'Web Apps',
    tag: 'MERN Full Stack Application',
    image: hotelBook,
    description: 'Full-stack hotel reservation platform featuring dynamic room search, filterable amenities, seamless calendar booking flow, and responsive administrative dashboards with MongoDB schema models.',
    stats: [
      { label: 'Stack', val: 'Full MERN' },
      { label: 'Design', val: 'Modern UX' },
      { label: 'Backend', val: 'Express & Node' }
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Dwarikadp/Dwarika-DIgitalBhem',
    colab: null,
    docs: null
  },
  {
    id: 'wander-india',
    title: 'Wander India: Tourism Platform',
    category: 'Web Apps',
    tag: 'Smart India Hackathon Project',
    image: wanderIndImg,
    description: 'Interactive cultural and tourism portal highlighting Indian travel spots, curated heritage trails, food guides, and an artisan showcase connecting local creators with global travelers.',
    stats: [
      { label: 'Features', val: 'Maps & Guides' },
      { label: 'Artisans', val: 'Craft Showcase' }

    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'Maps API', 'GitHub'],
    github: 'https://github.com/Dwarikadp/SIH',
    colab: null,
    docs: null
  }
];

const categories = ['All', 'Enterprise', 'AI & ML', 'Web Apps'];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">Featured Works</span>
        <h2 className="section-title">
          Selected <span className="gradient-text">Projects & Systems</span>
        </h2>
        <p className="section-subtitle">
          From enterprise ERP workflow systems and corporate dashboards to deep learning computer vision research and full-stack web platforms.
        </p>

        {/* Filter Pills */}
        <div className="project-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeCategory === cat ? 'filter-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass-card">
            
            {/* Project Image Frame */}
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-tag-pill">{project.tag}</div>
            </div>

            {/* Content Details */}
            <div className="project-body">
              <div className="project-top-row">
                <span className="project-category-badge">{project.category}</span>
                
                {/* External Action Links */}
                <div className="project-links-row">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-action-btn" title="View Source on GitHub">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span className="btn-label-text">Code</span>
                    </a>
                  )}

                  {project.colab && (
                    <a href={project.colab} target="_blank" rel="noopener noreferrer" className="proj-action-btn" title="Open Google Colab Notebook">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span className="btn-label-text">Colab</span>
                    </a>
                  )}

                  {project.docs && (
                    <a href={project.docs} target="_blank" rel="noopener noreferrer" className="proj-action-btn" title="View Research Document">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span className="btn-label-text">Paper</span>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Stats badges */}
              {project.stats && (
                <div className="project-stat-strip">
                  {project.stats.map((st, sI) => (
                    <div key={sI} className="stat-pill">
                      <span className="stat-label">{st.label}:</span>
                      <span className="stat-val">{st.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="project-tech-list">
                {project.tech.map((t, tI) => (
                  <span key={tI} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;