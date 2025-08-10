"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" }),
  email: z.string().trim().email({ message: "Enter a valid email address" }),
  subject: z.string().trim().min(3, { message: "Please enter a subject" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters" }),
  orderId: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      orderId: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    toast.success("Thanks for reaching out! We'll get back to you shortly.");
    reset();
  };

  return (
    <div className="bg-gradient-to-b from-[var(--color-offwhite)] to-[var(--color-beige)]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-12 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A071C]">
          Contact Us
        </h1>
        <p className="mt-3 text-[var(--color-rose-gold)] opacity-80 max-w-2xl">
          Have a question about an order, need skincare advice, or want to
          partner with us? We’d love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <aside className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-1 h-fit">
            <h2 className="text-2xl font-semibold text-[#4A071C] mb-4">
              Get in touch
            </h2>
            <div className="space-y-3 mb-6">
              <p className="text-sm">Email</p>
              <a
                href="mailto:hello@glowcart.com"
                className="font-medium accent hover:underline"
              >
                hello@glowcart.com
              </a>
              <div className="h-4" />
              <p className="text-sm">Phone</p>
              <a
                href="tel:+15551234567"
                className="font-medium accent hover:underline"
              >
                (555) 123-4567
              </a>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-sm">Hours</p>
              <p className="opacity-80">Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p className="opacity-80">Sat: 10:00 AM – 4:00 PM</p>
            </div>

            <div>
              <p className="text-sm mb-3">Follow us</p>
              <div className="flex items-center space-x-4 text-2xl">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#4A071C] mb-4">
                Send a message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="Jane Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="jane@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      Order ID (optional)
                    </label>
                    <input
                      type="text"
                      {...register("orderId")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="#GC12345"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4A071C] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    {...register("message")}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                    placeholder="Tell us a bit more..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-full bg-[var(--color-rose-gold)] text-white font-semibold hover:bg-opacity-90 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
