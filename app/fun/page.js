// app/fun/page.js
import GlassCard from '../../components/GlassCard';
import Link from 'next/link';

export default function FunPage() {
  return (
    <div className="fun-page">
      <h1 className="section-title">FUN</h1>
      <p className="section-subtitle mb-4">
        A space for music, experiments, and playful ideas that don't have to be serious to be worth building.
      </p>

      <div className="glass-grid">

        {/* MUSIC & FLUTE SECTION */}
        <GlassCard>
          <h2 className="h5 mb-3">Music & Flute 🎵</h2>
          <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
            Discover my musical journey through flute performances, original compositions, and soulful melodies.
          </p>
          
          {/* YouTube Video Embed */}
          <div className="video-container mb-4" style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '12px'
              }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Flute Performance"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-center mb-2" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            🎼 You can find more of my songs and performances on my{' '}
            <a 
              href="https://www.youtube.com/@yourchannel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-link"
              style={{ 
                color: 'var(--accent-aqua)', 
                textDecoration: 'none',
                transition: 'all 0.25s'
              }}
            >
              YouTube channel
            </a>
            . Subscribe to stay updated with new releases!
          </p>
        </GlassCard>

        {/* PLAY GAMES SECTION */}
        <GlassCard>
          <h2 className="h5 mb-2">Play Games 🎮</h2>
          <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
            Play simple interactive games built in-browser. Great for fun and quick brain refresh!
          </p>

          <ul style={{ opacity: 0.9, fontSize: '0.9rem' }}>
            <li><Link href="/fun/tic-tac-toe" className="text-white">Tic Tac Toe</Link></li>
            <li><Link href="/fun/snake" className="text-white">Snake Game</Link></li>
            <li><Link href="/fun/memory" className="text-white">Memory Flip Game</Link></li>
            <li><Link href="/fun/2048" className="text-white">2048 Puzzle</Link></li>
          </ul>

          <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
            Choose any game to play — more coming soon!
          </p>
        </GlassCard>

      </div>
    </div>
  );
}
