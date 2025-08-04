import React from 'react'
import './intro.css'
import bg from '../../../assets/profilepic.png'
import download from '../../../assets/download.png'
const Intro = () => {
  return (
   <section id ="intro">
    <div className="introContent">
<span className="hello">Hello</span><br />
<span className="introText">I'm <span className="introName">Dwarika</span><br />FullStack Web Developer</span>
<p className="introPara">I'm a passionate Full Stack Web Developer with experience in building responsive and dynamic web applications using modern technologies like React, Node.js, MongoDB, and Express.</p>
<a href="/DwarikaResume.pdf" download>
  <button className="btn">
    <img src={download} alt="download" className="btnImg" />
    Download CV
  </button>
</a>
 </div>

   <div className="introImage">
  <img src={bg} alt="Profile" className="bg" />
  </div>
   </section>
  )
}

export default Intro