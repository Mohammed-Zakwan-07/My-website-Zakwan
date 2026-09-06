import { EDUCATION, CERTIFICATIONS } from "../data/Content";

import SectionLabel from "./SectionLabel";
import EducationHeader from "./EducationHeader";
import CGPA from "./CGPA";
import Coursework from "./Coursework";
import Certification from "./Certification";

export default function Education() {
  return (
    <section id="education" className="section education">
      <SectionLabel number="03" label="Education" />

      <div className="education-main">
        <EducationHeader
          period={EDUCATION.period}
          degree={EDUCATION.degree}
          school={EDUCATION.school}
        />

        <CGPA value={EDUCATION.cgpa} outOf={EDUCATION.cgpaOutOf} />
      </div>

      <div className="education-details">
        <div>
          <span>Semester performance</span>
          <p>{EDUCATION.semesters}</p>
        </div>

        <Coursework courses={EDUCATION.coursework} />
      </div>

      {CERTIFICATIONS.map((certification) => (
        <Certification
          key={certification.title}
          certification={certification}
        />
      ))}
    </section>
  );
}
