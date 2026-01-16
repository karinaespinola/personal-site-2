import React from 'react';
import profileImage from '../assets/karina.png';

const Hero = () => {
    return (
        <section className="hero" id="about">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Hi, I'm Karina Espinola</h1>
                    <p className="subtitle">Backend Developer specialized in Laravel & APIs</p>
                    <p className="description">
                        I build reliable, scalable backend systems for startups and growing teams.
                        With 5+ years of experience, I focus on clean architecture, maintainable code, and making things work smoothly behind the scenes.

                        I love solving complex problems, improving existing systems, and constantly learning to become a better developer every day.
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