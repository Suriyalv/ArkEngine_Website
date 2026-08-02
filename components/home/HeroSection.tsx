"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Users, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

const stats = [
  { value: 5, suffix: "", label: "Project Delivered", icon: Award },
  { value: 9, suffix: "", label: "Expert Developers", icon: Users },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {count}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "url('/images/homepageimg.jpg') center/cover no-repeat",
          zIndex: 0,
        }}
      />

      {/* Dark Gradient Overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(10, 15, 30, 0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className="container hero-content"
        style={{ position: "relative", zIndex: 10, textAlign: "center", width: "100%" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-display hero-title"
          style={{
            color: "#fff",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)"
          }}
        >
          Building{" "}
          <span style={{ color: "#4da6ff" }}>Intelligent</span>
          <br className="desktop-break" />
          {" "}Digital Products
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-body-lg hero-subtitle"
          style={{
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          An India-based startup crafting high-quality custom software solutions
          that transform how businesses operate at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="hero-ctas"
        >
          <Link href="/contact" className="btn-primary hero-btn">
            Let&apos;s Build Together <ArrowRight size={16} />
          </Link>
          <Link href="/services" className="hero-btn-secondary" style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "100px",
            color: "#fff",
            fontWeight: 600,
            transition: "all 0.2s ease",
            justifyContent: "center"
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
          >
            Explore Services <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="stats-grid"
        >
          {stats.map(({ value, suffix, label, icon: Icon }) => (
            <motion.div
              key={label}
              className="stat-card"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.5)", background: "rgba(255, 255, 255, 0.1)" }}
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                transition: "all 0.3s ease"
              }}
            >
              <div className="stat-icon-wrapper" style={{
                borderRadius: 8,
                background: "rgba(77, 166, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}>
                <Icon size={18} color="#4da6ff" />
              </div>
              <div className="stat-text-container">
                <div className="stat-value" style={{ fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="stat-label" style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 10
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: 20,
          height: 32,
          borderRadius: 10,
          border: "1.5px solid rgba(255,255,255,0.2)",
          display: "flex",
          justifyContent: "center",
          paddingTop: "6px",
        }}>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: 3,
              height: 6,
              borderRadius: 2,
              background: "#4da6ff",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        /* Base / Desktop Styles */
        .hero-section {
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 80px;
        }
        
        .hero-content {
          padding: 40px 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-title {
          max-width: 900px;
          margin: 0 auto 24px;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
        }

        .hero-subtitle {
          max-width: 620px;
          margin: 0 auto 40px;
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        .hero-btn, .hero-btn-secondary {
          font-size: 1.05rem;
          padding: 16px 32px;
          width: auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 460px;
          margin: 0 auto;
          width: 100%;
        }

        .stat-card {
          padding: 24px 16px;
        }

        .stat-icon-wrapper {
          width: 40px;
          height: 40px;
          margin-bottom: 16px !important;
        }

        .stat-value {
          font-size: 2.2rem;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.85rem;
        }

        .scroll-indicator {
          bottom: 40px;
        }

        /* Tablet / Small Desktop */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .stats-grid {
            gap: 20px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: calc(var(--nav-height) + 20px) !important;
            padding-bottom: 100px;
          }
          
          .desktop-break {
            display: none;
          }

          .hero-title {
            font-size: 2.75rem;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 32px;
            padding: 0 10px;
          }

          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 12px;
            margin-bottom: 48px;
          }

          .hero-btn, .hero-btn-secondary {
            width: 100%;
            padding: 14px 20px;
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 300px;
          }

          .stat-card {
            padding: 20px;
            display: flex;
            align-items: center;
            text-align: left;
            gap: 16px;
          }

          .stat-icon-wrapper {
            margin-bottom: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            flex-shrink: 0;
            width: 44px;
            height: 44px;
          }
          
          .stat-text-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .stat-value {
            font-size: 1.8rem;
            margin-bottom: 2px;
            text-align: left;
          }

          .stat-label {
            font-size: 0.8rem;
            text-align: left;
          }

          .scroll-indicator {
            bottom: 20px;
            transform: translateX(-50%) scale(0.85);
          }
        }

        /* Very Small Phones */
        @media (max-width: 380px) {
          .hero-title {
            font-size: 2.25rem;
          }
          
          .hero-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
