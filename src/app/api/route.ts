import { getAuthSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = getAuthSession();
  if (session) {
    return NextResponse.json({ message: session }, { status: 200 });
  } else {
    return NextResponse.json({ message: "No session" }, { status: 200 });
  }
}
