import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart2, MessageSquare, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Products — ArkEngine Technologies",
  description:
    "Explore proprietary SaaS products built by ArkEngine Technologies. Cutting-edge tools for marketing, document analysis, and performance analytics.",
};

const products = [
  {
    id: "ark-analytics",
    name: "ArkAnalytics",
    tagline: "Real-time user behavior & performance intelligence",
    icon: BarChart2,
    color: "#0066CC",
    description: "An enterprise-grade analytics dashboard that aggregates user behavior, system performance, and conversion metrics in real-time. Designed to handle billions of events with sub-second query times.",
    features: [
      "Real-time event tracking and mapping",
      "Custom cohort analysis and funnel building",
      "Automatic anomaly detection powered by ML",
      "Privacy-first tracking (GDPR/CCPA compliant)",
      "Instant integration with one line of JavaScript"
    ],
    pricing: {
      starter: "$49/mo",
      pro: "$199/mo",
      enterprise: "Custom"
    },
    benefits: [
      "Improve conversion rates by up to 35%",
      "Reduce latency troubleshooting from hours to seconds",
      "Consolidate marketing and engineering metrics into one source of truth"
    ]
  },
  {
    id: "ark-doc",
    name: "ArkDoc",
    tagline: "Autonomous document understanding & extraction",
    icon: Layers,
    color: "#7B61FF",
    description: "Leverage advanced LLM applications to read, analyze, and extract structured data from unstructured corporate documents. Process invoices, contracts, and reports automatically in seconds.",
    features: [
      "99.4% accuracy in structured data extraction",
      "Support for PDF, Word, Excel, scans, and hand-written files",
      "Automatic compliance checks against regulatory files",
      "Direct API integrations with ERP and billing systems",
      "Custom fine-tuned models for specific industry domains"
    ],
    pricing: {
      starter: "$99/mo",
      pro: "$399/mo",
      enterprise: "Custom"
    },
    benefits: [
      "Automate 87% of manual document entry work",
      "Eliminate compliance errors entirely",
      "Process documents 50x faster than human operators"
    ]
  },
  {
    id: "ark-chat",
    name: "ArkChat",
    tagline: "Next-generation autonomous AI support agents",
    icon: MessageSquare,
    color: "#00C864",
    description: "Deploy highly contextual AI agents that resolve customer queries instantly. Connected directly to your company knowledge base and APIs, ArkChat resolves up to 70% of support cases without human intervention.",
    features: [
      "Multi-agent orchestration with direct API access",
      "Multi-lingual support out of the box (50+ languages)",
      "Seamless hand-off to human support with full chat summaries",
      "Direct integrations with Zendesk, Intercom, and Slack",
      "Continuous learning loops based on agent evaluations"
    ],
    pricing: {
      starter: "$79/mo",
      pro: "$299/mo",
      enterprise: "Custom"
    },
    benefits: [
      "Resolve 70% of support queries instantly",
      "Reduce average customer wait times to zero",
      "Lower support operations overhead by 40%"
    ]
  }
];

export default function ProductsPage() {
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
          background: "radial-gradient(ellipse, rgba(0,136,204,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Our Products</div>
          <h1 className="text-display" style={{ maxWidth: "800px", margin: "0 auto 20px" }}>
            Intelligent platforms for{" "}
            <span className="gradient-text">hyper-growth</span>
          </h1>
          <p className="text-body-lg" style={{ maxWidth: "560px", margin: "0 auto 36px" }}>
            Explore our proprietary SaaS platforms, designed and built to automate operations, unlock product insights, and supercharge customer success.
          </p>
        </div>
      </section>

      {/* Product list */}
      {products.map((product, i) => (
        <section
          key={product.id}
          id={product.id}
          className="section"
          style={{
            background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "80px",
              alignItems: "center",
              direction: i % 2 !== 0 ? "rtl" : "ltr",
            }}
              className="product-layout"
            >
              {/* Left Column (Content) */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: "16px",
                  background: `${product.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <product.icon size={28} color={product.color} />
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: product.color,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}>
                  {product.tagline}
                </div>
                <h2 className="text-headline" style={{ marginBottom: "16px" }}>{product.name}</h2>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "28px" }}>
                  {product.description}
                </p>

                {/* Benefits */}
                <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                  Key Outcomes
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {product.benefits.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <CheckCircle size={16} color={product.color} style={{ flexShrink: 0, marginTop: "2px" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary" style={{ background: product.color }}>
                    Request Demo <ArrowRight size={14} />
                  </Link>
                  <Link href="#pricing" className="btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>

              {/* Right Column (Visual Showcase / Features) */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  background: `linear-gradient(135deg, ${product.color}18 0%, ${product.color}06 100%)`,
                  borderRadius: "24px",
                  border: `1px solid ${product.color}20`,
                  padding: "40px",
                }}>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
                    Core Capabilities
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                    {product.features.map((feature) => (
                      <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <div style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: product.color,
                          marginTop: "6px",
                          flexShrink: 0,
                        }} />
                        <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Pricing Preview */}
                  <div style={{
                    background: "var(--bg-secondary)",
                    borderRadius: "14px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "var(--shadow-sm)",
                  }}>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600 }}>Starter Plan</div>
                      <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{product.pricing.starter}</div>
                    </div>
                    <div style={{ borderLeft: "1px solid var(--border)", height: "30px" }} />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600 }}>Pro Plan</div>
                      <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary)", letterSpacing: "-0.02em" }}>{product.pricing.pro}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Comparison Table Section */}
      <section id="pricing" className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-label">Pricing Plans</div>
            <h2 className="text-headline" style={{ marginBottom: "16px" }}>
              Choose the plan that{" "}
              <span className="gradient-text">fits your scale</span>
            </h2>
            <p className="text-body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Transparent pricing with no hidden fees. Scale up, down, or customize anytime.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
            className="pricing-grid"
          >
            {/* Starter */}
            <div className="glass-card" style={{ padding: "40px", background: "var(--bg-card)", display: "flex", flexDirection: "column", height: "100%" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>Starter</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "24px" }}>Great for small teams and early validation.</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "32px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>$79</span>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>/month</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px", flex: 1 }}>
                {["Up to 50,000 monthly events", "Standard ML models", "1 standard AI Chat agent", "Email & Community Support", "1-day data retention"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <CheckCircle size={14} color="var(--primary)" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary" style={{ textAlign: "center", justifyContent: "center" }}>Get Started</Link>
            </div>

            {/* Pro */}
            <div className="glass-card" style={{
              padding: "40px",
              background: "var(--bg-card)",
              border: "2px solid var(--primary)",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--primary)",
                color: "white",
                padding: "4px 14px",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>Most Popular</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>Pro</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "24px" }}>Perfect for scaling startups and platforms.</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "32px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>$299</span>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>/month</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px", flex: 1 }}>
                {["Up to 1,000,000 monthly events", "Advanced Fine-tuned models", "Unlimited custom AI Chat agents", "Priority 24/7 Slack & Email support", "30-day data retention", "Advanced Analytics & Funnels", "Custom integrations"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <CheckCircle size={14} color="var(--primary)" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>Upgrade Now</Link>
            </div>

            {/* Enterprise */}
            <div className="glass-card" style={{ padding: "40px", background: "var(--bg-card)", display: "flex", flexDirection: "column", height: "100%" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>Enterprise</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "24px" }}>Tailored features for massive scale and compliance.</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "32px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>Custom</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px", flex: 1 }}>
                {["Unlimited monthly events", "Proprietary model hosting", "Custom agent fine-tuning & evaluation", "Dedicated Account Manager & solutions team", "Unlimited data retention", "HIPAA/SOC-2 compliance options", "Custom SLA and contracts"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <CheckCircle size={14} color="var(--primary)" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary" style={{ textAlign: "center", justifyContent: "center" }}>Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-sm" style={{ background: "linear-gradient(135deg, #0088cc 0%, #006699 100%)", textAlign: "center" }}>
        <div className="container">
          <h2 className="text-headline" style={{ color: "white", marginBottom: "16px" }}>Need custom SaaS solutions?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            We don&apos;t just build platforms; we help you customize, implement, and maintain them. Let&apos;s talk.
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
          }}>Talk to an Architect <ArrowRight size={15} /></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .product-layout { grid-template-columns: 1fr !important; gap: 40px !important; direction: ltr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
