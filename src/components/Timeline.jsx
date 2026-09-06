import TimelineItem from "./TimelineItem";

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <div className="timeline-title">The path so far</div>

      <div className="timeline-list">
        {items.map((item, index) => (
          <TimelineItem
            key={`${item.year}-${index}`}
            year={item.year}
            title={item.title}
            note={item.note}
          />
        ))}
      </div>
    </div>
  );
}
