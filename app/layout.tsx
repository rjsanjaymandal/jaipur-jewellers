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

const baseUrl = "https://www.jaipurjewellers.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jaipur Jewellers | Premium Diamond, Gold & Jadau Jewellery | Since 1996",
    template: "%s | Jaipur Jewellers",
  },
  description: "Chandigarh's premier jeweller offering exquisite Diamond, Gold, Kundan, Jadau, Polki, and Italian jewellery. Handcrafted luxury collections for weddings, engagements & everyday elegance. Free consultation available.",
  keywords: [
    "jaipur jewellers chandigarh",
    "diamond jewellery chandigarh",
    "gold jewellery chandigarh",
    "jadau jewellery chandigarh",
    "kundan jewellery chandigarh",
    "polki jewellery chandigarh",
    "bridal jewellery chandigarh",
    "wedding jewellery chandigarh",
    "engagement rings chandigarh",
    "gold coins chandigarh",
    "luxury jewellery india",
    "handcrafted jewellery chandigarh",
    "Italian jewellery chandigarh",
    "best jeweller chandigarh",
    "jewellery store sector 35 chandigarh",
    "jewellery shop near me chandigarh",
    "diamond bangles chandigarh",
    "gold necklace chandigarh",
    "juda jewellery chandigarh",
    "kundan sets chandigarh"
  ],
  authors: [{ name: "Jaipur Jewellers" }],
  creator: "Jaipur Jewellers",
  publisher: "Jaipur Jewellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.jaipurjewellers.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Jaipur Jewellers",
    title: "Jaipur Jewellers | Premium Diamond, Gold & Jadau Jewellery | Since 1996",
    description: "Chandigarh's premier jeweller offering exquisite Diamond, Gold, Kundan, Jadau, Polki, and Italian jewellery. Handcrafted luxury collections for weddings, engagements & everyday elegance.",
    url: baseUrl,
    siteUrl: baseUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Jewellers - Premium Jewellery Collections",
      },
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Jaipur Jewellers Logo",
      },
    ],
    localeAlternate: [],
    tags: ["jewellery", "diamond", "gold", "chandigarh", "jadau", "kundan", "polki", "bridal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Jewellers | Premium Jewellery Since 1996",
    description: "Chandigarh's premier jeweller offering exquisite Diamond, Gold, Kundan, Jadau, Polki & Italian jewellery collections.",
    images: ["/twitter-image.jpg"],
    creator: "@jaipurjewellers",
    site: "@jaipurjewellers",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    all: ["index", "follow", "max-image-preview:large", "max-snippet:-1"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
  category: "Shopping",
  classification: "Jewellery",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.jaipurjewellers.in" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": "Jaipur Jewellers",
              "description": "Chandigarh's premier jeweller offering exquisite Diamond, Gold, Kundan, Jadau, Polki, and Italian jewellery since 1996.",
              "url": "https://www.jaipurjewellers.in",
              "telephone": "+91-90561-49264",
              "email": "info@jaipurjewellers.in",
              "image": "https://www.jaipurjewellers.in/logo-gold-final.png",
              "logo": "https://www.jaipurjewellers.in/logo-gold-final.png",
              "priceRange": "₹₹₹",
              "address": [{
                "@type": "PostalAddress",
                "streetAddress": "SCO 105, Inner Market, Sector 35C",
                "addressLocality": "Chandigarh",
                "addressRegion": "Punjab",
                "postalCode": "160035",
                "addressCountry": "IN"
              }],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.7321,
                "longitude": 76.7756
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "20:00"
              }],
              "sameAs": [
                "https://www.facebook.com/jaipurjewellers",
                "https://www.instagram.com/jaipurjewellers",
                "https://twitter.com/jaipurjewellers"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Jewellery Collections",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Diamond Jewellery"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Gold Jewellery"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Kundan Jewellery"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Jadau Jewellery"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Polki Jewellery"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Italian Jewellery"}}
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "487"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jaipur Jewellers",
              "url": "https://www.jaipurjewellers.in",
              "logo": "https://www.jaipurjewellers.in/logo-gold-final.png",
              "sameAs": [
                "https://www.facebook.com/jaipurjewellers",
                "https://www.instagram.com/jaipurjewellers",
                "https://twitter.com/jaipurjewellers"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-90561-49264",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Punjabi"]
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jaipur Jewellers",
              "url": "https://www.jaipurjewellers.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.jaipurjewellers.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}