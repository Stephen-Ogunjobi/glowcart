import Image from "next/image";

export default function Banner({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-[center_35%] scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A071C]/70 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-playfair text-white mb-4 opacity-95">
            {name}
          </h1>
          <div className="h-1 w-24 bg-[var(--color-rose-gold)]" />
        </div>
      </div>
    </div>
  );
}
