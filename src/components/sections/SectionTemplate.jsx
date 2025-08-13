import React, { useState } from "react";
import FluidCanvas from "../FluidCanvas";
import Avatar from "../Avatar";
import TalentPopup from "../TalentPopup";
import {
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaSmile,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

import avatarOpen from "../assets/avatar_openEyes.png";
import avatarSide from "../assets/avatar_sideEyes.png";
import avatarWink from "../assets/avatar_winkEyes.png";
import avatarHeart from "../assets/avatar_heartEyes.png";
import avatarRoll from "../assets/avatar_rollEyes.png";
import avatarSurprised from "../assets/avatar_suprisedEyes.png";

export default function SectionTemplate({ setActiveSection, children, sectionName }) {
  const [hoveredExpression, setHoveredExpression] = useState(null);
  const [showTalentPopup, setShowTalentPopup] = useState(false);

  const avatarImage = hoveredExpression ? hoveredExpression : avatarOpen;

  const navItems = [
    { label: "Me", icon: <FaUser />, expression: avatarSide },
    { label: "Projects", icon: <FaFolderOpen />, expression: avatarWink },
    { label: "Experience", icon: <FaBriefcase />, expression: avatarRoll },
    { label: "Skills", icon: <FaSmile />, expression: avatarHeart },
    { label: "Contact", icon: <FaEnvelope />, expression: avatarSurprised },
    { label: "FAQ", icon: <FaQuestionCircle />, expression: avatarSide },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white z-10 px-4 sm:px-6">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <FluidCanvas />
      </div>

      {/* Talent Popup */}
      {/* <div
        className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-col gap-2 z-20"
        onMouseEnter={() => setShowTalentPopup(true)}
        onMouseLeave={() => setShowTalentPopup(false)}
      >
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm cursor-pointer">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Looking for a Talent ?
        </div>
        <TalentPopup show={showTalentPopup} />
      </div> */}

      {/* Back to Home */}
      <button
  onClick={() => setActiveSection("Home")}
  className="
    absolute top-16 sm:top-20 left-4 sm:left-6
    bg-green-500/20 hover:bg-green-500/40
    text-green-400 hover:text-white
    font-semibold
    px-3 sm:px-4 py-1.5 sm:py-2
    rounded-full
    shadow-md hover:shadow-lg
    transition-all duration-300
    z-20
    text-sm sm:text-base
  "
>
  ← Back
</button>


      {/* Avatar Center */}
      <Avatar
        src={avatarImage}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mt-6 rounded-full border-2 border-green-400 z-20"
      />

      {/* Main Container */}
      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-3xl
                h-[480px] sm:h-[512px] md:h-[420px]
                bg-white/10 backdrop-blur-md rounded-md p-4 sm:p-6 mt-6
                overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent
                z-20 flex flex-col"
>
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 flex-shrink-0">
    {sectionName}
  </h2>
  <div className="flex-1 overflow-y-auto">
    {children}
  </div>
</div>

        
      {/* Bottom Nav */}
      <div className="fixed bottom-4 left-0 right-0 flex flex-wrap justify-center gap-3 sm:gap-4 z-20 px-2">
        {navItems.map(({ label, icon, expression }) => (
          <button
            key={label}
            className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                       rounded-lg border border-green-400/50
                       bg-white/10 backdrop-blur-md
                       shadow-[0_0_6px_rgba(0,255,170,0.5)] hover:shadow-[0_0_12px_rgba(0,255,170,0.8)]
                       hover:border-green-300 hover:text-green-300
                       transition-all duration-300 text-xs sm:text-sm"
            onClick={() => setActiveSection(label)}
            onMouseEnter={() => setHoveredExpression(expression)}
            onMouseLeave={() => setHoveredExpression(null)}
          >
            <div className="text-lg sm:text-xl md:text-2xl">{icon}</div>
            <span className="mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
