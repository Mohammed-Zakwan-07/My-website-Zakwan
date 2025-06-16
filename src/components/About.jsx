import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  const sections = {
    Languages: [
      { name: "C", icon: "devicon-c-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "R", icon: "devicon-r-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    Frontend: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Framer motion", icon: "" },
    ],
    Concepts: [
      { name: "🧠 DSA", icon: "" },
      { name: "💡 Problem Solving", icon: "" },
      { name: "🐴 OOPs", icon: "" },
    ],
    Tools: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "ChatGPT", icon: "" },
    ],
    Exploring: [{ name: "Figma", icon: "devicon-figma-plain" }],
  };

  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-5 gap-6"
    >
      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:col-span-3 text-[#EDEDED] text-base sm:text-lg leading-relaxed tracking-wide backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-3xl p-6 sm:p-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
          Hi, I’m Mohammed Zakwan
        </h2>
        <p className="mb-4">
          I’m a BCA student based in Bengaluru with a genuine love for tech,
          problem-solving, and figuring things out one bug at a time.
        </p>
        <p className="mb-4">
          Right now, I’m focused on building a solid foundation in software
          development — dabbling across code, logic, and a lil’ bit of
          everything in between.
        </p>
        <p className="mb-4">
          My goal? Keep learning, stay curious, and eventually craft a career
          I’m proud of. I’m always up for a tech convo or swapping resources, so
          if you’re down to connect — slide in 👇
        </p>
      </motion.div>

      {/* Skills Accordion */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="md:col-span-2 text-[#EDEDED] backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-3xl p-6 sm:p-8"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Things I Know
        </h3>
        {Object.entries(sections).map(([title, items]) => (
          <div key={title} className="mb-4">
            <button
              onClick={() => toggleSection(title)}
              className="w-full flex justify-between items-center text-base font-semibold px-4 py-2 bg-[#161B22] hover:bg-[#1f2937] transition rounded-md"
            >
              <span>{title}</span>
              <span>{openSection === title ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {openSection === title && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-5 pt-2 list-outside text-base sm:text-lg space-y-1"
                >
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {item.icon && (
                        <i className={`${item.icon} colored text-xl`}></i>
                      )}
                      {item.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
