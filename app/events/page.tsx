import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Kids Getting Healthy",
};

interface Event {
  title: string;
  date: string;
  location: string;
  type: "Workshop" | "Active Play" | "Family Event" | "Fundraiser";
  image: string;
  alt: string;
}

const events: Event[] = [
  {
    title: "Spring Kickoff Fun Run",
    date: "March 15, 2026",
    location: "Riverside Park, Austin TX",
    type: "Active Play",
    image:
      "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=400&h=250&fit=crop",
    alt: "Children running in a park",
  },
  {
    title: "Healthy Snacks Cooking Class",
    date: "March 22, 2026",
    location: "Community Center, Room 4B",
    type: "Workshop",
    image:
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&h=250&fit=crop",
    alt: "Kids preparing healthy snacks",
  },
  {
    title: "Family Fitness Day",
    date: "April 5, 2026",
    location: "Eastside Recreation Center",
    type: "Family Event",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=250&fit=crop",
    alt: "Family exercising together",
  },
  {
    title: "Garden-to-Table Workshop",
    date: "April 12, 2026",
    location: "Sunny Acres Community Garden",
    type: "Workshop",
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=250&fit=crop",
    alt: "Children gardening and planting vegetables",
  },
  {
    title: "Annual Gala & Silent Auction",
    date: "May 3, 2026",
    location: "Grand Ballroom, Hilton Downtown",
    type: "Fundraiser",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    alt: "Elegant gala event setup",
  },
  {
    title: "Summer Soccer League Tryouts",
    date: "May 17, 2026",
    location: "Lincoln Fields, Austin TX",
    type: "Active Play",
    image:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=250&fit=crop",
    alt: "Kids playing soccer on a field",
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
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&h=500&fit=crop"
            alt="Kids at a community event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-white">
          <h1 className="text-4xl font-extrabold">Upcoming Events</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Join us at an upcoming event. All activities are free and open to
            families in the community.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((evt) => (
              <div
                key={evt.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={evt.image}
                    alt={evt.alt}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${typeBadgeColors[evt.type]}`}
                  >
                    {evt.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {evt.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {evt.date}
                  </p>
                  <p className="text-sm text-slate-500">{evt.location}</p>
                </div>
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
