// resume/page.tsx
export default function Resume() {
  return (
    <section className="container py-5">
      <h2>Resume</h2>
      <p>
        Download my resume <a className="link-primary" href="/resume.pdf" download>here</a>.
      </p>
    </section>
  );
}