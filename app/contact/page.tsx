"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <section style={{
        paddingTop: "calc(var(--nav-height) + 60px)",
        paddingBottom: "100px",
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%)",
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
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "80px" }} className="contact-layout">
            
            {/* Left Column: Info */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="section-label">Contact Us</div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}>
                Let&apos;s build something <span className="gradient-text">extraordinary</span>
              </h1>
              <p className="text-body-lg" style={{ marginBottom: "40px" }}>
                Ready to take your product from concept to code? Fill out the form or reach out directly. Our engineering team typically responds within 24 hours.
              </p>

              {/* Direct Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
                {[
                  { icon: Mail, label: "Email us directly", val: "arkenginetechnologies@gmail.com", href: "mailto:arkenginetechnologies@gmail.com" },
                  { icon: Phone, label: "Call our office", val: "+91 8870331488", href: "tel:+918870331488" },
                  { icon: MapPin, label: "Visit our HQ", val: "Salem, Tamil Nadu, India", href: "#" },
                ].map(({ icon: Icon, label, val, href }) => (
                  <div key={val} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      background: "rgba(0,136,204,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      flexShrink: 0
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                        {label}
                      </div>
                      <a href={href} style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"}
                      >
                        {val}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time SLA */}
              <div style={{
                background: "var(--bg-card)",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(0,200,100,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00C864",
                  flexShrink: 0
                }}>
                  <Clock size={16} />
                </div>
                <div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>Quick Response Guarantee</span>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>We review all inbound inquiries and reply in less than 1 business day.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <div className="glass-card" style={{ padding: "48px", background: "var(--bg-card)" }}>
                {isSubmitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "rgba(0,200,100,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00C864",
                      margin: "0 auto 24px"
                    }}>
                      <CheckCircle size={36} />
                    </div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "-0.02em" }}>
                      Message Sent Successfully!
                    </h2>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "340px", margin: "0 auto 32px" }}>
                      Thank you for reaching out to ArkEngine. A senior technical partner has been notified and will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                      Tell us about your project
                    </h2>
                    
                    {/* Name */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("name")}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid var(--border)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          fontSize: "0.9rem",
                          outline: "none",
                          fontFamily: "inherit"
                        }}
                      />
                      {errors.name && <span style={{ color: "#FF3C64", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.name.message}</span>}
                    </div>
 
                    {/* Email & Company Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid">
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>Work Email *</label>
                        <input
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: "10px",
                            border: "1px solid var(--border)",
                            background: "var(--bg-secondary)",
                            color: "var(--text-primary)",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontFamily: "inherit"
                          }}
                        />
                        {errors.email && <span style={{ color: "#FF3C64", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.email.message}</span>}
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>Company / Org</label>
                        <input
                          type="text"
                          placeholder="Acme Inc."
                          {...register("company")}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: "10px",
                            border: "1px solid var(--border)",
                            background: "var(--bg-secondary)",
                            color: "var(--text-primary)",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontFamily: "inherit"
                          }}
                        />
                      </div>
                    </div>
 
                    {/* Service Needed */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>Service Needed *</label>
                      <select
                        {...register("projectType")}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid var(--border)",
                          fontSize: "0.9rem",
                          outline: "none",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          fontFamily: "inherit"
                        }}
                      >
                        <option value="" style={{ background: "var(--bg-secondary)" }}>Select a service...</option>
                        <option value="ai-ml" style={{ background: "var(--bg-secondary)" }}>AI & Machine Learning</option>
                        <option value="saas" style={{ background: "var(--bg-secondary)" }}>SaaS Development</option>
                        <option value="software" style={{ background: "var(--bg-secondary)" }}>Custom Software</option>
                        <option value="web" style={{ background: "var(--bg-secondary)" }}>Web Development</option>
                        <option value="automation" style={{ background: "var(--bg-secondary)" }}>AI Automation</option>
                        <option value="cloud" style={{ background: "var(--bg-secondary)" }}>Cloud Solutions</option>
                        <option value="design" style={{ background: "var(--bg-secondary)" }}>UI/UX Design</option>
                        <option value="other" style={{ background: "var(--bg-secondary)" }}>Other / General Inquiry</option>
                      </select>
                      {errors.projectType && <span style={{ color: "#FF3C64", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.projectType.message}</span>}
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>Project details *</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about what you want to build, timelines, scope..."
                        {...register("message")}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid var(--border)",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          fontSize: "0.9rem",
                          outline: "none",
                          resize: "vertical",
                          fontFamily: "inherit"
                        }}
                      />
                      {errors.message && <span style={{ color: "#FF3C64", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.message.message}</span>}
                    </div>
 
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      style={{ justifyContent: "center", width: "100%", padding: "14px" }}
                    >
                      {loading ? "Sending..." : "Submit Inquiry"} <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
 
      {/* Google Maps Embed / Office Showcase Section */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label">Our Base</div>
            <h2 className="text-headline" style={{ marginBottom: "16px" }}>Our Headquarters</h2>
            <p className="text-body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
              Located in Salem, Tamil Nadu, India. Come say hello.
            </p>
          </div>
 
          <div style={{
            width: "100%",
            height: "450px",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-md)"
          }}>
            {/* Embedded interactive Google Maps iframe placeholder/styled embed for SF */}
            <iframe
              src="https://www.google.com/maps?q=Salem,+Tamil+Nadu,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.85)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ArkEngine Technologies Salem HQ"
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          .form-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </>
  );
}
