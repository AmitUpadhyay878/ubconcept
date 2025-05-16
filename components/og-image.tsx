import { ImageResponse } from "next/og"

export const OgImage = async ({
  title = "UBConcept",
  subtitle = "Transform Your Idea into Product",
}: {
  title?: string
  subtitle?: string
}) => {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "40px 80px",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                borderRadius: "12px",
                transform: "rotate(45deg)",
              }}
            />
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 10 }}>
              <path
                d="M9.663 17h4.673M12 6.5v1M8.4 9.75l-0.7-0.7M15.6 9.75l0.7-0.7M12 17v-3.5M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            UBConcept
          </div>
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "10px",
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#aaa",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
