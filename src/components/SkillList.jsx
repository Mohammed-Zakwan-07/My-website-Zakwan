export default function SkillList({ title, skills }) {
  return (
    <div className="skill-group">
      <span className="skill-group-title">{title}</span>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
