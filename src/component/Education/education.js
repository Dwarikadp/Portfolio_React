import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section id='education' className='educationSection'>
      <span className="sectionTitle">Education</span>
      <div className="educationContainer">
        {/* Left side: Education Timeline */}
        <div className="educationTimeline">
          <div className="timelineLine" />
          
          <div className="timelineItem">
            <div className="circle" />
            <div className="educationDetail">
              <h4>B.Tech – Information Technology</h4>
              <p>Years: 2022–2026</p>
              <p>CGPA: 7.7 (till 6th semester)</p>
            </div>
          </div>

          <div className="timelineItem">
            <div className="circle" />
            <div className="educationDetail">
              <h4>12th – PN College, Khordha</h4>
              <p>Years: 2019–2021</p>
              <p>Percentage: 82%</p>
            </div>
          </div>

          <div className="timelineItem">
            <div className="circle" />
            <div className="educationDetail">
              <h4>10th – Saraswati Sishu Vidya Mandir, Jatani</h4>
              <p>Passout Year: 2019</p>
              <p>Percentage: 80%</p>
            </div>
          </div>
        </div>

        {/* Right side: Certifications */}
        <div className="certificationSection">
          <h3>Certifications</h3>
          <ul className="certificationList">
             <li>
              <strong>Web Development – IBM SkillsBuild</strong><br />
              Built responsive web pages using HTML, CSS, and JavaScript with practical projects.
            </li>
             <li>
              <strong>Data Analytics Job Simulation – Deloitte (Forage)</strong><br />
              Completed a virtual job simulation in June 2025 that involved practical tasks in data analysis and forensic technology, offered by Deloitte through the Forage platform.

 
            </li>
            <li>
              <strong>CCNA: Introduction to Networks</strong><br />
              Covered networking fundamentals including IP addressing, Ethernet, and network protocols. 
            </li>
            <li>
              <strong>CCNA: Switching, Routing, and Wireless Essentials</strong><br />
              Learned how to configure routers, switches, and wireless devices in small-to-medium networks.
            </li>
            <li>
              <strong>CCNA: Enterprise Networking, Security, and Automation</strong><br />
              Focused on advanced networking, automation, and securing enterprise networks.
            </li>
            <li>
              <strong>Data Fundamentals – IBM SkillsBuild</strong><br />
              Introduction to data analysis, databases, and working with data in business settings.
            </li>
           
            <li>
              <strong>Junior Cybersecurity Analyst – IBM SkillsBuild</strong><br />
              Gained hands-on skills in network security, threat detection, and cyber hygiene.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
