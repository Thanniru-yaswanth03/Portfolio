// ============================================================================
// PROFILE DATA CONFIGURATION FILE
// ============================================================================
// To update your website content (status, social links, tech stack, experience,
// projects, or contact info), simply edit the values in this file!
// Next.js will automatically update the live site on save.
// ============================================================================

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string[];
  skills: string[];
  badgeColor?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  status: "Live" | "In Development" | "Featured";
  category: "Full Stack" | "Machine Learning" | "Web App";
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export const PROFILE_DATA = {
  // --------------------------------------------------------------------------
  // 1. BASIC INFORMATION & SOCIAL LINKS
  // --------------------------------------------------------------------------
  name: "Thanniru Yaswanth",
  handle: "@yaswanth_dev",
  title: "Full Stack Software Developer",
  typewriterText: "Building modern web apps. Designing REST APIs. Solving complex problems.",
  statusTag: "OPEN FOR SOFTWARE DEVELOPER ROLES",
  location: "Hyderabad, India",
  phone: "+91 9515807159",
  email: "yash1th2k4@gmail.com",
  linkedin: "https://linkedin.com/in/thanniru-yaswanth-0a26b931a",
  github: "https://github.com/Thanniru-yaswanth03",
  leetcode: "https://leetcode.com/u/yash1th03/",
  resumePdfUrl: "/Thanniru Yaswanth Resume (1).pdf",

  // --------------------------------------------------------------------------
  // 2. HERO SECTION QUICK STATS
  // --------------------------------------------------------------------------
  heroStats: [
    { label: "B.Tech CGPA", value: "7.71", subtext: "Parul University" },
    { label: "Main Stack", value: "MERN Stack", subtext: "React, Node, Mongo" },
    { label: "LeetCode", value: "@yash1th03", subtext: "Data Structures & Alg" },
    { label: "Languages", value: "Java & Python", subtext: "OOPs & Problem Solving" },
  ],

  // --------------------------------------------------------------------------
  // 3. PROFESSIONAL SUMMARY
  // --------------------------------------------------------------------------
  summary:
    "Full Stack Software Developer passionate about engineering responsive web applications, designing scalable APIs, and writing clean, efficient code. Experienced in React, Node.js, Express, MongoDB, Python/Django, and Data Structures & Algorithms.",

  // --------------------------------------------------------------------------
  // 4. ABOUT SECTION PILLARS
  // --------------------------------------------------------------------------
  aboutCards: [
    {
      title: "Full-Stack Web Development",
      icon: "Code2",
      description: "Proficient in building modern single-page applications with React.js, Next.js, Node.js, Express, and MongoDB.",
    },
    {
      title: "Backend & API Engineering",
      icon: "Server",
      description: "Experienced in constructing robust REST APIs, server-side business logic in Python/Django, and optimizing database queries.",
    },
    {
      title: "Machine Learning Integration",
      icon: "Cpu",
      description: "Engineered real-time Machine Learning web applications integrated with Django backend services.",
    },
    {
      title: "Algorithms & Core CS",
      icon: "Terminal",
      description: "Solid foundation in Data Structures, Algorithms, Object-Oriented Programming (Java/C++), and Git version control workflows.",
    },
  ],

  // --------------------------------------------------------------------------
  // 5. EDUCATION RECORD
  // --------------------------------------------------------------------------
  education: [
    {
      id: "parul",
      degree: "B.Tech - Computer Science & Engineering",
      institution: "Parul University (PIET)",
      period: "2022 - 2026",
      score: "7.71 / 10",
      scoreLabel: "CGPA",
      location: "Vadodara, Gujarat",
      details: "Specializing in Computer Science Engineering, Web Development, Software Engineering, and Database Systems.",
    },
    {
      id: "chaitanya",
      degree: "Class 12th (BIEAP)",
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2022",
      score: "87.30%",
      scoreLabel: "Percentage",
      location: "Ongole, Andhra Pradesh",
      details: "Mathematics, Physics, and Chemistry (MPC) stream with top academic performance.",
    },
    {
      id: "ramakrishna",
      degree: "Class 10th (BSEAP)",
      institution: "Sri Rama Krishna English Medium High School",
      period: "2019 - 2020",
      score: "90.67%",
      scoreLabel: "Percentage",
      location: "Ongole, Andhra Pradesh",
      details: "Secondary School Certificate with distinction in Science and Mathematics.",
    },
  ] as EducationItem[],

  // --------------------------------------------------------------------------
  // 6. WORK EXPERIENCE TIMELINE
  // --------------------------------------------------------------------------
  experiences: [
    {
      id: "paithacs",
      role: "Full Stack Developer Intern",
      company: "Paithacs Software Solutions Pvt. Ltd.",
      period: "Jan 2026 - Apr 2026",
      type: "Internship",
      description: [
        "Engineered responsive UI components and backend REST API integrations using React, Node.js, and MongoDB.",
        "Collaborated on database schema design, application debugging, and agile code review workflows.",
        "Managed version control and team code merges using Git and GitHub.",
      ],
      skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Git/GitHub"],
      badgeColor: "blue",
    },
    {
      id: "oasis",
      role: "Frontend Developer Intern",
      company: "AICTE Virtual Internship | Oasis Infobyte",
      period: "15 Dec 2024 - 20 Jan 2025",
      type: "Virtual Internship",
      description: [
        "Developed structured frontend interfaces using standard HTML5, CSS3, and modern JavaScript.",
        "Created mobile-friendly responsive pages and implemented interactive DOM state handlers.",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation"],
      badgeColor: "emerald",
    },
  ] as ExperienceItem[],

  // --------------------------------------------------------------------------
  // 7. TECH STACK & SKILLS MATRIX
  // --------------------------------------------------------------------------
  skills: [
    {
      title: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "React.js / Next.js", tag: "UI Library" },
        { name: "JavaScript (ES6+) / TypeScript", tag: "Core Languages" },
        { name: "HTML5 / CSS3 / Tailwind CSS", tag: "Layout & Styling" },
        { name: "DOM & Client State Management", tag: "Frontend Architecture" },
      ],
    },
    {
      title: "Backend & Databases",
      iconName: "Server",
      skills: [
        { name: "Node.js / Express.js", tag: "JavaScript Runtime" },
        { name: "Python / Django", tag: "Web Framework" },
        { name: "MongoDB / SQL Databases", tag: "Data Storage" },
        { name: "RESTful API Engineering", tag: "API Architecture" },
      ],
    },
    {
      title: "Languages & Core CS",
      iconName: "Code",
      skills: [
        { name: "Java", tag: "Object-Oriented Programming" },
        { name: "Python", tag: "Scripting & Backend Logic" },
        { name: "C / C++", tag: "Systems Programming" },
        { name: "Data Structures & Algorithms", tag: "Problem Solving" },
        { name: "Git & GitHub", tag: "Version Control" },
      ],
    },
  ] as SkillCategory[],

  // --------------------------------------------------------------------------
  // 8. PROJECTS & PORTFOLIO HUB
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "fake-news-detector",
      title: "Fake News Detection System",
      tagline: "Real-time Machine Learning Web Application",
      description:
        "Machine learning web application that classifies news articles as real or fake in real time. Features a Python & Django backend engine paired with a responsive frontend.",
      tags: ["Python", "Django", "Machine Learning", "JavaScript", "HTML/CSS"],
      liveUrl: "https://fakenewsdetectionsystem.pythonanywhere.com/",
      isFeatured: true,
      status: "Live",
      category: "Machine Learning",
      highlights: [
        "ML classification engine integrated with Django web service",
        "Instant prediction interface with client-side validation",
        "Hosted live on PythonAnywhere",
      ],
    },
    {
      id: "fullstack-dashboard",
      title: "Enterprise MERN Task Hub",
      tagline: "Scalable Task & Workflow Platform",
      description:
        "Full-stack web application for task management, user authentication, and data analytics built with React, Node.js, Express, and MongoDB.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      isFeatured: false,
      status: "In Development",
      category: "Full Stack",
      highlights: [
        "Modular React component architecture with clean state management",
        "Express REST API endpoints backed by MongoDB",
        "Responsive dark mode interface",
      ],
    },
    {
      id: "algorithm-visualizer",
      title: "Data Structures & Algorithm Visualizer",
      tagline: "Interactive DSA & Logic Playground",
      description:
        "Interactive web application providing visual step-by-step demonstrations of fundamental sorting and searching algorithms.",
      tags: ["JavaScript", "HTML5 Canvas", "Algorithms", "CSS3"],
      isFeatured: false,
      status: "Featured",
      category: "Web App",
      highlights: [
        "Step-by-step array and sorting execution visualizer",
        "Interactive speed and dataset controls",
      ],
    },
  ] as ProjectItem[],

  // --------------------------------------------------------------------------
  // 9. PERSONAL DETAILS & HOBBIES
  // --------------------------------------------------------------------------
  personalDetails: {
    languages: ["English (Fluent)", "Telugu (Native)", "Hindi (Professional)"],
    hobbies: ["Technical Reading & Coding", "Problem Solving", "Exploring Web Frameworks"],
  },
};
