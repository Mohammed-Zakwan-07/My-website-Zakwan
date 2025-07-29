import React, { useState, useEffect } from "react";
import DoodleCanvas from "./doodlecanvas";
import DoodleGallery from "./doodlegallery";

export default function DoodlePage() {
  const [gallery, setGallery] = useState([]);

  // Load saved doodles on mount
  useEffect(() => {
    const saved = localStorage.getItem("doodles");
    if (saved) setGallery(JSON.parse(saved));
  }, []);

  // Save new doodle
  const handleSave = (imgDataUrl) => {
    const updated = [imgDataUrl, ...gallery];
    setGallery(updated);
    localStorage.setItem("doodles", JSON.stringify(updated));
  };

  // Delete a doodle
  const handleDelete = (idx) => {
    const updated = gallery.filter((_, i) => i !== idx);
    setGallery(updated);
    localStorage.setItem("doodles", JSON.stringify(updated));
  };

  return (
    <div className="w-full min-h-screen py-16 px-4 flex flex-col items-center bg-gradient-to-br from-[#1a1c2b] via-[#11131d] to-[#1a1c2b] text-white">
      <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">
        Enter the Doodleverse
      </h2>
      <p className="mb-10 text-lg text-gray-300 italic">
        Leave your presence behind with your art✨.
      </p>

      <div className="w-full max-w-5xl bg-[#0e0f1a] border border-gray-700 rounded-3xl shadow-2xl p-6">
        <DoodleCanvas onSave={handleSave} />
      </div>

      <DoodleGallery images={gallery} onDelete={handleDelete} />
    </div>
  );
}
