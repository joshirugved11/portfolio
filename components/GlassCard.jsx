'use client';

/**
 * GlassCard — wraps content in the hacker-themed glass panel.
 * Corner accents and border glow are handled by CSS (.glass-card).
 */
export default function GlassCard({ className = '', children, onClick }) {
  return (
    <div
      className={`glass-card ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
    >
      {children}
    </div>
  );
}
