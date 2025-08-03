import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })
  return NextResponse.json({ token })
}
