// src/components/sections/Me.jsx
import React, { useState, useEffect } from "react";
import SectionTemplate from "./SectionTemplate";

export default function Me({ setActiveSection }) {
  const [typedName, setTypedName] = useState("");

  const fullName = "Sumitha";
  const birthDate = new Date("2003-12-19");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) age--;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const skills = ["Machine Learning", "Computer Vision", "React.js", "LLMs", "AI Automation", "Web Dev"];

  return (
    <SectionTemplate setActiveSection={setActiveSection} sectionName="Me">
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        {typedName}
        <span className="inline-block w-1 h-6 bg-green-400 ml-1 animate-pulse align-middle"></span>
      </h1>

      {/* Personal Info */}
      <p className="text-green-400 text-sm mb-6">
        Full-Stack Dev • AI Engineer • The LDS • Music Lover • Basketball Fan • {age} yrs • Bengaluru, India
      </p>

      {/* Who I Am */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
        <p>
          Hey! I'm Sumitha, a full-stack engineer on a mission to transform complex problems into intuitive, seamless solutions.
          Based in Bengaluru, I dive deep into AI, machine learning, and web development to build tools that make life smarter, faster, and more fun.
        </p>
      </div>

      {/* What I Do */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-lg bg-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Problem-Solving */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Problem-Solving Approach</h2>
        <p>
          I approach challenges with a mix of curiosity, creativity, and structured thinking—turning roadblocks into opportunities for innovation.
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-sm text-white/80">
          <li>Study existing solutions and pinpoint pain points.</li>
          <li>Brainstorm creative alternatives and anticipate edge cases.</li>
          <li>Gather feedback from peers, mentors, and users.</li>
          <li>Prototype smart solutions, leveraging AI as my co-pilot.</li>
          <li>Iterate, refine, and deliver meaningful, high-impact results.</li>
        </ol>
      </div>

      {/* Vision */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Vision</h2>
        <p>
          I believe AI and LLMs will redefine work by automating repetitive tasks and amplifying human creativity.
          My goal is to stay ahead of the curve, crafting tools that empower people, spark innovation, and make life smarter.
        </p>
      </div>

      {/* Beyond Code */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Beyond Code</h2>
        <p>
          When I’m off the keyboard, I’m vibing to high-energy EDM, shooting hoops 🏀, journaling, volunteering, and cooking up my next side project.
        </p>
      </div>
    </SectionTemplate>
  );
}
