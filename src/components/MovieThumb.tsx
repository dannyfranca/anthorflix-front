import React, { CSSProperties } from "react";
import imgPlaceHolder from "@/static/img/movie-thumb-placeholder.png";

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
      alt={alt}
      src={src ?? imgPlaceHolder}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = imgPlaceHolder;
      }}
    />
  );
};

export default MovieThumb;
