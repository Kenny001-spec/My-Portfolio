"use client";
import React from "react";
import styles from "../styles/Intro.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Intro = () => {
  return (
    <div className={styles.introW}>
      <p data-aos="flip-right">Welcome! I'm</p>{" "}
      <h1 className={styles.name} data-aos="flip-right">
        Kehinde Abubakar
      </h1>
      <h2 data-aos="flip-left"> A web developer crafting exceptional digital experiences</h2>
      <p className={styles.desc} data-aos="fade-down">
        {
          "As a devoted Full Stack Developer, I thrive on creating immersive and user-centric digital journeys. Leveraging my keen sense of design aesthetics and profound insight into user interactions, i excel in transforming concepts into seamless, user-friendly, and dynamic front-end solutions."
        }{" "}
      </p>
    </div>
  );
};

export default Intro;
