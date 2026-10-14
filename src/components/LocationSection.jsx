"use client";

export default function LocationSection() {
  const mapUrl = "https://maps.google.com/maps?q=Sector+F-11+Markaz+Islamabad+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const directMapsLink = "https://goo.gl/maps/search/F-11+Markaz+Islamabad";

  return (
    <section
      id="location"
      className="relative z-20 overflow-hidden w-full"
      style={{
        background: "linear-gradient(180deg, var(--color-dark) 0%, #120e0a 100%)",
        paddingTop: "clamp(60px, 8vw, 120px)",
        paddingBottom: "clamp(60px, 8vw, 120px)",
      }}
    >
      {/* Top Divider */}
      <div className="section-container mb-12 sm:mb-16">
        <div
          className="w-full h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 107, 0, 0.35), transparent)",
          }}
        />
      </div>

      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <span
            className="badge-present mb-2"
            style={{ color: "var(--color-orange-bright)" }}
          >
            Visit Our Kitchen
          </span>
          <h2
            className="font-display font-black text-white text-center"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              letterSpacing: "-0.03em",
              textShadow: "0 6px 30px rgba(0,0,0,0.8)",
            }}
          >
            OUR LOCATION
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <span className="rule-bar-orange" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#d6ccbe]">
              Sector F-11 Markaz • Islamabad
            </span>
            <span className="rule-bar-orange" />
          </div>
        </div>

        {/* Content Grid */}
        <div
          className="grid gap-8 items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          }}
        >
          {/* Real Interactive Google Map */}
          <div className="flex flex-col">
            <div
              className="relative overflow-hidden rounded-3xl w-full flex-grow min-h-[380px] sm:min-h-[440px]"
              style={{
                border: "1px solid rgba(255, 107, 0, 0.25)",
                boxShadow: "0 15px 45px rgba(0,0,0,0.7)",
                background: "#181410",
              }}
            >
              <iframe
                title="AK Restaurant Real Google Map - F-11 Markaz Islamabad"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "380px",
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                  style={{
                    background: "rgba(12, 9, 6, 0.88)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 107, 0, 0.4)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-pulse" />
                  <span className="font-display font-bold text-xs text-white">
                    F-11 Markaz, Islamabad
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Link */}
            <div className="mt-3 flex justify-between items-center text-xs">
              <span className="text-white/40">Real GPS Navigation</span>
              <a
                href={directMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--color-orange-bright)] hover:underline flex items-center gap-1.5"
              >
                Open in Google Maps App <span>↗</span>
              </a>
            </div>
          </div>

          {/* Location Info Cards with Clean SVGs */}
          <div className="flex flex-col gap-4 sm:gap-5 justify-between">
            {/* Address Card */}
            <div
              className="p-6 sm:p-7 rounded-3xl"
              style={{
                background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255, 107, 0, 0.12)",
                    border: "1px solid rgba(255, 107, 0, 0.3)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-orange-bright)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white mb-1">
                    Restaurant Address
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }} className="text-sm">
                    Plot #18, Main Boulevard, Sector F-11 Markaz<br />
                    Islamabad, 44000, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="p-6 sm:p-7 rounded-3xl"
              style={{
                background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255, 107, 0, 0.12)",
                    border: "1px solid rgba(255, 107, 0, 0.3)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-orange-bright)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="font-display font-black text-xl text-white mb-2">
                    Service Hours
                  </h3>
                  <div className="flex flex-col gap-1.5 text-xs sm:text-sm" style={{ color: "var(--color-text-muted)" }}>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="font-semibold">Mon – Thu</span>
                      <span className="text-white font-bold">12:00 PM – 1:00 AM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold">Fri – Sun (Late Night)</span>
                      <span className="text-[var(--color-orange-bright)] font-bold">12:00 PM – 3:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking & Services */}
            <div
              className="p-6 sm:p-7 rounded-3xl"
              style={{
                background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255, 107, 0, 0.12)",
                    border: "1px solid rgba(255, 107, 0, 0.3)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-orange-bright)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white mb-1">
                    Valet & Curbside Pickup
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }} className="text-sm">
                    Dedicated valet parking directly in front of the restaurant. Fast-track drive-up takeaway counter and outdoor patio seating available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
