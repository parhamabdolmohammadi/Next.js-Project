import { getToken } from "next-auth/jwt"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request, // ✅ NextRequest works
    secret: process.env.NEXTAUTH_SECRET,
  })

  return NextResponse.json({ token })
}

