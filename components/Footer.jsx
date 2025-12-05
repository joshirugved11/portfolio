// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <small className="text-muted">
          © {new Date().getFullYear()} Rugved Joshi. All rights reserved.
        </small>
        <small className="text-muted">
          Built with Next.js, Bootstrap & a liquid glass theme.
        </small>
      </div>
    </footer>
  );
}
