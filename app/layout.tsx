import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

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
    <html lang="en">
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
