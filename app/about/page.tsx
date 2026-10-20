import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import TeamShowcase from "@/components/about/TeamShowcase";

export const metadata: Metadata = {
  title: "About ArkEngine Technologies",
  description:
    "Learn about ArkEngine Technologies — our story, mission, vision, values, and the world-class team behind every intelligent product we build.",
};



export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "calc(var(--nav-height) + 80px)",
        paddingBottom: "100px",
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,136,204,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-label">About ArkEngine</div>
          <h1 className="text-display" style={{ marginBottom: "24px", maxWidth: "820px", margin: "0 auto 24px" }}>
            We build the future,{" "}
            <span className="gradient-text">one product at a time</span>
          </h1>
          <p className="text-body-lg" style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
            ArkEngine Technologies is a product-focused technology company at the intersection of AI, engineering, and design.
            We partner with the world&apos;s most ambitious teams to build intelligent digital products that matter.
          </p>
          <Link href="/contact" className="btn-primary">
            Work With Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="mission-grid">
            {[
              {
                icon: Target,
                label: "Our Mission",
                title: "Empower businesses through intelligent technology",
                desc: "We believe every company deserves access to world-class engineering talent and cutting-edge AI capabilities. Our mission is to make that possible — at any scale, in any industry.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                title: "A world where intelligent software solves humanity's hardest problems",
                desc: "We envision a future where AI and software work seamlessly together to transform healthcare, education, finance, and beyond — creating a world that is more equitable, efficient, and human.",
              },
            ].map(({ icon: Icon, label, title, desc }) => (
              <div key={label} style={{
                padding: "48px",
                background: "var(--bg-card)",
                borderRadius: "24px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "16px",
                  background: "rgba(0,136,204,0.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <Icon size={26} color="#0088cc" />
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}>
                  {label}
                </div>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px", lineHeight: 1.35 }}>
                  {title}
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="team" className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label">Leadership</div>
            <h2 className="text-headline" style={{ marginBottom: "16px" }}>
              The minds behind{" "}
              <span className="gradient-text">ArkEngine</span>
            </h2>
            <p className="text-body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
              A dedicated team of passionate engineers building world-class digital products from India.
            </p>
          </div>
          <TeamShowcase />
        </div>
      </section>



      {/* CTA */}
      <section className="section-sm" style={{ background: "linear-gradient(135deg, #0088cc 0%, #006699 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="text-headline" style={{ marginBottom: "16px", color: "#ffffff" }}>Ready to build together?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Let&apos;s turn your vision into a world-class product.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "15px 32px",
            background: "#ffffff",
            color: "#0088cc",
            borderRadius: "100px",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
          }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .mission-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
