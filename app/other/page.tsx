import { Youtube, Music2 } from 'lucide-react';

export default function Other() {
  return (
    <section className="section container">
      <h2>Other</h2>

      <div className="section-block">
        <h3 className="section-subtitle">
          <Music2 size={20} /> Musical Hobbies
        </h3>
        <p>
          I enjoy playing the <strong>flute</strong> and <strong>mouth organ</strong>.
        </p>
      </div>

      <div className="section-block">
        <h3 className="section-subtitle">
          <Youtube size={20} /> YouTube Channel
        </h3>
        <p>
          I&apos;m also a <strong>YouTuber</strong> where I share content related to tech, music, and creativity.
        </p>
        <a
          href="https://www.youtube.com/@yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Visit my YouTube Channel →
        </a>
      </div>
    </section>
  );
}
