import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GlowCart. We're here to help with your skincare questions and provide excellent customer service.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
