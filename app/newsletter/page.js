// app/newsletter/page.js
import GlassCard from '../../components/GlassCard';

export default function NewsletterPage() {
  return (
    <div className="newsletter-page d-flex flex-column align-items-center">
      <GlassCard className="fade-up" style={{ maxWidth: 560 }}>
        <h1 className="section-title" style={{ fontSize: '1.8rem' }}>
          Newsletter
        </h1>
        <p className="section-subtitle mb-4">
          Short updates on what I&apos;m building, learning and experimenting with — AI, GenAI,
          music and more. No spam.
        </p>

        <form className="d-flex flex-column flex-sm-row gap-2">
          <input
            type="email"
            className="form-control bg-transparent text-light"
            placeholder="your@email.com"
          />
          <button type="submit" className="btn btn-glass">
            Subscribe
          </button>
        </form>

        <p className="mt-3 mb-0" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
          Later we can connect this to Mailchimp, Resend, or your own backend. For now it&apos;s a
          static UI.
        </p>
      </GlassCard>
    </div>
  );
}
