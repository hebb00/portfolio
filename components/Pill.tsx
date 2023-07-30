import React from 'react'
import styles from '../styles/Pill.module.css'
export default function Pill({tech}:any) {
  return (
    <span className={styles.pill}>
      {tech}
    </span>
  )
}
