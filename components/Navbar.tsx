'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold text-primary">Rugved Joshi</span>
        <div className="d-flex flex-wrap gap-3 align-items-center">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/projects">Projects</Link>
          <Link className="nav-link" href="/other">Other</Link>
          <button onClick={toggleDarkMode} className="btn btn-outline-secondary">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
