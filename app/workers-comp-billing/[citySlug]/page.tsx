import { cities, getCityBySlug, slugify } from "@/lib/cities";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return cities.map((c) => ({
    citySlug: slugify(c.city),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return {
    title: `Workers' Comp Billing in ${city.city}, CA | Medical Lien Management`,
    description: `MLM provides expert workers' compensation billing and medical lien collections in ${city.city}, California. Serving ${city.county} providers for 35+ years.`,
    alternates: { canonical: `https://medicallienmgt.com/workers-comp-billing/${citySlug}-ca/` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const { city: cityName, county, population, region } = city;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Medical Lien Management Inc",
    telephone: "(888) 296-1109",
    areaServed: { "@type": "City", name: cityName },
    serviceType: "Workers Compensation Billing",
  };

  const services = [
    { icon: "🏥", title: "Workers' Comp Billing", desc: `Complete billing and coding for all workers' compensation claims in ${cityName}. Clean submissions, faster reimbursements, fewer denials.` },
    { icon: "📋", title: "Medical Lien Filing", desc: `Expert lien filing and tracking for ${county} providers. We handle all documentation, WCAB submissions, and deadlines.` },
    { icon: "⚖️", title: "Lien Collections & Recovery", desc: "Aggressive yet compliant lien recovery services. MLM pursues every unpaid claim using proven legal and billing strategies." },
    { icon: "📝", title: "Appeals & Denial Management", desc: "When claims are denied, our team files IBR/SBR appeals with a 72% success rate — recovering revenue you thought was lost." },
    { icon: "🏛️", title: "WCAB Support", desc: `Full representation at WCAB lien conferences and hearings for ${cityName} healthcare providers.` },
    { icon: "⚡", title: "Jet Filing", desc: "Our proprietary Jet Filing system electronically submits claims in bulk — dramatically reducing turnaround times and errors." },
  ];

  const faqs = [
    { q: `How long does it take to recover workers' comp liens in ${cityName}, CA?`, a: `With MLM's Jet Filing system, most clean claims are processed within 29 days. Complex lien cases may take longer depending on WCAB scheduling in ${county}.` },
    { q: "What is the deadline to file a workers' comp lien in California?", a: "In California, a lien must be filed within 3 years of the date services were provided. For services after July 1, 2013, the deadline is 18 months. MLM tracks all deadlines." },
    { q: `Does MLM serve providers in ${county}?`, a: `Yes. MLM serves all of ${region} including ${county}. Our team has extensive experience with ${cityName}-area insurers and WCAB offices.` },
    { q: "What does workers' comp billing cost with MLM?", a: "MLM operates on a performance-based fee model — you only pay when we recover. Contact us for a custom quote." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HEADER */}
      <header style={{ background: "#1a2e4a", color: "white", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="https://medicallienmgt.com" style={{ color: "white", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>Medical Lien Management</a>
        <a href="https://medicallienmgt.com/contact/" style={{ color: "#93c5fd", fontSize: "14px", textDecoration: "none" }}>Book Free Consultation →</a>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1a2e4a 0%, #2563eb 100%)", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ color: "#bfdbfe", fontSize: "14px", marginBottom: "16px" }}>
          <a href="https://medicallienmgt.com/" style={{ color: "#bfdbfe" }}>Home</a> › <a href="/workers-comp-billing/" style={{ color: "#bfdbfe" }}>Workers&apos; Comp Billing</a> › {cityName}, CA
        </p>
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "16px", lineHeight: 1.2 }}>Workers&apos; Comp Billing in {cityName}, CA</h1>
        <p style={{ color: "#dbeafe", fontSize: "18px", maxWidth: "560px", margin: "0 auto 32px" }}>
          California&apos;s most trusted medical lien and workers&apos; compensation billing company — serving {county} healthcare providers for 35+ years.
        </p>
        <a href="https://medicallienmgt.com/contact/" style={{ background: "#fbbf24", color: "#1a2e4a", fontWeight: "bold", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontSize: "16px" }}>
          Get a Free Consultation
        </a>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "#f1f5f9", borderBottom: "1px solid #e2e8f0", padding: "24px 16px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "64px", flexWrap: "wrap" }}>
          {[{ num: "35+", label: "Years Experience" }, { num: "18.2M+", label: "Claims Billed" }, { num: "$6.8B", label: "Revenue Recovered" }, { num: "72%", label: "Appeals Success Rate" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "800", color: "#2563eb" }}>{s.num}</div>
              <div style={{ fontSize: "12px", color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px" }}>

        <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1a2e4a", marginBottom: "16px" }}>Workers&apos; Compensation Billing Services in {cityName}, California</h2>
        <p style={{ color: "#475569", marginBottom: "16px", lineHeight: 1.7 }}>
          If you&apos;re a healthcare provider in <strong>{cityName}, {county}</strong>, recovering revenue from workers&apos; compensation claims can be complex and frustrating. Medical Lien Management (MLM) specializes in end-to-end workers&apos; comp billing, lien filing, and collections.
        </p>
        <p style={{ color: "#475569", marginBottom: "48px", lineHeight: 1.7 }}>
          {cityName} is one of {region}&apos;s major healthcare markets with a population of {population}. MLM has worked with solo providers, specialty clinics, and multi-physician groups across {county} to maximize reimbursements and reduce unpaid claims.
        </p>

        {/* SERVICES */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1a2e4a", marginBottom: "24px" }}>Our Workers&apos; Comp Services for {cityName} Providers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {services.map((s) => (
            <div key={s.title} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderLeft: "4px solid #2563eb", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontWeight: "700", color: "#2563eb", marginBottom: "8px" }}>{s.icon} {s.title}</h3>
              <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY MLM */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1a2e4a", marginBottom: "16px" }}>Why {cityName} Providers Choose MLM</h2>
        <p style={{ color: "#475569", marginBottom: "24px", lineHeight: 1.7 }}>Healthcare providers in {cityName} face unique challenges in workers&apos; comp billing. MLM&apos;s certified billers, coders, and legal experts understand the {region} market.</p>
        <div style={{ marginBottom: "48px" }}>
          {[
            { title: "✅ HIPAA-Compliant & Fully Secure", desc: "Every claim, document, and patient record is handled with strict HIPAA compliance and end-to-end encryption." },
            { title: "✅ 35+ Years in California Workers' Comp", desc: `Since 1989, MLM has been the trusted partner for California providers — from ${cityName} to Los Angeles and San Diego.` },
            { title: "✅ No Recovery, No Fee", desc: "Our performance-based model means we only win when you do. Zero upfront costs for lien recovery services." },
          ].map((item) => (
            <div key={item.title} style={{ marginBottom: "20px" }}>
              <h3 style={{ fontWeight: "700", color: "#1a2e4a", marginBottom: "4px" }}>{item.title}</h3>
              <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1a2e4a", marginBottom: "24px" }}>FAQs — Workers&apos; Comp Billing in {cityName}</h2>
        <div style={{ marginBottom: "48px" }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{ borderTop: "1px solid #e2e8f0", padding: "20px 0" }}>
              <p style={{ fontWeight: "700", color: "#1a2e4a", marginBottom: "8px" }}>{faq.q}</p>
              <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "#1a2e4a", color: "white", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "12px" }}>Ready to Recover More Revenue in {cityName}?</h2>
          <p style={{ color: "#94a3b8", maxWidth: "440px", margin: "0 auto 24px", lineHeight: 1.6 }}>Book a free 15-minute consultation with an MLM billing expert. We&apos;ll show you exactly how much more you could be recovering.</p>
          <a href="https://medicallienmgt.com/contact/" style={{ background: "#fbbf24", color: "#1a2e4a", fontWeight: "bold", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontSize: "16px" }}>
            Book Free Consultation →
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", textAlign: "center", padding: "24px", fontSize: "13px", marginTop: "48px" }}>
        <p>© 2026 Medical Lien Management Inc | 495 E Rincon St, Ste 117, Corona, CA 92879 | (888) 296-1109</p>
        <p style={{ marginTop: "4px" }}>HIPAA-Compliant | DIR & WCAB Certified | Serving All of California</p>
      </footer>
    </>
  );
}
