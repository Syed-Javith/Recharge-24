import { getAuthSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   return NextResponse.json({ message: "Hello world" }, { status: 200 });
// }

export async function GET() {
  // User authentication and role verification
  const session = await getAuthSession()
 
  // Check if the user is authenticated
  if (!session) {
    return new Response(null, { status: 401 }) // User is not authenticated
  }
}