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
    <>
      {live && (
        <div
          onClick={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0D1117] border border-[#0b6df8] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.015] transition-all duration-300 flex flex-col"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover border-b border-[#0b6df8]"
          />
          <p>{title}</p>
          <p>{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="bg-[#161B22] text-[#58A6FF] text-xs px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#58A6FF] text-sm font-medium underline"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </>
  );
}
