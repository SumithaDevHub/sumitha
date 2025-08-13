import React from "react";
import SectionTemplate from "./SectionTemplate";
import { FaGraduationCap, FaLaptopCode, FaUserTie, FaBrain } from "react-icons/fa";

const experiences = [
  {
    role: "President, The Literary & Debating Society",
    organization: "Bannari Amman Institute of Technology (CSE)",
    duration: "2024 - 2026",
    description:
      "Led and organized events, weekly meetings, and debates. Developed leadership and coordination skills. #second_home",
    icon: <FaUserTie />,
    type: "Leadership",
  },
  {
    role: "AI Intern",
    organization: "Happymongo, Bangalore",
    duration: "2022 - 2023",
    description:
      "Worked on machine learning and deep learning projects. Applied AI concepts in real-world applications.",
    icon: <FaBrain />,
    type: "Internship",
  },
  {
    role: "UI/UX Mentor",
    organization: "Night Classes for Juniors at BIT",
    duration: "2022 - 2023",
    description:
      "Taught Figma and UI/UX principles. Helped juniors build intuitive and modern interfaces.",
    icon: <FaLaptopCode />,
    type: "Mentorship",
  },
  {
    role: "Web & AI Developer",
    organization: "Self-driven Projects",
    duration: "2022 - Present",
    description:
      "Started with web development, explored ML & AI, and built multiple personal projects.",
    icon: <FaLaptopCode />,
    type: "Passion Project",
  },
  {
    role: "B.E. Computer Science & Engineering",
    organization: "Bannari Amman Institute of Technology,Sathyamangalam",
    duration: "2022 - 2026",
    description:
      "Active in societies, AI/ML internships, and web development projects.",
    icon: <FaGraduationCap />,
    type: "Education",
  },
  {
    role: "ISC, ICSE",
    organization: "St. Francis Public School, Bangalore",
    duration: "2020 ,  2022",
    description:
      "Completed secondary & high school education with focus on academics and extracurricular activities.",
    icon: <FaGraduationCap />,
    type: "Education",
  },
];

export default function Experience({ setActiveSection }) {
  return (
    <SectionTemplate setActiveSection={setActiveSection} sectionName="Experience">
      <p className="text-green-400 text-sm md:text-base mb-6 font-semibold">
        My journey through education, internships, and projects.
      </p>

      <div className="relative w-full">
  {/* Glowing vertical timeline */}
  <div className="absolute left-10 top-0 h-full w-1 bg-green-400 rounded animate-pulse-glow"></div>

  {experiences.map((exp, index) => (
    <div key={exp.role} className="mb-12 relative flex items-start">
      {/* Dot - icon on the timeline */}
      <div className="absolute left-5 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg z-10">
        {exp.icon}
      </div>

      {/* Content box to the right */}
      <div className="ml-16 p-4 rounded-xl border border-green-400 bg-white/10 text-white shadow-lg w-full">
        <h3 className="text-base md:text-lg font-bold">{exp.role}</h3>
        <p className="text-sm text-white/80">{exp.organization}</p>
        <p className="text-xs text-green-400 mb-2">{exp.duration}</p>
        <p className="text-sm text-white/80">{exp.description}</p>
        <span className="inline-block mt-2 text-[10px] px-2 py-0.5 bg-yellow-400/40 rounded-full font-semibold text-white shadow-sm">
          {exp.type}
        </span>
      </div>
    </div>
  ))}
</div>
<p className="text-green-400 text-sm md:text-base mb-6 font-semibold">
  Peep my glow-up from school vibes to AI & web hustle. 
</p>
      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e; }
            50% { box-shadow: 0 0 20px #22c55e, 0 0 40px #22c55e; }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s infinite;
          }

          @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
            from { opacity: 0; transform: translateY(20px); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s forwards;
          }
        `}
      </style>
    </SectionTemplate>
  );
}
