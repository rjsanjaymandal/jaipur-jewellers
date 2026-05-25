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
    default: "Jaipur Jewellers Chandigarh | Premium Diamond, Gold, Kundan & Jadau Jewellery | Since 1996",
    template: "%s | Jaipur Jewellers Chandigarh",
  },
  description: "Jaipur Jewellers, Chandigarh's most trusted jewellery store since 1996. Shop exquisite Diamond jewellery, 22K Gold jewellery, Kundan, Jadau, Polki & Italian collections. Free consultation at Sector 35C. Call +91 90561 49264.",
  keywords: [
    "jaipur jewellers chandigarh",
    "jewellery store chandigarh",
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
    "italian jewellery chandigarh",
    "best jeweller chandigarh",
    "jewellery shop sector 35 chandigarh",
    "jewellery near me chandigarh",
    "diamond bangles chandigarh",
    "gold necklace chandigarh",
    "juda jewellery chandigarh",
    "kundan sets chandigarh",
    "22k gold chandigarh",
    "hallmark jewellery chandigarh",
    "custom jewellery chandigarh"
  ],
  authors: [{ name: "Jaipur Jewellers" }],
  creator: "Jaipur Jewellers",
  publisher: "Jaipur Jewellers",
  category: "jewellery",
  classification: "Jewelry Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Jaipur Jewellers",
    title: "Jaipur Jewellers Chandigarh | Diamond, Gold & Jadau Jewellery | Since 1996",
    description: "Chandigarh's premier jeweller offering exquisite Diamond, Gold, Kundan, Jadau, Polki and Italian jewellery. Handcrafted luxury collections for weddings, engagements & everyday elegance. Visit Sector 35C.",
    url: baseUrl,
    countryName: "India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Jewellers Chandigarh - Premium Jewellery Collections",
      },
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Jaipur Jewellers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Jewellers Chandigarh | Premium Jewellery Since 1996",
    description: "Chandigarh's premier jeweller - Diamond, Gold, Kundan, Jadau, Polki & Italian jewellery collections. Visit Sector 35C.",
    images: ["/twitter-image.jpg"],
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
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Chandigarh",
    "geo.position": "30.7321;76.7756",
    "ICBM": "30.7321, 76.7756",
  },
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
              "description": "Chandigarh's premier jeweller offering exquisite Diamond, Gold, Kundan, Jadau, Polki and Italian jewellery since 1996.",
              "url": "https://www.jaipurjewellers.in",
              "telephone": "+91-90561-49264",
              "email": "info@jaipurjewellers.in",
              "image": "https://www.jaipurjewellers.in/logo-gold-final.png",
              "logo": "https://www.jaipurjewellers.in/logo-gold-final.png",
              "priceRange": "₹₹₹",
              "areaServed": "Chandigarh Tricity",
              "foundingDate": "1996",
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
                "https://www.instagram.com/jaipurjewellers"
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
                "reviewCount": "487",
                "bestRating": "5"
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
                "https://www.instagram.com/jaipurjewellers"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-90561-49264",
                "contactType": "customer service",
                "contactOption": "TollFree",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where is Jaipur Jewellers located in Chandigarh?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jaipur Jewellers is located at SCO 105, Inner Market, Sector 35C, Chandigarh - 160035. We have been serving Chandigarh since 1996."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of jewellery do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer Diamond jewellery, 22K Gold jewellery, Kundan, Jadau (Juda), Polki, and Italian jewellery collections including necklaces, earrings, rings, bangles, mangalsutras, and bridal sets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer custom jewellery design?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide custom jewellery design services. Contact us on WhatsApp at +91 90561 49264 to discuss your vision and we will create a bespoke piece for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are your store timings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We are open from 10:00 AM to 8:00 PM, all 7 days of the week including Sundays."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you sell hallmarked gold jewellery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our gold jewellery is BIS hallmarked and certified, ensuring purity and quality you can trust."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Jaipur Jewellers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can call us at +91 90561 49264, email info@jaipurjewellers.in, or visit our store at SCO 105, Sector 35C, Chandigarh. You can also reach us directly on WhatsApp."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer jewellery for weddings in Chandigarh?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in bridal and wedding jewellery collections including engagement rings, wedding necklaces, earrings, and complete bridal sets in Diamond, Gold, Kundan, and Jadau styles."
                  }
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Diamond Jewellery",
              "description": "Premium diamond jewellery collection including rings, earrings, necklaces, and bangles. Certified diamonds with elegant designs.",
              "brand": {"@type": "Brand", "name": "Jaipur Jewellers"},
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Gold Jewellery",
              "description": "22K hallmarked gold jewellery collection. Traditional and contemporary designs including necklaces, earrings, rings, and bangles.",
              "brand": {"@type": "Brand", "name": "Jaipur Jewellers"},
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
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
