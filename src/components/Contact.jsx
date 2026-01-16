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
                    <p>I’m always open to new job opportunities as well as collaborating with fellow developers and teams on meaningful projects</p>
                    <p>You can also find me on LinkedIn, where I share practical backend tips and thoughts on engineering, growth, and real-world development challenges.</p>
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