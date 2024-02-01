import { getAuthSession } from "@/lib/auth";
import { getAccessJwtSecretKey } from "@/lib/utils";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getAuthSession();
  const token = getAccessJwtSecretKey();
  if (session) {
    const { id, first_name, last_name } = session;
    if (id === "") {
      return NextResponse.json(
        { message: { session: { id: "Not found" }, token: token } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: {
            session: { id: id, first_name: first_name, last_name: last_name },
            token: token,
          },
        },
        { status: 200 }
      );
    }
  } else {
    return NextResponse.json(
      { message: { session: "No session", token: token } },
      { status: 200 }
    );
  }
}
