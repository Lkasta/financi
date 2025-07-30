import { generateCode } from "@/lib/utils";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name } = body;

  if (!name) {
    return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 });
  }

  const code = generateCode();

  const token = sign({ name, code }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  const res = NextResponse.json({ success: true, code });

  res.cookies.set("token", token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 3600,
  });

  return res;
}
