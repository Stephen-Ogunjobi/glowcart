import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "GlowCart - Your Skincare Destination";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf9f7",
          backgroundImage: "linear-gradient(135deg, #faf9f7 0%, #f3f1eb 100%)",
        }}
      >
        {/* Main content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px",
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(135deg, #b76e79 0%, #4a071c 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "24px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            GlowCart
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#4a071c",
              marginBottom: "16px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Your Skincare Destination
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: "#6b7280",
              maxWidth: "600px",
              lineHeight: 1.4,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Discover premium skincare products. From cleansers to serums, find
            everything you need for healthy, glowing skin.
          </div>

          {/* Decorative elements */}
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#b76e79",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#d1a3aa",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#e8d5d8",
              }}
            />
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
