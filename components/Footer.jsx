export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <small>
          <span style={{ color: 'var(--green-bright)', opacity: 0.6 }}>© </span>
          {year} Rugved Joshi. All rights reserved.
        </small>
        <small style={{ opacity: 0.55 }}>
          Built with Next.js, Bootstrap &amp; a hacker theme
        </small>
      </div>
    </footer>
  );
}
