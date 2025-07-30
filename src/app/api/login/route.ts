import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { verifyToken } from "@/lib/verifyToken";
import { cookies } from "next/headers";

interface TokenPayload {
  name: string;
  code: string;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, password } = body;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (token) {
    console.log("Token existente:", token);

    const decoded = verifyToken(token) as TokenPayload;

    if (name === decoded.name && password === decoded.code) {
      console.log("jonas");

      const res = NextResponse.json({ success: true });

      return res;
    }
  }
  return NextResponse.json({ error: "Credenciais invalidas" }, { status: 401 });
}
