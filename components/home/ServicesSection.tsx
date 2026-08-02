"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Code2, Globe, Layers, Palette, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software engineered to exact specifications, solving unique business challenges with precision.",
    tags: ["React", "Node.js", "Python"],
    href: "/services#software",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "End-to-end SaaS product development from architecture to launch — scalable, secure, and production-ready.",
    tags: ["Next.js", "Supabase", "Stripe"],
    href: "/services#saas",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Premium digital experiences built with the latest web technologies, optimized for performance and conversion.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "/services#web",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that converts visitors into customers — from wireframes to pixel-perfect interfaces.",
    tags: ["Figma", "Design System", "Prototyping"],
    href: "/services#design",
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="service-card" style={{ opacity: 0 }}>
      <Link
        href={service.href}
        style={{ textDecoration: "none", display: "block", height: "100%" }}
      >
        <div
          className="glass-card"
          style={{
            padding: "32px",
            height: "100%",
            transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0, 136, 204, 0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
          }}
        >
          <div style={{
            width: 52,
            height: 52,
            borderRadius: "14px",
            background: "rgba(0,136,204,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
            <service.icon size={24} color="var(--primary)" />
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
            {service.title}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
            {service.description}
          </p>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
            {service.tags.map((tag) => (
              <span key={tag} style={{
                padding: "3px 10px",
                background: "rgba(0,136,204,0.07)",
                border: "1px solid rgba(0,136,204,0.12)",
                borderRadius: "100px",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--primary)",
              }}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600 }}>
            Learn more <ArrowRight size={13} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
      
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-title" style={{ textAlign: "center", marginBottom: "64px", opacity: 0 }}>
          <div className="section-label">Our Services</div>
          <h2 className="text-headline" style={{ marginBottom: "16px" }}>
            Everything you need to{" "}
            <span className="gradient-text">build &amp; scale</span>
          </h2>
          <p className="text-body-lg" style={{ maxWidth: "560px", margin: "0 auto" }}>
            From initial concept to production deployment, we deliver end-to-end technology solutions that drive measurable business results.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
          className="services-grid"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/services" className="btn-secondary">
            Explore All Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .services-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
