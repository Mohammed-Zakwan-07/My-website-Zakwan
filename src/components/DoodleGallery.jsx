import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DoodleGallery({ images, onDelete }) {
  if (!images || !images.length) return null;
  return (
    <div className="w-full max-w-4xl mt-8 px-2">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        🎨 Lost Strokes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-xl group transition-all"
          >
            <img
              src={img}
              alt={`Doodle ${i + 1}`}
              className="w-full h-full rounded-xl border-2 border-gray-100 dark:border-gray-800"
            />
            <button
              className="absolute top-2 right-2 bg-red-200 dark:bg-red-700 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              title="Delete"
              onClick={() => onDelete(i)}
            >
              <TrashIcon className="h-5 w-5 text-red-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
