export default function Coursework({ courses }) {
  return (
    <div className="coursework">
      <span>Coursework</span>

      <div className="course-list">
        {courses.map((course) => (
          <span key={course}>{course}</span>
        ))}
      </div>
    </div>
  );
}
