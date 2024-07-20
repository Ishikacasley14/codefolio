import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <hi className={styles.title}>Hi, I am Ishika</hi>
        <p className={styles.description}>
          I am a full stack developer with a passion for building great
          products. I have a strong background
        </p>
        <a
          href="mailto:ishikacasley764@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
