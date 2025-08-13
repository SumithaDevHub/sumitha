import React from "react";

export default function Navigation({
  navItems,
  setHoveredExpression,
  setActiveSection,
  activeSection,
  horizontal = false, // new prop to toggle layout
}) {
  return (
    <div
  className={`flex ${horizontal ? "flex-row flex-nowrap gap-4" : "flex-wrap gap-6 mt-10"} justify-center max-w-md z-20`}
>
  {navItems.map((item) => (
    <button
      key={item.label}
      onMouseEnter={() => setHoveredExpression(item.expression)}
      onMouseLeave={() => setHoveredExpression(null)}
      onClick={() => setActiveSection(item.label)}
      className={`w-24 h-24 flex flex-col items-center justify-center rounded-xl border
        ${
          activeSection === item.label
            ? "bg-green-500/20 border-green-400 shadow-[0_0_12px_rgba(34,197,94,0.5)]"
            : "bg-white/5 border-white/20 hover:bg-white/10"
        }
        transition transform hover:scale-105`}
    >
      <div className="text-2xl text-green-300">{item.icon}</div>
      <span className="mt-2 text-sm">{item.label}</span>
    </button>
  ))}
</div>

  );
}