import { GraduationCap, MapPin, Target, Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { profile, interests, careerGoals } from "@/data/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Me" subtitle="A little about who I am and where I am headed." />

      <div className="grid two">
        <section className="card fade-up">
          <h3>
            <GraduationCap size={20} /> Education
          </h3>
          <p>{profile.degree}</p>
          <p className="muted">{profile.college}</p>
          <p className="muted">Expected graduation: {profile.graduation}</p>
        </section>

        <section className="card fade-up">
          <h3>
            <MapPin size={20} /> Based in
          </h3>
          <p>{profile.location}</p>
        </section>

        <section className="card fade-up">
          <h3>
            <Heart size={20} /> Interests
          </h3>
          <ul className="list">
            {interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="card fade-up">
          <h3>
            <Target size={20} /> Career Goals
          </h3>
          <p className="muted">{careerGoals}</p>
        </section>
      </div>

      <section className="section">
        <h2>Summary</h2>
        <p className="muted wide">{profile.summary}</p>
      </section>
    </>
  );
}
