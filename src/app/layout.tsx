import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { MobileActionBar } from "@/components/navigation/MobileActionBar";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#121212",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://georgiadentalcenter.com"),
  title: {
    default: "Georgia Dental Center | Dentist in Decatur, GA",
    template: "%s | Georgia Dental Center",
  },
  description:
    "Personalized, comfortable dental care designed around your smile goals in Decatur, Georgia. Meet Dr. Shikha M Amin, DMD and experience gentle comprehensive dentistry.",
  keywords: [
    "Dentist Decatur GA",
    "Georgia Dental Center",
    "Dr. Shikha M Amin",
    "Decatur dental cleanings",
    "Invisalign Decatur GA",
    "Periodontics Decatur",
    "Emergency dentist Decatur",
    "Dentures Decatur",
  ],
  authors: [{ name: "Georgia Dental Center" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://georgiadentalcenter.com",
    siteName: "Georgia Dental Center",
    title: "Georgia Dental Center | Dentist in Decatur, GA",
    description:
      "Personalized dental care designed around your comfort, health, and smile goals in Decatur, Georgia.",
    images: [
      {
        url: "/assets/images/dr-shikha-amin.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Shikha M Amin, DMD - Georgia Dental Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgia Dental Center | Dentist in Decatur, GA",
    description:
      "Personalized dental care designed around your comfort, health, and smile goals in Decatur, Georgia.",
    creator: "@GeorgiaDental",
  },
  alternates: {
    canonical: "https://georgiadentalcenter.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for LocalBusiness / Dentist
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: "https://georgiadentalcenter.com",
    telephone: siteConfig.contact.phone,
    image: "https://georgiadentalcenter.com/assets/images/dr-shikha-amin.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street1}, ${siteConfig.address.suite}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "08:30",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.twitter,
      siteConfig.socials.linkedin,
      siteConfig.socials.youtube,
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F8F3] text-[#18211D] antialiased bg-grain selection:bg-[#D8E4D7] selection:text-[#164A3A]">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
