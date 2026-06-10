import { cities, slugify } from "@/lib/cities";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workers' Comp Billing in California — All Cities | MLM",
  description:
    "Medical Lien Management provides workers' compensation billing and medical lien services across all major California cities. Find your city and get a free consultation.",
  alternates: {
    canonical: "https://medicallienmgt.com/workers-comp-billing/",
  },
};

const regions = [...new Set(cities.map((c) => c.region))];

export default function WorkersCompBillingIndex() {
  return (
    <>
      <header className="bg-[#1a2e4a] text-white px-8 py-4 flex justify-between items-center">
        <a href="https://medicallienmgt.com" className="font-bold text-lg">
          Medical Lien Management
        </a>
        <a
          href="https://medicallienmgt.com/contact/"
          className="text-blue-300 text-sm hover:text-white transition"
        >
          Book Free Consultation →
        </a>
      </header>

      <section className="bg-gradient-to-br from-[#1a2e4a] to-[#2563eb] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Workers&apos; Comp Billing — California
        </h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          MLM provides expert workers&apos; compensation billing and medical lien services across
          all major California cities. Select your city to learn more.
        </p>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {regions.map((region) => (
          <div key={region} className="mb-10">
            <h2 className="text-xl font-bold text-[#1a2e4a] border-b-2 border-blue-600 pb-2 mb-4">
              {region}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities
                .filter((c) => c.region === region)
                .map((c) => (
                  <Link
                    key={c.city}
                    href={`/workers-comp-billing/${slugify(c.city)}-ca`}
                    className="bg-slate-50 border border-slate-200 border-l-4 border-l-blue-500 rounded-lg px-4 py-3 text-sm font-semibold text-[#1a2e4a] hover:bg-blue-50 transition"
                  >
                    {c.city}, CA
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm">
        <p>© 2026 Medical Lien Management Inc | (888) 296-1109 | Corona, CA</p>
      </footer>
    </>
  );
}
