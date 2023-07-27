"use client";
import styles from "../styles/Sidebar.module.css";
import { SOCIAL_LINKS, NAV_LINKS } from "../utils/utils";
import IconXmark from "../public/Icons/IconXmark";

export const Sidebar = ({ setMenu }:any) => {
  const handleSetMenu = () => {
    setMenu((prev:any) => !prev);
  };

  return (
    <div className={styles.linksAndSocials}>
      <a
         onClick={() => handleSetMenu()}
      >
      <IconXmark
        height="30"
        width="30"
        className={styles.goback}
      />
      </a>
      <div className={styles.links}>
        <a href={NAV_LINKS["ABOUT"]}>About Me</a>
        <a href={NAV_LINKS["CONTACT"]}>Contact Me</a>
        <a href={NAV_LINKS["SKILLS"]}>My Skills</a>
      </div>
      <div className={styles.socials}>
        <a href={SOCIAL_LINKS.github}>
          <img src="/socials/github_white.svg" />
        </a>
        <a href={SOCIAL_LINKS.twitter}>
          <img src="/socials/twitter_white.svg" />
        </a>
      </div>
    </div>
  );
};