import "./globals.css";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
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

export const metadata = {
  title: {
    template: "%s | GlowCart ",
    default: "GlowCart ",
  },
  description: "GlowCart - Your Skincare Destination",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${playfair.variable}`}>
      <body>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#4A071C",
              color: "#fff",
              borderRadius: "10px",
            },
            duration: 2000,
          }}
        />
        <CartModal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
