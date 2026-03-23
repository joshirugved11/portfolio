// app/page.js
import GlassCard from '../components/GlassCard';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="mb-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 fade-up">
            <GlassCard>
              <p
                className="text-uppercase mb-2"
                style={{ letterSpacing: '0.2em', fontSize: '0.75rem' }}
              >
                Welcome
              </p>

              <h1 className="hero-title mb-3">
                Hi, I&apos;m <span className="hero-highlight">Rugved</span>.
              </h1>

              <p className="hero-tagline mb-4">
                I build AI & GenAI systems, experiment with deepfake detection,
                explore ethical hacking, and create things just for fun.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/projects" className="btn btn-glass">
                  Explore Projects
                </Link>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT SIDE CARD WITH YOUR PHOTO */}
          <div className="col-lg-5 fade-up delay-1">
            <GlassCard className="text-center">

              {/* Your Photo */}
              <div style={{ marginBottom: '1.5rem' }}>
                <Image
                  src="/profile.jpg"   // 👈 Put your photo in public folder with this name
                  alt="Rugved Joshi"
                  width={220}
                  height={220}
                  style={{
                    borderRadius: '20px',
                    objectFit: 'cover',
                    border: '2px solid rgba(255,255,255,0.3)'
                  }}
                />
              </div>

              <p
                className="mb-0"
                style={{ fontSize: '0.95rem', opacity: 0.9 }}
              >
                Scroll down or use the navigation above to explore my projects,
                fun experiments, newsletter, and ways to support my work.
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
              AI, deepfake detection, GenAI agents, web apps and more.
              This section will showcase the work I&apos;ve actually built.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="h5 mb-2">Fun</h3>
            <p className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
              Music, experiments, mini tools, and playful ideas that don&apos;t
              have to be serious to be worth building.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="h5 mb-2">Connect & Newsletter</h3>
            <p className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
              Reach out for collaboration, feedback, or just to say hi.
              Join the newsletter to get updates on what I&apos;m building.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="fade-up delay-3 mt-5">
        <GlassCard className="text-center">
          <h3 className="h5 mb-3">Connect With Me</h3>
          <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
            Follow my journey, check out my code, or just say hi on social media!
          </p>
          
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a 
              href="https://www.linkedin.com/in/rugved-joshi-954a9b22a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            
            <a 
              href="https://github.com/joshirugved11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            
            <a 
              href="https://www.instagram.com/r_u.g_v.e_d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            
            <a 
              href="https://x.com/joshi_rugv4084" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={32} />
            </a>
            
            <a 
              href="https://youtube.com/@rugvedsjoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="YouTube"
            >
              <FaYoutube size={32} />
            </a>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
