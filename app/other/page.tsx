// other/page.tsx
import { Youtube, Music2 } from 'lucide-react';

export default function Other() {
  return (
    <section className="container py-5">
      <h2>Other</h2>
      <div className="mt-4">
        <h3 className="text-primary d-flex align-items-center">
          <Music2 size={20} className="me-2" /> Musical Hobbies
        </h3>
        <p>I enjoy playing the <strong>flute</strong> and <strong>mouth organ</strong>.</p>
      </div>
      <div className="mt-4">
        <h3 className="text-primary d-flex align-items-center">
          <Youtube size={20} className="me-2" /> Rugved Joshi on YouTube
        </h3>
        <p>I&apos;m also a <strong>YouTuber</strong>.</p>
        <a
          href="https://youtube.com/@rugvedsjoshi?si=236IR2dD4Yy9Om-B"
          className="btn btn-primary mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my YouTube Channel →
        </a>
      </div>
    </section>
  );
}
