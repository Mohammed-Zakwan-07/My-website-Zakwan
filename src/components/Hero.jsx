import React from "react";

function Hero() {
  return (
    <>
      {/* Glassy Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/70 backdrop-blur-lg border-b border-[#161B22] shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-[#C9D1D9]">MohammedZakwan</h1>
          <nav className="hidden md:flex space-x-6 font-semibold text-[#C9D1D9]">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="hover:text-[#58A6FF] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center space-y-5 h-screen bg-[#0D1117] px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#C9D1D9]">
          Hi, I'm Mohammed Zakwan
        </h2>
        <p className="text-xl sm:text-3xl text-[#6E7681]">
          CS Student / Learner / Coder
        </p>
      </section>
    </>
  );
}

export default Hero;
