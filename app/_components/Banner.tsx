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

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L1440 0V30C1440 46.5685 1426.57 60 1410 60H30C13.4315 60 0 46.5685 0 30V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
