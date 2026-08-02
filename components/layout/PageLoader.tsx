"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || anchor.target === "_blank") return;
      if (/^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const [path] = href.split("#");
      if (!path || path === pathname) return;

      setLoading(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setLoading(false), 4000);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  return (
    <div
      className={`page-loader${loading ? " page-loader-active" : ""}`}
      aria-hidden={!loading}
      role="status"
    >
      <div className="engine-wrap">
        <div className="spinner" />
        <p className="engine-text">Loading&hellip;</p>
      </div>

      <style>{`
        .page-loader {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.35s ease, visibility 0.35s ease;
        }

        .page-loader-active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .engine-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid var(--border);
          border-top-color: var(--primary);
          animation: spin 0.7s linear infinite;
        }

        .engine-text {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.04em;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
