/**
 * StaticBackground — a fixed dot-grid behind all content.
 * No canvas, no animation, no blobs.
 */
export default function StaticBackground() {
  return <div className="static-bg" aria-hidden="true" />;
}
