import React, { CSSProperties } from "react";

interface MovieThumbProps {
  src?: string;
  alt?: string;
  style?: CSSProperties;
}

const MovieThumb: React.FC<MovieThumbProps> = ({ src, alt, style = {} }) => {
  return (
    <img
      style={{
        width: "100%",
        borderRadius: 8,
        ...style,
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
