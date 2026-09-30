'use client';

import GlassCard from '../../components/GlassCard';

const experiences = [
  {
    id: 1,
    company: 'Company Name',
    role: 'Software Engineer Intern',
    duration: 'Jun 2024 – Aug 2024',
    location: 'Remote',
    description:
      'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Built responsive frontend interfaces using React and Next.js',
      'Optimized application performance, reducing load time by 40%',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in code reviews and agile development processes',
    ],
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Git'],
  },
  {
    id: 2,
    company: 'Previous Company',
    role: 'Full Stack Developer Intern',
    duration: 'Jan 2024 – May 2024',
    location: 'Hybrid',
    description:
      'Worked on full-stack development projects, creating scalable web applications and improving existing systems.',
    achievements: [
      'Designed and developed database schemas for new features',
      'Created automated testing suites, improving code coverage by 30%',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Mentored junior developers and conducted technical workshops',
    ],
    skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 3,
    company: 'Another Organization',
    role: 'Data Science Intern',
    duration: 'Jun 2023 – Aug 2023',
    location: 'On-site',
    description:
      'Applied machine learning and data analysis techniques to solve real-world business problems and derive actionable insights.',
    achievements: [
      'Built predictive models achieving 85% accuracy on key metrics',
      'Created interactive dashboards for data visualization',
      'Processed and analyzed large datasets using Python and SQL',
      'Presented findings to stakeholders and management team',
    ],
    skills: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'Tableau'],
  },
];

export default function ExperiencePage() {
  return (
    <div className="experience-page">
      <p className="terminal-label mb-2">experience.log</p>
      <h1 className="section-title text-center mb-2">Professional Experience</h1>
      <p
        className="text-center mb-5"
        style={{
          fontSize: '0.95rem',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          color: 'var(--text-soft)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        My journey through various roles, internships, and professional experiences in the tech industry.
      </p>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, i) => (
          <div key={exp.id} className="mb-4">
            <GlassCard>
              {/* Header */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                <div className="mb-2 mb-md-0">
                  <p
                    className="text-uppercase mb-1"
                    style={{
                      letterSpacing: '0.12em',
                      fontSize: '0.68rem',
                      color: 'var(--green-bright)',
                      opacity: 0.7,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {exp.company} • {exp.location}
                  </p>
                  <h2
                    className="h4 mb-0"
                    style={{ fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--green-pale)' }}
                  >
                    {exp.role}
                  </h2>
                </div>

                <span
                  className="duration-badge px-3 py-1"
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-mono)' }}
                >
                  {exp.duration}
                </span>
              </div>

              <p className="mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-3">
                <p
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--green-bright)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  achievements
                </p>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  {exp.achievements.map((a, idx) => (
                    <li
                      key={idx}
                      className="mb-2"
                      style={{
                        fontSize: '0.88rem',
                        lineHeight: '1.55',
                        color: 'var(--text-soft)',
                        listStyleType: 'none',
                      }}
                    >
                      <span style={{ color: 'var(--green-bright)', marginRight: '8px', opacity: 0.7 }}>
                        &gt;
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <p
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--green-bright)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    opacity: 0.7,
                  }}
                >
                  stack
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <GlassCard>
          <p className="terminal-label mb-2">collaboration.sh</p>
          <h3
            className="h5 mb-3"
            style={{ color: 'var(--green-bright)', fontFamily: 'var(--font-display)' }}
          >
            Interested in working together?
          </h3>
          <p className="mb-4" style={{ fontSize: '0.92rem' }}>
            I&apos;m always open to discussing new opportunities and collaborations.
          </p>
          <a href="/connect" className="btn btn-glass" style={{ textDecoration: 'none' }}>
            &gt; Get in Touch
          </a>
        </GlassCard>
      </div>
    </div>
  );
}
