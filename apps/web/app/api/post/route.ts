import { NextResponse } from "next/server";
import prisma from "../../../../../packages/db/prisma";

async function postHandler(req: any) {
  console.log("hehehhehehe");
  try {
    // const foo = await prisma.user.create({
    //   data: {
    //     email: "lukie",
    //     name: "fukie",
    //   },
    // });

    // const postie = await prisma.post.create({
    //   data: {
    //     name: "positessss",
    //     authorId: "cmbb0ok5r00009xsnp1i9byce",
    //   },
    // });

    const existingActiveProgram = await prisma.post.findMany({});

    return NextResponse.json({ existingActiveProgram }, { status: 200 });
  } catch (e) {
    console.error({ e });
  }
}

export const GET = postHandler;
