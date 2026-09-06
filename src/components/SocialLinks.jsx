import { CONTACT } from "../data/content";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={CONTACT.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        GitHub ↗
      </a>

      <a
        href={CONTACT.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        LinkedIn ↗
      </a>
    </div>
  );
}
