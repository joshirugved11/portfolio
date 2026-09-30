import GlassCard from '../../components/GlassCard';
import { FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Multimodal Deepfake Detector',
    tag: 'AI / Research',
    desc: 'Detecting manipulated image, audio and video content with improved generalization.',
    github: 'https://github.com/yourusername/deepfake-detector',
    projectUrl: 'https://github.com/yourusername/deepfake-detector',
    downloadUrl: 'https://github.com/yourusername/deepfake-detector/archive/refs/heads/main.zip',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'PyTorch', 'Flask'],
  },
  {
    title: 'Personal GenAI Agent',
    tag: 'GenAI / Agents',
    desc: 'A terminal-based assistant that can converse, search, and run tools.',
    github: 'https://github.com/yourusername/genai-agent',
    projectUrl: 'https://github.com/yourusername/genai-agent',
    downloadUrl: 'https://github.com/yourusername/genai-agent/archive/refs/heads/main.zip',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'Streamlit'],
  },
  {
    title: 'Digital Bookshelf',
    tag: 'Web / Next.js',
    desc: 'A smart bookshelf that remembers, recommends, and organizes your content.',
    github: 'https://github.com/yourusername/digital-bookshelf',
    projectUrl: 'https://github.com/yourusername/digital-bookshelf',
    downloadUrl: 'https://github.com/yourusername/digital-bookshelf/archive/refs/heads/main.zip',
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Node.js'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <p className="terminal-label mb-2">projects.exe</p>
      <h1 className="section-title mb-5">Projects</h1>

      <div className="glass-grid">
        {projects.map((project) => (
          <GlassCard key={project.title}>
            {/* Header row */}
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="flex-grow-1">
                <p
                  className="text-uppercase mb-1"
                  style={{
                    letterSpacing: '0.14em',
                    fontSize: '0.68rem',
                    color: 'var(--green-bright)',
                    opacity: 0.7,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  // {project.tag}
                </p>
                <h2
                  className="h5 mb-0"
                  style={{ color: 'var(--green-pale)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {project.title}
                </h2>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon ms-3"
                style={{ fontSize: '1.4rem' }}
                aria-label="View on GitHub"
                title="View on GitHub"
              >
                <FaGithub />
              </a>
            </div>

            <p className="mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.65' }}>
              {project.desc}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <p
                className="mb-2"
                style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--green-bright)',
                  opacity: 0.65,
                }}
              >
                stack
              </p>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
                style={{ textDecoration: 'none', fontSize: '0.8rem' }}
              >
                &gt; Visit <FaExternalLinkAlt className="ms-2" size={11} />
              </a>

              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  className="btn btn-glass"
                  style={{ textDecoration: 'none', fontSize: '0.8rem' }}
                  download
                >
                  &gt; Download <FaDownload className="ms-2" size={11} />
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
