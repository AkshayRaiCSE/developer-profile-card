export default function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header fade-up">
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}
