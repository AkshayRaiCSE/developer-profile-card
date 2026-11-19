import { Github, ExternalLink } from "lucide-react";
import Button from "@/components/Button";

// Reusable project card. Props: title, description, tech[], githubUrl, liveUrl
export default function ProjectCard({ title, description, tech, githubUrl, liveUrl }) {
  return (
    <article className="card project-card fade-up">
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <div className="chips">
        {tech.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
      <div className="card-actions">
        {githubUrl ? (
          <Button href={githubUrl} variant="outline" Icon={Github}>
            Code
          </Button>
        ) : null}
        {liveUrl ? (
          <Button href={liveUrl} variant="primary" Icon={ExternalLink}>
            Live Demo
          </Button>
        ) : null}
      </div>
    </article>
  );
}
