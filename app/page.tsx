'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="hero"
    >
      <div className="container">
        <h1>Hey, I&apos;m Rugved 👋</h1>
        <p>
          I&apos;m a developer passionate about building tools, websites, and creative tech. This is my digital home.
        </p>
      </div>
    </motion.section>
  );
}
