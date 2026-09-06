export default function Certification({ certification }) {
  return (
    <div className="certification">
      <span>Certification</span>

      <div>
        <h3>{certification.title}</h3>

        <p>{certification.issuer}</p>

        <small>{certification.note}</small>
      </div>
    </div>
  );
}
