import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section className="section container">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard title="Auralis" description="Python audio processing library." />
        <ProjectCard title="Eleven" description="Personal AI assistant inspired by Jarvis." />
      </div>
    </section>
  );
}
