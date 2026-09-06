import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../Data/Content";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="site-nav">
      <a href="#top" className="nav-logo">
        MZ<span>.</span>
      </a>

      <nav>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}

        <button
          className="theme-toggle"
          onClick={() => setDarkMode((current) => !current)}
          aria-label="Toggle dark mode"
          type="button"
        >
          <span className="theme-icon">{darkMode ? "☼" : "◐"}</span>

          <span>{darkMode ? "Light" : "Dark"}</span>
        </button>
      </nav>
    </header>
  );
}
