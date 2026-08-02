"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    category: "Travel & Tourism",
    title: "KGF Holidays",
    description:
      "A travel & adventure booking site built around \"Discover Your Next Adventure.\" Visitors can explore tour packages, vehicle rentals, events and a photo gallery, then jump straight into booking or watch a preview video — turning browsing into an enquiry in a couple of clicks.",
    metrics: [
      { value: "3x", label: "Faster Booking" },
      { value: "35%", label: "Conversion Lift" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0088cc 0%, #33aadd 100%)",
    href: "https://kgfholidays.in",
  },
  {
    category: "Healthcare",
    title: "Kongu Blood Bank",
    description:
      "A donor-focused platform built around \"Be someone's Hero — donate today.\" The homepage leads straight into two clear actions, Request Blood and Become a Donor, making it fast for recipients to find blood and for donors to sign up.",
    metrics: [
      { value: "50%", label: "Less Admin Time" },
      { value: "40%", label: "Faster Intake" },
      { value: "99.9%", label: "Uptime" },
    ],
    tags: ["html", "css", "javascript"],
    gradient: "linear-gradient(135deg, #0088cc 0%, #33aadd 100%)",
    href: "https://kongubloodbank.org",
  },
  {
    category: "Electricals",
    title: "Elite Energy Devices",
    description:
      "An industrial electricals showcase built around \"Trusted by Industry Leaders.\" Highlights 100+ prestigious clients, including Reliance, IOC and Malabar Gold, alongside customized control panel solutions and round-the-clock after-sales support.",
    metrics: [
      { value: "100+", label: "Clients Served" },
      { value: "24/7", label: "After-Sales Support" },
      { value: "3", label: "Named Enterprise Clients" },
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #0088cc 0%, #33aadd 100%)",
    href: "https://eliteenergydevices.in",
  },
];

export default function Project() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll<HTMLDivElement>("[data-case]");
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 150);
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
      id="projects"
      className="section"
      style={{
        paddingTop: "calc(var(--nav-height) + 80px)",
        background: "var(--bg)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label">Our Projects</div>
          <h2 className="text-headline" style={{ marginBottom: "16px" }}>
            Results that speak{" "}
            <span className="gradient-text">for themselves</span>
          </h2>
          <p className="text-body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
            Real-world impact for the industry. We don&apos;t just build software — we drive measurable business outcomes.
          </p>
        </div>

        <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              data-case={i}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <Link
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    boxShadow: "var(--shadow-sm)",
                    transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  className="case-study-card"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-xl)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  {/* Content */}
                  <div style={{ padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 12px",
                      background: "rgba(0,136,204,0.08)",
                      borderRadius: "100px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--primary)",
                      marginBottom: "16px",
                      width: "fit-content",
                    }}>
                      <TrendingUp size={11} />
                      {study.category}
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px", letterSpacing: "-0.025em", lineHeight: 1.25 }}>
                      {study.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div style={{ display: "flex", gap: "32px", marginBottom: "24px" }}>
                      {study.metrics.map((m) => (
                        <div key={m.label}>
                          <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>{m.value}</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 500 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "24px" }}>
                      {study.tags.map((tag) => (
                        <span key={tag} style={{
                          padding: "3px 10px",
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: "100px",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontSize: "0.9rem", fontWeight: 600 }}>
                      View Project<ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Visual panel */}
                  <div style={{
                    background: study.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    minHeight: "300px",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {/* Website screenshot */}
                    <img
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        zIndex: 1,
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Decorative orbs */}
                    <div style={{
                      position: "absolute",
                      top: "20%",
                      right: "20%",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                      animation: "float 5s ease-in-out infinite",
                    }} />
                    <div style={{
                      position: "absolute",
                      bottom: "15%",
                      left: "15%",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      animation: "float-slow 7s ease-in-out infinite",
                    }} />

                    {/* Dashboard mock */}
                    <div style={{
                      width: "75%",
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "20px",
                    }}>
                      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                          <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                        ))}
                      </div>
                      {[80, 60, 90, 45].map((w, i) => (
                        <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "10px" }}>
                          <div style={{ width: `${w}%`, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.3)" }} />
                          <div style={{ width: `${100 - w}%`, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.1)" }} />
                        </div>
                      ))}
                      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                        {study.metrics.map((m) => (
                          <div key={m.label} style={{
                            flex: 1,
                            background: "rgba(255,255,255,0.15)",
                            borderRadius: "10px",
                            padding: "10px 8px",
                            textAlign: "center",
                          }}>
                            <div style={{ fontSize: "1rem", fontWeight: 800, color: "white" }}>{m.value}</div>
                            <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-study-card { grid-template-columns: 1fr !important; }
          .case-study-card > div:last-child { min-height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
