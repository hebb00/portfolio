"use client";
import React from 'react'
import ProjectsCard from './ProjectsCard'
import styles from '../styles/ProjectCard.module.css'
import { projectsInfo } from '../utils/utils'







export default function MyJourney() {

  return (
    <div className={styles.con} id='projects'>
      <div className={styles.conTxt}><h1 className='title'> Projects</h1>
      </div>
      <div className={styles.cardsContainer}>
        {projectsInfo.map(({ title, description, img, gitLink, demo, tech}: any) => (
          <ProjectsCard img={img} description={description} title={title} gitLink={gitLink} demo={demo} tech={tech} key={title} />
        ))
        }
      </div>
    </div>
  )
}
