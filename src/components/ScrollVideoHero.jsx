"use client";

import { useEffect, useRef, useState } from "react";

const FOOD_ICONS = [
  {
    emoji: "🍕",
    label: "Pizza",
    x: "6%",
    y: "22%",
    delay: 0,
    size: "clamp(34px, 3.5vw, 56px)",
  },
  {
    emoji: "🍔",
    label: "Burger",
    x: "88%",
    y: "18%",
    delay: 0.3,
    size: "clamp(34px, 3.5vw, 56px)",
  },
  {
    emoji: "🍟",
    label: "Fries",
    x: "8%",
    y: "72%",
    delay: 0.6,
    size: "clamp(30px, 3vw, 48px)",
  },
  {
    emoji: "🌯",
    label: "Shawarma",
    x: "86%",
    y: "70%",
    delay: 0.9,
    size: "clamp(30px, 3vw, 50px)",
  },
];

export default function ScrollVideoHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroMounted, setHeroMounted] = useState(false);

  const START_TIME = 0.33;

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    let blobUrl = null;
    let duration = 5.04;
    let targetTime = START_TIME;
    let currentTime = START_TIME;
    let rafId = null;

    fetch("/videos/hero.mp4")
      .then((res) => res.blob())
      .then(async (blob) => {
        blobUrl = URL.createObjectURL(blob);
        video.src = blobUrl;

        video.onloadedmetadata = async () => {
          if (video.duration && !isNaN(video.duration) && video.duration > 0) {
            duration = video.duration;
          }
          try {
            await video.play();
            video.pause();
            video.currentTime = START_TIME;
          } catch (e) {
            video.currentTime = START_TIME;
          }
          setLoading(false);
          setHeroMounted(true);
        };
      })
      .catch(() => {
        video.src = "/videos/hero.mp4";
        setLoading(false);
        setHeroMounted(true);
      });

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const totalScroll = container.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, scrollY / totalScroll));
      setScrollProgress(progress);
      targetTime = START_TIME + progress * (duration - START_TIME);
    };

    const loop = () => {
      if (!loading && duration > 0) {
        const diff = targetTime - currentTime;

        if (Math.abs(diff) > 0.01) {
          currentTime += diff * 0.15;
          currentTime = Math.max(START_TIME, Math.min(duration, currentTime));

          if (video.readyState >= 2) {
            try {
              video.currentTime = currentTime;
            } catch (e) {
              // fail silently if video is busy
            }
          }
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(loop);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [loading]);

  // Smooth fade out as user scrolls
  const fadeProgress = Math.min(1, scrollProgress / 0.18);
  const textOpacity = heroMounted ? Math.max(0, 1 - fadeProgress) : 0;
  const textTranslateY = -fadeProgress * 40;
  const textScale = 1 - fadeProgress * 0.05;
  const textBlur = fadeProgress * 6;
  const isTextHidden = textOpacity <= 0.01;

  const scrollPercentDisplay = Math.round(scrollProgress * 100);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full select-none"
      style={{ height: "300vh", background: "var(--color-dark)" }}
    >
      {/* Sticky Fullscreen Video Window */}
      <div
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center z-10"
        style={{ background: "var(--color-dark)" }}
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          preload="auto"
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            imageRendering: "-webkit-optimize-contrast",
            filter: "contrast(1.15) brightness(0.95) saturate(1.25)",
          }}
        />

        {/* Cinematic Vignette */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            opacity: textOpacity > 0 ? 0.9 : 0.45,
            background: `
              linear-gradient(to bottom, rgba(12,9,6,0.8) 0%, rgba(12,9,6,0.2) 35%, rgba(12,9,6,0.2) 60%, rgba(12,9,6,0.92) 100%),
              radial-gradient(ellipse at center, transparent 30%, rgba(12,9,6,0.7) 100%)
            `,
          }}
        />

        {/* ─── Top Corner Badges ("NEW" / "FLAVOR") ─── */}
        <div
          className="absolute top-20 sm:top-24 left-5 sm:left-12 z-20 pointer-events-none transition-all duration-300"
          style={{
            opacity: textOpacity,
            display: isTextHidden ? "none" : "block",
          }}
        >
          <span
            className="corner-tag text-[0.65rem] sm:text-xs"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
          >
            NEW
          </span>
        </div>
        <div
          className="absolute top-20 sm:top-24 right-5 sm:right-12 z-20 pointer-events-none transition-all duration-300"
          style={{
            opacity: textOpacity,
            display: isTextHidden ? "none" : "block",
          }}
        >
          <span
            className="corner-tag text-[0.65rem] sm:text-xs"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
          >
            FLAVOR
          </span>
        </div>

        {/* ─── Center Hero Content (With generous vertical breathing room) ─── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4 sm:px-6 transition-all duration-150"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px) scale(${textScale})`,
            filter: `blur(${textBlur}px)`,
            display: isTextHidden ? "none" : "flex",
          }}
        >
          {/* Badge: "Proudly Present" */}
          <div
            className="badge-present mb-2 sm:mb-3 text-center"
            style={{
              color: "#ffffff",
              textShadow:
                "0 4px 25px rgba(0,0,0,0.9), 0 0 30px rgba(255,107,0,0.4)",
            }}
          >
            <span>Proudly </span>
            <span style={{ color: "var(--color-orange-bright)" }}>Present</span>
          </div>

          {/* Clean Title: "AK RESTAURANT" — scaled so 'RESTAURANT' never clips on mobile */}
          <div className="relative text-center my-2 sm:my-3 max-w-full px-2">
            <h1
              className="font-display font-black text-center whitespace-nowrap"
              style={{
                fontSize: "clamp(1.5rem, 5.8vw, 8.2rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                color: "#ffffff",
                textShadow:
                  "0 10px 50px rgba(0,0,0,0.9), 0 2px 25px rgba(255,107,0,0.25)",
              }}
            >
              AK RESTAURANT
            </h1>

            {/* Sub-label with proper margin */}
            <div className="mt-2.5 sm:mt-3 text-center">
              <span
                className="font-display font-extrabold"
                style={{
                  fontSize: "clamp(0.68rem, 1.1vw, 1.15rem)",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "var(--color-orange)",
                  textShadow: "0 2px 15px rgba(0,0,0,0.9)",
                }}
              >
                ISLAMABAD • ESTD 2024
              </span>
            </div>
          </div>

          {/* ─── Retro Editorial Manifesto Box — cleanly padded, no text cramming ─── */}
          <div className="w-full max-w-xl px-2 sm:px-4 my-4 sm:my-6">
            <div
              className="retro-manifesto"
              style={{
                paddingTop: "clamp(0.75rem, 1.8vw, 1.25rem)",
                paddingBottom: "clamp(0.75rem, 1.8vw, 1.25rem)",
                fontSize: "clamp(0.62rem, 0.78vw, 0.92rem)",
                lineHeight: "1.75",
              }}
            >
              <span>AK RESTAURANT — ARTISAN FLAVORS ARE A</span>
              <span className="rule-bar" />
              <span style={{ color: "var(--color-orange-bright)" }}>
                BOLD VINTAGE STYLE
              </span>
              <span> KITCHEN WITH STRONG CHARACTER</span>
              <span className="rule-bar-orange" />
              <span>
                AND FRESH RECIPES. MODERN TASTE WITH A CLEAR AND BOLD LOOK.
                IT&apos;S A VERY{" "}
              </span>
              <span className="rule-bar" />
              <span style={{ color: "var(--color-orange-bright)" }}>
                VERSATILE JOURNEY
              </span>
              <span> THAT </span>
              <span className="rule-bar-orange" />
              <span>WORKS GREAT IN EVERY BITE.</span>
            </div>
          </div>

          {/* Floating Food Emojis — Hidden on small mobile screens to prevent clutter! */}
          {FOOD_ICONS.map((icon, i) => (
            <div
              key={i}
              className="absolute pointer-events-none hidden sm:block"
              style={{
                left: icon.x,
                top: icon.y,
                fontSize: icon.size,
                opacity: textOpacity * 0.85,
                animation: `float ${3.2 + i * 0.5}s ease-in-out ${icon.delay}s infinite`,
                filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.8))",
                display: isTextHidden ? "none" : "block",
              }}
              aria-label={icon.label}
            >
              {icon.emoji}
            </div>
          ))}

          {/* Scroll Down Prompt with clean margin */}
          <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2">
            <span className="font-display font-bold text-[0.6rem] sm:text-xs tracking-[0.25em] uppercase text-white/90">
              Scroll to explore
            </span>
            <div
              className="w-[1.5px] h-6"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-orange), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
