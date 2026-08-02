"use client";

import { useState } from "react";
import Image from "next/image";

type Side = "left" | "right";

interface Founder {
  id: string;
  name: string;
  age: number;
  role: string;
  degree: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
  left: number;
  zIndex: number;
  side: Side;
  box: [number, number, number, number]; // left%, top%, width%, height% of the person's frame
  isDefaultFront?: boolean;
}

const FOUNDERS: Founder[] = [
  {
    id: "meganath",
    name: "Meganath V",
    age: 22,
    role: "COO",
    degree: "M.Sc Software Systems",
    img: "/images/team/meganath.png",
    imgWidth: 1215,
    imgHeight: 1519,
    left: 40,
    zIndex: 1,
    side: "right",
    box: [37, 8, 34, 34],
  },
  {
    id: "suriya",
    name: "Suriya L V",
    age: 22,
    role: "Founder & CEO",
    degree: "M.Sc Software",
    img: "/images/team/suriya.png",
    imgWidth: 1215,
    imgHeight: 1519,
    left: 228,
    zIndex: 3,
    side: "right",
    box: [35, 6, 30, 31],
    isDefaultFront: true,
  },
  {
    id: "dharani",
    name: "Dharani Dharan",
    age: 22,
    role: "CFO",
    degree: "M.Sc Software",
    img: "/images/team/dharani.png",
    imgWidth: 1215,
    imgHeight: 1519,
    left: 416,
    zIndex: 2,
    side: "right",
    box: [36, 9, 32, 33],
  },
  {
    id: "kabhilan",
    name: "Kabhilan V S",
    age: 22,
    role: "CIO",
    degree: "M.Sc Software Systems",
    img: "/images/team/kabhilan.png",
    imgWidth: 1080,
    imgHeight: 1350,
    left: 604,
    zIndex: 1,
    side: "left",
    box: [35, 7, 29, 32],
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
                  <span className="ts-label">Age</span>
                  <span>:</span>
                  <span className="ts-value">{f.age}</span>
                </div>
                <div className="ts-desc-row">
                  <span className="ts-label">Role</span>
                  <span>:</span>
                  <span className="ts-value">{f.role}</span>
                </div>
                <div className="ts-desc-row">
                  <span className="ts-label">Degree</span>
                  <span>:</span>
                  <span className="ts-value">{f.degree}</span>
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
            <p className="ts-mobile-role">{f.role}</p>
            <p className="ts-mobile-degree">{f.degree}</p>
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
          width: ${928}px;
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
          backdrop-filter: blur(12px);
          border: 2px solid var(--primary);
          border-radius: 8px;
          padding: 12px 18px;
          box-shadow: 0 14px 30px rgba(0,136,204,0.28), 0 0 0 1px rgba(0,136,204,0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
          width: max-content;
          z-index: 2;
        }

        .ts-person.ts-active .ts-desc-box {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
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
          align-items: baseline;
          gap: 8px;
          padding-bottom: 4px;
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
          min-width: 60px;
          color: var(--primary-light);
        }

        .ts-value {
          font-weight: 400;
          color: var(--text-primary);
        }

        .ts-hint {
          margin-top: 8px;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }

        @media (max-width: 960px) and (min-width: 769px) {
          .ts-stage { transform: scale(0.8); transform-origin: top center; }
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

          .ts-mobile-role {
            font-size: 0.8rem;
            color: #0088cc;
            font-weight: 600;
            margin-bottom: 6px;
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
