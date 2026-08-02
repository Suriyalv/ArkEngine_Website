"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, Shield, Zap, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Blazing Fast Delivery",
    description:
      "Our agile teams deliver MVP-quality products in weeks, not months — without sacrificing quality or scalability.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC compliant infrastructure, end-to-end encryption, and security-first architecture baked into every product.",
  },
  {
    icon: Star,
    title: "Proven Excellence",
    description:
      "5+ delivered projects, 91% client satisfaction, and a portfolio of products serving millions of users globally.",
  },
  {
    icon: Users,
    title: "Dedicated Expert Teams",
    description:
      "engineers, designers, and AI specialists — not just freelancers. Your project deserves the best.",
  },
  {
    icon: Award,
    title: "Transparent Partnerships",
    description:
      "No hidden fees, daily progress updates, and a dedicated account manager keeping you aligned every step.",
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll<HTMLDivElement>("[data-why]");
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section"
      style={{
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background gradient */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(0,136,204,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="why-layout">
          {/* Left — text */}
          <div>
            <div className="section-label">Why ArkEngine</div>
            <h2 className="text-headline" style={{ marginBottom: "20px" }}>
              The partner that turns{" "}
              <span className="gradient-text">vision into velocity</span>
            </h2>
            <p className="text-body-lg" style={{ marginBottom: "32px" }}>
              We&apos;re not just another software agency. ArkEngine is a product-focused technology partner built on engineering excellence, AI-first thinking, and a relentless commitment to your success.
            </p>
            <div style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
              {[
                { value: "5+", label: "Projects" },
                { value: "91%", label: "Satisfaction" },
                { value: "4.8★", label: "Rated" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>{value}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Our Story <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — reasons grid */}
          <div ref={ref} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                data-why={reason.title}
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <div
                  style={{
                    padding: "24px",
                    background: "var(--bg-card)",
                    borderRadius: "16px",
                    border: "1px solid var(--border)",
                    transition: "all 0.3s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "var(--shadow-md)";
                    el.style.borderColor = "rgba(0,136,204,0.30)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "var(--border)";
                  }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "rgba(0,136,204,0.09)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}>
                    <reason.icon size={18} color="var(--primary)" />
                  </div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                    {reason.title}
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .why-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
