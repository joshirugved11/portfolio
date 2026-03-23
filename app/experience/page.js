'use client';

import GlassCard from '../../components/GlassCard';

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: 'Company Name',
      role: 'Software Engineer Intern',
      duration: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built responsive frontend interfaces using React and Next.js',
        'Optimized application performance, reducing load time by 40%',
        'Implemented RESTful APIs and integrated third-party services',
        'Participated in code reviews and agile development processes'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Git']
    },
    {
      id: 2,
      company: 'Previous Company',
      role: 'Full Stack Developer Intern',
      duration: 'Jan 2024 - May 2024',
      location: 'Hybrid',
      description: 'Worked on full-stack development projects, creating scalable web applications and improving existing systems.',
      achievements: [
        'Designed and developed database schemas for new features',
        'Created automated testing suites, improving code coverage by 30%',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Mentored junior developers and conducted technical workshops'
      ],
      skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 3,
      company: 'Another Organization',
      role: 'Data Science Intern',
      duration: 'Jun 2023 - Aug 2023',
      location: 'On-site',
      description: 'Applied machine learning and data analysis techniques to solve real-world business problems and derive actionable insights.',
      achievements: [
        'Built predictive models achieving 85% accuracy on key metrics',
        'Created interactive dashboards for data visualization',
        'Processed and analyzed large datasets using Python and SQL',
        'Presented findings to stakeholders and management team'
      ],
      skills: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'Tableau']
    }
  ];

  return (
    <div className="experience-page">
      <div className="container py-5">
        <h1 className="section-title text-center mb-3">Professional Experience</h1>
        <p className="text-center mb-5" style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto 3rem', color: '#ffffff' }}>
          My journey through various roles, internships, and professional experiences in the tech industry.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-4">
              <GlassCard>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                  <div className="mb-2 mb-md-0">
                    <p 
                      className="text-uppercase mb-1" 
                      style={{ 
                        letterSpacing: '0.12em', 
                        fontSize: '0.7rem', 
                        opacity: 0.75,
                        color: 'var(--accent-aqua)'
                      }}
                    >
                      {exp.company} • {exp.location}
                    </p>
                    <h2 className="h4 mb-1" style={{ fontWeight: '600' }}>
                      {exp.role}
                    </h2>
                  </div>
                  <div 
                    className="duration-badge px-3 py-1" 
                    style={{
                      background: 'rgba(125, 249, 255, 0.1)',
                      border: '1px solid rgba(125, 249, 255, 0.3)',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {exp.duration}
                  </div>
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {exp.description}
                </p>

                <div className="mb-3">
                  <h3 className="h6 mb-2" style={{ color: 'var(--accent-purple)', fontWeight: '500' }}>
                    Key Achievements:
                  </h3>
                  <ul className="achievements-list mb-0" style={{ paddingLeft: '1.25rem' }}>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted mb-2" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="skills-section">
                  <h3 className="h6 mb-2" style={{ color: 'var(--accent-aqua)', fontWeight: '500', fontSize: '0.85rem' }}>
                    Technologies & Skills:
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="skill-badge px-3 py-1"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <GlassCard>
            <h3 className="h5 mb-3">Interested in working together?</h3>
            <p className="text-muted mb-4">
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <a 
              href="/connect" 
              className="btn btn-glass px-4 py-2"
              style={{
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Get in Touch
            </a>
          </GlassCard>
        </div>
      </div>

      <style jsx>{`
        .experience-page {
          min-height: 100vh;
        }

        .experience-timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-badge:hover {
          background: rgba(125, 249, 255, 0.15) !important;
          border-color: var(--accent-aqua) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 8px rgba(125, 249, 255, 0.3);
        }

        .achievements-list li::marker {
          color: var(--accent-aqua);
        }

        @media (max-width: 768px) {
          .duration-badge {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
