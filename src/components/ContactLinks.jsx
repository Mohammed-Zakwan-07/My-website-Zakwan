import { CONTACT } from "../data/content";

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <a href={CONTACT.github} target="_blank" rel="noreferrer">
        GitHub
      </a>

      <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>

      <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
    </div>
  );
}
