import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FollowHero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[70vh] flex items-center justify-center  px-6 py-24">
      <div className="text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extralight text-[#F0F6FC] tracking-widest"
        >
          Something¯\_(ツ)_/¯
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-[#7d8590] text-md sm:text-lg mt-6 max-w-xl mx-auto"
        >
          Most scroll past. A few click. Fewer still understand.
        </motion.p>

        <motion.button
          onClick={() => navigate("/doodle")}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-3 text-[#0D1117] bg-[#facc15] hover:bg-[#eab308] rounded-full font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
        >
          I'm Curious
        </motion.button>
      </div>
    </section>
  );
}
