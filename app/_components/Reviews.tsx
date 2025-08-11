"use client";

import { useState, useEffect, useRef } from "react";
import { MdStarRate, MdLocalShipping, MdPeople } from "react-icons/md";

function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = observerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start, isInView]);

  return { count, observerRef };
}

function StatCard({
  number,
  label,
  icon: Icon,
}: {
  number: number;
  label: string;
  icon: React.ElementType;
}) {
  const { count, observerRef } = useCountUp(number);

  return (
    <div
      ref={observerRef}
      className="relative text-center p-8 card elevated hover-tilt transition-all duration-300"
    >
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--gradient-rose)" }}
      />
      <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-[var(--color-blush)]/70 text-[var(--color-rose-gold)] soft-shadow">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-4xl font-bold mb-2 gradient-text">
        {count.toLocaleString()}+
      </h3>
      <p className="text-[var(--color-rose-gold)] text-lg">{label}</p>
    </div>
  );
}

export default function Reviews() {
  const stats = [
    {
      number: 1000,
      label: "Happy Reviews",
      icon: MdStarRate,
    },
    {
      number: 5000,
      label: "Deliveries Made",
      icon: MdLocalShipping,
    },
    {
      number: 500,
      label: "Customers Served",
      icon: MdPeople,
    },
  ];
  return (
    <section className="relative overflow-hidden section py-16 px-8">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-20 w-[360px] h-[360px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-rose) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-lavender) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
