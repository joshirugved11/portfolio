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
          <Youtube size={20} /> Rugved Joshi on YouTube
        </h3>
        <p>
          I&apos;m also a <strong>YouTuber</strong> and this is my first channel realted to music and vlogging.
        </p>
        <a
          href="https://youtube.com/@rugvedsjoshi?si=236IR2dD4Yy9Om-B"
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
