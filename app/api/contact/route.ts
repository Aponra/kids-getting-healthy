import { NextResponse } from "next/server";
import { z } from "zod/v4";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, errors: z.prettifyError(error) },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
