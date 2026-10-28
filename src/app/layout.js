import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Websites, E-commerce & Software`, template: `%s | ${SITE.name}` },
  description: SITE.tagline,
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}