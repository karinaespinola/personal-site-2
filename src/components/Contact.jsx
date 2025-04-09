import React, { useEffect } from 'react';
import raccoonImage from '../assets/coding-racoon-removebg-preview.png';

const Contact = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <h2 className="animate-on-scroll">Let's Connect!</h2>
                    <div className="contact-message animate-on-scroll">
                        <p>Thanks for scrolling all the way down here—it really means a lot.</p>
                        <p>While my raccoon buddy is deep in the zone (probably fixing bugs I created), I'd truly love to hear from you. Whether it's to talk code, collab on something cool, or just say hi—don't be shy!</p>
                        <p>Drop me a message, share your thoughts, or send snacks. I'm all ears. 🦝💻</p>
                    </div>
                    <div className="contact-image-wrapper animate-on-scroll">
                        <img 
                            src={raccoonImage} 
                            alt="Cristy Alas" 
                            className="contact-image"
                        />
                    </div>
                    <div className="social-links animate-on-scroll">
                        <a href="https://www.linkedin.com/in/karina-espinola/" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="mailto:kl.spinolah@gmail.com" className="social-link">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 