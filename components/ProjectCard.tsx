type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
