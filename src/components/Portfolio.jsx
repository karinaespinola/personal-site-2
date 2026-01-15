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
            <div className="portfolio-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="portfolio-work-section">
                    <p className="work-label">I worked on:</p>
                    <ul className="work-items">
                        {project.workItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {project.note && (
                    <p className="project-note">{project.note}</p>
                )}

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
            title: '2️⃣ Social Network API & Frontend Collaboration',
            technologies: ['Laravel', 'PostgreSQL', 'Next.js'],
            description: 'Developed and maintained REST APIs in Laravel for a social networking platform, working extensively with legacy code and making structural improvements to the database.',
            workItems: [
                'Improve API–frontend contracts',
                'Better understand end-to-end application flows',
                'Resolve issues from a full-stack perspective'
            ],
            note: 'A project that required adaptability and deep system understanding.'
        },
        {
            id: 3,
            title: '3️⃣ Green Compliance Questionnaire Platform (EU)',
            technologies: ['Laravel', 'PostgreSQL'],
            description: 'Built the backend for a customizable questionnaire platform used by European companies to meet sustainability and "green compliance" requirements.',
            workItems: [
                'Designing flexible and scalable data models',
                'Implementing APIs for dynamic questionnaire flows',
                'Supporting different company types and regulatory rules'
            ],
            note: 'A system focused on data integrity, clarity, and long-term scalability.'
        },
        {
            id: 4,
            title: '4️⃣ Payment Gateway Integration for Node.js Platform',
            technologies: ['Node.js', 'Express.js'],
            description: 'Implemented payment gateway integrations for the backend of a social-style platform built with Node.js and Express.',
            workItems: [
                'Secure payment processing',
                'Error handling and transaction state management',
                'Ensuring consistency between payment flows and product logic'
            ],
            note: 'This project strengthened my ability to work confidently outside the PHP/Laravel ecosystem.'
        },
        {
            id: 5,
            title: '5️⃣ Digital E-Cards Platform',
            technologies: ['Laravel', 'React.js'],
            description: 'Developed the backend in Laravel for a digital e-cards platform, collaborating closely with a frontend built in React.js.',
            workItems: [
                'Clean, predictable API design',
                'Supporting user flows and dynamic content',
                'Strong backend–frontend collaboration'
            ],
            note: 'A creative project that balanced user experience with solid backend architecture.'
        },
        {
            id: 6,
            title: '6️⃣ WordPress & Custom Web Solutions',
            technologies: ['WordPress', 'PHP', 'MySQL'],
            description: 'Built and maintained multiple websites using WordPress, ranging from standard setups to custom PHP solutions.',
            workItems: [
                'Corporate websites and small e-commerce projects',
                'Theme and plugin customization',
                'Performance optimization and ongoing maintenance'
            ],
            note: 'This work strengthened my understanding of product, business needs, and end users.'
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
