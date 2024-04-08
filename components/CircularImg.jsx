import React, { useState } from "react";

const CircularImg = ({ imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-32 h-32 bg-gray-100 rounded-full overflow-hidden dm:w-28 dm:h-28">
      <img
        src={imageUrl}
        alt="Uploaded"
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.3s ease-in-out" }}
        onLoad={handleImageLoad}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400 dm:text-sm">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default CircularImg;
