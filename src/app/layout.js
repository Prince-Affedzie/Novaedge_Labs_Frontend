
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "NovaEdge Labs helps businesses in Ghana launch online stores, build professional websites, create strategic social media content, run targeted ads, and develop custom software.";

export const metadata = {
  metadataBase: new URL(SITE.url),

  applicationName: SITE.name,
  creator: SITE.name,
  publisher: SITE.name,

  title: {
    default:
      "NovaEdge Labs | Web Design, Online Stores & Digital Marketing in Ghana",
    template: `%s | ${SITE.name}`,
  },

  verification: {
    google: "azK3uthtsHTDW03DoDZiMH8TjilWwJa4I6r0KYyqXFs",
  },

  description: siteDescription,

  keywords: [
    "web design Ghana",
    "website development Ghana",
    "e-commerce website",
    "e-commerce website Ghana",
    "e-commerce website builder",
    "online store development Ghana",
    "social media marketing Ghana",
    "content creation Ghana",
    "Facebook and Instagram ads Ghana",
    "custom software development Ghana",
    "digital solutions agency Accra",
  ],

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "NovaEdge Labs | Websites, Online Stores & Digital Growth",
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NovaEdge Labs | Websites, Online Stores & Digital Growth",
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: siteDescription,
  areaServed: {
    "@type": "Country",
    name: "Ghana",
  },
  knowsAbout: [
    "E-commerce website development",
    "Business website design",
    "Social media content strategy",
    "Digital advertising",
    "Custom software development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GH">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <Suspense
          fallback={
            <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white" />
          }
        >
          <Navbar />
        </Suspense>

        <main>{children}</main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
