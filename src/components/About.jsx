import React from "react";

function About() {
  return (
    <>
      <section id="about" className="h-screen">
        <div className="text-[#658ebd] text-shadow-zinc-200 px-10 py-10 backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-4xl mx-20 grid grid-cols-4 gap-4 tracking-widest">
          <h2 className="col-span-1 text-4xl font-bold text-[#e9980d]">
            About me
          </h2>
          <h2 className="text-2xl col-span-3 leading-normal">
            <span className="text-5xl font-Monoton font-light">Hi</span>I’m
            Mohammed Zakwan — a Bachelor of Computer Applications (BCA) student
            with a strong interest in coding, problem-solving, and continuous
            learning.I’m currently focused on building a solid foundation in
            software development and exploring new areas of technology to grow
            both personally and professionally. My goal over the next few years
            is to sharpen my technical skills, stay curious, and work toward
            building a meaningful career in tech.I believe learning never stops,
            and I’m always open to insights, mentorship, and conversations that
            help me improve. If you have any advice, resources, or just want to
            connect over a shared passion for tech — I’d love to chat.
          </h2>
          <h2 className="col-span-1 text-4xl font-bold text-[#e9980d]">
            Skills
          </h2>
          <ul className="text-2xl col-span-3 leading-normal">
            <li>C programming</li>
            <li>Java programming</li>
            <li>Python</li>
            <li>DSA</li>
            <li>JavaScript</li>
            <li>React.js(learning)</li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default About;
