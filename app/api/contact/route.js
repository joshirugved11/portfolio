import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ✅ FORCE NODE RUNTIME (CRITICAL FOR NODEMAILER) */
export const runtime = "nodejs";

/* ===========================
   SIMPLE IN-MEMORY RATE LIMIT
   3 requests / minute / IP
   (Resets on cold starts – acceptable)
=========================== */
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000;

  const entry = rateLimitMap.get(ip) || { count: 0, time: now };

  if (now - entry.time > windowMs) {
    rateLimitMap.set(ip, { count: 1, time: now });
    return false;
  }

  if (entry.count >= 3) return true;

  entry.count += 1;
  rateLimitMap.set(ip, entry);
  return false;
}

export async function POST(req) {
  try {
    /* ✅ Correct IP extraction for Vercel */
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : "unknown";

    const { name, email, message } = await req.json();

    /* ---------- BASIC VALIDATION ---------- */
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------- RATE LIMIT ---------- */
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    /* ---------- EMAIL TRANSPORT ---------- */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /* ---------- EMAIL TO YOU ---------- */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: "📩 New Portfolio Contact Message",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* ---------- AUTO-REPLY TO USER ---------- */
    await transporter.sendMail({
      from: `"Rugved Joshi" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting me. I’ve received your message and will get back to you soon.</p>
        <p>— Rugved</p>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
