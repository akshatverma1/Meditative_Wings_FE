export function BackgroundImage({ imageUrl, children, opacity = 0.6 }) {
    return (
      <div className="relative min-h-screen">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black" style={{ opacity: opacity }}></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
  
  