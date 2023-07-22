"use client";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Sidebar } from "./Sidebar";
import { SOCIAL_LINKS, NAV_LINKS } from "../utils/utils";
import Link from "next/link";
import IconBars from "../public/Icons/IconBars";


export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [docsDropDown, setDocsDropDown] = useState<any>();

  return (
    <>
      <nav className={styles.navbar}>


        <div className={styles.links}>
        {/* <a id='logo' href={NAV_LINKS["ABOUT"]} target="_blank">
            Hebbs
          </a> */}
          {/* <Link href={NAV_LINKS["ABOUT"]}>
            About Me
          </Link> */}
          <Link  href={NAV_LINKS["PROJECTS"]}>
             Projects
          </Link>
          <Link  href={NAV_LINKS["SKILLS"]}>
            My Skills
          </Link>
          <Link href={NAV_LINKS["CONTACT"]}>
            Contact ME
          </Link>
        </div>

        <div className={styles.socials}>
          <a href={SOCIAL_LINKS.github} target="_blank">
            <img src="/socials/github_white.svg" height="40" width="40" />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank">
            <img src="/socials/twitter_white.svg" height="40" width="40" />
          </a>
        </div>

        {!openMenu && (
         
          <a 
          onClick={() => setOpenMenu((prev) => !prev)}

          >
            <IconBars color="#fff"
              height="400"
              width="400"
              className={styles.menu}
            />
          </a>
    
        )}
      </nav>
      {openMenu && <Sidebar setMenu={setOpenMenu} menu={openMenu} />}
    </>
  );
};