import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await addDoc(collection(db, "contacts"), {
      ...body,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to save message" },
      { status: 500 },
    );
  }
}
