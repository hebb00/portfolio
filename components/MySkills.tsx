"use client";
import React from 'react'
import styles from "../styles/skills.module.css";
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { skills } from "../utils/utils";

interface Props {
    link: string;
    discription: string;
    title: string;
    offscreen:number;
    duration:number
}




function SkillCard({ link, discription, title ,offscreen, duration}: Props) {
    const cardVariants: Variants = {
        offscreen: {
            x: offscreen
        },
        onscreen: {
            x: 50,
            rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: duration
            }
        }
    };
    return (
        <motion.div
            className={styles.cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{ scale: 1.2 }}
        >
            <div className={styles.splash} />
            <motion.div className={styles.card} variants={cardVariants}>
                <div className={styles.cardImg}>
                    <Image src={link} alt="skill" width={90} height={90} />
                </div>
                <h3>{title}</h3>
                <p>{discription}
                </p>
            </motion.div>
        </motion.div>
    );
}




export default function MySkills() {

    return (
        <div className={styles.container} id='skills'>
            <div className={styles.skilltitle}>
                <h1 className='title'>my skills</h1>
            </div>
            <div className={styles.cardsCon}>

                {skills.map(([link, discription, title, offscreen,duration]) => (
                    <SkillCard link={link} discription={discription} title={title} key={link} offscreen={offscreen} duration={duration}/>
                ))
                }
            </div>
        </div>
    )
}
