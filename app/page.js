import GlassCard from '../components/GlassCard';
import StaticRole from '../components/StaticRole';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function HomePage() {
  return (
    <div className="home-page">

      {/* ─── HERO ─── */}
      <section className="mb-5">
        <div className="row align-items-center g-4">

          {/* Left — intro text */}
          <div className="col-lg-7">
            <GlassCard>
              <p className="terminal-label mb-3">
                Welcome
              </p>

              <h1 className="hero-title mb-3">
                Hi, I&apos;m{' '}
                <span className="hero-highlight">Rugved</span>.
              </h1>

              {/* Static role */}
              <div className="mb-4" style={{ fontSize: '1.1rem' }}>
                <StaticRole role="AI & GenAI Engineer" />
              </div>

              <p className="hero-tagline mb-4">
                Passionate about AI, cybersecurity, and full-stack development —
                turning ideas into working systems.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/projects" className="btn btn-glass">
                  Explore Projects
                </Link>
                <Link href="/connect" className="btn btn-glass">
                  Get in Touch
                </Link>
              </div>
            </GlassCard>
          </div>

          {/* Right — profile photo */}
          <div className="col-lg-5">
            <GlassCard className="text-center">
              <div className="profile-img-wrapper d-inline-block mb-4">
                <Image
                  src="/profile.jpg"
                  alt="Rugved Joshi"
                  width={220}
                  height={220}
                  style={{
                    borderRadius: '20px',
                    objectFit: 'cover',
                    border: '2px solid rgba(48,184,94,0.3)',
                    display: 'block',
                  }}
                  priority
                />
              </div>

              <p
                className="mb-0"
                style={{ fontSize: '0.9rem', opacity: 0.85 }}
              >
                Scroll down or use the navigation above to explore my projects,
                newsletter, and ways to support my work.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ─── QUICK SECTIONS ─── */}
      <section>
        <div className="glass-grid">
          <GlassCard>
            <p className="terminal-label mb-2">Projects</p>
            <h3
              className="h5 mb-2"
              style={{ color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}
            >
              Projects
            </h3>
            <p className="mb-3" style={{ fontSize: '0.9rem' }}>
              AI, deepfake detection, GenAI agents, web apps and more.
              This section showcases the work I&apos;ve actually built.
            </p>
            <Link href="/projects" className="btn btn-glass" style={{ fontSize: '0.8rem' }}>
              View Projects
            </Link>
          </GlassCard>

          <GlassCard>
            <p className="terminal-label mb-2">Connect</p>
            <h3
              className="h5 mb-2"
              style={{ color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}
            >
              Connect &amp; Newsletter
            </h3>
            <p className="mb-3" style={{ fontSize: '0.9rem' }}>
              Reach out for collaboration, feedback, or just to say hi.
              Join the newsletter to get updates on what I&apos;m building.
            </p>
            <Link href="/connect" className="btn btn-glass" style={{ fontSize: '0.8rem' }}>
              Connect
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* ─── SOCIAL MEDIA ─── */}
      <section className="mt-5">
        <GlassCard className="text-center">
          <p className="terminal-label mb-2">Social</p>
          <h3
            className="h5 mb-3"
            style={{ color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}
          >
            Connect With Me
          </h3>
          <p className="mb-4" style={{ fontSize: '0.92rem' }}>
            Follow my journey, check out my code, or just say hi on social media!
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/rugved-joshi-954a9b22a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="https://github.com/joshirugved11"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.instagram.com/r_u.g_v.e_d"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://x.com/joshi_rugv4084"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="X (Twitter)"
              title="X (Twitter)"
            >
              <FaXTwitter size={32} />
            </a>

            <a
              href="https://youtube.com/@rugvedsjoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="YouTube"
              title="YouTube"
            >
              <FaYoutube size={32} />
            </a>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
