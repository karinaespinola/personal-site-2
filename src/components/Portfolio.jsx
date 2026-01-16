import React from 'react';
import { useInView } from 'react-intersection-observer';

const PortfolioCard = ({ project, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const isEven = (index + 1) % 2 === 0;
    const cardClass = `portfolio-card ${isEven ? 'right' : 'left'} ${inView ? 'animate' : ''}`;

    return (
        <div ref={ref} className={cardClass}>
            <div className="portfolio-card-top-accent"></div>
            <div className="portfolio-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="portfolio-technologies">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Payment Orchestrator',
            technologies: ['Laravel', 'PostgreSQL', 'Docker'],
            description: 'Platform that routes transactions across multiple payment gateways based on dynamic business rules.',
            workItems: [
                'Database design focused on scalability and traceability',
                'Complex payment routing and fallback logic',
                'Intelligent retry mechanisms for failed transactions',
                'Multiple payment gateway integrations'
            ],
        },
        {
            id: 2,
            title: 'Social Network API & Frontend Collaboration',
            technologies: ['Laravel', 'PostgreSQL', 'Next.js'],
            description: 'Developed and maintained REST APIs in Laravel for a social networking platform, working extensively with legacy code and making structural improvements to the database.',
        },
        {
            id: 3,
            title: 'Green Compliance Questionnaire Platform (EU)',
            technologies: ['Laravel', 'PostgreSQL'],
            description: 'Built the backend for a customizable questionnaire platform used by European companies to meet sustainability and "green compliance" requirements.'
        },
        {
            id: 4,
            title: 'Payment Gateway Integration',
            technologies: ['Node.js', 'Express.js'],
            description: 'Implemented payment gateway integrations for the backend of a social-style platform built with Node.js and Express.',
        },
        {
            id: 5,
            title: 'Digital E-Cards Platform',
            technologies: ['Laravel', 'React.js'],
            description: 'Developed the backend in Laravel for a digital e-cards platform, collaborating closely with a frontend built in React.js.',
        },
        {
            id: 6,
            title: 'WordPress & Custom Web Solutions',
            technologies: ['WordPress', 'PHP', 'MySQL'],
            description: 'Built and maintained multiple websites using WordPress, ranging from standard setups to custom PHP solutions.',
        }
    ];

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="portfolio-title">💼 Portfolio</h2>
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="portfolio-cards">
                        {projects.map((project, index) => (
                            <PortfolioCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
