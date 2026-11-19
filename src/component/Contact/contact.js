import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Sending your message...' });

    emailjs
      .sendForm(
        'service_vdk52zg',        // EmailJS service ID
        'template_y4oe2b8',       // EmailJS template ID
        form.current,
        'R7LMENeonfi9gy7TO'       // EmailJS public key
      )
      .then(
        (result) => {
          setStatus({
            state: 'success',
            message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
          });
          e.target.reset();
        },
        (error) => {
          setStatus({
            state: 'error',
            message: 'Failed to send message. Please reach out directly via email or phone.'
          });
        }
      );
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-tag">Let's Connect</span>
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have an enterprise opportunity, business systems inquiry, or project collaboration? Drop a direct message or connect across any platform.
        </p>
      </div>

      <div className="contact-grid-layout">
        
        {/* Left Side: Direct Contact Details & Links */}
        <div className="contact-info-col">
          <div className="contact-card glass-card">
            <h3 className="contact-col-title">Contact Information</h3>
            <p className="contact-col-desc">
              Available for enterprise IT operations, business systems consultancy, and full-stack software development roles.
            </p>

            <div className="contact-details-list">
              <a href="mailto:dwarikaprasadpadhee03@gmail.com" className="contact-detail-row">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">dwarikaprasadpadhee03@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917848867524" className="contact-detail-row">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">+91 7848867524</span>
                </div>
              </a>

              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials-box">
              <span className="socials-subhead">Profiles & Communities</span>
              <div className="contact-social-pills">
                <a href="https://leetcode.com/u/Dwarikadp03/" target="_blank" rel="noopener noreferrer" className="c-social-btn c-leetcode-btn" title="LeetCode Profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 6.01 6.01 0 0 0 1.258.077 6.136 6.136 0 0 0 2.453-.556l3.666-2.115a1.2 1.2 0 1 0-1.199-2.08l-3.666 2.115a3.738 3.738 0 0 1-1.496.339 3.664 3.664 0 0 1-.767-.047 3.54 3.54 0 0 1-2.873-2.308 3.327 3.327 0 0 1-.209-.609 3.322 3.322 0 0 1-.037-1.417 3.15 3.15 0 0 1 .723-1.259l3.853-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-2.348zM16.5 10.5a1.2 1.2 0 0 0-1.2 1.2v6.6a1.2 1.2 0 0 0 2.4 0v-6.6a1.2 1.2 0 0 0-1.2-1.2zm3.6-4.8a1.2 1.2 0 0 0-.848.352l-2.4 2.4a1.2 1.2 0 0 0 1.697 1.697l2.4-2.4A1.2 1.2 0 0 0 20.1 5.7z"/>
                  </svg>
                  <span>LeetCode</span>
                </a>
                <a href="https://www.linkedin.com/in/dwarikaprasad-padhee-6a1543258/" target="_blank" rel="noopener noreferrer" className="c-social-btn" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Dwarikadp" target="_blank" rel="noopener noreferrer" className="c-social-btn" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/_dwarika_dp?igsh=MWJhYTEzMTJ2bGcz" target="_blank" rel="noopener noreferrer" className="c-social-btn" title="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Message Form */}
        <div className="contact-form-col">
          <form ref={form} onSubmit={sendEmail} className="contact-form-card glass-card">
            <h3 className="form-card-title">Send a Direct Message</h3>

            <div className="form-field-group">
              <label htmlFor="name" className="field-label">Your Name</label>
              <input
                id="name"
                type="text"
                name="your_name"
                placeholder="e.g. Dwarika Padhee"
                required
                className="form-input"
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="email" className="field-label">Your Email</label>
              <input
                id="email"
                type="email"
                name="your_email"
                placeholder="e.g. name@company.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="message" className="field-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project, system requirements, or inquiry..."
                required
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.state === 'sending'}
              className="btn-primary form-submit-btn"
            >
              {status.state === 'sending' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>

            {status.message && (
              <div className={`form-feedback-alert ${status.state === 'success' ? 'feedback-success' : 'feedback-error'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;