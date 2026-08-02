"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="section"
      style={{
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, #0088cc 0%, #006699 50%, #0088cc 100%)",
            borderRadius: "32px",
            padding: "80px 60px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(0,136,204,0.20)",
          }}
        >
          {/* Decorative orbs */}
          <div style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Floating dots */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: `${3 + i}px`,
                height: `${3 + i}px`,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                top: `${15 + i * 12}%`,
                left: `${5 + i * 15}%`,
                animation: `float ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                pointerEvents: "none",
              }}
            />
          ))}

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "100px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              marginBottom: "24px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}>
              <Sparkles size={12} />
              Ready to build something great?
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}>
              Let&apos;s build your next<br />
              intelligent product together
            </h2>

            <p style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.80)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}>
              As a dedicated India-based startup, we are ready to engineer your most ambitious digital products. Your transformation starts with a conversation.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "15px 32px" }}
              >
                Let&apos;s Build Together <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  borderRadius: "100px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.30)",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
              >
                View Services
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
