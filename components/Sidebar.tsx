"use client";
import Image from "next/image";
import styles from "../styles/Sidebar.module.css";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, NAV_LINKS } from "../utils/utils";
import { useState } from "react";
import IconAnglesLeft from "../public/Icons/IconAnglesLeft";

export const Sidebar = ({ setMenu }:any) => {
  const [docsOptions, setDocsOptions] = useState(false);
  const handleSetMenu = () => {
    setMenu((prev:any) => !prev);
  };
  const toggleDocsOptions = () => {
    setDocsOptions((prev) => !prev);
  };

  return (
    <div className={styles.linksAndSocials}>
      <a
         className={styles.goback}
         onClick={() => handleSetMenu()}
      >
      <IconAnglesLeft color="#fff" />

      </a>

      <div className={styles.links}>

        <a href={NAV_LINKS["ABOUT"]}>About Me</a>
        <a href={NAV_LINKS["CONTACT"]}>Contact Me</a>
        <a href={NAV_LINKS["SKILLS"]}>My Skills</a>
      </div>

      <div className={styles.socials}>
        <a href={SOCIAL_LINKS.github}>
          <motion.img src="/socials/github_white.svg" />
        </a>

        <a href={SOCIAL_LINKS.twitter}>
          <img src="/socials/twitter_white.svg" />
        </a>
      </div>
    </div>
  );
};