import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section className="section container">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard title="Auralis" description="Python library for speech synthesis and voice cloning" github="https://github.com/joshirugved11/auralis" />
        <ProjectCard title="LinkedIn-Resume-Bot" description="A bot created to automate the jobs applying processes" github='https://github.com/joshirugved11/LinkedinResumeBot'/>
        <ProjectCard title="Research-Agent" description="A agent which extracts, summarises and compiles research papers into PDF" github='https://github.com/joshirugved11/Research_Agent'/>
        <ProjectCard title="Gene-Expression-Prediction" description="Predicting Gene Expressions using SNRNA dataset" github='https://github.com/joshirugved11/Gene-Expression-Project'/>
      </div>
    </section>
  );
}
