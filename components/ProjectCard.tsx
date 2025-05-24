type Props = {
  title: string;
  description: string;
  github?: string;
};

export default function ProjectCard({ title, description, github }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm mt-2 inline-block hover:underline"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}
