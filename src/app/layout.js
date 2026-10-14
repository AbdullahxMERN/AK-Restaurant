import { Fraunces, Plus_Jakarta_Sans, Syne, Shrikhand } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const shrikhand = Shrikhand({
  variable: "--font-retro",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://akrestaurant.pk"),
  title: "AK Restaurant | Bold Flavors & Cinematic Dining · Islamabad",
  description:
    "A bold culinary journey inspired by artisan fast food and classic recipes. AK Restaurant, Sector F-11 Markaz, Islamabad.",
  openGraph: {
    title: "AK Restaurant | Islamabad",
    description: "number 1 restaurant in f-11 islamabad",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${syne.variable} ${shrikhand.variable} antialiased`}
      style={{ overflowX: "clip" }}
    >
      <body
        className="bg-[#0c0906] text-[#ffffff] font-sans selection:bg-[#ff6b00] selection:text-white"
        style={{ overflowX: "clip" }}
      >
        {children}
      </body>
    </html>
  );
}
