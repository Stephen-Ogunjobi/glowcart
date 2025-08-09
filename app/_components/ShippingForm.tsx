"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useCheckoutStore } from "../_store/useCheckoutStore";
import { useRouter } from "next/navigation";

const shippingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" }),
  email: z.string().trim().email({ message: "Enter a valid email address" }),
  phone: z.string().trim().min(7, { message: "Enter a valid phone number" }),
  address: z.object({
    street: z
      .string()
      .trim()
      .min(3, { message: "Enter a valid street address" }),
    city: z.string().trim().min(2, { message: "Enter a valid city" }),
    state: z
      .string()
      .trim()
      .min(2, { message: "Enter a valid state/province" }),
    postalCode: z
      .string()
      .trim()
      .min(3, { message: "Enter a valid postal code" }),
    country: z.string().trim().min(2, { message: "Select your country" }),
  }),
});

export type ShippingFormValues = z.infer<typeof shippingSchema>;

export default function ShippingForm() {
  const setShippingInfo = useCheckoutStore((s) => s.setShippingInfo);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },
  });

  const handleValid = (data: ShippingFormValues) => {
    setShippingInfo(data);
    toast.success("Shipping information saved");
    router.push("/checkout/payment");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-[#4A071C] mb-4">
        Shipping Information
      </h2>
      <form
        id="shipping-form"
        onSubmit={handleSubmit(handleValid)}
        className="space-y-6"
      >
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
              Email Address
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

        <div>
          <label className="block text-sm font-medium text-[#4A071C] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
            placeholder="+1 555 123 4567"
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#4A071C] mb-1">
              Street Address
            </label>
            <input
              type="text"
              {...register("address.street")}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
              placeholder="123 Glow St, Apt 4B"
            />
            {errors.address?.street && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.street.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#4A071C] mb-1">
                City
              </label>
              <input
                type="text"
                {...register("address.city")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                placeholder="Los Angeles"
              />
              {errors.address?.city && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address.city.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4A071C] mb-1">
                State / Province
              </label>
              <input
                type="text"
                {...register("address.state")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                placeholder="CA"
              />
              {errors.address?.state && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address.state.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4A071C] mb-1">
                Postal Code
              </label>
              <input
                type="text"
                {...register("address.postalCode")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                placeholder="90001"
              />
              {errors.address?.postalCode && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address.postalCode.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A071C] mb-1">
              Country
            </label>
            <select
              {...register("address.country")}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
            >
              <option value="">Select country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="Nigeria">Nigeria</option>
            </select>
            {errors.address?.country && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.country.message}
              </p>
            )}
          </div>
        </div>

        {/* Primary submit button is placed in the Order Summary panel */}
      </form>
    </div>
  );
}
