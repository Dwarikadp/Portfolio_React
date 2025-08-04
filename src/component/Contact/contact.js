import React,{useRef} from 'react';
import './contact.css';
// import LinkedinIcon from '../../assets/linkedIn.png';
// import InstagramIcon from '../../assets/Instagram.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vdk52zg',        // ✅ Your EmailJS service ID
        'template_y4oe2b8',       // ✅ Your EmailJS template ID
        form.current,
        'R7LMENeonfi9gy7TO'   // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          alert('✅ Email sent successfully!');
          e.target.reset();  // ✅ Clears the form after submission
        },
        (error) => {
          console.error('FAILED:', error.text);
          alert('❌ Failed to send email. Please try again.');
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="experience">
        <h1 className="contactTitle">My Experience</h1>

        <div className="experience-item">
          <h3>Web Development Intern</h3>
          <h4>Digital Bhem</h4>
          <p><strong>Duration:</strong> May 10, 2024 – June 10, 2024</p>
          <p>
            Built responsive websites using HTML, CSS, and JavaScript. 
            Assisted in feature development and performance optimization.
          </p>
        </div>

        <div className="experience-item">
          <h3>Video Editing Intern</h3>
          <h4>Out of the Box Solutions</h4>
          <p><strong>Duration:</strong> April 2, 2023 – May 2, 2023</p>
          <p>
            Edited educational videos for children using basic video tools. 
            Focused on clarity, creativity, and visual storytelling.
          </p>
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPagetitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities or just say hi!
        </span>

        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            name='your_name'
            placeholder="Your Name"
            className="name"
            required
          />
          <input
            type="email"
            name='your_email'
            placeholder="Your Email"
            className="email"
            required
          />
          <textarea
            name='message'
            rows="5"
            placeholder="Your Message"
            className="msg"
            required
          ></textarea>
          <button type="submit" className="submitBtn">Submit</button>

          <div className="links">
            <a
              href="https://www.instagram.com/_dwarika_dp?igsh=MWJhYTEzMTJ2bGcz"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/dwarikaprasad-padhee-6a1543258/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
