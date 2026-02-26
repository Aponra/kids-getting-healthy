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

export default function RegisterPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const body = {
      parentName: fd.get("parentName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      childName: fd.get("childName"),
      childAge: fd.get("childAge"),
      program: fd.get("program"),
    };

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
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Registration Received!</h2>
          <p className="mt-2 text-slate-600">
            Thank you for registering. We&apos;ll be in touch within 48 hours to confirm your child&apos;s spot.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Register Your Child
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            All programs are completely free. Fill out the form below and
            we&apos;ll get your child enrolled.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-xl px-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-slate-700">
                Parent / Guardian Name
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
              {errors.parentName && <p className="mt-1 text-xs text-red-500">{errors.parentName}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-slate-700">
                  Child&apos;s Name
                </label>
                <input
                  id="childName"
                  name="childName"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.childName && <p className="mt-1 text-xs text-red-500">{errors.childName}</p>}
              </div>
              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-slate-700">
                  Child&apos;s Age
                </label>
                <input
                  id="childAge"
                  name="childAge"
                  type="number"
                  min={3}
                  max={18}
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                {errors.childAge && <p className="mt-1 text-xs text-red-500">{errors.childAge}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-medium text-slate-700">
                Program
              </label>
              <select
                id="program"
                name="program"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              >
                <option value="">Select a program...</option>
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.program && <p className="mt-1 text-xs text-red-500">{errors.program}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700 disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Register"}
            </button>

            {status === "error" && Object.keys(errors).length === 0 && (
              <p className="text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
