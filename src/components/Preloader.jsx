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
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-5 text-center">
        <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#ffa347] sm:text-xs">
          Islamabad · Sector F-11
        </p>

        <div className="mb-5 flex items-center gap-3 sm:gap-4">
          <span className="h-px w-8 bg-[#ff6b00]/70 sm:w-14" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Freshly Sizzling
          </span>

          <span className="h-px w-8 bg-[#ff6b00]/70 sm:w-14" />
        </div>

        <h1 className="font-display !text-[clamp(2.5rem,9vw,6.5rem)] !leading-[0.9] tracking-[-0.05em] text-white">
          AK
          <span className="ml-3 text-[#ff6b00] sm:ml-5">RESTAURANT</span>
        </h1>

        <p className="mt-6 max-w-md text-xs font-semibold uppercase tracking-[0.18em] text-[#b8aa98] sm:text-sm">
          Bold flavors. Unforgettable cravings.
        </p>

        {/* Loading progress */}
        <div className="mt-12 w-full max-w-xs sm:max-w-sm">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              {progress < 100 ? "PREPARING YOUR EXPERIENCE" : "READY TO SERVE"}
            </span>

            <span className="font-display text-sm font-extrabold tabular-nums text-[#ff6b00]">
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

        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
          Good food. Good mood.
        </p>
      </div>
    </div>
  );
}
