"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Founder, KGFHolidays",
    company: "KGFHolidays",
    avatar: "RK",
    avatarColor: "#FFB800",
    rating: 5,
    quote:
      "ArkEngine developed our entire custom booking engine from scratch. As a growing travel agency, we needed a scalable and fast solution. Their dedication and technical expertise transformed our operations and boosted our online conversions by 45%.",
  },
  {
    name: "Dr. Karthik S",
    title: "Coordinator, Kongu Blood Bank",
    company: "Kongu Blood Bank",
    avatar: "KS",
    avatarColor: "#34D399",
    rating: 5,
    quote:
      "The new website made it so much easier for donors to find us and check blood availability. ArkEngine understood the urgency of our work and delivered a clean, reliable platform that our whole team could adopt immediately.",
  },
  {
    name: "Manoj R",
    title: "Director, Elite Energy Devices",
    company: "Elite Energy Devices",
    avatar: "MR",
    avatarColor: "#818CF8",
    rating: 5,
    quote:
      "We needed a professional online catalog to showcase our electrical products, and ArkEngine delivered exactly that. Customer inquiries have gone up and the site reflects the quality of our brand.",
  },
  {
    name: "Priya Anand",
    title: "Operations Lead, TechNova Solutions",
    company: "TechNova Solutions",
    avatar: "PA",
    avatarColor: "#FF7832",
    rating: 5,
    quote:
      "Working with ArkEngine felt like having an in-house engineering team. Clear communication, fast iterations, and a genuine focus on getting our product right before shipping it.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="section"
      style={{
        background: "var(--bg)",
        color: "var(--text-primary)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background effects */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,136,204,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            background: "rgba(0,136,204,0.08)",
            color: "var(--primary)",
            borderRadius: "100px",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            border: "1px solid rgba(0,136,204,0.15)",
            marginBottom: "20px",
          }}>
            Testimonials
          </div>
          <h2 className="text-headline" style={{ color: "var(--text-primary)", marginBottom: "12px" }}>
            Client <span className="gradient-text">Feedback</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="testimonials-carousel">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "36px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Quote
                size={36}
                style={{
                  position: "absolute",
                  top: "28px",
                  right: "28px",
                  color: "rgba(0,136,204,0.20)",
                }}
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "18px" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                ))}
              </div>

              <p style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: "28px",
                fontStyle: "italic",
                flex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ color: "var(--text-tertiary)", fontSize: "0.78rem", marginTop: "2px" }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-carousel {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 8px 4px 24px;
          scrollbar-width: thin;
        }

        .testimonial-card {
          flex: 0 0 auto;
          width: 380px;
          scroll-snap-align: start;
        }

        @media (max-width: 640px) {
          .testimonial-card { width: 82vw; }
        }
      `}</style>
    </section>
  );
}
