import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, DollarSign, Users, Heart, Zap, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — ArkEngine Technologies",
  description:
    "Join the ArkEngine Technologies team. Build world-class AI and software products with the best engineers, designers, and product thinkers.",
};

const perks = [
  { icon: DollarSign, title: "Competitive Compensation", desc: "Top-of-market salary, equity, and annual bonuses tied to impact." },
  { icon: Heart, title: "Health & Wellness", desc: "Full medical, dental, vision coverage + mental health support." },
  { icon: Clock, title: "Flexible Hours", desc: "Async-first culture. Work when you're most productive." },
  { icon: Zap, title: "Growth Budget", desc: "$3,000/year for courses, conferences, and books." },
  { icon: Users, title: "Remote-First", desc: "Work from anywhere. Quarterly team retreats in amazing cities." },
  { icon: Coffee, title: "Great Culture", desc: "Collaborative, no-politics environment where great work wins." },
];

const openRoles = [
  {
    title: "Senior AI/ML Engineer",
    department: "AI Research",
    location: "Remote / San Francisco",
    type: "Full-time",
    level: "Senior",
    description: "Design and deploy production ML systems — from LLM applications to computer vision pipelines.",
  },
  {
    title: "Full-Stack Software Engineer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Build scalable, beautiful web applications using Next.js, TypeScript, and Node.js.",
  },
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description: "Lead design for complex AI and SaaS products — from research to pixel-perfect prototypes.",
  },
  {
    title: "Cloud Infrastructure Engineer",
    department: "Platform",
    location: "Remote / London",
    type: "Full-time",
    level: "Senior",
    description: "Architect and manage Kubernetes clusters, CI/CD pipelines, and multi-cloud infrastructure.",
  },
  {
    title: "Technical Product Manager",
    department: "Product",
    location: "Remote / San Francisco",
    type: "Full-time",
    level: "Senior",
    description: "Define and drive the roadmap for our most complex client products alongside engineering teams.",
  },
];

const process = [
  { step: "01", title: "Apply Online", desc: "Submit your resume and a short cover note about why ArkEngine excites you." },
  { step: "02", title: "Intro Call", desc: "30-minute call with our talent team to align on the role, values, and expectations." },
  { step: "03", title: "Technical Round", desc: "A real-world, take-home project relevant to your role. No LeetCode theatrics." },
  { step: "04", title: "Team Interview", desc: "Meet your future team. We assess culture fit, technical depth, and communication." },
  { step: "05", title: "Offer", desc: "Fast decisions. If you're the one, we make an offer within 48 hours." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "calc(var(--nav-height) + 80px)",
        paddingBottom: "100px",
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,136,204,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">We&apos;re Hiring</div>
          <h1 className="text-display" style={{ maxWidth: "820px", margin: "0 auto 20px" }}>
            Build the future with{" "}
            <span className="gradient-text">ArkEngine</span>
          </h1>
          <p className="text-body-lg" style={{ maxWidth: "560px", margin: "0 auto 36px" }}>
            Join a world-class team of engineers, designers, and AI researchers building products that transform industries.
          </p>
          <a href="#open-roles" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 32px" }}>
            See Open Roles <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Perks */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-label">Benefits & Perks</div>
            <h2 className="text-headline">Why engineers love working here</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="perks-grid">
            {perks.map((perk) => (
              <div key={perk.title} style={{
                padding: "32px",
                background: "var(--bg-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  background: "rgba(0,136,204,0.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}>
                  <perk.icon size={22} color="#0088cc" />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{perk.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-label">Hiring Process</div>
            <h2 className="text-headline" style={{ marginBottom: "14px" }}>
              Simple, fast,{" "}
              <span className="gradient-text">transparent</span>
            </h2>
            <p className="text-body-lg" style={{ maxWidth: "440px", margin: "0 auto" }}>
              We respect your time. Our entire hiring process takes 2–3 weeks.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0", maxWidth: "900px", margin: "0 auto", position: "relative" }} className="process-row">
            {/* Connector line */}
            <div style={{
              position: "absolute",
              top: "28px",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, rgba(0,136,204,0.25), rgba(0,136,204,0.06))",
              zIndex: 0,
            }} className="process-line" />
            {process.map((step, i) => (
              <div key={step.step} style={{ flex: 1, textAlign: "center", position: "relative", zIndex: 1, padding: "0 12px" }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#0088cc",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  border: "3px solid var(--bg-secondary)",
                  boxShadow: "0 0 0 2px var(--primary)",
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">Open Positions</div>
            <h2 className="text-headline" style={{ marginBottom: "14px" }}>
              Find your{" "}
              <span className="gradient-text">perfect role</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "860px", margin: "0 auto" }}>
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="role-card role-card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>{role.title}</h3>
                    <span style={{
                      padding: "2px 10px",
                      background: "rgba(0,136,204,0.12)",
                      border: "1px solid var(--border)",
                      borderRadius: "100px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#0088cc",
                    }}>
                      {role.department}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "10px" }}>{role.description}</p>
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    {[
                      { icon: MapPin, text: role.location },
                      { icon: Clock, text: role.type },
                      { icon: Users, text: role.level },
                    ].map(({ icon: Icon, text }) => (
                      <span key={text} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                        <Icon size={11} /> {text}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem", flexShrink: 0 }}>
                  Apply <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .perks-grid { grid-template-columns: 1fr 1fr !important; }
          .process-row { flex-direction: column !important; gap: 32px !important; }
          .process-line { display: none; }
        }
        @media (max-width: 640px) {
          .perks-grid { grid-template-columns: 1fr !important; }
          .role-card { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </>
  );
}
