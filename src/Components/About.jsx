import React from "react";
import styles from "../styles/About.module.css";
import Headings from "./Headings";
import Image from "next/image";

const About = () => {
  const qualificationArr = [
    "I have showcased adeptness in developing dynamic and interactive websites utilizing modern technologies such as HTML, CSS, and JavaScript (ES6+).",
    "Extensive expertise in frontend frameworks, particularly React.",
    "Solid understanding of responsive design principles and mobile-first development.",
    "Proficient in utilizing version control systems like Git for collaborative development purposes",
    "Skilled in collaborative teamwork, rapid adaptation to emerging technologies, and meeting project deadlines effectively.",
  ];
  return (
    <div id="aboutwrapper" className="pt-[5rem]">
      <Headings text={"About Me"} position={"start"} width={"w-[7rem]"} />
      <div id={styles.aboutW}>
        <div className={styles.aboutL}>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Hi! My name is{" "}
            <b>
              <i>Kehinde.</i>
            </b>
            I'm an enthusiastic software developer with a solid background in
            crafting innovative and effective solutions. Over the past year in
            the field, I've sharpened my skills in JavaScript programming
            language, frameworks
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          I work well in teams where different people with different skills work together. I enjoy working closely with designers, backend developers, and other team members to make projects happen. My strength is in understanding what a project needs and turning that into easy-to-use designs that everyone can use, focusing on making things easy to use and accessible.
          </p>
          <p>
            {"Below are key points highlighting my qualifications and accomplishments:"}
          </p>
          <div className={styles.techs} id="experience">
            {qualificationArr.map((q, i) => (
              <p key={i} data-aos={i % 2 == 0 ? "fade-right" : "flip-right"}>
                {q}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.aboutR}>
          <div className={styles.imgwrapper}>
            <Image
              data-aos="flip-up"
              src="/kenny.jpeg.png"
              width={300}
              height={400}
              alt="My Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
