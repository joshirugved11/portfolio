// app/connect/page.js
import GlassCard from '../../components/GlassCard';

export default function ConnectPage() {
  return (
    <div className="connect-page">
      <h1 className="section-title">Connect With Me</h1>
      <p className="section-subtitle mb-4">
        Have a project idea, collaboration, or just want to say hi? Drop a message here. Later we
        can wire this up to email or a backend.
      </p>

      <GlassCard className="fade-up">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control bg-transparent text-light" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control bg-transparent text-light" />
          </div>
          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea rows={4} className="form-control bg-transparent text-light" />
          </div>
          <div className="col-12 d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-glass">
              Send Message (placeholder)
            </button>
            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
              Later: hook this to email / API.
            </div>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
