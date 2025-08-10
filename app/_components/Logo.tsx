import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3 group">
      <Image
        width={40}
        height={40}
        src="/Elegant GlowCart Skincare Logo.png"
        alt="logo"
        className="rounded-full transition-transform duration-300 group-hover:scale-110"
      />
      <h1 className="text-xl md:text-2xl font-bold text-[var(--color-rose-gold)] opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        GlowCart
      </h1>
    </div>
  );
}
