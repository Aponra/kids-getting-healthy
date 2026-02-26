import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Kids Getting Healthy",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We believe every child deserves the chance to grow up healthy, happy,
            and active.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            <p className="mt-3">
              Kids Getting Healthy is a 501(c)(3) nonprofit organization
              committed to fighting childhood obesity and promoting wellness in
              underserved communities. Through hands-on nutrition workshops,
              active play programs, and family wellness events, we give children
              the knowledge and confidence to make healthy choices every day.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">Our Story</h2>
            <p className="mt-3">
              Founded by a group of parents, educators, and health professionals
              who saw first-hand the challenges families face in accessing
              affordable, engaging health programs. What started as a weekend
              running club at a local park has grown into a multi-program
              organization reaching thousands of children each year.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">Our Values</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Inclusivity:</strong> Every child is welcome, regardless
                of ability, background, or experience.
              </li>
              <li>
                <strong>Fun First:</strong> Kids learn best when they are having
                a great time.
              </li>
              <li>
                <strong>Community:</strong> Families supporting families creates
                lasting change.
              </li>
              <li>
                <strong>Evidence-Based:</strong> Our programs are designed with
                guidance from pediatric health experts.
              </li>
            </ul>
          </div>

          <div className="text-center">
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
