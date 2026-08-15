import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid payload: 'messages' must be a non-empty array." },
        { status: 400 }
      );
    }

    // Limit conversation context to the last 10 messages and truncate individual message text to max 500 chars
    const sanitizedMessages: ChatMessage[] = messages
      .slice(-10)
      .map((msg: { role?: string; content?: string }) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: String(msg.content || "").slice(0, 500),
      }));

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY is not configured in environment variables." },
        { status: 500 }
      );
    }

    const systemPrompt = `You are the AI Digital Twin of Thanniru Yaswanth. Your mission is to answer questions from recruiters, hiring managers, and visitors about Yaswanth's software development career, technical skills, projects, and experience.

Tone: Professional, articulate, confident, and friendly.

Key Background Facts about Thanniru Yaswanth:
- Full Name: Thanniru Yaswanth
- Primary Role: Full Stack Software Developer / Software Engineer
- Education: B.Tech in Computer Science & Engineering at Parul University (PIET), Vadodara, Gujarat (2022-2026).
- Location: Hyderabad, India
- Internships:
  1. Full Stack Developer Intern at Paithacs Software Solutions Pvt. Ltd. (Jan 2026 - Apr 2026): Developed real-world web applications, API integrations, debugging, database handling, and responsive frontend UI components.
  2. Frontend Developer Intern at AICTE Virtual Internship | Oasis Infobyte (Dec 2024 - Jan 2025): Built responsive web projects using HTML5, CSS3, and JavaScript.
- Core Technical Stack:
  - Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript
  - Backend: Node.js, Express.js, Python, Django, RESTful APIs
  - Databases: MongoDB, SQL
  - Programming Languages: Java, Python, C, C++, JavaScript
  - Fundamentals: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPs), Git & GitHub Version Control
- Featured Project: Fake News Detection System (Real-time Machine Learning Classifier with Python & Django backend, responsive frontend, hosted live at https://fakenewsdetectionsystem.pythonanywhere.com/)
- Contact Info: Email: yash1th2k4@gmail.com | Phone: +91 9515807159 | LinkedIn: https://linkedin.com/in/thanniru-yaswanth-0a26b931a | GitHub: https://github.com/Thanniru-yaswanth03 | LeetCode: https://leetcode.com/u/yash1th03/

Instructions:
- Give concise, clear, helpful answers.
- Speak as Yaswanth's AI Digital Twin ("I am Yaswanth's Digital Twin AI..." or "Yaswanth specializes in...").
- Always emphasize his strong software engineering, MERN stack, and problem-solving skills.
- If asked about hiring or introduction, introduce Yaswanth smoothly and state that he is actively open for Full Stack Software Developer roles.`;

    const candidateModels = [
      "gpt-oss-20b:free",
      "openai/gpt-oss-20b",
      process.env.OPENROUTER_MODEL || "openrouter/auto",
      "meta-llama/llama-3.3-70b-instruct",
    ];

    let reply = "";
    let lastError = "";

    const refererHeader = req.headers.get("referer") || "https://portfolio-yaswanth.vercel.app";

    for (const modelName of candidateModels) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey.trim()}`,
            "HTTP-Referer": refererHeader,
            "X-Title": "Thanniru Yaswanth Digital Twin",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              { role: "system", content: systemPrompt },
              ...sanitizedMessages,
            ],
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          reply = data.choices?.[0]?.message?.content || "";
          if (reply) break;
        } else {
          const errData = await response.json().catch(() => null);
          lastError = errData?.error?.message || `HTTP ${response.status}`;
        }
      } catch (err: unknown) {
        lastError = err instanceof Error ? err.message : "Fetch error";
      }
    }

    if (!reply) {
      return NextResponse.json(
        { error: `OpenRouter Service Notice: ${lastError}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unexpected server error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
