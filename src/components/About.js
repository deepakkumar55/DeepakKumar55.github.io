import React, { useEffect } from 'react';
import '../CSS/About.css'; // Import Resume component styling

const About = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const lightElement = document.getElementById('light');
      lightElement.style.top = `${event.pageY - 250}px`;
      lightElement.style.left = `${event.pageX - 300}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div id='light'></div>
      <div id="resumewrap">
      <div class="text-container" align="left">
          <div id="experience" class="section">
            <header id="resumeheader">Experience </header>
            <h2 id="resumeh2">Persistent Martian Summer Internship Program 2023</h2><br /><br/>
            <h3 id="resumeh3">Persistent Systems · Internship</h3> <br />
            <h4 id="resumeh4">Jun 2023 - Dec 2023 </h4><br />
            <li>Developed proficiency in Data Structures, DBMS, Basic Linux, and Java while contributing to real-world projects, thriving in a collaborative, remote environment, and receiving mentorship from industry professionals, poised to leverage gained expertise for future endeavors in software engineering.</li><br /><br />
            <h2 id="resumeh2">Growth Manager at Preplnsta</h2><br />
            <h3 id="resumeh3">PrepInsta · Internship</h3> <br />
            <h4 id="resumeh4">may 2023 - oct 2023 </h4><br />
            <li>As a Growth Manager Intern at PrepInsta, facilitated strategic growth initiatives and executed marketing campaigns to enhance brand presence and engagement.</li><br /><br />
            <h2 id="resumeh2">virtual internships at CISCO</h2><br />
            <h3 id="resumeh3">CISCO VIRTUAL INTERNSHIP PROGRAM 2022 · Internship</h3> <br />
            <h4 id="resumeh4">Mar 2022 - Aug 2023</h4><br />
            <li>Completed virtual internships at CISCO, gaining valuable experience in cloud computing, networking, and cybersecurity.</li><br /><br />
            <h2 id="resumeh2">Future ready talent Microsoft Azure</h2><br />
            <h3 id="resumeh3">Future ready talent Microsoft Azure · Internship</h3> <br />
            <h4 id="resumeh4">Feb 2022 - Aug 2023</h4><br />
            <li>Completed future-ready training with Microsoft Azure, mastering skills in cloud computing and related technologies.</li><br /><br />
            <h2 id="resumeh2">Front-End Developer Meta</h2><br />
            <h3 id="resumeh3">Coursera</h3> <br />
            <h4 id="resumeh4">2022</h4><br />
            <li>Front-End Developer Meta ReactJS Coursera: Comprehensive course on Coursera covering ReactJS, a popular JavaScript library for building user interfaces. Meta focuses on advanced topics, including state management, component lifecycle, and optimization techniques. Ideal for front-end developers seeking mastery in ReactJS. Offers practical projects and assignments to reinforce learning.</li><br /><br />
            <h2 id="resumeh2">YuWaah-India(UNICEF)</h2><br />
            <h3 id="resumeh3">Internshala · Internship</h3> <br />
            <h4 id="resumeh4">Jul 2020 - dec 2020 </h4><br />
            <li>YuWaah-India (UNICEF) internship offers opportunities to support youth empowerment and development initiatives in India.</li>
          </div>

          <div id="education" class="section">
            <header id="resumeheader">Education </header>
            <h2 id="resumeh2">Bachelor of technology <br />LNCT UNIVERSITY, Bhopal
</h2><br />
            <li>CGPA:- 8.32</li> <br />
          </div>

          <div id="skills" class="section">
            <header id="resumeheader">Skills </header>
            <ul>
              <li>Java</li>
              <li>Data Structures and Algorithms (DSA) - Basic</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Node.js & Express.js</li>
              <li>Git & GitHub</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>

          </div>
          <div id="about" class="section">
            <header id="resumeheader">About </header>
            Hey there! I'm a MERN Stack Developer currently interning at Persistent Systems, where I bring web applications to life. But beyond the screen, I'm also a nature photographer, capturing the beauty of the world around us.
          </div>
          {/* <div id="contact" class="section">
            <header id="resumeheader">Contact </header>
            raajaryan.tech<br />
            @raajaryan 2024<br />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
