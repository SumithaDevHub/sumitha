import React from "react";

export default function Avatar({ src }) {
  return (
    <img
      src={src}
      alt="Sumitha"
      className="w-44 h-54 sm:w-48 sm:h-60 md:w-56 md:h-64
                 rounded-full my-10
                 border-4 border-green-400/40
                 shadow-[0_0_20px_rgba(0,255,170,0.5)]
                 backdrop-blur-sm
                 animate-float
                 z-20"
    />
  );
}
