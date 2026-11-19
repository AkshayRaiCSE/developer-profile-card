import Image from "next/image";
import { FolderGit2, Mail, Github, Linkedin } from "lucide-react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { GITHUB, LINKEDIN, profile, projects, skillGroups } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text fade-up">
          <p className="status">
            <span className="dot" /> Open to learning opportunities
          </p>
          <h1>Hi, I&apos;m {profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="muted hero-summary">{profile.summary}</p>
          <div className="btn-row">
            <Button href="/projects" Icon={FolderGit2}>
              View Projects
            </Button>
            <Button href="/contact" variant="outline" Icon={Mail}>
              Contact Me
            </Button>
          </div>
          <div className="btn-row">
            <Button href={GITHUB} variant="outline" Icon={Github}>
              GitHub
            </Button>
            <Button href={LINKEDIN} variant="outline" Icon={Linkedin}>
              LinkedIn
            </Button>
          </div>
        </div>

        <Image
          src="/avatar.png"
          alt="Cartoon avatar of Akshay Rai"
          width={280}
          height={280}
          priority
          className="avatar fade-up"
        />
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="section-link">
          <Button href="/projects" variant="outline">
            See all projects
          </Button>
        </div>
      </section>

      <section className="section">
        <h2>Skills at a glance</h2>
        <div className="chips">
          {skillGroups
            .flatMap((g) => g.items)
            .map((s) => (
              <span key={s} className="badge">
                {s}
              </span>
            ))}
        </div>
      </section>
    </>
  );
}
