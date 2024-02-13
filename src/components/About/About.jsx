import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    className={styles.aboutImg}
                    src={getImageUrl("about/standing.png")}
                    alt="me standing with my hands behind my head"
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            className={styles.skillImg}
                            src={getImageUrl("about/cursor.png")}
                            alt="cursor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend</h3>
                            <p>
                                I`m a frontend developer with experience in
                                building responsive and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            className={styles.skillImg}
                            src={getImageUrl("about/server.png")}
                            alt="server"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend</h3>
                            <p>
                                I have experience developing fast and optimised
                                back-end systems and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            className={styles.skillImg}
                            src={getImageUrl("about/android.png")}
                            alt="android"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Android</h3>
                            <p>
                                I have developed Android applications that
                                consume APIs and utilize databases
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
