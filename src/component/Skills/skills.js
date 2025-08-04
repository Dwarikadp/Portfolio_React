import React from 'react';
import './skills.css';

import UIDesign from '../../assets/ux.png';
import WebDesign from '../../assets/Web dev.png';
import VideoEdit from '../../assets/Videoedit.png';

const skills = [
  {
    title: "Web Design",
    image: WebDesign,
    description: "I'm a full-stack web developer skilled in both frontend and backend development. While I can build complete web applications, I’m especially passionate about the design phase—creating clean, user-focused interfaces and engaging digital experiences"
  },
  {
    title: "UI/UX Design",
    image: UIDesign,
    description: "I'm currently exploring the world of UI/UX design. With a strong foundation in visual creativity, I’m learning to design clean, intuitive interfaces using tools like Figma. I can confidently create basic layouts and user flows, and I’m continuously improving my ability to turn ideas into meaningful, user-friendly designs"
  },
  {
    title: "Video Edit",
    image: VideoEdit,
    description: "I create and edit a variety of video content, from travel vlogs and product promos to event highlights and storytelling reels. With a creative eye for pacing, visuals, and music, I aim to produce videos that are not only visually appealing but also emotionally engaging. Whether it's for social media, YouTube, or brand marketing, I bring ideas to life through thoughtful editing"
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillTitle">What I Do</h2>
      <p className="skillDesc">
        Specialize in full-stack web development, UI/UX design using Figma, and creative media including video editing, photography, and photo editing—delivering visually engaging and functional digital experiences
      </p>
      <div className="skillsGrid">
        {skills.map((skill, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={skill.image} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
