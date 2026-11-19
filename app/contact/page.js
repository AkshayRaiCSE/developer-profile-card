import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { socials } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Want to connect, collaborate, or just say hi? Send a message or find me online."
      />
      <div className="grid two contact-grid">
        <ContactForm />
        <section className="card fade-up">
          <h3>Find me online</h3>
          <p className="muted">I am active on these platforms.</p>
          <div className="btn-col">
            {socials.map(({ label, href, Icon }) => (
              <Button key={label} href={href} variant="outline" Icon={Icon}>
                {label}
              </Button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
