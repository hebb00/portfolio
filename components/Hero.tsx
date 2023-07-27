"use client";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";


export default function Hero() {

  return (
    <motion.div className={styles.container} >
      <motion.div className={styles.txt}
      >
        <h1 className={styles.heroTxt}>
          Hi, I'm <span>Hebbs
          </span> <br />Software Engineer
        </h1>
        <p className="text">I have strong knowledge related to React, database and UI/UX.
        </p>
        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.button}>
            Contact Me
          </motion.button>
        </a>
      </motion.div>
      <img
        src="/hebb.svg"
        height={560}
        width={460}
      />
    </motion.div>
  );
};
