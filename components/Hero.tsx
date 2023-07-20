"use client";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";


export default function Hero() {

  return (
    <motion.div className={styles.container} >
      <motion.div className={styles.txt}
      >
        <h1 className="title">
          Hi, I'm <span>Hebbs
          </span> <br />Software Engineer
        </h1>
        <p className="text">I have strong knowledge related to database, <br />React and UI/UX. 
         </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.button}>
          <a >
            Contact Me
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.bttn}
        >
          <a href="/mycv.pdf" download="cv">
            View CV
          </a>
        </motion.button>
      </motion.div>
      <img
        src="/hebb.svg"
        height={560}
        width={460}
      />
    </motion.div>
  );
};
