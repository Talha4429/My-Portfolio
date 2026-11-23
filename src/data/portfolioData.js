export const skills = [
  { category: "Languages", items: ["Ruby", "JavaScript", "TypeScript", "Python", "C++", "SQL"] },
  { category: "Backend", items: ["Ruby on Rails", "Spree Commerce", "Node.js", "REST APIs", "Turbo", "Redis", "Lockbox", "Ransack", "CanCanCan"] },
  { category: "Frontend", items: ["Next.js", "React", "Slim", "Tailwind CSS", "Materialize CSS", "Vite", "Framer Motion"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB"] },
  { category: "Integrations", items: ["Resend", "Nodemailer", "Vercel Blob", "Google Gemini API"] },
  { category: "Tools", items: ["Git", "GitHub", "Capistrano", "Vercel"] },
  { category: "Data Science", items: ["Pandas", "Matplotlib", "Machine Learning"] },
]

export const featuredProjects = [
  {
    title: "Limousine Booking Website",
    tech: "Next.js 16, TypeScript, Supabase, Tailwind v4",
    link: "https://blackpartylimo.com",
    code: "https://github.com/Talha4429/limo-project",
    bullets: [
      "Built a full-stack booking platform with Supabase (PostgreSQL) and validated forms using React Hook Form and Zod.",
      "Integrated the Resend API to send booking notifications and customer replies by email.",
      "Developed an AI booking assistant chatbot using the Google Gemini API.",
      "Built a password-protected admin dashboard with a Markdown blog editor, custom HMAC-SHA256 session authentication, and Next.js middleware route protection."
    ],
    desc: "Full-stack limousine booking website with an AI booking assistant and an admin dashboard."
  },
  {
    title: "Bellum",
    tech: "Next.js 14, PostgreSQL, Vercel",
    link: null,
    code: null,
    bullets: [
      "Built a content-managed site with a PostgreSQL backend for products, portfolio, navigation categories, and quote requests.",
      "Developed a database-driven Collections mega menu managed from an admin panel.",
      "Implemented admin and client sessions with custom HMAC token authentication and middleware route protection.",
      "Added image uploads to Vercel Blob and a contact and quote form that sends email through Nodemailer."
    ],
    desc: "Content-managed architectural studio website with an admin panel and quote requests."
  },
]

export const academicProjects = [
  { title: "Bus Tracking System", tech: "MERN Stack", desc: "Real-time bus tracking app with GPS tracking and dynamic route updates for improved public transit." },
  { title: "CookItUp", tech: "React", desc: "Recipe management platform with personalized dashboards for uploading and searching recipes." },
  { title: "Flex – LMS", tech: "C++, OOP", desc: "Learning management system for student records, course enrollments, and progress tracking." },
  { title: "WASA Billing System", tech: "MySQL, HTML, CSS, JS", desc: "Water billing system with data management, billing calculations, and customer queries." },
  { title: "Netflix Clone", tech: "HTML, CSS, JS", desc: "Responsive Netflix replica with dynamic content rendering and seamless user experience." },
  { title: "Spotify Clone", tech: "React", desc: "Music streaming prototype with playlists, song streaming, and user authentication." },
  { title: "Courtech – E Judicial", tech: "Java, HTML, CSS", desc: "E-judicial platform for case tracking, scheduling, and document management." },
  { title: "LESCO Billing System", tech: "C++, C#, .NET", desc: "Automated billing system replacing manual record-keeping with digital invoice tracking." },
  { title: "Connect4", tech: "C++", desc: "Connect4 game with graphical interface and AI opponent logic." },
  { title: "Chess Game", tech: "C++", desc: "Interactive chess with two-player mode and move validation." },
  { title: "Facebook Clone", tech: "C++", desc: "Social media prototype with auth, posts, likes, and messaging." },
  { title: "Sudoku", tech: "C++", desc: "Sudoku puzzle game with auto generation and real-time input validation." },
]

export const projects = [...featuredProjects, ...academicProjects]

export const education = [
  { degree: "BS Software Engineering", institution: "FAST NUCES, Lahore", years: "2020 – 2024" },
  { degree: "Intermediate in Computer Science", institution: "Government College University, Lahore", years: "2018 – 2020" },
  { degree: "Matriculation", institution: "Govt. Central Model School, Lahore", years: "2018" },
]

export const experience = [
  {
    role: "Backend Developer",
    company: "Arkhitech, Lahore",
    period: "Apr 2026 – Present",
    bullets: [
      "Develop and maintain two production Ruby on Rails SaaS platforms: a multi-tenant restaurant POS system and a Spree-based e-commerce platform.",
      "Built a customer daily order limit feature end to end (model, nested controller, views, mailer, CanCanCan abilities) with Turbo integration.",
      "Implemented role-based access control for payment method management in Spree and resolved authorization and encrypted-data (Lockbox) errors.",
      "Fixed Ransack customer filters and multi-select search bugs, and resolved schedule overlap and caching issues.",
      "Migrating manager views from Materialize CSS to Tailwind CSS while matching established codebase conventions.",
      "Maintain i18n locale files across seven languages; ship changes through code review and Capistrano deployments."
    ],
    desc: "Develop and maintain two production Ruby on Rails SaaS platforms: a multi-tenant restaurant POS system and a Spree-based e-commerce platform."
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: null,
    desc: "Delivered custom web, training machine learning models, and software solutions for various clients independently."
  },
  {
    role: "Teacher Assistant – DSA",
    company: "FAST NUCES",
    period: null,
    desc: "Helped students understand Data Structures and Algorithms concepts."
  },
]