import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

// Full-screen image viewer: click/tap the image to zoom, move to pan,
// arrows or keyboard to switch images, Esc or backdrop click to close.
export function ImageLightbox({ images, startIndex = 0, alt, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const [zoomed, setZoomed] = useState(false)
  const [origin, setOrigin] = useState("50% 50%")
  const hasMany = images.length > 1

  const showImage = (newIndex) => {
    setIndex((newIndex + images.length) % images.length)
    setZoomed(false)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight" && hasMany) showImage(index + 1)
      if (e.key === "ArrowLeft" && hasMany) showImage(index - 1)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  })

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const updateOrigin = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  const toggleZoom = (e) => {
    e.stopPropagation()
    updateOrigin(e)
    setZoomed(!zoomed)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setZoomed(!zoomed)
          }}
          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          <span className="sr-only">{zoomed ? "Zoom out" : "Zoom in"}</span>
        </button>
        <button
          type="button"
          onClick={onClose}
          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
      </div>

      <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center overflow-hidden min-h-0">
        <img
          src={images[index]}
          alt={`${alt} - image ${index + 1}`}
          onClick={toggleZoom}
          onMouseMove={(e) => zoomed && updateOrigin(e)}
          style={{ transformOrigin: origin }}
          className={`max-w-full max-h-[80vh] object-contain rounded-lg transition-transform duration-300 select-none ${
            zoomed ? "scale-[2.5] cursor-zoom-out" : "cursor-zoom-in"
          }`}
          draggable={false}
        />

        {hasMany && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showImage(index - 1)
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/50 hover:bg-primary/80 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showImage(index + 1)
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/50 hover:bg-primary/80 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </button>
          </>
        )}
      </div>

      {hasMany && (
        <div className="mt-4 flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <span className="text-sm text-white/70">
            {index + 1} / {images.length}
          </span>
          <div className="flex gap-2 overflow-x-auto max-w-[90vw] pb-1">
            {images.map((image, i) => (
              <button
                key={i}
                type="button"
                onClick={() => showImage(i)}
                className={`h-14 w-14 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                  i === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={image} alt={`${alt} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
