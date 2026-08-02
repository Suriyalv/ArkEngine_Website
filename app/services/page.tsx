import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Code2, Globe, Layers, Cloud, Palette, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — ArkEngine Technologies",
  description:
    "ArkEngine Technologies offers AI/ML, SaaS development, custom software, web development, cloud solutions, and UI/UX design services.",
};

const services = [
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    tagline: "Intelligent systems that learn and adapt",
    description:
      "We design and deploy production-ready machine learning systems tailored to your business — from computer vision and NLP to predictive analytics and recommendation engines.",
    benefits: [
      "Custom model training on your proprietary data",
      "Real-time inference at scale",
      "Explainable AI for regulated industries",
      "MLOps pipelines and model monitoring",
      "RAG systems and vector database integration",
    ],
    process: ["Data Assessment", "Model Design", "Training & Evaluation", "Deployment", "Monitoring"],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI", "LangChain"],
  },
  {
    id: "automation",
    icon: Bot,
    title: "AI Automation",
    tagline: "Eliminate repetitive work with intelligent agents",
    description:
      "We build AI-powered automation systems — from intelligent document processing and workflow automation to autonomous agents that handle complex multi-step tasks end-to-end.",
    benefits: [
      "Intelligent document processing (IDP)",
      "Multi-agent orchestration systems",
      "AI-powered workflow automation",
      "Conversational AI and chatbots",
      "Robotic Process Automation (RPA) with AI",
    ],
    process: ["Process Analysis", "Agent Design", "Integration", "Testing", "Deployment"],
    technologies: ["LangChain", "CrewAI", "n8n", "Zapier", "LlamaIndex", "AutoGPT"],
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Development",
    tagline: "End-to-end SaaS platforms built to scale",
    description:
      "From architecture to launch, we design and develop scalable, secure, multi-tenant SaaS products with beautiful UX, robust APIs, and enterprise-grade infrastructure.",
    benefits: [
      "Multi-tenant architecture design",
      "Subscription billing integration",
      "Role-based access control",
      "Usage analytics and dashboards",
      "Scalable microservices backend",
    ],
    process: ["Discovery", "Architecture", "Development", "QA", "Launch"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Supabase", "Redis"],
  },
  {
    id: "software",
    icon: Code2,
    title: "Custom Software",
    tagline: "Bespoke solutions engineered to your specifications",
    description:
      "When off-the-shelf software doesn't cut it, we engineer fully custom solutions — internal tools, operational platforms, data pipelines, and enterprise applications.",
    benefits: [
      "Full ownership of IP and codebase",
      "Built to your exact specifications",
      "Clean, documented, maintainable code",
      "CI/CD from day one",
      "Post-delivery support and training",
    ],
    process: ["Requirements", "Design", "Development", "Testing", "Handover"],
    technologies: ["React", "Python", "Node.js", "TypeScript", "Go", "PostgreSQL"],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Premium digital experiences that convert",
    description:
      "We craft stunning, high-performance websites and web applications — from marketing sites to complex web apps — optimized for speed, SEO, and conversion.",
    benefits: [
      "Lighthouse 95+ performance scores",
      "Mobile-first responsive design",
      "SEO and Core Web Vitals optimized",
      "CMS integration (Contentful, Sanity)",
      "E-commerce and payment integration",
    ],
    process: ["Design", "Content Strategy", "Development", "Optimization", "Launch"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "Sanity"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Resilient infrastructure that scales with you",
    description:
      "We design, migrate, and manage cloud infrastructure for AWS, Azure, and GCP — including containerization, Kubernetes orchestration, and cost optimization.",
    benefits: [
      "Multi-cloud architecture design",
      "Kubernetes and Docker containerization",
      "Infrastructure as Code (Terraform)",
      "Cost optimization and FinOps",
      "Security and compliance (SOC2, HIPAA)",
    ],
    process: ["Assessment", "Architecture", "Migration", "Optimization", "Management"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Design that converts visitors into customers",
    description:
      "From wireframes to pixel-perfect prototypes, our design team creates human-centered experiences that are beautiful, accessible, and deeply effective at driving conversion.",
    benefits: [
      "User research and competitive analysis",
      "Wireframing and rapid prototyping",
      "Design systems and component libraries",
      "Interaction design and micro-animations",
      "WCAG accessibility compliance",
    ],
    process: ["Research", "Wireframes", "Design", "Prototype", "Handoff"],
    technologies: ["Figma", "Framer", "Storybook", "Zeplin", "Principle", "Lottie"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "calc(var(--nav-height) + 80px)",
          paddingBottom: "80px",
          background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(0,136,204,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Our Services</div>
          <h1 className="text-display" style={{ maxWidth: "800px", margin: "0 auto 20px" }}>
            Solutions built for{" "}
            <span className="gradient-text">every challenge</span>
          </h1>
          <p className="text-body-lg" style={{ maxWidth: "560px", margin: "0 auto 36px" }}>
            End-to-end technology services spanning AI, cloud, custom software, and design — engineered to drive real business outcomes.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 32px" }}>
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services Quick Nav */}
      <section style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: "var(--nav-height)",
        zIndex: 100,
      }}>
        <div className="container">
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "14px 0" }} className="services-nav">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                <s.icon size={13} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            padding: "80px 0",
            background: i % 2 === 0 ? "var(--bg)" : "var(--bg-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container">
            {/* Section header */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "16px",
                  background: "rgba(0,136,204,0.10)",
                  border: "1px solid rgba(0,136,204,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <service.icon size={26} color="#0088cc" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {service.tagline}
                </div>
                <h2
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Two-column layout */}
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
              {/* Left: description + benefits + CTA */}
              <div>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "28px" }}>
                  {service.description}
                </p>

                <h4 style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}>
                  What&apos;s included
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.55,
                      }}
                    >
                      <CheckCircle size={16} color="#0088cc" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
                  Start This Project <ArrowRight size={14} />
                </Link>
              </div>

              {/* Right: Process + Technologies */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Process card */}
                <div style={{
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  padding: "28px",
                }}>
                  <h4 style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "18px",
                  }}>
                    Our Process
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.process.map((step, si) => (
                      <div key={step} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "rgba(0,136,204,0.10)",
                          border: "1px solid rgba(0,136,204,0.15)",
                          color: "#0088cc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}>
                          {si + 1}
                        </div>
                        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies card */}
                <div style={{
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  padding: "28px",
                }}>
                  <h4 style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}>
                    Technologies
                  </h4>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "6px 14px",
                          background: "rgba(0,136,204,0.07)",
                          borderRadius: "100px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#0088cc",
                          border: "1px solid rgba(0,136,204,0.12)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ background: "linear-gradient(135deg, #0088cc 0%, #006699 100%)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 className="text-headline" style={{ marginBottom: "16px", color: "#ffffff" }}>
            Not sure which service fits?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.80)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Let&apos;s have a free 30-minute discovery call and figure it out together.
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
            transition: "all 0.3s",
          }}>
            Book Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        .services-nav::-webkit-scrollbar { display: none; }
        .services-nav { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
