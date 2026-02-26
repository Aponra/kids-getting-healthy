"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const programs = [
  "Nutrition Workshop (Ages 5-8)",
  "Nutrition Workshop (Ages 9-12)",
  "Active Play League (Ages 5-8)",
  "Active Play League (Ages 9-12)",
  "Teen Fitness & Cooking (Ages 13-17)",
];

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function RegisterPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const body = {
      parentName: (fd.get("parentName") as string)?.trim(),
      email: (fd.get("email") as string)?.trim(),
      phone: (fd.get("phone") as string)?.trim(),
      childName: (fd.get("childName") as string)?.trim(),
      childAge: (fd.get("childAge") as string)?.trim(),
      program: (fd.get("program") as string)?.trim(),
    };

    const fieldErrors: Record<string, string> = {};
    if (!body.parentName) fieldErrors.parentName = "Parent name is required.";
    if (!body.email) fieldErrors.email = "Email is required.";
    if (!body.phone) fieldErrors.phone = "Phone number is required.";
    if (!body.childName) fieldErrors.childName = "Child's name is required.";
    if (!body.childAge) fieldErrors.childAge = "Child's age is required.";
    if (!body.program) fieldErrors.program = "Please select a program.";

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
      } else {
        setErrors(data.errors ?? {});
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="animate-[fadeIn_0.5s_ease-out] text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 animate-[bounceIn_0.6s_ease-out] items-center justify-center rounded-full bg-green-100 shadow-lg shadow-green-100">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-800">
            Registration Received!
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-slate-500">
            Thank you for registering. We&apos;ll be in touch within 48 hours to
            confirm your child&apos;s spot.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 rounded-full border-2 border-blue-600 px-8 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Register Another Child
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Register Your Child
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            All programs are completely free. Fill out the form below and
            we&apos;ll get your child enrolled.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-lg font-semibold text-slate-800">
              Parent / Guardian Info
            </h2>

            <div>
              <label
                htmlFor="parentName"
                className="block text-sm font-medium text-slate-700"
              >
                Full Name
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                required
                placeholder="Jane Doe"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
              {errors.parentName && (
                <p className="mt-1 text-xs text-red-500">{errors.parentName}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(512) 555-0198"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>

            <hr className="border-slate-100" />

            <h2 className="text-lg font-semibold text-slate-800">
              Child Info
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="childName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Child&apos;s Name
                </label>
                <input
                  id="childName"
                  name="childName"
                  type="text"
                  required
                  placeholder="Alex Doe"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.childName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.childName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="childAge"
                  className="block text-sm font-medium text-slate-700"
                >
                  Child&apos;s Age
                </label>
                <input
                  id="childAge"
                  name="childAge"
                  type="number"
                  min={3}
                  max={18}
                  required
                  placeholder="8"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.childAge && (
                  <p className="mt-1 text-xs text-red-500">{errors.childAge}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="program"
                className="block text-sm font-medium text-slate-700"
              >
                Program
              </label>
              <select
                id="program"
                name="program"
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              >
                <option value="">Select a program...</option>
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.program && (
                <p className="mt-1 text-xs text-red-500">{errors.program}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Spinner />
                  Submitting...
                </>
              ) : (
                "Register"
              )}
            </button>

            {status === "error" && Object.keys(errors).length === 0 && (
              <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
