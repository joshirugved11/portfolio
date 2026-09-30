/**
 * StaticRole — displays the current role as static text.
 * Replaces the animated TypingAnimation component.
 */
export default function StaticRole({ role = 'AI & GenAI Engineer' }) {
  return (
    <span aria-label={role}>
      <span style={{ color: 'var(--green-bright)', textShadow: 'var(--glow-green)' }}>
        {role}
      </span>
    </span>
  );
}
