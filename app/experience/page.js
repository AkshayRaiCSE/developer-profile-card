import PageHeader from "@/components/PageHeader";
import { experience } from "@/data/site";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        subtitle="Education, internships, and activities."
      />
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.role} className="timeline-item fade-up">
            <div className="card">
              <p className="period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="muted">{item.org}</p>
              <ul className="list">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
