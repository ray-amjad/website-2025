import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://rayamjad.com";
const DESCRIPTION =
  "Ray Amjad is a software engineer and creator based in Tokyo, Japan. Founder of the app studio 21 Dreams and creator on YouTube.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ray Amjad — Software Engineer & Creator",
    template: "%s — Ray Amjad",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL + "/",
    siteName: "Ray Amjad",
    title: "Ray Amjad — Software Engineer & Creator",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/headshot.jpg",
        width: 1280,
        height: 853,
        alt: "Ray Amjad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theramjad",
    creator: "@theramjad",
    title: "Ray Amjad — Software Engineer & Creator",
    description: DESCRIPTION,
    images: ["/headshot.jpg"],
  },
};

// JSON-LD @graph — the machine-readable "who is Ray Amjad" for Google's Knowledge Graph.
// Everything is linked by @id so Person ↔ Organizations ↔ WebSite form one entity.
// TODO(after Wikidata): add your Wikidata Q-URL (e.g. "https://www.wikidata.org/wiki/Qxxxxxxx")
// to the Person `sameAs` array below — this is the bridge between your site and Wikidata.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": SITE_URL + "/#person",
      name: "Ray Amjad",
      url: SITE_URL + "/",
      image: SITE_URL + "/headshot.jpg",
      description:
        "Software engineer and creator based in Tokyo, Japan. Founder of the app studio 21 Dreams.",
      jobTitle: "Software engineer & creator",
      gender: "Male",
      nationality: { "@type": "Country", name: "United Kingdom" },
      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tokyo",
          addressCountry: "JP",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Cambridge",
        sameAs: "https://www.wikidata.org/wiki/Q35794",
      },
      knowsAbout: [
        "Entrepreneurship",
        "Software Development",
        "App Development",
        "Content Creation",
        "Startups",
      ],
      worksFor: { "@id": "https://21dreams.org/#org" },
      affiliation: [
        {
          "@type": "OrganizationRole",
          roleName: "Founder",
          memberOf: { "@id": "https://21dreams.org/#org" },
        },
      ],
      sameAs: [
        "https://www.youtube.com/@ramjad",
        "https://x.com/theramjad",
        "https://www.linkedin.com/in/rayamjad/",
        "https://instagram.com/theramjad",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://21dreams.org/#org",
      name: "21 Dreams",
      url: "https://21dreams.org/",
      founder: { "@id": SITE_URL + "/#person" },
    },
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#company",
      name: "RAY AMJAD LTD",
      legalName: "RAY AMJAD LTD",
      url: SITE_URL + "/company",
      identifier: "14506459",
      founder: { "@id": SITE_URL + "/#person" },
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL + "/",
      name: "Ray Amjad",
      author: { "@id": SITE_URL + "/#person" },
      publisher: { "@id": SITE_URL + "/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex-1">
          {children}
        </div>
        <footer className="fixed bottom-0 left-0 right-0 text-center py-2 text-xs text-gray-500 dark:text-gray-400">
          <a
            href="/company"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            RAY AMJAD LTD (14506459)
          </a>
        </footer>
      </body>
    </html>
  );
}
