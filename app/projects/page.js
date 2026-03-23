// app/projects/page.js
import GlassCard from '../../components/GlassCard';
import { FaGithub, FaClock } from 'react-icons/fa';

const dummyProjects = [
  {
    title: 'Multimodal Deepfake Detector',
    tag: 'AI / Research',
    desc: 'Detecting manipulated image, audio and video content with improved generalization.',
    github: 'https://github.com/yourusername/deepfake-detector',
    timeline: 'Sep 2024 - Dec 2024',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'PyTorch', 'Flask']
  },
  {
    title: 'Personal GenAI Agent',
    tag: 'GenAI / Agents',
    desc: 'A terminal-based assistant that can converse, search, and run tools.',
    github: 'https://github.com/yourusername/genai-agent',
    timeline: 'Jun 2024 - Aug 2024',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'Streamlit']
  },
  {
    title: 'Digital Bookshelf',
    tag: 'Web / Next.js',
    desc: 'A smart bookshelf that remembers, recommends, and organizes your content.',
    github: 'https://github.com/yourusername/digital-bookshelf',
    timeline: 'Mar 2024 - May 2024',
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Node.js']
  },
];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1 className="section-title">Projects</h1>

      <div className="glass-grid">
        {dummyProjects.map((project) => (
          <GlassCard key={project.title}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="flex-grow-1">
                <p
                  className="text-uppercase mb-1"
                  style={{
                    letterSpacing: '0.12em',
                    fontSize: '0.7rem',
                    opacity: 0.75,
                  }}
                >
                  {project.tag}
                </p>
                <h2 className="h5 mb-2">{project.title}</h2>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ fontSize: '1.4rem' }}
                aria-label="View on GitHub"
              >
                <FaGithub />
              </a>
            </div>

            <p className="text-muted mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              {project.desc}
            </p>

            {/* Timeline */}
            <div className="d-flex align-items-center mb-3" style={{ gap: '0.5rem' }}>
              <FaClock style={{ color: 'var(--accent-purple)', fontSize: '0.85rem' }} />
              <span style={{ 
                fontSize: '0.85rem', 
                color: 'var(--accent-purple)',
                fontWeight: '500'
              }}>
                {project.timeline}
              </span>
            </div>

            {/* Technologies */}
            <div>
              <p className="mb-2" style={{ 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                opacity: 0.7
              }}>
                Technologies
              </p>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="tech-badge"
                    style={{
                      background: 'rgba(125, 249, 255, 0.1)',
                      border: '1px solid rgba(125, 249, 255, 0.3)',
                      borderRadius: '12px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem',
                      color: 'var(--accent-aqua)',
                      fontWeight: '500',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
