"use client";

import { useState, useRef } from "react";

export default function Photos({ imageList }) {
  const [selectedImage, setSelectedImage] = useState(imageList[0]); // Default image
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const zoomRef = useRef(null);

  if (!imageList || imageList.length === 0) {
    return <div>No images available</div>;
  }

  const zoomScale = 2; // Factor by which the zoomed image is scaled

  const handleMouseMove = (e) => {
    const { left, top, width, height } = zoomRef.current.getBoundingClientRect();
    const x = e.clientX - left; // Cursor X position relative to the image
    const y = e.clientY - top; // Cursor Y position relative to the image

    // Clamp values to ensure hover stays within bounds
    const clampedX = Math.max(0, Math.min(x, width));
    const clampedY = Math.max(0, Math.min(y, height));

    setHoverPosition({
      x: clampedX,
      y: clampedY,
      width,
      height,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative flex flex-col gap-5 w-full">
      <div className="relative">
        {/* Main Image */}
        <div
          className="relative w-full flex justify-center items-center"
          ref={zoomRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="object-cover h-[350px] md:h-[430px] rounded-md"
            src={selectedImage}
            alt="Selected Product"
          />

          {/* Hover Blur Box */}
          {isHovering && (
            <div
              className="absolute border border-blue-500 bg-blue-500/20 rounded-md"
              style={{
                width: `${hoverPosition.width / zoomScale}px`,
                height: `${hoverPosition.height / zoomScale}px`,
                left: `${hoverPosition.x - hoverPosition.width / (zoomScale * 2)}px`,
                top: `${hoverPosition.y - hoverPosition.height / (zoomScale * 2)}px`,
                pointerEvents: "none", // Prevent interference with hover detection
              }}
            ></div>
          )}
        </div>

        {/* Zoomed-In View */}
        {isHovering && (
          <div
            className="absolute top-0 left-[50%] md:left-[calc(50%+300px)] z-50 w-[500px] h-[500px] bg-white overflow-hidden border rounded-md"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundPosition: `${(hoverPosition.x / hoverPosition.width) * 100}% ${
                (hoverPosition.y / hoverPosition.height) * 100
              }%`,
              backgroundSize: `${zoomScale * 100}%`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="flex flex-wrap justify-center items-center gap-3 w-full">
        {imageList.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item)}
            className={`cursor-pointer w-[80px] border rounded-md p-2 ${
              selectedImage === item ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <img
              className="object-cover w-full h-full rounded-md"
              src={item}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
