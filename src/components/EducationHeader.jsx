export default function EducationHeader({ period, degree, school }) {
  return (
    <div className="education-header">
      <p className="eyebrow">{period}</p>

      <h2>{degree}</h2>

      <p className="institution">{school}</p>
    </div>
  );
}
