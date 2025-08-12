"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observe when an element enters the viewport once and then stop observing.
 * Returns a ref to attach and a boolean indicating visibility.
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const elementRef = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) return; // Already visible, no need to observe again
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [options, isInView]);

  return { ref: elementRef, isInView } as const;
}
