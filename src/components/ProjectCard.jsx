import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="project-number">{project.no}</div>

      <div className="project-main">
        <div className="project-header">
          <p className="project-kicker">{project.kicker}</p>

          <h3>{project.name}</h3>
        </div>

        <p className="project-blurb">{project.blurb}</p>

        <div className="project-bottom">
          <ProjectTags tags={project.tags} />

          <ProjectLinks code={project.code} demo={project.demo} />
        </div>
      </div>
    </article>
  );
}
