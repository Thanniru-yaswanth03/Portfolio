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
  skills: { name: string; level: number; tag?: string }[];
}

export const PROFILE_DATA = {
  // --------------------------------------------------------------------------
  // 1. BASIC INFORMATION & SOCIAL LINKS
  // --------------------------------------------------------------------------
  name: "Thanniru Yaswanth",
  handle: "@yaswanth_dev",
  title: "Full Stack Software Developer",
  typewriterText: "Building modern web apps. Designing REST APIs. Solving complex problems.",
  statusTag: "OPEN FOR SOFTWARE DEVELOPER ROLES", // Update your availability status here
  location: "Hyderabad, Telangana, India",
  fullAddress: "Ikrisat Colony, Beeramguda, Telangana 502032",
  phone: "+91 9515807159",
  alternatePhone: "+91 9949948759",
  email: "yash1th2k4@gmail.com",
  academicEmail: "2203031260217@paruluniversity.ac.in",
  linkedin: "https://linkedin.com/in/thanniru-yaswanth-0a26b931a",
  github: "https://github.com/Thanniru-yaswanth03",
  leetcode: "https://leetcode.com/u/yash1th03/",
  resumePdfUrl: "/Thanniru Yaswanth Resume (1).pdf", // Place updated resume PDF in public/ folder

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
      description: "Engineered real-time Machine Learning web applications (e.g. Fake News Classifier) integrated with Django and deployed live.",
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
  // 6. WORK EXPERIENCE TIMELINE (Add or edit jobs & internships here)
  // --------------------------------------------------------------------------
  experiences: [
    {
      id: "paithacs",
      role: "Full Stack Developer Intern",
      company: "Paithacs Software Solutions Pvt. Ltd.",
      period: "Jan 2026 - Apr 2026",
      type: "Internship",
      description: [
        "Worked on real-world web applications using modern frontend and backend technologies.",
        "Collaborated on project development, API integrations, debugging, and database management.",
        "Implemented responsive UI components, version control with Git/GitHub, and agile software practices.",
      ],
      skills: ["React.js", "Node.js", "Express", "MongoDB", "API Integration", "Git/GitHub"],
      badgeColor: "blue",
    },
    {
      id: "oasis",
      role: "Frontend Developer Intern",
      company: "AICTE Virtual Internship | Oasis Infobyte",
      period: "15 Dec 2024 - 20 Jan 2025",
      type: "Virtual Internship",
      description: [
        "Completed a Frontend Development Internship, building responsive web projects using HTML5, CSS3, and JavaScript.",
        "Gained hands-on software development experience contributing to real application UI features.",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation"],
      badgeColor: "emerald",
    },
  ] as ExperienceItem[],

  // --------------------------------------------------------------------------
  // 7. TECH STACK & SKILLS MATRIX (Update percentages or skill tags here)
  // --------------------------------------------------------------------------
  skills: [
    {
      title: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "React.js / Next.js", level: 90, tag: "UI Framework" },
        { name: "JavaScript (ES6+) / TypeScript", level: 88, tag: "Language" },
        { name: "HTML5 / CSS3 / Tailwind CSS", level: 92, tag: "Styling" },
        { name: "DOM Manipulation & State", level: 88, tag: "Frontend" },
      ],
    },
    {
      title: "Backend & Databases",
      iconName: "Server",
      skills: [
        { name: "Node.js / Express.js", level: 86, tag: "Backend Runtime" },
        { name: "Python / Django", level: 82, tag: "Web Framework" },
        { name: "MongoDB / SQL Databases", level: 84, tag: "Database" },
        { name: "RESTful API Development", level: 88, tag: "API Design" },
      ],
    },
    {
      title: "Languages & Computer Science",
      iconName: "Code",
      skills: [
        { name: "Java", level: 85, tag: "OOP" },
        { name: "Python", level: 88, tag: "Scripting / ML" },
        { name: "C / C++", level: 82, tag: "Systems" },
        { name: "Data Structures & Algorithms", level: 86, tag: "Problem Solving" },
        { name: "Git & GitHub Version Control", level: 90, tag: "DevTools" },
      ],
    },
  ] as SkillCategory[],

  // --------------------------------------------------------------------------
  // 8. PROJECTS & PORTFOLIO HUB (Add new projects or update live links here)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "fake-news-detector",
      title: "Fake News Detection System",
      tagline: "Real-time Machine Learning Web Application",
      description:
        "Developed a machine learning-based web application to classify news articles as real or fake in real time. Built a responsive frontend with HTML, CSS, and JavaScript, paired with Python & Django backend integration.",
      tags: ["Python", "Django", "Machine Learning", "JavaScript", "HTML/CSS", "PythonAnywhere"],
      liveUrl: "https://fakenewsdetectionsystem.pythonanywhere.com/",
      githubUrl: "https://github.com/Thanniru-yaswanth03",
      isFeatured: true,
      status: "Live",
      category: "Machine Learning",
      highlights: [
        "ML article classification engine integrated with Django framework",
        "Responsive user interface with DOM manipulation and instant prediction feedback",
        "Secure user authentication and full frontend-backend integration",
        "Hosted live on PythonAnywhere web platform",
      ],
    },
    {
      id: "fullstack-dashboard",
      title: "Enterprise MERN Task & Analytics Hub",
      tagline: "Scalable Full-Stack Task & Workflow Platform",
      description:
        "A clean full-stack web application for task tracking, user auth, dynamic data dashboards, and real-time state management using React, Express, and MongoDB.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Thanniru-yaswanth03",
      isFeatured: false,
      status: "In Development",
      category: "Full Stack",
      highlights: [
        "Modular React component architecture with clean state management",
        "REST API endpoints with Express and MongoDB database connection",
        "Modern dark-mode UI with clean responsive layouts",
      ],
    },
    {
      id: "algorithm-visualizer",
      title: "Data Structures & Algorithm Sandbox",
      tagline: "Interactive DSA & Logic Playground",
      description:
        "An interactive web platform demonstrating common Data Structures and Sorting/Searching Algorithms visually for computer science learning.",
      tags: ["JavaScript", "HTML5 Canvas", "Algorithms", "CSS3"],
      githubUrl: "https://github.com/Thanniru-yaswanth03",
      isFeatured: false,
      status: "Featured",
      category: "Web App",
      highlights: [
        "Visual step-by-step execution for Array, Tree, and Graph algorithms",
        "Interactive controls for array size, speed, and dataset generation",
      ],
    },
  ] as ProjectItem[],

  // --------------------------------------------------------------------------
  // 9. PERSONAL DETAILS & HOBBIES
  // --------------------------------------------------------------------------
  personalDetails: {
    dob: "September 03, 2004",
    gender: "Male",
    maritalStatus: "Single",
    languages: ["English (Fluent)", "Telugu (Native)", "Hindi (Professional)"],
    hobbies: ["Tech Reading & Coding", "Esports", "Exploring New Technologies", "Sports"],
  },
};
