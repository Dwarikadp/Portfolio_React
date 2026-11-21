import React, { useState } from 'react';
import './experience.css';

const experiences = [
  {
    id: 'metro-group',
    company: 'Metro Group',
    location: 'India',
    role: 'ERP and IT Engineer',
    period: 'Jan 2026 – Present',
    badge: 'Current Role',
    type: 'Full-time Enterprise',
    summary: 'Leading core enterprise system deployments, internal business application development, ERP workflows, and organizational IT infrastructure support.',
    highlights: [
      {
        title: 'Enterprise DAR Portal',
        desc: 'Designed and deployed an organization-wide Daily Activity Reporting platform featuring role-based access, hierarchical approvals, submission tracking, compliance analytics, and Excel import/export functionality.'
      },
      {
        title: 'Employee Training & Certification Platform',
        desc: 'Developed a centralized corporate learning platform with department-specific courses, interactive modules, employee progress monitoring, and automated certification management.'
      },
      {
        title: 'Real Estate Construction Progress Dashboard',
        desc: 'Built an interactive dashboard to centralize multi-site construction updates, milestone tracking, work status visualization, and operational executive insights.'
      },
      {
        title: 'ERP Administration & Functional Support',
        desc: 'Administering Farvision ERP modules across Finance, CRM, Materials, HRMS, and Payroll, including workflow validation, business logic, and continuous application troubleshooting.'
      },
      {
        title: 'Microsoft 365 & Cloud Administration',
        desc: 'Managing user accounts, license inventories, subscription cost analysis, and organizational email routing policies across the company.'
      },
      {
        title: 'IT Infrastructure & Network Engineering',
        desc: 'Troubleshooting hardware/software, Windows deployment and managing LAN/Wi-Fi connectivity, switch/router devices, and network reliability.'
      }
    ],
    skills: ['Farvision ERP', 'React.js', 'Supabase', 'Microsoft 365', 'Power Automate', 'SQL', 'IT Infrastructure', 'LAN/Wi-Fi']
  },
  {
    id: 'digitalbhem',
    company: 'DigitalBhem',
    location: 'Remote',
    role: 'Full Stack Web Developer Intern',
    period: 'July 2024 – Aug 2024',
    badge: 'Internship',
    type: 'MERN Stack Development',
    summary: 'Engineered web applications and robust backend services within a collaborative engineering environment.',
    highlights: [
      {
        title: 'Hotel Management Web Application',
        desc: 'Developed an end-to-end hotel booking platform with dynamic room search, calendar bookings, and admin listing management using the MERN stack.'
      },
      {
        title: 'Database & API Architecture',
        desc: 'Designed MongoDB schemas, structured relational models, and integrated REST APIs with responsive React frontend components.'
      }
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git']
  },
  {
    id: 'out-of-box',
    company: 'Out of the Box Solutions',
    location: 'Remote',
    role: 'Video Editing Intern',
    period: 'April 2023 – May 2023',
    badge: 'Internship',
    type: 'Creative Media',
    summary: 'Produced engaging educational multimedia content with creative visual pacing and sound design.',
    highlights: [
      {
        title: 'Educational Video Production',
        desc: 'Crafted educational videos for children with high-retention visual storytelling, clean cuts, audio mixing, and graphical callouts.'
      }
    ],
    skills: ['Video Editing', 'Motion Pacing', 'Storyboarding', 'Audio-Visual Sync']
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-tag">Career Journey</span>
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Proven track record spanning enterprise IT operations, business systems architecture, and full-stack software development.
        </p>
      </div>

      <div className="experience-wrapper">
        {/* Navigation Tabs */}
        <div className="experience-tabs">
          {experiences.map((exp, idx) => (
            <button
              key={exp.id}
              className={`exp-tab-btn ${activeTab === idx ? 'exp-tab-active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <div className="tab-indicator"></div>
              <div className="tab-info">
                <span className="tab-company">{exp.company}</span>
                <span className="tab-role">{exp.role}</span>
              </div>
              <span className="tab-period-badge">{exp.period.split('–')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Detailed Experience Panel */}
        <div className="experience-display glass-card">
          <div className="exp-display-header">
            <div>
              <div className="exp-badge-row">
                <span className="exp-status-pill">{experiences[activeTab].badge}</span>
                <span className="exp-type-pill">{experiences[activeTab].type}</span>
              </div>
              <h3 className="exp-display-title">
                {experiences[activeTab].role} <span className="at-company">@ {experiences[activeTab].company}</span>
              </h3>
            </div>
            <div className="exp-meta-box">
              <span className="exp-meta-date">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {experiences[activeTab].period}
              </span>
              <span className="exp-meta-loc">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {experiences[activeTab].location}
              </span>
            </div>
          </div>

          <p className="exp-overview-summary">
            {experiences[activeTab].summary}
          </p>

          <div className="exp-deliverables-list">
            <h4 className="deliverables-heading">Key Initiatives & Impact:</h4>
            <div className="deliverables-grid">
              {experiences[activeTab].highlights.map((item, i) => (
                <div key={i} className="deliverable-card">
                  <div className="deliverable-bullet"></div>
                  <div className="deliverable-body">
                    <h5 className="deliverable-title">{item.title}</h5>
                    <p className="deliverable-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="exp-tech-stack">
            <span className="tech-stack-label">Technologies & Frameworks:</span>
            <div className="tech-tags-wrap">
              {experiences[activeTab].skills.map((skill, sIdx) => (
                <span key={sIdx} className="tech-pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
