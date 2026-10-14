"use client";

import { useEffect, useState } from "react";

const FOOD_ITEMS = [
  { emoji: "🍕", left: "5%", delay: "0s", size: "2rem" },
  { emoji: "🍔", left: "17%", delay: "0.15s", size: "2.5rem" },
  { emoji: "🍟", left: "29%", delay: "0.3s", size: "2rem" },
  { emoji: "🌮", left: "41%", delay: "0.45s", size: "2.25rem" },
  { emoji: "🍗", left: "53%", delay: "0.6s", size: "2.5rem" },
  { emoji: "🍕", left: "65%", delay: "0.75s", size: "2rem" },
  { emoji: "🍔", left: "77%", delay: "0.9s", size: "2.5rem" },
  { emoji: "🍟", left: "89%", delay: "1.05s", size: "2rem" },
  { emoji: "🌯", left: "11%", delay: "0.2s", size: "2.25rem" },
  { emoji: "🍩", left: "35%", delay: "0.5s", size: "2rem" },
  { emoji: "🥪", left: "59%", delay: "0.8s", size: "2.25rem" },
  { emoji: "🍕", left: "83%", delay: "1.1s", size: "2rem" },
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let animationFrame;
    let startTime;
    let pageLoaded = document.readyState === "complete";

    const handleLoad = () => {
      pageLoaded = true;
    };

    window.addEventListener("load", handleLoad);

    const updateProgress = (timestamp) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      // Progress approaches 90% while the page loads.
      const loadingProgress = Math.min(
        90,
        Math.floor((elapsed / (elapsed + 1200)) * 100),
      );

      setProgress((current) => Math.max(current, loadingProgress));

      if (pageLoaded) {
        setProgress(100);
        return;
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      window.removeEventListener("load", handleLoad);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 350);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0906] transition-all duration-700 ${
        fading
          ? "pointer-events-none scale-[1.03] opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b00]/15 blur-[90px] sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      />

      {/* Fast falling food */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {FOOD_ITEMS.map((food, index) => (
          <span
            key={index}
            className="absolute top-[-70px] animate-[foodFall_1.5s_linear_infinite]"
            style={{
              left: food.left,
              animationDelay: food.delay,
              fontSize: food.size,
              lineHeight: 1,
              filter: "drop-shadow(0 5px 12px rgba(0,0,0,0.6))",
              willChange: "transform, opacity",
            }}
          >
            {food.emoji}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 sm:px-5 text-center">
        {/* Top Location Label */}
        <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#ffa347] sm:mb-5 sm:text-xs sm:tracking-[0.4em]">
          Islamabad · Sector F-11
        </p>

        {/* Freshly Sizzling Divider */}
        <div className="mb-4 flex w-full items-center justify-center gap-2 sm:mb-5 sm:gap-4">
          <span className="h-px w-6 flex-shrink-0 bg-[#ff6b00]/70 sm:w-14" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs sm:tracking-[0.3em]">
            Freshly Sizzling
          </span>
          <span className="h-px w-6 flex-shrink-0 bg-[#ff6b00]/70 sm:w-14" />
        </div>

        {/* Main Title (Using Flex Wrap so it stacks cleanly on tiny screens) */}
        <h1 className="font-display flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 !text-[clamp(2.2rem,8vw,6.5rem)] font-black !leading-none tracking-[-0.05em] text-white">
          <span>AK</span>
          <span className="text-[#ff6b00]">RESTAURANT</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[280px] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-[#b8aa98] sm:mt-6 sm:max-w-md sm:text-sm sm:tracking-[0.18em]">
          Bold flavors. Unforgettable cravings.
        </p>

        {/* Loading Progress Bar Area */}
        <div className="mt-10 w-full max-w-[260px] sm:mt-12 sm:max-w-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
              {progress < 100 ? "PREPARING YOUR EXPERIENCE" : "READY TO SERVE"}
            </span>
            <span className="font-display text-xs font-extrabold tabular-nums text-[#ff6b00] sm:text-sm">
              {progress}%
            </span>
          </div>

          <div
            className="h-[3px] w-full overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Loading AK Restaurant"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffa347] shadow-[0_0_18px_rgba(255,107,0,0.65)] transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom Tagline */}
        <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 sm:mt-5 sm:tracking-[0.35em]">
          Good food. Good mood.
        </p>
      </div>
    </div>
  );
}
