import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Kids Getting Healthy",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900">
              About Us
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              We believe every child deserves the chance to grow up healthy,
              happy, and active.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
              alt="Children stretching and exercising together"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          {/* Mission with image */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Our Mission
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                Kids Getting Healthy is a 501(c)(3) nonprofit organization
                committed to fighting childhood obesity and promoting wellness in
                underserved communities. Through hands-on nutrition workshops,
                active play programs, and family wellness events, we give
                children the knowledge and confidence to make healthy choices
                every day.
              </p>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&h=450&fit=crop"
                alt="Kids learning about healthy foods"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Story with image */}
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=600&h=450&fit=crop"
                alt="Children running in a park"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Our Story</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                Founded by a group of parents, educators, and health
                professionals who saw first-hand the challenges families face in
                accessing affordable, engaging health programs. What started as a
                weekend running club at a local park has grown into a
                multi-program organization reaching thousands of children each
                year.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold text-slate-800">
              Our Values
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Inclusivity",
                  desc: "Every child is welcome, regardless of ability, background, or experience.",
                  image:
                    "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=400&h=300&fit=crop",
                  alt: "Diverse group of children playing together",
                },
                {
                  title: "Fun First",
                  desc: "Kids learn best when they are having a great time.",
                  image:
                    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
                  alt: "Child laughing and having fun outdoors",
                },
                {
                  title: "Community",
                  desc: "Families supporting families creates lasting change.",
                  image:
                    "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=400&h=300&fit=crop",
                  alt: "Families gathering at a community event",
                },
                {
                  title: "Evidence-Based",
                  desc: "Our programs are designed with guidance from pediatric health experts.",
                  image:
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
                  alt: "Medical professional with clipboard",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={v.image}
                      alt={v.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-blue-600">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/register"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
            >
              Join Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
