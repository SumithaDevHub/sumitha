import React, { useRef, useEffect } from "react";
import SectionTemplate from "./SectionTemplate";
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { name: "Buzz App (Mental Health)", hook: "Track and monitor mental health effortlessly. Helps users log moods, gain insights, and build better habits.", github: "https://github.com/SumithaDevHub/buzzapp-codebase/", live: "https://sumithadevhub.github.io/buzzapp-web/", tags: ["productivity", "mental health", "app"] },
  { name: "AI Tool for Dermatological Manifestations", hook: "Instant first-aid & diagnosis for skin issues using AI. Addresses high fatality due to delayed treatment.", tags: ["deep learning", "healthcare", "ai", "image recognition"] },
  { name: "Appointment Booking – College", hook: "Unified platform to schedule meetings with teachers. Solves mixed schedules and improves coordination.", tags: ["web", "education", "full-stack", "productivity"] },
  { name: "Spare Parts Management", hook: "Real-time inventory management using object detection. Streamlines industrial inventory tracking and alerts.", tags: ["ml", "industry", "object detection", "inventory"], badge: "🏆 Hackathon Winner" },
  { name: "Invoice OCR", hook: "Automates invoice extraction into a database. Reduces manual errors and saves time.", tags: ["work", "automation", "ocr", "data processing"] },
  { name: "AI Home Surveillance System", hook: "AI-powered home monitoring. Recognizes people, detects threats, and syncs with contacts.", tags: ["ai", "ml", "security", "iot"], badge: "In Progress" },
  { name: "StudyBuddy (AI-powered)", hook: "Join rooms and study with AI proctoring, enhancing focus and learning efficiency.", tags: ["productivity", "ai", "education"] },
  { name: "ScanServe", hook: "Order food using scanning, solving language barriers in Bangalore with live order tracking.", tags: ["personal", "web", "food-tech"] },
  { name: "Art Nest Website", hook: "Freelance website for ArtNest to showcase and manage art workshops.", tags: ["freelance", "web", "ui/ux"] },
  { name: "Alumni Networking Platform", hook: "Connect current students with alumni for mentorship and networking.", tags: ["web", "mern", "networking"], badge: "In Progress" },
  { name: "WeWander", hook: "Plan group hangouts with polls and discussions for friends. Efficient than endless chats.", tags: ["fun", "personal", "web"], badge: "In Progress" },
  { name: "Modrobe", hook: "Monitor your wardrobe and track clothes to avoid repeats, plus wishlist and finance tracking.", tags: ["personal", "fun", "app", "react-native"] },
  { name: "Meal Planner", hook: "Simple meal planning app for my mom.", tags: ["fun", "personal", "app"] },
  { name: "Sasyamtra Website", hook: "Complete UI design for organic product brand.", tags: ["ui", "freelance"] },
  { name: "Bhairavi Food Organics Website", hook: "Building website for organic food brand from scratch.", tags: ["freelance", "web", "branding"], badge: "In Progress" },
  { name: "Garbage Detection", hook: "ML project to detect garbage for automated cleanup or monitoring.", tags: ["ml", "ai", "image recognition"] },
];

export default function Projects({ setActiveSection }) {
  const scrollRef = useRef(null);

  // Desktop horizontal scroll arrows
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Smooth momentum scroll for mobile (optional)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isDragging = false;
    let startY;
    let scrollTopStart;

    const startDrag = (e) => {
      isDragging = true;
      startY = e.touches ? e.touches[0].pageY : e.pageY;
      scrollTopStart = container.scrollTop;
    };

    const endDrag = () => {
      isDragging = false;
    };

    const doDrag = (e) => {
      if (!isDragging) return;
      const y = e.touches ? e.touches[0].pageY : e.pageY;
      const walk = (startY - y);
      container.scrollTop = scrollTopStart + walk;
    };

    container.addEventListener("touchstart", startDrag);
    container.addEventListener("touchmove", doDrag);
    container.addEventListener("touchend", endDrag);

    return () => {
      container.removeEventListener("touchstart", startDrag);
      container.removeEventListener("touchmove", doDrag);
      container.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <SectionTemplate setActiveSection={setActiveSection} sectionName="My Projects">
      <p className="text-green-400 text-sm md:text-base mb-4 font-semibold">
        MVP Playground to Production
      </p>

      <div className="relative w-full">
        {/* Desktop Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-green-400/50 rounded-full hover:bg-green-400 transition"
        >
          <FaArrowLeft className="text-white text-lg" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-green-400/50 rounded-full hover:bg-green-400 transition"
        >
          <FaArrowRight className="text-white text-lg" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex flex-col sm:flex-row gap-4 overflow-y-auto sm:overflow-x-auto h-[500px] sm:h-[320px] px-1 sm:px-4 scroll-smooth snap-y sm:snap-none snap-mandatory scroll-pt-4 no-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-full sm:min-w-[180px] md:min-w-[200px] bg-white/10 p-3 rounded-xl border border-green-400 flex flex-col justify-between relative snap-start"
            >
              {project.badge && (
                <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 bg-yellow-400/40 backdrop-blur-sm rounded-full font-semibold text-white shadow-sm">
                  {project.badge}
                </span>
              )}

              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">{project.name}</h3>

              <p className="text-[10px] sm:text-sm md:text-sm text-white/80 mb-1">{project.hook}</p>

              <div className="flex flex-wrap gap-1 mb-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] sm:text-[9px] px-2 py-0.5 bg-green-500/50 rounded-full text-white/90 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.github && project.live && (
                <div className="flex gap-2 mt-auto flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-xs px-2 py-1 bg-green-500/50 rounded hover:bg-green-500 transition shadow-sm"
                  >
                    <FaGithub className="text-[11px]" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-xs px-2 py-1 bg-green-500/50 rounded hover:bg-green-500 transition shadow-sm"
                  >
                    <FaExternalLinkAlt className="text-[11px]" /> Live
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm md:text-base text-green-400 text-left">
        Right now, I'm always on the lookout for new projects that combine AI and user experience.<br />
        Got any cool ideas or projects in mind? 😄
      </p>
    </SectionTemplate>
  );
}
