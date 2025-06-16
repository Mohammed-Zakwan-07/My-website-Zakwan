function Footer() {
  return (
    <footer className="mt-24 pt-3 pb-2 bg-[#0D1117] text-[#F0F6FC] border-t border-blue-800 px-4 -mx-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-semibold">Mohammed Zakwan</span>
        </div>

        <div className="flex items-center space-x-5 text-white text-xl sm:text-2xl">
          <a
            href="https://github.com/Mohammed-Zakwan-07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="mailto:zakwanmd16@gmail.com"
            aria-label="Email"
            className="hover:text-gray-300"
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://www.instagram.com/mohammed__zakwan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-200"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://leetcode.com/u/Zakwan177/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-yellow-300"
          >
            <i className="fas fa-code" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-zakwan-8a61b4329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <p>Made by Zakwan</p>
        <div>
          <span>&copy; 2025 Zakwan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
