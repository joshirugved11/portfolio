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
          <h2 className="h5 mb-2">Music & Flute</h2>
          <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
            I'll embed tracks, flute recordings, or playlists here eventually.
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
            Placeholder for: audio players, YouTube embeds, or links to SoundCloud/Spotify.
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
