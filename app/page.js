// app/page.js
import GlassCard from '../components/GlassCard';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="mb-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 fade-up">
            <GlassCard>
              <p className="text-uppercase mb-2" style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}>
                Welcome
              </p>
              <h1 className="hero-title mb-3">
                Hi, I&apos;m <span className="hero-highlight">Rugved</span>.
              </h1>
              <p className="hero-tagline mb-4">
                I build AI & GenAI systems, experiment with deepfake detection, explore ethical
                hacking, and create things just for fun.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/projects" className="btn btn-glass">
                  Explore Projects
                </Link>
                <Link href="/connect" className="btn btn-outline-glass">
                  Connect With Me
                </Link>
                <Link href="/support" className="btn btn-outline-glass">
                  Support Me
                </Link>
              </div>
            </GlassCard>
          </div>

          <div className="col-lg-5 fade-up delay-1">
            <GlassCard className="text-center">
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: '999px',
                  margin: '0 auto 1.5rem',
                  border: '2px solid rgba(255,255,255,0.4)',
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(circle at 80% 80%, rgba(125,249,255,0.35), transparent 55%)',
                }}
              />
              <h2 className="h5 mb-1">Liquid Glass Portfolio</h2>
              <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                A futuristic glass UI with subtle liquid motion across the entire site.
              </p>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Scroll down or use the navigation above to explore my projects, fun experiments,
                newsletter, and ways to support my work.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Quick sections preview */}
      <section className="fade-up delay-2">
        <div className="glass-grid">
          <GlassCard>
            <h3 className="h5 mb-2">Projects</h3>
            <p className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
              AI, deepfake detection, GenAI agents, web apps and more. This section will showcase
              the work I&apos;ve actually built.
            </p>
            <Link href="/projects" className="btn btn-outline-glass btn-sm">
              View Projects
            </Link>
          </GlassCard>

          <GlassCard>
            <h3 className="h5 mb-2">Fun</h3>
            <p className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
              Music, experiments, mini tools, and playful ideas that don&apos;t have to be
              serious to be worth building.
            </p>
            <Link href="/fun" className="btn btn-outline-glass btn-sm">
              Go to Fun
            </Link>
          </GlassCard>

          <GlassCard>
            <h3 className="h5 mb-2">Connect & Newsletter</h3>
            <p className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
              Reach out for collaboration, feedback, or just to say hi. Join the newsletter to get
              updates on what I&apos;m building.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link href="/connect" className="btn btn-outline-glass btn-sm">
                Connect
              </Link>
              <Link href="/newsletter" className="btn btn-outline-glass btn-sm">
                Newsletter
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
