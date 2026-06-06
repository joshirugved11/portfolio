import GlassCard from '../../components/GlassCard';
import { FaBookOpen, FaExternalLinkAlt, FaLightbulb, FaPenNib } from 'react-icons/fa';

const publications = [
  {
    type: 'Research',
    title: 'Multimodal Deepfake Detection',
    status: 'In progress',
    description:
      'A research-focused write-up on detecting manipulated images, audio, and video using multimodal signals and practical evaluation methods.',
    topics: ['Deepfake Detection', 'Computer Vision', 'Audio Analysis'],
  },
  {
    type: 'Technical Article',
    title: 'Building Useful GenAI Agents',
    status: 'Draft',
    description:
      'Notes on designing agents that can use tools, remember context, and stay reliable in real workflows instead of only producing demos.',
    topics: ['GenAI', 'Agents', 'Tool Use'],
  },
  {
    type: 'Learning Notes',
    title: 'Ethical Hacking Lab Notes',
    status: 'Planned',
    description:
      'Short articles from safe lab environments covering reconnaissance, vulnerability basics, and defensive lessons learned.',
    topics: ['Security', 'CTF', 'Defensive Thinking'],
  },
];

const suggestions = [
  'Project breakdowns with architecture diagrams and lessons learned.',
  'Short AI explainers that turn research papers into practical takeaways.',
  'Tutorials for students building first versions of ML, web, and security projects.',
  'Monthly build logs covering experiments, failures, and next steps.',
];

export default function PublicationsPage() {
  return (
    <div className="publications-page">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p
            className="text-uppercase mb-2"
            style={{ letterSpacing: '0.18em', fontSize: '0.75rem' }}
          >
            Writing & Research
          </p>
          <h1 className="section-title mb-3">Publications</h1>
          <p
            className="text-muted mx-auto mb-0"
            style={{ maxWidth: '760px', fontSize: '1rem', lineHeight: '1.7' }}
          >
            A home for my research write-ups, technical articles, learning notes,
            and practical ideas from the projects I build.
          </p>
        </div>

        <div className="glass-grid mb-5">
          {publications.map((item) => (
            <GlassCard key={item.title}>
              <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                <div>
                  <p
                    className="text-uppercase mb-1"
                    style={{
                      letterSpacing: '0.12em',
                      fontSize: '0.7rem',
                      opacity: 0.78,
                    }}
                  >
                    {item.type}
                  </p>
                  <h2 className="h5 mb-0">{item.title}</h2>
                </div>

                <span
                  className="px-3 py-1"
                  style={{
                    border: '1px solid rgba(135, 206, 255, 0.28)',
                    borderRadius: '999px',
                    background: 'rgba(88, 184, 255, 0.1)',
                    fontSize: '0.78rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-muted mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.65' }}>
                {item.description}
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="tech-badge"
                    style={{
                      background: 'rgba(135, 206, 255, 0.1)',
                      border: '1px solid rgba(135, 206, 255, 0.24)',
                      borderRadius: '12px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <button className="btn btn-glass" type="button" disabled>
                Coming Soon <FaExternalLinkAlt className="ms-2" size={12} />
              </button>
            </GlassCard>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <GlassCard>
              <div className="d-flex align-items-center gap-3 mb-3">
                <FaBookOpen size={24} />
                <h2 className="h5 mb-0">What this section will include</h2>
              </div>
              <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                This page can grow into a proper publication archive with links to
                papers, blogs, GitHub write-ups, conference notes, newsletter posts,
                and downloadable PDFs as you publish more work.
              </p>
            </GlassCard>
          </div>

          <div className="col-lg-5">
            <GlassCard>
              <div className="d-flex align-items-center gap-3 mb-3">
                <FaLightbulb size={22} />
                <h2 className="h5 mb-0">Suggested article ideas</h2>
              </div>
              <ul className="mb-0 ps-3">
                {suggestions.map((suggestion) => (
                  <li key={suggestion} className="text-muted mb-2" style={{ lineHeight: '1.5' }}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>

        <div className="text-center mt-5">
          <GlassCard>
            <FaPenNib size={24} className="mb-3" />
            <h2 className="h5 mb-3">Publishing soon</h2>
            <p className="text-muted mb-4">
              I&apos;ll use this page to share polished articles and research notes
              as they are ready.
            </p>
            <a href="/connect" className="btn btn-glass">
              Suggest a Topic
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
