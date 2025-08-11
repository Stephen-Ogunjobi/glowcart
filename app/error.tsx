"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="card elevated w-full max-w-lg p-8 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[var(--color-beige)] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-7 w-7 text-[var(--color-rose-gold)]"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-neutral-600">
          {error?.message ?? "An unexpected error occurred."}
        </p>
        {error?.digest ? (
          <p className="mt-2 text-xs text-neutral-500">Ref: {error.digest}</p>
        ) : null}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={() => reset()} className="btn btn-primary">
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
