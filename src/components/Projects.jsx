import React from "react";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";
import BudgetBuddyImg from "../Assets/BudgetBuddy.png";
import WeatherImg from "../Assets/Weather.png";
import LeetcodeImg from "../Assets/Leetcode.png";
import GlobalStylesimg from "../Assets/GlobalStyles.png";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeIn" }}
      id="projects"
      className="text-[#EDEDED] px-4 sm:px-6 md:px-10 py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Things I’ve Done 💻
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProjectCards
          title="Budget Tracker"
          description="A clean app to manage daily expenses and visualize spending habits."
          image={BudgetBuddyImg}
          tech={["React", "Tailwind", "Chart.js"]}
          github="https://github.com/Mohammed-Zakwan-07/BudgetBuddy"
          live="https://budget-buddy-sigma-six.vercel.app/"
        />
        <ProjectCards
          title="Weather App"
          description="Learn and visualize key CSS properties with live examples"
          image={WeatherImg}
          tech={["React", "Tailwind", "API"]}
          github="https://github.com/Mohammed-Zakwan-07/Weather"
          live="https://weather-gold-two.vercel.app/"
        />

        <ProjectCards
          title="Global Styles"
          description="Learn and visualize key CSS properties with live examples"
          image={GlobalStylesimg}
          tech={["Html5", "CSS"]}
          github="https://github.com/Mohammed-Zakwan-07/GlobalStyles"
          live="https://global-styles.vercel.app/"
        />

        <ProjectCards
          title="LeetCode"
          description="Solving DSA problems to level up my logic and grind Leet ⌨️"
          image={LeetcodeImg}
          tech={["DSA", "Problem Solving"]}
          github="https://github.com/Mohammed-Zakwan-07/My-LeetCode"
          live="https://github.com/Mohammed-Zakwan-07/My-LeetCode"
        />
      </div>
    </motion.section>
  );
}
