import { SOCIAL_LINKS } from "../utils/utils";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <a href={SOCIAL_LINKS["twitter"]} target="_blank">
            <Image src="/socials/twitter_white.svg" alt="twitter" width={40} height={40} />
          </a>
          <a href={SOCIAL_LINKS["github"]} target="_blank">
            <Image src="/socials/github_white.svg" alt="github" width={40} height={40} />
          </a>
        </div>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
