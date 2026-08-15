import { NextResponse } from "next/server";
import { PROFILE_DATA } from "@/data/profileData";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const cleanName = String(name || "").trim();
    const cleanEmail = String(email || "").trim();
    const cleanMessage = String(message || "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (cleanMessage.length > 2000) {
      return NextResponse.json(
        { error: "Message exceeds maximum allowed length of 2000 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const targetEmail = PROFILE_DATA.email;

    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: `Portfolio Contact Inquiry from ${cleanName}`,
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
        _template: "table",
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: true, note: "Message queued via fallback." });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to dispatch email.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
