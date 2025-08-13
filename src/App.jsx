import React, { useState, useEffect } from "react";
import FluidCanvas from "./components/FluidCanvas";
import Avatar from "./components/Avatar";
import TalentPopup from "./components/TalentPopup";
import Intro from "./components/Intro";

import Me from "./components/sections/Me.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Skills from "./components/sections/Skills.jsx";
import Contact from "./components/sections/Contact.jsx";
import Faq from "./components/sections/Faq.jsx";

import {
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaSmile,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

import avatarOpen from "./components/assets/avatar_openEyes.png";
import avatarClose from "./components/assets/avatar_closeEyes.png";
import avatarSide from "./components/assets/avatar_sideEyes.png";
import avatarWink from "./components/assets/avatar_winkEyes.png";
import avatarHeart from "./components/assets/avatar_heartEyes.png";
import avatarRoll from "./components/assets/avatar_rollEyes.png";
import avatarSurprised from "./components/assets/avatar_suprisedEyes.png";

export default function App() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [hoveredExpression, setHoveredExpression] = useState(null);
  const [showTalentPopup, setShowTalentPopup] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);

  // Update screen size dynamically
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hoveredExpression) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, [hoveredExpression]);

  const navItems = [
    { label: "Me", icon: <FaUser />, expression: avatarSide },
    { label: "Projects", icon: <FaFolderOpen />, expression: avatarWink },
    { label: "Experience", icon: <FaBriefcase />, expression: avatarRoll },
    { label: "Skills", icon: <FaSmile />, expression: avatarHeart },
    { label: "Contact", icon: <FaEnvelope />, expression: avatarSurprised },
    { label: "FAQ", icon: <FaQuestionCircle />, expression: avatarSide },
  ];

  let avatarImage = avatarOpen;
  if (hoveredExpression) avatarImage = hoveredExpression;
  else if (isBlinking) avatarImage = avatarClose;

  const sectionProps = {
    navItems,
    setHoveredExpression,
    setActiveSection,
    activeSection,
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Me":
        return <Me {...sectionProps} />;
      case "Projects":
        return <Projects {...sectionProps} />;
      case "Experience":
        return <Experience {...sectionProps} />;
      case "Skills":
        return <Skills {...sectionProps} />;
      case "Contact":
        return <Contact {...sectionProps} />;
      case "FAQ":
        return <Faq {...sectionProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white z-10">
      {activeSection === "Home" ? (
        <>
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <FluidCanvas />
          </div>

          {/* Talent Section (only large screens) */}
          {isLargeScreen && (
            <div
              className="absolute top-6 left-6 flex flex-col gap-2 z-20"
              onMouseEnter={() => setShowTalentPopup(true)}
              onMouseLeave={() => setShowTalentPopup(false)}
            >
              <div className="flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm cursor-pointer bg-black/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                Looking for a Talent?
              </div>
              <TalentPopup show={showTalentPopup} />
            </div>
          )}

          {/* Intro */}
          <Intro />

          {/* Avatar */}
          <Avatar src={avatarImage} className="w-48 h-48 mt-6" />

          {/* Navigation grid */}
          <div className="grid grid-cols-3 gap-8 mt-10 z-20">
            {navItems.map(({ label, icon, expression }) => (
              <button
                key={label}
                className="flex flex-col items-center text-white hover:text-green-400 transition"
                onClick={() => setActiveSection(label)}
                onMouseEnter={() => setHoveredExpression(expression)}
                onMouseLeave={() => setHoveredExpression(null)}
                aria-label={label}
              >
                <div className="text-4xl">{icon}</div>
                <span className="mt-2 text-lg font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        renderSection()
      )}
    </div>
  );
}
