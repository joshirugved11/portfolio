// page.tsx (Home)
'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-5"
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Hey, I&apos;m Rugved 🔥</h1>
        <p className="lead">
          I&apos;m a developer passionate about building tools, websites, and AI solutions.
        </p>
      </div>
    </motion.section>
  );
}
