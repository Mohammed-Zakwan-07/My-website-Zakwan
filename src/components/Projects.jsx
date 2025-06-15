import React from "react";
import ProjectCards from "./ProjectCards";
import { easeInOut, motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        id="projects"
      >
        <div className="text-[#EDEDED] p-10 -mt-60 mx-7">
          <p className="text-3xl">Things i have done</p>
          <div className="grid grid-cols-3 gap-4">
            <ProjectCards
              title="Budget Tracker"
              description="A clean app to manage daily expenses and visualize spending habits."
              image="/images/budget-tracker.png"
              tech={["React", "Tailwind", "Chart.js"]}
              github="https://github.com/Mohammed-Zakwan-07/BudgetBuddy"
              live="https://budget-buddy-sigma-six.vercel.app/"
            />
            <ProjectCards
              title="Budget Tracker"
              description="A clean app to manage daily expenses and visualize spending habits."
              image="/images/budget-tracker.png"
              tech={["React", "Tailwind", "Chart.js"]}
              github="https://github.com/y/budget-tracker"
              live="https://yourtracker.vercel.app"
            />
            <ProjectCards
              title="Budget Tracker"
              description="A clean app to manage daily expenses and visualize spending habits."
              image="/images/budget-tracker.png"
              tech={["React", "Tailwind", "Chart.js"]}
              github="https://github.com/y/budget-tracker"
              live="https://yourtracker.vercel.app"
            />
            <ProjectCards
              title="Budget Tracker"
              description="A clean app to manage daily expenses and visualize spending habits."
              image="/images/budget-tracker.png"
              tech={["React", "Tailwind", "Chart.js"]}
              github="https://github.com/y/budget-tracker"
              live="https://yourtracker.vercel.app"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
