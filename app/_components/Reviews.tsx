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

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
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
      className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm
        shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <Icon className="text-4xl mb-4 mx-auto block text-[var(--color-rose-gold)]" />
      <h3 className="text-4xl font-bold text-[#4A071C] mb-2">
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
    <section className="py-16 px-8 bg-gradient-to-r from-[var(--color-beige)] to-[var(--color-offwhite)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
