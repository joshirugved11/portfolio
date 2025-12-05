// app/support/page.js
import GlassCard from '../../components/GlassCard';

const tiers = [
  { label: '₹50', note: 'A small push of encouragement.' },
  { label: '₹100', note: 'Helps me keep experimenting.' },
  { label: '₹250', note: 'Supports bigger builds & research.' },
  { label: '₹500', note: 'Backs serious time on projects.' },
];

export default function SupportPage() {
  return (
    <div className="support-page">
      <h1 className="section-title">Support My Work</h1>
      <p className="section-subtitle mb-4">
        If you like what I build — AI tools, research projects, experiments — you can support me
        with a small contribution. It helps me dedicate more time and resources to these ideas.
      </p>

      <div className="row g-4">
        <div className="col-lg-7">
          <GlassCard>
            <h2 className="h5 mb-3">Choose a one-time amount</h2>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {tiers.map((tier) => (
                <button
                  key={tier.label}
                  type="button"
                  className="btn btn-outline-glass"
                  style={{ minWidth: 90 }}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
              These buttons are UI only for now. Later we&apos;ll connect them to Razorpay/UPI,
              Stripe, Buy Me a Coffee, or your preferred platform.
            </p>

            <div className="mb-3">
              <label className="form-label mb-1" style={{ fontSize: '0.85rem' }}>
                Custom amount (optional)
              </label>
              <input
                type="number"
                className="form-control bg-transparent text-light"
                placeholder="Enter any amount"
              />
            </div>

            <button type="button" className="btn btn-glass">
              Continue to Payment (placeholder)
            </button>
          </GlassCard>
        </div>

        <div className="col-lg-5">
          <GlassCard>
            <h2 className="h6 mb-2">What your support enables</h2>
            <ul className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              <li>Time to work on open-source and research projects.</li>
              <li>Better infrastructure for training & experiments.</li>
              <li>More content, write-ups and tutorials I can share.</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
