"use client";

import { useEffect, useRef } from "react";
import { Search, Lightbulb, Code2, FlaskConical, Rocket, HeartHandshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, technical requirements, and competitive landscape to build a crystal-clear roadmap.",
    color: "#0066CC",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design & Architecture",
    description:
      "Our designers and architects create stunning UX mockups and a robust technical blueprint before a single line of code is written.",
    color: "#7B61FF",
  },
  {
    icon: Code2,
    step: "03",
    title: "Agile Development",
    description:
      "Rapid, iterative development in 2-week sprints with continuous feedback loops to keep delivery aligned with your vision.",
    color: "#00AAFF",
  },
  {
    icon: FlaskConical,
    step: "04",
    title: "QA & Testing",
    description:
      "Rigorous automated and manual testing — unit, integration, E2E, and performance — ensuring rock-solid reliability.",
    color: "#00C864",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch & Deploy",
    description:
      "Zero-downtime deployments with CI/CD pipelines, monitoring, and rollback strategies for a flawless go-live.",
    color: "#FF7832",
  },
  {
    icon: HeartHandshake,
    step: "06",
    title: "Support & Scale",
    description:
      "Post-launch, we stay with you — monitoring, optimizing, and scaling your product as your user base grows.",
    color: "#FF3C64",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-card",
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        ".process-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,102,204,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="process-header" style={{ textAlign: "center", marginBottom: "72px", opacity: 0 }}>
          <div className="section-label">Our Process</div>
          <h2 className="text-headline" style={{ marginBottom: "16px" }}>
            How we turn ideas into{" "}
            <span className="gradient-text">reality</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            position: "relative",
          }}
          className="process-grid"
        >
          {steps.map((step) => (
            <div
              key={step.step}
              className="process-card"
              style={{
                opacity: 0,
              }}
            >
              <div
                style={{
                  padding: "32px",
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                  height: "100%",
                  transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                }}
              >
                {/* Step number watermark */}
                <div style={{
                  position: "absolute",
                  top: "-10px",
                  right: "16px",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: `${step.color}15`,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                }}>
                  {step.step}
                </div>

                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: `${step.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <step.icon size={24} color={step.color} />
                </div>

                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "3px 10px",
                  background: `${step.color}10`,
                  borderRadius: "100px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: step.color,
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}>
                  Step {step.step}
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
