import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Kids Getting Healthy",
};

const tiers = [
  {
    amount: "$25",
    label: "Snack Sponsor",
    description: "Provides healthy snacks for one child for a full program session.",
  },
  {
    amount: "$50",
    label: "Activity Kit",
    description: "Funds an activity kit with jump ropes, balls, and nutrition guides.",
  },
  {
    amount: "$100",
    label: "Session Sponsor",
    description: "Covers the cost of one child's entire 8-week program enrollment.",
  },
  {
    amount: "$250",
    label: "Community Champion",
    description: "Sponsors a full family wellness event for up to 30 participants.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Support Our Mission
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Your generosity keeps our programs free for every child. 100% of
            donations go directly to program costs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-extrabold text-red-500">
                  {tier.amount}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-800">
                  {tier.label}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {tier.description}
                </p>
                <button
                  disabled
                  className="mt-4 w-full cursor-not-allowed rounded-full bg-red-500 py-2 text-sm font-semibold text-white opacity-60"
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-blue-50 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              Prefer to Give Another Way?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We also accept checks, corporate matching gifts, and in-kind
              donations. Contact us at{" "}
              <a
                href="mailto:donate@kidsgettinghealthy.org"
                className="font-medium text-blue-600 underline"
              >
                donate@kidsgettinghealthy.org
              </a>{" "}
              to learn more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
