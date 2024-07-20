import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Ishika</h1>
        <p className={styles.description}>
          I am a full stack developer with a passion for building great
          products. I have a strong background
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:ishikacasley764@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href="/ishikaa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            View My Resume
          </a>
        </div>
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
