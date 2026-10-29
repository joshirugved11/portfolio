/**
 * StaticBackground — soft animated gradient blobs behind all content.
 * Creates depth and movement without distracting from the glass panels.
 */
export default function StaticBackground() {
  return (
    <div className="static-bg" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>
  );
}
