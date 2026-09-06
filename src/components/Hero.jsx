import { CONTACT } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-index">01 / PORTFOLIO</div>

      <div className="hero-content">
        <p className="eyebrow">Computer Applications · Data · Development</p>

        <h1>
          Mohammed
          <br />
          <em>Zakwan.</em>
        </h1>

        <p className="hero-description">
          BCA student building at the intersection of software development,
          data and machine learning.
        </p>

        <div className="hero-actions">
          <a href="#work">View selected work</a>
          <a href={`mailto:${CONTACT.email}`}>Get in touch ↗</a>
        </div>
      </div>

      <div className="hero-meta">
        <span>Based in</span>
        <strong>Bengaluru, India</strong>

        <span>Currently</span>
        <strong>BCA · 2024—2027</strong>
      </div>
    </section>
  );
}