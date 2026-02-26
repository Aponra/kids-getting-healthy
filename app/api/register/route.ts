import { NextResponse } from "next/server";
import { z } from "zod/v4";
import { adminDb } from "@/lib/firebase-admin";

const schema = z.object({
  parentName: z.string().min(1, "Parent name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  childName: z.string().min(1, "Child name is required"),
  childAge: z.coerce.number().int().min(3).max(18),
  program: z.string().min(1, "Please select a program"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await adminDb.collection("registrations").add({
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
