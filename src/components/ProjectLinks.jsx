export default function ProjectLinks({ code, demo }) {
  return (
    <div className="project-links">
      <a href={code} target="_blank" rel="noreferrer">
        Code ↗
      </a>

      <a href={demo} target="_blank" rel="noreferrer">
        Demo ↗
      </a>
    </div>
  );
}