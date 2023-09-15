import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import { motion } from "framer-motion";
import { Props } from "../utils/utils"
import Pill from './Pill';


export default function ProjectsCard({ description, title, img, gitLink, demo, tech }: Props) {
  return (
    <motion.div
      initial={{ borderRadius: 30 }}
      className={styles.card}
    >
      <div className={styles.imgCon}>
        <img
          alt='project'
          src={img} />
      </div>
      <h3>{title}</h3>
      {gitLink == "" ? null :
        <a href={gitLink} target="_blank">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/socials/github_white.svg" height="40" width="40" />
        </a>
      }
      <p>{description}</p>
      <div className={styles.pills}>
        {tech.map((item: any) => (
          <Pill tech={item} key={item} />
        ))
        }
      </div>

      {demo == "" ? null : <a href={demo} className={styles.button} target='_blank' >
        Website
      </a>
      }

    </motion.div>
  )
}
