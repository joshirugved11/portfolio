'use client';

/**
 * GlassCard — wraps content in a translucent liquid glass panel.
 * Specular highlight and inner glow are handled by CSS (.glass-card).
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
