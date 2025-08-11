"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useCartStore } from "../../_store/useCartStore";
import { useCheckoutStore } from "../../_store/useCheckoutStore";

const paymentSchema = z
  .object({
    cardName: z
      .string()
      .trim()
      .min(2, { message: "Enter the name on your card" }),
    cardNumber: z
      .string()
      .trim()
      .refine((v) => /^\d{13,19}$/.test(v.replace(/\s+/g, "")), {
        message: "Enter a valid card number",
      }),
    expiry: z
      .string()
      .trim()
      .refine((v) => /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(v), {
        message: "Use MM/YY format",
      }),
    cvv: z
      .string()
      .trim()
      .refine((v) => /^\d{3,4}$/.test(v), { message: "Enter a valid CVV" }),
    useShippingAddress: z.boolean(),
    billingAddress: z
      .object({
        street: z.string().trim().min(3, { message: "Enter a valid street" }),
        city: z.string().trim().min(2, { message: "Enter a valid city" }),
        state: z.string().trim().min(2, { message: "Enter a valid state" }),
        postalCode: z
          .string()
          .trim()
          .min(3, { message: "Enter a valid postal code" }),
        country: z.string().trim().min(2, { message: "Select a country" }),
      })
      .optional(),
  })
  .refine((data) => data.useShippingAddress || !!data.billingAddress, {
    message: "Billing address is required",
    path: ["billingAddress"],
  });

type PaymentFormValues = z.infer<typeof paymentSchema>;

export default function Page() {
  const router = useRouter();
  const cartItems = useCartStore((s) => s.cartItems);
  // const clearCart = useCartStore((s) => s.clearCart);
  const shippingInfo = useCheckoutStore((s) => s.shippingInfo);
  // const clearShippingInfo = useCheckoutStore((s) => s.clearShippingInfo);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardName: shippingInfo?.fullName ?? "Jane Doe",
      cardNumber: "4111 1111 1111 1111",
      expiry: "08/27",
      cvv: "123",
      useShippingAddress: true,
      billingAddress: shippingInfo?.address ?? undefined,
    },
  });

  const useShipping = watch("useShippingAddress");

  const onSubmit = (): void => {
    toast.success("Payment successful");
    router.push("/checkout/success");
  };

  return (
    <section className="section py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair glow-text-rose mb-8">Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card elevated p-6 space-y-6">
              {shippingInfo && (
                <div className="bg-[var(--color-beige)] bg-opacity-60 p-4 rounded-xl">
                  <h3 className="font-semibold text-[#4A071C] mb-1">
                    Shipping to
                  </h3>
                  <p className="text-sm text-[#4A071C]">
                    {shippingInfo.fullName}
                  </p>
                  <p className="text-sm text-[#4A071C]">
                    {shippingInfo.address.street}, {shippingInfo.address.city},{" "}
                    {shippingInfo.address.state}{" "}
                    {shippingInfo.address.postalCode}
                  </p>
                  <p className="text-sm text-[#4A071C]">
                    {shippingInfo.address.country}
                  </p>
                </div>
              )}

              <h2 className="text-2xl font-semibold text-[#4A071C]">
                Card Details
              </h2>

              <form
                id="payment-form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-[#4A071C] mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    {...register("cardName")}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                    placeholder="Jane Doe"
                  />
                  {errors.cardName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.cardName.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={19}
                      {...register("cardNumber")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="4111 1111 1111 1111"
                    />
                    {errors.cardNumber && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.cardNumber.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      {...register("expiry")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="08/27"
                    />
                    {errors.expiry && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.expiry.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A071C] mb-1">
                      CVV
                    </label>
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      {...register("cvv")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                      placeholder="123"
                    />
                    {errors.cvv && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.cvv.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[#4A071C]">
                    <input
                      type="checkbox"
                      {...register("useShippingAddress")}
                      defaultChecked
                    />
                    Use shipping address for billing
                  </label>

                  {!useShipping && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#4A071C] mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          {...register("billingAddress.street")}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                          placeholder="123 Glow St, Apt 4B"
                        />
                        {errors.billingAddress?.street && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.billingAddress.street.message}
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
                            {...register("billingAddress.city")}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                            placeholder="Los Angeles"
                          />
                          {errors.billingAddress?.city && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.billingAddress.city.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#4A071C] mb-1">
                            State / Province
                          </label>
                          <input
                            type="text"
                            {...register("billingAddress.state")}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                            placeholder="CA"
                          />
                          {errors.billingAddress?.state && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.billingAddress.state.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#4A071C] mb-1">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            {...register("billingAddress.postalCode")}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
                            placeholder="90001"
                          />
                          {errors.billingAddress?.postalCode && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.billingAddress.postalCode.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#4A071C] mb-1">
                          Country
                        </label>
                        <select
                          {...register("billingAddress.country")}
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
                        {errors.billingAddress?.country && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.billingAddress.country.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="card elevated p-6">
              <h2 className="text-2xl font-semibold text-[#4A071C] mb-4">
                Order Summary
              </h2>
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <Link
                    href="/shop"
                    className="inline-block px-5 py-2 border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] rounded-xl hover:bg-[var(--color-rose-gold)] hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-3 flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image_url}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#4A071C] line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-sm font-semibold text-[var(--color-rose-gold)]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    {/* Free shipping progress summary */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <span className="text-[#4A071C]">Free shipping</span>
                        <span className="text-[var(--color-rose-gold)] font-medium">
                          $50
                        </span>
                      </div>
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round((subtotal / 50) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-[#4A071C]/70">
                        {subtotal >= 50
                          ? "You unlocked free shipping!"
                          : `Add $${(50 - subtotal).toFixed(
                              2
                            )} more to get free shipping`}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[#4A071C]">
                        <span>Subtotal</span>
                        <span className="font-semibold">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[#4A071C]">
                        <span>Shipping</span>
                        <span className="font-semibold">Free</span>
                      </div>
                      <div className="border-t pt-3 flex items-center justify-between">
                        <span className="font-semibold text-[#4A071C]">
                          Total
                        </span>
                        <span className="text-xl font-bold text-[var(--color-rose-gold)]">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      form="payment-form"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full disabled:opacity-60"
                    >
                      {isSubmitting ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
