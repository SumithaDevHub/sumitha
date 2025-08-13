import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      
      <main className="w-full max-w-4xl mt-8">{children}</main>
    </div>
  );
}
