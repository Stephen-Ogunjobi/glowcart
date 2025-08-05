import "./globals.css";
import Navbar from "./_components/Navbar";

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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
