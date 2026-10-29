'use client';

import GlassCard from '../../components/GlassCard';

const tiers = [
  { label: '₹50',  desc: 'Coffee' },
  { label: '₹100', desc: 'Double shot' },
  { label: '₹250', desc: 'Meal' },
  { label: '₹500', desc: 'Fuel a sprint' },
];

const buyMeACoffeeUrl = 'https://buymeacoffee.com/rugvedjoshi';

export default function SupportPage() {
  const handleSupportClick = () => {
    window.open(buyMeACoffeeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container py-5">
      <p className="terminal-label mb-2">Support</p>
      <h1 className="section-title text-center mb-3">Support My Work</h1>
      <p
        className="text-center mb-5"
        style={{
          fontSize: '0.95rem',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          color: 'var(--text-soft)',
        }}
      >
        If you like what I build — AI tools, research projects, experiments —
        you can support me with a small contribution. It helps me dedicate more
        time and resources to these ideas.
      </p>

      <div className="row g-4">
        {/* Left — tiers */}
        <div className="col-lg-7">
          <GlassCard>
            <p
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--green)',
                marginBottom: '1.2rem',
                opacity: 0.85,
              }}
            >
              Choose a one-time amount
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              {tiers.map((tier) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={handleSupportClick}
                  className="tier-btn"
                  style={{
                    minWidth: '110px',
                    padding: '10px 18px',
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{tier.label}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.65 }}>{tier.desc}</div>
                </button>
              ))}
            </div>

            <button className="btn btn-glass" onClick={handleSupportClick} type="button">
              Support via Buy Me a Coffee
            </button>
          </GlassCard>
        </div>

        {/* Right — what it enables */}
        <div className="col-lg-5">
          <GlassCard>
            <p
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--green)',
                marginBottom: '1rem',
                opacity: 0.85,
              }}
            >
              What your support enables
            </p>
            <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
              {[
                'Time to work on open-source and research projects.',
                'Better infrastructure for training & experiments.',
                'More content, write-ups and tutorials I can share.',
              ].map((item) => (
                <li key={item} className="mb-3" style={{ fontSize: '0.88rem', lineHeight: '1.55', color: 'var(--text-soft)' }}>
                  <span style={{ color: 'var(--green)', marginRight: '8px' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
