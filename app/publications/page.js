import GlassCard from '../../components/GlassCard';
import { FaExternalLinkAlt, FaPenNib } from 'react-icons/fa';

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

export default function PublicationsPage() {
  return (
    <div className="publications-page">
      <div className="text-center mb-5">
        <p className="terminal-label mb-2">Publications</p>
        <h1 className="section-title mb-3">Publications</h1>
        <p
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            fontSize: '0.95rem',
            lineHeight: '1.7',
            color: 'var(--text-soft)',
          }}
        >
          This page is dedicated to research publications only. For articles,
          blogs, and write-ups, a separate website is on the way — stay tuned.
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
                    letterSpacing: '0.14em',
                    fontSize: '0.68rem',
                    color: 'var(--green)',
                    opacity: 0.85,
                  }}
                >
                  {item.type}
                </p>
                <h2
                  className="h5 mb-0"
                  style={{ color: 'var(--text-main)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {item.title}
                </h2>
              </div>

              <span className="status-badge">{item.status}</span>
            </div>

            <p className="mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.65' }}>
              {item.description}
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {item.topics.map((topic) => (
                <span key={topic} className="tech-badge">{topic}</span>
              ))}
            </div>

            <button className="btn btn-glass" type="button" disabled style={{ opacity: 0.5 }}>
              Coming Soon <FaExternalLinkAlt className="ms-2" size={11} />
            </button>
          </GlassCard>
        ))}
      </div>

      <div className="text-center mt-2">
        <GlassCard>
          <FaPenNib size={24} className="mb-3" style={{ color: 'var(--green)' }} />
          <p className="terminal-label mb-2">Publishing Soon</p>
          <h2
            className="h5 mb-3"
            style={{ color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}
          >
            Publishing soon
          </h2>
          <p className="mb-0" style={{ fontSize: '0.92rem' }}>
            Research papers and publications will appear here as they are released.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
