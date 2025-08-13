import React, { useState } from "react";
import SectionTemplate from "./SectionTemplate";
import { FaLinkedin, FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

export default function Contact({ setActiveSection }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("asr.sumitha@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ButtonLink = ({ href, icon: Icon, label, glowColor }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-5 py-2 border ${glowColor} text-white font-mono tracking-wider bg-black/40 hover:shadow-[0_0_12px_var(--glow)] transition-transform transform hover:scale-105`}
      style={{
        "--glow": glowColor.includes("green")
          ? "#00ff9d"
          : glowColor.includes("blue")
          ? "#00e5ff"
          : "#ff2eff",
      }}
    >
      <Icon size={18} /> {label}
    </a>
  );

  return (
    <SectionTemplate setActiveSection={setActiveSection} sectionName="Contact">
      <div className="flex flex-col items-center justify-center gap-6 text-center overflow-hidden py-10">
        <h2 className="text-xl font-bold text-green-400 font-mono">
          // LET’S BUILD COOL STUFF 🚀
        </h2>

        <p className="text-sm md:text-base text-green-400 font-mono max-w-md">
          Into <span className="text-white">AI</span>? Or just wanna vibe about
          tech? Ping me — my comms are always online 💌
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="https://www.linkedin.com/in/asr-sumitha/"
            icon={FaLinkedin}
            label="LINKEDIN"
            glowColor="border-blue-400"
          />
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-5 py-2 border border-pink-400 text-white font-mono tracking-wider bg-black/40 hover:shadow-[0_0_12px_var(--glow)] transition-transform transform hover:scale-105"
            style={{ "--glow": "#ff2eff" }}
          >
            <FaEnvelope size={18} /> EMAIL ME
          </button>
          <ButtonLink
            href="https://x.com/sumitha_asr"
            icon={FaTwitter}
            label="X "
            glowColor="border-green-400"
          />
          <ButtonLink
            href="https://github.com/SumithaDevHub"
            icon={FaGithub}
            label="GITHUB"
            glowColor="border-purple-400"
          />
        </div>

        {copied && (
          <div className="bg-green-500/20 border border-green-400 text-green-400 px-4 py-1 rounded text-sm font-mono animate-pulse">
            [ EMAIL COPIED TO CLIPBOARD ]
          </div>
        )}

        <p className="text-sm md:text-base text-green-400 font-mono mt-2">
          Always ready for new ideas & synergy.
        </p>
      </div>
    </SectionTemplate>
  );
}
