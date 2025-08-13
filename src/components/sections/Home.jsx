import React, { useState, useEffect } from "react";
import FluidCanvas from "../FluidCanvas";
import Avatar from "../Avatar";
import TalentPopup from "../TalentPopup";

import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaSmile,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

import avatarOpen from "../assets/avatar_openEyes.png";
import avatarClose from "../assets/avatar_closeEyes.png";
import avatarSide from "../assets/avatar_sideEyes.png";
import avatarWink from "../assets/avatar_winkEyes.png";
import avatarHeart from "../assets/avatar_heartEyes.png";
import avatarRoll from "../assets/avatar_rollEyes.png";
import avatarSurprised from "../assets/avatar_suprisedEyes.png";

export default function Home({ setActiveSection }) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [hoveredExpression, setHoveredExpression] = useState(null);
  const [showTalentPopup, setShowTalentPopup] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Track screen size dynamically
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Blinking logic
  useEffect(() => {
    if (hoveredExpression) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, [hoveredExpression]);

  const navItems = [
    { label: "Home", icon: <FaHome />, expression: avatarSide },
    { label: "Me", icon: <FaUser />, expression: avatarSide },
    { label: "Projects", icon: <FaFolderOpen />, expression: avatarWink },
    { label: "Experience", icon: <FaBriefcase />, expression: avatarRoll },
    { label: "Fun", icon: <FaSmile />, expression: avatarHeart },
    { label: "Contact", icon: <FaEnvelope />, expression: avatarSurprised },
    { label: "FAQ", icon: <FaQuestionCircle />, expression: avatarSide },
  ];

  let avatarImage = avatarOpen;
  if (hoveredExpression) avatarImage = hoveredExpression;
  else if (isBlinking) avatarImage = avatarClose;

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white z-10 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <FluidCanvas />
      </div>

      {/* Talent Button - only for large screens */}
      {isLargeScreen && (
        <div
          className="absolute top-4 left-4 z-30"
          onClick={() => setShowTalentPopup(true)}
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm cursor-pointer bg-black/50">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
            </span>
            Looking for a Talent?
          </div>
        </div>
      )}

      {/* Talent Popup Modal - only for large screens */}
      {showTalentPopup && isLargeScreen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-sm">
            <button
              className="absolute top-2 right-2 text-white/70 hover:text-white text-xl sm:text-2xl"
              onClick={() => setShowTalentPopup(false)}
            >
              ×
            </button>
            <TalentPopup show={showTalentPopup} />
          </div>
        </div>
      )}

      {/* Greeting text */}
      <h1 className="mt-6 mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-center z-10">
        Hi, I'm Sumitha
      </h1>

      {/* Avatar */}
      <Avatar
        src={avatarImage}
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full z-10 my-4"
      />

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 z-10">
        {navItems.map(({ label, icon, expression }) => (
          <div
            key={label}
            className="relative flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                       rounded-xl border border-green-400/40
                       bg-white/5 backdrop-blur-md
                       shadow-[0_0_8px_rgba(0,255,170,0.3)]
                       hover:shadow-[0_0_16px_rgba(0,255,170,0.6)]
                       transition-all duration-300 p-1"
            onMouseEnter={() => setHoveredExpression(expression)}
            onMouseLeave={() => setHoveredExpression(null)}
          >
            <button
              className="flex flex-col items-center justify-center w-full h-full
                         rounded-xl bg-white/10 backdrop-blur-lg
                         hover:bg-white/20
                         transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
              onClick={() => setActiveSection(label)}
            >
              <div className="text-lg sm:text-xl md:text-2xl">{icon}</div>
              <span className="mt-1 text-center">{label}</span>
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}
