// app/projects/page.js
import GlassCard from '../../components/GlassCard';

const dummyProjects = [
  {
    title: 'Multimodal Deepfake Detector',
    tag: 'AI / Research',
    desc: 'Detecting manipulated image, audio and video content with improved generalization.',
  },
  {
    title: 'Personal GenAI Agent',
    tag: 'GenAI / Agents',
    desc: 'A terminal-based assistant that can converse, search, and run tools.',
  },
  {
    title: 'Digital Bookshelf',
    tag: 'Web / Next.js',
    desc: 'A smart bookshelf that remembers, recommends, and organizes your content.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle mb-4">
        This will eventually contain real project cards with links, tech stacks and write-ups. For
        now, it&apos;s a structured placeholder so we can plug data in later.
      </p>

      <div className="glass-grid">
        {dummyProjects.map((project) => (
          <GlassCard key={project.title}>
            <p
              className="text-uppercase mb-1"
              style={{ letterSpacing: '0.12em', fontSize: '0.7rem', opacity: 0.75 }}
            >
              {project.tag}
            </p>
            <h2 className="h5 mb-2">{project.title}</h2>
            <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
              {project.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
