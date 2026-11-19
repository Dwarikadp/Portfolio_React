import React from 'react';
import './education.css';

const certifications = [
  {
    title: 'Data Analyst Job Simulation',
    issuer: 'Deloitte (Forage)',
    year: '2025',
    icon: '📊',
    desc: 'Completed practical enterprise simulation covering data analysis, forensic technology, and executive insights.'
  },
  {
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    icon: '🐍',
    desc: 'Core Python data structures, algorithms, object-oriented concepts, and automation scripting.'
  },
  {
    title: 'Introduction to Frontend Development',
    issuer: 'IBM',
    year: '2024',
    icon: '🌐',
    desc: 'Web application architecture, responsive design with HTML5/CSS3, JavaScript DOM manipulation, and modern web standards.'
  },
  {
    title: 'CCNA: Networking & Switching Essentials',
    issuer: 'Cisco',
    year: '2024',
    icon: '🔌',
    desc: 'Enterprise network routing protocols, VLANs, subnetting, switch configurations, and wireless network security.'
  },
  {
    title: 'CCNA: Enterprise Networking, Security & Automation',
    issuer: 'Cisco',
    year: '2024',
    icon: '🛡️',
    desc: 'Advanced enterprise networks, network automation architectures, REST APIs, and cyber hygiene.'
  },
  {
    title: 'Junior Cybersecurity Analyst',
    issuer: 'IBM SkillsBuild',
    year: '2023',
    icon: '🔒',
    desc: 'Network vulnerability assessments, threat detection protocols, access control, and incident response fundamentals.'
  }
];

const educationList = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Odisha University of Technology and Research (OUTR)',
    location: 'Bhubaneswar, Odisha',
    period: '2022 – 2026',
    score: 'CGPA: 7.86',
    desc: 'Core coursework in Data Structures, Database Management Systems, Computer Networks, Software Engineering, and Machine Learning.'
  },
  {
    degree: 'Intermediate in Science (Class XII)',
    institution: 'Prananatha Higher Secondary School',
    location: 'Khordha, Odisha',
    period: '2019 – 2021',
    score: 'Percentage: 81.8%',
    desc: 'Specialized in Physics, Chemistry, Mathematics, and Computer Science fundamentals.'
  },
  {
    degree: 'High School Matriculation (Class X)',
    institution: 'Saraswati Sishu Vidya Mandir',
    location: 'Jatani, Odisha',
    period: 'Passout: 2019',
    score: 'Percentage: 80.0%',
    desc: 'Secondary education with distinction in Mathematics and Science.'
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <span className="section-tag">Academic & Credentials</span>
        <h2 className="section-title">
          Education, <span className="gradient-text">Research & Certifications</span>
        </h2>
        <p className="section-subtitle">
          Demonstrated academic excellence, published scientific research in peer-reviewed journals, and industry-recognized certifications.
        </p>
      </div>

      {/* Published Research Spotlight Card */}
      <div className="research-spotlight-card glass-card">
        <div className="research-spotlight-badge">
          <span className="star-icon">★</span>
          <span>Peer-Reviewed Journal Publication</span>
        </div>

        <div className="research-content-wrap">
          <div className="research-main">
            <span className="journal-name">Journal of Advances in Information Technology (JAIT 2026)</span>
            <h3 className="paper-title">
              "Sales Analysis and Sale Forecasting by Integrating Sentiment Analysis Using Valence Aware Dictionary and Sentiment Reasoner (VADER)"
            </h3>
            <p className="paper-citation">
              <strong>Citation:</strong> Vol. 17, No. 11, pp. 2060–2073.
            </p>
            <p className="paper-summary">
              Authored and published research detailing a hybrid predictive framework uniting SARIMAX, Prophet, and Bi-LSTM neural networks with VADER-based customer review sentiment scores. Proved that integrating unstructured sentiment signals reduces residual error to <strong>49,270 MAE</strong> and <strong>9.82% MAPE</strong>.
            </p>
          </div>

          <div className="research-action-box">
            <div className="metric-chip">
              <span className="m-val">9.82%</span>
              <span className="m-lbl">Benchmark MAPE</span>
            </div>
            <div className="metric-chip">
              <span className="m-val">JAIT 2026</span>
              <span className="m-lbl">Scopus Indexed</span>
            </div>
            <a
              href="https://colab.research.google.com/drive/1jGB5jCLydzNr_P4ehY6oTzTCOo9tNqhu"
              target="_blank"
              rel="noopener noreferrer"
              className="paper-link-btn"
            >
              <span>View Code & Model</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Grid: Education Timeline on Left, Certifications on Right */}
      <div className="edu-cert-layout">
        
        {/* Education Timeline */}
        <div className="edu-col">
          <h3 className="sub-section-title">
            <span className="title-icon">🎓</span> Academic Journey
          </h3>

          <div className="timeline-container">
            {educationList.map((item, idx) => (
              <div key={idx} className="timeline-node">
                <div className="timeline-dot"></div>
                <div className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-score-badge">{item.score}</span>
                  </div>
                  <h4 className="timeline-degree">{item.degree}</h4>
                  <h5 className="timeline-institution">{item.institution}</h5>
                  <p className="timeline-location">📍 {item.location}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="cert-col">
          <h3 className="sub-section-title">
            <span className="title-icon">🏅</span> Industry Certifications
          </h3>

          <div className="certs-grid">
            {certifications.map((cert, cIdx) => (
              <div key={cIdx} className="cert-card glass-card">
                <div className="cert-card-top">
                  <span className="cert-icon">{cert.icon}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <span className="cert-issuer">{cert.issuer}</span>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
