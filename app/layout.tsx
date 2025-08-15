import "./globals.css";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";
import CartModal from "./_components/CartModal";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GlowCart",
    default: "GlowCart - Your Skincare Destination",
  },
  description:
    "Discover premium skincare products at GlowCart. From cleansers to serums, find everything you need for healthy, glowing skin.",
  keywords: [
    "skincare",
    "beauty",
    "cosmetics",
    "skin care products",
    "glowing skin",
    "premium skincare",
  ],
  authors: [{ name: "GlowCart" }],
  creator: "GlowCart",
  publisher: "GlowCart",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowcart.com",
    siteName: "GlowCart",
    title: "GlowCart - Your Skincare Destination",
    description:
      "Discover premium skincare products at GlowCart. From cleansers to serums, find everything you need for healthy, glowing skin.",
    images: [
      {
        url: "/glowcart-hero.jpg",
        width: 1200,
        height: 630,
        alt: "GlowCart - Premium Skincare Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlowCart - Your Skincare Destination",
    description:
      "Discover premium skincare products at GlowCart. From cleansers to serums, find everything you need for healthy, glowing skin.",
    images: ["/glowcart-hero.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${playfair.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-white text-[#4A071C] border border-[var(--border-soft)] rounded px-3 py-2 shadow"
        >
          Skip to content
        </a>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2400,
            style: {
              background: "rgba(255,255,255,0.9)",
              color: "var(--text-primary)",
              borderRadius: "14px",
              border: "1px solid var(--border-soft)",
              boxShadow: "0 10px 30px rgba(183,110,121,0.18)",
              backdropFilter: "blur(8px)",
            },
            success: {
              iconTheme: {
                primary: "#b76e79",
                secondary: "#fff",
              },
              style: {
                border: "1px solid rgba(183,110,121,0.25)",
              },
            },
            error: {
              iconTheme: {
                primary: "#b76e79",
                secondary: "#fff",
              },
              style: {
                border: "1px solid rgba(183,110,121,0.25)",
              },
            },
          }}
        />
        <CartModal />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
