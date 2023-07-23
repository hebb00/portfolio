"use client";
import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import styles from '../styles/Form.module.css';
import Tilt from "react-parallax-tilt";

export default function Form() {

  const [isSent, setIsSent] = React.useState(false);
  const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3181vaf",
      "template_ju6utfm",
      form.current as HTMLFormElement,
      "LU9Es5IQ-hoM9Guik",
    ).then(
      (result) => {
        console.log(result, "result");
        let resetForm: HTMLFormElement;
        resetForm = document.getElementById("contact_form") as HTMLFormElement;
        resetForm.reset();
        setIsSent(true);
        alert('Thank you I will get back to you as soon as possible ! (:');
      },
      (error) => {
        console.error(error);
        setIsSent(false);
      }
    );
  };

  return (
    <div className={styles.con} id='contact'>
      <div className={styles.txt}>
        <h1 className='title'>Contact Me</h1>
      </div>
      <Tilt glareEnable={true} tiltMaxAngleX={10}
        tiltMaxAngleY={10} perspective={1000}
        glareColor={"rgba(255, 255, 255, 0.2)"}>
        <form
          className={styles.formCard}
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
        >
          <div className={styles.inputCon}>
            <label htmlFor="name">Name</label>
            <input
              placeholder="   Enter your Name"
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className={styles.inputCon}>
            <label htmlFor="email">E-mail</label>
            <input
              placeholder="   Enter your E-mail"
              id="email"
              type="email"
              name="e_mail"
              required
            />
          </div>
          <div className={styles.inputCon}>
            <label>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className={styles.inputCon}>
            <input
              className={styles.button}
              type="submit"
              value={!isSent ? 'Send' : 'Done!'}
            />
          </div>
        </form>
      </Tilt>
    </div>
  )
}
