import React from "react";

export default function ProjectCards({
  title,
  description,
  image,
  tech,
  github,
  live,
}) {
  return (
    <div className="backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-600/40 hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover border-b border-[#0b6df8]"
      />

      <div className="p-5 flex flex-col justify-between h-full space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-[#EDEDED] mb-2">{title}</h3>
          <p className="text-sm text-[#C9D1D9]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-[#161B22] text-[#58A6FF] text-xs px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#58A6FF] hover:underline hover:text-white font-medium"
            >
              View Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e9980d] hover:text-white font-medium hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
