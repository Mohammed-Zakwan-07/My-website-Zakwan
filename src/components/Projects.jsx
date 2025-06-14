import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        id="projects"
        className=""
      >
        <div className="text-[#EDEDED] text-lg leading-relaxed tracking-wide backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-3xl p-10">
          <p className="text-3xl">What i did</p>
        </div>
      </motion.section>
    </>
  );
}
