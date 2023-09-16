"use client";
import styles from './page.module.css'
import Hero from '../../components/Hero'
import MySkills from '../../components/MySkills'
import MyJourney from '../../components/MyJourney'
import Form from '../../components/Form'
import ParticlesComponent from '../../components/ParticlesComponent';

export default function Home() {
  return (
    <main className={styles.main}>
      <ParticlesComponent/>
      <Hero/>
      <MySkills/> 
      <MyJourney/>
      <Form/>
    </main>
  )
}
