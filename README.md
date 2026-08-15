# Thanniru Yaswanth — Full Stack Software Developer Portfolio

Official personal portfolio website for **Thanniru Yaswanth**, Full Stack Software Developer. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

- **Interactive Hero & Showcase:** Modern dark-theme layout with typed headlines, quick stats, and social profiles.
- **Featured Projects:** Recruiter-friendly showcases of live web applications and machine learning integrations.
- **Career & Academic Track:** Timeline view of software engineering internships and academic milestones.
- **Skills Matrix:** Categorized breakdown of Frontend, Backend, Languages, and DevTools without arbitrary progress percentages.
- **Interactive Developer Console:** Lightweight in-browser terminal supporting interactive profile inspection commands (`help`, `about`, `projects`, `skills`, `experience`, `contact`, `github`, `resume`, `clear`).
- **AI Digital Twin Assistant:** Floating chat drawer powered by OpenRouter AI API to answer recruiter inquiries.
- **Direct Email Contact Form:** Form handling with validation and mail app fallbacks.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4) & Custom Glassmorphism CSS
- **Icons:** Lucide React & Custom SVG Icons
- **AI Integration:** OpenRouter API (Server-side API Route)

---

## ⚡ Getting Started Locally

### 1. Prerequisites
- Node.js 18.x or higher
- npm (or yarn / pnpm / bun)

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Thanniru-yaswanth03/Portfolio.git
cd Portfolio
npm install
```

### 3. Environment Variables Setup
Create a `.env` file in the project root:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push your code to [GitHub](https://github.com/Thanniru-yaswanth03/Portfolio).
2. Log in to [Vercel](https://vercel.com) and click **Add New...** -> **Project**.
3. Import the `Portfolio` repository.
4. Under **Environment Variables**, set:
   - **Name:** `OPENROUTER_API_KEY`
   - **Value:** `<your_openrouter_api_key>`
5. Click **Deploy**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
