# Akshay Rai - Personal Portfolio

A responsive personal portfolio built with **Next.js**, **React**, **CSS** and **Lucide React** icons.

## Pages

| Route | Content |
| --- | --- |
| `/` | Home: introduction, summary, featured projects |
| `/about` | Education, interests, career goals |
| `/projects` | Project cards with tech, GitHub and live demo links |
| `/experience` | Education timeline, internships, activities |
| `/skills` | Grouped technical skills and tools |
| `/achievements` | Certifications, awards, hackathons |
| `/contact` | Validated contact form and social links |

## Features

- Responsive layout for mobile, tablet and desktop (hamburger menu on small screens)
- Reusable components: `Navbar`, `Footer`, `ProjectCard`, `Button`, `PageHeader`
- Form validation on the contact form
- Dark / light theme switch that remembers your choice
- Fade-in and hover animations (disabled for users who prefer reduced motion)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

All text lives in **`data/site.js`**. Add each project's repo link (`githubUrl`), and fill the
`achievements` list when you have certifications or hackathons. Put images and PDFs in `public/`.

## Make the contact form send emails

1. Create a free form at https://formspree.io
2. Paste its endpoint URL into `FORM_ENDPOINT` in `data/site.js`

Until you do this, the form validates and shows a thank-you message but does not deliver anything.

## Deploy to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/AkshayRaiCSE/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, and import the repo.
3. Keep the default settings and click **Deploy**. Vercel gives you a live URL.
