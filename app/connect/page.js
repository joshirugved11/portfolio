'use client';

import { useState } from 'react';
import GlassCard from '../../components/GlassCard';

export default function ConnectPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      setStatus('[ OK ] Message transmitted successfully.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('[ ERR ] Transmission failed. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <p className="terminal-label mb-2">connect.sh</p>
      <h1 className="section-title">Connect With Me</h1>
      <p
        className="mb-4"
        style={{
          fontSize: '0.95rem',
          color: 'var(--text-soft)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        Have a project idea, collaboration, or just want to say hi? Drop a message here.
      </p>

      <GlassCard>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="your_name"
              required
              autoComplete="name"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="col-12">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Write your message here..."
              required
            />
          </div>

          <div className="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">
            <button className="btn btn-glass" disabled={loading} type="submit">
              {loading ? '[ SENDING... ]' : '> Send Message'}
            </button>

            {status && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: status.startsWith('[ OK ]')
                    ? 'var(--green-bright)'
                    : '#ff4d4d',
                  textShadow: status.startsWith('[ OK ]')
                    ? 'var(--glow-subtle)'
                    : '0 0 8px rgba(255,77,77,0.5)',
                }}
              >
                {status}
              </span>
            )}
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
