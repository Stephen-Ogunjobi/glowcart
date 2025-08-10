import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="flex h-[90vh] section">
      <div className="w-[60%] bg-[var(--color-pink)] bg-opacity-10 p-16 flex flex-col justify-center items-start space-y-8">
        <h2 className="text-6xl font-playfair leading-tight font-bold text-shadow-sm">
          <span className="gradient-text">Glow Starts</span>{" "}
          <span className="text-7xl block mt-2 font-bold">Here</span>
        </h2>
        <p className="text-xl text-[var(--color-rose-gold)] opacity-80 max-w-lg">
          Your journey to radiant skin begins here. Explore our range of
          skincare products tailored just for you.
        </p>
        <Link href="/shop" className="btn btn-primary text-lg">
          Shop Now
        </Link>
      </div>
      <div className="w-[40%] relative overflow-hidden">
        <Image
          src="/glowcart hero.jpg"
          alt="Glow Starts Here"
          fill
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  );
}
