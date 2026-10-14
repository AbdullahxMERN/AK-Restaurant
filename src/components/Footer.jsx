"use client";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      handle: "@akrestaurant.isb",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      handle: "/akrestaurantislamabad",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/923188517347",
      handle: "+92 318 8517347",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 0C5.396 0 0 5.394 0 12.029c0 2.115.549 4.181 1.595 6.002L.069 23.935l6.082-1.595a12.008 12.008 0 005.88 1.517h.005c6.634 0 12.03-5.395 12.03-12.03 0-3.213-1.252-6.233-3.527-8.508A11.95 11.95 0 0012.031 0zm0 21.857h-.004a9.97 9.97 0 01-5.093-1.396l-.365-.217-3.791.994 1.012-3.696-.237-.378a9.946 9.946 0 01-1.533-5.135c0-5.509 4.484-9.992 9.998-9.992 2.668 0 5.176 1.038 7.062 2.925a9.927 9.927 0 012.925 7.066c-.001 5.51-4.485 9.993-9.972 9.993zm5.474-7.472c-.3-.15-1.777-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.176-.176.2-.351.226-.651.076-.3-.15-1.267-.467-2.413-1.489-.893-.796-1.496-1.78-1.672-2.08-.175-.3-.018-.462.132-.612.136-.134.301-.35.451-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.526-.075-.15-.676-1.628-.926-2.23-.243-.586-.49-.506-.676-.516l-.576-.01c-.2 0-.526.075-.801.375-.276.3-1.052 1.027-1.052 2.505s1.077 2.906 1.227 3.106c.15.2 2.118 3.235 5.132 4.538.717.31 1.277.495 1.714.634.72.23 1.375.197 1.893.12.578-.087 1.777-.726 2.027-1.428.25-.7.25-1.302.175-1.428-.074-.125-.275-.2-.575-.35z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="relative z-20 overflow-hidden w-full"
      style={{
        background: "linear-gradient(180deg, #120e0a 0%, #060403 100%)",
        paddingTop: "clamp(60px, 8vw, 120px)",
        paddingBottom: "clamp(30px, 4vw, 50px)",
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
        {/* Contact Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span
            className="badge-present mb-2"
            style={{ color: "var(--color-orange-bright)" }}
          >
            Direct Contact
          </span>
          <h2
            className="font-display font-black text-white text-center"
            style={{
              fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
              letterSpacing: "-0.03em",
              textShadow: "0 6px 30px rgba(0,0,0,0.8)",
            }}
          >
            RESERVATIONS & ORDERS
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <span className="rule-bar-orange" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#d6ccbe]">
              Hot Delivery • Table Booking • Valet Service
            </span>
            <span className="rule-bar-orange" />
          </div>
        </div>

        {/* Contact Cards Grid with Real Vector Logos */}
        <div
          className="grid gap-6 sm:gap-8 mb-16"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          {/* Phone Card */}
          <a
            href="tel:+923188517347"
            className="group p-7 sm:p-8 rounded-3xl transition-all duration-400 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer"
            style={{
              background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="mb-4 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:bg-[var(--color-orange)]"
              style={{
                width: "58px",
                height: "58px",
                background: "rgba(255, 107, 0, 0.12)",
                border: "1px solid rgba(255, 107, 0, 0.3)",
              }}
            >
              <svg
                className="w-6 h-6 text-[var(--color-orange-bright)] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-display font-black text-xl text-white mb-1 group-hover:text-[var(--color-orange-bright)] transition-colors">
              Call Direct
            </h3>
            <p className="text-xs text-white/50 mb-2">Immediate Table & Counter Support</p>
            <span className="font-display font-black text-base sm:text-lg text-[var(--color-orange-bright)]">
              0318 8517347
            </span>
          </a>

          {/* Email Card */}
          <a
            href="mailto:contact@akrestaurant.pk"
            className="group p-7 sm:p-8 rounded-3xl transition-all duration-400 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer"
            style={{
              background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="mb-4 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:bg-[var(--color-orange)]"
              style={{
                width: "58px",
                height: "58px",
                background: "rgba(255, 107, 0, 0.12)",
                border: "1px solid rgba(255, 107, 0, 0.3)",
              }}
            >
              <svg
                className="w-6 h-6 text-[var(--color-orange-bright)] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-display font-black text-xl text-white mb-1 group-hover:text-[var(--color-orange-bright)] transition-colors">
              Email Kitchen
            </h3>
            <p className="text-xs text-white/50 mb-2">Catering & Corporate Bookings</p>
            <span className="font-display font-bold text-sm sm:text-base text-[var(--color-orange-bright)] break-all">
              hello@akrestaurant.pk
            </span>
          </a>

          {/* Official WhatsApp Card */}
          <a
            href="https://wa.me/923188517347"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-7 sm:p-8 rounded-3xl transition-all duration-400 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer"
            style={{
              background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="mb-4 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:bg-[#25D366]"
              style={{
                width: "58px",
                height: "58px",
                background: "rgba(37, 211, 102, 0.12)",
                border: "1px solid rgba(37, 211, 102, 0.3)",
              }}
            >
              <svg
                className="w-6 h-6 fill-current text-[#25D366] group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 0C5.396 0 0 5.394 0 12.029c0 2.115.549 4.181 1.595 6.002L.069 23.935l6.082-1.595a12.008 12.008 0 005.88 1.517h.005c6.634 0 12.03-5.395 12.03-12.03 0-3.213-1.252-6.233-3.527-8.508A11.95 11.95 0 0012.031 0zm0 21.857h-.004a9.97 9.97 0 01-5.093-1.396l-.365-.217-3.791.994 1.012-3.696-.237-.378a9.946 9.946 0 01-1.533-5.135c0-5.509 4.484-9.992 9.998-9.992 2.668 0 5.176 1.038 7.062 2.925a9.927 9.927 0 012.925 7.066c-.001 5.51-4.485 9.993-9.972 9.993zm5.474-7.472c-.3-.15-1.777-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.176-.176.2-.351.226-.651.076-.3-.15-1.267-.467-2.413-1.489-.893-.796-1.496-1.78-1.672-2.08-.175-.3-.018-.462.132-.612.136-.134.301-.35.451-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.526-.075-.15-.676-1.628-.926-2.23-.243-.586-.49-.506-.676-.516l-.576-.01c-.2 0-.526.075-.801.375-.276.3-1.052 1.027-1.052 2.505s1.077 2.906 1.227 3.106c.15.2 2.118 3.235 5.132 4.538.717.31 1.277.495 1.714.634.72.23 1.375.197 1.893.12.578-.087 1.777-.726 2.027-1.428.25-.7.25-1.302.175-1.428-.074-.125-.275-.2-.575-.35z" />
              </svg>
            </div>
            <h3 className="font-display font-black text-xl text-white mb-1 group-hover:text-[#25D366] transition-colors">
              WhatsApp Order
            </h3>
            <p className="text-xs text-white/50 mb-2">Live Chat & Instant Delivery</p>
            <span className="font-display font-bold text-sm sm:text-base text-[#25D366]">
              Chat on WhatsApp
            </span>
          </a>
        </div>

        {/* Big Retro Brand Statement Banner */}
        <div className="text-center my-10 sm:my-14 py-8 border-y border-white/10">
          <p className="font-display font-black text-xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-white">
            AK RESTAURANT <span className="text-[var(--color-orange)]">—</span> ARTISAN FLAVOR WITH STRONG CHARACTER
          </p>
        </div>

        {/* Footer Bottom Row with Clean Social Logos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60">
          <p>© 2025 AK Restaurant. Sector F-11 Markaz, Islamabad, Pakistan. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 hover:bg-[var(--color-orange)] hover:text-white transition-all text-white/80"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
