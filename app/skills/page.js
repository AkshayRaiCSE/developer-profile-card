import PageHeader from "@/components/PageHeader";
import { skillGroups } from "@/data/site";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <PageHeader title="Skills" subtitle="Technical skills and tools I work with." />
      <div className="grid two">
        {skillGroups.map((group) => (
          <section key={group.name} className="card fade-up">
            <h3>{group.name}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
