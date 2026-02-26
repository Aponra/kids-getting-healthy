import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Nutrition Education",
    desc: "Age-appropriate workshops that teach kids about balanced eating, cooking basics, and making smart food choices.",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
    alt: "Colorful fresh fruits and vegetables",
  },
  {
    title: "Active Play Programs",
    desc: "Fun, inclusive sports and movement sessions designed to get children excited about staying active every day.",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop",
    alt: "Children playing sports outdoors",
  },
  {
    title: "Family Wellness Events",
    desc: "Community gatherings that bring families together around healthy cooking demos, fitness challenges, and more.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
    alt: "Family cooking together in kitchen",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Helping Kids Build{" "}
              <span className="text-blue-600">Healthy Habits</span> for Life
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Kids Getting Healthy is a nonprofit dedicated to empowering
              children and families with the tools, knowledge, and community
              support they need to live active, nourished lives.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&h=600&fit=crop"
              alt="Happy children running outdoors in a park"
              fill
              className="object-cover"
              priority
            />
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
            {cards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-600">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <section className="relative h-64 sm:h-80">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&h=500&fit=crop"
          alt="Group of diverse kids smiling together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <p className="text-3xl font-extrabold sm:text-4xl">
              Every child deserves a healthy start.
            </p>
            <p className="mt-2 text-lg opacity-90">
              Join us in making it happen.
            </p>
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
