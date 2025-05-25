'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <nav>
      <div className="nav-title">Rugved Joshi</div>
      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/other">Other</Link>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
