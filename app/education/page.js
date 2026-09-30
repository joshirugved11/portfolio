import GlassCard from '../../components/GlassCard';

const education = [
  {
    id: 0,
    institution: 'Technological University of Shannon',
    degree: 'Master of Science in Software Design with AI',
    duration: '2026 – 2027',
    location: 'Athlone, Ireland',
    grade: '',
    description: 'Add details about your masters program here.',
    highlights: [
      'Specialization / research area',
      'Thesis or capstone project',
    ],
    subjects: ['Research Methods', 'Professional Practice', 'Applied Scripting', 'Data Mining', 'Machine Learning'],
  },
  {
    id: 1,
    institution: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Engineering in Artificial Intelligence and Data Science',
    duration: '2021 – 2026',
    location: 'Pune, India',
    grade: 'CGPA: 7.04 / 10',
    description:
      'Studying core computer science fundamentals with a focus on AI, machine learning, and software engineering. Active in research projects and technical clubs.',
    highlights: [
      'Specialization in Artificial Intelligence and Machine Learning',
      'Relevant coursework: Data Structures, Algorithms, ML, DBMS, Networks',
      'Member of the AI & Robotics club',
      'Participated in multiple hackathons and coding competitions',
    ],
    subjects: ['Machine Learning', 'Deep Learning', 'Data Structures', 'OS', 'Networks', 'DBMS'],
  },
  {
    id: 2,
    institution: 'M.P. Phule Junior College',
    degree: 'Higher Secondary Certificate (Class XII) — Science',
    duration: '2019 – 2021',
    location: 'Pune, India',
    grade: 'Percentage: 87.5%',
    description:
      'Completed higher secondary education with Physics, Chemistry, and Mathematics as core subjects. Developed an early interest in programming and problem solving.',
    highlights: [
      'Physics, Chemistry, Mathematics with Information Technology',
      'Completed first programming projects in Python',
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Information Technology'],
  },
];

const certifications = [
  {
    name: 'Google — Generative AI Fundamentals',
    issuer: 'Google Cloud',
    year: '2024',
    link: '#',
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google / DeepLearning.AI',
    year: '2024',
    link: '#',
  },
  {
    name: 'Ethical Hacking Essentials',
    issuer: 'EC-Council / Coursera',
    year: '2023',
    link: '#',
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'The Odin Project',
    year: '2023',
    link: '#',
  },
];

export default function EducationPage() {
  return (
    <div className="education-page">
      <p className="terminal-label mb-2">education.log</p>
      <h1 className="section-title text-center mb-2">Education</h1>
      <p
        className="text-center mb-5"
        style={{
          fontSize: '0.95rem',
          maxWidth: '680px',
          margin: '0 auto 3rem',
          color: 'var(--text-soft)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        My academic background, degrees, and the certifications I&apos;ve picked
        up along the way.
      </p>

      {/* ─── DEGREES ─── */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {education.map((edu) => (
          <div key={edu.id} className="mb-4">
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
                    {edu.institution} • {edu.location}
                  </p>
                  <h2
                    className="h4 mb-1"
                    style={{
                      fontWeight: '700',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--green-pale)',
                    }}
                  >
                    {edu.degree}
                  </h2>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--green-bright)',
                      fontFamily: 'var(--font-mono)',
                      opacity: 0.85,
                    }}
                  >
                    {edu.grade}
                  </span>
                </div>

                <span
                  className="duration-badge px-3 py-1"
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}
                >
                  {edu.duration}
                </span>
              </div>

              <p className="mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>
                {edu.description}
              </p>

              {/* Highlights */}
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
                  highlights
                </p>
                <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                  {edu.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="mb-2"
                      style={{
                        fontSize: '0.88rem',
                        lineHeight: '1.55',
                        color: 'var(--text-soft)',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--green-bright)',
                          marginRight: '8px',
                          opacity: 0.7,
                        }}
                      >
                        &gt;
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects */}
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
                  key subjects
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {edu.subjects.map((s) => (
                    <span key={s} className="tech-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      {/* ─── CERTIFICATIONS ─── */}
      <div style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
        <p className="terminal-label mb-2">certifications.json</p>
        <h2
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--green-bright)',
            fontSize: '1.4rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          Certifications &amp; Courses
        </h2>

        <div className="glass-grid">
          {certifications.map((cert) => (
            <GlassCard key={cert.name}>
              <p
                style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--green-bright)',
                  opacity: 0.7,
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.4rem',
                }}
              >
                {cert.issuer} • {cert.year}
              </p>
              <h3
                className="h6 mb-3"
                style={{ color: 'var(--green-pale)', fontFamily: 'var(--font-display)', fontWeight: 600 }}
              >
                {cert.name}
              </h3>
              {cert.link && cert.link !== '#' ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass"
                  style={{ fontSize: '0.78rem', textDecoration: 'none' }}
                >
                  &gt; View Certificate
                </a>
              ) : (
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  link coming soon
                </span>
              )}
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="text-center mt-5" style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
        <GlassCard>
          <p className="terminal-label mb-2">connect.sh</p>
          <h3
            className="h5 mb-3"
            style={{ color: 'var(--green-bright)', fontFamily: 'var(--font-display)' }}
          >
            Interested in collaborating or hiring?
          </h3>
          <p className="mb-4" style={{ fontSize: '0.92rem' }}>
            I&apos;m currently open to internships, research roles, and project
            collaborations.
          </p>
          <a href="/connect" className="btn btn-glass" style={{ textDecoration: 'none' }}>
            &gt; Get in Touch
          </a>
        </GlassCard>
      </div>
    </div>
  );
}
