// components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/fun', label: 'Fun' },
    { href: '/connect', label: 'Connect' },
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/support', label: 'Support Me' },
  ];

  return (
    <nav className="navbar navbar-expand-lg glass-nav fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          RUGVED • PORTFOLIO
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link
                  href={link.href}
                  className={
                    'nav-link ' + (pathname === link.href ? 'active' : '')
                  }
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
