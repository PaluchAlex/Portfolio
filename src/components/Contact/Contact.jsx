import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/email.png")}
                        alt="email icon"
                    />
                    <a href="mailto:alexpaluch43@gmail.com">
                        alexpaluch43@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedin.png")}
                        alt="linkedin icon"
                    />
                    <a href="https://www.linkedin.com/in/alex-paluch-5b9783271">
                        linkedin.com/in/alex-paluch
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/github.png")}
                        alt="github icon"
                    />
                    <a href="https://github.com/PaluchAlex">
                        github.com/PaluchAlex
                    </a>
                </li>
            </ul>
            <p className={styles.icons8}>
                Icons by <a href="https://icons8.com">Icons8.com</a>
            </p>
        </footer>
    );
};
