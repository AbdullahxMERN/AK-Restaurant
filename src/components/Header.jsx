"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        id="site-header"
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(12, 9, 6, 0.94)"
            : "linear-gradient(180deg, rgba(12,9,6,0.7) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 107, 0, 0.2)"
            : "1px solid transparent",
        }}
      >
        <div className="section-container">
          <div
            className="flex items-center justify-between"
            style={{ height: "clamp(60px, 5.5vw, 88px)" }}
          >
            {/* Logo — Bold Retro Typography */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
            >
              <div
                className="flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-105"
                style={{
                  width: "clamp(38px, 3.2vw, 48px)",
                  height: "clamp(38px, 3.2vw, 48px)",
                  background: "var(--color-orange)",
                  boxShadow: "0 4px 20px rgba(255, 107, 0, 0.4)",
                }}
              >
                <span
                  className="font-display font-black text-white"
                  style={{
                    fontSize: "clamp(16px, 1.3vw, 20px)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  AK
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-wider text-white text-sm sm:text-base md:text-lg leading-tight">
                  AK RESTAURANT
                </span>
                <span className="text-[0.58rem] sm:text-[0.62rem] font-bold tracking-[0.22em] text-[#ff851b] uppercase">
                  Islamabad • F-11
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center" style={{ gap: "clamp(24px, 2.5vw, 36px)" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase relative group py-2"
                  style={{ color: "#d6ccbe" }}
                >
                  <span className="relative z-[1] transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 h-[2.5px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ background: "var(--color-orange)" }}
                  />
                </a>
              ))}

              {/* Bold Orange CTA Pill — Direct to WhatsApp Table Booking */}
              <a
                href="https://wa.me/923188517347?text=Hello%20AK%20Restaurant!%20I%20would%20like%20to%20book%20a%20table%20at%20Sector%20F-11%20Markaz."
                target="_blank"
                rel="noopener noreferrer"
                className="orange-pill text-xs shadow-lg inline-flex items-center gap-2"
              >
                <span>Book a Table</span>
                <span className="text-white/80">↗</span>
              </a>
            </nav>

            {/* Mobile Menu Hamburger Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl transition-all duration-300"
              style={{
                width: "42px",
                height: "42px",
                border: "1px solid rgba(255, 107, 0, 0.3)",
                background: "rgba(255, 107, 0, 0.1)",
              }}
              aria-label="Toggle menu"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: "20px",
                  height: "2.5px",
                  background: "var(--color-orange)",
                  transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
                }}
              />
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: "20px",
                  height: "2.5px",
                  background: "var(--color-orange)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: "20px",
                  height: "2.5px",
                  background: "var(--color-orange)",
                  transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[110] bg-[#0c0906]/98 backdrop-blur-3xl transition-all duration-400 md:hidden flex flex-col items-center justify-center p-6 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-[var(--color-orange)] transition-colors border border-white/15"
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-7 w-full max-w-xs text-center">
          <span className="font-display font-extrabold text-xs tracking-widest uppercase text-[#ff851b]">
            AK Restaurant Islamabad
          </span>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className="font-display font-black text-3xl uppercase tracking-wider text-white hover:text-[var(--color-orange)] transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/923188517347"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full orange-pill text-sm py-3.5 mt-4"
          >
            Order on WhatsApp
          </a>

          <a
            href="tel:+923188517347"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-bold text-white/60 hover:text-white"
          >
            Call Us: 0318 8517347
          </a>
        </div>
      </div>
    </>
  );
}
