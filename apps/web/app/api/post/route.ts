import { NextResponse } from "next/server";
import prisma from "../../../../../packages/db/prisma";

async function postHandler(req: any) {
  try {
    const posties = await prisma.post.findMany({});

    return NextResponse.json({ posties }, { status: 200 });
  } catch (e) {
    console.error({ e });
  }
}

export const GET = postHandler;
