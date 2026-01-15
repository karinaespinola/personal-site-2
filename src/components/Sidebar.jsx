import React, { useState } from 'react';
import { Link } from 'react-scroll';
import sandwichLogo from '../assets/coding-sandwich-removebg-preview.png';

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const sections = [
        { id: 'about', label: '👋 About Me' },
        { id: 'portfolio', label: '💼 Portfolio' },
        { id: 'skills', label: '💻 Technical Skills' },
        { id: 'contact', label: '📬 Contact' }
    ];

    return (
        <>
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        <img 
                            src={sandwichLogo} 
                            alt="Cali Espinola" 
                            className="logo-image"
                        />
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        {sections.map((section) => (
                            <li key={section.id}>
                                <Link
                                    to={section.id}
                                    smooth={true}
                                    duration={500}
                                    activeClass="active"
                                    spy={true}
                                    offset={-70}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {section.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar; 