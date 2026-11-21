# S. Naqi Abbas Abidi — Software Engineer Portfolio

A premium, minimalist, lightweight, and responsive personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed following high-end editorial and Apple-inspired design principles.

![Portfolio Preview](/public/images/preview.png)

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & React Server Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations & Transitions:** Clean hardware-accelerated CSS transitions & Framer Motion
- **Font:** Inter / System UI with Apple-style typographic scale
- **Contact Pipeline:** Next.js Route Handler (`/api/contact`) with full schema validation

---

## 🎨 Design System — Premium Minimalism

- **Background:** `#FAFAF8` (Off-white editorial canvas)
- **Primary Text:** `#171717` (High-contrast neutral)
- **Secondary Text:** `#737373` (Subtle metadata)
- **Electric Accent:** `#315EFB` (Clean tech blue)
- **Card Surfaces:** `#FFFFFF` with hairline borders (`#EBEBEA`) and subtle shadows
- **Interactive Previews:** Custom, high-fidelity UI mockups for featured projects (Flow CRM, RentHere, Smart Pollution Monitoring)

---

## 📂 Project Structure

```
├── public/
│   ├── images/              # Assets & images
│   └── resume/
│       └── Naqi_Resume.pdf  # Verified resume PDF download
├── src/
│   ├── app/
│   │   ├── api/contact/     # Contact form API endpoint
│   │   ├── globals.css      # Design tokens & base styles
│   │   ├── layout.tsx       # Root layout, fonts, SEO & OpenGraph
│   │   ├── not-found.tsx    # Custom 404 page
│   │   └── page.tsx         # Composed portfolio page
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky blur navigation & mobile drawer
│   │   ├── Hero.tsx         # Hero section with status & CTAs
│   │   ├── About.tsx        # Editorial about & competencies
│   │   ├── Experience.tsx   # Professional timeline & measurable metrics
│   │   ├── Projects.tsx     # High-fidelity project showcases & mockups
│   │   ├── Skills.tsx       # Categorized badge grid
│   │   ├── Education.tsx    # University & coursework
│   │   ├── Certifications.tsx # Verified credentials
│   │   ├── Contact.tsx      # Contact details & active message form
│   │   └── Footer.tsx       # Minimalist footer & back-to-top
│   ├── data/
│   │   └── portfolio.ts     # Centralized, typed portfolio data
│   ├── lib/
│   │   └── utils.ts         # Utility helpers (cn)
│   └── types/
│       └── index.ts         # TypeScript interfaces
├── next.config.ts           # Next.js configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/naqiabidi/portfolio.git
   git push -u origin main
   ```
2. Import the project into [Vercel](https://vercel.com) — zero configuration required for Next.js App Router.

---

## 📬 Contact & Information

- **Name:** S. Naqi Abbas Abidi
- **Email:** [naqiabidi19@gmail.com](mailto:naqiabidi19@gmail.com)
- **LinkedIn:** [linkedin.com/in/naqi-abidi19](https://linkedin.com/in/naqi-abidi19)
- **GitHub:** [github.com/naqiabidi](https://github.com/naqiabidi)
- **Location:** New Delhi, India
