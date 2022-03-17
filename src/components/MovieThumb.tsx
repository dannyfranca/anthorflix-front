import React from "react";

interface MovieThumbProps {
  src?: string;
  alt?: string;
}

const MovieThumb: React.FC<MovieThumbProps> = ({ src, alt }) => {
  return (
    <img
      style={{
        width: "100%",
        maxWidth: "200px",
        borderRadius: 8,
      }}
      src={`${
        src ??
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qrGqcfVvFrn3013meVlCe8BR7sb.jpg"
      }`}
      alt={alt}
    />
  );
};

export default MovieThumb;
