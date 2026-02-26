"use client";

import { useState } from "react";
import type { FormEvent } from "react";

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

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
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
          <h2 className="text-3xl font-bold text-slate-800">Message Sent!</h2>
          <p className="mx-auto mt-3 max-w-sm text-slate-500">
            Thanks for reaching out. We&apos;ll get back to you within 1-2
            business days.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 rounded-full border-2 border-blue-600 px-8 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Send Another Message
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
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <a
                    href="mailto:hello@kidsgettinghealthy.org"
                    className="mt-1 block text-sm text-blue-600 underline"
                  >
                    hello@kidsgettinghealthy.org
                  </a>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p className="mt-1 text-sm text-slate-600">(512) 555-0198</p>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h3 className="font-semibold text-slate-800">Office</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    1234 Wellness Way, Suite 100
                    <br />
                    Austin, TX 78701
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email
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
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
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
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status === "error" && Object.keys(errors).length === 0 && (
                  <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
