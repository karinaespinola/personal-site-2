import React from 'react';
import profileImage from '../assets/karina.png';

const Hero = () => {
    return (
        <section className="hero" id="about">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Hi, I'm Karina Espinola</h1>
                    <p className="subtitle">Backend Developer</p>
                    <p className="description">
                    Hi friend! 👋 Welcome to my digital hideout. 
                    I'm a backend developer who lives for clean code, smooth systems, 
                    and making things work behind the scenes. 
                    I tinker, I build, and I’m always learning—pushing myself to grow and get better 
                    at what I do. Make yourself at home!
                     And hey, if you’d like to reach out, I’m all ears!
                    </p>
                </div>
                <div className="hero-image">
                    <img 
                        src={profileImage}
                        alt="Karina Espinola - Full Stack Developer" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero; 