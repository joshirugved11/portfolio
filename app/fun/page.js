// app/fun/page.js
import GlassCard from '../../components/GlassCard';

export default function FunPage() {
  return (
    <div className="fun-page">
      <h1 className="section-title">Fun</h1>
      <p className="section-subtitle mb-4">
        A space for music, experiments, small ideas, and anything that doesn&apos;t fit into
        &quot;serious&quot; projects.
      </p>

      <div className="glass-grid">
        <GlassCard>
          <h2 className="h5 mb-2">Music & Flute</h2>
          <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
            I&apos;ll embed tracks, flute recordings, or playlists here eventually.
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
            Placeholder for: audio players, YouTube embeds, or links to SoundCloud/Spotify.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="h5 mb-2">Mini Tools & Demos</h2>
          <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
            Small GenAI demos, algorithm visualizations, or interactive playgrounds.
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
            Later we can add interactive components or small games here.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
