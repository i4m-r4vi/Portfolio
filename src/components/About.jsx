import React from "react";

const About = ({ darkMode }) => {
  return (
    <div className={darkMode ? "about_dark w-96 lg:w-[600px] m-4" : "about_details w-96 lg:w-[600px] m-4"}>
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About</h2>
        <p className="text-sm overflow-scroll">
          I have a strong background in full-stack development and cybersecurity. My journey began with web development, where I built
          scalable applications using <span className="font-semibold">MongoDB, Express.js, React, and Node.js (MERN)</span>. Over time, I
          developed an interest in cybersecurity, focusing on secure coding practices, vulnerability assessments, and penetration testing.
        </p>
      </div>

      <h2 className="font-bold text-xl sm:text-2xl py-3">What I do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className={darkMode ? "skills_fb rounded-lg text-black" : "skills_fb rounded-lg text-black"}>
          <div className="flex flex-col sm:flex-col p-4">
            <h2 className="text-lg font-bold">Frontend Development</h2>
            <p className="text-sm sm:text-sm">
              With a strong proficiency in <span className="font-semibold">React.js</span>, I specialize in transforming design
              concepts into dynamic and user-friendly websites.
            </p>
          </div>
        </div>

        <div className={darkMode ? "skills_fb rounded-lg text-black" : "skills_fb rounded-lg text-black"}>
          <div className="flex flex-col sm:flex-col p-4">
            <h2 className="text-lg font-bold">Backend Development</h2>
            <p className="text-sm sm:text-sm">
              Skilled in <span className="font-semibold">Node.js</span> and <span className="font-semibold">Express.js</span>,
              I build scalable backend systems and efficient server-side solutions using databases like{" "}
              <span className="font-semibold">MongoDB</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
