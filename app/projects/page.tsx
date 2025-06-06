// projects/page.tsx
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section className="container py-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <ProjectCard title="auralislib" description="Python library for speech and text synthesis" github='https://github.com/joshirugved11/auralislib'/>
        </div>
        <div className="col-md-6 mb-4">
          <ProjectCard title="Research-Agent" description="An agent which fetches, summarises and converts reserach papers into pdfs" github='https://github.com/joshirugved11/Research_Agent'/>
        </div>
        <div className="col-md-6 mb-4">
          <ProjectCard title="Gene-Expression-Prediction" description="Predicts genes expression using snrna-seq dataset" github='https://github.com/joshirugved11/Gene-Expression-Project'/>
        </div>
        <div className="col-md-6 mb-4">
          <ProjectCard title="Musikai" description="Text to music generation" github='https://github.com/joshirugved11/musikai'/>
        </div>
      </div>
    </section>
  );
}
