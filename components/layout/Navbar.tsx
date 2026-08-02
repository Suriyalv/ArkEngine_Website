"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const forceLightText = isHome && !scrolled;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          background: scrolled
            ? "var(--glass-bg)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image
              src={mounted && theme === "light" ? "/images/logo-light.png" : "/images/logo.png"}
              alt="ArkEngine logo"
              width={36}
              height={36}
              style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0 }}
              priority
            />
            <span style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: forceLightText ? "#ffffff" : "var(--text-primary)",
              letterSpacing: "-0.02em",
              transition: "color 0.3s ease"
            }}>
              ArkEngine<span style={{ color: "var(--primary)" }}>.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  padding: "8px 16px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: pathname === link.href 
                    ? "var(--primary)" 
                    : (forceLightText ? "rgba(255, 255, 255, 0.85)" : "var(--text-secondary)"),
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.01em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{
                background: "none",
                border: forceLightText ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid var(--border)",
                cursor: "pointer",
                padding: "8px",
                color: forceLightText ? "#ffffff" : "var(--text-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              aria-label="Toggle theme"
            >
              {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <Sun size={18} />}
            </button>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.875rem" }}
            >
              Get Started
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                color: forceLightText ? "#ffffff" : "var(--text-primary)",
                borderRadius: "8px",
                transition: "color 0.3s ease"
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(10,15,22,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          padding: "calc(var(--nav-height) + 24px) 24px 40px",
          animation: "scaleIn 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  padding: "16px 20px",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: pathname === link.href ? "var(--primary)" : "var(--text-secondary)",
                  textDecoration: "none",
                  borderRadius: "12px",
                  transition: "color 0.2s",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
