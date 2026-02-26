import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Helping Kids Build{" "}
            <span className="text-blue-600">Healthy Habits</span> for Life
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Kids Getting Healthy is a nonprofit dedicated to empowering children
            and families with the tools, knowledge, and community support they
            need to live active, nourished lives.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
            >
              Register Your Child
            </Link>
            <Link
              href="/donate"
              className="rounded-full border-2 border-red-500 px-8 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Mission snapshot */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-800">
            What We Do
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Nutrition Education",
                desc: "Age-appropriate workshops that teach kids about balanced eating, cooking basics, and making smart food choices.",
              },
              {
                title: "Active Play Programs",
                desc: "Fun, inclusive sports and movement sessions designed to get children excited about staying active every day.",
              },
              {
                title: "Family Wellness Events",
                desc: "Community gatherings that bring families together around healthy cooking demos, fitness challenges, and more.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "2,500+", label: "Kids Served" },
              { stat: "120+", label: "Events Hosted" },
              { stat: "35", label: "Community Partners" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-extrabold text-blue-600">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Ready to Get Involved?
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you want to register your child, volunteer at an event, or
            support our mission with a donation, there&apos;s a place for you.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/how-it-works"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
            >
              Learn How It Works
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
