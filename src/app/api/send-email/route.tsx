import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  resend.emails.send({
    from: "...",
    to: "...",
    subject: "Hello from Resend",
    react: <WelcomeTemplate name="Mosh" />,
  });

  return NextResponse.json({});
}
