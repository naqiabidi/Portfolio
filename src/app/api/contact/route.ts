import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address (e.g., name@example.com)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    const submission = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      subject: (subject || "Portfolio Contact Inquiry").trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // 1. Log to server console
    console.log("-----------------------------------------");
    console.log("📨 NEW CONTACT FORM SUBMISSION RECEIVED:");
    console.log(`From:    ${submission.name} <${submission.email}>`);
    console.log(`Subject: ${submission.subject}`);
    console.log(`Time:    ${submission.receivedAt}`);
    console.log(`Message:\n${submission.message}`);
    console.log("-----------------------------------------");

    // 2. Persist locally to data/messages.json for reliable backup
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const messagesFilePath = path.join(dataDir, "messages.json");
      
      let existingMessages = [];
      if (fs.existsSync(messagesFilePath)) {
        const fileContent = fs.readFileSync(messagesFilePath, "utf-8");
        existingMessages = JSON.parse(fileContent || "[]");
      }
      existingMessages.push(submission);
      fs.writeFileSync(messagesFilePath, JSON.stringify(existingMessages, null, 2), "utf-8");
    } catch (saveError) {
      console.warn("Could not write to local messages.json backup:", saveError);
    }

    // 3. Optional: forward to Web3Forms or Resend if an API key is provided in environment variables
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: submission.name,
            email: submission.email,
            subject: submission.subject,
            message: submission.message,
          }),
        });
      } catch (forwardErr) {
        console.warn("Web3Forms forward warning:", forwardErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later or email directly to naqiabidi19@gmail.com." },
      { status: 500 }
    );
  }
}
