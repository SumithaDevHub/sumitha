import React from "react";

export default function TalentPopup({ show }) {
  if (!show) return null;

  return (
    <div className="mt-2 w-80 max-w-full sm:w-80 p-4 sm:p-5 rounded-lg border border-green-400/30 bg-black/80 backdrop-blur-md shadow-lg text-sm sm:text-base leading-relaxed text-white">
  <p>
    You can talk to me about{" "}
    <span className="text-green-400">AI</span>, new ideas, life, or
    anything else. You can reach me through the contact info below! 😉
  </p>
  <div className="mt-3 flex flex-col gap-2">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=asr.sumitha@gmail.com&su=Hey%20Sumitha!%20Let's%20chat&body=Yo%20Sumitha!%20I%20wanted%20to%20talk%20about..."
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 sm:px-4 sm:py-3 rounded-md bg-green-500/20 border border-green-400/50 hover:bg-green-500/30 transition text-center"
    >
      📧 Email Me
    </a>
    <a
      href="https://www.linkedin.com/in/asr-sumitha/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 sm:px-4 sm:py-3 rounded-md bg-blue-500/20 border border-blue-400/50 hover:bg-blue-500/30 transition text-center"
    >
      🔗 LinkedIn
    </a>
  </div>
</div>

  );
}
