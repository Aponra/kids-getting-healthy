import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-blue-600">
              Kids Getting Healthy
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Empowering children and families to build lifelong healthy habits
              through community programs, education, and events.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-500">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-blue-600">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">Get Involved</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-500">
              <li>
                <Link href="/register" className="hover:text-blue-600">
                  Register Your Child
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-blue-600">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Kids Getting Healthy. All rights
          reserved. A 501(c)(3) nonprofit organization.
        </div>
      </div>
    </footer>
  );
}
