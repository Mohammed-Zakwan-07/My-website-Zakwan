import { SKILLS } from "../data/content";
import SectionLabel from "./SectionLabel";
import SkillList from "./SkillList";

export default function About() {
  return (
    <section id="about" className="section about">
      <SectionLabel number="02" label="About" />

      <div className="about-grid">
        <h2>
          I like understanding
          <br />
          <em>how things work.</em>
        </h2>

        <div className="about-copy">
          <p>
            I'm a BCA student interested in building useful software and
            understanding the data behind it.
          </p>

          <p>
            My work moves between frontend development, machine learning,
            databases and problem solving. I learn best by building things
            rather than keeping everything inside tutorials.
          </p>

          <div className="skills">
            <SkillList title="Core" skills={SKILLS.core} />

            <SkillList title="Familiar" skills={SKILLS.familiar} />
          </div>
        </div>
      </div>
    </section>
  );
}