"use client";

import Link from "next/link";
import { Zap, ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  Services: [
    { label: "AI & Machine Learning", href: "/services#ai-ml" },
    { label: "Custom Software", href: "/services#software" },
    { label: "SaaS Development", href: "/services#saas" },
    { label: "Web Development", href: "/services#web" },
    { label: "Cloud Solutions", href: "/services#cloud" },
    { label: "AI Automation", href: "/services#automation" },
  ],
  Resources: [
    { label: "Products", href: "/products" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const socials = [
  {
    icon: (props: SocialIconProps) => (
      <svg viewBox="0 0 24 24" width={props.size || 14} height={props.size || 14} fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/Arkenginetechno",
    label: "X (Twitter)"
  },
  {
    icon: (props: SocialIconProps) => (
      <svg viewBox="0 0 24 24" width={props.size || 14} height={props.size || 14} fill="currentColor" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/arkengine/",
    label: "LinkedIn"
  },
  {
    icon: (props: SocialIconProps) => (
      <svg viewBox="0 0 24 24" width={props.size || 14} height={props.size || 14} fill="currentColor" {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    href: "https://github.com/arkengine-technologies",
    label: "GitHub"
  },
  {
    icon: (props: SocialIconProps) => (
      <svg viewBox="0 0 24 24" width={props.size || 14} height={props.size || 14} fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
      </svg>
    ),
    href: "https://www.instagram.com/arkenginetechnologies?igsh=djZ0aTdwZmFhcnk2",
    label: "Instagram"
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-secondary)",
      color: "var(--text-primary)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top separator line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
      }} />
      <div style={{
        position: "absolute",
        top: "-100px",
        left: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,136,204,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,136,204,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Main footer grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "40px",
          padding: "60px 0",
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px" }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "#0088cc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Zap size={18} color="#ffffff" fill="#ffffff" />
              </div>
              <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                ArkEngine<span style={{ color: "var(--text-tertiary)" }}>.</span>
              </span>
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "260px", marginBottom: "24px" }}>
              Building intelligent digital products for the world&apos;s most ambitious companies.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {[
                { icon: Mail, text: "arkenginetechnologies@gmail.com" },
                { icon: Phone, text: "+91 8870331488" },
                { icon: MapPin, text: "Salem, Tamil Nadu, India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", fontSize: "0.825rem" }}>
                  <Icon size={13} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0088cc";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#0088cc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-card)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "var(--text-tertiary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#0088cc")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} ArkEngine Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                style={{ color: "var(--text-tertiary)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0088cc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
