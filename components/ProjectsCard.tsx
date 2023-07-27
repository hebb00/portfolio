import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import {Props} from "../utils/utils"


export default function ProjectsCard({ description, title, img, gitLink, demo }: Props) {
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
          <img src="/socials/github_white.svg" height="40" width="40" />
        </a>
      }
      <p>{description}</p>
      {demo == "" ? null : <a href={demo} className={styles.button} target='_blank' >
        Demo
      </a>
      }

    </motion.div>
  )
}
