"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Side = "left" | "right";

interface Founder {
  id: string;
  name: string;
  role: string;
  techDomain: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
  left: number;
  zIndex: number;
  side: Side;
  box: [number, number, number, number]; // left%, top%, width%, height% of the person's frame
  isDefaultFront?: boolean;
}

interface AcronymSegment {
  char: string;
  expansion: string;
}

interface RoleConfig {
  prefix?: string;
  segments: AcronymSegment[];
  short: string;
  fullTitle: string;
}

const ROLE_CONFIGS: Record<string, RoleConfig> = {
  jaghadeep: {
    prefix: "",
    segments: [
      { char: "C", expansion: "hief" },
      { char: "D", expansion: "ata" },
      { char: "O", expansion: "fficer" },
    ],
    short: "CDO",
    fullTitle: "Chief Data Officer",
  },
  meganath: {
    prefix: "",
    segments: [
      { char: "C", expansion: "hief" },
      { char: "O", expansion: "perating" },
      { char: "O", expansion: "fficer" },
    ],
    short: "COO",
    fullTitle: "Chief Operating Officer",
  },
  suriya: {
    prefix: "Founder & ",
    segments: [
      { char: "C", expansion: "hief" },
      { char: "E", expansion: "xecutive" },
      { char: "O", expansion: "fficer" },
    ],
    short: "Founder & CEO",
    fullTitle: "Founder & Chief Executive Officer",
  },
  dharani: {
    prefix: "",
    segments: [
      { char: "C", expansion: "hief" },
      { char: "F", expansion: "inancial" },
      { char: "O", expansion: "fficer" },
    ],
    short: "CFO",
    fullTitle: "Chief Financial Officer",
  },
  kabhilan: {
    prefix: "",
    segments: [
      { char: "C", expansion: "hief" },
      { char: "I", expansion: "nformation" },
      { char: "O", expansion: "fficer" },
    ],
    short: "CIO",
    fullTitle: "Chief Information Officer",
  },
  madhan: {
    prefix: "",
    segments: [
      { char: "C", expansion: "hief" },
      { char: "T", expansion: "echnical" },
      { char: "O", expansion: "fficer" },
    ],
    short: "CTO",
    fullTitle: "Chief Technical Officer",
  },
};

function AnimatedRoleBadge({
  founderId,
  isPersonActive,
  isMobile,
}: {
  founderId: string;
  isPersonActive?: boolean;
  isMobile?: boolean;
}) {
  const [isManualExpanded, setIsManualExpanded] = useState(false);
  const [autoExpanded, setAutoExpanded] = useState(false);
  const cfg = ROLE_CONFIGS[founderId];

  useEffect(() => {
    if (isPersonActive) {
      const timer = setTimeout(() => {
        setAutoExpanded(true);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setAutoExpanded(false);
      setIsManualExpanded(false);
    }
  }, [isPersonActive]);

  if (!cfg) return null;

  const isExpanded = isMobile
    ? isManualExpanded
    : (isPersonActive && autoExpanded) || isManualExpanded;

  return (
    <div
      className={`ts-role-badge ${isExpanded ? "ts-role-expanded" : ""} ${isMobile ? "ts-role-mobile" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsManualExpanded((prev) => !prev);
      }}
      title={isExpanded ? "Click to collapse" : "Click to expand full role"}
    >
      <div className="ts-role-content">
        {cfg.prefix && <span className="ts-role-prefix">{cfg.prefix}</span>}
        <span className="ts-acronym-container">
          {cfg.segments.map((seg, i) => (
            <span
              key={i}
              className="ts-acronym-segment"
              style={{ "--seg-delay": `${i * 0.28}s` } as React.CSSProperties}
            >
              <span className="ts-acronym-char">{seg.char}</span>
              <span className="ts-acronym-reveal">
                <span className="ts-acronym-expansion">{seg.expansion}</span>
              </span>
              {i < cfg.segments.length - 1 && <span className="ts-acronym-space" />}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

const FOUNDERS: Founder[] = [
  {
    id: "jaghadeep",
    name: "Jaghadeep S",
    role: "CDO",
    techDomain: "UI/UX & Data Science",
    img: "/images/team/Jaghadeep.png",
    imgWidth: 1080,
    imgHeight: 1350,
    left: 0,
    zIndex: 1,
    side: "right",
    box: [35, 9, 29, 32],
  },
  {
    id: "meganath",
    name: "Meganath V",
    role: "COO",
    techDomain: "Software Development",
    img: "/images/team/meganath.png",
    imgWidth: 1215,
    imgHeight: 1519,
    left: 172,
    zIndex: 1,
    side: "right",
    box: [37, 8, 34, 34],
  },
  {
    id: "suriya",
    name: "Suriya L V",
    role: "Founder & CEO",
    techDomain: "Gen AI, ML & DL",
    img: "/images/team/suriya.png",
    imgWidth: 1215,
    imgHeight: 1519,
    left: 344,
    zIndex: 3,
    side: "right",
    box: [35, 6, 30, 31],
    isDefaultFront: true,
  },
  {
    id: "dharani",
    name: "Dharani Dharan P",
    role: "CFO",
    techDomain: "Application Development",
    img: "/images/team/dharani.png",
    imgWidth: 1215,
    imgHeight: 1519,
    left: 516,
    zIndex: 2,
    side: "right",
    box: [36, 9, 32, 33],
  },
  {
    id: "kabhilan",
    name: "Kabhilan V S",
    role: "CIO",
    techDomain: "UI/UX and Full Stack Development",
    img: "/images/team/kabhilan.png",
    imgWidth: 1080,
    imgHeight: 1350,
    left: 688,
    zIndex: 1,
    side: "left",
    box: [35, 7, 29, 32],
  },
  {
    id: "madhan",
    name: "Madhan P",
    role: "CTO",
    techDomain: "Software Development & Cyber Security",
    img: "/images/team/Madhan.png",
    imgWidth: 1080,
    imgHeight: 1350,
    left: 860,
    zIndex: 0,
    side: "left",
    box: [35, 10, 30, 33],
  },
];

const PW = 280;
const PH = 350;
const FACE_PAD = 5;
const DIAG = 34;
const HORIZ = 34;
const GAP = -3;

function computeGeometry(box: Founder["box"], side: Side) {
  const [leftPct, topPct, widthPct, heightPct] = box;

  const rawLeft = (leftPct / 100) * PW;
  const rawTop = (topPct / 100) * PH;
  const rawRight = rawLeft + (widthPct / 100) * PW;
  const rawBottom = rawTop + (heightPct / 100) * PH;

  const faceBox = {
    left: rawLeft - FACE_PAD,
    top: rawTop - FACE_PAD,
    right: rawRight + FACE_PAD,
    bottom: rawBottom + FACE_PAD,
  };

  const startY = faceBox.top;
  const bendY = startY - DIAG;
  let startX: number, bendX: number, endX: number;
  let descBoxStyle: { left?: number; right?: number };

  if (side === "right") {
    startX = faceBox.right;
    bendX = startX + DIAG;
    endX = bendX + HORIZ;
    descBoxStyle = { left: endX };
  } else {
    startX = faceBox.left;
    bendX = startX - DIAG;
    endX = bendX - HORIZ;
    descBoxStyle = { right: PW - endX };
  }

  return {
    faceBox: {
      left: faceBox.left,
      top: faceBox.top,
      width: faceBox.right - faceBox.left,
      height: faceBox.bottom - faceBox.top,
    },
    points: `${startX},${startY} ${bendX},${bendY} ${endX},${bendY}`,
    dot: { cx: startX, cy: startY },
    descBoxStyle: { ...descBoxStyle, bottom: PH - bendY + GAP },
  };
}

const GEOMETRY = Object.fromEntries(
  FOUNDERS.map((f) => [f.id, computeGeometry(f.box, f.side)])
);

const DEFAULT_FRONT_ID = FOUNDERS.find((f) => f.isDefaultFront)?.id ?? FOUNDERS[0].id;

export default function TeamShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const frontId = activeId ?? DEFAULT_FRONT_ID;

  return (
    <div className="ts-wrap">
      <div className="ts-stage">
        {FOUNDERS.map((f) => {
          const geo = GEOMETRY[f.id];
          const isActive = f.id === activeId;
          const isFront = f.id === frontId;
          return (
            <div
              key={f.id}
              className={`ts-person${isFront ? " ts-front" : ""}${isActive ? " ts-active" : ""}`}
              style={{ left: f.left, zIndex: isActive ? 50 : f.zIndex }}
              tabIndex={0}
              onMouseEnter={() => setActiveId(f.id)}
              onMouseLeave={() => setActiveId((current) => (current === f.id ? null : current))}
              onFocus={() => setActiveId(f.id)}
              onBlur={() => setActiveId((current) => (current === f.id ? null : current))}
            >
              <Image
                src={f.img}
                alt={f.name}
                width={f.imgWidth}
                height={f.imgHeight}
                style={{ width: "100%", height: "auto", display: "block", pointerEvents: "none" }}
                priority={f.isDefaultFront}
              />
              <div
                className="ts-face-box"
                style={{
                  left: geo.faceBox.left,
                  top: geo.faceBox.top,
                  width: geo.faceBox.width,
                  height: geo.faceBox.height,
                }}
              />
              <svg className="ts-connector" width={PW} height={PH}>
                <polyline points={geo.points} />
                <circle cx={geo.dot.cx} cy={geo.dot.cy} r={3.5} />
              </svg>
              <div className="ts-desc-box" style={geo.descBoxStyle}>
                <div className="ts-desc-row">
                  <span className="ts-label">Name</span>
                  <span>:</span>
                  <span className="ts-value">{f.name}</span>
                </div>
                <div className="ts-desc-row">
                  <span className="ts-label">Role</span>
                  <span>:</span>
                  <div className="ts-value" style={{ display: "flex", alignItems: "center" }}>
                    <AnimatedRoleBadge founderId={f.id} isPersonActive={isActive} />
                  </div>
                </div>
                <div className="ts-desc-row">
                  <span className="ts-label">Tech Domain</span>
                  <span>:</span>
                  <span className="ts-value">{f.techDomain}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="ts-hint">Hover a photo to see who&apos;s who</p>

      <div className="ts-mobile-grid">
        {FOUNDERS.map((f) => (
          <div key={f.id} className="ts-mobile-card">
            <div className="ts-mobile-avatar">
              <Image
                src={f.img}
                alt={f.name}
                width={f.imgWidth}
                height={f.imgHeight}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <h3 className="ts-mobile-name">{f.name}</h3>
            <div className="ts-mobile-role-wrap">
              <AnimatedRoleBadge founderId={f.id} isMobile={true} />
            </div>
            <p className="ts-mobile-degree">{f.techDomain}</p>
          </div>
        ))}
      </div>

      <style>{`
        .ts-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ts-stage {
          position: relative;
          width: ${1140}px;
          max-width: 100%;
          height: ${PH + 110}px;
        }

        .ts-person {
          position: absolute;
          bottom: 0;
          width: ${PW}px;
          cursor: default;
          outline: none;
          transition: transform 0.35s ease, filter 0.35s ease;
        }

        .ts-person.ts-front {
          transform: translateY(-8px) scale(1.03);
          filter: drop-shadow(0 22px 30px rgba(0,136,204,0.35));
        }

        .ts-person.ts-active {
          z-index: 50 !important;
        }

        .ts-face-box {
          position: absolute;
          border: 2.5px solid var(--primary);
          border-radius: 3px;
          box-shadow: 0 0 14px rgba(0,136,204,0.6), inset 0 0 10px rgba(0,136,204,0.15);
          opacity: 0;
          transform: scale(1.12);
          transform-origin: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }

        .ts-person.ts-active .ts-face-box {
          opacity: 1;
          transform: scale(1);
        }

        .ts-desc-box {
          position: absolute;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(0, 136, 204, 0.35);
          border-radius: 12px;
          padding: 14px 20px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3), 0 0 24px rgba(0, 136, 204, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px) scale(0.97);
          transition: opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          min-width: 310px;
          max-width: 440px;
          width: max-content;
          z-index: 2;
        }

        .ts-person.ts-active .ts-desc-box {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .ts-connector {
          position: absolute;
          top: 0;
          left: 0;
          overflow: visible;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ts-person.ts-active .ts-connector {
          opacity: 1;
        }

        .ts-connector polyline {
          fill: none;
          stroke: var(--primary-light);
          stroke-width: 2;
        }

        .ts-connector circle {
          fill: var(--primary-light);
        }

        .ts-desc-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 5px;
          margin-bottom: 7px;
          border-bottom: 1px solid var(--border);
          font-size: 0.92rem;
          white-space: nowrap;
        }

        .ts-desc-row:last-child {
          margin-bottom: 0;
          border-bottom: none;
          padding-bottom: 0;
        }

        .ts-label {
          font-weight: 600;
          letter-spacing: 0.5px;
          min-width: 92px;
          color: var(--primary-light);
        }

        .ts-value {
          font-weight: 400;
          color: var(--text-primary);
        }

        /* ================= Seamless Animated Role ================= */
        .ts-role-badge {
          display: inline-flex;
          align-items: center;
          background: transparent;
          border: none;
          outline: none;
          padding: 0;
          cursor: pointer;
          user-select: none;
          position: relative;
          box-shadow: none;
        }

        .ts-role-badge:hover {
          background: transparent;
          border-color: transparent;
          box-shadow: none;
          transform: none;
        }

        .ts-role-badge.ts-role-expanded {
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        }

        .ts-role-content {
          display: inline-flex;
          align-items: baseline;
          white-space: nowrap;
        }

        .ts-role-prefix {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.86rem;
          margin-right: 4px;
          letter-spacing: -0.2px;
        }

        .ts-acronym-container {
          display: inline-flex;
          align-items: baseline;
        }

        .ts-acronym-segment {
          display: inline-flex;
          align-items: baseline;
        }

        .ts-acronym-char {
          color: #38bdf8;
          font-weight: 800;
          font-size: 0.94rem;
          letter-spacing: 0.5px;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.45);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ts-role-expanded .ts-acronym-char {
          color: #38bdf8;
          text-shadow: 0 0 14px rgba(56, 189, 248, 0.7);
        }

        .ts-acronym-reveal {
          display: inline-grid;
          grid-template-columns: 0fr;
          transition: grid-template-columns 0.42s cubic-bezier(0.25, 1, 0.5, 1);
          transition-delay: var(--seg-delay, 0s);
          vertical-align: baseline;
        }

        .ts-role-expanded .ts-acronym-reveal {
          grid-template-columns: 1fr;
        }

        .ts-acronym-expansion {
          min-width: 0;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          opacity: 0;
          transform: translateX(-3px);
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.88rem;
          letter-spacing: -0.2px;
          transition: opacity 0.35s ease, transform 0.42s cubic-bezier(0.25, 1, 0.5, 1);
          transition-delay: var(--seg-delay, 0s);
        }

        .ts-role-expanded .ts-acronym-expansion {
          opacity: 1;
          transform: translateX(0);
        }

        .ts-acronym-space {
          display: inline-block;
          width: 0;
          transition: width 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          transition-delay: var(--seg-delay, 0s);
        }

        .ts-role-expanded .ts-acronym-space {
          width: 5px;
        }

        .ts-mobile-role-wrap {
          display: flex;
          justify-content: center;
          margin: 4px 0 8px;
        }

        .ts-role-mobile {
          margin: 0 auto;
        }

        .ts-hint {
          margin-top: 8px;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }

        @media (max-width: 1199px) and (min-width: 961px) {
          .ts-stage { transform: scale(0.8); transform-origin: top center; }
        }

        @media (max-width: 960px) and (min-width: 769px) {
          .ts-stage { transform: scale(0.6); transform-origin: top center; }
        }

        .ts-mobile-grid {
          display: none;
        }

        @media (max-width: 768px) {
          .ts-stage,
          .ts-hint {
            display: none;
          }

          .ts-mobile-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 100%;
          }

          .ts-mobile-card {
            padding: 28px 20px;
            text-align: center;
            background: var(--bg-card);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
          }

          .ts-mobile-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid rgba(0,136,204,0.15);
            margin: 0 auto 16px;
          }

          .ts-mobile-name {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 4px;
          }

          .ts-mobile-degree {
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }
        }

        @media (max-width: 480px) {
          .ts-mobile-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
