import React from "react";

export default function Intro() {
  return (
    <div className="mt-20 mb-7 px-4 sm:px-6 text-center animate-fadeIn z-20 max-w-xl sm:max-w-2xl mx-auto">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
    Hey, I’m{" "}
    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]">
      Sumitha 👋
    </span>
  </h1>

  <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
    I{" "}
    <span className="text-green-400 font-semibold drop-shadow-[0_0_6px_rgba(74,222,128,0.6)]">
      turn brainwaves → products
    </span>
    , before your coffee even thinks of cooling —{" "}
    <span className="ml-2 align-middle px-3 py-1 rounded-full bg-green-300/10 border border-green-300/30 text-green-200 font-medium shadow-[0_0_6px_rgba(34,197,94,0.4)]">
      full stack AI builder
    </span>
  </p>
</div>

  );
}
