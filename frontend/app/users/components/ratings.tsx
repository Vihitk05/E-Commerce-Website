// components/ui/RatingStars.tsx
import React from "react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Number of full stars
  const remainder = rating - fullStars; // Fractional part of the rating

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-500 text-2xl">
        &#9733;
      </span>
    ); // Full star
  }

  // Add partially filled star
  if (remainder > 0) {
    const partialStarWidth = remainder * 20; // Width of the partially filled star in pixels (20px per star)
    stars.push(
      <span key="partial" className="relative inline-block">
        <span
          className="absolute top-0 left-0"
          style={{ width: `${partialStarWidth}px`, overflow: "hidden" }}
        >
          <span className="text-yellow-500 text-2xl">&#9733;</span>{" "}
          {/* Partial star */}
        </span>
        <span className="text-gray-300 text-2xl">&#9733;</span>{" "}
        {/* Empty star */}
      </span>
    );
  }

  // Add empty stars
  for (let i = fullStars + 1; i < 5; i++) {
    stars.push(
      <span key={i} className="text-gray-300 text-2xl">
        &#9733;
      </span>
    ); // Empty star
  }

  return <div>{stars}</div>;
};

export default RatingStars;
