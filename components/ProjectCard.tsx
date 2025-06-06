// components/ProjectCard.tsx
type Props = {
  title: string;
  description: string;
  github?: string;
};

export default function ProjectCard({ title, description, github }: Props) {
  return (
    <div className="card p-3 shadow-sm">
      <h3>{title}</h3>
      <p>{description}</p>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary mt-2"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}
