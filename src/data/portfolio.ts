import { Project, Experience, SkillCategory, Education, Certification } from "@/types";

export const personalInfo = {
  name: "S Naqi Abbas Abidi",
  shortName: "Naqi Abidi",
  title: "Software Engineer | Full-Stack Developer",
  location: "New Delhi, India",
  email: "naqiabidi19@gmail.com",
  phone: "+91 9219566288",
  github: "https://github.com/naqiabidi",
  linkedin: "https://linkedin.com/in/naqi-abidi19",
  resumePath: "/resume/Naqi_Resume.pdf",
  availableForHire: true,
  statusText: "Available for new opportunities",
  heroSubtitle: "Building Digital Products with Code, Creativity & Purpose.",
  heroDescription:
    "I'm S. Naqi Abbas Abidi, a Software Engineer and Full-Stack Developer passionate about building scalable web applications, intelligent systems, and seamless digital experiences.",
  aboutText:
    "I'm a Software Engineer with hands-on experience in full-stack development, software testing, automation, and applied AI/ML. I enjoy transforming ideas into functional, scalable applications by combining thoughtful engineering with clean user experiences.\n\nMy experience includes developing production-oriented web applications, building REST APIs, implementing authentication systems, automating testing workflows, and integrating AI-powered features.",
  focusAreas: [
    { title: "Full-Stack Development", desc: "Production Next.js, React, Node.js, and TypeScript architectures" },
    { title: "Software Testing & Automation", desc: "End-to-end testing with Playwright, API validation & CI pipelines" },
    { title: "Applied AI & Generative AI", desc: "Foundation models, NLP pipelines, and intelligent workflow automation" },
    { title: "Backend Engineering", desc: "Robust RESTful APIs, JWT auth, schema design, and microservices" },
    { title: "Problem Solving", desc: "Algorithmic efficiency, optimization, and scalable systems design" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "amzint",
    role: "Software Engineer",
    company: "Amzint",
    location: "Remote, India",
    period: "October 2026 – Present",
    type: "Full-time",
    current: true,
    achievements: [
      "Performed end-to-end testing of 2 applications, improving application performance by up to 98%.",
      "Tested approximately 100 APIs to validate functionality, reliability, and expected behavior.",
      "Wrote automated end-to-end test suites for one application using Next.js and Playwright.",
    ],
    technologies: ["Next.js", "Playwright", "API Testing", "TypeScript", "CI/CD"],
    impactMetric: { label: "Performance boost", value: "Up to 98%" },
  },
  {
    id: "cogent",
    role: "Freelance Full-Stack Developer",
    company: "Cogent Web Services",
    location: "Remote, India",
    period: "September 2025 – January 2026",
    type: "Contract",
    current: false,
    achievements: [
      "Developed and deployed full-stack web applications for 4+ commercial clients, contributing to a 40% increase in user conversion.",
      "Optimized asset delivery and code splitting, reducing initial page load time by 35% and achieving 90+ Google Lighthouse scores.",
      "Built reusable responsive UI components with React.js and Tailwind CSS, reducing development turnaround time by approximately 25%.",
    ],
    technologies: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "REST APIs"],
    impactMetric: { label: "User conversion gain", value: "+40%" },
  },
  {
    id: "ibm",
    role: "Generative AI & Foundation Models Intern",
    company: "IBM",
    location: "Remote, India",
    period: "May 2025 – July 2025",
    type: "Internship",
    current: false,
    achievements: [
      "Developed an NLP-based Fake News Detection pipeline using Python, TensorFlow, and PyTorch, achieving 91% classification accuracy.",
      "Integrated IBM Watson AI APIs and evaluated conversational AI performance, improving response latency by approximately 22%.",
      "Completed 40+ hours of IBM training covering Foundation Models, Transformer architectures, Generative AI, NLP, and enterprise AI development.",
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "IBM Watson", "Transformers", "NLP"],
    impactMetric: { label: "Model accuracy", value: "91%" },
  },
];

export const projects: Project[] = [
  {
    id: "flow-crm",
    title: "Flow CRM",
    subtitle: "AI-Powered Customer Relationship Management",
    category: "Full-Stack & Applied AI",
    description:
      "An AI-powered CRM application designed to simplify customer relationship management, sales pipelines, and interaction tracking with automated intelligence.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    achievements: [
      "Architected a full-stack CRM for sales pipeline and contact management across 100+ records.",
      "Implemented secure JWT authentication and role-based access control across 15+ RESTful API endpoints.",
      "Designed MongoDB schemas and indexes, reducing analytics query response time by approximately 40%.",
      "Developed an AI interaction-summary feature, reducing manual drafting effort by approximately 30%.",
    ],
    metrics: [
      { label: "Query latency", value: "-40%" },
      { label: "Drafting effort", value: "-30%" },
      { label: "API Endpoints", value: "15+" },
    ],
    githubUrl: "https://github.com/naqiabidi",
    liveUrl: "https://flow-crm-demo.vercel.app",
    featured: true,
    accentColor: "#315EFB",
  },
  {
    id: "renthere",
    title: "RentHere",
    subtitle: "Full-Stack Rental Marketplace",
    category: "E-Commerce & Marketplaces",
    description:
      "A responsive multi-vendor rental marketplace that enables users to discover rental products, manage bookings, and interact with vendors with fluid real-time states.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Cloudinary CDN", "Tailwind CSS"],
    achievements: [
      "Built a multi-vendor rental marketplace supporting product discovery, booking workflows, reviews, and vendor/customer interactions.",
      "Engineered RESTful CRUD APIs with validation middleware and role-based authorization.",
      "Integrated Cloudinary CDN and client-side image compression, reducing media payload size by approximately 45%.",
    ],
    metrics: [
      { label: "Media payload", value: "-45%" },
      { label: "Architecture", value: "Multi-vendor" },
      { label: "Security", value: "RBAC" },
    ],
    githubUrl: "https://github.com/naqiabidi",
    liveUrl: "https://renthere-marketplace.vercel.app",
    featured: true,
    accentColor: "#059669",
  },
  {
    id: "smart-pollution",
    title: "Smart Pollution Monitoring",
    subtitle: "IoT + MERN Real-Time Analytics",
    category: "IoT & Embedded Systems",
    description:
      "An IoT-based environmental monitoring platform providing real-time telemetry, automated alert thresholds, and responsive analytical dashboards.",
    tech: ["ESP32", "React.js", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "Chart.js"],
    achievements: [
      "Developed an IoT environmental monitoring system using ESP32 and sensors to stream PM2.5, CO2, and humidity telemetry.",
      "Created a MERN dashboard with real-time Chart.js visualizations.",
      "Achieved sub-500ms response latency for continuous sensor ingestion.",
    ],
    metrics: [
      { label: "Stream Latency", value: "<500ms" },
      { label: "Telemetry", value: "PM2.5, CO2" },
      { label: "Hardware", value: "ESP32" },
    ],
    githubUrl: "https://github.com/naqiabidi",
    featured: true,
    accentColor: "#D97706",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive Web Design", "Framer Motion", "Component Architecture"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "API Design"],
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB", "Mongoose ODM", "MySQL", "Oracle Database", "NoSQL", "Relational Databases", "Cloudinary"],
  },
  {
    title: "Testing & Quality Assurance",
    skills: ["Playwright", "API Testing", "End-to-End Testing", "Test Automation", "Performance Profiling"],
  },
  {
    title: "Developer Tools & AI",
    skills: ["Postman", "Git", "GitHub", "Claude", "Copilot", "Cursor", "ChatGPT", "Linux / CLI"],
  },
];

export const educationData: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  institution: "United College of Engineering and Research",
  location: "Prayagraj, India",
  period: "2022 – 2026",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const certifications: Certification[] = [
  {
    title: "Generative AI Certification",
    issuer: "IBM",
    year: "2025",
  },
  {
    title: "Full-Stack Web Development Certification",
    issuer: "IIT Kharagpur",
    year: "2025",
  },
  {
    title: "Java Programming Certification",
    issuer: "UCER Prayagraj",
    year: "2024",
  },
  {
    title: "Power BI Analytics",
    issuer: "Office Master",
    year: "2024",
  },
];
