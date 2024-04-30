import React from "react";
import Headings from "./Headings";
import Image from "next/image";
import styles from "../styles/SomeProjects.module.css";
import Eachproject from "./Eachproject";

const SomeProjects = () => {
  return (
    <div className={styles.somprojectW} id="work">
      <Headings text={"Some of my projects"} position={"start"} width={"w-0"} />
      <div className="h-auto w-full flex flex-col lg:space-y-20 space-y-10 ">
        <Eachproject
          img={"/omnifood.png"}
          name={"Omnifood"}
          description={
            "I used this project to practice my frontEnd skills, I built the whole structure with HTML/CSS and JavaScript."
          }
          abs_pos={"right-[2rem]"}
          text_pos={"text-right"}
          lang1={"Html"}
          lang2={"CSS"}
          lang3={"Javascript"}
          end={"justify-end"}
          flex_Dir={"lg:flex-row flex-col-reverse"}
          github={"https://github.com/Kenny001-spec"}
          top={"top-[28%]"}
        />
        <Eachproject

          name={""}
          description={
            ""
          }
          text_pos={"text-left"}
          lang1={"React.js"}
          lang3={"Chart.js"}
          lang4={"API"}
          flex_Dir={"lg:flex-row-reverse flex-col-reverse"}
          github={"https://github.com/Kenny001-spec"}
          top={"top-[28%]"}
        />

        <Eachproject
          img={""}
          name={""}
          description={
            ""
          }
          abs_pos={"right-[2rem]"}
          text_pos={"text-right"}
          lang1={"Html"}
          lang2={"CSS"}
          lang5={""}
          end={"justify-end"}
          flex_Dir={"lg:flex-row flex-col-reverse"}
          github={"https://github.com/Kenny001-spec"}
          top={"top-[20%]"}
        />

        <Eachproject
          img={""}
          name={""}
          description={
            ""
          }
          text_pos={"text-left"}
          lang1={"React.js"}
          flex_Dir={"lg:flex-row-reverse flex-col-reverse"}
          github={"https://github.com/Kenny001-spec"}
          top={"top-[28%]"}
        />
      </div>
    </div>
  );
};

export default SomeProjects;
