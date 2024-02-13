/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Alex</h1>
                <p className={styles.description}>
                    I'm a computer science university graduate with a passion
                    for IT. Reach out if you'd like to learn more!
                </p>
                <a
                    href="mailto:alexpaluch43@gmail.com"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("avatar/alex2.png")}
                alt="Hero"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
