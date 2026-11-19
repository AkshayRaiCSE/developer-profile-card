import { Github, Linkedin } from "lucide-react";

// ------------------------------------------------------------
// EDIT THIS FILE to change what shows up on your website.
// Add your repo links, certificates and hackathons below when you have them.
// ------------------------------------------------------------

export const GITHUB = "https://github.com/AkshayRaiCSE";
export const LINKEDIN = "http://www.linkedin.com/in/akshay-rai-737139384";

// Optional: paste a Formspree endpoint (https://formspree.io) here to receive
// contact form messages by email. Leave empty to run the form in demo mode.
export const FORM_ENDPOINT = "";

export const socials = [
  { label: "GitHub", href: GITHUB, Icon: Github },
  { label: "LinkedIn", href: LINKEDIN, Icon: Linkedin },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export const profile = {
  name: "Akshay Rai",
  title: "3rd Semester CSE Student",
  summary:
    "I am a computer science student who enjoys learning programming, solving problems, and building useful projects with Python and C.",
  college: "Sahyadri College of Engineering and Management",
  degree: "B.E. Computer Science and Engineering",
  graduation: "2029",
  location: "Puttur, Karnataka, India",
};

export const interests = [
  "Problem solving",
  "Building projects",
  "Learning new languages, both programming and spoken",
  "Exploring how software works",
];

export const careerGoals =
  "I want to grow into a skilled software engineer by building real projects, learning from mentors, and taking part in internships and hackathons along the way.";

// Add a repo link in githubUrl for each project (defaults to your GitHub profile).
// Add a liveUrl if a project is deployed; leave it empty otherwise.
export const projects = [
  {
    title: "Smriti NER",
    description:
      "Cognitive stimulation, memory assistance and caregiver companion app for elderly dementia care in Northeast India. It has a guided patient mode and a PIN-protected caregiver dashboard, memory activities, a reminiscence album, live location with an SOS button, and support for 8 regional languages.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini API"],
    githubUrl: GITHUB,
    liveUrl: "",
  },
  {
    title: "Careby",
    description:
      "An AI parenting coach that supports parents through hard emotional moments. Every reply follows a 5-step care framework grounded in attachment theory, conscious parenting and positive discipline.",
    tech: ["Python", "Groq API", "Llama 3"],
    githubUrl: GITHUB,
    liveUrl: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "This website: a responsive portfolio with reusable components, a validated contact form and a dark/light theme switch.",
    tech: ["Next.js", "React", "CSS"],
    githubUrl: GITHUB,
    liveUrl: "",
  },
];

export const experience = [
  {
    role: "B.E. Computer Science and Engineering",
    org: "Sahyadri College of Engineering and Management",
    period: "2025 - 2029 (expected)",
    points: [
      "Currently in the 3rd semester (2nd year).",
      "Learning programming fundamentals with Python and C.",
      "Built Smriti NER and Careby as personal projects.",
    ],
  },
];

export const skillGroups = [
  { name: "Languages", items: ["Python", "C", "TypeScript", "JavaScript"] },
  { name: "Web Development", items: ["HTML", "CSS", "React", "Next.js", "Vite", "Tailwind CSS"] },
  { name: "AI & APIs", items: ["Gemini API", "Groq API"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
];

// Add certifications, awards and hackathons here, for example:
// { type: "Hackathon", title: "Name", issuer: "Organiser / result", year: "2026" }
// type can be "Certification", "Hackathon" or "Award".
export const achievements = [];
