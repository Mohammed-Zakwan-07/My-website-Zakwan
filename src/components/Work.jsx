import { PROJECTS, TIMELINE } from "../data/content";
import ProjectCard from "./ProjectCard";
import Timeline from "./Timeline";

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section-label">
        <span>04</span>
        <span>Work</span>
      </div>

      <div className="work-heading">
        <h2>
          Things I've
          <br />
          <em>built.</em>
        </h2>

        <p>
          A selection of projects spanning full-stack development,
          machine learning, data and frontend experimentation.
        </p>
      </div>

      <div className="projects">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.no} project={project} />
        ))}
      </div>

      <Timeline items={TIMELINE} />
    </section>
  );
}