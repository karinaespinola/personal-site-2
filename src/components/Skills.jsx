import React, { useEffect } from 'react';
import laravelIcon from '../assets/laravel.svg';
import apiIcon from '../assets/api.svg';
import postgresqlIcon from '../assets/postgresql.svg';

const Skills = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.skill-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    const skills = [
        {
            icon: laravelIcon,
            title: 'Laravel',
            description: 'Extensive experience with Laravel, leveraging its powerful features to develop clean, maintainable, and scalable backend systems.',
            features: [
                'RESTful API Development',
                'Database Management',
                'Authentication & Authorization',
                'Service Architecture'
            ]
        },
        {
            icon: apiIcon,
            title: 'API Development',
            description: 'Expert in designing and implementing RESTful APIs, ensuring secure, efficient, and well-documented endpoints for seamless integration.',
            features: [
                'REST Architecture',
                'API Security',
                'Documentation',
                'Performance Optimization'
            ]
        },
        {
            icon: postgresqlIcon,
            title: 'PostgreSQL',
            description: 'Proficient in PostgreSQL database design, optimization, and management, utilizing advanced features for robust data handling.',
            features: [
                'Database Design',
                'Query Optimization',
                'Data Modeling',
                'Performance Tuning'
            ]
        }
    ];

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <img src={skill.icon} alt={skill.title} className="skill-icon" />
                                <h3>{skill.title}</h3>
                            </div>
                            <p className="skill-description">{skill.description}</p>
                            <ul className="skill-features">
                                {skill.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>
                                        <span className="feature-bullet">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 