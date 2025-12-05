// components/GlassCard.jsx
export default function GlassCard({ className = '', children }) {
  return <div className={`glass-card p-4 p-md-5 ${className}`}>{children}</div>;
}
