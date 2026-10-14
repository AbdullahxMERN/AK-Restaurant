"use client";

const MENU_ITEMS = [
  {
    id: "pizza",
    name: "Wood-Fired Margherita",
    category: "Pizza",
    desc: "Slow-fermented dough hand-stretched and blistered in our 450°C wood oven. San Marzano D.O.P. tomatoes, fresh buffalo mozzarella, sweet basil, and cold-pressed olive oil.",
    price: "1,850",
    image: "/images/pizza.jpg",
    badge: "Bestseller",
    rating: "4.9",
    tags: ["Wood-Fired", "Vegetarian", "Crispy Crust"],
  },
  {
    id: "burger",
    name: "Double Smashed Wagyu Burger",
    category: "Burgers",
    desc: "Twin prime beef patties smashed crisp on the flat-top, double melted sharp cheddar, caramelized shallots, house secret burger glaze, inside a toasted buttery brioche bun. Served with seasoned skin-on fries.",
    price: "1,450",
    image: "/images/burger.jpg",
    badge: "Chef's Pick",
    rating: "5.0",
    tags: ["Prime Beef", "Crispy Fries", "Aged Cheddar"],
  },
  {
    id: "shawarma",
    name: "Artisan Chicken Shawarma",
    category: "Wraps",
    desc: "24-hour spiced marinated chicken slow-roasted on the vertical spit, wrapped in house-baked saj bread with authentic Lebanese garlic toum, pickled turnip ribbons, and crisp french fries.",
    price: "950",
    image: "/images/shawarma.jpg",
    badge: "Popular",
    rating: "4.8",
    tags: ["Slow-Roasted", "Garlic Toum", "House Saj Bread"],
  },
  {
    id: "lasagna",
    name: "Classic Bologna Lasagna",
    category: "Pasta & Oven",
    desc: "Six delicate sheets of handmade egg pasta layered with rich 8-hour slow-cooked beef ragù, velvety nutmeg béchamel, aged Grana Padano, and golden crusty mozzarella.",
    price: "1,650",
    image: "/images/lasagna.jpg",
    badge: "House Oven",
    rating: "4.9",
    tags: ["Handmade Pasta", "Slow-Cooked", "Rich Béchamel"],
  },
  {
    id: "pasta",
    name: "Creamy Chicken Alfredo",
    category: "Pasta & Oven",
    desc: "Tender fettuccine ribbons tossed in a decadent emulsion of 24-month aged Parmigiano-Reggiano, sweet cream butter, sliced herb-marinated grilled chicken breast, and freshly cracked black pepper.",
    price: "1,350",
    image: "/images/pasta.jpg",
    badge: "Comfort Classic",
    rating: "4.9",
    tags: ["Parmigiano", "Grilled Chicken", "Fresh Herbs"],
  },
  {
    id: "salmon",
    name: "Pan-Seared Salmon Fillet",
    category: "Steaks & Seafood",
    desc: "Fresh Atlantic salmon pan-seared with ultra-crispy skin, drizzled with a velvety lemon-thyme butter emulsion, served over tender charred asparagus and seasonal microgreens.",
    price: "2,850",
    image: "/images/salmon.jpg",
    badge: "Catch of the Day",
    rating: "5.0",
    tags: ["Crispy Skin", "Lemon Butter", "Fresh Atlantic"],
  },
  {
    id: "wagyu",
    name: "Prime Wagyu Steak Cut",
    category: "Steaks & Seafood",
    desc: "Generously marbled prime Wagyu beef seared to medium-rare over charcoal, basted in brown rosemary butter with blistered vine cherry tomatoes and roasted garlic cloves.",
    price: "3,850",
    image: "/images/wagyu.jpg",
    badge: "Signature Reserve",
    rating: "5.0",
    tags: ["Charcoal Seared", "Aged Wagyu", "Brown Butter"],
  },
];

export default function MenuSection() {
  const getWhatsAppLink = (item) => {
    const text = encodeURIComponent(
      `Hello AK Restaurant! I would like to order: ${item.name} (Rs. ${item.price}) for delivery/pickup at Sector F-11 Markaz.`
    );
    return `https://wa.me/923188517347?text=${text}`;
  };

  return (
    <section
      id="menu"
      className="relative z-20 w-full"
      style={{
        background: "var(--color-dark)",
        paddingTop: "clamp(80px, 10vw, 150px)",
        paddingBottom: "clamp(80px, 10vw, 150px)",
        boxShadow: "0 -30px 60px rgba(0,0,0,0.8)",
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[500px] rounded-full pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, var(--color-orange) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="section-container relative z-10 px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span
            className="badge-present mb-3"
            style={{ color: "var(--color-orange-bright)" }}
          >
            Freshly Prepared Daily
          </span>
          <h2
            className="font-display font-black text-white text-center"
            style={{
              fontSize: "clamp(2.4rem, 6.5vw, 6rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              textShadow: "0 6px 30px rgba(0,0,0,0.8)",
            }}
          >
            THE SIGNATURE MENU
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-2xl px-4">
            <span className="font-display font-bold text-[0.68rem] sm:text-xs uppercase tracking-widest text-[#d6ccbe]">
              Wood-Fired Pizza
            </span>
            <span className="rule-bar-orange" />
            <span className="font-display font-bold text-[0.68rem] sm:text-xs uppercase tracking-widest text-white">
              Smashed Burgers
            </span>
            <span className="rule-bar" />
            <span className="font-display font-bold text-[0.68rem] sm:text-xs uppercase tracking-widest text-[#ff851b]">
              Artisan Shawarma
            </span>
            <span className="rule-bar-orange" />
            <span className="font-display font-bold text-[0.68rem] sm:text-xs uppercase tracking-widest text-[#d6ccbe]">
              Fresh Steaks & Pasta
            </span>
          </div>
        </div>

        {/* Menu Cards Grid — All items directly shown, luxury 4-side padding, no cramped edges */}
        <div
          className="grid gap-8 sm:gap-10 lg:gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
          }}
        >
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-[2rem] p-4 sm:p-5 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "linear-gradient(180deg, #18120c 0%, #0e0a07 100%)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
              }}
            >
              {/* Photo Container — Framed with rounded corners, links directly to WhatsApp */}
              <a
                href={getWhatsAppLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full rounded-2xl block cursor-pointer"
                style={{ aspectRatio: "16/11" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(14,10,7,0.92) 0%, rgba(14,10,7,0.15) 50%, rgba(14,10,7,0.25) 100%)",
                  }}
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="font-display font-bold text-[0.62rem] uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                      style={{
                        background: "rgba(12, 9, 6, 0.82)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="font-display font-black text-[0.6rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full text-black shadow-md"
                      style={{
                        background: "var(--color-orange-bright)",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(12, 9, 6, 0.82)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <span className="text-amber-400 text-xs">★</span>
                    <span className="font-bold text-xs text-white">{item.rating}</span>
                  </div>
                </div>

                {/* Floating Price Pill */}
                <div
                  className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl pointer-events-none"
                  style={{
                    background: "var(--color-orange)",
                    boxShadow: "0 4px 18px rgba(255, 107, 0, 0.55)",
                  }}
                >
                  <span className="font-display font-black text-white text-sm sm:text-base tracking-wider">
                    Rs. {item.price}
                  </span>
                </div>
              </a>

              {/* Card Body — Padded on all 4 sides */}
              <div className="pt-5 pb-2 px-1 flex flex-col flex-grow justify-between">
                <div>
                  <a
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-display font-black text-xl sm:text-2xl text-white mb-2 group-hover:text-[var(--color-orange-bright)] transition-colors duration-300 leading-snug break-words"
                  >
                    {item.name}
                  </a>

                  <p className="text-xs sm:text-sm text-[#b8aa98] line-clamp-2 mb-4 leading-relaxed break-words">
                    {item.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[0.65rem] font-bold px-2.5 py-0.5 rounded-md text-white/70 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action — Prominent WhatsApp Order Button pointing to 03188517347 */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <a
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-display font-bold text-xs tracking-wider uppercase text-white bg-[var(--color-orange)] hover:bg-[var(--color-orange-bright)] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[rgba(255,107,0,0.35)] cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.031 0C5.396 0 0 5.394 0 12.029c0 2.115.549 4.181 1.595 6.002L.069 23.935l6.082-1.595a12.008 12.008 0 005.88 1.517h.005c6.634 0 12.03-5.395 12.03-12.03 0-3.213-1.252-6.233-3.527-8.508A11.95 11.95 0 0012.031 0zm0 21.857h-.004a9.97 9.97 0 01-5.093-1.396l-.365-.217-3.791.994 1.012-3.696-.237-.378a9.946 9.946 0 01-1.533-5.135c0-5.509 4.484-9.992 9.998-9.992 2.668 0 5.176 1.038 7.062 2.925a9.927 9.927 0 012.925 7.066c-.001 5.51-4.485 9.993-9.972 9.993zm5.474-7.472c-.3-.15-1.777-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.176-.176.2-.351.226-.651.076-.3-.15-1.267-.467-2.413-1.489-.893-.796-1.496-1.78-1.672-2.08-.175-.3-.018-.462.132-.612.136-.134.301-.35.451-.525.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.526-.075-.15-.676-1.628-.926-2.23-.243-.586-.49-.506-.676-.516l-.576-.01c-.2 0-.526.075-.801.375-.276.3-1.052 1.027-1.052 2.505s1.077 2.906 1.227 3.106c.15.2 2.118 3.235 5.132 4.538.717.31 1.277.495 1.714.634.72.23 1.375.197 1.893.12.578-.087 1.777-.726 2.027-1.428.25-.7.25-1.302.175-1.428-.074-.125-.275-.2-.575-.35z" />
                    </svg>
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
