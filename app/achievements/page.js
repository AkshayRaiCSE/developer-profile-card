import { Award, Trophy, BadgeCheck, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { achievements } from "@/data/site";

export const metadata = { title: "Achievements" };

const icons = { Certification: BadgeCheck, Hackathon: Trophy, Award: Award };

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        title="Achievements"
        subtitle="Certifications, awards, and hackathon participation."
      />

      {achievements.length === 0 ? (
        <div className="card fade-up">
          <h3>
            <Sparkles size={20} /> Just getting started
          </h3>
          <p className="muted">
            I am early in my engineering journey. Certifications, awards and hackathons
            will be added here as I earn them.
          </p>
        </div>
      ) : (
        <div className="grid">
          {achievements.map((a) => {
            const Icon = icons[a.type] || Award;
            return (
              <article key={`${a.type}-${a.title}`} className="card fade-up">
                <Icon size={28} />
                <p className="period">{a.type}</p>
                <h3>{a.title}</h3>
                <p className="muted">{a.issuer}</p>
                <p className="muted">{a.year}</p>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}
