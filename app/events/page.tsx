import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Kids Getting Healthy",
};

interface Event {
  title: string;
  date: string;
  location: string;
  type: "Workshop" | "Active Play" | "Family Event" | "Fundraiser";
}

const events: Event[] = [
  {
    title: "Spring Kickoff Fun Run",
    date: "March 15, 2026",
    location: "Riverside Park, Austin TX",
    type: "Active Play",
  },
  {
    title: "Healthy Snacks Cooking Class",
    date: "March 22, 2026",
    location: "Community Center, Room 4B",
    type: "Workshop",
  },
  {
    title: "Family Fitness Day",
    date: "April 5, 2026",
    location: "Eastside Recreation Center",
    type: "Family Event",
  },
  {
    title: "Garden-to-Table Workshop",
    date: "April 12, 2026",
    location: "Sunny Acres Community Garden",
    type: "Workshop",
  },
  {
    title: "Annual Gala & Silent Auction",
    date: "May 3, 2026",
    location: "Grand Ballroom, Hilton Downtown",
    type: "Fundraiser",
  },
  {
    title: "Summer Soccer League Tryouts",
    date: "May 17, 2026",
    location: "Lincoln Fields, Austin TX",
    type: "Active Play",
  },
];

const typeBadgeColors: Record<Event["type"], string> = {
  Workshop: "bg-blue-100 text-blue-700",
  "Active Play": "bg-green-100 text-green-700",
  "Family Event": "bg-purple-100 text-purple-700",
  Fundraiser: "bg-red-100 text-red-700",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Upcoming Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Join us at an upcoming event. All activities are free and open to
            families in the community.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            {events.map((evt) => (
              <div
                key={evt.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {evt.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {evt.date} &middot; {evt.location}
                  </p>
                </div>
                <span
                  className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold sm:self-center ${typeBadgeColors[evt.type]}`}
                >
                  {evt.type}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Want to bring an event to your neighborhood?
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
