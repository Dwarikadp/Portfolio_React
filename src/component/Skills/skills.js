import React, { useState } from 'react';
import './skills.css';

const skillCategories = [
  {
    id: 'enterprise-erp',
    title: 'Enterprise & ERP Systems',
    icon: '🏢',
    desc: 'Functional ERP administration, enterprise workflow automation, and cross-departmental operations.',
    skills: [
      { name: 'Farvision ERP', level: 'Finance, CRM, HRMS, Materials, Payroll' },
      { name: 'Microsoft 365 Admin', level: 'User & License Management, Security' },
      { name: 'Power Automate', level: 'Workflow & Outlook Automation' },
      { name: 'HRMS & Payroll', level: 'Employee Lifecycle & Compliance' },
      { name: 'MIS Reporting', level: 'Executive Summaries & Analysis' }
    ]
  },
  {
    id: 'web-fullstack',
    title: 'Full Stack Web Engineering',
    icon: '💻',
    desc: 'Modern web architectures from reactive frontends to robust databases and secure APIs.',
    skills: [
      { name: 'React.js', level: 'Hooks, State, Virtual DOM, SPAs' },
      { name: 'Node.js & Express.js', level: 'RESTful Backend & Microservices' },
      { name: 'Supabase', level: 'Real-time DB, Auth & Storage' },
      { name: 'MongoDB', level: 'NoSQL Schema Design & Aggregation' },
      { name: 'SQL & Relational DBs', level: 'Queries, Normalization & Indexing' }
    ]
  },
  {
    id: 'programming-core',
    title: 'Programming & Languages',
    icon: '⚡',
    desc: 'Strong algorithmic foundation and multi-paradigm software development.',
    skills: [
      { name: 'Python', level: 'Data Science, PyTorch, Automation' },
      { name: 'JavaScript (ES6+)', level: 'Frontend, Backend, Asynchronous' },
      { name: 'Java', level: 'Object-Oriented Programming, Core' },
      { name: 'SQL', level: 'PostgreSQL, MySQL, Query Optimization' },
      { name: 'C / C++', level: 'Data Structures & Algorithms' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'Machine Learning & AI',
    icon: '🤖',
    desc: 'Deep learning models, natural language sentiment processing, and high-speed computer vision.',
    skills: [
      { name: 'PyTorch & OpenCV', level: 'Image Processing & Dehazing (69 FPS)' },
      { name: 'Bi-LSTM & Time Series', level: 'Sequential Modeling & Forecasting' },
      { name: 'VADER Sentiment NLP', level: 'Textual Sentiment Classification' },
      { name: 'Scikit-Learn', level: 'Predictive Classifiers & Regressors' },
      { name: 'Pandas & NumPy', level: 'High-throughput Data Processing' }
    ]
  },
  {
    id: 'analytics-bi',
    title: 'Analytics & Dashboards',
    icon: '📊',
    desc: 'Transforming organizational data into actionable KPIs, interactive visualizations, and dashboards.',
    skills: [
      { name: 'Power BI', level: 'DAX, Interactive Dashboards, Reports' },
      { name: 'Advanced Excel', level: 'Formulas, Pivot Tables, Macros' },
      { name: 'Data Visualization', level: 'Charts, Progress Tracking, Milestones' },
      { name: 'Performance Metrics', level: 'Error Analysis (MAE, MAPE), KPIs' }
    ]
  },
  {
    id: 'it-infra-tools',
    title: 'IT Infrastructure & Dev Tools',
    icon: '🛠️',
    desc: 'Enterprise hardware, network administration, version control, and cloud deployment pipelines.',
    skills: [
      { name: 'IT Infrastructure', level: 'Hardware, Windows Deployments, SSD' },
      { name: 'Network Administration', level: 'LAN/Wi-Fi, Switches, Routers, DNS' },
      { name: 'Git & GitHub', level: 'Branching, Collaboration, PRs' },
      { name: 'VS Code & Jupyter', level: 'Environment Configuration, Notebooks' },
      { name: 'Deployment Tools', level: 'Vercel, Streamlit, Supabase' }
    ]
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">
          Technical <span className="gradient-text">Skillset & Expertise</span>
        </h2>
        <p className="section-subtitle">
          A versatile toolkit bridging enterprise business software, IT operations, full-stack development, and artificial intelligence.
        </p>
      </div>

      <div className="skills-grid-container">
        {skillCategories.map((cat, index) => (
          <div
            key={cat.id}
            className={`skill-category-card glass-card ${selectedCategory === index ? 'card-highlighted' : ''}`}
            onClick={() => setSelectedCategory(index)}
          >
            <div className="cat-card-header">
              <span className="cat-icon">{cat.icon}</span>
              <div>
                <h3 className="cat-title">{cat.title}</h3>
                <p className="cat-desc">{cat.desc}</p>
              </div>
            </div>

            <div className="skill-items-list">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item-row">
                  <div className="skill-name-col">
                    <span className="skill-bullet-dot"></span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
