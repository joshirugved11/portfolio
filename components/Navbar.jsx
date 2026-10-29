'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/',             label: 'Home' },
    { href: '/projects',     label: 'Projects' },
    { href: '/experience',   label: 'Experience' },
    { href: '/education',    label: 'Education' },
    { href: '/publications', label: 'Publications' },
    { href: '/connect',      label: 'Connect' },
    { href: '/support',      label: 'Support Me' },
  ];

  return (
    <nav className="navbar navbar-expand-lg glass-nav fixed-top">
      <div className="container">
        <Link
          className="navbar-brand"
          href="/"
        >
          RUGVED <span style={{ opacity: 0.4 }}>·</span> PORTFOLIO
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
          style={{ border: '1px solid rgba(48,184,94,0.3)' }}
        >
          {/* Custom hamburger icon */}
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--green)',
                  borderRadius: '1px',
                  transition: 'all 0.3s ease',
                  transform:
                    isOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                    isOpen && i === 1 ? 'scaleX(0)' :
                    isOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                    'none',
                }}
              />
            ))}
          </span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
