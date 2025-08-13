import React from "react";
import SectionTemplate from "./SectionTemplate";
import { FaLaptopCode, FaServer, FaPalette, FaUserTie, FaBrain, FaDatabase, FaToolbox, FaHammer } from "react-icons/fa";

const skillCategories = [
  {
    icon: <FaLaptopCode className="text-green-400 text-lg md:text-xl" />,
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "ReactJS", "Vercel", "GSAP"]
  },
  {
    icon: <FaServer className="text-green-400 text-lg md:text-xl" />,
    title: "Backend & Systems",
    skills: ["Linux", "C", "Java", "Python", "Node.js", "Express.js", "Git", "GitHub"]
  },
  {
    icon: <FaDatabase className="text-green-400 text-lg md:text-xl" />,
    title: "Databases & Data Packages",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV", "Matplotlib", "Seaborn"]
  },
  {
    icon: <FaToolbox className="text-green-400 text-lg md:text-xl" />,
    title: "Frameworks & Other Tools",
    skills: ["Flask", "Tkinter", "Postman", "MS Office", "Visual Studio", "Anaconda", "Notion"]
  },
  {
    icon: <FaPalette className="text-green-400 text-lg md:text-xl" />,
    title: "Design & Creative Tools",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"]
  },
  {
    icon: <FaBrain className="text-green-400 text-lg md:text-xl" />,
    title: "AI & Machine Learning",
    skills: ["Supervised & Unsupervised Learning", "Regression", "Classification", "Clustering", "Deep Learning Architectures", "LLM Providers (ChatGPT, Groq, Claude, Perplexity)", "AI Agents", "Prompt Engineering", "RAG (Retrieval-Augmented Generation)"]
  },
  {
    icon: <FaUserTie className="text-green-400 text-lg md:text-xl" />,
    title: "Soft Skills",
    skills: ["Communication", "Problem-Solving", "Adaptability", "Learning Agility", "Teamwork", "Creativity", "Focus"]
  },
  {
    icon: <FaHammer className="text-green-400 text-lg md:text-xl" />,
    title: "Shovels (Productivity & Dev Tools)",
    skills: ["VS Code", "PyCharm", "Cursor", "ChatGPT", "Claude", "Groq", "Perplexity"]
  }
];

export default function Skills({ setActiveSection }) {
  return (
    <SectionTemplate setActiveSection={setActiveSection} sectionName="Skills">
      <div className="flex flex-col gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="w-full">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {category.icon}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 text-[9px] sm:text-xs md:text-sm border border-green-400 text-green-300 rounded-full bg-white/5 hover:bg-green-400/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs sm:text-sm md:text-base text-green-400 text-center">
        I mix these skills like ingredients for the ultimate tech recipe! 😄
      </p>
    </SectionTemplate>
  );
}
