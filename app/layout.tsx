import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jaipur Jewellers | Timeless Luxury & Exquisite Craftsmanship",
  description: "Discover a world of luxury at Jaipur Jewellers. Exquisite Diamond, Gold, Polki, and Jadau collections crafted with heritage since 1996.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
