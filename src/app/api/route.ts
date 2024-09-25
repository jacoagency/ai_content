import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();
    const createNewOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed,
      },
    });
    revalidatePath("/");
    return NextResponse.json(createNewOutput);
  } catch (error) {
    console.log("[AI_OUTPUT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
