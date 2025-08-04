import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/DPlogo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/Contact.png';
import menuIcon from '../../assets/menu.png'; // hamburger icon

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />

            {/* Desktop Navigation */}
            <div className="desktopMenu">
                <Link to="intro" smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Home</Link>
                <Link to="skills" smooth={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
                <Link to="projects" smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link to="creative" smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Creative Works</Link>
                <Link to="education" smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Education & Certifications</Link>
            </div>

            {/* Desktop Button */}
            <button
                className="desktopMenuBtn"
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
                <img src={contactImg} className="desktopMenuImg" alt="contact" />
                Contact Me
            </button>

            {/* Hamburger Menu Icon (Mobile) */}
            <img
                src={menuIcon}
                alt="menu"
                className="mobMenu"
                onClick={() => setShowMenu(!showMenu)}
            />

            {/* Mobile Nav Links */}
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to="intro" smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to="skills" smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link to="projects" smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link to="creative" smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Creative Works</Link>
                <Link to="education" smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Education & Certifications</Link>
                <Link to="contact" smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
