export default function TimelineItem({ year, title, note }) {
  return (
    <article className="timeline-item">
      <span className="timeline-year">{year}</span>

      <div>
        <h3>{title}</h3>
        <p>{note}</p>
      </div>
    </article>
  );
}
