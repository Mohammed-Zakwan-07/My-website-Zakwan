export default function CGPA({ value, outOf }) {
  return (
    <div className="cgpa">
      <span>CGPA</span>

      <div>
        <strong>{value}</strong>
        <small>/ {outOf}</small>
      </div>
    </div>
  );
}
