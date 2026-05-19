import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
];

function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const sliderRef = useRef(null);

  const nextSlide = () => setIndex((i) => (i + 1) % images.length);
  const prevSlide = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Start dragging
  const handlePointerDown = (e) => {
    setDragging(true);
    setStartX(e.clientX || e.touches?.[0].clientX);
  };

  // Drag movement
  const handlePointerMove = (e) => {
    if (!dragging) return;

    const currentX = e.clientX || e.touches?.[0].clientX;
    const diff = currentX - startX;

    setTranslateX(diff);
  };

  // Release drag
  const handlePointerUp = () => {
    if (!dragging) return;

    setDragging(false);

    if (translateX > 80) prevSlide();
    else if (translateX < -80) nextSlide();

    setTranslateX(0);
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      <div
        className="slides"
        style={{
          transform: `translateX(calc(-${index * 100}% + ${
            (translateX / (sliderRef.current?.offsetWidth || 1)) * 100
          }%))`,
          transition: dragging ? "none" : "0.5s ease"
        }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} draggable="false" />
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
