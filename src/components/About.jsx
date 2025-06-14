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
      { name: "Framer motion", icon: "devicon-framermotion-plain" },
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
      { name: "Chatgpt", icon: "devicon-chatgpt-plain" },
    ],
    Explorinig: [{ name: "Figma", icon: "devicon-figma-plain" }],
  };

  return (
    <>
      <section
        id="about"
        className="grid grid-cols-5 grid-rows-5 gap-6 px-8 py-20"
      >
        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-3 row-span-3 text-[#EDEDED] text-lg leading-relaxed tracking-wide backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-3xl p-10 "
        >
          <h2 className="text-4xl font-semibold mb-4 text-[#ffffff]">
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
            I’m proud of. I’m always up for a tech convo or swapping resources,
            so if you’re down to connect — slide in 👇
          </p>
        </motion.div>

        {/* Accordion Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="col-span-2 row-span-3 text-[#EDEDED] backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold mb-4 text-[#ffffff]">
            Things I Know
          </h3>
          {Object.entries(sections).map(([title, items]) => (
            <div key={title} className="mb-4">
              <button
                onClick={() => toggleSection(title)}
                className="w-full flex justify-between items-center text-lg font-semibold px-4 py-2 bg-[#161B22] hover:bg-[#1f2937] transition rounded-md"
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
                    className="pl-5 pt-2 list-outside text-xl space-y-1"
                  >
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className={`${item.icon} colored text-xl`}></i>
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
    </>
  );
}

export default About;
