import React from 'react'
import ProjectsCard from './ProjectsCard'
import styles from '../styles/ProjectCard.module.css'
import {projects} from '../utils/utils'

export default function MyJourney() {
  return (
    <div className={styles.con} id='projects'>
      <div className={styles.conTxt}><h1 className='title'> Projects</h1>
      </div>
      <div className={styles.cardsContainer}>
        {projects.map(([title,discription,img,github]:any) => (
                    <ProjectsCard img={img} discription={discription} title={title} github={''} key={img} />
                ))
                }
         </div>
    </div>
  )
}
