import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Kids Getting Healthy",
};

const steps = [
  {
    number: "1",
    title: "Register",
    description:
      "Fill out a simple online form with your child's information and choose a program that fits your schedule.",
  },
  {
    number: "2",
    title: "Get Matched",
    description:
      "We'll place your child in an age-appropriate group with trained facilitators and confirm your spot within 48 hours.",
  },
  {
    number: "3",
    title: "Show Up & Have Fun",
    description:
      "Attend sessions at a convenient community location. All materials and snacks are provided free of charge.",
  },
  {
    number: "4",
    title: "Grow Together",
    description:
      "Watch your child build confidence, learn healthy habits, and make friends. Families receive take-home resources after every session.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">
            How It Works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Getting started is easy. Here&apos;s what to expect from sign-up to
            your child&apos;s first session and beyond.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-slate-200 bg-blue-50 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              Programs Are Always Free
            </h3>
            <p className="mt-2 text-slate-600">
              Thanks to generous donors, all Kids Getting Healthy programs are
              provided at no cost to families. We never want finances to be a
              barrier to a child&apos;s wellbeing.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
              >
                Register Now
              </Link>
              <Link
                href="/donate"
                className="rounded-full border-2 border-red-500 px-8 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Support a Child
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
