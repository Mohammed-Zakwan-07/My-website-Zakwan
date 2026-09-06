import { CONTACT } from "../data/Content";
import SectionLabel from "./SectionLabel";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionLabel number="05" label="Contact" />

      <div className="contact-content">
        <p className="eyebrow">Have something in mind?</p>

        <h2>
          Let's make
          <br />
          <em>something useful.</em>
        </h2>

        <a className="contact-email" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email} ↗
        </a>

        <ContactLinks />
      </div>
    </section>
  );
}
